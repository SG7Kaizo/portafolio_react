import { useEffect, useState } from "react";
import { ImageCard } from "./ImageCard";
import styles from "./ImagesGrid.module.css";
import { get } from "../utils/httpClient";


export function ImageGrid() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    get("/ilustra_react/images/").then((data) => {
      setImages(data);
      setLoading(false);
    });

  }, []);

  if (loading) {
  return <div class={styles.loader}></div>; // Aplicando la clase de estilos
}

  return (
    <ul className={styles.imagesGrid}>
      {images.map((image) => (
        <ImageCard key={image.id} image={image} />
      ))}
    </ul>
  );
}
