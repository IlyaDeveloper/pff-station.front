import './home.component.scss'

import GetAccessComponent from "./components/get-access/get-access.component";
import ConnectYourWalletComponent from "./components/connect-your-wallet/connect-your-wallet.component";
import OwnWebsiteComponent from "./components/own-website/own-website.component";
import DesignUploadComponent from "./components/design-upload/design-upload.component";
import WelcomeComponent from "./components/welcome/welcome.component";
import DownSteps from "./components/down-steps/down-steps.component";
import {AnimationOnScroll} from "react-animation-on-scroll";

const HomeComponent = () => {
    return (
        <section className="home">
            <article className="home__main-blocks">
                <WelcomeComponent/>

                <DesignUploadComponent/>

                {/*<article className="home__stiky">*/}
                {/* */}
                {/*</article>*/}

                {/*<DownSteps className="--1"/>*/}
                <ConnectYourWalletComponent/>
                {/*<DownSteps className="--2"/>*/}
                <OwnWebsiteComponent/>
                <AnimationOnScroll animateIn="animate__fadeInDown" offset={250} duration={2.5} delay={21}>
                    <DownSteps/>
                </AnimationOnScroll>
            </article>
            <GetAccessComponent/>
        </section>
    );
}

export default HomeComponent
