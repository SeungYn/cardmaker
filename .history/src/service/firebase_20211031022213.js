const firebaseConfig = {
  apiKey: 'AIzaSyDtVEHLNLkfUfopdoGf4Uzov4k1oFh6Rb4',
  authDomain: 'business-card-maker-9ed5b.firebaseapp.com',
  databaseURL:
    'https://business-card-maker-9ed5b-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'business-card-maker-9ed5b',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
