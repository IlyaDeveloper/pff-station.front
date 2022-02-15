import './terms.component.scss'
import HeadingComponent from "../../components/ui/heading/heading.component";

const TermsComponent = () => {
    return (
        <div className="terms">
            <div className="container">

                <HeadingComponent>
                    Terms of Condition
                    <p className="terms__text">
                        <span>Version 1.0</span>
                        <br/>
                        <span>Effective Date: 02/15/2022</span>
                        <br/>
                        <span>Last Updated Date: 02/15/2022</span>
                    </p>

                </HeadingComponent>

                <p className="terms__content">
                    Please read this terms of use agreement (these “terms of use”) carefully. these terms of use govern
                    your access to and use of this website and any other websites of PFP Station. (“company”,
                    “we”, “us”, or “our”), its affiliates or agents (collectively, the “website”), our mobile
                    applications, if any (each an “application”) and any services provided by company, its affiliates or
                    agents through the website or apps or on which a link to this terms of use is displayed
                    (collectively with the website and any applications, the “services”).
                    <br/>
                    <br/>

                    By clicking on the “i accept” button, completing the registration process, and/or accessing or using
                    the services, you represent and warrant that you have the right, authority, and capacity to enter
                    into these terms of use. if
                    you do not agree to be bound by the terms of use, if you are an individual under the age of 18, have
                    previously been removed or banned from the services by company, or are not of legal age to form a
                    binding contract or if your access to or use of the services is illegal or prohibited under
                    applicable law, you may not access or use the services.
                </p>

            </div>


        </div>
    );
}

export default TermsComponent
