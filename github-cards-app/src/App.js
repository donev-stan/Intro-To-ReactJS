import React from 'react';
import './App.css';
import CardList from './CardList';
import Form from './Form';

// Class Component
class App extends React.Component {

  state = {
    profiles: []
  };

  addNewProfile = (profileData) => {
    console.log(profileData);

    this.setState(prevState => ({
      profiles: [...prevState.profiles, profileData]
    }))
  }

  render() {
    return (
      <>
        <div className="header"> {this.props.title} </div>
        <Form onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profiles}/>
      </>
    );
  };
}

export default App;

// Function Component
// function App({title}) {
//   return (
//     <div className="header"> {title} </div>
//   );
// }