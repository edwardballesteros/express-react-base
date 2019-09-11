import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Grommet, Box} from "grommet";

import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

function ParamsExample() {
    return (

        <Router>
            <div>
                <Wrapper>
                    <Title>Hello World, this is my first styled component!</Title>
                </Wrapper>

                <Box
                    direction="row"
                    border={{ color: 'brand', size: 'large' }}
                    pad="medium"
                >
                    <Box pad="small" background="dark-3" />
                    <Box pad="medium" background="light-3" />
                </Box>

                <ul>
                    <li>
                        <Link to="/netflix">Netflix !</Link>
                    </li>
                    <li>
                        <Link to="/zillow-group">Zillow Group</Link>
                    </li>
                    <li>
                        <Link to="/yahoo">Yahoo</Link>
                    </li>
                    <li>
                        <Link to="/modus-create">Modus Create</Link>
                    </li>
                </ul>

                <Route path="/:id" component={Child} />

                {/*
           It's possible to use regular expressions to control what param values should be matched.
              * "/order/asc"  - matched
              * "/order/desc" - matched
              * "/order/foo"  - not matched
        */}
                <Route
                    path="/order/:direction(asc|desc)"
                    component={ComponentWithRegex}
                />
            </div>
        </Router>
    );
}

function Child({ match }) {
    return (
        <div>
            <h3>ID: {match.params.id}</h3>
        </div>
    );
}

function ComponentWithRegex({ match }) {
    return (
        <div>
            <h3>Only asc/desc are allowed: {match.params.direction}</h3>
        </div>
    );
}

export default ParamsExample;
