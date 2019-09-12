import React, { useRef } from 'react'

import { connect } from 'react-redux'
import { searchPosts } from '../../actions/postActions'

const Search = ({ searchPosts }) => {
  const text = useRef('');

  const onChange = e => {
    searchPosts(text.current.value);
  }

    return (
        <div className="row search z-depth-2">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s12 l6 offset-l3">
              <input id="email" className="validate search-input" ref={text} onChange={onChange} placeholder='Search Posts' />
            </div>
          </div>
        </form>
      </div>
            
    )
}


export default connect(null, { searchPosts })(Search)
