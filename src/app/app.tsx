import React, {useState, useEffect} from 'react'
// import WebFont from 'webfontloader';
import HeaderComponent from "./components/common/header/header.component";
import HomeComponent from "./pages/home/home.component";

// useEffect(() => {
//     WebFont.load({
//         google: {
//             families: ['Droid Sans', 'Chilanka']
//         }
//     });
// }, []);

const app = () => {
    return (
        <main>
            <HeaderComponent/>
            <HomeComponent/>
        </main>

    )
}

export default app
