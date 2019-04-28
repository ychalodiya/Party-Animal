import React from 'react';

function Header(props) {

    // we want to access props in here
    const message = props.message ? props.message : 'the default message';
    return (
        <header className="headerComponent">
            <h1> { props.title } </h1>
            <h2> { message } </h2>
            
        </header>
    );
}

export default Header;
