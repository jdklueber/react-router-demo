import {useState} from 'react';
import NavBar from "./components/NavBar";
import DonePage from "./pages/Done";
import LandingPage from "./pages/Landing";
import ToDoPage from "./pages/ToDo";
import {BrowserRouter, 
        Routes,
        Route,
              } from "react-router-dom";
import TodoItem from './components/TodoItem';


function App() {
  const [todoList, setTodoList] = useState([]);
  const [nextId, setNextId] = useState(1);

  const addTodo = (todo) => {
    todo.id = nextId;
    setNextId(nextId + 1);
    const newTodoList = [...todoList, todo];
    setTodoList(newTodoList);
  }

  const updateTodo = (todo) => {
    const newTodoList = todoList.filter(item => item.id !== todo.id);
    newTodoList.push(todo);
    setTodoList(newTodoList);
  }

  const deleteTodo = (todo) => {
    const newTodoList = todoList.filter(item => item.id !== todo.id);
    setTodoList(newTodoList);
  }

  return (
    <BrowserRouter>
      <div>
          <NavBar/>
          <Routes>
            <Route path="/" element={<LandingPage todoList={todoList} />}/>
            <Route path="/todo" element={<ToDoPage todoList={todoList} 
                                                    addTodo={addTodo} 
                                                    updateTodo={updateTodo}
                                                    deleteTodo={deleteTodo}
                                                    />}/>
            <Route path="/done" element={<DonePage todoList={todoList}/>}/>
          </Routes>
          <h1>In the App.js</h1>
          {
                    todoList.map(item => <TodoItem todo={item} updateTodo={updateTodo}/>)
            }
      </div>
    </BrowserRouter>
  );
}

export default App;
