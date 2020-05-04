import { combineReducers } from 'redux';
import ModelReducers from './model';
import ActiveModel from './model-active'

const allReducers = combineReducers ({
    models: ModelReducers, 
    active: ActiveModel
});

export default allReducers;