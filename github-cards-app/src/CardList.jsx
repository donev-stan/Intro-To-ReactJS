import React from 'react';
import Card from './Card';

class CardList extends React.Component {
    render(){
        const profiles = this.props.profiles;

        return(
            <div>
                {profiles.map(profile => <Card key={profile.id} {...profile} />)}
            </div>
        )
    }
}

export default CardList; 