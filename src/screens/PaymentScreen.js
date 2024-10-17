import React from "react";
import Typography from "@mui/material/Typography";
import { Link, useParams } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Box from "@mui/material/Box";
import { CardMedia, Divider } from "../../node_modules/@material-ui/core/index";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
// import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { makeStyles, Switch } from "@material-ui/core";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useEffect } from "react";
import { savePayment, updatePayment } from "../actions/PayAction";
import { useDispatch, useSelector } from "react-redux";
import {
  PAY_SAVE_RESET,
  PAY_UPDATE_RESET,
} from "../constants/PaymentConstants";
import { useNavigate } from "../../node_modules/react-router-dom/dist/index";
const useStyles = makeStyles({
  switch: {
    "& .Mui-checked": {
      color: "#00CC00",
      // transform: "translateX(25px) !important"
    },
    "& .MuiSwitch-track": {
      backgroundColor: "#00CC00 !important",
    },
  },
});
export default function PaymentScreen() {
  const params = useParams();
  const EditId = params.id;
  console.log("EditId", EditId);
  const PaymentSave = useSelector((state) => state.PaymentSave);
  const { success: savepay } = PaymentSave;
  const PaymentList = useSelector((state) => state.PaymentList);
  const { paymentdatum } = PaymentList;
  const PaymentUpdate = useSelector((state) => state.PaymentUpdate);
  const { success: payupdate } = PaymentUpdate;
  const classes = useStyles();
  const theme = createTheme();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [Mode, setMode] = useState("");
  const handleChange = (event) => {
    setMode(event.target.value);
  };
  const [selectedFile, setSelectedFile] = useState();

  const [selectedFilenew, setSelectednew] = useState();
  const [preview, setPreview] = useState();
  const [checked, setchecked] = useState(true);
  const paymentup = paymentdatum?.find((x) => x._id === EditId);

  console.log("paymentup", paymentup);
  const [PaymentName, setPaymentName] = useState(paymentup?.paymentName);
  const [PaymentMode, setPaymentMode] = useState(paymentup?.mode);
  const [PaymentAppId, setPaymentAppId] = useState(paymentup?.AppId);
  const [PaymentSecretKey, setPaymentSecretKey] = useState(paymentup?.secKey);
  const [logoimg, setlogoimg] = useState(paymentup?.filename);
  const [EditChecked, setEditChecked] = useState(paymentup?.checked);

  const handleChangeimage = (e) => {
    if (!e.target.files || e.target.files?.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    setSelectednew(e.target.files);
    setSelectedFile(e.target.files[0]);
    setlogoimg(e.target.files);
  };
  const SaveGatewayDetails = (e) => {
    console.log("e", e);
    dispatch(
      savePayment({
        paymentName: e.name,
        mode: Mode,
        AppId: e.appid,
        secKey: e.seckey,
        logo: selectedFilenew,
        checked: checked,
      })
    );
    window.alert("Details Saved Successfully");
    navigate("/gateway");
  };
  const updateGatewayDetails = () => {
    dispatch(
      updatePayment({
        id: EditId,
        paymentName: PaymentName,
        mode: PaymentMode,
        AppId: PaymentAppId,
        secKey: PaymentSecretKey,
        logo: selectedFile ? selectedFilenew : logoimg,
        checked: EditChecked,
      })
    );
    window.alert("Details Updated Successfully");
    navigate("/gateway");
  };

  const handleChangeChekced1 = (event) => {
    if (checked === true) {
      setchecked(event.target.checked);
    } else {
      setchecked(event.target.checked);
    }
  };
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }
    if (savepay) {
      dispatch({ type: PAY_SAVE_RESET });
    }
    if (payupdate) {
      dispatch({ type: PAY_UPDATE_RESET });
    }
    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile, savepay, payupdate]);
  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files?.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    setSelectednew(e.target.files);
    setSelectedFile(e.target.files[0]);
  };

  return (
    <>
      {EditId ? (
        <>
          {" "}
          <div
            style={{
              boxShadow: "5px 0 30px rgba(1,41,112,0.08)",
              padding: "10px",
            }}
          >
            <Box>
              <Box>
                <Typography variant="h6" sx={{ mt: -1 }}>
                  Update Gateway
                </Typography>
                <Breadcrumbs
                  separator={<NavigateNextIcon fontSize="small" />}
                  aria-label="breadcrumb"
                >
                  <Link
                    to="/"
                    style={{
                      color: "rgba(0, 0, 0, 0.6)",
                      fontSize: "13px",
                    }}
                  >
                    <Typography sx={{ fontSize: 13 }}>Home</Typography>
                  </Link>
                  <Link
                    to="/gateway"
                    style={{ color: "rgba(0, 0, 0, 0.6)", fontSize: "13px" }}
                  >
                    <Typography sx={{ fontSize: 13 }}>Gateway</Typography>
                  </Link>
                </Breadcrumbs>
                <Divider />
              </Box>{" "}
              <ThemeProvider theme={theme}>
                <Container
                  component="main"
                  maxWidth="sm"
                  sx={{
                    my: { xs: 3, md: 6, lg: 10 },
                    p: { xs: 2, md: 1 },
                  }}
                >
                  <CssBaseline />
                  <Box
                    component="form"
                    onSubmit={handleSubmit(updateGatewayDetails)}
                    sx={{
                      display: "flex",
                      width: "120%",
                      height: 530,
                      flexDirection: "column",
                      borderRadius: "0px",
                      p: 5,
                      border: "1px solid #888888",
                      mt: -7,
                      ml: -8,
                      boxShadow: " 1px 1px 1px 1px #909090",
                    }}
                  >
                    <Box>
                      {" "}
                      <Box sx={{ display: "flex", ml: 3 }}>
                        <Box>
                          <Typography sx={{ fontSize: 14, mt: 2 }}>
                            {" "}
                            <span style={{ color: "red" }}>*</span> Gateway
                            Name:
                          </Typography>
                        </Box>
                        <Box sx={{ ml: 5 }}>
                          {" "}
                          <TextField
                            size="small"
                            fullWidth
                            margin="normal"
                            id="name"
                            name="name"
                            autoComplete="off"
                            style={{ width: 290 }}
                            inputProps={{ style: { fontSize: 13 } }}
                            onChange={(e) => setPaymentName(e.target.value)}
                            value={PaymentName}
                          />
                        </Box>
                      </Box>
                      <Box sx={{ display: "flex", ml: 3, mt: 1 }}>
                        <Box>
                          <Typography sx={{ fontSize: 14, mt: 0 }}>
                            {" "}
                            <span style={{ color: "red" }}>*</span> Mode:
                          </Typography>
                        </Box>
                        <Box sx={{ minWidth: 185, ml: 14 }}>
                          <FormControl fullWidth>
                            {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
                            <Select
                              required="required"
                              labelId="demo-simple-select-label"
                              style={{ width: 290 }}
                              size="small"
                              id="demo-simple-select"
                              inputProps={{ style: { fontSize: 13 } }}
                              onChange={(e) => setPaymentMode(e.target.value)}
                              value={PaymentMode}
                            >
                              <MenuItem value={"test"} sx={{ fontSize: 13 }}>
                                Test
                              </MenuItem>
                              <MenuItem
                                value={"production"}
                                sx={{ fontSize: 13 }}
                              >
                                Production
                              </MenuItem>
                            </Select>
                          </FormControl>
                        </Box>
                      </Box>
                      <Box sx={{ display: "flex", ml: 3 }}>
                        <Box>
                          <Typography sx={{ fontSize: 14, mt: 2 }}>
                            {" "}
                            <span style={{ color: "red" }}>*</span> App Id:
                          </Typography>
                        </Box>
                        <Box sx={{ ml: 13 }}>
                          {" "}
                          <TextField
                            size="small"
                            fullWidth
                            style={{ width: 290 }}
                            margin="normal"
                            id="appid"
                            name="appid"
                            autoComplete="off"
                            inputProps={{ style: { fontSize: 13 } }}
                            onChange={(e) => setPaymentAppId(e.target.value)}
                            value={PaymentAppId}
                          />
                        </Box>
                      </Box>
                      <Box sx={{ display: "flex", ml: 3 }}>
                        <Box>
                          <Typography sx={{ fontSize: 14, mt: 2 }}>
                            {" "}
                            <span style={{ color: "red" }}>*</span> Secret key:
                          </Typography>
                        </Box>
                        <Box sx={{ ml: 9.5 }}>
                          {" "}
                          <TextField
                            size="small"
                            fullWidth
                            style={{ width: 290 }}
                            margin="normal"
                            id="seckey"
                            name="seckey"
                            autoComplete="off"
                            inputProps={{ style: { fontSize: 13 } }}
                            onChange={(e) =>
                              setPaymentSecretKey(e.target.value)
                            }
                            value={PaymentSecretKey}
                          />
                        </Box>
                      </Box>
                      <Box sx={{ display: "flex", ml: 3, mt: 0 }}>
                        <Typography sx={{ fontSize: "0.875rem" }}>
                          {" "}
                          <span style={{ color: "red" }}>*</span>Logo:
                        </Typography>
                        <Box sx={{ ml: 15 }}>
                          <Box>
                            <TextField
                              size="small"
                              variant="outlined"
                              input
                              type="file"
                              onChange={handleChangeimage}
                              style={{ width: 290 }}
                              inputProps={{
                                style: { fontSize: "0.875rem" },
                              }}
                            />
                          </Box>
                        </Box>
                      </Box>
                      {selectedFile ? (
                        <>
                          {" "}
                          <Box sx={{ mt: 2, width: 75, ml: "15rem" }}>
                            {selectedFile ? (
                              <img
                                height="135px"
                                width="100px"
                                border="1px solid black"
                                style={{ marginLeft: "1rem" }}
                                src={preview}
                              />
                            ) : (
                              <img
                                height="135px"
                                width="100px"
                                border="1px solid black"
                                style={{ marginLeft: "1rem" }}
                                // src={
                                //   AttId == 1
                                //     ? preview
                                //     : `/api/generaldetails/show/${dataype?.filename}`
                                // }
                              />
                            )}
                          </Box>
                        </>
                      ) : (
                        <>
                          {" "}
                          <Box sx={{ mt: 2, width: 75, ml: "15rem" }}>
                            <CardMedia
                              sx={{
                                border: "1px solid black",
                                mt: 20,
                              }}
                              component="img"
                              height="135"
                              image={`/api/paymentdetails/payshow/${paymentup?.filename}`}
                              alt={paymentup?.filename}
                            />
                          </Box>
                        </>
                      )}
                      <Box sx={{ display: "flex" }}>
                        <Typography sx={{ fontSize: 13, mt: 0, ml: 3 }}>
                          <span style={{ color: "red" }}>*</span>Active:
                        </Typography>
                        <Box sx={{ ml: 15, mt: 0 }}>
                          {EditChecked === true ? (
                            <>
                              <Switch
                                className={classes.switch}
                                checked={EditChecked}
                                onChange={(e) =>
                                  setEditChecked(e.target.checked)
                                }

                                // size="small"
                              />
                            </>
                          ) : (
                            <>
                              <Switch
                                checked={EditChecked}
                                onChange={(e) =>
                                  setEditChecked(e.target.checked)
                                }

                                // size="small"
                              />
                            </>
                          )}
                        </Box>
                      </Box>
                      <Box sx={{ ml: 70, mt: -5 }}>
                        <Button type="submit" variant="contained">
                          Update
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                </Container>
              </ThemeProvider>
            </Box>
          </div>
        </>
      ) : (
        <>
          {" "}
          <div
            style={{
              boxShadow: "5px 0 30px rgba(1,41,112,0.08)",
              padding: "10px",
            }}
          >
            <Box>
              <Box>
                <Typography variant="h6" sx={{ mt: -1 }}>
                  Add New Gateway
                </Typography>
                <Breadcrumbs
                  separator={<NavigateNextIcon fontSize="small" />}
                  aria-label="breadcrumb"
                >
                  <Link
                    to="/"
                    style={{
                      color: "rgba(0, 0, 0, 0.6)",
                      fontSize: "13px",
                    }}
                  >
                    <Typography sx={{ fontSize: 13 }}>Home</Typography>
                  </Link>
                  <Link
                    to="/gateway"
                    style={{ color: "rgba(0, 0, 0, 0.6)", fontSize: "13px" }}
                  >
                    <Typography sx={{ fontSize: 13 }}>Gateway</Typography>
                  </Link>
                </Breadcrumbs>
                <Divider />
              </Box>{" "}
              <ThemeProvider theme={theme}>
                <Container
                  component="main"
                  maxWidth="sm"
                  sx={{
                    my: { xs: 3, md: 6, lg: 10 },
                    p: { xs: 2, md: 1 },
                  }}
                >
                  <CssBaseline />
                  <Box
                    component="form"
                    onSubmit={handleSubmit(SaveGatewayDetails)}
                    sx={{
                      display: "flex",
                      width: "120%",
                      height: 530,
                      flexDirection: "column",
                      borderRadius: "0px",
                      p: 5,
                      border: "1px solid #888888",
                      mt: -7,
                      ml: -8,
                      boxShadow: " 1px 1px 1px 1px #909090",
                    }}
                  >
                    <Box>
                      {" "}
                      <Box sx={{ display: "flex", ml: 3 }}>
                        <Box>
                          <Typography sx={{ fontSize: 14, mt: 2 }}>
                            {" "}
                            <span style={{ color: "red" }}>*</span> Gateway
                            Name:
                          </Typography>
                        </Box>
                        <Box sx={{ ml: 5 }}>
                          {" "}
                          <TextField
                            size="small"
                            fullWidth
                            margin="normal"
                            id="name"
                            name="name"
                            autoComplete="off"
                            style={{ width: 290 }}
                            inputProps={{ style: { fontSize: 13 } }}
                            {...register("name", { required: true })}
                            error={errors.name}
                          />
                        </Box>
                      </Box>
                      <Box sx={{ display: "flex", ml: 3, mt: 1 }}>
                        <Box>
                          <Typography sx={{ fontSize: 14, mt: 0 }}>
                            {" "}
                            <span style={{ color: "red" }}>*</span> Mode:
                          </Typography>
                        </Box>
                        <Box sx={{ minWidth: 185, ml: 14 }}>
                          <FormControl fullWidth>
                            {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
                            <Select
                              required="required"
                              labelId="demo-simple-select-label"
                              style={{ width: 290 }}
                              size="small"
                              id="demo-simple-select"
                              inputProps={{ style: { fontSize: 13 } }}
                              value={Mode}
                              onChange={handleChange}
                            >
                              <MenuItem value={"test"} sx={{ fontSize: 13 }}>
                                Test
                              </MenuItem>
                              <MenuItem
                                value={"production"}
                                sx={{ fontSize: 13 }}
                              >
                                Production
                              </MenuItem>
                            </Select>
                          </FormControl>
                        </Box>
                      </Box>
                      <Box sx={{ display: "flex", ml: 3 }}>
                        <Box>
                          <Typography sx={{ fontSize: 14, mt: 2 }}>
                            {" "}
                            <span style={{ color: "red" }}>*</span> App Id:
                          </Typography>
                        </Box>
                        <Box sx={{ ml: 13 }}>
                          {" "}
                          <TextField
                            size="small"
                            fullWidth
                            style={{ width: 290 }}
                            margin="normal"
                            id="appid"
                            name="appid"
                            autoComplete="off"
                            inputProps={{ style: { fontSize: 13 } }}
                            {...register("appid", { required: true })}
                            error={errors.appid}
                          />
                        </Box>
                      </Box>
                      <Box sx={{ display: "flex", ml: 3 }}>
                        <Box>
                          <Typography sx={{ fontSize: 14, mt: 2 }}>
                            {" "}
                            <span style={{ color: "red" }}>*</span> Secret key:
                          </Typography>
                        </Box>
                        <Box sx={{ ml: 9.5 }}>
                          {" "}
                          <TextField
                            size="small"
                            fullWidth
                            style={{ width: 290 }}
                            margin="normal"
                            id="seckey"
                            name="seckey"
                            autoComplete="off"
                            inputProps={{ style: { fontSize: 13 } }}
                            {...register("seckey", { required: true })}
                            error={errors.seckey}
                          />
                        </Box>
                      </Box>
                      <Box sx={{ display: "flex", ml: 3, mt: 0 }}>
                        <Typography sx={{ fontSize: "0.875rem" }}>
                          {" "}
                          <span style={{ color: "red" }}>*</span>Logo:
                        </Typography>
                        <Box sx={{ ml: 15 }}>
                          <Box>
                            <TextField
                              size="small"
                              variant="outlined"
                              input
                              type="file"
                              required="required"
                              onChange={onSelectFile}
                              style={{ width: 290 }}
                              inputProps={{
                                style: { fontSize: "0.875rem" },
                              }}
                            />

                            <Box sx={{ ml: 15, mt: 2 }}>
                              {selectedFile ? (
                                <img
                                  height="100px"
                                  width="100px"
                                  border="1px solid #555"
                                  style={{ marginLeft: "-6rem" }}
                                  src={preview}
                                />
                              ) : (
                                <img
                                  height="100px"
                                  width="100px"
                                  border="1px solid #555"
                                  style={{ marginLeft: "-6rem" }}
                                  // src={
                                  //   AttId == 1
                                  //     ? preview
                                  //     : `/api/generaldetails/show/${dataype?.filename}`
                                  // }
                                />
                              )}
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                      <Box sx={{ display: "flex" }}>
                        <Typography sx={{ fontSize: 13, mt: 0, ml: 3 }}>
                          <span style={{ color: "red" }}>*</span>Active:
                        </Typography>
                        <Box sx={{ ml: 15, mt: 0 }}>
                          {checked === true ? (
                            <>
                              {" "}
                              <Switch
                                className={classes.switch}
                                checked={checked}
                                onChange={handleChangeChekced1}
                              />
                            </>
                          ) : (
                            <>
                              {" "}
                              <Switch
                                checked={checked}
                                onChange={handleChangeChekced1}
                              />
                            </>
                          )}
                        </Box>
                      </Box>
                      <Box sx={{ ml: 70, mt: -5 }}>
                        <Button type="submit" variant="contained">
                          Save
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                </Container>
              </ThemeProvider>
            </Box>
          </div>
        </>
      )}
    </>
  );
}
