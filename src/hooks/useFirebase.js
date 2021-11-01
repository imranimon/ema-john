import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, getIdToken} from "firebase/auth";
import initializeAuthentication from "../firebase/firebase.init";


initializeAuthentication()
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error] = useState('')

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider);

    }

    //Observe whether user auth state has changed or not
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                getIdToken(user)
                .then(idToken => localStorage.setItem('idToken', idToken))
            } else {
                setUser({})
            }
        });
    }, [])

    const logOut = () => {
        signOut(auth).then(() => {
            setUser({});
        })
    }


    return {
        user,
        error,
        signInUsingGoogle,
        logOut
    }
}

export default useFirebase;