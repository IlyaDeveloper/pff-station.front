import HeadingComponent from "../../../../components/ui/heading/heading.component";
import StepItemComponent from "../../../../components/ui/step-item/step-item.component";
import InputComponent from "../../../../components/ui/input/input.component";
import ButtonComponent from "../../../../components/ui/button/button.component";

import './get-access.component.scss'


const GetAccessComponent = () => {
    return (
        <section className={'get-access'}>
            <div className="container">
                <div className="get-access__main">
                    <HeadingComponent hostClass={'--h1'} headingLevel={1}>
                        Get <span>early access</span><br/>to the beta version
                    </HeadingComponent>

                    <div className="get-access__fieldset">
                        <InputComponent type={'text'} placeholder={'example@gmail.com'}/>
                        <ButtonComponent hostClass={'--large'}>Send</ButtonComponent>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default GetAccessComponent
