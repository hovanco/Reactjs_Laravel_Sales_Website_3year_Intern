import React, { Component } from 'react'
import Navbar from '../navbar/Navbar';

class Blog extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="blog-containner">
          <h1>Blog page</h1>
        </div>
      </>
    )
  }
}
export default Blog;
