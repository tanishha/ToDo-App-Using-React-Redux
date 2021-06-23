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
            id: new Date().getTime.toString(),
            value: value
        }
    }
}
const editTodo = () => {
    return {
        type: "edittodo"
    }
}
const deleteTodo = () => {
    return {
        type: "deletetodo"
    }
}
export {
    Incfunc,
    Decfunc,
    addTodo,
    editTodo,
    deleteTodo
}