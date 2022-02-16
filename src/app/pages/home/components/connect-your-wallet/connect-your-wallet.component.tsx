import './connect-your-wallet.component.scss'
import HeadingComponent from "../../../../components/ui/heading/heading.component";
import CardComponent from "../../../../components/card/card.component";
import {AnimationOnScroll} from "react-animation-on-scroll";

const CONNECT_YOUR_WALLET_CARDS = [
    {
        caption: 'No code smart-contract generator',
        stateClass: '',
        iconClass: 'pfi-file'
    },
    {
        caption: 'Connect your wallet by Metamask',
        stateClass: '--second',
        iconClass: 'pfi-fox'
    },
    {
        caption: 'Upload to gas free polygon blockchain or ETH',
        stateClass: '--tertiary',
        iconClass: 'pfi-group'
    },
    {
        caption: 'Your NFT PFP collection ready to mint by smart-contract',
        stateClass: '--fourth',
        iconClass: 'pfi-collection'
    },
]

const ConnectYourWalletComponent = () => {
    return (
        <section className="connect-your-wallet">
            <div className="container">
                <AnimationOnScroll animateIn="animate__fadeInUp" offset={150} duration={2.2} delay={1}>
                    <HeadingComponent hostClass={'--counter'} headingLevel={2} steps={2}>
                        Connect your wallet<br/>
                        & upload<span> smart-<br/>contract</span>
                    </HeadingComponent>
                </AnimationOnScroll>

                <div className="connect-your-wallet__list">

                    {
                        CONNECT_YOUR_WALLET_CARDS.map((item:any, i: number) => {
                            return (
                                <AnimationOnScroll key={i} animateIn="animate__fadeInUp" offset={150} duration={1.5} delay={1}>
                                    <CardComponent
                                        hostClass={item.stateClass}
                                        children={item.caption}
                                        iconClass={item.iconClass}/>
                                </AnimationOnScroll>
                            )
                        })
                    }

                </div>
            </div>
        </section>
    );
}

export default ConnectYourWalletComponent
