import React from 'react'

const Footer = () => {
    return (
        <footer style={styles}>
            Uni Intro Project
        </footer>
    )
}

const styles = {
    position: 'fixed',
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '35px',
    backgroundColor: 'rgb(52,58,64)',
    width: '100%',
    color: 'white'
}

export default Footer
