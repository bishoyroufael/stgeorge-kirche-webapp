
from apiflask import Schema
from apiflask.fields import File, String, Integer, Float, List, Nested
from apiflask.validators import FileType, FileSize

class FileUpload(Schema):
    file = File(validate=[FileType(['.txt', '.pdf', '.png', '.jpg', '.jpeg', '.gif', '.csv', '.xlsx']), FileSize(max='10 MiB')] , required=True)

class RemoveFile(Schema):
    filename = String(required=True)

class DownloadFile(Schema):
    filename = String(required=True)

class FileDetails(Schema):
    filename = String(required=True)
    size = Integer(required=True)
    created_at = Float()
    modified_at = Float()

class StorageFiles(Schema):
    files = List(Nested(FileDetails, required=True), required=True)
    remaining_bytes = Integer(required=True)
