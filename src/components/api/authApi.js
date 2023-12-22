import { signInWithEmailAndPassword, getAuth } from "firebase/auth";

let auth = getAuth();

export const loginApi = (email, password) => {
  try {
    signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    return error;
  }
};
