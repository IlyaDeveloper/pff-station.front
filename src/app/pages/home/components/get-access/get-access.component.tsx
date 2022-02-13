import HeadingComponent from "../../../../components/ui/heading/heading.component";
import StepItemComponent from "../../../../components/ui/step-item/step-item.component";
import InputComponent from "../../../../components/ui/input/input.component";
import ButtonComponent from "../../../../components/ui/button/button.component";

import './get-access.component.scss'


const GetAccessComponent = () => {
    return (
        <section className={'get-access'}>
            <div className="container">
                <div className="get-access__top">
                    <StepItemComponent step={1} children={'Design & Upload PFP Collection'}/>
                    <StepItemComponent step={2} children={'Connect your wallet & upload smart-contract'}/>
                    <StepItemComponent step={3} children={'Make your own website to sell NFT'}/>
                </div>
                <div className="get-access__main">
                    <HeadingComponent hostClass={'--h1'} headingLevel={1}>
                        Get <span>early access</span><br/>to the beta version
                    </HeadingComponent>

                    <div className="get-access__fieldset">
                        <InputComponent type={'submit'} placeholder={'example@gmail.com'}/>
                        <ButtonComponent>Send</ButtonComponent>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default GetAccessComponent
