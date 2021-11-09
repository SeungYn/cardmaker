import React from 'react';
import styles from './preview.module.css';
const Preview = ({ cards }) => (
  <section className={styles.preview}>
    <h1 className={styles.title}>Card Preview</h1>
    {cards.map((card) => {
      return <h1>{card.id}</h1>;
    })}
  </section>
);

export default Preview;
