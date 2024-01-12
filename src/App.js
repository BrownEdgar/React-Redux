import { useDispatch } from "react-redux"
import { TodoList } from './features/product/TodoList';
import { addTodo } from './features/product/todoSlice';



function App() {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault()
    const { value } = e.target.message
    dispatch(addTodo(value))
    e.target.reset()
  }

  return (
    <div className="App">
      <h1>Todo list witd Redux persist</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" id='message' required />
        <input type="submit" value="add todo" />
      </form>
      <hr />
      <TodoList />
    </div>
  );
}

export default App;
