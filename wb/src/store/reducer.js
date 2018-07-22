import { ADD_COMMENT, CHANGE_INPUT, FRESH_COMMENT, ADD_ADMIRE } from './actionTypes';
import axios from 'axios'

const defaultState = {
    inputValue: '',
    userList: []
}

export default (state = defaultState, action) => {
    if (action.type === ADD_COMMENT) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.userList.push({
            username: 'Soul_Xu', 
            comment: newState.inputValue,
            time: '22',
            plateform: 'ND 31',
            avatar: 'avatar',
            admire:0
        });
        newState.inputValue = '';
        return newState;
    }
    if (action.type === CHANGE_INPUT) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    if (action.type === FRESH_COMMENT) {
        const newState = JSON.parse(JSON.stringify(state));
        axios.get('/userlist.json')
            .then((res) => {
                newState.userList = res.data;
            })
            .catch(() => {alert('ERROR!')})
        return newState;
    }
    if (action.type === ADD_ADMIRE) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.userList[action.index].admire += 1;
        return newState;
    }
    return state;
}