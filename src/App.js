import {Routes, Route} from 'react-router-dom';

import './App.css';
import HomeComponent from "./routes/home/home.component";
import NavigationComponent from "./routes/navigation/navigation.component";
import ShopComponent from "./routes/shop/shop.component";
import SingInComponent from "./routes/sing-in/sing-in.component";
import AuthenticationComponent from "./routes/authentication/authentication.component";

function App() {
   
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<NavigationComponent/>}>
                    <Route index element={<HomeComponent/>}/>
                    <Route path='/shop' element={<ShopComponent/>}/>
                    <Route path='/auth' element={<AuthenticationComponent/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
