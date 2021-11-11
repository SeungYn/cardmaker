import React from 'react';
import styles from './editor.module.css';
import Card_edit_form from '../card_edit_form/card_edit_form';
import NewEditForm from '../new_edit_form/new_edit_form';
const Editor = ({ cards, addCard, updataCard, deleteCard }) => (
  <section className={styles.editor}>
    <h1 className={styles.title}>Card Maker</h1>
    {cards.map((card) => {
      return <Card_edit_form key={card.id} card={card}, updateCard = { updateCard },
      deleteCard={deleteCard}  />;
    })}
    <NewEditForm addCard={addCard} />
  </section>
);

export default Editor;
