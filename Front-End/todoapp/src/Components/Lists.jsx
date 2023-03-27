import React from 'react'
import {BiEdit} from "react-icons/bi"
import {AiFillDelete} from "react-icons/ai"
import './style.css'

const Lists = ({ text, updateMode, deleteItem }) => {
    return (
        <div className="todo">
            <div className="text">{text}</div>
            <div className="icons">
                <BiEdit className="icon" onClick={updateMode}></BiEdit>
                <AiFillDelete className="icon" onClick={deleteItem}></AiFillDelete>
                
            </div>
        </div>
    )
}

export default Lists