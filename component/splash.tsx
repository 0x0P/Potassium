"use client";
import styles from "@/styles/splash.module.css";
import { useEffect, useState } from "react";
import Logo from "@/public/logo.svg";

export default function Splash() {
  const [display, setDisplay] = useState("flex");
  useEffect(() => {
    document.querySelector(":root")?.setAttribute("data-theme", localStorage["theme"]);
    setTimeout(() => {
      setDisplay("flex");
    }, 1000);
  });

  return (
    <div style={{ display: display }} className={styles.container}>
      <Logo className={styles.logo} />
    </div>
  );
}
