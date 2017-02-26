export default (state = {
    cardId: '',
    cards: []
}, action) => {
    switch (action.type) {
        case 'ADD_CARD':
            return {...state, cards: [...state.cards, action.cardData]};
        case 'DELETE_CARD':
            return {
                ...state,
                cards: [...state.cards.slice(0, action.cardIndex), ...state.cards.slice(action.cardIndex + 1)]
            };
        case 'EDIT_CARD':
            return {
                ...state,
                cardId: action.cardId
            };
        case 'UPDATE_CARD':
            return {
                ...state,
                cards: [
                    ...state.cards.filter(x => action.cardData.id !== x.id),
                    {id: action.cardData.id, title: action.cardData.title, description: action.cardData.description}
                ],
                cardId: ''
            };
        default:
            return state
    }
}