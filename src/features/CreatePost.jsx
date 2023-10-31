import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import { Button, Form, Table } from "react-bootstrap";
import unidecode from 'unidecode';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from "react-redux";
import { changePost, createNewPost, fetchAllPosts, resetCurrentPost } from "../redux/postSlice";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboard, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Formik } from "formik";
import { object, string, number, date, array, mixed } from 'yup';
import defaultPoster from '../assets/web_images/defaultPoster.webp';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import '../myStyle.css'
import '../myStyle.css'
import uploadCloudinaryImage from "../uploadImage/uploadCloudinaryImage";
import { CLOUD_NAME, UNSIGNED_UPLOAD_PREFIX, TYPES, CATEGORIES } from "../constant/appConstant";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
// import { useQuill } from "react-quilljs";

export const CreatePost = () => {
    const postsData = useSelector(state => state.post.posts);
    const currentPost = useSelector(state => state.post.currentPost);
    const [selectedImage, setSelectedImage] = useState(null);
    const [uploading, setUploading] = useState(false);


    const dispatch = useDispatch()

    const uploadImage = uploadCloudinaryImage(CLOUD_NAME, UNSIGNED_UPLOAD_PREFIX);

    let previewImage = "";
    if (selectedImage) {
        previewImage = URL.createObjectURL(selectedImage)
    }


    const postSchema = object().shape({
        title: string().required('Title is required').min(20, 'Too Short!').max(400, 'Too Long!'),
        author: string().required('Author is required').min(5, 'Too Short!').max(50, 'Too Long!'),
        category: string().required('Category is required'),
        type: string().required('Type is required'),
        priority: number().required('Priority is required').min(1).max(7),
        subTitle: string().required('Sub Title is required'),
        poster: mixed().required("Poster is required")
        // poster: mixed()
        //     .test('required', "Please upload a Poster Image", (value) => {
        //         return value != null
        //     })
        //     .test({
        //         message: `File too big, can't exceed ${MAX_FILE_SIZE}`,
        //         test: (file) => {
        //             console.log(file?.size)
        //             const isValid = file?.size < MAX_FILE_SIZE;
        //             return isValid;
        //         }
        //     })
    });



    const initialValues = {
        title: "",
        author: "",
        priority: 1,
        category: "",
        type: "",
        poster: "",
        subTitle: "",
        content: ""
    }


    useEffect(() => {
        dispatch(fetchAllPosts())
        dispatch(resetCurrentPost())
    }, [])

    const convertToSlug = (text) => {
        return unidecode(text)
            .toLowerCase()
            .replace(/[^\w\s-]/g, '') // Remove non-word characters
            .replace(/\s+/g, '-') // Replace spaces with -
            .replace(/--+/g, '-') // Replace multiple - with single -
            .trim(); // Trim - from start and end of text
    };

    const handleFormSubmit = async (values) => {
        // alert("submitting");
        setUploading(true);
        const url = await uploadImage(selectedImage);
        if (url) {
            setUploading(false);
        } else {
            alert("Upload Poster fail! Please try again")
            return
        }

        if (!uploading) {
            const titleSlug = convertToSlug(currentPost.title);
            const createdAt = new Date();

            // Check if the currentPost has an id and create a new object without the id property
            const { id, ...postWithoutId } = currentPost;

            const newPost = { ...postWithoutId, poster: url, created: createdAt, titleSlug: titleSlug };
            // console.log(newPost);
            dispatch(createNewPost(newPost)).unwrap().then(() => toast.success("Created"));
        }

    };
    const handleChangePost = (e) => {
        // alert("change")
        const { name, value } = e.target;
        const newPost = {
            ...currentPost,
            [name]: value
        };

        dispatch(changePost(newPost));
    };

    const handleChangeImage = (e) => {
        setSelectedImage(e.target.files[0]);

    }

    const handleChangePostContent = (value) => {
        const newPost = { ...currentPost, content: value };
        // console.log(newPost)
        dispatch(changePost(newPost))
    }

    return (
        <Layout>
            <Link to={"/dashboard"} className="btn btn-primary m-3">Back</Link>
            <div className="container mt-4">
                <Formik
                    initialValues={initialValues}
                    validationSchema={postSchema}
                    onSubmit={(values) => {
                        handleFormSubmit(values);
                    }}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                    }) => (
                        <Form onSubmit={handleSubmit} >
                            <div className="row mb-10">

                                <div className="col-6">
                                    <Form.Group className="mb-3 col-12" >
                                        <Form.Control
                                            id="poster"
                                            hidden={true}
                                            name="poster"
                                            type="file"
                                            value={values.poster}
                                            onChange={(e) => {
                                                handleChange(e); // Formik's handleChange
                                                handleChangeImage(e); // Custom handleChangePost
                                            }}
                                            onBlur={handleBlur}
                                            isInvalid={touched.poster && !!errors.poster}
                                        >

                                        </Form.Control>
                                        <Form.Label htmlFor="poster" className="mt-2">

                                            <img
                                                src={previewImage || defaultPoster}
                                                style={{ width: "100%", height: "100%", overflow: "hidden" }}>
                                            </img>
                                        </Form.Label>
                                        <Form.Control.Feedback type="invalid">
                                            {errors.poster}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </div>
                                <div className="col-6">
                                    <Form.Group className="mb-3 col-12" controlId="postTitle">
                                        <Form.Label>Title</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="title"
                                            placeholder="Enter product title"
                                            value={values.title}
                                            onChange={(e) => {
                                                handleChange(e); // Formik's handleChange
                                                handleChangePost(e); // Custom handleChangePost
                                            }}
                                            onBlur={handleBlur}
                                            isInvalid={touched.title && !!errors.title}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.title}
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group className="mb-3 col-12" controlId="postSubTitle">
                                        <Form.Label>Sub Title</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="subTitle"
                                            placeholder="Enter product sub title"
                                            value={values.subTitle}
                                            onChange={(e) => {
                                                handleChange(e); // Formik's handleChange
                                                handleChangePost(e); // Custom handleChangePost
                                            }}
                                            onBlur={handleBlur}
                                            isInvalid={touched.subTitle && !!errors.subTitle}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.subTitle}
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group className="mb-3 col-12" controlId="postAuthor">
                                        <Form.Label>Author</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="author"
                                            placeholder="Enter product author"
                                            value={values.author}
                                            onChange={(e) => {
                                                handleChange(e); // Formik's handleChange
                                                handleChangePost(e); // Custom handleChangePost
                                            }}
                                            onBlur={handleBlur}
                                            isInvalid={touched.author && !!errors.author}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.author}
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group className="mb-3 col-12" controlId="postType">
                                        <Form.Label>Type</Form.Label>
                                        <Form.Select
                                            name="type"
                                            value={values.type}
                                            onChange={(e) => {
                                                handleChange(e); // Formik's handleChange
                                                handleChangePost(e); // Custom handleChangePost
                                            }}
                                            onBlur={handleBlur}
                                            isInvalid={touched.type && !!errors.type}
                                        >
                                            {/* <option value="">Select an type</option> */}
                                            {TYPES.map((type) => (
                                                <option key={type} value={type}>
                                                    {type}
                                                </option>
                                            ))}
                                        </Form.Select>
                                        <Form.Control.Feedback type="invalid">
                                            {errors.type}
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group className="mb-3 col-12" controlId="postCategory">
                                        <Form.Label>Category</Form.Label>
                                        <Form.Select
                                            name="category"
                                            value={values.category}
                                            onChange={(e) => {
                                                handleChange(e); // Formik's handleChange
                                                handleChangePost(e); // Custom handleChangePost
                                            }}
                                            onBlur={handleBlur}
                                            isInvalid={touched.category && !!errors.category}
                                        >
                                            <option value="">Select an category</option>
                                            {CATEGORIES.map((category, index) => (
                                                <option key={index} value={category}>
                                                    {category}
                                                </option>
                                            ))}
                                        </Form.Select>
                                        <Form.Control.Feedback type="invalid">
                                            {errors.category}
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group className="mb-3 col-12" controlId="postPriority">
                                        <Form.Label>Priority</Form.Label>
                                        <Form.Select
                                            name="priority"
                                            value={values.priority}
                                            onChange={(e) => {
                                                handleChange(e); // Formik's handleChange
                                                handleChangePost(e); // Custom handleChangePost
                                            }}
                                            onBlur={handleBlur}
                                            isInvalid={touched.priority && !!errors.priority}
                                        >
                                            {/* <option value="">Select an type</option> */}
                                            {[1, 2, 3, 4, 5, 6, 7].map((priority, index) => (
                                                <option key={priority} value={priority}>
                                                    {priority}
                                                </option>
                                            ))}
                                        </Form.Select>
                                        <Form.Control.Feedback type="invalid">
                                            {errors.type}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </div>
                                <div className="col-12">
                                    <ReactQuill theme="snow" value={currentPost.content}
                                        onChange={handleChangePostContent} style={{ height: 400 }} />
                                </div>

                            </div>

                            <div className="d-flex gap-2 justify-content-end " style={{ padding: 50 }} >
                                <Button type="submit" variant="primary" disabled={uploading}>
                                    Save changes
                                </Button>

                                <Button type="button" variant="secondary">
                                    Clear
                                </Button>

                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </Layout>
    )
}