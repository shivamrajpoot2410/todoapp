import "./App.css";
import AppName from "./Components/AppName";
import AddItem from "./Components/AddItem";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoItems from "./Components/TodoItems";

function App() {
  const todoItems = [
    {
      name: "buy milk",
      due: "4/10/2020",
    },
    {
      name: "goto cllg",
      due: "5/10/2020",
    },
  ];
  return (
    <>
      <AppName></AppName>
      <AddItem></AddItem>
      <TodoItems todoItems={todoItems}></TodoItems>
    </>
  );
}

export default App;
