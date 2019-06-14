import admin from 'firebase-admin'
import serviceAccount from '../serviceAccount.json'

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://worldcup2018-99b44.firebaseio.com/"
})

export default admin.database()