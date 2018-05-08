import React, { Component } from 'react';
import ReactDOM from 'react-dom';




class App extends Component 
{

    constructor(props)
    {
        super(props);

        this.state = { coinName: '' };
    }

    render()
    {
        return (
    
            <div>
                    A COMPONENT GOES HERE..
            </div>
        
         );
    }
    
}



// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));

