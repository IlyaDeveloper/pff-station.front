import React, {useState} from 'react'

// import './app.scss'
import HeaderComponent from "./components/common/header/header.component";
import HomeComponent from "./pages/home/home.component";
// import icons from '../assets/fonts/icons/'

const app = () => {
    return (
        <main>
            <HeaderComponent/>
            <HomeComponent/>
        </main>

    )
}

export default app
