import {Component} from "react";
import 'home.component.scss'
import GetAccessComponent from "./components/get-access/get-access.component";
import ConnectYourWalletComponent from "./components/connect-your-wallet/connect-your-wallet.component";
import DesignUpload from "./components/design-upload/design-upload.component";
import OwnWebsiteComponent from "./components/own-website/own-website.component";
import DesignUploadComponent from "./components/design-upload/design-upload.component";
import WelcomeComponent from "./components/welcome/welcome.component";

const HomeComponent = () =>{
        return (
            <div>
                <WelcomeComponent/>
                <DesignUploadComponent/>
                <ConnectYourWalletComponent/>
                <OwnWebsiteComponent/>
                <GetAccessComponent/>
            </div>
        );
}

export default HomeComponent
