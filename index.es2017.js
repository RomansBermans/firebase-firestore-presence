/* */


const Firebase = require('firebase-admin');
const Functions = require('firebase-functions');


/* ********* INIT ********* */


Firebase.initializeApp(Functions.config().firebase);


/* ********* FUNCTIONS ********* */


module.exports = {
  presence: Functions.database.ref('/users/{uid}').onUpdate(event => {
    const presence = event.data.val();

    if (presence.state === 'offline') {
      return Firebase.firestore().doc(`users/${event.params.uid}`).set({ ...presence, modified: new Date(presence.modified) });
    }

    return null;
  }),
};
