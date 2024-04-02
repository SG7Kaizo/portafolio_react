import { useParams } from "react-router-dom";
import styles from "./ImageDetails.module.css";
import { get } from "../utils/httpClient";
import { useEffect, useState } from "react";

export function ImageDetails() {
  const { imgId } = useParams();
  const [image, setImage] = useState(null); // Cambié [image, setImages] = useState([null]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    get("/ilustra_react/images/" + imgId)
      .then((data) => {
        setImage(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching image:", error);
      });
  }, [imgId]);

  // let imageUrl = "";
  // if (image) {
  //   imageUrl = "https://image.tmdb.org/t/p/w500" + image.poster_path;
  // }

  if (loading) {
    return <div class={styles.loader}></div>; // Aplicando la clase de estilos
  }

  return (
    <div className={styles.detailsContainer}>
      <img
        className={`${styles.col}  ${styles.imageImage}`}
        src={image.url}
        alt={image.title}
      />
      <div className={`${styles.titles}  ${styles.imageDetails}`}>
        <p>
          <strong>Título:</strong> {image.title}
        </p>
        <p>
          <strong>Description:</strong> {image.archivoAI}
        </p>
        <a href={image.urlAI} className={styles.button}>Descargar archivo</a>
      </div>
    </div>
  );
}
