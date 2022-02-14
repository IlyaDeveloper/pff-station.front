import './own-website.component.scss'
import HeadingComponent from "../../../../components/ui/heading/heading.component";
import PictureWrapComponent from "../../../../components/picture-wrap/picture-wrap.component";
import IconComponent  from "../../../../components/ui/icon/icon.component";

const OwnWebsiteComponent = () => {
    return (
        <section className={'own-website'}>
            <div className="container">
                {/*<HeadingComponent hostClass={'--counter'} headingLevel={2}  steps={'2'}>*/}
                {/*    Make<br/>*/}
                {/*    your <span>own website</span><br/>*/}
                {/*    to sell NFT*/}
                {/*</HeadingComponent>*/}


                <ul className={'own-website__list'}>
                    <li>Free website editor</li>
                    <li>Use your own domain if you want</li>
                    <li>Free website editor</li>
                </ul>
                {/*<IconComponent icon="star" color="#444" size={100} />*/}

                <IconComponent icon="heart1" size={50} color="#5096ec" />
                <IconComponent icon="chat" size={50} color="#5096ec" />
                <IconComponent icon="camera" size={50} color="#5096ec" />
                <IconComponent icon="genius" size={50} color="#5096ec" />
                <div>
                    {/*<PictureWrapComponent />*/}
                </div>
            </div>
        </section>
    );
}

export default OwnWebsiteComponent
