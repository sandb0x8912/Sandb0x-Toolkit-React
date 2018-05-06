import React from 'react';
import ReactDOM from 'react-dom';



// Create a new component.  This component should produce some HTML

const App = () => // FAT ARROW also same as saying function()
{
    return <div> HELLO WORLD</div>
}



// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));

