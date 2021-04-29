import React from 'react'

const Footer = () => {
    return (
        <footer style={styles}>
            Footer Works!
        </footer>
    )
}

const styles = {
    position: 'fixed',
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50px',
    backgroundColor: 'brown',
    width: '100%'
}

export default Footer
