import React from "react";
import { useParams } from "react-router-dom";
import Loading from "../Components/Loading";
import useHead from "../useHead";
import styles from "./../assets/produto.module.css";

const Produto = () => {
  const params = useParams();
  const [produto, setProduto] = React.useState(null);
  const name = produto ? produto.nome : "";
  useHead(`Ranek | ${name}`);

  React.useEffect(() => {
    fetch(`https://ranekapi.origamid.dev/json/api/produto/${params.id}`)
      .then((r) => r.json())
      .then((r) => setProduto(r));
  }, [params]);

  return (
    <div className="anime">
      {!produto ? (
        <Loading />
      ) : (
        produto && (
          <div className={styles.container}>
            <div className={styles.containerInfos}>
              <h1>{produto.nome}</h1>
              <p className={styles.preco}>R$ {produto.preco}</p>
              <p>{produto.descricao}</p>
            </div>

            <div className={styles.containerFotos}>
              {produto.fotos.map((foto) => (
                <img
                  key={foto.src}
                  className={styles.productImages}
                  src={foto.src}
                  alt="Foto"
                />
              ))}
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Produto;
