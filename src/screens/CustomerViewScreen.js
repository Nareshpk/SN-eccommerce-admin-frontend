import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import {
  Box,
  Breadcrumbs,
  Container,
  CssBaseline,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "../../node_modules/@material-ui/core/index";

import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import { createTheme } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import Switch from "@mui/material/Switch";
export default function CustomerViewScreen() {
  const theme = createTheme();
  const params = useParams();
  const dispatch = useDispatch();

  const customerList = useSelector((state) => state.customerList);
  const { customers } = customerList;
  const viewId = params.id;
  const cusView = customers?.find((x) => x._id === viewId);

  //******************************View Part*************************************/

  const [Viewfirstname, setViewfirstname] = useState(cusView?.fname);
  const [Viewlastname, setViewlastname] = useState(cusView?.lname);
  const [Viewemail, setViewemail] = useState(cusView?.emailorphone);
  const [Viewpassword, setViewpassword] = useState(cusView?.password);
  const [ViewmobileNumber, setViewmobileNumber] = useState(cusView?.cpassword);
  const [ViewdateOfBirth, setViewdateOfBirth] = useState(cusView?.dob);
  const [ViewcusGroup, setViewcusGroup] = useState(cusView?.cusGroup);
  // eslint-disable-next-line no-unused-vars
  const [ViewvalidCustomer, setViewvalidCustomer] = useState(cusView?.checked);
  // eslint-disable-next-line no-unused-vars
  const [ViewshowOffers, setViewshowOffers] = useState(cusView?.showOffers);
  useEffect(() => {
    // dispatch(CustomerListDetails());
  }, [dispatch]);
  return (
    <>
      <Typography variant="h5">View Customer</Typography>
      <Box sx={{ display: "flex" }}>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          <Link
            to="/"
            style={{
              color: "rgba(0, 0, 0, 0.6)",
              fontSize: "15px",
            }}
          >
            <Typography>Home</Typography>
          </Link>
          <Link
            to="/custemer"
            style={{
              color: "rgba(0, 0, 0, 0.6)",
              fontSize: "15px",
            }}
          >
            <Typography>Customer</Typography>
          </Link>

          <Typography sx={{ fontSize: "15px" }}>View Customer</Typography>
        </Breadcrumbs>
      </Box>

      <Divider sx={{ mt: 3 }} />
      <Box>
        <Box>
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
                sx={{
                  display: "flex",
                  width: "100%",
                  flexDirection: "column",
                  alignItems: "center",
                  borderRadius: "0px",
                  p: 5,
                  border: "1px solid #000000",
                }}
              >
                <Typography variant="h5" sx={{ textAlign: "center" }}>
                  {" "}
                  View Customer Details
                </Typography>

                <TextField
                  size="small"
                  margin="normal"
                  fullWidth
                  id="First Name"
                  label="First Name"
                  name="fname"
                  autoComplete="off"
                  value={Viewfirstname}
                  onChange={(e) => setViewfirstname(e.target.value)}
                  InputProps={{
                    readOnly: true,
                  }}
                />

                <TextField
                  size="small"
                  margin="normal"
                  fullWidth
                  id="Last Name"
                  label="Last Name"
                  name="lname"
                  autoComplete="off"
                  value={Viewlastname}
                  onChange={(e) => setViewlastname(e.target.value)}
                  InputProps={{
                    readOnly: true,
                  }}
                />

                <TextField
                  size="small"
                  margin="normal"
                  fullWidth
                  id="Email"
                  label="Email"
                  name="email"
                  autoComplete="off"
                  value={Viewemail}
                  onChange={(e) => setViewemail(e.target.value)}
                  InputProps={{
                    readOnly: true,
                  }}
                />
                <TextField
                  size="small"
                  margin="normal"
                  fullWidth
                  id="password"
                  label="Password"
                  name="password"
                  autoComplete="off"
                  value={Viewpassword}
                  onChange={(e) => setViewpassword(e.target.value)}
                  InputProps={{
                    readOnly: true,
                  }}
                />

                <TextField
                  size="small"
                  margin="normal"
                  fullWidth
                  label="confirm password"
                  name="mnumber"
                  autoComplete="off"
                  value={ViewmobileNumber}
                  onChange={(e) => setViewmobileNumber(e.target.value)}
                  InputProps={{
                    readOnly: true,
                  }}
                />
                {/* <LocalizationProvider
                  fullWidth
                  sx={{ mt: 1 }}
                  dateAdapter={AdapterDayjs}
                >
                  <Stack fullWidth sx={{ mt: 1 }} spacing={3}>
                    <DesktopDatePicker
                      InputProps={{
                        readOnly: true,
                      }}
                      label="Date of Birth"
                      value={ViewdateOfBirth}
                      inputFormat="DD/MM/YYYY"
                      onChange={(e) => {
                        //console.log(e);
                        setViewdateOfBirth(e);
                      }}
                      renderInput={(params) => (
                        <TextField {...params} fullWidth />
                      )}
                    />
                  </Stack>
                </LocalizationProvider> */}
                <TextField
                  size="small"
                  margin="normal"
                  fullWidth
                  id="dob"
                  type="date"
                  autoComplete="off"
                  value={ViewdateOfBirth}
                  onChange={(e) => setViewdateOfBirth(e.target.value)}
                />

                <FormControl component="fieldset">
                  <FormLabel component="legend">Enabled</FormLabel>
                  <FormControlLabel
                    InputProps={{
                      readOnly: true,
                    }}
                    control={
                      <Switch
                        disabled
                        checked={ViewvalidCustomer}
                        //value={ViewvalidCustomer}
                        onChange={(e) => setViewvalidCustomer(e.target.checked)}
                        color="primary"
                      />
                    }
                    labelPlacement="top"
                  />
                </FormControl>
                <FormControl component="fieldset">
                  <FormLabel component="legend">Partner offers</FormLabel>
                  <FormControlLabel
                    InputProps={{
                      readOnly: true,
                    }}
                    // value="top"
                    control={
                      <Switch
                        checked={ViewshowOffers}
                        //value={ViewshowOffers}
                        // onChange={(e) => setchecked(e.target.checked)}
                        onChange={(e) => setViewshowOffers(e.target.checked)}
                        color="primary"
                      />
                    }
                    labelPlacement="top"
                  />
                </FormControl>
                <FormControl fullWidth sx={{ mt: 1 }}>
                  <InputLabel>Active</InputLabel>
                  <Select
                    id="standard-simple-select"
                    value={ViewcusGroup}
                    label="Attributes Type"
                    onChange={(e) => setViewcusGroup(e.target.value)}
                  >
                    <MenuItem value={"Visitor"}>Visitor</MenuItem>
                    <MenuItem value={"Guest"}>Guest</MenuItem>
                    <MenuItem value={"Customer"}>Customer</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Container>
          </ThemeProvider>
        </Box>
      </Box>
    </>
  );
}
