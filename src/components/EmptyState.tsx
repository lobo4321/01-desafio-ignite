import styles from "./EmptyState.module.css";

import emptyState from "../assets/empty-state.svg";

export function EmptyState() {
  return (
    <div className={styles.wrapper}>
      <img src={emptyState} alt="Empty State" className={styles.image} />
      <p className={styles.description}>
        <span>Você ainda não tem tarefas cadastradas</span>
        Crie tarefas e organize seus itens a fazer
      </p>
    </div>
  );
}
