import React, { useEffect } from 'react';
import useDocumentTitle from '../../hooks/useDocumentTitle';

export default function CuriousCat() {
  useDocumentTitle('The Curious Cat page');
  
  return (
    <div style={{ margin: '0 auto', width: 550 }}>
      <h2>Oh hey, I'm the curious cat, meow</h2>
      <img
        alt="curious cat"
        src="https://www.lovethispic.com/uploaded_images/8851-Curious-Cat.jpg?2" />
    </div>
  )
}
