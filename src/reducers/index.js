import {combineReducers} from 'redux'
import {reducer as form} from 'redux-form'
import events from './events'
//import { from } from 'rxjs';

export default combineReducers({events,form})