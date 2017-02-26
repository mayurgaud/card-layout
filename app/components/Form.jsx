import React from 'react';
import {Button, FormControl, Form, FormGroup} from 'react-bootstrap';
require('./App.css');

class CardForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: this.props.title,
            description: this.props.description,
            id: this.props.id
        };

        this.OnTitleChange = this.OnTitleChange.bind(this);
        this.OnDescriptionChange = this.OnDescriptionChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    OnTitleChange(e) {
        this.setState({title: e.target.value});
    }

    OnDescriptionChange(e) {
        this.setState({description: e.target.value});
    }

    handleSubmit() {
        var newCard = {
            title: this.state.title,
            description: this.state.description,
            id: this.state.id
        };

        this.setState((prevState) => ({
            title: '',
            description: '',
            id: prevState.id + 1
        }));

        this.props.onDataSubmit(newCard);
    }

    render() {
        const {title, description} = this.state;

        return (
            <div className="col-xs-12 col-sm-6 col-lg-3">
                <div className="thumbnail">
                    <div className="caption">
                        <Form>
                            <FormGroup controlId="formHorizontalTitle">
                                <FormControl
                                    type="text"
                                    name="title"
                                    placeholder="Enter title"
                                    onChange={this.OnTitleChange}
                                    value={title}
                                />
                            </FormGroup>
                            <FormGroup controlId="formControlsTextarea">
                                <FormControl
                                    componentClass="textarea"
                                    placeholder="Enter Description"
                                    onChange={this.OnDescriptionChange}
                                    value={description}
                                />
                            </FormGroup>
                            <Button
                                bsStyle="primary"
                                bsSize="large"
                                disabled={!title}
                                block onClick={this.handleSubmit}
                            >
                                {this.props.buttonValue}
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>

        );
    }
}

CardForm.propTypes = {
    title: React.PropTypes.string,
    description: React.PropTypes.string,
    id: React.PropTypes.number,
    buttonValue: React.PropTypes.string,
    onDataSubmit: React.PropTypes.func
};

// Specifies the default values for props:
CardForm.defaultProps = {
    title: '',
    description: '',
    id: 1
};

export default CardForm;