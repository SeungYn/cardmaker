import { firebaseAuth, googleProvide, githubProvider } from './firebase';
class AuthService {
  login(providerName) {
    const authProvider = this.getProvider(providerName);
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

  getProvider(providerName) {
    switch (providerName) {
      case 'Googel':
        return googleProvider;
      case 'Github':
        return githubProvider;
      default:
        throw new Error(`not supported provider: ${providerName}`);
    }
  }
}

export default AuthService;
