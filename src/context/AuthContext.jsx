import { createContext, useContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword, 
    onAuthStateChanged, 
    signInWithEmailAndPassword, 
    signOut
} from "firebase/auth";
import { auth } from "../../firebase";

const UserContext = createContext();



export const AuthContextProvider =({ children }) =>{
    const [user, setUser] = useState({});

const signUp = (email, password) =>{
    return createUserWithEmailAndPassword(auth, email, password);
}

const logIn = (email, password) =>{
    return signInWithEmailAndPassword(auth, email, password);
}

const logOut = () =>{
    return signOut(auth);
}

useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser);
    })
    return () =>{
        unsubscribe();
    };
}, []);

return(
    <UserContext.Provider value={{ signUp, user, logIn, logOut}}>
        { children }
    </UserContext.Provider>
)
}

export const UserAuth = () =>{
    return useContext(UserContext);
}