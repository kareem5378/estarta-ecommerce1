import { PuffLoader } from "react-spinners";
import styles from "./styles.module.css";

export default function Spinner() {
  return (
    <div className={styles.spinnerContainer}>
      <PuffLoader color="#36d7b7" loading size={100} speedMultiplier={1} />
    </div>
  );
}
