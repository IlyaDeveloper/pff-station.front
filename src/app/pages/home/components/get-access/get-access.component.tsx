import HeadingComponent from "../../../../components/ui/heading/heading.component";
import GetAccessFormComponent from "../../../../components/common/get-access-form/get-access-form.component";

import './get-access.component.scss'

const GetAccessComponent = () => {

    return (
        <section className={'get-access'}>
            <div className="container">
                <div className="get-access__main">
                    <HeadingComponent hostClass={'--h1'} headingLevel={1}>
                        Get <span>early access</span><br/>to the beta version
                    </HeadingComponent>

                    <GetAccessFormComponent/>

                </div>
            </div>
        </section>
    );
}

export default GetAccessComponent
