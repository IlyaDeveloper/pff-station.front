import React, {useState} from 'react'

import './app.scss'
import HeaderComponent from "./components/common/header/header.component";
import HeadingComponent from "./components/ui/heading/heading.component";
import HomeComponent from "./pages/home/home.component";

const app = () => {
    return (
        <main>
            <HeadingComponent/>
            <HomeComponent/>
        </main>

    )
}

export default app
