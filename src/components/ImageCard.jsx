import styles from "./ImageCard.module.css";
import { Link } from "react-router-dom";

export function ImageCard({ image }) {
  return (
    <li className={styles.imageCard}>
      <Link to={"/images/" + image.id}>
        <img
          width={230}
          height={345}
          className={styles.imageImage}
          src={image.url} 
          alt={image.title}
        />
      </Link>
      <div className={styles.titles}> {image.title}</div>
    </li>
  );
}
