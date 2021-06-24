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
                list: [
                    ...state.list, {
                        id: id,
                        value: value
                    }
                ]
            }
            case "edittodo":
                const {
                    Id, Value
                } = action.payload
                const newData = state.list.find((elem) => elem.id === Id)
                newData.value = Value
                console.log("id is", Id)
                console.log("value is", Value)
                console.log("value beomes", newData)
                return {
                    list: [
                        ...state.list,
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