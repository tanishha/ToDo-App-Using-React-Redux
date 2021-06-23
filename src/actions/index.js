const Incfunc = () => {
    return {
        type: "Inc"
    }
}
const Decfunc = () => {
    return {
        type: "Dec"
    }
}

const addTodo = (value) => {
    return {
        type: 'addtodo',
        payload: {
            id: new Date().getSeconds(),
            value: value
        }
    }
}
const editTodo = (id) => {
    return {
        type: "edittodo"
    }
}
const deleteTodo = (id) => {
    return {
        type: "deletetodo",
        payload: {
            id
        }
    }
}
const removeTodo = () => {
    return {
        type: "removetodo",
    }
}
export {
    Incfunc,
    Decfunc,
    addTodo,
    editTodo,
    deleteTodo,
    removeTodo
}