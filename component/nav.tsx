import styles from "@/styles/nav.module.css";
import Logo from "@/public/logo.svg";
export default function Nav() {
  return (
    <div className={styles.container}>
      <Logo className={styles.logo} />
    </div>
  );
}
