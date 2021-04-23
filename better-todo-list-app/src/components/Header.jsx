import PropTypes from 'prop-types'
import Button from './Button';

const Header = ({onAdd, showAdd}) => {
    return (
        <header className='header'>
            <h1> Taks Tracker</h1> 
            <Button 
                color={showAdd ? 'red' : 'green'}
                text={showAdd ? 'Close' : 'Add'}
                onClick={onAdd}>
            </Button>    
        </header>
    )
}


// --- Default Props ---
// This will be overwritten in case of a prop passed
Header.defaultProps = {
    title: 'Task Tracker' 
}

// --- Prop Types 
// This ensures that the props passed are in the correct type and more
// We will get an error if we pass e.g. a number for a title 
// defaultProps will kick in if thats the case above 
Header.propTypes = {
    title: PropTypes.string
}

/*
// --- Dynamic Styling --- css in js
const headingStyle = {
    color: 'red',
    backgroundColor: 'yellow'
} 
// style={headingStyle} to the element that we want to style
*/

export default Header
