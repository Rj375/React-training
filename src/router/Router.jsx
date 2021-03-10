import React from 'react';
import Table from '../Table'
import Apidata from '../Apidata'
import Nav from '../Nav'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Inputs from '../Inputs';
import Productslist from '../Productslist';
import Body from '../Body';
import Forms from '../Forms';


const Router = () => {
    return (
        <div>

            <BrowserRouter>
                <Nav />
                <Switch>

                    <Route exact path="/" component={Table} />
                    <Route path="/api" component={Apidata} />
                    <Route path="/inputs" component={Inputs} />
                    <Route path="/productlist" component={Productslist} />
                    <Route path="/body" component={Body} />
                    {/* <Route path="/form" component={Forms} /> */}
                </Switch>
            </BrowserRouter>
        </div>
    );
};



export default Router;