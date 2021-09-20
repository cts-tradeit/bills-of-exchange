import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import ReceiptIcon from "@mui/icons-material/Receipt";
import HomeIcon from "@mui/icons-material/Home";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import Home from "./pages/home";
import Users from "./pages/users";
import UserDetail from "./pages/userDetail";
import Bills from "./pages/bills";
import BillDetail from "./pages/billDetail";

function App() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Router>
        <AppBar data-testid="appBar" position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab icon={<HomeIcon />} label="Home" component={Link} to="/" />
            <Tab
              icon={<PeopleAltIcon />}
              label="Users"
              component={Link}
              to="/users"
            />
            <Tab
              icon={<ReceiptIcon />}
              label="Bills of Exchange"
              component={Link}
              to="/bills"
            />
          </Tabs>
        </AppBar>

            <Switch>
              <Route exact path="/users" component={Users}></Route>
              <Route exact path="/user/:userId" component={UserDetail} />
              <Route exact path="/bills" component={Bills} />
              <Route exact path="/bill/:billId" component={BillDetail} />
              <Route exact path="/" component={Home} />
            </Switch>
    </Router>
  );
}

export default App;
