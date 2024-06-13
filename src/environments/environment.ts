// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.


//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";



export const environment = {
  production: false,
  firebaseConfig :{
    
    apiKey: "AIzaSyDbDLgbW8852e00fREQF-QquLUMzTt7r-o",
    authDomain: "appshopyrev1.firebaseapp.com",
    databaseURL: "https://appshopyrev1-default-rtdb.firebaseio.com",
    projectId: "appshopyrev1",
    storageBucket: "appshopyrev1.appspot.com",
    messagingSenderId: "476557446293",
    appId: "1:476557446293:web:8b3ff7565ff8bc5be65f9c",
    measurementId: "G-MN6HYC9TMX"
  }
};


// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
