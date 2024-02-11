import { useState } from 'react';

export const useFileUpload = () => {
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const uploadFile = async (fileData) => {
        try {
            setIsLoading(true);

            // Replace 'https://your-backend-api.com/upload' with your actual backend API endpoint
            const response = await fetch('https://c92a-14-194-211-58.ngrok-free.app/api/v1/fileUpload', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(fileData),
            });

            if (response.ok) {
                const result = await response.json();
                setUploadedFiles((prevFiles) => [...prevFiles, result]);
            } else {
                const errorData = await response.json();
                setError(errorData.message);
            }
        } catch (error) {
            setError('Error during file upload');
        } finally {
            setIsLoading(false);
        }
    };

    return {
        uploadedFiles,
        isLoading,
        error,
        uploadFile,
    };
};
