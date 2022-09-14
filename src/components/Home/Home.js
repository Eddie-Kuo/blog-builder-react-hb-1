// import React from 'react';

import Preview from '../Preview/Preview';
import Editor from '../Editor/Editor';
import { useState } from 'react';

import './Home.css';

export default function Home() {
  // add useState calls here for title, subtitle, font, align, and text
  const [title, setTitle] = useState('');
  const [align, setAlignment] = useState('');
  const [font, setFont] = useState('');

  return (
    <main>
      {/* pass the state variables as props to the presentational components */}
      <Preview title={title} font={font} align={align} />
      <Editor title={title} 
        setTitle={setTitle} 
        setFont={setFont}
        setAlignment={setAlignment} />
    </main>
  );
}
