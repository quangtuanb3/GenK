import axios from 'axios';

import { POST_API } from '../constant/appConstant';

export const postService = {
  getMainPosts: () => {
    return axios.get(POST_API + '?_sort=priority,id&_order=asc,desc&type_like=Main&_limit=8');
  },

  getAllPosts: () => {
    return axios.get(POST_API + '?_sort=type,priority,id&_order=asc,asc,desc&_limit=100');
  },

  getTimelinePosts: (page) => {
    return axios.get(POST_API + `?_sort=priority,id&_order=asc,desc&type_like=Timeline&_page=${page}_limit=4`);
  },

  getPostsByCategory: (category) => {
    // console.log(POST_API + `?_sort=priority,id&_order=asc,desc&type_like=Timeline&category_like=${category}&_limit=4`)
    return axios.get(POST_API + `?_sort=priority,id&_order=asc,desc&type_like=Timeline&category_like=${category}&_limit=4`);
  },
  getHotNewsPosts: () => {
    return axios.get(POST_API + '?_sort=priority,id&_order=asc,desc&type_like=HotNews&_limit=4');
  },
  getPostById: (id) => {
    return axios.get(POST_API + '/' + id);
  },
  create: (data) => {
    return axios.post(POST_API, data);
  },
  update: (data) => {
    return axios.patch(POST_API + '/' + data.id, data);
  },
  delete: (id) => {
    return axios.delete(POST_API + '/' + id);
  },
};
