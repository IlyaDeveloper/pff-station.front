import StepItemComponent from "../../../../components/ui/step-item/step-item.component";
import './down-steps.component.scss';

const DownSteps = (props: any) => {
    const {className}: any = props;

    return (
        <section className={'down-steps ' + className}>
            <div className="container">
                <StepItemComponent step={1}>
                    Design & Upload <br/>PFP Collection
                </StepItemComponent>
                <StepItemComponent step={2}>
                    Connect your wallet <br/>& upload smart-contract
                </StepItemComponent>
                <StepItemComponent step={3}>
                    Make your own <br/>website to sell NFT
                </StepItemComponent>
            </div>
        </section>
    );
};

export default DownSteps;
