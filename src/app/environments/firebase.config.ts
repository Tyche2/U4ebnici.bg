import {AuthMethods, AuthProviders} from 'angularfire2';

export const firebaseConfig = {
    apiKey: 'AIzaSyDqDkN4k3lArzjjz8KbmT41Dam2aOORLUQ',
    authDomain: 'schoolbooks-e2fbb.firebaseapp.com',
    databaseURL: 'https://schoolbooks-e2fbb.firebaseio.com',
    storageBucket: 'schoolbooks-e2fbb.appspot.com',
    messagingSenderId: '935490816250'
};

export const authConfig = {
    provider: AuthProviders.Password,
    method: AuthMethods.Password
};
