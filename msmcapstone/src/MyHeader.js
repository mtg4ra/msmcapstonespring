import React from "react";
import { Menu } from 'antd';
import 'antd/dist/antd.css'
import {
  Link
} from 'react-router-dom'

function MyHeader(props) {
  return (
    <div>
      <h1> <Link to="./" >Perdix Medical </Link> </h1>
      <Menu
        theme="light"
        mode="horizontal"
        style={{ lineHeight: "48px", textAlign: "right" }}>
        <Menu.Item key="1" > <Link to="./about"> About </Link>  </Menu.Item>
        <Menu.Item key="2" > <Link to="./login"> Login </Link> </Menu.Item>
        <Menu.Item key="3" > <Link to="./datainput"> Data Input </Link> </Menu.Item>
        <Menu.Item key="4" > <Link to="./firebasetest" > FirebaseTest </Link> </Menu.Item>
      </Menu>
    </div>
  )
}

export default MyHeader;