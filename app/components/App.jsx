import React from 'react';
require('./App.css');
import FormComponent from './Form';
import _ from 'lodash';
import {Button, ButtonToolbar, Grid, Row, Col, Thumbnail} from 'react-bootstrap';
import {connect} from 'react-redux'
import {addCard, updateCard, deleteCard, editCard} from '../actions'

/**
 * Displays card layout
 */
class App extends React.Component {
    constructor(props) {
        super(props);

        this.deleteCard = this.deleteCard.bind(this);
        this.editCard = this.editCard.bind(this);
        this.updateCard = this.updateCard.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    /**
     * Add card
     *
     * @param card
     */
    handleSubmit(card) {
        this.props.dispatch(addCard(card));
    }

    /**
     * Delete Card
     *
     * @param e
     */
    deleteCard(e) {
        let cardIndex = e.target.id.replace('card', '');
        this.props.dispatch(deleteCard(cardIndex));
    }

    /**
     * Edit card
     *
     * @param e
     */
    editCard(e) {
        let card = e.target.id.replace('card', '');
        this.props.dispatch(editCard(card));
    }

    /**
     * Update card
     *
     * @param e
     */
    updateCard(e) {
        this.props.dispatch(updateCard(e));
    }

    render() {
        const cards = _.sortBy(this.props.cards, [function (o) {
            return o.id;
        }]);

        return (
            <Grid>
                <Row className="flex-row">
                    {cards.map((card, index) => (
                        this.props.cardId != card.id ?
                            <Col key={card.id} xs={12} sm={6} lg={3} className="card-collection">
                                <div className="card">
                                    <Thumbnail>
                                        <div className="caption">
                                            <h3>{card.title}</h3>
                                            <p className="flex-text text-muted">{card.description}</p>
                                        </div>
                                        <div className="overLay">
                                            <ButtonToolbar>
                                                <Button bsStyle="success" id={`card${card.id}`} onClick={this.editCard}>Edit</Button>
                                                <Button bsStyle="success" id={`card${index}`} onClick={this.deleteCard}>Delete</Button>
                                            </ButtonToolbar>
                                        </div>
                                    </Thumbnail>
                                </div>
                            </Col> :
                            <FormComponent
                                onDataSubmit={this.updateCard}
                                title={card.title}
                                description={card.description}
                                id={card.id}
                                key={card.id}
                                buttonValue="Update Card"
                            />
                    ))}
                    <FormComponent onDataSubmit={this.handleSubmit} buttonValue="Create Card"/>
                </Row>
            </Grid>
        );
    }
}

App.propTypes = {
    cardId: React.PropTypes.string,
    cards: React.PropTypes.array
};

const mapStateToProps = state => {
    return state
};

App = connect(mapStateToProps)(App);

export default App;