import React, { Component } from 'react';
import { connect } from 'react-redux';
import s from './list.module.css'


class Details extends Component {
    render () {
        if(!this.props.model) {
            return (<p></p>)
        }
        return (
            <div className={s.tabel}>
                
                <h2 className={s.model}>{this.props.model.model}</h2>

                <div className={s.allInf}>
                <div><img src={this.props.model.img}/></div>
                <div className={s.textImg}>
                    <h3>Описание</h3>
                    {this.props.model.text}}
                </div>
                </div>

                <div className={s.allInformation}>
                    <h3>Технические характеристи</h3>
                <div className={s.textString}>
                <div className={s.itemTitel}><b>Диагональ:</b></div>
                <div className={s.itemText}>{this.props.model.diagonal}</div>
                </div>
                <div className={s.textString}>
                <div className={s.itemTitel}><b>Разрешение:</b></div>
                <div className={s.itemText}>{this.props.model.resolution}</div>
                </div>
                <div className={s.textString}>
                <div className={s.itemTitel}><b>Котрастность:</b></div> 
                <div className={s.itemText}>{this.props.model.contrast}</div>
                </div>
                <div className={s.textString}>
                <div className={s.itemTitel}><b>Яркость:</b></div> 
                <div className={s.itemText}>{this.props.model.brightness}</div>
                </div>
                <div className={s.textString}>
                <div className={s.itemTitel}><b>Видео интерфейс:</b></div>
                <div className={s.itemText}>{this.props.model.interface}</div>
                </div>
                <div className={s.textString}>
                <div className={s.itemTitel}><b>Угол обзора (по вертикали/ по горизонтали):</b> </div>
                <div className={s.itemText}>{this.props.model.viewing}</div>
                </div>
                <div className={s.textString}>
                <div className={s.itemTitel}><b>Рабочая темепатура:</b> </div>
                <div className={s.itemText}>{this.props.model.workTemperature}</div>
                </div>
                <div className={s.textString}>
                <div className={s.itemTitel}><b>Предельная тепература:</b></div> 
                <div className={s.itemText}>{this.props.model.marginalTemperature}</div>
                </div>
                <div className={s.textString}>
                <div className={s.itemTitel}><b>Разрешение экрана:</b></div> 
                <div className={s.itemText}>{this.props.model.power}</div>
                </div>
                <div className={s.textString}>
                <div className={s.itemTitel}><b>Вес:</b></div>
                <div className={s.itemText}>{this.props.model.weight}</div>
                </div>
                <div className={s.textString}>
                <div className={s.itemTitel}><b>Габариты устройства:</b></div>
                <div className={s.itemText}>{this.props.model.size}</div>
                </div>
                </div>
             
    
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
       model: state.active
    };
   }
export default connect (mapStateToProps)(Details)