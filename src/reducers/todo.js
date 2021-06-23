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
                    ...state.list, {
                        id: id,
                        value: value
                    }
                ]
            }
            case "deletetodo":
                const newList = state.list.filter((elem) => elem.id !== action.payload.id)
                return {
                    list: newList
                }
                case "removetodo":
                    return {
                        list: []
                    }
                    default:
                        return state

    }
}

export {
    todo
}