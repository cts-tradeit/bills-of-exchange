import {
    AppBar,
    createStyles,
    CssBaseline,
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    makeStyles,
    Theme,
    Toolbar,
    Typography,
} from "@material-ui/core";
import { PersonOutline, MoneyOffOutlined } from "@material-ui/icons";
import { Route, Switch } from "react-router";
import { HashRouter, Link } from "react-router-dom";
import BillComponent from "./BillComponent";
import BillsComponent from "./BillsComponent";

import PartiesComponent from "./PartiesComponent";
import PartyComponent from "./PartyComponent";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: "flex",
        },
        appBar: {
            zIndex: theme.zIndex.drawer + 1,
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
        },
        drawerPaper: {
            width: drawerWidth,
        },
        drawerContainer: {
            overflow: "auto",
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },
    })
);

export default function MainComponent() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <HashRouter>
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar>
                        <Typography variant="h6">Bills of exchange - client</Typography>
                    </Toolbar>
                </AppBar>
                <Drawer className={classes.drawer} variant="permanent"
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <Toolbar />
                    <div className={classes.drawerContainer}>
                        <List>
                            <ListItem button component={Link} to="/parties" key="parties">
                                <ListItemIcon>
                                    <PersonOutline />
                                </ListItemIcon>
                                <ListItemText primary="Parties" />
                            </ListItem>
                            <ListItem button component={Link} to="/bills" key="bills">
                                <ListItemIcon>
                                    <MoneyOffOutlined />
                                </ListItemIcon>
                                <ListItemText primary="Bills of Exchange" />
                            </ListItem>
                        </List>
                    </div>
                    <Divider />
                </Drawer>
                <main className={classes.content}>
                    <Toolbar />
                    <Switch>
                        <Route exact path="/" component={PartiesComponent} />
                        <Route exact path="/parties" component={PartiesComponent} />
                        <Route exact path="/party/:id" component={PartyComponent} />
                        <Route exact path='/bills' component={BillsComponent} />
                        <Route exact path='/bill/:id' component={BillComponent} />
                    </Switch>
                </main>
            </HashRouter>
        </div>
    );
}
