import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import MuiDrawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { styled } from "@mui/material/styles";
import PaymentsIcon from "@mui/icons-material/Payments";
// import NoteAltIcon from '@mui/icons-material/NoteAlt';
import BrandingWatermarkIcon from "@mui/icons-material/BrandingWatermark";
import CategoryIcon from "@mui/icons-material/Category";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
// import EditAttributesIcon from '@mui/icons-material/EditAttributes';
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import GroupsIcon from "@mui/icons-material/Groups";
// import HomeIcon from '@mui/icons-material/Home';
import ContactsIcon from "@mui/icons-material/Contacts";
import LanguageIcon from "@mui/icons-material/Language";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import PeopleIcon from "@mui/icons-material/People";
import PersonIcon from "@mui/icons-material/Person";
import PersonOffIcon from "@mui/icons-material/PersonOff";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import Collapse from "@mui/material/Collapse";
import { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@mui/material/Typography";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ChildFriendlyIcon from "@mui/icons-material/ChildFriendly";
import PaymentIcon from "@mui/icons-material/Payment";
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  zIndex: 1,
  overflowX: "hidden",
  backgroundColor: "#006997",
  color: "white",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  zIndex: 1,
  overflowX: "hidden",

  backgroundColor: "#006997",
  color: "white",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  marginTop: 50,
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,

  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));
const useStyles = makeStyles({
  list: {
    width: 300,
    border: "1px solid gray",
  },
  text: {
    // fontWeight: "bold",
    // fontFamily: "courier",
    // color: "blue",
    // backgroundColor: "orange",
    // fontSize: "16px !important",
    // backgroundColor: "#3c52b2",
    // color: "#fff",
    // "&:hover": {
    //   backgroundColor: "#fff",
    //   color: "#3c52b2",
    // },
  },
});

export default function SideBar() {
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    if (open === true) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  const [sidopen, setSidopen] = useState();

  const handleClick = () => {
    setSidopen(!sidopen);
  };
  const [custemersidopen, setCustemrSidopen] = useState();

  const handleClickcustemer = () => {
    setCustemrSidopen(!custemersidopen);
  };

  const [appsidopen, setAppSidopen] = useState();
  const [settingssidopen, setsettingssidopen] = useState();
  const [paymentopen, setPaymentopen] = useState();
  const [shipsidopen, setshipsidopen] = useState();
  const [Orderopen, setOrderopen] = useState();
  const handleClickapp = () => {
    setAppSidopen(!appsidopen);
  };
  const handleClickappp = () => {
    setsettingssidopen(!settingssidopen);
  };
  const handleClickship = () => {
    setshipsidopen(!shipsidopen);
  };
  const handlePayment = () => {
    setPaymentopen(!paymentopen);
  };
  const handleOrder = () => {
    setOrderopen(!Orderopen);
  };

  const classes = useStyles();
  // const styles = (theme) => ({
  //   hover: {
  //     "&:hover": {
  //       backgroundColor: "red",
  //     },
  //   },
  // });

  return (
    <Box sx={{ display: "flex", mt: 7 }}>
      <CssBaseline />

      <Drawer variant='permanent' open={open}>
        <DrawerHeader>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            edge='start'
            sx={{
              marginRight: 1,
              ...(open && { display: "block", marginRight: 2 }),
            }}
          >
            <MenuIcon />
          </IconButton>
        </DrawerHeader>
        <Divider sx={{ mt: -1, mb: -1 }} />
        {open === true ? (
          <>
            <List>
              <ListItem disablePadding sx={{ display: "block" }}>
                <>
                  <ListItemButton
                    onClick={handleClick}
                    // sx={{
                    //   "&:hover": { backgroundColor: "red" },
                    //   "&:active": { backgroundColor: "green" },
                    // }}
                  >
                    <ListItemIcon>
                      <LocationCityIcon sx={{ color: "#fff", mt: -1 }} />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography
                          className={classes.text}
                          style={{
                            color: "#FFFFFF",
                            fontSize: 15,
                            paddingTop: -5,
                          }}
                        >
                          Catalog
                        </Typography>
                      }
                      sx={{ marginTop: 0, fontSize: 12 }}
                    />
                    {sidopen ? (
                      <ExpandLess sx={{ color: "#fff" }} />
                    ) : (
                      <ExpandMore sx={{ color: "#fff" }} />
                    )}
                  </ListItemButton>
                  <Collapse in={sidopen} timeout='auto' unmountOnExit>
                    <List>
                      <ListItemButton sx={{ pl: 4, mt: 0 }}>
                        <Link
                          // reloadDocument
                          to='/product'
                          style={{ textDecoration: "none" }}
                        >
                          <ListItemText
                            sx={{ color: "#fff" }}
                            primary={
                              <Typography
                                sx={{
                                  color: "#FFFFFF",
                                  fontSize: 14,
                                  mt: -2,
                                }}
                              >
                                Product
                              </Typography>
                            }
                          />
                        </Link>
                      </ListItemButton>
                    </List>
                    <List>
                      <ListItemButton sx={{ pl: 4, mt: -3 }}>
                        <Link
                          // reloadDocument
                          to='/categorymaster'
                          style={{ textDecoration: "none" }}
                        >
                          <ListItemText
                            sx={{ color: "#fff" }}
                            primary={
                              <Typography
                                style={{
                                  color: "#FFFFFF",
                                  fontSize: 14,
                                }}
                              >
                                Categories
                              </Typography>
                            }
                          />
                        </Link>
                      </ListItemButton>
                    </List>
                    <List>
                      <ListItemButton sx={{ pl: 4, mt: -3 }}>
                        <Link
                          // reloadDocument
                          to='/attributes'
                          style={{ textDecoration: "none" }}
                        >
                          <ListItemText
                            sx={{ color: "#fff" }}
                            primary={
                              <Typography
                                style={{
                                  color: "#FFFFFF",
                                  fontSize: 14,
                                }}
                              >
                                Attributes & Features
                              </Typography>
                            }
                          />
                        </Link>
                      </ListItemButton>
                    </List>
                    <List>
                      <ListItemButton sx={{ pl: 4, mt: -3 }}>
                        <Link
                          // reloadDocument
                          to='/brand'
                          style={{ textDecoration: "none" }}
                        >
                          <ListItemText
                            sx={{ color: "#fff" }}
                            primary={
                              <Typography
                                style={{
                                  color: "#FFFFFF",
                                  fontSize: 14,
                                }}
                              >
                                Brand & Supplier
                              </Typography>
                            }
                          />
                        </Link>
                      </ListItemButton>
                    </List>
                    <List>
                      <ListItemButton sx={{ pl: 4, mt: -3 }}>
                        <Link
                          // reloadDocument
                          to='/team'
                          style={{ textDecoration: "none" }}
                        >
                          <ListItemText
                            sx={{ color: "#fff" }}
                            primary={
                              <Typography
                                style={{
                                  color: "#FFFFFF",
                                  fontSize: 14,
                                }}
                              >
                                Team
                              </Typography>
                            }
                          />
                        </Link>
                      </ListItemButton>
                    </List>
                  </Collapse>
                </>
              </ListItem>
            </List>
            <Divider sx={{ mt: -1, mb: -1 }} />
            <List>
              <ListItem disablePadding sx={{ display: "block" }}>
                <>
                  <ListItemButton onClick={handleOrder}>
                    <ListItemIcon>
                      <ShoppingBasketIcon sx={{ color: "#fff" }} />
                    </ListItemIcon>
                    <ListItemText
                      sx={{ color: "#fff" }}
                      primary={
                        <Typography
                          style={{
                            color: "#FFFFFF",
                            fontSize: 15,
                          }}
                        >
                          Orders
                        </Typography>
                      }
                    />
                    {Orderopen ? (
                      <ExpandLess sx={{ color: "#fff" }} />
                    ) : (
                      <ExpandMore sx={{ color: "#fff" }} />
                    )}
                  </ListItemButton>
                  <Collapse in={Orderopen} timeout='auto' unmountOnExit>
                    <List>
                      <ListItemButton sx={{ pl: 4 }}>
                        <Link
                          // reloadDocument

                          to='/orderhistory'
                          style={{ textDecoration: "none" }}
                        >
                          <ListItemText
                            sx={{ color: "#fff" }}
                            primary={
                              <Typography
                                style={{
                                  color: "#FFFFFF",
                                  fontSize: 14,
                                }}
                              >
                                Order
                              </Typography>
                            }
                          />
                        </Link>
                      </ListItemButton>
                    </List>
                    <List>
                      <ListItemButton sx={{ pl: 4, mt: -3 }}>
                        <Link
                          // reloadDocument

                          to='/orderstatus'
                          style={{ textDecoration: "none" }}
                        >
                          <ListItemText
                            sx={{ color: "#fff" }}
                            primary={
                              <Typography
                                style={{
                                  color: "#FFFFFF",
                                  fontSize: 14,
                                }}
                              >
                                Order Status
                              </Typography>
                            }
                          />
                        </Link>
                      </ListItemButton>
                    </List>
                  </Collapse>
                </>
              </ListItem>
            </List>
            <Divider sx={{ mt: -1, mb: -1 }} />
            <List>
              <ListItem disablePadding sx={{ display: "block" }}>
                <>
                  <ListItemButton onClick={handleClickcustemer}>
                    <ListItemIcon>
                      <PersonIcon sx={{ color: "#fff" }} />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography
                          style={{
                            color: "#FFFFFF",
                            fontSize: 15,
                          }}
                        >
                          Customers
                        </Typography>
                      }
                    />
                    {custemersidopen ? (
                      <ExpandLess sx={{ color: "#fff" }} />
                    ) : (
                      <ExpandMore sx={{ color: "#fff" }} />
                    )}
                  </ListItemButton>
                  <Collapse in={custemersidopen} timeout='auto' unmountOnExit>
                    <List>
                      <ListItemButton sx={{ pl: 4, mt: 0 }}>
                        <Link
                          // reloadDocument
                          to='/custemer'
                          style={{ textDecoration: "none" }}
                        >
                          <ListItemText
                            sx={{ color: "#fff" }}
                            primary={
                              <Typography
                                style={{
                                  color: "#FFFFFF",
                                  fontSize: 14,
                                }}
                              >
                                Customers
                              </Typography>
                            }
                          />
                        </Link>
                      </ListItemButton>
                    </List>
                    <List>
                      <ListItemButton sx={{ pl: 4, mt: -3 }}>
                        <Link
                          // reloadDocument
                          to='/address'
                          style={{ textDecoration: "none" }}
                        >
                          <ListItemText
                            sx={{ color: "#fff" }}
                            primary={
                              <Typography
                                style={{
                                  color: "#FFFFFF",
                                  fontSize: 14,
                                }}
                              >
                                Addresses
                              </Typography>
                            }
                          />
                        </Link>
                      </ListItemButton>
                    </List>
                    <List>
                      <ListItemButton sx={{ pl: 4, mt: -3 }}>
                        <Link
                          // reloadDocument
                          to='/prodEnquiry'
                          style={{ textDecoration: "none" }}
                        >
                          <ListItemText
                            sx={{ color: "#fff" }}
                            primary={
                              <Typography
                                style={{
                                  color: "#FFFFFF",
                                  fontSize: 14,
                                }}
                              >
                                Customer Enquiry
                              </Typography>
                            }
                          />
                        </Link>
                      </ListItemButton>
                    </List>
                  </Collapse>
                </>
              </ListItem>
            </List>
            <Divider sx={{ mt: -1, mb: -1 }} />
            <List>
              <ListItem disablePadding sx={{ display: "block" }}>
                <>
                  <ListItemButton onClick={handleClickship}>
                    <ListItemIcon>
                      <LocalShippingIcon sx={{ color: "#fff" }} />
                    </ListItemIcon>
                    <ListItemText
                      sx={{ color: "#fff" }}
                      primary={
                        <Typography
                          style={{
                            color: "#FFFFFF",
                            fontSize: 15,
                          }}
                        >
                          Shipping
                        </Typography>
                      }
                    />
                    {shipsidopen ? (
                      <ExpandLess sx={{ color: "#fff" }} />
                    ) : (
                      <ExpandMore sx={{ color: "#fff" }} />
                    )}
                  </ListItemButton>
                  <Collapse in={shipsidopen} timeout='auto' unmountOnExit>
                    <List>
                      <ListItemButton sx={{ pl: 4 }}>
                        <Link
                          // reloadDocument

                          to='/logicGrid'
                          style={{ textDecoration: "none" }}
                        >
                          <ListItemText
                            sx={{ color: "#fff" }}
                            primary={
                              <Typography
                                style={{
                                  color: "#FFFFFF",
                                  fontSize: 14,
                                }}
                              >
                                Logistics
                              </Typography>
                            }
                          />
                        </Link>
                      </ListItemButton>
                    </List>
                  </Collapse>
                </>
              </ListItem>
            </List>
            <Divider sx={{ mt: -1, mb: -1 }} />
            <List>
              <ListItem disablePadding sx={{ display: "block" }}>
                <>
                  <ListItemButton onClick={handleClickapp}>
                    <ListItemIcon>
                      <LanguageIcon sx={{ color: "#fff" }} />
                    </ListItemIcon>
                    <ListItemText
                      sx={{ color: "#fff" }}
                      primary={
                        <Typography
                          style={{
                            color: "#FFFFFF",
                            fontSize: 15,
                          }}
                        >
                          International
                        </Typography>
                      }
                    />
                    {appsidopen ? (
                      <ExpandLess sx={{ color: "#fff" }} />
                    ) : (
                      <ExpandMore sx={{ color: "#fff" }} />
                    )}
                  </ListItemButton>
                  <Collapse in={appsidopen} timeout='auto' unmountOnExit>
                    <List>
                      <ListItemButton sx={{ pl: 4 }}>
                        <Link
                          // reloadDocument

                          to='/hometaxes'
                          style={{ textDecoration: "none" }}
                        >
                          <ListItemText
                            sx={{ color: "#fff" }}
                            primary={
                              <Typography
                                style={{
                                  color: "#FFFFFF",
                                  fontSize: 14,
                                }}
                              >
                                Taxes
                              </Typography>
                            }
                          />
                        </Link>
                      </ListItemButton>
                      <ListItemButton sx={{ pl: 4 }}>
                        <Link
                          // reloadDocument

                          to='/locatgrid'
                          style={{ textDecoration: "none" }}
                        >
                          <ListItemText
                            sx={{ color: "#fff" }}
                            primary={
                              <Typography
                                style={{
                                  color: "#FFFFFF",
                                  fontSize: 14,
                                }}
                              >
                                Locations
                              </Typography>
                            }
                          />
                        </Link>
                      </ListItemButton>
                    </List>
                  </Collapse>
                </>
              </ListItem>
            </List>
            <Divider sx={{ mt: -1, mb: -1 }} />
            <List>
              <ListItem disablePadding sx={{ display: "block" }}>
                <>
                  <ListItemButton onClick={handleClickappp}>
                    <ListItemIcon>
                      <SettingsSuggestIcon sx={{ color: "#fff" }} />
                    </ListItemIcon>
                    <ListItemText
                      sx={{ color: "#fff" }}
                      primary={
                        <Typography
                          style={{
                            color: "#FFFFFF",
                            fontSize: 15,
                          }}
                        >
                          Settings
                        </Typography>
                      }
                    />
                    {settingssidopen ? (
                      <ExpandLess sx={{ color: "#fff" }} />
                    ) : (
                      <ExpandMore sx={{ color: "#fff" }} />
                    )}
                  </ListItemButton>
                  <Collapse in={settingssidopen} timeout='auto' unmountOnExit>
                    <List>
                      <ListItemButton sx={{ pl: 4 }}>
                        <Link
                          // reloadDocument

                          to='/application'
                          style={{ textDecoration: "none" }}
                        >
                          <ListItemText
                            sx={{ color: "#fff" }}
                            primary={
                              <Typography
                                style={{
                                  color: "#FFFFFF",
                                  fontSize: 14,
                                }}
                              >
                                Application Settings
                              </Typography>
                            }
                          />
                        </Link>
                      </ListItemButton>
                    </List>
                  </Collapse>
                </>
              </ListItem>
            </List>
            <Divider sx={{ mt: -1, mb: -1 }} />
            <List>
              <ListItem disablePadding sx={{ display: "block" }}>
                <>
                  <ListItemButton onClick={handlePayment}>
                    <ListItemIcon>
                      <PaymentIcon sx={{ color: "#fff" }} />
                    </ListItemIcon>
                    <ListItemText
                      sx={{ color: "#fff" }}
                      primary={
                        <Typography
                          style={{
                            color: "#FFFFFF",
                            fontSize: 15,
                          }}
                        >
                          Payment
                        </Typography>
                      }
                    />
                    {paymentopen ? (
                      <ExpandLess sx={{ color: "#fff" }} />
                    ) : (
                      <ExpandMore sx={{ color: "#fff" }} />
                    )}
                  </ListItemButton>
                  <Collapse in={paymentopen} timeout='auto' unmountOnExit>
                    <List>
                      <ListItemButton sx={{ pl: 4 }}>
                        <Link
                          // reloadDocument

                          to='/gateway'
                          style={{ textDecoration: "none" }}
                        >
                          <ListItemText
                            sx={{ color: "#fff" }}
                            primary={
                              <Typography
                                style={{
                                  color: "#FFFFFF",
                                  fontSize: 14,
                                }}
                              >
                                Gateway
                              </Typography>
                            }
                          />
                        </Link>
                      </ListItemButton>
                    </List>
                  </Collapse>
                </>
              </ListItem>
            </List>
            <Divider sx={{ mt: -1, mb: -1 }} />
          </>
        ) : (
          <>
            <List>
              <ListItem disablePadding sx={{ display: "block" }}>
                <>
                  <ListItemButton onClick={handleClick}>
                    <ListItemIcon>
                      <LocationCityIcon sx={{ color: "#fff" }} />
                    </ListItemIcon>
                  </ListItemButton>
                  <Collapse in={sidopen} timeout='auto' unmountOnExit>
                    <List>
                      <ListItemButton>
                        <Link
                          // reloadDocument
                          to='/product'
                          style={{ textDecoration: "none" }}
                        >
                          <ListItemIcon>
                            <ProductionQuantityLimitsIcon
                              sx={{ color: "#fff" }}
                            />
                          </ListItemIcon>
                        </Link>
                      </ListItemButton>
                    </List>
                    <List>
                      <ListItemButton>
                        <Link
                          // reloadDocument
                          to='/categorymaster'
                          style={{ textDecoration: "none" }}
                        >
                          <ListItemIcon>
                            <CategoryIcon sx={{ color: "#fff" }} />
                          </ListItemIcon>
                        </Link>
                      </ListItemButton>
                    </List>
                    <List>
                      <ListItemButton>
                        <Link
                          // reloadDocument
                          to='/attributes'
                          style={{ textDecoration: "none" }}
                        >
                          <ListItemIcon>
                            <FeaturedPlayListIcon sx={{ color: "#fff" }} />
                          </ListItemIcon>
                        </Link>
                      </ListItemButton>
                    </List>
                    <List>
                      <ListItemButton>
                        <Link
                          // reloadDocument
                          to='/brand'
                          style={{ textDecoration: "none" }}
                        >
                          <ListItemIcon>
                            <BrandingWatermarkIcon sx={{ color: "#fff" }} />
                          </ListItemIcon>
                        </Link>
                      </ListItemButton>
                    </List>
                    <List>
                      <ListItemButton>
                        <Link
                          // reloadDocument
                          to='/team'
                          style={{ textDecoration: "none" }}
                        >
                          <ListItemIcon>
                            <GroupsIcon sx={{ color: "#fff" }} />
                          </ListItemIcon>
                        </Link>
                      </ListItemButton>
                    </List>
                  </Collapse>
                </>
              </ListItem>
            </List>
            <Divider />
            <List>
              <ListItem disablePadding sx={{ display: "block" }}>
                <>
                  <ListItemButton onClick={handleOrder}>
                    <ListItemIcon>
                      <ShoppingBasketIcon sx={{ color: "#fff" }} />
                    </ListItemIcon>
                  </ListItemButton>
                  <Collapse in={Orderopen} timeout='auto' unmountOnExit>
                    <List>
                      <ListItemButton>
                        <Link
                          // reloadDocument

                          to='/orderhistory'
                          style={{ textDecoration: "none" }}
                        >
                          <ListItemIcon>
                            <ShoppingBasketIcon sx={{ color: "#fff" }} />
                          </ListItemIcon>
                        </Link>
                      </ListItemButton>
                    </List>
                    <List>
                      <ListItemButton>
                        <Link
                          // reloadDocument

                          to='/orderstatus'
                          style={{ textDecoration: "none" }}
                        >
                          <ListItemIcon>
                            <ShoppingBasketIcon sx={{ color: "#fff" }} />
                          </ListItemIcon>
                        </Link>
                      </ListItemButton>
                    </List>
                  </Collapse>
                </>
              </ListItem>
            </List>
            <Divider />
            <List>
              <ListItem disablePadding sx={{ display: "block" }}>
                <>
                  <ListItemButton onClick={handleClickcustemer}>
                    <ListItemIcon>
                      <PersonIcon sx={{ color: "#fff" }} />
                    </ListItemIcon>
                  </ListItemButton>
                  <Collapse in={custemersidopen} timeout='auto' unmountOnExit>
                    <List>
                      <ListItemButton>
                        <Link
                          // reloadDocument
                          to='/custemer'
                          style={{ textDecoration: "none" }}
                        >
                          <ListItemIcon>
                            <PeopleIcon sx={{ color: "#fff" }} />
                          </ListItemIcon>
                        </Link>
                      </ListItemButton>
                    </List>
                    <List>
                      <ListItemButton>
                        <Link
                          // reloadDocument
                          to='/address'
                          style={{ textDecoration: "none" }}
                        >
                          <ListItemIcon>
                            <ContactsIcon sx={{ color: "#fff" }} />
                          </ListItemIcon>
                        </Link>
                      </ListItemButton>
                    </List>
                    <List>
                      <ListItemButton>
                        <Link
                          // reloadDocument
                          to='/prodEnquiry'
                          style={{ textDecoration: "none" }}
                        >
                          <ListItemIcon>
                            <PersonOffIcon sx={{ color: "#fff" }} />
                          </ListItemIcon>
                        </Link>
                      </ListItemButton>
                    </List>
                  </Collapse>
                </>
              </ListItem>
            </List>
            <Divider />
            <List>
              <ListItem disablePadding sx={{ display: "block" }}>
                <>
                  <ListItemButton onClick={handleClickship}>
                    <ListItemIcon>
                      <LocalShippingIcon sx={{ color: "#fff" }} />
                    </ListItemIcon>
                  </ListItemButton>
                  <Collapse in={shipsidopen} timeout='auto' unmountOnExit>
                    <List>
                      <ListItemButton>
                        <Link
                          // reloadDocument

                          to='/logistic'
                          style={{ textDecoration: "none" }}
                        >
                          <ListItemIcon>
                            <ChildFriendlyIcon sx={{ color: "#fff" }} />
                          </ListItemIcon>
                        </Link>
                      </ListItemButton>
                    </List>
                  </Collapse>
                </>
              </ListItem>
            </List>
            <Divider />
            <List>
              <ListItem disablePadding sx={{ display: "block" }}>
                <>
                  <ListItemButton onClick={handleClickapp}>
                    <ListItemIcon>
                      <LanguageIcon sx={{ color: "#fff" }} />
                    </ListItemIcon>
                  </ListItemButton>
                  <Collapse in={appsidopen} timeout='auto' unmountOnExit>
                    <List>
                      <ListItemButton>
                        <Link
                          // reloadDocument

                          to='/hometaxes'
                          style={{ textDecoration: "none" }}
                        >
                          <ListItemIcon>
                            <CurrencyRupeeIcon sx={{ color: "#fff" }} />
                          </ListItemIcon>
                        </Link>
                      </ListItemButton>
                    </List>
                  </Collapse>
                </>
              </ListItem>
            </List>
            <Divider />
            <List>
              <ListItem disablePadding sx={{ display: "block" }}>
                <>
                  <ListItemButton onClick={handleClickappp}>
                    <ListItemIcon>
                      <SettingsSuggestIcon sx={{ color: "#fff" }} />
                    </ListItemIcon>
                  </ListItemButton>
                  <Collapse in={settingssidopen} timeout='auto' unmountOnExit>
                    <List>
                      <ListItemButton>
                        <Link
                          // reloadDocument

                          to='/application'
                          style={{ textDecoration: "none" }}
                        >
                          <ListItemIcon>
                            <SettingsApplicationsIcon sx={{ color: "#fff" }} />
                          </ListItemIcon>
                        </Link>
                      </ListItemButton>
                    </List>
                  </Collapse>
                </>
              </ListItem>
            </List>
            <Divider />
            <List>
              <ListItem disablePadding sx={{ display: "block" }}>
                <>
                  <ListItemButton onClick={handlePayment}>
                    <ListItemIcon>
                      <PaymentIcon sx={{ color: "#fff" }} />
                    </ListItemIcon>
                  </ListItemButton>
                  <Collapse in={paymentopen} timeout='auto' unmountOnExit>
                    <List>
                      <ListItemButton>
                        <Link
                          // reloadDocument

                          to='/gateway'
                          style={{ textDecoration: "none" }}
                        >
                          <ListItemIcon>
                            <PaymentsIcon sx={{ color: "#fff" }} />
                          </ListItemIcon>
                        </Link>
                      </ListItemButton>
                    </List>
                  </Collapse>
                </>
              </ListItem>
            </List>
            <Divider />
          </>
        )}
      </Drawer>
    </Box>
  );
}
