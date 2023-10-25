import {createContext, useEffect, useState} from "react";

import {auth} from "../utils/firebase/firebase.utils"

export const UserContext = createContext({
	setCurrentUser: () => null,
	currentUser: null
});

export const UserProvider = ({children}) => {
	const [currentUser, setCurrentUser] = useState(null);
	const value = {currentUser, setCurrentUser}
	
	useEffect(() => {
		return auth.onAuthStateChanged((userAuth) => {
			if (userAuth) {
				setCurrentUser(userAuth);
			} else {
				setCurrentUser(null);
			}
		});
	}, []);
	
	console.log(currentUser);
	
	return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}