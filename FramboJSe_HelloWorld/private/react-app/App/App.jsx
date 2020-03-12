import React from 'react';


const App = (props) => (
    <div>
        <p>Hello world!</p>
        <p>{props.name}</p>
        <p>{props.value}</p>
    </div>
);


export default App;