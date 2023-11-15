import {Routes, Route} from 'react-router-dom';

import './App.css';
import HomeComponent from "./routes/home/home.component";
import NavigationComponent from "./routes/navigation/navigation.component";
import ShopComponent from "./routes/shop/shop.component";
import AuthenticationComponent from "./routes/authentication/authentication.component";
import CheckoutComponent from "./routes/checkout/checkout.component";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {createUserDocumentFromAuth, onAuthStateChangedListener} from "./utils/firebase/firebase.utils";
import {setCurrentUser} from "./store/user/user.action";

function App() {
	const dispatch = useDispatch();
	
	useEffect(() => {
		const unsubscribe = onAuthStateChangedListener((user) =>{
			if (user) {
				createUserDocumentFromAuth(user);
			}
			dispatch(setCurrentUser(user));
		})
		
		return unsubscribe;
	}, [dispatch]);
	
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<NavigationComponent/>}>
                    <Route index element={<HomeComponent/>}/>
                    <Route path='/shop/*' element={<ShopComponent/>}/>
                    <Route path='/auth' element={<AuthenticationComponent/>}/>
                    <Route path='/checkout' element={<CheckoutComponent/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
