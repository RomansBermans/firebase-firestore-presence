/* */


const Firebase = require('firebase-admin');
const Functions = require('firebase-functions');


/* ********* INIT ********* */


Firebase.initializeApp(Functions.config().firebase);


/* ********* FUNCTIONS ********* */


module.exports = {
  status: Functions.database.ref('/status/{uid}').onUpdate(async event => {
    const status = event.data.val();
    if (status.state === 'offline') {
      return Firebase.firestore().doc(`status/${event.params.uid}`).set({ ...status, modified: new Date(status.modified) });
    }
  }),
};
