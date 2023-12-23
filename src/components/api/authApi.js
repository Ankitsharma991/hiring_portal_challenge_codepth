import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../FirebaseConfig";
import { firestore } from "../../FirebaseConfig";
import { collection, doc, setDoc } from "firebase/firestore";


export const LoginAPI = (email, password) => {
  try {
    let response = signInWithEmailAndPassword(auth, email, password);
    return response;
  } catch (err) {
    return err;
  }
};

let dbRef = collection(firestore, "jobs");

export const postNewJob = async(data)=>{
  let jobDetails = {
    jobTitle : "",
    data: "",
    location:"",
    description:"",
    
  }
  setDoc(dbRef, data)
}