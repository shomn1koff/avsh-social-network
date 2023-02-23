import React, {Component} from 'react';
import Input from "../../UI/Input/Input";
import c from "./ProfileStatus.module.scss"

class ProfileStatus extends Component {

    state = {
        status: this.props.status,
        editMode: false
    }

    activateEditMode = () => {
        this.setState({
            editMode: true,
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false,
        })
        this.props.updateStatus(this.state.status)

    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {
        console.log(this.state)
        return (
            <div className={c.status_wrapper}>
                {!this.state.editMode && <div className={c.status} onClick={this.activateEditMode} >Статус: {this.props.status}</div>}
                {this.state.editMode && <Input autoFocus onChange={this.onStatusChange} onBlur={this.deactivateEditMode} value={this.state.status} placeholder={this.state.status}/>}
            </div>
        );
    }
}

export default ProfileStatus;