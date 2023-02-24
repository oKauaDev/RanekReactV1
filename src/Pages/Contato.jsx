import React from "react";
import useHead from "../useHead";
import styles from "./../assets/contato.module.css";

const Contato = () => {
  useHead(`Ranek | Contato`);

  return (
    <div className={styles.container + " anime"}>
      <img
        src="https://ranekapi.origamid.dev/wp-content/uploads/2019/03/camera.jpg"
        alt="Camera"
        className={styles.ilustration}
      />
      <div>
        <h1>Entre em contato</h1>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <span className={styles.span} />
            contato@kauadev.xyz
          </li>
          <li className={styles.li}>
            <span className={styles.span} />
            99999-999
          </li>
          <li className={styles.li}>
            <span className={styles.span} />
            Rua da miséria, 898
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contato;
