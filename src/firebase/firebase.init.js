import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuthentication =()=>{
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;

/*
Steps for authentication
--------------------------------------------------

Step-1: Initial setup on firebase
1.Create project
2.Create web app
3.Get configuration
4.Initialize firebase
5.Enable auth method
--------------------------------------------------

Step-2: Setup component
1.Create Login component
2.Create Register component
3.Create Route for Login and Register
-------------------------------------------------

Step-3: Set auth system
1.Set up sign in method
2.Set up sign out method
3.ser and error state
4.Special observer to set user
5.Return necessary methods ans states
--------------------------------------------------------

Step-4: Create auth context hook (useauth)
1.Creaze a auth context
2.Create a context provider
3.Set context provider context-value
4.Use auth provider
5.Create useAuth hook
------------------------------------------------------------

Step-5: Create private route
1.Create private route
2.Set private route
------------------------------------------------------------

Step-6: Redirect after login
1. After login - redirect user to their desired destination


*/