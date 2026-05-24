import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.center} style={{ backgroundColor: "red" }}></div>
    </div>
  );
}
