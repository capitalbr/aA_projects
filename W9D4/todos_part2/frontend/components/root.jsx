import {Provider} from "react-redux";
import App from "./app";
import React from 'react';
import Redux from "redux"





export const Root = (props) => {
    return (
        <Provider store={props.store}>
            <App />
        </Provider>
    )
}

