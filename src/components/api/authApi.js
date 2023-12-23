import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../FirebaseConfig";
import { firestore } from "../../FirebaseConfig";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";



export const LoginAPI = (email, password) => {
  try {
    let response = signInWithEmailAndPassword(auth, email, password);
    return response;
  } catch (err) {
    return err;
  }
};

let jobsRef = collection(firestore, "jobs");

export const postNewJob = async (data) => {
  addDoc(jobsRef, data)
    .then(() => {
      // toast.success("Job Posted Successfully!!");
    })
    .catch((err) => {
      return err;
    });
};


