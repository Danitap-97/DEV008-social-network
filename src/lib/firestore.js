import { collection, addDoc, getDocs} from 'firebase/firestore';
import { db } from './firebase';
 
 export function obtenerPublicaciones(){
  const coleccionPost = collection(db, 'post')
  return getDocs(coleccionPost);
}
//export const docRef = addDoc(collection(db, 'cities'), {
  //name: 'Tokyo',
  //Date: '17/07/2023',
//});

// export { doc, getDoc } from 'firebase/firestore';

// // import {ImportUserRecord, UserImportResult} from "firebase/auth.js"

// function datosUsuario(db, cityConverter) {
//   const ref = doc(db, 'cities', 'LA').withConverter(cityConverter);
//   const docSnap = getDoc(ref);
//   if (docSnap.exists()) {
//   // Convert to City object
//     const city = docSnap.data();
//     // Use a City instance method
//     console.log(city.toString());
//   } else {
//     console.log('No such document!');
//   }
// }
// datosUsuario();
// try {
//     List<ImportUserRecord> users = Collections.singletonList(ImportUserRecord.builder()
//         .setUid("some-uid")
//         .setDisplayName("John Doe")
//         .setEmail("johndoe@gmail.com")
//         .setPhotoUrl("http://www.example.com/12345678/photo.png")
//         .setEmailVerified(true)
//         .setPhoneNumber("+11234567890")
//         .putCustomClaim("admin", true) // set this user as admin
//         .addUserProvider(UserProvider.builder() // user with Google provider
//             .setUid("google-uid")
//             .setEmail("johndoe@gmail.com")
//             .setDisplayName("John Doe")
//             .setPhotoUrl("http://www.example.com/12345678/photo.png")
//             .setProviderId("google.com")
//             .build())
//         .build());
//     UserImportResult result = FirebaseAuth.getInstance().importUsers(users);
//     for (ErrorInfo indexedError : result.getErrors()) {
//       System.out.println("Failed to import user: " + indexedError.getReason());
//     }
//   } catch (FirebaseAuthException e) {
//     System.out.println("Error importing users: " + e.getMessage());
//   }
