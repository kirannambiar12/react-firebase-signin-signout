import "./App.css";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyB7-3oR5yiFuMBmUeH3mUQU--_eracMJWY",
  authDomain: "super-chat-79b63.firebaseapp.com",
  projectId: "super-chat-79b63",
  storageBucket: "super-chat-79b63.appspot.com",
  messagingSenderId: "257432807613",
  appId: "1:257432807613:web:ebc20264268a37668b2fd4",
});

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  const [user] = useAuthState(auth);
  console.log(user);
  console.log("current user", auth.currentUser)
  return (
    <div className="App">
      <h1 className="text-center pt-4">Super Chat</h1>
      {user ? '' : <SignIn />}
      <SignOut />
    </div>
  );
}

function SignIn() {

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <>
      <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
      <p>Do not violate the community guidelines or you will be banned for life!</p>
    </>
  )

}

function SignOut() {
  return auth.currentUser && (
    <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
  )
}

export default App;
