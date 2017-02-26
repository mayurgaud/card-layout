/*
 * Action types
 */

export const ADD_CARD = 'ADD_CARD';
export const DELETE_CARD = 'DELETE_CARD';
export const EDIT_CARD = 'EDIT_CARD';
export const UPDATE_CARD = 'UPDATE_CARD';

/*
 * Action creators
 */

/**
 * Create card action
 *
 * @param cardData
 * @returns {{type: string, cardData: *}}
 */
export function addCard(cardData) {
    return {type: ADD_CARD, cardData}
}

/**
 * Delete card action
 *
 * @param cardIndex
 * @returns {{type: string, cardIndex: *}}
 */
export function deleteCard(cardIndex) {
    return {type: DELETE_CARD, cardIndex}
}

/**
 * Update card action
 *
 * @param cardData
 * @returns {{type: string, cardData: *}}
 */
export function updateCard(cardData) {
    return {type: UPDATE_CARD, cardData}
}

/**
 * Edit card action
 *
 * @param cardId
 * @returns {{type: string, cardId: *}}
 */
export function editCard(cardId) {
    return {type: EDIT_CARD, cardId}
}