import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saveShippingAddress } from "../actions/cartAction";

export default function ShippingAddressScreen() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  // const cart = useSelector((state) => state.cart);
  // const { shippingAddress } = cart;
  // const [lat, setLat] = useState(shippingAddress.lat);
  // const [lng, setLng] = useState(shippingAddress.lng);
  // const userAddressMap = useSelector((state) => state.userAddressMap);
  // const { address: addressMap } = userAddressMap;
  if (!userInfo) {
    navigate("/signin");
  }
  const [fullName, setFullName] = useState(saveShippingAddress.fullName || "");
  const [address, setAddress] = useState(saveShippingAddress.address || "");
  const [city, setCity] = useState(saveShippingAddress.city || "");
  const [postalCode, setPostalCode] = useState(
    saveShippingAddress.postalCode || ""
  );
  const [country, setCountry] = useState(saveShippingAddress.country || "");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    // const newLat = addressMap ? addressMap.lat : lat;
    // const newLng = addressMap ? addressMap.lng : lng;
    
    // if (addressMap) {
    //   setLat(addressMap.lat);
    //   setLng(addressMap.lng);
    // }
    let moveOn = true;
    // if (!newLat || !newLng) {
    //   moveOn = window.confirm(
    //     "You did not set your location on map. Continue?"
    //   );
    // }
    if (moveOn) {
      dispatch(
        saveShippingAddress({
          fullName: e.fullName,
          address: e.address,
          city: e.city,
          postalCode: e.postalCode,
          country: e.country,
          // lat: newLat,
          // lng: newLng,
        })
      );
      navigate("/payment");
    }
  };

  const chooseOnMap = () => {
    dispatch(
      saveShippingAddress({
        fullName,
        address,
        city,
        postalCode,
        country,
        // lat,
        // lng,
      })
    );
    navigate("/map");
  };

  const theme = createTheme();

  // const useStyles = makeStyles(() => ({
  //   label: {
  //     "& .css-1hv8oq8-MuiStepLabel-label.Mui-active": { fontSize: "16px" },
  //     "& .css-1hv8oq8-MuiStepLabel-label.Mui-disabled": { fontSize: "16px" },
  //     "& .Mui-disabled .MuiStepIcon-root": { fontSize: "30px" },
  //     "& .Mui-active .MuiStepIcon-root": { fontSize: "30px" },
  //     "& .css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root.Mui-completed": {
  //       fontSize: "30px",
  //       color: "green",
  //     },
  //     "& .css-1hv8oq8-MuiStepLabel-label.Mui-completed": { fontSize: "16px" },
  //   },
  //   cssLabel: {
  //     "&.css-1pysi21-MuiFormLabel-root-MuiInputLabel-root": {
  //       fontSize: "16px",
  //     },
  //     "& .css-1pysi21-MuiFormLabel-root-MuiInputLabel-root.Mui-focused": {
  //       fontSize: "16px",
  //     },
  //   },
  //   cssFocused: {
  //     "& .css-1pysi21-MuiFormLabel-root-MuiInputLabel-root.Mui-focused": {
  //       fontSize: "16px",
  //     },
  //   },
  // }));

  // const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Container
        component="main"
        maxWidth="sm"
        sx={{ my: { xs: 3, md: 6, lg: 10 }, p: { xs: 2, md: 1 } }}
      >
        <CssBaseline />
        <Box
          component="form"
          // onSubmit={submitHandler}
          onSubmit={handleSubmit(submitHandler)}
          sx={{
            display: "flex",
            width: "100%",
            flexDirection: "column",
            alignItems: "center",
            borderRadius: "0px",
            p: 5,
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          }}
        >
          <Typography variant="h4">Shipping Address</Typography>

          <TextField
            inputProps={{ style: { fontSize: 14 } }}
            size="small"
            // InputLabelProps={{
            //   classes: {
            //     root: classes.cssLabel,
            //     focused: classes.cssFocused,
            //   },
            // }}
            margin="normal"
            fullWidth
            id="fullName"
            label="Enter FullName"
            name="fullName"
            autoComplete="off"
            onChange={(e) => setFullName(e.target.value)}
            {...register("fullName", { required: true })}
            error={errors.fullName}
          />
          {errors.fullName && (
            <span className="formError">Full Name is required</span>
          )}

          <TextField
            inputProps={{ style: { fontSize: 14 } }}
            size="small"
            // InputLabelProps={{
            //   classes: {
            //     root: classes.cssLabel,
            //     focused: classes.cssFocused,
            //   },
            // }}
            margin="normal"
            fullWidth
            id="address"
            label="Enter address"
            name="address"
            autoComplete="off"
            onChange={(e) => setAddress(e.target.value)}
            {...register("address", { required: true })}
            error={errors.address}
          />
          {errors.address && (
            <span className="formError">Address is required</span>
          )}

          <TextField
            inputProps={{ style: { fontSize: 14 } }}
            size="small"
            margin="normal"
            // InputLabelProps={{
            //   classes: {
            //     root: classes.cssLabel,
            //     focused: classes.cssFocused,
            //   },
            // }}
            fullWidth
            id="city"
            label="Enter city"
            name="city"
            autoComplete="off"
            onChange={(e) => setCity(e.target.value)}
            {...register("city", { required: true })}
            error={errors.city}
          />
          {errors.city && <span className="formError">City is required</span>}

          <TextField
            inputProps={{ style: { fontSize: 14 } }}
            size="small"
            margin="normal"
            // InputLabelProps={{
            //   classes: {
            //     root: classes.cssLabel,
            //     focused: classes.cssFocused,
            //   },
            // }}
            fullWidth
            id="postalCode"
            label="Enter postal code"
            name="postalCode"
            autoComplete="off"
            onChange={(e) => setPostalCode(e.target.value)}
            {...register("postalCode", { required: true })}
            error={errors.postalCode}
          />
          {errors.postalCode && (
            <span className="formError">PostalCode is required</span>
          )}

          <TextField
            inputProps={{ style: { fontSize: 14 } }}
            size="small"
            margin="normal"
            // InputLabelProps={{
            //   classes: {
            //     root: classes.cssLabel,
            //     focused: classes.cssFocused,
            //   },
            // }}
            fullWidth
            id="country"
            label="Enter country"
            name="country"
            autoComplete="off"
            onChange={(e) => setCountry(e.target.value)}
            {...register("country", { required: true })}
            error={errors.country}
          />
          {errors.country && (
            <span className="formError">Country is required</span>
          )}

          <Button
            fullWidth
            variant="contained"
            onClick={chooseOnMap}
            sx={{ mt: 3, mb: 2 }}
            type="submit"
          >
            Choose On Map
          </Button>

          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            type="submit"
          >
            Continue
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
