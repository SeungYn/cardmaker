import firebaseApp from './firebase';
class CardRepository {
  synCards(userId, onUpdate) {
    const ref = firebaseApp.database().ref(`${userId}/cards`);
  }
  saveCard(userId, card) {
    firebaseApp.database().ref(`${userId}/cards/${card.id}`).set({
      card,
    });
  }

  removeCard(userId, card) {
    firebaseApp.database().ref(`${userId}/cards/${card.id}`).remove();
  }
}

export default CardRepository;
