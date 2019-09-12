import { GET_POSTS, SET_LOADING, POSTS_ERROR, ADD_POST, DELETE_POST, SET_CURRENT, CLEAR_CURRENT, UPDATE_POST, SEARCH_POSTS } from './types'


// Get Posts From Server
export const getPosts = () => async dispatch => {
    try {
        setLoading();

        const res = await fetch('http://localhost:5000/posts');
        const data = await res.json();

        dispatch({
            type: GET_POSTS,
            payload: data
        })
    } catch (err ) {
        dispatch({
            type: POSTS_ERROR,
            payload: err.response.data
        })
    }

};

// Add New Post to Server
export const addPost = (post) => async dispatch => {
    try {
        setLoading();

        const res = await fetch('http://localhost:5000/posts', {
            method: 'POST',
            body: JSON.stringify(post),
            headers: {
                'Content-Type':'application/json'
            }
        });
        const data = await res.json();

        dispatch({
            type: ADD_POST,
            payload: data
        })
    } catch (err ) {
        dispatch({
            type: POSTS_ERROR,
            payload: err.response.data
        })
    }

};

// Delete Posts From Server
export const deletePost = (id) => async dispatch => {
    try {
        setLoading();

        await fetch(`http://localhost:5000/posts/${id}`, {
            method: 'DELETE'
        });

        dispatch({
            type: DELETE_POST,
            payload: id
        })
    } catch (err ) {
        dispatch({
            type: POSTS_ERROR,
            payload: err.response.data
        })
    }

};

// update Post
export const updatePost = (post) => async dispatch => {
    try {
        setLoading();

        const res = await fetch(`http://localhost:5000/posts/${post.id}`, {
            method: 'PUT',
            body: JSON.stringify(post),
            headers: {
                'Content-Type':'application/json'
            }
        });

        const data = await res.json();

        dispatch({
            type: UPDATE_POST,
            payload: data
        })
    } catch (err ) {
        dispatch({
            type: POSTS_ERROR,
            payload: err.response.data
        })
    }

};

// Search Posts From Server
export const searchPosts = (text) => async dispatch => {
    try {
        setLoading();

        const res = await fetch(`http://localhost:5000/posts?q=${text}`);
        const data = await res.json();

        dispatch({
            type: SEARCH_POSTS,
            payload: data
        })
    } catch (err ) {
        dispatch({
            type: POSTS_ERROR,
            payload: err.response.data
        })
    }

};

// Set Current Post
export const setCurrent = post => {
    return {
        type: SET_CURRENT,
        payload: post
    }
}

// Clear Current Post
export const clearCurrent = () => {
    return {
        type: CLEAR_CURRENT
    }
}

// Set Loading to TRUE
export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}