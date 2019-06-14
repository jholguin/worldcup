import dotenv from 'dotenv'
dotenv.config()
import admin from 'firebase-admin'

admin.initializeApp({
    credential: admin.credential.cert({
        projectId: process.env.FIREBASE_PROJECTID,
        clientEmail: process.env.FIREBASE_CLIENTEMAIL,
        privateKey: process.env.FIREBASE_PRIVATEKEY.replace(/\\n/g, '\n')
    }),
    databaseURL: "https://worldcup2018-99b44.firebaseio.com/"
})

export default admin.database()