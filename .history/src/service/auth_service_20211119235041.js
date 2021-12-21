import { firebaseAuth } from './firebase';
class AuthService {
  login(providerName) {
    const authProvider = getProvider(providerName);
    return firebaseApp.auth().signInWithPopup(authProvider);
  }

  logout() {
    firebaseAuth.signOut();
  }

  onAuthChange(onUserChanged) {
    firebaseAuth.onAuthStateChanged((user) => {
      onUserChanged(user);
    });
  }
}

export default AuthService;
