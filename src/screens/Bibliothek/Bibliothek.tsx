import { AuthContext } from "@components/AuthContext";
import React, { useEffect, useContext, useState, useRef } from "react";
import { LOCAL_API_SERVER, PROD_API_SERVER } from "../../consts";
import * as API from '../../generated/api';


// autogenerated
const prettyPrintBytes = (bytes) => {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
};

// autogenerated
function formatTimestamp(timestamp) {
    const date = new Date(timestamp * 1000); // Convert seconds to milliseconds
    return date.toLocaleString('en-US');
}

export const Bibliothek = () => {
    const fileInputRef = useRef(null);

    const authContext = useContext(AuthContext);
    const [storageData, setStorageData] = useState<API.StorageFiles>(null);
    // Hardcoded file data

    const storageApi = new API.StorageRoutesApi(undefined, process.env.REACT_ENV == 'DEV' ? LOCAL_API_SERVER : PROD_API_SERVER)

    // Event handlers for download and remove actions
    const handleDownload = (fileName: string) => {
        // Placeholder for download logic
        // console.log(`Downloading file: ${fileName}`);
        
        // https://stackoverflow.com/questions/41938718/how-to-download-files-using-axios
        (async () => {
            const response = await storageApi.apiV1StorageDownloadGet(fileName, { withCredentials: true, responseType: 'blob' })
                .then((response) => {
                    // create file link in browser's memory
                    const href = URL.createObjectURL(response.data);

                    // create "a" HTML element with href to file & click
                    const link = document.createElement('a');
                    link.href = href;
                    link.setAttribute('download', fileName); //or any other extension
                    document.body.appendChild(link);
                    link.click();

                    // clean up "a" element & remove ObjectURL
                    document.body.removeChild(link);
                    URL.revokeObjectURL(href);
                })
        })()
    };

    const handleRemove = (fileName: string, index: number) => {
        // Placeholder for remove logic
        // console.log(`Removing file: ${fileName}`);
        (async () => {
            const response = await storageApi.apiV1StorageRemoveDelete(fileName, { withCredentials: true })
            if (response.status == 200) {
                const updatedFiles = [...storageData.files];
                const removedFile = updatedFiles.splice(index, 1)[0];

                setStorageData((prevState) => ({
                    ...prevState,
                    files: updatedFiles,
                    remaining_bytes: prevState.remaining_bytes + removedFile.size
                }));
            }
        })()
    };

    const handleButtonClick = () => {
        // Trigger the click event of the hidden file input
        fileInputRef.current.click();
    };

    const handleFileChange = async (event) => {
        const selectedFile = event.target.files[0];
        console.log('Selected file:', selectedFile);

        try {
            // Check if the file already exists in the current file list
            const existingFileIndex = storageData.files.findIndex(file => file.filename === selectedFile.name);

            if (existingFileIndex !== -1) {
                // File with the same name already exists, replace it
                const updatedFiles = [...storageData.files];
                const replacedFile = await storageApi.apiV1StorageUploadPost(selectedFile, { withCredentials: true });

                updatedFiles[existingFileIndex] = replacedFile.data;

                setStorageData((prevState) => ({
                    ...prevState,
                    files: updatedFiles,
                    remaining_bytes: prevState.remaining_bytes - (replacedFile.data.size - storageData.files[existingFileIndex].size)
                }));
            } else {
                // File does not exist, add it to the list
                const response = await storageApi.apiV1StorageUploadPost(selectedFile, { withCredentials: true });

                if (response.status === 200) {
                    console.log('Uploaded file');
                    const filedetails = response.data;
                    const updatedFiles = [...storageData.files];
                    updatedFiles.push(filedetails);

                    setStorageData((prevState) => ({
                        ...prevState,
                        files: updatedFiles,
                        remaining_bytes: prevState.remaining_bytes - filedetails.size
                    }));
                }
            }
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    };


    useEffect(() => {
        (async () => {
            const response = await storageApi.apiV1StorageFilesGet({ withCredentials: true })
            if (response.status == 200) {
                const storageData: API.StorageFiles = response.data
                setStorageData(storageData)
            }
        })()
    }, [])

    return (
        <div className="mx-auto max-w-screen-xl">
            <div className="pt-10"></div>
            <div>
                <h2 className="text-4xl font-bold mb-4">Bibliothek</h2>
                <button className="ml-auto px-2 py-2 bg-c-green text-white rounded flex justify-center items-center" onClick={handleButtonClick}>
                    Upload
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M5 15l7-7 7 7" />
                    </svg>
                </button>
                {/* Hidden file input */}
                <input
                    ref={fileInputRef}
                    type="file"
                    style={{ display: 'none' }}
                    onChange={handleFileChange}
                />
            </div>

            {
                storageData &&
                <h2 className="text-2xl p-2"> Remaining Storage: {prettyPrintBytes(storageData.remaining_bytes)} </h2>
            }

            <div className="mx-auto overflow-y-auto max-h-[60vh] rounded-2xl border-2 border-c-main">
                <table className="min-w-full">
                    <thead className="bg-c-background">
                        <tr>
                            <th className="py-2 px-4 border-b">Filename</th>
                            <th className="py-2 px-4 border-b">Filesize</th>
                            <th className="py-2 px-4 border-b">Creation Date</th>
                            <th className="py-2 px-4 border-b">Modification Date</th>
                            <th className="py-2 px-4 border-b">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {storageData && storageData.files.map((file, idx) => (
                            <tr key={idx} className="text-center">
                                <td className="py-2 px-4 border-b">{file.filename}</td>
                                <td className="py-2 px-4 border-b">{prettyPrintBytes(file.size)}</td>
                                <td className="py-2 px-4 border-b">{formatTimestamp(file.created_at)}</td>
                                <td className="py-2 px-4 border-b">{formatTimestamp(file.modified_at)}</td>
                                <td className="py-2 px-4 border-b">
                                    <button
                                        className="focus:outline-none hover:text-blue-500 transition duration-300"
                                        aria-label="Download"
                                        onClick={() => handleDownload(file.filename)}
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                    <button
                                        className="focus:outline-none hover:text-red-500 transition duration-300 ml-2"
                                        aria-label="Remove"
                                        onClick={() => handleRemove(file.filename, idx)}
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>


        </div>
    )
}