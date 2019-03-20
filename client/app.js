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
class Profile extends React.Component {
    get header() {
        const myHead = (
            <div>
                <header>
                    <h1>Welcome!</h1>
                </header>
            </div>
        );
    }
    render() {
        return header();
    };
};


//renderCl(myHead, "body");

ReactDOM.render(
    <Profile/>,
    document.getElementById('body')  
);