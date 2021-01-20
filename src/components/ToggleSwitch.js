import React from 'react'


class ToggleSwitch extends React.Component {
    constructor(props) {
        super(props)
        this.state = { isToggleOn: false }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState((prevState) => ({
            isToggleOn: !prevState.isToggleOn
        }))
    }

    render() {
        return (
            <div onClick={this.handleClick} className="ToggleSwitch">
                <div className={this.state.isToggleOn ? 'knob active' : 'knob'} />
                {this.state.isToggleOn ? 'toggle me' : 'un-toggle'}
            </div>
        )
    }
}

export default ToggleSwitch
