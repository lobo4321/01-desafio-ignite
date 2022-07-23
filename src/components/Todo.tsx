import { Trash } from "phosphor-react";
import { useState } from "react";
import styles from "./Todo.module.css";
import { ITodo } from "../components/MainContent";
import { BsFillCheckCircleFill } from "react-icons/bs";

interface Props {
  todo: ITodo;
  onDelete: (id: string) => void;
  onComplete: (id: string) => void;
}

export function Todo({ todo, onDelete, onComplete }: Props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <button
          className={styles.checkContainer}
          onClick={() => onComplete(todo.id)}
        >
          {todo.isCompleted ? <BsFillCheckCircleFill /> : <div />}
        </button>
        <p className={todo.isCompleted ? styles.selected : styles.content}>
          {todo.title}
        </p>
      </div>
      <button className={styles.deleteButton} onClick={() => onDelete(todo.id)}>
        <Trash size={24} />
      </button>
    </div>
  );
}
