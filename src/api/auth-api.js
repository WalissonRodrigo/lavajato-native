import { storage } from "firebase";
import { auth, firestore } from "../services/firebase";

export const logoutUser = () => {
  auth.signOut();
};

export const signInUser = async ({ name, email, password }) => {
  try {
    const {user} = await auth.createUserWithEmailAndPassword(email, password);
    auth.currentUser.updateProfile({
      displayName: name,
    });
    await firestore.collection("users").doc(user.uid).set({
      name: name,
    });
    return user;
  } catch (error) {
    switch (error.code) {
      case "auth/email-already-in-use":
        return {
          error: "E-mail already in use.",
        };
      case "auth/invalid-email":
        return {
          error: "Invalid e-mail address format.",
        };
      case "auth/weak-password":
        return {
          error: "Password is too weak.",
        };
      case "auth/too-many-requests":
        return {
          error: "Too many request. Try again in a minute.",
        };
      default:
        return {
          error: "Check your internet connection.",
        };
    }
  }
};

export const loginUser = async ({ email, password }) => {
  try {
    const {user} = await auth.signInWithEmailAndPassword(email, password);
    return user;
  } catch (error) {
    switch (error.code) {
      case "auth/invalid-email":
        return {
          error: "Invalid email address format.",
        };
      case "auth/user-not-found":
      case "auth/wrong-password":
        return {
          error: "Invalid email address or password.",
        };
      case "auth/too-many-requests":
        return {
          error: "Too many request. Try again in a minute.",
        };
      default:
        return {
          error: "Check your internet connection.",
        };
    }
  }
};

export const sendEmailWithPassword = async (email) => {
  try {
    await auth.sendPasswordResetEmail(email);
    return {};
  } catch (error) {
    switch (error.code) {
      case "auth/invalid-email":
        return {
          error: "Invalid email address format.",
        };
      case "auth/user-not-found":
        return {
          error: "User with this email does not exist.",
        };
      case "auth/too-many-requests":
        return {
          error: "Too many request. Try again in a minute.",
        };
      default:
        return {
          error: "Check your internet connection.",
        };
    }
  }
};
