import React from 'react'
import Moment from 'react-moment'

import { connect } from 'react-redux'
import { deletePost, setCurrent } from '../../actions/postActions'

import M from 'materialize-css/dist/js/materialize.min.js'

const Post = ({ post, deletePost, setCurrent }) => {

    const onDelete = () => {
      deletePost(post.id);
      M.toast({ html: 'Post Deleted' })
    }

    return (
        <div className="row ">
        <div className="col s12 m12 l6 offset-l3">
          <div className="card grey darken-2 z-depth-2">
            <div className="card-image">
              <img src={post.img} alt='Post Showcase' />
              <span className="card-title">{post.title}</span>
            </div>
            <div className="card-content">
              <p>{post.post_body}</p>
              <br/>
              <i><Moment format='MMMM Do YYYY, h:mm:ss a'>{post.date}</Moment></i>
            </div>
            <div className="card-action grey darken-3">
            <a onClick={() => setCurrent(post)} href="#edit-post-modal" className='modal-trigger'>Edit</a>
            <a href="#!" onClick={onDelete} className='modal-trigger secondary-content'><i className="fas fa-trash-alt red-text"></i></a>
            </div>
          </div>
        </div>
      </div>
    )
}

export default connect(null, { deletePost, setCurrent })(Post)
