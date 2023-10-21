import { BiCheckCircle } from "react-icons/bi";
import { ImCross } from "react-icons/im";
import { AiFillDelete } from "react-icons/ai";
import Button from "@mui/material/Button";
import "./ToDoItem.css";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import { red } from "@mui/material/colors";

interface Item {
  item: {
    id: number;
    title: string;
    isCompleted: boolean;
  };
  changeTodo?(id: number): void;
  removeTodo?(id: number): void;
}

const ToDoItem = ({ item, changeTodo, removeTodo }: Item) => {
  return (
    <div className="app__todoitem">
      <div className="app__todoitem-content">
        {item.isCompleted ? (
          <IconButton
            className="app__todoitem-content_btns"
            size="small"
            onClick={() => changeTodo(item.id)}
          >
            <DoneIcon color="success" />
          </IconButton>
        ) : (
          <IconButton size="small" onClick={() => changeTodo(item.id)}>
            <CloseIcon sx={{ color: red[500] }} />
          </IconButton>
        )}
        <div className="app__todoitem-text">{item.title}</div>
        <div>
          <IconButton
            size="large"
            aria-label="delete"
            onClick={() => removeTodo(item.id)}
          >
            <DeleteIcon sx={{ color: red[900] }} />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default ToDoItem;
