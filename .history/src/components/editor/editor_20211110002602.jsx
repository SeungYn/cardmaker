import React from 'react';
import styles from './editor.module.css';
const Editor = (props) => (
  <section className={styles.editor}>
    <h1 className={styles.title}>Card Maker</h1>
    {cards.map((card) => {
      return <Card card={card} />;
    })}
  </section>
);

export default Editor;
