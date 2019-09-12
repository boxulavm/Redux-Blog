import React, { useState } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'

import { connect } from 'react-redux'
import { addPost } from '../../actions/postActions'

const AddPostModal = ({ addPost }) => {

    const [ title, setTitle ] = useState('');
    const [ post_body, setPostBody ] = useState('');
    const [ img, setImg] = useState('');

    const onSubmit = () => {
        if(title === '' || post_body === ''){
            M.toast({ html: 'Please Enter Data!'})
        } else {
            const newPost = {
                title,
                post_body,
                img,
                date: new Date()
            }

            addPost(newPost);

            M.toast({ html: `${title} - post added !` })

            // Clear Fields
            setTitle('');
            setPostBody('');
            setImg('');
        }
    }

    return (
        <div id='add-post-modal' className='modal grey darken-3' style={modalStyle}>
            <div className="modal-content">
                <h4>Add New Blog Post</h4>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name="title" value={title} onChange={e => setTitle(e.target.value)} />
                        <label htmlFor="title" className='active'>
                            Post Title
                        </label>
                    </div>
                    <br/>
                    <div className="input-field">
                        <input type="text" name="post_body" value={post_body} onChange={e => setPostBody(e.target.value)} />
                        <label htmlFor="postBody" className='active'>
                            Post Body
                        </label>
                    </div>
                    <br/>
                    <div className="input-field">
                        <input type="text" name="img" value={img} onChange={e => setImg(e.target.value)} />
                        <label htmlFor="img" className='active'>
                            Image URL
                        </label>
                    </div>
                </div>
                <div className="modal-footer grey darken-3">
                    <a href="#!" onClick={onSubmit} className="modal-close waves-effect deep-purple btn z-depth-2">Save</a>
                </div>
            </div>
        </div>
    )
}

const modalStyle = {
    width: '75%',
    height: '75%'
};

export default connect(null, {addPost})(AddPostModal)
