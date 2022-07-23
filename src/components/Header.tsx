import styles from "./Header.module.css";

import logo from "../assets/logo.svg";

export function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Logo" />
        <h3 className={styles.title}>
          to<span>do</span>
        </h3>
      </div>
    </div>
  );
}
