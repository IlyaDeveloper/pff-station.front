import {Component} from "react";
import './tm.component.scss'

interface CardCollectionProps {
    children?: React.ReactNode;
    onClick: () => void,
    caption: string,
    img: string,
    icon: string,
    count: string,
    hostClass: string,
}

class CardCollectionComponent extends Component<CardCollectionProps> {
    render() {
        return (
            <article className={'card-collection'}>
                <mark className="card-collection__name">
                    {this.props.caption}
                </mark>
                <span className={`${this.props.icon}`}></span>

                <picture className="card-collection__img">
                    <img src="" alt=""/>
                </picture>

                <div className="">
                    {this.props.count}
                </div>
            </article>
        );
    }
}

export default CardCollectionComponent
