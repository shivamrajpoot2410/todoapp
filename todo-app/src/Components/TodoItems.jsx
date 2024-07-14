import TodoItem from "./TodoItem";
const TodoItems = ({ todoItems }) => {
  return (
    <div className="todoitem-container">
      {todoItems.map((item) => {
        <TodoItem todoName={item.name} todoDate={item.due}></TodoItem>;
      })}
    </div>
  );
};
export default TodoItems;
