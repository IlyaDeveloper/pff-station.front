import './design-upload.component.scss';
import HeadingComponent from "../../../../components/ui/heading/heading.component";
import PictureWrapComponent from "../../../../components/picture-wrap/picture-wrap.component";

const DesignUploadComponent = () => {
    return (
        <section className="design-upload">
            <div className="container">
                <HeadingComponent hostClass={'--counter'} headingLevel={2} steps={1}>
                    Design & Upload<br/>
                    <span>PFP Collection</span>
                </HeadingComponent>

                <div className="design-upload__items">
                    <mark className="design-upload__item --cloud">
                        Upload your collection or create with free profile picture editor
                    </mark>
                    <mark className="design-upload__item --property">Set property of NFT-tokens</mark>
                    <mark className="design-upload__item --box">Free IPFS upload</mark>
                </div>

                <div className="design-upload__right">
                    <PictureWrapComponent/>
                </div>
            </div>
        </section>
    )
}

export default DesignUploadComponent
