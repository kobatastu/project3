import * as admin from 'firebase-admin'

let serviceAccount = require('./firebase_secretkey.json')
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
let db = admin.firestore();

// let profCollection = [];
// const query = (collectionPath: string) =>
//  db.collection('Profs').get()
//   .then((snapshot) => {
//     snapshot.forEach(doc => {
//       profCollection.push(doc.data())
//     });
//   }).catch(error => {
//     console.log(error)
//   }).then(() => {return profCollection})

const query = async (collectionPath: string): Promise<any[]> => {
  let collection = [];
  await db.collection(collectionPath).get()
    .then((snapshot) => {
      snapshot.forEach(doc => {
        collection.push(doc.data())
      });
    }).catch(error => {
      console.log(error)
    })
  return collection
}

export const queryProfs = query('Profs')
export const queryChats = query('Chats')



// export let profs = [
//   {
//     userId: 1,
//     userName: 'koba',
//     icon: 'myProf.jpg',
//     prof: '私はエンジニアです',
//     loadMap: [
//       '会社を辞める',
//       'プログラムを勉強する',
//       '就活する'
//     ],
//     chatRoomIds: [
//       1,
//       2,
//       3
//     ]
//   },
//   {
//     userId: 2,
//     userName: 'waka',
//     icon: 'default.jpg',
//     prof: '私は営業です',
//     loadMap: [
//       '経験を積む',
//       '独立する',
//       '上場する'
//     ],
//     chatRoomIds: [
//       1
//     ]
//   },
//   {
//     userId: 3,
//     userName: 'tomo',
//     icon: 'default.jpg',
//     prof: '私は社長です',
//     loadMap: [
//       '帝王学を学ぶ',
//       '起業'
//     ],
//     chatRoomIds: [
//       2
//     ]
//   },
//   {
//     userId: 4,
//     userName: 'haru',
//     icon: 'default.jpg',
//     prof: '私は料理人です',
//     loadMap: [
//       '下働き',
//       '見て覚える',
//       '独立'
//     ],
//     chatRoomIds: [
//       3
//     ]
//   }
// ];

// export let chats = [
//   {
//     roomId:1,
//     roomMember:[
//       { userId: 1, userName: 'koba'},
//       { userId: 2, userName: 'waka'}
//     ],
//     chatContent: [
//       { userId: 1, content: 'こんにちは'},
//       { userId: 2, content: 'おはよう'},
//       { userId: 1, content: '今度話聞かせて'}
//     ]
//   },
//   {
//     roomId:2,
//     roomMember:[
//       { userId: 1, userName: 'koba'},
//       { userId: 3, userName: 'tomo'}
//     ],
//     chatContent: [
//       { userId: 1, content: 'おは'},
//       { userId: 3, content: 'おは'},
//       { userId: 1, content: 'おやすみ'}
//     ]
//   },
//   {
//     roomId:3,
//     roomMember:[
//       { userId: 1, userName: 'koba'},
//       { userId: 4, userName: 'tomo'}
//     ],
//     chatContent: [
//       { userId: 1, content: 'Hi'},
//       { userId: 4, content: 'Hello'},
//       { userId: 1, content: 'Yeah!'}
//     ]
//   }
// ]