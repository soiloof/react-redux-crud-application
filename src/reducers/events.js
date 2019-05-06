import {READ_EVENTS,DELETE_EVENT, READ_EVENT,UPDATE_EVENT,CREATE_EVENT} from '../actions'
import _ from 'lodash'
import { id } from 'postcss-selector-parser';

export default (events={},action) => {
    switch(action.type){
        case UPDATE_EVENT:
        case CREATE_EVENT:
        case READ_EVENTS:
            return _.mapKeys(action.response.data,'id')
        case DELETE_EVENT:
            delete events[action.id]
            return {...events}
        case READ_EVENT:
            const data = action.response.data
            return {...events,[data.id]:data}
        default:
            return events
    }
}
