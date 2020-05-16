import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectModel } from '../Actions/index';
import s from './list.module.css'
import MenuItem from '@material-ui/core/MenuItem';


class  ModuleList extends Component {
    showList() {
        return this.props.models.map ((model) => {
            return (
                <div className={s.MenuItem}>
                <MenuItem onClick={() => this.props.selectModel(model)} key={model.id}>{model.model}</MenuItem>
                </div>
                );
        });
    }
    render () {
        return (
        <div>
            {this.showList ()}   
        </div>
        );
    }
}

function mapStateToProps (state) {
 return {
    models: state.models
 };
}

function matchDispatchToProps (dispatch) {
    return bindActionCreators ({selectModel:selectModel}, dispatch)
}

export default connect (mapStateToProps, matchDispatchToProps)(ModuleList);