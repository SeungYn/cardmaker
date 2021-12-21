import firebaseDatabase from './firebase';
class CardRepository {
  syncCards(userId, onUpdate) {
    const ref = firebaseApp.database().ref(`${userId}/cards`);
    ref.on('value', (snapshot) => {
      const value = snapshot.val();
      console.log(value);
      value && onUpdate(value);
    });

    return () => ref.off(); //계속 업데이트 하지 않고 끄기
  }
  saveCard(userId, card) {
    firebaseApp.database().ref(`${userId}/cards/${card.id}`).set(card);
  }

  removeCard(userId, card) {
    firebaseApp.database().ref(`${userId}/cards/${card.id}`).remove();
  }
}

export default CardRepository;
