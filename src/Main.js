import React from 'react';
import Nav from './Nav';
import Content from './Content';

function Main() {
    return(
        <>
            <div id="Main" className="mt-3 mb-5 ms-5 me-5">
                <Nav />
                <Content />
            </div>
        </>
    );
}

export default Main;
