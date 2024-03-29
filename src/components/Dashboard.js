import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ListAltIcon from "@material-ui/icons/ListAlt";
import HomeContent from "./Home";
import Payment from "./Payment";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListIcon from "@material-ui/icons/List";
import WeekendIcon from "@material-ui/icons/Weekend";
import GroupIcon from "@material-ui/icons/Group";
import BarChartIcon from "@material-ui/icons/BarChart";
import HomeIcon from "@material-ui/icons/Home";
import PaymentIcon from "@material-ui/icons/Payment";
import WinsBar from "./WinsBar";
import PlayerList from "./PlayerList";
import MultiPlayer from "./MultiPlayer";
import PicksPage from "./PicksPage";
import RulesPage from "./RulePage";
import GamesPage from "./GamesPage";
import { getQueryStringValue } from "../common/query-param-helper.js"
import constants from "../common/constants";

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: "flex"
  },
  toolbar: {
    paddingRight: 24 // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36
  },
  menuButtonHidden: {
    display: "none"
  },
  title: {
    flexGrow: 1
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing.unit * 9
    }
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    height: "100vh",
    overflow: "auto"
  },
  chartContainer: {
    marginLeft: -22
  },
  tableContainer: {
    height: 320
  },
  h5: {
    marginBottom: theme.spacing.unit * 2
  }
});

class Dashboard extends React.Component {
  state = {
    open: false,
    page: "Home"
  };

  constructor(props) {
    super(props);
    if (getQueryStringValue(constants.multiplayerUrlParam)) {
      this.state.page = "Player Compare";
    }
  }

  setPage = value => {
    this.setState({ page: value });
  };

  setPageHome = () => this.setPage("Home");

  setPagePayment = () => this.setPage("Payment");

  setPagePicks = () => this.setPage("Picks");

  setPageStandings = () => this.setPage("Standings");

  setPagePC = () => this.setPage("Player Compare");

  setPageRules = () => this.setPage("Rules");

  setPageGames = () => this.setPage("Games");

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="absolute"
          className={classNames(
            classes.appBar,
            this.state.open && classes.appBarShift
          )}
        >
          <Toolbar
            disableGutters={!this.state.open}
            className={classes.toolbar}
          >
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(
                classes.menuButton,
                this.state.open && classes.menuButtonHidden
              )}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              className={classes.title}
            >
              Bowl Pool Central
            </Typography>
            {/* <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton> */}
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: classNames(
              classes.drawerPaper,
              !this.state.open && classes.drawerPaperClose
            )
          }}
          open={this.state.open}
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List>
            <ListItem button onClick={this.setPageHome}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button onClick={this.setPagePayment}>
              <ListItemIcon>
                <PaymentIcon />
              </ListItemIcon>
              <ListItemText primary="Payment" />
            </ListItem>
            <ListItem button onClick={this.setPagePicks}>
              <ListItemIcon>
                <ListIcon />
              </ListItemIcon>
              <ListItemText primary="Picks" />
            </ListItem>
            <ListItem button onClick={this.setPageStandings}>
              <ListItemIcon>
                <BarChartIcon />
              </ListItemIcon>
              <ListItemText primary="Standings" />
            </ListItem>
            <ListItem button onClick={this.setPagePC}>
              <ListItemIcon>
                <GroupIcon />
              </ListItemIcon>
              <ListItemText primary="Player Compare" />
            </ListItem>
            <ListItem button onClick={this.setPageRules}>
              <ListItemIcon>
                <ListAltIcon />
              </ListItemIcon>
              <ListItemText primary="Rules" />
            </ListItem>
            <ListItem button onClick={this.setPageGames}>
              <ListItemIcon>
                <WeekendIcon />
              </ListItemIcon>
              <ListItemText primary="Games" />
            </ListItem>
          </List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          {this.state.page === "Home" ? (
            <HomeContent classes={classes} />
          ) : null}
          {this.state.page === "Payment" ? <Payment /> : null}
          {this.state.page === "Picks" ? <PicksPage /> : null}
          {this.state.page === "Standings" ? (
            <div>
              <Typography variant="h5" gutterBottom component="h2">
                Results{constants.yearIfOld}
              </Typography>
              <PlayerList
                playerList={this.props.playerList}
                playerSearch={this.props.playerSearch}
              />
              <WinsBar bowlPool={this.props.bowlPool} />
            </div>
          ) : null}
          {this.state.page === "Rules" ? <RulesPage /> : null}
          {this.state.page === "Games" ? (
            <GamesPage gameDetails={this.props.gameDetails} />
          ) : null}
          {this.state.page === "Player Compare" ? (
            <MultiPlayer bowlPool={this.props.bowlPool} />
          ) : null}
        </main>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Dashboard);
