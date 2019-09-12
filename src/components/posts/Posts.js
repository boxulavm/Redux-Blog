import React, { useEffect } from 'react'

import { connect } from 'react-redux'
import { getPosts } from '../../actions/postActions'

import Preloader from '../layout/Preloader'
import Post from './Post'


const Posts = ({ post: { posts, loading }, getPosts }) => {

    useEffect(() => {
        getPosts();
        // eslint-disable-next-line
    }, []);

    

    if(loading || posts === null) {
        return <Preloader />
    }

    return (
        <div className='posts'>
            <h2 className='center-align'>Blog Posts</h2>
            {!loading && postMessage.length === 0 ? (<p>No Posts</p>) : (
                posts.reverse().map(post => <Post  post={post} key={post.id} />)
            )}
        </div>
    )
}

const mapStateToProps = state => ({
    post: state.post
});

export default connect(mapStateToProps, { getPosts })(Posts);
