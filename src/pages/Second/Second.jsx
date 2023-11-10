import React from 'react'
import "./Second.css"
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import Ourcard from '../../components/Ourcard/Ourcard';
function Second() {
    return (
        <div className='container5'>
            <div className="title5">Our Destinations</div>
            <div class="dropdown">
                <button class="dropbtn">Cinnamnon Dhonveli<KeyboardArrowDownOutlinedIcon /></button>
                <div class="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                </div>
                <div className="bootom5">
                    <div className="image5">
                        <div className="content5"><Ourcard /></div>
                        
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Second