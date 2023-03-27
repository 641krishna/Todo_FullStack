import React, { useEffect, useState } from 'react'
import { getAllTodos, addTodo } from '../utils/HandleApi';
import Lists from './Lists'
import './style.css'

const Todo = () => {

    const [todo, setTodo] = useState([]);
    const [text, setText] = useState("");

    useEffect(() => {
        getAllTodos(setTodo)
    }, [])

    return (
        <div className="app">
            <div className="container">
                <h1>ToDo App</h1>
                <div className="top">
                    <input type="text" placeholder='Add Todos..' value={text} onChange={(e) => setText(e.target.value)} />
                    <div className="add" onClick={() => addTodo(text, setText, setTodo)}>Add</div>
                </div>
                <div className="list">
                    {todo.map((item) => <Lists key={item._id} text={item.text} />)}

                </div>
            </div>
        </div>
    )
}

export default Todo