import { EmptyState } from "./EmptyState";
import { Todo } from "./Todo";
import { PlusCircle } from "phosphor-react";
import styles from "./MainContent.module.css";
import { ChangeEvent, FormEvent, useState } from "react";
import { v4 as uuid } from "uuid";

export interface ITodo {
  id: string;
  title: string;
  isCompleted: boolean;
}

export function MainContent() {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState<ITodo[]>([
    {
      id: "1",
      title: "Banana 1221212121",
      isCompleted: true,
    },
  ]);

  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    addTodo(title);
    setTitle("");
  }

  function addTodo(todoTitle: string) {
    setTodos([
      ...todos,
      {
        title: todoTitle,
        isCompleted: false,
        id: uuid(),
      },
    ]);
  }

  function deleteTodo(todoId: string) {
    const newTodos = todos.filter((todo) => todo.id !== todoId);

    setTodos(newTodos);
  }

  function toggleTodoCompleted(todoId: string) {
    const newTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      }
      return todo;
    });

    setTodos(newTodos);
  }

  const todosQuantity = todos.length;

  const completedTodos = todos.filter((todo) => todo.isCompleted).length;

  const todosEmpty = todos.length === 0;

  const isTitleEmpty = title.length === 0;

  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          required
          onChange={onChangeTitle}
          value={title}
        />
        <button disabled={isTitleEmpty}>
          Criar <PlusCircle size={20} />
        </button>
      </form>

      <header className={styles.header}>
        <div className={styles.createdWork}>
          Tarefas criadas <span>{todosQuantity}</span>
        </div>
        <div className={styles.doneWork}>
          Concluídas
          <span>
            {completedTodos} de {todosQuantity}
          </span>
        </div>
      </header>

      <div className={styles.cardContainer}>
        {todosEmpty && <EmptyState />}
        {todos.map((todo) => (
          <Todo
            todo={todo}
            key={todo.id}
            onDelete={deleteTodo}
            onComplete={toggleTodoCompleted}
          />
        ))}
      </div>
    </div>
  );
}
