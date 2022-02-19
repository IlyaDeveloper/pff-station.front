import {Component} from "react";
import {Dropdown} from "react-bootstrap";

import './user-info.component.scss'

interface UserInfoProps {
    children?: React.ReactNode;
    name:  string
}

class UserInfoComponent extends Component<UserInfoProps> {
    render() {
        return (
            <div className="user-info">
                <mark>{this.props.name}</mark>
                <span className="pfi-user"></span>

                <Dropdown>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">profile</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">logout</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        );
    }
}

export default UserInfoComponent
