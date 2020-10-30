import * as functions from 'firebase-functions';

export scanRss = functions.https.onRequest(async (req,res) =>{})

console.log(functions)

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
