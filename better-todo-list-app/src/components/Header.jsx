import PropTypes from 'prop-types'

const Header = (props) => {
    return (
        <header>
            <h1>{props.title}, Task Tracker</h1>            
        </header>
    )
}

// This will be overwritten in case of a prop passed
Header.defaultProps = {
    title: 'Task Tracker' 
}

// This ensures that the props passed are in the correct type and more
// We will get an error if we pass e.g. a number for a title 
// defaultProps will kick in if thats the case above
Header.propTypes = {
    title: PropTypes.string
}

export default Header
