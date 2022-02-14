import './own-website.component.scss'
import HeadingComponent from "../../../../components/ui/heading/heading.component";
import PictureWrapComponent from "../../../../components/picture-wrap/picture-wrap.component";

const OwnWebsiteComponent = () => {
    return (
        <section className={'own-website'}>
            <div className="container">
                <HeadingComponent hostClass={'--counter'} headingLevel={2}  steps={2}>
                    Make<br/>
                    your <span>own website</span><br/>
                    to sell NFT
                </HeadingComponent>


                <ul className={'own-website__list'}>
                    <li>Free website editor</li>
                    <li>Use your own domain if you want</li>
                    <li>Free website editor</li>
                </ul>

                <div>
                    <PictureWrapComponent />
                </div>
            </div>
        </section>
    );
}

export default OwnWebsiteComponent
