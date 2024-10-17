import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
  import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { accountout, registerout, signout } from "./actions/userAction";
// import { adminout } from "./actions/userAction";
import PrivateRoute from "./components/PrivateRoute";
import AccountScreen from "./screens/AccountScreen";
import CartScreen from "./screens/CartScreen";
import HomeScreen from "./screens/HomeScreen";
import OrderHistoryScreen from "./screens/OrderHistoryScreen";
import OrderScreen from "./screens/OrderScreen";
import PaymentMethodScreen from "./screens/PaymentMethodScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import ProductScreen from "./screens/ProductScreen";
import ProfileScreen from "./screens/ProfileScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ShippingAddressScreen from "./screens/ShippingAddressScreen";
import SigninScreen from "./screens/SigninScreen";

import { makeStyles } from "@material-ui/core/styles";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
// import { useTheme } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { applicatinSettingList } from "./actions/applicationAction";
import { otpList } from "./actions/otpAction";
import {
  listProductCategories,
  listProductCategorygroup,
  listProductCategorytype,
} from "./actions/productAction";
import { listSareeCategories } from "./actions/sareeAction";
import AdminRoute from "./components/AdminRoute";
import Footer from "./components/Footer";
import SearchBox from "./components/SearchBox";
import SellerRoute from "./components/SellerRoute";
import AccountCreation from "./screens/AccountCreation";
import AdmininScreen from "./screens/AdmininScreen";
import ApplicationScreen from "./screens/ApplicationScreen";
import CollectionScreen from "./screens/CollectionScreen";
import DashboardScreen from "./screens/DashboardScreen";
import MapScreen from "./screens/MapScreen";
import OrderListScreen from "./screens/OrderListScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import ProductListScreen from "./screens/ProductListScreen";
import SearchScreen from "./screens/SearchScreen";
import SellerScreen from "./screens/SellerScreen";
import SupportScreen from "./screens/SupportScreen";
import UserEditScreen from "./screens/UserEditScreen";
import UserListScreen from "./screens/UserListScreen";

import { AttributeMasterListDetails } from "./actions/AttributeActions";
import { userCartList } from "./actions/cartAction";
import { categoryMasterListDetails } from "./actions/categoryAction";
import AdressScreen from "./screens/AdressScreen";
import AttributesScreen from "./screens/AttributesScreen";
import BrandScreen from "./screens/BrandScreen";
import CategoryMasterFormScreen from "./screens/CategoryMasterFormScreen";
import CategoryMasterScreen from "./screens/CategoryMasterScreen";
import CategoryScreen from "./screens/CategoryScreen";
import CatergorymasterScreens from "./screens/CatergorymasterScreens";
import CatProductScreen from "./screens/CatProductScreen";
import CustomerScreen from "./screens/CustomerScreen";
import EmployeeScreen from "./screens/EmployeeScreen";
import OtpScreen from "./screens/OtpScreen";
import OtpVerifyScreen from "./screens/OtpVerifyScreen";
import ProductEnquiryScreen from "./screens/ProductEnquiryScreen";
import ProductViewScreen from "./screens/ProductViewScreen";
import RegOtpVerifyScreen from "./screens/RegOtpVerifyScreen";
import SideBar from "./screens/SideBar";
import TextEditScreen from "./screens/TextEditScreen";

import AddreeCustamerScreen from "./screens/AddreeCustamerScreen";
import AttributeFormScreen from "./screens/AttributeFormScreen";
import AttributeValueScreen from "./screens/AttributeValueScreen";
import BrandAddressScreen from "./screens/BrandAddressScreen";
import BrandFromScreen from "./screens/BrandFromScreen";
import CategoryMasterChildScreen from "./screens/CategoryMasterChildScreen";
import CategoryMasterGrandChildScreen from "./screens/CategoryMasterGrandChildScreen";
import ComboEditScreen from "./screens/ComboEditScreen";
import CountryGridScreen from "./screens/CountryGridScreen";
import { CountryScreen } from "./screens/CountryScreen";
import CustomerFormScreen from "./screens/CustomerFormScreen";
import CustomerViewScreen from "./screens/CustomerViewScreen";
import EmployeeFormScreen from "./screens/EmployeeFormScreen";
import EmployeeProfileScreen from "./screens/EmployeeProfileScreen";
import FeaturevalueScreen from "./screens/FeaturevalueScreen";
import FuatureFormScreen from "./screens/FuatureFormScreen";
import GeneralSettingScreen from "./screens/GeneralSettingScreen";
import LocationGridScreen from "./screens/LocationGridScreen";
import LogicGridScreen from "./screens/LogicGridScreen";
import OptionsScreen from "./screens/OptionsScreen";
import ProdPricingScreen from "./screens/ProdPricingScreen";
import ProductDetailsScreen from "./screens/ProductDetailsScreen";
// import ShippingLocationAndCosts from "./screens/ShippingLocationAndCosts";
import CategoryChildEightScreen from "./screens/CategoryChildEightScreen";
import CategoryChildFiveScreen from "./screens/CategoryChildFiveScreen";
import CategoryChildFourScreen from "./screens/CategoryChildFourScreen";
import CategoryChildNineScreen from "./screens/CategoryChildNineScreen";
import CategoryChildSevenScreen from "./screens/CategoryChildSevenScreen";
import CategoryChildSixScreen from "./screens/CategoryChildSixScreen";
import CategoryChildTenScreen from "./screens/CategoryChildTenScreen";
import CategoryChildThreeScreen from "./screens/CategoryChildThreeScreen";
import CategoryChildTwoScreen from "./screens/CategoryChildTwoScreen";
import CategoryMasterFormEditScreen from "./screens/CategoryMasterFormEditScreen";
import CityGridScreen from "./screens/CityGridScreen";
import CityScreen from "./screens/CityScreen";
import Gatewaygrid from "./screens/Gatewaygrid";
import OrderStatus from "./screens/OrderStatus";
import OrderStatusState from "./screens/OrderStatusState";
import PaymentScreen from "./screens/PaymentScreen";
import ShippingCostAndLoc from "./screens/ShippingCostAndLoc";
import SizeWeightAndGroupAccess from "./screens/SizeWeightAndGroupAccess";
import SpecificScreen from "./screens/SpecificScreen";
import SpecificViewScreen from "./screens/SpecificViewScreen";
import StateGridScreen from "./screens/StateGridScreen";
import StateSreen from "./screens/StateSreen";
import { SummaryScreen } from "./screens/SummaryScreen";
import TaxesFormScreen from "./screens/TaxesFormScreen";
import TaxesMasterScreen from "./screens/TaxesMasterScreen";
import TestingScreen from "./screens/TestingScreen";
import WishListScreen from "./screens/WishListScreen";
import ZoneScreen from "./screens/ZoneScreen";
// Search bar section End*************************************

// eslint-disable-next-line no-unused-vars
const styles = (theme) => ({
  hover: {
    "&:hover": {
      backgroundColor: "red",
    },
  },
});

// ************************ footer******************

// const classes = useStyles();

const useStyles = makeStyles((theme) => ({
  rootBox: {
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
    },
  },
  footerNav: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    marginRight: "auto",
    marginLeft: theme.spacing(3),
    marginBottom: theme.spacing(0),

    [theme.breakpoints.down("md")]: {
      width: "100%",
      marginLeft: "auto",
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(2),
    },
  },
  footerLink: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(2),
    },
  },
  popOverRoot: {
    pointerEvents: "none",
  },
  firstchild: {
    height: "25%",
    background: "#FF0000",
    borderRadius: 0,
    color: "white",
    paddingTop: "2em",
    paddingBottom: "2em",
    fontFamily: "Brush Script MT",
  },
  // firstchild:{
  //   fontFamily:'Brush Script MT',
  // }
}));

function App() {
  // eslint-disable-next-line no-unused-vars
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };
  // eslint-disable-next-line no-unused-vars
  const accountoutHandler = () => {
    dispatch(accountout());
  };
  // eslint-disable-next-line no-unused-vars
  const registeroutHandler = () => {
    dispatch(registerout());
  };

  useEffect(() => {
    dispatch(userCartList(userInfo?._id));
    dispatch(listProductCategories());
    dispatch(listProductCategorygroup());
    dispatch(listProductCategorytype());
    dispatch(listSareeCategories());
    dispatch(applicatinSettingList());
    dispatch(otpList());
    dispatch(categoryMasterListDetails());
    dispatch(AttributeMasterListDetails());
  }, [dispatch, userInfo]);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const classes = useStyles();
  const content = {
    brand: { image: "nereus-assets/img/nereus-light.png", width: 110 },
    copy: "© 2020 Nereus All rights reserved.",
    link1: "First Link",
    link2: "Second Link",
    link3: "Third Link",
    link4: "Fourth Link",
    // ...props.content
  };

  let brand;

  if (content.brand.image) {
    brand = (
      <img src={content.brand.image} alt='' width={content.brand.width} />
    );
  } else {
    // eslint-disable-next-line no-unused-vars
    brand = content.brand.text || "";
  }

  return (
    <BrowserRouter>
      <div className='grid-container'>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar
            position='fixed'
            style={{
              zIndex: 999,
              background: "#006997",
            }}
          >
            <Toolbar>
              <Grid container spacing={3}>
                <Grid item xs={2}>
                  <div className='grid-elements' style={{ display: "flex" }}>
                    <Link
                      style={{ color: "inherit", textDecoration: "none" }}
                      to='/'
                    >
                      <Stack direction='row'>
                        <Avatar
                          sx={{
                            animation: "spin 5s linear infinite",
                            "@keyframes spin": {
                              "0%": {
                                transform: "rotate(0deg)",
                              },
                              "100%": {
                                transform: "rotate(360deg)",
                              },
                            },
                          }}
                          alt='NitLogo'
                          src='/image/Fav.jpg'
                        />
                        <Typography
                          className={classes.sideBarButtons}
                          variant='h4'
                          noWrap
                          component='span'
                          sx={{
                            display: { xs: "block", sm: "block", md: "block" },
                            "&:hover": { color: "#ff7519" },
                          }}
                        >
                          <div className='firstchild'> Lala</div>
                        </Typography>
                      </Stack>
                    </Link>
                  </div>
                </Grid>
                <Grid item xs={8}>
                  <div className='grid-elements'>
                    {" "}
                    <Box
                      style={{ justifyContent: "center" }}
                      sx={{
                        display: {
                          xs: "none",
                          sm: "block",
                          md: "block",
                          lg: "block",
                          xl: "block",
                        },
                      }}
                    >
                      {userInfo?.isAuth ? <SearchBox /> : <></>}
                    </Box>
                  </div>
                </Grid>
                <Grid item xs={2}>
                  <div className='grid-elements'>
                    <Box sx={{ flexGrow: 0, display: "flex-end" }}>
                      <Stack
                        direction='row'
                        spacing={{ xs: 1.5, sm: 1.5, md: 1.5, lg: 1.5 }}
                        sx={{ justifyContent: "flex-end" }}
                      >
                        <Box>
                          {userInfo ? (
                            <div>
                              <Box
                                sx={{
                                  display: {
                                    xs: "none",
                                    sm: "none",
                                    md: "flex",
                                  },
                                }}
                              >
                                <Tooltip
                                  title={userInfo?.name}
                                  arrow
                                  placement='top'
                                >
                                  <IconButton
                                    sx={{
                                      p: 0,
                                      "&:hover": { color: "#ff7519" },
                                    }}
                                    aria-controls='simple-menu'
                                    aria-haspopup='true'
                                    color='black'
                                  >
                                    <Link
                                      style={{
                                        color: "black",
                                        textDecoration: "none",
                                      }}
                                      to='#'
                                    >
                                      <Avatar
                                        onClick={(e) =>
                                          setAnchorEl(e.currentTarget)
                                        }
                                        sx={{
                                          border: "2px solid #fff",
                                          bgcolor: "inherit",
                                          "&:hover": { color: "#ff7519" },
                                        }}
                                      >
                                        {userInfo?.name?.charAt(0)}
                                      </Avatar>
                                      {/* <AccountCircle /> */}
                                    </Link>
                                  </IconButton>
                                </Tooltip>
                                <Menu
                                  id='simple-menu'
                                  anchorEl={anchorEl}
                                  keepMounted
                                  open={Boolean(anchorEl)}
                                  onClose={handleClose}
                                  MenuListProps={{ onMouseLeave: handleClose }}
                                  style={{ marginTop: "13px" }}
                                >
                                  <MenuItem onClick={handleClose} data-id='1'>
                                    <Link
                                      style={{
                                        fontSize: "16px",
                                        color: "#263238",
                                        textDecoration: "none",
                                      }}
                                      to='/profile'
                                    >
                                      User Profile
                                    </Link>
                                  </MenuItem>
                                  <MenuItem onClick={handleClose}>
                                    {" "}
                                    <Link
                                      style={{
                                        fontSize: "16px",
                                        color: "#263238",
                                        textDecoration: "none",
                                      }}
                                      to='/orderhistory'
                                    >
                                      OrderHistory
                                    </Link>
                                  </MenuItem>
                                </Menu>
                              </Box>
                            </div>
                          ) : (
                            <Tooltip title='signIn' arrow>
                              <IconButton
                                sx={{ p: 0, "&:hover": { color: "#ff7519" } }}
                                color='inherit'
                              >
                                <Link style={{ color: "inherit" }} to='/signin'>
                                  <Avatar
                                    sx={{
                                      border: "2px solid #fff",
                                      bgcolor: "inherit",
                                      "&:hover": { color: "#ff7519" },
                                    }}
                                  >
                                    <AccountCircle />
                                  </Avatar>
                                </Link>
                              </IconButton>
                            </Tooltip>
                          )}
                        </Box>
                        <Box sx={{ display: { xs: "flex" } }}>
                          {userInfo && (
                            <Tooltip title='Log Out' arrow>
                              <IconButton
                                sx={{ p: 0, "&:hover": { color: "#ff7519" } }}
                                aria-label='show 4 new mails'
                                color='inherit'
                              >
                                <Link
                                  style={{ color: "inherit" }}
                                  to='#signout'
                                >
                                  <Avatar
                                    sx={{
                                      border: "2px solid #fff",
                                      bgcolor: "inherit",
                                      "&:hover": { color: "#ff7519" },
                                    }}
                                  >
                                    <ExitToAppIcon onClick={signoutHandler} />
                                  </Avatar>
                                </Link>
                              </IconButton>
                            </Tooltip>
                          )}
                        </Box>
                        {/* <Box>
                          <Tooltip title="Cart" arrow placement="top">
                            <IconButton
                              sx={{ p: 0, "&:hover": { color: "#ff7519" } }}
                              color="inherit"
                            >
                              <Link
                                style={{
                                  color: "inherit",
                                  textDecoration: "none",
                                }}
                                to="/cart"
                              >
                                {userInfo ? (
                                  <Avatar
                                    sx={{
                                      justifyContent: "center",
                                      bgcolor: "inherit",
                                      "&:hover": { color: "#ff7519" },
                                      display: {},
                                    }}
                                  >
                                    {" "}
                                    {cartItems.length > 0 && (
                                      <span className="badge">
                                        {cartItems.length}
                                      </span>
                                    )}
                                    <ShoppingCartCheckoutIcon />
                                  </Avatar>
                                ) : (
                                  <Box>
                                    <Avatar
                                      sx={{
                                        bgcolor: "inherit",
                                        "&:hover": { color: "#ff7519" },
                                        display: "flex",
                                      }}
                                    >
                                      {" "}
                                      {cartItems.length > 0 && (
                                        <span className="badge">
                                          {cartItems.length}
                                        </span>
                                      )}
                                      <ShoppingCartCheckoutIcon />
                                    </Avatar>
                                  </Box>
                                )}
                              </Link>
                            </IconButton>
                          </Tooltip>
                        </Box> */}
                      </Stack>
                    </Box>
                  </div>
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>

          <Box sx={{ display: "flex" }}>
            {userInfo && <SideBar />}
            <Box
              component='main'
              sx={{ p: 3, flexGrow: 1, minHeight: "100vh" }}
            >
              <Toolbar />
              {/* <Typography> */}
              <Routes>
{/* ********************************************************************************* */}
                <Route path='/categorychildtwo/:id' element={<CategoryChildTwoScreen />}></Route>
                <Route path='/categorychildthree/:id' element={<CategoryChildThreeScreen />}></Route>
                <Route path='/categorychildfour/:id' element={<CategoryChildFourScreen />}></Route>
                <Route path='/categorychildfive/:id' element={<CategoryChildFiveScreen />}></Route>
                <Route path='/categorychildsix/:id' element={<CategoryChildSixScreen />}></Route>
                <Route path='/categorychildseven/:id' element={<CategoryChildSevenScreen />}></Route>
                <Route path='/categorychildeight/:id' element={<CategoryChildEightScreen />}></Route>
                <Route path='/categorychildnine/:id' element={<CategoryChildNineScreen />}></Route>
                <Route path='/categorychildten/:id' element={<CategoryChildTenScreen />}></Route>
                <Route path='/testFrom/:id' element={<CategoryMasterFormEditScreen />}></Route>

                <Route path='/testingscreen' element={<TestingScreen />}></Route>
                {/*******************************Order********************************/}
                <Route path='/orderstatus' element={<OrderStatus />}></Route>
                <Route
                  path='/orderstatuslist/:id'
                  element={<OrderStatusState />}
                ></Route>
                <Route
                  path='/orderstatuslist'
                  element={<OrderStatusState />}
                ></Route>
                {/*******************************Payment Gateway************************/}
                <Route path='/gateway' element={<Gatewaygrid />}></Route>
                <Route path='/payment' element={<PaymentScreen />}></Route>
                <Route path='/payment/:id' element={<PaymentScreen />}></Route>
                {/* **********************Locations********************************** */}
                <Route
                  path='/locatgrid'
                  element={<LocationGridScreen />}
                ></Route>
                <Route path='/zone' element={<ZoneScreen />}></Route>
                <Route path='/zone/:id' element={<ZoneScreen />}></Route>
                <Route path='/country' element={<CountryScreen />}></Route>
                <Route
                  path='/countrygrid'
                  element={<CountryGridScreen />}
                ></Route>
                <Route path='/country/:id' element={<CountryScreen />}></Route>
                <Route path='/stategrid' element={<StateGridScreen />}></Route>
                <Route path='/state' element={<StateSreen />}></Route>
                <Route path='/state/:id' element={<StateSreen />}></Route>
                <Route path='/city/:id' element={<CityScreen />}></Route>
                <Route path='/city' element={<CityScreen />}></Route>
                <Route path='/citygrid' element={<CityGridScreen />}></Route>

                {/* **********************shipping********************************** */}
                <Route
                  path='/logistic/:id'
                  element={<GeneralSettingScreen />}
                ></Route>
                <Route
                  path='/logistic'
                  element={<GeneralSettingScreen />}
                ></Route>
                <Route path='/summary' element={<SummaryScreen />}></Route>
                <Route path='/summary/:id' element={<SummaryScreen />}></Route>
                <Route
                  path='/costAndShip'
                  element={<ShippingCostAndLoc />}
                ></Route>
                <Route
                  path='/costAndShip/:id'
                  element={<ShippingCostAndLoc />}
                ></Route>
                <Route
                  path='/sizeweightgroup'
                  element={<SizeWeightAndGroupAccess />}
                ></Route>
                <Route
                  path='/sizeweightgroup/:id'
                  element={<SizeWeightAndGroupAccess />}
                ></Route>
                <Route path='/logicGrid' element={<LogicGridScreen />}></Route>

                {/* **************************************************************************************** */}
                <Route
                  path='/attributes'
                  element={<AttributesScreen />}
                ></Route>

                <Route
                  path='/attributesForm'
                  element={<AttributeFormScreen />}
                ></Route>
                <Route
                  path='/attributesForm/:id'
                  element={<AttributeFormScreen />}
                ></Route>
                <Route
                  path='/attributvalue'
                  element={<AttributeValueScreen />}
                ></Route>
                <Route
                  path='/attributvalue/:id'
                  element={<AttributeValueScreen />}
                ></Route>
                <Route
                  path='/specificEdit/:id'
                  element={<SpecificScreen />}
                ></Route>
                <Route path='/feature' element={<FuatureFormScreen />}></Route>
                <Route
                  path='/feature/:id'
                  element={<FuatureFormScreen />}
                ></Route>
                <Route
                  path='/featurevalue'
                  element={<FeaturevalueScreen />}
                ></Route>
                <Route
                  path='/featurevalue/:id'
                  element={<FeaturevalueScreen />}
                ></Route>
                <Route
                  path='/categorychild/:id'
                  element={<CategoryMasterChildScreen />}
                ></Route>

                <Route
                  path='/categorygrandchild/:id'
                  element={<CategoryMasterGrandChildScreen />}
                ></Route>
                <Route path='/brand' element={<BrandScreen />}></Route>
                <Route path='/brandForm' element={<BrandFromScreen />}></Route>
                <Route
                  path='/brandaddress'
                  element={<BrandAddressScreen />}
                ></Route>

                <Route
                  path='/product'
                  element={<ProductDetailsScreen />}
                ></Route>
                <Route
                  path='/productadd'
                  element={<CatProductScreen />}
                ></Route>
                <Route
                  path='/productadd/:id'
                  element={<CatProductScreen />}
                ></Route>

                <Route path='/team' element={<EmployeeScreen />}></Route>
                <Route
                  path='/employee'
                  element={<EmployeeFormScreen />}
                ></Route>
                <Route
                  path='/employeeprofile'
                  element={<EmployeeProfileScreen />}
                ></Route>
                <Route path='/custemer' element={<CustomerScreen />}></Route>
                <Route
                  path='/custemerreg'
                  element={<CustomerFormScreen />}
                ></Route>
                <Route
                  path='/custemerreg/:id'
                  element={<CustomerFormScreen />}
                ></Route>
                <Route path='/addressreg' element={<AdressScreen />}></Route>
                <Route
                  path='/addressreg/:id'
                  element={<AdressScreen />}
                ></Route>
                <Route
                  path='/address'
                  element={<AddreeCustamerScreen />}
                ></Route>
                <Route
                  path='/categoryFormmaster'
                  element={<CategoryMasterFormScreen />}
                ></Route>
                <Route
                  path='/categorymasterform/:id'
                  element={<CategoryMasterFormScreen />}
                ></Route>
                <Route
                  path='/categorymaster'
                  element={<CategoryMasterScreen />}
                ></Route>
                <Route
                  path='/cusview/:id'
                  element={<CustomerViewScreen />}
                ></Route>
                {/* ********************************************************************************************* */}

                <Route
                  path='/productview/:id'
                  element={<ProductViewScreen />}
                  exact
                ></Route>

                <Route
                  path='/prodEnquiry'
                  element={<ProductEnquiryScreen />}
                ></Route>

                <Route
                  path='/categorysmaster'
                  element={<CatergorymasterScreens />}
                ></Route>
                <Route path='/Wishlist' element={<WishListScreen />}></Route>

                <Route path='/categorys' element={<CategoryScreen />}></Route>
                <Route path='/seller/:id' element={<SellerScreen />}></Route>
                <Route path='/cart/:id' element={<CartScreen />}></Route>
                <Route
                  path='/comboEdit/:id'
                  element={<ComboEditScreen />}
                ></Route>
                <Route path='/carttshirt/:id' element={<CartScreen />}></Route>
                <Route
                  path='/search/name'
                  element={<SearchScreen />}
                  exact
                ></Route>

                <Route path='/cart' element={<CartScreen />}></Route>
                <Route
                  path='/collectionlist'
                  element={<CollectionScreen />}
                ></Route>
                <Route
                  path='/collectionlist/women'
                  element={<CollectionScreen categorytype='Women' />}
                ></Route>
                <Route
                  path='/collectionlist/kids'
                  element={<CollectionScreen categorytype='Kids' />}
                ></Route>
                <Route path='/' element={<SigninScreen />}></Route>
                <Route path='/account' element={<AccountScreen />}></Route>
                <Route
                  path='/accountcreation'
                  element={<AccountCreation />}
                ></Route>
                <Route path='/adminin' element={<AdmininScreen />}></Route>
                <Route
                  path='/shipping'
                  element={<ShippingAddressScreen />}
                ></Route>
                <Route
                  path='/paymente'
                  element={<PaymentMethodScreen />}
                ></Route>
                <Route
                  path='/placeorder'
                  element={<PlaceOrderScreen />}
                ></Route>
                <Route path='/order/:id' element={<OrderScreen />}></Route>
                <Route path='/register' element={<RegisterScreen />}></Route>
                <Route path='/otp' element={<OtpScreen />}></Route>
                <Route path='/otpVerify' element={<OtpVerifyScreen />}></Route>
                <Route path='/text' element={<TextEditScreen />}></Route>
                <Route
                  path='/specificPrice/:id'
                  element={<SpecificViewScreen />}
                ></Route>

                {/* <Route path="/product" element={<PrestaProductScreen />}></Route> */}

                <Route
                  path='/regotpVerify'
                  element={<RegOtpVerifyScreen />}
                ></Route>
                <Route
                  path='/search/name'
                  element={<SearchScreen />}
                  exact
                ></Route>
                <Route
                  path='/productlist/seller'
                  element={
                    <SellerRoute>
                      <ProductListScreen />
                    </SellerRoute>
                  }
                  exact
                ></Route>

                <Route
                  path='/OrderList/seller'
                  element={
                    <SellerRoute>
                      <OrderListScreen />
                    </SellerRoute>
                  }
                  exact
                ></Route>
                <Route
                  path='/profile'
                  element={
                    <PrivateRoute>
                      <ProfileScreen />
                    </PrivateRoute>
                  }
                />
                <Route
                  path='/productlist'
                  element={
                    <AdminRoute>
                      <ProductListScreen />
                    </AdminRoute>
                  }
                  exact
                />

                <Route
                  path='/orderlist'
                  element={
                    <AdminRoute>
                      <OrderListScreen />
                    </AdminRoute>
                  }
                  exact
                />

                <Route
                  path='/search/name/:name'
                  element={<SearchScreen />}
                  exact
                ></Route>

                <Route
                  path='/search/categorygroup/:categorygroup'
                  element={<SearchScreen />}
                  exact
                ></Route>
                <Route
                  path='/search/categorytype/:categorytype'
                  element={<SearchScreen />}
                  exact
                ></Route>
                {/* <Route
              path="/search/category/:category/name/:name"
              element={<SearchScreen />}
              exact
            ></Route> */}
                <Route
                  path='/search/category:category/name/:name/min/:min/max/:max/rating/:rating/order/:order/pageNumber/:pageNumber'
                  element={<SearchScreen />}
                  exact
                ></Route>

                <Route
                  path='/productlist/seller'
                  element={
                    <SellerRoute>
                      <ProductListScreen />
                    </SellerRoute>
                  }
                />
                <Route
                  path='/orderlist/seller'
                  element={
                    <SellerRoute>
                      <OrderListScreen />
                    </SellerRoute>
                  }
                />
                <Route
                  path='/products/new'
                  element={<ProductEditScreen />}
                  exact
                ></Route>
                <Route
                  path='/product/:id/edit'
                  element={<ProductEditScreen />}
                  exact
                ></Route>

                <Route
                  path='/user/:id/edit'
                  element={
                    <AdminRoute>
                      <UserEditScreen />
                    </AdminRoute>
                  }
                />
                <Route
                  path='/userlist'
                  element={
                    <AdminRoute>
                      <UserListScreen />
                    </AdminRoute>
                  }
                />
                <Route
                  path='/dashboard'
                  element={
                    <AdminRoute>
                      <DashboardScreen />
                    </AdminRoute>
                  }
                />

                <Route
                  path='/productlist/pageNumber/:pageNumber'
                  element={
                    <AdminRoute>
                      <ProductListScreen />
                    </AdminRoute>
                  }
                />
                {/* <Route
              path="/Home"
              element={
                <AdminRoute>
                  <HomeScreens />
                </AdminRoute>
              }
            /> */}

                <Route
                  path='/search/category/:category'
                  element={<SearchScreen />}
                  exact
                ></Route>
                <Route
                  path='/search/category/:category/name/:name'
                  element={<SearchScreen />}
                  exact
                ></Route>
                <Route
                  path='/search/category/:category/name/:name/min/:min/max/:max/rating/:rating/order/:order/pageNumber/:pageNumber'
                  element={<SearchScreen />}
                  exact
                ></Route>
                <Route
                  path='/map'
                  element={
                    <PrivateRoute>
                      <MapScreen />
                    </PrivateRoute>
                  }
                />
                <Route
                  path='/support'
                  element={
                    <AdminRoute>
                      <SupportScreen />
                    </AdminRoute>
                  }
                />
                <Route
                  path='/application'
                  element={
                    <AdminRoute>
                      <ApplicationScreen />
                    </AdminRoute>
                  }
                />

                <Route
                  path='/product/:id'
                  element={<ProductScreen />}
                  exact
                ></Route>
                <Route path='/footer' element={<Footer />} exact></Route>
                <Route
                  path='/orderhistory'
                  element={<OrderHistoryScreen />}
                ></Route>
                <Route path='/pricing' element={<ProdPricingScreen />}></Route>
                <Route path='/taxes' element={<TaxesFormScreen />}></Route>
                <Route path='/taxes/:id' element={<TaxesFormScreen />}></Route>
                <Route
                  path='/hometaxes'
                  element={<TaxesMasterScreen />}
                ></Route>
                <Route path='/options' element={<OptionsScreen />}></Route>
                <Route path='/home' element={<HomeScreen />} exact></Route>

                {/* <Route path="/" element={<SigninScreen />} exact></Route> */}
              </Routes>

              {/* </Typography> */}
            </Box>
          </Box>

          {userInfo?.isAuth && (
            <Paper
              sx={{
                position: "relative",
                bottom: 0,
                color: "#ff7519",
                alignItems: "center",
              }}
              elevation={0}
            >
              <Footer />
            </Paper>
          )}
        </Box>
      </div>
    </BrowserRouter>
  );
}

export default App;
