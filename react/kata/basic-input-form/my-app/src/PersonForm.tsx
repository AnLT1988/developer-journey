import React, { SyntheticEvent } from "react"

interface PersonFormProp {
    onChange: any
}

interface PersonFormState {
    name: string
    age: string
}

class PersonForm extends React.Component<PersonFormProp, PersonFormState> {

    constructor(props: PersonFormProp) {
        super(props)
        this.state = {
            name: '',
            age: '',
        }

        this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleInputChange(e: SyntheticEvent<HTMLInputElement>) {
        const name = e.currentTarget.name;
        const value = e.currentTarget.value;
        this.setState((state) => {
            return { ...state, [name]: value }
        })
    }

    componentDidUpdate() {
        if (this.props.onChange) {
            this.props.onChange(this.state)
        }
    }

    render() {
        return (
            <div className="container">

                <div className='form-row'>
                    <label htmlFor='name'>Name: </label>
                    <input className='form-control' id='name' name='name' placeholder="your name"
                        value={this.state.name} onChange={this.handleInputChange} />

                </div>
                <div className="form-row">

                    <label className='form-label' htmlFor='age'>Age: </label>
                    <input className='form-control' id='age' name='age' placeholder="and your age is?"
                        value={this.state.age} onChange={this.handleInputChange} />
                </div>
            </div>
        )
    }
}
export default PersonForm