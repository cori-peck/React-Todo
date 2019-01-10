import React from 'react';
import KeyCode from 'keycode-js';

class InputBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value || ''
        };
    }

    handleChange(e) {
        this.setState({value: e.target.value});
    }

    clear() {
        this.setState({value: ''});
    }

    handleKeyUp(e) {
        if (e.keyCode === KeyCode.KEY_RETURN) {
            const {addNew} = this.props;
            const text = this.state.value.trim();

        if (e.keyCode === KeyCode.KEY_RETURN && text) {
            addNew(text);
            this.clear();
            }
        }
    }

    render() {
        return (<input
            type="text"
            value={this.state.value}
            onChange={this.handleChange.bind(this)}
            placeholder="Add New" 
        />);
    }
}

export default InputBox;