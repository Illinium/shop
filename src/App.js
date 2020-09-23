import React from 'react';
import {Route, BrowserRouter, Switch} from "react-router-dom";
import './App.css';
import MainPage from "./Components/MainPage/MainPage";
import ProductPage from "./Components/ProductPage/ProductPage";
import AdminPage from "./Components/AdminPage/AdminPage";
import AboutUs from "./Components/AboutUs/AboutUs";
import Header from "./Components/Header/Header";
import {Provider} from "react-redux";
import store from "./store";
import GoodsAndServicesPage from "./Components/GoodsAndServicesPage/GoodsAndServicesPage";
import ContactPage from "./Components/CotactPage/ContactPage";
import ArticlesPage from "./Components/ArticlesPage/ArticlesPage";

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div className="App">
                    <Header/>
                    <Switch>
                        <Route exact path="/"><MainPage/> </Route>
                        <Route path="/product"><ProductPage/> </Route>
                        <Route path="/admin"><AdminPage/> </Route>
                        <Route path="/about"><AboutUs/> </Route>
                        <Route path="/goods"><GoodsAndServicesPage/> </Route>
                        <Route path="/contact"><ContactPage/> </Route>
                        <Route path="/articles"><ArticlesPage/> </Route>
                    </Switch>
                </div>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
