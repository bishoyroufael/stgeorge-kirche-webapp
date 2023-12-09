# Provides a simple storage endpoints for CRUD operations
from flask import Blueprint, request, session, abort, jsonify, current_app, send_from_directory
from auth.decor import login_required
from pathlib import Path
import json
from werkzeug.utils import secure_filename

storage_bp = Blueprint('storage_routes', __name__)

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


ALLOWED_EXTENSIONS = {'txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif', 'csv', 'xlsx'}

@storage_bp.route('/files', methods=['GET'])
@login_required
def list_files():
    user_folder_path = get_user_folder_path()

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
    return jsonify(files_info)


@storage_bp.route('/upload', methods=['POST'])
@login_required
def upload_file():

    user_folder_path = get_user_folder_path()

    # Check if the post request has the file part
    if 'file' not in request.files:
        abort(400, description='file is missing')

    file = request.files['file']

    # Check if the file is selected
    if file.filename == '':
        abort(400, description='filename is malformed')

    # Check if the file has an allowed extension
    if '.' in file.filename and file.filename.rsplit('.', 1)[1].lower() not in ALLOWED_EXTENSIONS:
        abort(400, description='file type is not allowed')


    # Save the file with a secure filename
    filename = secure_filename(file.filename)

    # todo: Check if file is already present

    file.save(user_folder_path.joinpath(filename))

    return jsonify(message='Ok!')

@storage_bp.route('/download/<filename>', methods=['GET'])
@login_required
def download_file(filename):
    user_folder_path = get_user_folder_path()

    # Check if the requested file exists
    file_path = user_folder_path.joinpath(filename)
    if not file_path.exists():
        abort(404, description='file not found')

    return send_from_directory(user_folder_path, filename, as_attachment=True)

@storage_bp.route('/remove/<filename>', methods=['POST'])
@login_required
def remove_file(filename):
    user_folder_path = get_user_folder_path()

    # Check if the requested file exists
    file_path = user_folder_path.joinpath(filename)
    if not file_path.exists():
        abort(400, description='file not found')

    # Remove the file
    file_path.unlink()

    return jsonify(message='Ok!')
