import React from 'react'
import { Layout, Header, Navigation, Content } from "react-mdl";
import { Link } from "react-router-dom";

import Main from './main';
function Menu() {
    return (
        <Layout>
            <Header className="" >
                <Navigation>
                    <Link to="../">Home</Link>
                </Navigation>
            </Header>
            <Content>
                <div className="page-content" />
                <Main />
            </Content>
        </Layout>
    )
}

export default Menu
