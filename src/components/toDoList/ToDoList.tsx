import React, { useEffect, useState } from "react";
import ToDoItem from "../toDoItem/ToDoItem";
import "./ToDoList.css";
import NewToDoItem from "../newToDoItem/NewToDoItem";
import ToDoFilter from "../toDoFilter/ToDoFilter";

interface item {
  id: number;
  title: string;
  isCompleted: boolean;
}

const defaultTodos = [
  { title: "Make breakfast", isCompleted: true, id: 1 },
  { title: "Do warm-ups", isCompleted: false, id: 2 },
  { title: "Read the book", isCompleted: false, id: 3 },
  { title: "Read the book2", isCompleted: false, id: 4 },
];

const ToDoList: React.FC = () => {
  const [todos, setTodos] = useState<item[]>(defaultTodos);
  const [filterredTodos, setFilterredTodos] = useState<item[]>(todos);

  const [searchItem, setSearchItem] = useState("");

  const changeTodo = (id: number) => {
    const copyOfTodo = [...todos];
    const current = copyOfTodo.find((elem) => elem.id === id);
    current.isCompleted = !current?.isCompleted;
    setTodos(copyOfTodo);
  };

  const removeTodo = (id: number) => {
    setTodos([...todos].filter((elem) => elem.id !== id));
  };

  const filterTodo = (searchText: string) => {
    if (!searchText) {
      return todos;
    }
    return todos.filter((item) =>
      item.title.toLowerCase().includes(searchText.toLowerCase())
    );
  };

  useEffect(() => {
    const Debounce = setTimeout(() => {
      setFilterredTodos(filterTodo(searchItem));
      console.log(todos);
    }, 500);
    return () => clearTimeout(Debounce);
  }, [searchItem, todos]);

  return (
    <div className="app__todolist">
      <ToDoFilter searchItem={searchItem} setSearchItem={setSearchItem} />
      {filterredTodos.map((item) => (
        <ToDoItem
          key={item.id}
          item={item}
          changeTodo={changeTodo}
          removeTodo={removeTodo}
        />
      ))}
      <NewToDoItem setTodos={setTodos} />
    </div>
  );
};

export default ToDoList;
