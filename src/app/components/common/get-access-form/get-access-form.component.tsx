import {Component} from "react";
import './get-access-form.component.scss'
import InputComponent from "../../ui/input/input.component";
import ButtonComponent from "../../ui/button/button.component";
import axios from 'axios';

interface GetAccessFormPops {
}

const API_SERVER = 'https://api.pfpstation.com/users/email';
const STATUS = {
    error: 'This email is already registered',
    fillingError: 'Filling error, you may have entered incorrect data',
    success: 'Thank you is success send your email',
};

class GetAccessFormComponent extends Component<GetAccessFormPops> {
    constructor(props: any) {
        super(props);

        this.state = {
            email: '',
            showResults: false,
            statusResults: '',
            statusClass: ''
        };

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    showResultsToggle(stat: string, valid: boolean) {
        let statClass = (valid) ? '--error' : '';

        this.setState({
            showResults: true,
            statusResults: stat,
            statusClass: statClass
        })

        let timer = setInterval(() => {
            this.setState({showResults: false})
            clearInterval(timer)

        }, 4500)
    }

    handleChange(event: any) {
        this.setState({
            email: event.target.value
        })
    }

    handleSubmit(event: any) {
        event.preventDefault();

        let data = new FormData();
        let regExp = '/^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$/g'
        let conf = {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
        };

        // @ts-ignore
        let msg = this.state.email

        data.append('email', msg);

        if (msg === '' || (msg.search(regExp) != -1)) {
            console.log('fillingError ');
            this.showResultsToggle(STATUS.fillingError, true);
            return
        }

        return axios
            .post(API_SERVER, data, conf)
            .then(resolve => {
                this.setState({
                    email: ''
                })

                this.showResultsToggle(STATUS.success, false);
                return resolve
            })
            .catch(err => {
                this.showResultsToggle(STATUS.error, true)
            });
    }

    render() {
        const Results = () => (
            <div className="animate__animated animate__zoomIn ">
                <div className={
                    // @ts-ignore
                    `get-access-form__msg ${this.state.statusClass || ''}`
                }>
                    {
                        // @ts-ignore
                        this.state.statusResults
                    }
                </div>
            </div>
        )

        return (
            <div className="get-access-form">
                <form className="get-access-form__main" onSubmit={this.handleSubmit}>
                    <InputComponent type={'email'}
                                    name="getAccessForm"
                                    placeholder={'example@gmail.com'}
                                    value={
                                        // @ts-ignore
                                        this.state.email
                                    }
                                    onChange={this.handleChange}/>

                    <ButtonComponent hostClass={'--large'} type={'submit'}>Send</ButtonComponent>
                </form>
                {
                    // @ts-ignore
                    this.state.showResults ? <Results/> : null
                }
            </div>
        );
    }
}

export default GetAccessFormComponent
