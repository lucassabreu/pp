import * as functions from 'firebase-functions';
import {request as scanRssHandler} from './scanRss'

export const scanRss = functions.https.onRequest(scanRssHandler)

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
