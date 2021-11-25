import React from 'react'
import Home from "./Home/Home";
import AboutUs from "./AboutUs";
import PrivacyPolicy from "./PrivacyPolicy";

import {
    Switch,
    Route,

} from "react-router-dom";

export default function Main() {
    return (
        <div>
            <Switch>
                <Route exact path="/Home" component={Home}/>
                <Route path="/about" component={AboutUs} />
                <Route path="/policy" component={PrivacyPolicy} />
                <Route path="/*" component={Home}/>

            </Switch>
        </div>
    )
}
