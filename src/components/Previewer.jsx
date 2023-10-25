import React from 'react';
import '../styles/previewer.css';
import { HiArrowsExpand } from 'react-icons/hi';
import { LiaFreeCodeCamp } from 'react-icons/lia'


function Previewer() {
    return (
        <div id="previewer-wrapper">
            <div id="previewer-head">
                <span id='icon1'><LiaFreeCodeCamp fontSize={22} /></span>
                Previewer
                <span id='icon2'><HiArrowsExpand fontSize={22} /></span>
            </div>
            <div id='previewer'>
                
            </div>
        </div>

    )
}

export default Previewer