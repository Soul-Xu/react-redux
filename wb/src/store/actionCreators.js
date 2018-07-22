import { ADD_COMMENT, CHANGE_INPUT, FRESH_COMMENT, ADD_ADMIRE } from './actionTypes'

export const addComment = () => ({
    type: ADD_COMMENT
})

export const changeInput = (value) => ({
    type: CHANGE_INPUT,
    value
})

export const freshComment = () => ({
    type: FRESH_COMMENT
})

export const addAdmire = (index) => ({
    type: ADD_ADMIRE,
    index
})