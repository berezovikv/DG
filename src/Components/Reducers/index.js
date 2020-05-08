import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import ModelReducers from './model';
import ActiveModel from './model-active'

const allReducers = combineReducers ({
    models: ModelReducers, 
    active: ActiveModel,
    form: formReducer,
});

export default allReducers;