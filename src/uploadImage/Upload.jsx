import { Cloudinary } from "@cloudinary/url-gen";
import axios from "axios";
import { useState } from "react";



export const Upload = () => {
    const cloudName = 'dvv61dvht';
    const unsignedUploadPrefix = 'qnwjqsbm';
    const API_URL = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;

    const [imageUrl, setImageUrl] = useState("");

    const [selectedImage, setSelectedImage] = useState()


    const handleFileUpload = () => {
        // get the selected file from the input
        const file = selectedImage;
        // create a new FormData object and append the file to it
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", unsignedUploadPrefix);
        // make a POST request to the File Upload API with the FormData object and Rapid API headers
        axios
            .post(API_URL, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then((response) => {
                // handle the response
                setImageUrl(response.data.url)
            })
            .catch((error) => {
                // handle errors
                console.log(error);
            });
    };
}