# Provides a simple storage endpoints for CRUD operations
from flask import request, session, jsonify, current_app, send_from_directory
from auth.decor import login_required
from pathlib import Path
import json
from werkzeug.utils import secure_filename
import os
from apiflask import APIBlueprint, abort
from schemas.storage import *

storage_bp = APIBlueprint('storage_routes', __name__)

ALLOWED_EXTENSIONS = {'txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif', 'csv', 'xlsx'}

def get_user_folder_path():
    # Get the user's email from the session
    user_folder = session['user_storage_folder']
    if not user_folder:
        abort(500)

    root_path : Path = current_app.config.storage_library
    # Check if the user directory exists
    if not root_path.is_dir():
        abort(404)

    user_folder_path = root_path.joinpath(user_folder)
    user_folder_path.mkdir(exist_ok=True, parents=True)

    return user_folder_path

def get_directory_size(folder_path: Path):
    return sum(file.stat().st_size for file in  folder_path.rglob('*'))


@storage_bp.get('/files')
@storage_bp.output(StorageFiles)
@login_required
def list_files():
    user_folder_path = get_user_folder_path()

    folder_size = get_directory_size(user_folder_path)

    remaining_bytes = current_app.config['MAX_STORAGE_SIZE_PER_USER'] - folder_size

    # Use pathlib to get file information
    files_info = []
    for file_path in user_folder_path.iterdir():
        if file_path.is_file():
            file_info = {
                'filename': file_path.name,
                'size': file_path.stat().st_size,  # Size in bytes
                'created_at': file_path.stat().st_ctime,  # Creation time
                'modified_at': file_path.stat().st_mtime  # Modification time
            }
            files_info.append(file_info)

    # Return the JSON response
    return {'files': files_info, 'remaining_bytes': remaining_bytes}


@storage_bp.post('/upload')
@storage_bp.input(FileUpload, location='files')
@login_required
def upload_file(files_data : FileUpload):

    user_folder_path = get_user_folder_path()

    folder_size = get_directory_size(user_folder_path)

    file = files_data['file']

    file.stream.seek(0, os.SEEK_END)
    file_size = file.stream.tell()
    # print(file_size)
    if file_size + folder_size >= current_app.config['MAX_STORAGE_SIZE_PER_USER']:
        abort(400, message='max storage size reached')
    file.stream.seek(0)

    # Save the file with a secure filename
    filename = secure_filename(file.filename)

    # todo: Check if file is already present

    file.save(user_folder_path.joinpath(filename))

    return jsonify(message='Ok!')

@storage_bp.get('/download')
@storage_bp.input(DownloadFile, location='query')
@login_required
def download_file(query_data):
    user_folder_path = get_user_folder_path()

    # Check if the requested file exists
    file_path = user_folder_path.joinpath(query_data['filename'])
    if not file_path.exists():
        abort(404, message='file not found')

    return send_from_directory(user_folder_path, file_path.name, as_attachment=True)

@storage_bp.delete('/remove')
@storage_bp.input(RemoveFile, location='query')
@login_required
def remove_file(query_data):
    user_folder_path = get_user_folder_path()

    # Check if the requested file exists
    file_path = user_folder_path.joinpath(query_data['filename'])
    if not file_path.exists():
        abort(400, message='file not found')

    # Remove the file
    file_path.unlink()

    return jsonify(message='Ok!')
