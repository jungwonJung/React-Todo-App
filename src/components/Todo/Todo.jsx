import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import style from "./Todo.module.css";

export default function Todo({ todo, onUpdate, onDelete }) {
  const { text, status, id } = todo;
  const handleChange = (e) => {
    onUpdate({ ...todo, status: e.target.checked ? "completed" : "active" });
  };
  const handleDelete = () => onDelete(todo);
  return (
    <li className={style.todo}>
      <input
        className={style.checkbox}
        type="checkbox"
        id={id}
        checked={status === "completed"}
        onChange={handleChange}
      />
      <label htmlFor={id} className={style.text}>
        {text}
      </label>
      <span className={style.icon}>
        <button onClick={handleDelete} className={style.btn}>
          <FaTrashAlt />
        </button>
      </span>
    </li>
  );
}
