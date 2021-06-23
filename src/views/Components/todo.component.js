import React from 'react'
import todo from "../../todo.svg";
import { addTodo,editTodo,deleteTodo,removeTodo } from '../../actions';
import { useDispatch,useSelector } from 'react-redux';
const TodoComponent = () => {
    const[inputData,setInputData]=React.useState(" ")
    const dispatch=useDispatch();
    const list=useSelector((state)=>state.todo.list)


    return (
        <div className="main-div">
                <div className="child-div">
                    <figure>
                        <img src={todo} alt="todologo" />
                        <figcaption>Add Your List Here ✌🏻</figcaption>
                    </figure>

                    <div className="addItems">
                        <input type="text" placeholder="✍ Add Items..."
                        value={inputData} 
                        onChange={(e) => setInputData(e.target.value) }
                        />
                        <i className="fa fa-plus add-btn" 
                        onClick={()=>dispatch(addTodo(inputData),setInputData(""))} 
                          >

                          </i> 
                        {/* {
                            toggleSubmit ?
                             <i className="fa fa-plus add-btn" title="Add Item" onClick={addItem}></i> 
                             :
                                 <i className="far fa-edit add-btn" title="Update Item" onClick={addItem}></i>
                        } */}
                       
                    </div>

                    <div className="showItems">
                        
                        {
                            list.map((elem) => {
                                return (
                                    <div className="eachItem" key={elem.id}>
                                        <h3>{elem.value}</h3>
                                        <div className="todo-btn">
                                        {/* <i className="far fa-edit add-btn" title="Edit item" onClick={() => editItem(elem.id)}></i> */}

                                            <i className="far fa-trash-alt add-btn " 
                                            onClick={()=>dispatch(deleteTodo(elem.id))} ></i>
                                        </div>
                                  </div>
                                )
                            })

                        }
                       
                    </div>
                
                    {/* clear all button  */}
                    <div className="showItems">
                        <button className="btn effect04" data-sm-link-text="Remove All"
                         onClick={()=>dispatch(removeTodo())}
                        ><span> REMOVE LIST </span> </button>
                    </div>
                </div>
          </div>  
 
    )
}

export default TodoComponent
