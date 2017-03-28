import * as types from 'actions/ActionTypes';
import update from 'react-addons-update';

const initialState = {
    post: {
        status: 'INIT',
        error: -1
    },
    list: {
        status: 'INIT',
        data: [],
        isLast: false
    },
    edit: {
        status: 'INIT',
        error: -1
    },
    remove: {
        status: 'INIT',
        error: -1
    },
    star: {
        status: 'INIT',
        error: -1
    }
};