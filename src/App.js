import React from "react";
import Monsters from "./Monsters/Monsters";
import { Layout } from "antd";
import "./App.css";
const { Header, Footer, Sider, Content } = Layout;

const App = () => {
  return (
    <Layout>
      <Sider>Sider</Sider>
      <Layout>
        <Header>DND</Header>
        <Content>
          <Monsters />
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  );
};

export default App;
