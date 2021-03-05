import {createStore} from 'redux';
import {NoteReducer} from './NoteReducer';

export const store = createStore(NoteReducer)