import React, { useEffect, useState } from 'react'
import { getAllTodos, addTodo, updateTodo, deleteTodo } from '../utils/HandleApi';
import Lists from './Lists'
import './style.css'

const Todo = () => {

    const [todo, setTodo] = useState([]);
    const [text, setText] = useState("");
    const [isUpdating, setIsUpdating] = useState(false);
    const [todoId, setTodoId] = useState("");

    useEffect(() => {
        getAllTodos(setTodo)
    }, [])

    const updateMode = (_id, text) => {
        setIsUpdating(true);
        setText(text)
        setTodoId(_id)
    }

    return (
        <div className="app">
            <div className="container">
                <h1>ToDo App</h1>
                <div className="top">
                    <input type="text" placeholder='Add Todos..' value={text} onChange={(e) => setText(e.target.value)} />
                    <div className="add"
                        onClick={isUpdating ?
                            () => updateTodo(todoId, text, setTodo, setText, setIsUpdating)
                            : () => addTodo(text, setText, setTodo)}>
                        {isUpdating ? "Update" : "Add"}
                    </div>
                </div>
                <div className="list">
                    {todo.map((item) => <Lists
                        key={item._id}
                        text={item.text}
                        updateMode={() => updateMode(item._id, item.text)}
                        deleteItem={() => deleteTodo(item._id, setTodo)} />)}
                </div>
            </div>
        </div>
    )
}

export default Todo