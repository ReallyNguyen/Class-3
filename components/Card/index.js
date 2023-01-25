import styles from "./Card.module.css";
export default function Card({
  degree = "none",
}) {
  return (
    <div className={styles.main}>
      <div className={styles.data}>{degree}</div>
    </div>
  );
}