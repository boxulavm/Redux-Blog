import React from 'react'

const AddBtn = () => {
    return (
        <div className='fixed-action-btn'>
            <a href="#add-post-modal" className="btn-floating btn-large purple modal-trigger z-depth-3">
            <i className="fas fa-plus fa-2x"></i>
            </a>
        </div>
    )
}

export default AddBtn
