import React from 'react'

class Form extends React.Component {
    // userNameInput = React.createRef();

    state = { userName: '' };

    handleSubmit = (event) => {
        event.preventDefault();
        // console.log(this.userNameInput.current.value);
        console.log(this.state.userName);

        fetch(`https://api.github.com/users/${this.state.userName}`)
            .then(response => response.json())
            .then(data => {
                this.props.onSubmit(data);
                this.setState({ userName: '' })
            });
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text" 
                    placeholder="GitHub Username" 
                    // ref={this.userNameInput} 
                    value={this.state.userName}
                    onChange={(event)=> this.setState({userName: event.target.value})}
                    required
                />

                <button>Add Card</button>
            </form>
        )
    }
}

export default Form