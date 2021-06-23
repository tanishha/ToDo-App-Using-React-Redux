const initialData = {
    list: []
}

const todo = (state = initialData, action) => {
    switch (action.type) {
        case "addtodo":
            const {
                id, value
            } = action.payload;
            return {
                // ...state,
                list: [
                    ...state.list,{
                    id: id,
                    value: value
                    }
                ]
            }
            default:return state

    }
}

export {
    todo
}