import axios from 'axios'

const baseUrl = 'http://localhost:8080'

const getAllTodos = (setTodo) => {
    axios
        .get(baseUrl)
        .then(({ data }) => {
            console.log('data---->', data);
            setTodo(data)
        })
}

const addTodo = (text, setText, setTodo) => {
    axios.post(`${baseUrl}/save`, { text })
        .then((data) => {
            console.log(data);
            setText("");
            getAllTodos(setTodo)
        })
}


export { getAllTodos, addTodo };

