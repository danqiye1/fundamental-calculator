const functions = require('firebase-functions');
const admin = require('firebase-admin');
const { morningstarScraper } = require('./src/scrapers.js');
admin.initializeApp();

const scrapingRunTimeOpts = {
    memory: '1GB'
}

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.scrapedata = functions
    .region('asia-east2')
    .runWith(scrapingRunTimeOpts)
    .https.onRequest(async (req, res) => {
        const ticker = req.query.ticker;
        let db = admin.firestore();
        let financialRef = db.collection('financials').doc(ticker);
        // const snapshot = await admin.database().ref('/messages').push({original: original});
        // res.redirect(303, snapshot.ref.toString());
        let scraperPromise = morningstarScraper(ticker)
            .then(data => {
                let setFinancials = financialRef.set(data);
                res.json(data);
                return setFinancials;
            }).catch(error => {
                throw new Error(error)
            });
    })