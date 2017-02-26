/*
 * action types
 */

export const ADD_CARD = 'ADD_CARD';
export const DELETE_CARD = 'DELETE_CARD';
export const EDIT_CARD = 'EDIT_CARD';
export const UPDATE_CARD = 'UPDATE_CARD';

/*
 * action creators
 */

export function addCard(cardData) {
    return {type: ADD_CARD, cardData}
}

export function deleteCard(cardIndex) {
    return {type: DELETE_CARD, cardIndex}
}

export function updateCard(cardData) {
    return {type: UPDATE_CARD, cardData}
}

export function editCard(cardId) {
    return {type: EDIT_CARD, cardId}
}