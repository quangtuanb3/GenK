import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import { Table } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { formatDateTime } from "../utilities/utils";
import { useDispatch, useSelector } from "react-redux";
import { deletePostById, fetchAllPosts, changePost, updatePost } from "../redux/postSlice";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TYPES } from "../constant/appConstant";
import { faClipboard, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import '../myStyle.css'
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export const Dashboard = () => {
    const postsData = useSelector(state => state.post.posts);
    // const currentPost = useSelector(state => state.post.currentPost);
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(fetchAllPosts())
    }, [])

    function truncateStr(str, maxCharacter) {
        if (str.length > maxCharacter) {
            let truncatedStr = str.substring(0, maxCharacter);
            let lastSpace = truncatedStr.lastIndexOf(' ');
            return truncatedStr.substring(0, lastSpace) + " ...";
        } else {
            return str;
        }
    }

    const handleChangePriority = (e) => {
        const selectedOption = e.target.options[e.target.selectedIndex];
        const postId = selectedOption.getAttribute('data-id');

        dispatch(updatePost({ id: postId, priority: e.target.value })).unwrap().then(() => toast.success("Updated"))

    }
    const handleChangeType = (e) => {
        const selectedOption = e.target.options[e.target.selectedIndex];
        const postId = selectedOption.getAttribute('data-id');

        dispatch(updatePost({ id: postId, type: e.target.value })).unwrap().then(() => toast.success("Updated"))
    }
    const handleDelete = (postId) => {
        const isConfirmed = confirm("Are you sure? ")
        isConfirmed ? dispatch(deletePostById(postId)) : "";
    }

    return (
        <>
            <Layout>
                <Link to={"/dashboard/create"} className="btn btn-primary m-3">Create New</Link>
                <Table striped bordered hover variant="dark" size="md" style={{}}>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Type</th>
                            <th>Category</th>
                            <th>Created at</th>
                            <th>Priority</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {postsData && postsData.length > 0 ? postsData.map((post, index) => {
                            return (
                                <tr key={post.id}>
                                    <td>{index + 1}</td>
                                    <td title={post.title}>{truncateStr(post.title, 30)}</td>
                                    <td>{post.author}</td>
                                    <td>
                                        <select className="form-select"

                                            id="postType" aria-label="type"
                                            value={post.type} onChange={handleChangeType}>
                                            {TYPES.map(type => <option key={type} value={type} data-id={post.id}>{type}</option>)}
                                        </select>
                                        {/* {post.type} */}
                                    </td>
                                    <td>{post.category}</td>
                                    <td>{formatDateTime(post.created)}</td>
                                    <td>
                                        <select className="form-select" aria-label="Priority" value={post.priority} onChange={handleChangePriority}>
                                            <option value="1" data-id={post.id}>1</option>
                                            <option value="2" data-id={post.id}>2</option>
                                            <option value="3" data-id={post.id}>3</option>
                                            <option value="4" data-id={post.id}>4</option>
                                            <option value="5" data-id={post.id}>5</option>
                                            <option value="6" data-id={post.id}>6</option>
                                            <option value="7" data-id={post.id}>7</option>
                                        </select>

                                    </td>
                                    <td>
                                        <Link to={`/dashboard/edit/${post.id}`}>
                                            <FontAwesomeIcon icon={faClipboard} className="btn btn-primary me-3" />
                                        </Link>
                                        <FontAwesomeIcon icon={faTrash} onClick={() => handleDelete(post.id)} className="btn btn-danger" />
                                    </td>
                                </tr>
                            )

                        }) : <tr></tr>}
                    </tbody>
                </Table>


            </Layout>
        </>
    )
}