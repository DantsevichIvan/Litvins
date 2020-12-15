import React, {Suspense} from 'react';
import {Header} from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
import ScrollToTop from "./Component/innerComponent/ScrollToTop";
import {Loading} from "./Component/innerComponent/Loading";
import Routes from "./Routes";
import 'antd/dist/antd.css';



export default function App() {
    return (
        <div className="App">
            <ScrollToTop/>
            <Header/>
            <Suspense fallback={<Loading/>} >
            <Routes/>
            </Suspense>
            <Footer/>
        </div>
    );
}
