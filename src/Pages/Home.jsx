import React from "react";
import { useNavigate } from "react-router-dom";
import useHead from "../useHead";
import styles from "./../assets/home.module.css";

const Home = () => {
  useHead("Ranek");

  const [produtos, setProdutos] = React.useState([]);
  const navTo = useNavigate();

  React.useEffect(() => {
    fetch("https://ranekapi.origamid.dev/json/api/produto")
      .then((r) => r.json())
      .then((r) => {
        setProdutos(r);
      });
  }, []);

  function onHandleClick(id) {
    navTo(`/produto/${id}`);
  }

  return (
    <section className={styles.section + " anime"}>
      {produtos.map((produto) => {
        return (
          <div
            key={produto.id}
            className={styles.produto}
            onClick={() => onHandleClick(produto.id)}
          >
            <img
              className={styles.produtoImagem}
              src={produto.fotos[0].src}
              alt={produto.nome}
            />
            <h1>{produto.nome}</h1>
          </div>
        );
      })}
    </section>
  );
};

export default Home;
