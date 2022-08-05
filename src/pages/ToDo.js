import {useState} from 'react';
import TodoItem from '../components/TodoItem';

function ToDoPage({todoList, addTodo, updateTodo, deleteTodo}) {
    const [todoInput, setTodoInput] = useState("");

    const saveFunction = () => {
        const newTodo = 
        {
            task: todoInput,
            complete: false
        }

        addTodo(newTodo);
        setTodoInput("");
    }

    return (
        <div>
            <div>
                Thing To Do: <input type="text" 
                                 value={todoInput}
                                 onChange={(evt) => {setTodoInput(evt.currentTarget.value)}}
                                 onKeyUp={(evt) => {if (evt.key === 'Enter') {saveFunction()} }}/>
            </div>
            <div>
                {
                    todoList.map(item => <TodoItem todo={item} updateTodo={updateTodo}/>)
                }
            </div>
        </div>
    )
}

export default ToDoPage;