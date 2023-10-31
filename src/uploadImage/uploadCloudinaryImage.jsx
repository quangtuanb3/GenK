// import { faL } from "@fortawesome/free-solid-svg-icons";
// import axios from "axios";
// import { useState } from "react";
// // import { useUpload } from "@cloudinary/react";

// export const useCloudinaryUpload = (cloudName, unsignedUploadPrefix) => {
//     const [imageUrl, setImageUrl] = useState("");
//     const [selectedImage, setSelectedImage] = useState("");
//     const [uploading, setUploading] = useState(false);

//     const API_URL = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;

//     const handleFileUpload = (selectedImage) => {
//         // get the selected file from the input
//         const file = selectedImage;
//         // create a new FormData object and append the file to it
//         const formData = new FormData();
//         formData.append("file", file);
//         formData.append("upload_preset", unsignedUploadPrefix);
//         // make a POST request to the File Upload API with the FormData object and Rapid API headers

//         axios
//             .post(API_URL, formData, {
//                 headers: {
//                     "Content-Type": "multipart/form-data",
//                 },
//             })
//             .then((response) => {
//                 // handle the response
//                 setImageUrl(response.data.url)
//                 console.log(response.data.url)
//                 setUploading(false)
//             })
//             .catch((error) => {
//                 // handle errors
//                 console.log(error);
//                 setUploading(false)
//             });
//     };

//     return {
//         handleFileUpload,
//         imageUrl,
//         setSelectedImage,
//         uploading,
//         setUploading,
//         selectedImage,
//     };
// };

import axios from "axios";

const uploadCloudinaryImage = (cloudName, unsignedUploadPrefix) => {
    const API_URL = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;

    const uploadImage = async (selectedImage) => {
        try {
            const formData = new FormData();
            formData.append("file", selectedImage);
            formData.append("upload_preset", unsignedUploadPrefix);

            const response = await axios.post(API_URL, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            return response.data.url;
        } catch (error) {
            console.error("Error uploading image: ", error);
            return null;
        }
    };

    return uploadImage;
};

export default uploadCloudinaryImage;
