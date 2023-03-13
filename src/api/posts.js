import axios from "axios";
const sleep = n => new Promise(resolve => setTimeout(resolve, n));

export const getPosts = async () => {
    const response = await axios.get('/posts');
    return response.data;
};

export const getPostById = async (id) => {
    const response = await axios.get(`/posts/${id}`)
    return response.data;
};