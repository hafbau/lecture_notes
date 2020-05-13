import React from 'react'

import './masonry.css';
import MasonryCSS from 'react-masonry-css';

function Masonry({ children }) {
  return (
    <MasonryCSS
      breakpointCols={5}
      className='my-masonry-grid'
      columnClassName='my-masonry-grid_column'>
      {children}
    </MasonryCSS>
  )
}

export default Masonry;