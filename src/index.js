import * as React from 'react';

export default const App = (props) => {
    if (props.isShow) return <p>Props: {props}</p>
    return <p>Props: {props}</p>
}
