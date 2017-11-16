/* */


const Firebase = require('firebase-admin');
const Functions = require('firebase-functions');

// const cors = require('cors')({ origin: true });


/* ********* INIT ********* */


Firebase.initializeApp(Functions.config().firebase);

// const DATABASE_TIMESTAMP = Firebase.database.ServerValue.TIMESTAMP;
// const FIRESTORE_TIMESTAMP = Firebase.firestore.FieldValue.serverTimestamp();


/* ********* FUNCTIONS ********* */


module.exports = {
  // TODO:
};
