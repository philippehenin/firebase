const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.pheWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from phe!");
  console.log("Trop facile")
});
