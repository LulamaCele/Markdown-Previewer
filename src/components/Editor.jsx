import React from 'react';
import { useState } from 'react';
import '../styles/editor.css';
import { HiArrowsExpand } from 'react-icons/hi';
import { LiaFreeCodeCamp } from 'react-icons/lia'


function Editor() {

    const [content, setContent] = useState('this is starting content')

    const handleTextareaChange = (event) => {
        setContent(event.target.value)
    }

    return (
        <div id='editor-wrapper'>
            <div id='editor-head'>
                <span id='icon1'><LiaFreeCodeCamp fontSize={22} /></span>
                Editor
                <span id='icon2'><HiArrowsExpand fontSize={22} /></span>
            </div>
            <textarea name="editor" id="editor" cols="80" rows="12" value={content} onChange={handleTextareaChange}>
            </textarea>
        </div>
    )
}

export default Editor