import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { postService } from '../services/postService';

export const fetchMainPosts = createAsyncThunk(
    'post/fetchMainPosts',
    async () => {
        const response = await postService.getMainPosts();
        return response.data;
    }
);
export const fetchAllPosts = createAsyncThunk(
    'post/fetchAllPosts',
    async () => {
        const response = await postService.getAllPosts();
        return response.data;
    }
);

export const fetchTimelinePosts = createAsyncThunk(
    'post/fetchTimelinePosts',
    async (page) => {
        const response = await postService.getTimelinePosts(page);
        return response.data;
    }
);
export const fetchPostsByCategory = createAsyncThunk(
    'post/fetchPostsByCategory',
    async (category) => {
        const response = await postService.getPostsByCategory(category);
        return response.data;
    }
);
export const fetchAllHotNEWS = createAsyncThunk(
    'post/fetchAllHotNEWS',
    async () => {
        const response = await postService.getHotNewsPosts();
        return response.data;
    }
);
export const fetchPostById = createAsyncThunk(
    'post/fetchPostById',
    async (id) => {
        const response = await postService.getPostById(id);
        return response.data;
    }
);

export const createNewPost = createAsyncThunk(
    'post/createNewPost',
    async (data) => {
        const response = await postService.create(data);
        return response.data;
    }
);

export const updatePost = createAsyncThunk('music/updatePost', async (data) => {
    const response = await postService.update(data);
    return response.data;
});
export const deletePostById = createAsyncThunk('music/deletePostById', async (id) => {
    const response = await postService.delete(id);
    return response;
});

export const postSlice = createSlice({
    name: 'post',
    initialState: {
        fetching: false,
        posts: [],
        categoryPosts: {
            Mobile: [],
            Technology: [],
            Gaming: [],
        },
        timelinePosts: [],
        currentPost: {
            title: "",
            author: "",
            priority: 1,
            category: "",
            type: "",
            poster: "",
            subTitle: "",
            content: "",
        },
    },
    reducers: {
        changePost: (state, action) => {
            // console.log("action change", state, action)
            const { content, ...otherFields } = action.payload;
            return {
                ...state,
                currentPost: {
                    content,
                    ...otherFields,
                },
            };
        },
        resetCurrentPost: (state, action) => {
            state.currentPost = {
                title: "",
                author: "",
                priority: 1,
                category: "",
                type: "",
                poster: "",
                subTitle: "",
                content: "",
            };
        }

    },

    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchMainPosts.fulfilled, (state, action) => {
            state.posts = action.payload;
        });

        builder.addCase(fetchAllHotNEWS.fulfilled, (state, action) => {
            state.hotNEWS = action.payload;
        });

        builder.addCase(fetchAllPosts.fulfilled, (state, action) => {
            state.posts = action.payload;
        });

        builder.addCase(fetchTimelinePosts.fulfilled, (state, action) => {
            console.log(action.meta.arg)
            if (action.meta.arg == 1) {
                state.timelinePosts = action.payload;
            } else {
                state.timelinePosts = [...state.timelinePosts, ...action.payload]
            }
        });

        builder.addCase(fetchPostsByCategory.fulfilled, (state, action) => {
            // console.log(action.payload)
            if (action.payload.length > 0) {
                const keyObj = action.payload[0].category;
                state.categoryPosts[keyObj] = action.payload;
            }
        });

        builder.addCase(fetchPostById.fulfilled, (state, action) => {
            state.currentPost = action.payload;
        });

        builder.addCase(createNewPost.fulfilled, (state, action) => {
            state.posts.unshift(action.payload);
        });

        builder.addCase(updatePost.fulfilled, (state, action) => {
            state.posts = state.posts.map((item) => {
                if (item.id === action.payload.id) {
                    return action.payload;
                }
                return item;
            });
        });

        builder.addCase(deletePostById.fulfilled, (state, action) => {
            state.posts = state.posts.filter(post => post.id != action.meta.arg)
        });

    },
});

// Action creators are generated for each case reducer function
export const {
    changePost,
    resetCurrentPost

} = postSlice.actions;

export default postSlice.reducer;
