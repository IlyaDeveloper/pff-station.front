import {Component} from "react";
import './card.component.scss'

interface CardProps {
    children?: React.ReactNode;
    hostClass?: string,
    iconClass?: string,
}

class CardComponent extends Component<CardProps> {
    render() {
        return (
            <article className={'card ' + this.props.hostClass}>
                <div className={'card__icon ' + this.props.iconClass}></div>

                <p className="card__text">
                    {this.props.children}
                </p>
            </article>
        );
    }
}

export default CardComponent
