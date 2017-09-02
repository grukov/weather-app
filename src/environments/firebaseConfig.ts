
import {AuthMethods, AuthProviders} from "angularfire2";


export const firebaseConfig = {
    // Paste all this from the Firebase console...
    apiKey: "AIzaSyCsex-Y_3w_trPbmpMlpYRyScXcUqHv8PM",
    authDomain: "telerik-weather-app.firebaseapp.com",
    databaseURL: "https://telerik-weather-app.firebaseio.com",
    storageBucket: "telerik-weather-app.appspot.com",
    messagingSenderId: "759058181699"
};

export const authConfig = {
    provider: AuthProviders.Password,
    method: AuthMethods.Password
};
