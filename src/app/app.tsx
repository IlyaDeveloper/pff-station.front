import React, {useState, useEffect} from 'react'
import HeaderComponent from "./components/common/header/header.component";
import HomeComponent from "./pages/home/home.component";

const app = () => {
    return (
        <main>
            <HeaderComponent/>
            <HomeComponent/>
        </main>
    )
}

export default app
