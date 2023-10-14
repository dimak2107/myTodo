import React from "react";
import { BiCheckCircle } from "react-icons/bi";
import { ImCross } from "react-icons/im";
import { AiFillDelete } from "react-icons/ai";
import "./ToDoItem.css";

interface item {
  id: number;
  title: string;
  isCompleted: boolean;
}

const ToDoItem = ({ item, changeTodo, removeTodo }: item) => {
  return (
    <div className="app__todoitem">
      <div className="app__todoitem-content">
        {item.isCompleted ? (
          <BiCheckCircle
            className="app__todoitem-content_btns"
            onClick={() => changeTodo(item.id)}
          />
        ) : (
          <ImCross
            className="app__todoitem-content_btns"
            onClick={() => changeTodo(item.id)}
          />
        )}
        <div className="app__todoitem-text">{item.title}</div>
        <div>
          <AiFillDelete
            className="app__todoitem-content_btns-delete"
            onClick={() => removeTodo(item.id)}
          />
        </div>
      </div>
    </div>
  );
};

export default ToDoItem;
