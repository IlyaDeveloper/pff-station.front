import React, {useState, useEffect} from 'react'
import HeaderComponent from "./components/common/header/header.component";
import HomeComponent from "./pages/home/home.component";
import {Navigate, Route, Routes, useLocation} from 'react-router-dom';
import FooterComponent from "./components/common/footer/footer.component";
import TermsComponent from "./pages/terms/terms.component";
import AgreementComponent from "./pages/agreement/agreement.component";
import AuthComponent from "./pages/auth/auth.component";
import DashboardComponent from "./pages/dashboard/dashboard.component";
import ProfileComponent from "./pages/profile/profile.component";
import TemplateEngineComponent from "./pages/template-engine/template-engine.component";

const applyGetAccessOffset = () => {
    const emlBody: HTMLElement = document.getElementsByTagName('body')[0],
        setOffsetStyle = () => emlBody.setAttribute('style', '--get-access-height: calc(100vh - 0.1px)'),
        setOffsetStyleNull = () => emlBody.setAttribute('style', '');

    const location = useLocation();

    console.log('location.pathname', location.pathname);
    (location.pathname == '/') ? setOffsetStyle() : setOffsetStyleNull();
}

const app = (props: any) => {
    applyGetAccessOffset();

    return (
        <main>
            <HeaderComponent/>
            <Routes>
                <Route path="/" element={<HomeComponent/>}/>
                <Route path="*" element={<Navigate to="/"/>}/>
                <Route path="/auth" element={<AuthComponent/>}/>
                <Route path="/dashboard" element={<DashboardComponent/>}/>
                <Route path="/profile" element={<ProfileComponent/>}/>
                <Route path="/template" element={<TemplateEngineComponent/>}/>
                <Route path="/agreement" element={<AgreementComponent/>}/>
                <Route path="/terms" element={<TermsComponent/>}/>
            </Routes>

            <FooterComponent/>
        </main>
    )
}

export default app
