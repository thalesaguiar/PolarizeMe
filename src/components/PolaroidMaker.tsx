import styles from "../styles/components/PolaroidMaker.module.css";

export default function PolaroidMaker() {
  return (
    <div className={styles.container}>
      <h2>Get Polarize</h2>
      <div className={styles.polaroidInput}>
        <button className={styles.polarizeButton}>Escolher Imagem</button>
      </div>
    </div>
  );
}
