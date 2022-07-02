import logo from "../assets/logo.svg";
import styles from "./Header.module.scss";

export const Header: React.FC = () => (
  <header className={styles.header}>
    <div>
      <img src={logo} alt="logo" />

      <strong>
        <span>to</span>
        <span>do</span>
      </strong>
    </div>
  </header>
);
