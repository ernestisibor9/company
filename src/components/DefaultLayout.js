import {
  MenuFoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { useState } from "react";
import myLogo from "./images/myLogo.png";
import { AiOutlineLogout } from "react-icons/ai";
import { getAuth, signOut } from "firebase/auth";
import { app } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";

const { Header, Sider, Content } = Layout;
const DefaultLayout = ({ children }) => {
  const navigate = useNavigate();

  // Logout functionalities
  const logout = () => {
    const auth = getAuth(app);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        localStorage.removeItem("company");
        navigate("/login");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{
          position: "sticky",
          height: "100vh",
          top: 0,
          bottom: 0,
          overflow: "auto",
        }}
      >
        <img
          src={myLogo}
          alt=""
          width={70}
          height={70}
          style={{
            marginTop: "20px",
            marginLeft: "50px",
            marginBottom: "20px",
          }}
        />
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: "Profile",
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: "Department",
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: "Status",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
          <button className="btn btn-danger" onClick={logout}>
            <AiOutlineLogout size="20px" /> LogOut
          </button>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};
export default DefaultLayout;
