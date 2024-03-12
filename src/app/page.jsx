import React from "react";
import styles from "./home.module.css";
import Image from "next/image";
const Home = () => {
 return (
  <div className={styles.container}>
   <div className={styles.textContainer}>
    <h1 className={styles.title}>Creative Thoughts Agency</h1>
    <p className={styles.para}>
     Hi, This is Creative Thoughts Agency We Provide Any Kind of service in it
     industry and consultancy
    </p>
    <div className={styles.buttons}>
     <button className={styles.button}>Learn More</button>
     <button className={styles.button}>Contact</button>
    </div>
    <div className={styles.brands}>
     <Image className={styles.brandImg} src="/brands.png" alt="" fill />
    </div>
   </div>
   <div className={styles.imageContainer}>
    <Image className={styles.heroImg} src="/hero.gif" alt="" fill />
   </div>
  </div>
 );
};

export default Home;
