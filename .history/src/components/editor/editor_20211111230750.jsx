import React from 'react';
import styles from './editor.module.css';
import Card_edit_form from '../card_edit_form/card_edit_form';
import NewEditForm from '../new_edit_form/new_edit_form';
const Editor = ({ FileInput, cards, addCard, updateCard, deleteCard }) => (
  <section className={styles.editor}>
    <h1 className={styles.title}>Card Maker</h1>
    {Object.keys(cards).map((key) => {
      return (
        <Card_edit_form
          key={key}
          FileInput={FileInput}
          card={cards[key]}
          updateCard={updateCard}
          deleteCard={deleteCard}
        />
      );
    })}
    <NewEditForm FileInput={FileInput}, addCard={addCard} />
  </section>
);

export default Editor;
