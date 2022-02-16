import './home.component.scss'

import GetAccessComponent from "./components/get-access/get-access.component";
import ConnectYourWalletComponent from "./components/connect-your-wallet/connect-your-wallet.component";
import OwnWebsiteComponent from "./components/own-website/own-website.component";
import DesignUploadComponent from "./components/design-upload/design-upload.component";
import WelcomeComponent from "./components/welcome/welcome.component";
import DownSteps from "./components/down-steps/down-steps.component";
import {AnimationOnScroll} from "react-animation-on-scroll";

// import Fade from '@stahl.luke/react-reveal/Fade';

const HomeComponent = () => {
    return (
        <section className="home">
            <article className="home__main-blocks">
                <WelcomeComponent/>

                <DesignUploadComponent/>

                <article className="home__stiky">
                    <AnimationOnScroll animateIn="animate__fadeInUp" offset={250} duration={1.5}>
                        <DownSteps/>
                    </AnimationOnScroll>
                </article>

                {/*<DownSteps className="--1"/>*/}
                <ConnectYourWalletComponent/>
                {/*<DownSteps className="--2"/>*/}
                <OwnWebsiteComponent/>
            </article>
            <GetAccessComponent/>
        </section>
    );
}

export default HomeComponent
