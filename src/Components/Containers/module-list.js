import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectModel } from '../Actions/index';
import { Nav} from 'react-bootstrap';
import s from './list.module.css'

class  ModuleList extends Component {
    showList() {
        return this.props.models.map ((model) => {
            return (
            <Nav variant="pills" className={s.Nav}>
                <Nav.Item className={s.Item} >
                    <Nav.Link style={{color: 'black', fontWeight: 'bold', borderColor: '#92cbe6'}} onClick={() => this.props.selectModel(model)} key={model.id}>{model.model}</Nav.Link>
                </Nav.Item>
            </Nav>
                
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