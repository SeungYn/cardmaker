import React from 'react';
import Card from '../card/card';

import styles from './preview.module.css';
import Card from '../card/card';
const Preview = ({ cards }) => (
  <section className={styles.preview}>
    <h1 className={styles.title}>Card Preview</h1>
    <ul>
      {cards.map((card) => {
        return <Card_edit_form card={card} />;
      })}
    </ul>
  </section>
);

export default Preview;
