import React from 'react'
import ReactDOM from 'react-dom'
const renderId = (jsx, id) => {
    ReactDOM.render(
        jsx,
        document.getElementById(id)
    );
}
const renderCl = (jsx, className) => {
    ReactDOM.render(
        jsx,
        document.getElementByClassName(className)
    );
}
const myHead = (
    <div>
        <header>
            <h1>Welcome!</h1>
        </header>
    </div>
);

renderCl(myHead, "body");
