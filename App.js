import React from 'react';
import ReactDOM from 'react-dom/client';

//using core react 
    const element = React.createElement('div', {className:"title"}, [
        React.createElement('h1', '', 'This is h1 tag'),
        React.createElement('h2', '', 'This is h2 tag'),
        React.createElement('h3', '', 'This is h3 tag')
    ]);

//using jsx
    const jsxElement = <h1>JSX Element</h1>;
    const JsxSmallComponent = () => { return (
        <div>
            <h1>Small</h1>
        </div>
      )
    }
    const JsxComponent = () =>  { 
        return (
        <div className='title'>
            <h1>This is h1 tag</h1>
            <h2>This is h2 tag</h2>
            <h3>This is h3 tag</h3>
            <JsxSmallComponent/>
            {jsxElement}
        </div>
        )
    }

    const root = ReactDOM.createRoot(document.getElementById('root'));

    root.render(<JsxComponent/>);