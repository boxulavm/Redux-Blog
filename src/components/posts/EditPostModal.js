import React, { useState, useEffect } from 'react'

import { connect } from 'react-redux'
import { updatePost } from '../../actions/postActions'

import M from 'materialize-css/dist/js/materialize.min.js'

const EditPostModal = ({ current, updatePost }) => {

    const [ title, setTitle ] = useState('');
    const [ post_body, setPostBody ] = useState('');
    const [ img, setImg] = useState('');

    useEffect(() => {
        if(current) {
            setTitle(current.title);
            setPostBody(current.post_body);
            setImg(current.img);
        }
    }, [current])

    const onSubmit = () => {
        if(title === '' || post_body === ''){
            M.toast({ html: 'Please Enter Data!'})
        } else {
            const updPost = {
                id: current.id,
                title,
                post_body,
                img,
                date : new Date()
            }

            updatePost(updPost);
            M.toast({html:  `Post "${title}" updated` })

            // Clear Fields
            setTitle('');
            setPostBody('');
            setImg('');
        }
    }

    return (
        <div id='edit-post-modal' className='modal grey darken-3' style={modalStyle}>
            <div className="modal-content">
                <h4>Edit Blog Post</h4>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name="title" value={title} onChange={e => setTitle(e.target.value)} />
                    </div>
                    <br/>
                    <div className="input-field">
                        <input type="text" name="post_body" value={post_body} onChange={e => setPostBody(e.target.value)} />
                    </div>
                    <br/>
                    <div className="input-field">
                        <input type="text" name="img" value={img} onChange={e => setImg(e.target.value)} />
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

const mapStateToProps = state => ({
    current: state.post.current
})

export default connect(mapStateToProps, { updatePost } )(EditPostModal);
