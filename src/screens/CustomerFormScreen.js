import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { MenuItem } from "../../node_modules/@material-ui/core/index";

import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Switch from "@mui/material/Switch";

// import Checkbox from '@mui/material/Checkbox';

import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link, useParams } from "react-router-dom";
import { Divider } from "../../node_modules/@material-ui/core/index";

import { useNavigate } from "react-router-dom";

import {
  CustomerListDetails,
  saveDetail,
  updateCustomerDetails,
} from "../actions/customerrAction";
import {
  CUSTOMER_DELETE_RESET,
  CUSTOMER_DETAILS_RESET,
  CUSTOMER_UPDATE_RESET,
} from "../constants/customerrConstants";

function CustomerFormScreen() {
  const {
    register: register1,
    handleSubmit: handleSubmit1,
    formState: { errors: errors1 },
  } = useForm();
  const theme = createTheme();
  const dispatch = useDispatch();

  const params = useParams();
  const EditId = params.id;
  const viewId = params.id;

  const navigate = useNavigate();

  const customerList = useSelector((state) => state.customerList);
  const { customers } = customerList;

  const cusEdit = customers?.find((x) => x._id === viewId);

  const customerUpdate = useSelector((state) => state.customerUpdate);
  const { success: updateCustomer } = customerUpdate;

  const customerDelete = useSelector((state) => state.customerDelete);
  const { success: successDelete } = customerDelete;

  const [CustomerActive, setCustomerActive] = useState("");

  const [checked, setchecked] = useState(false);
  const [check, setCheck] = useState(false);

  const [Editfirstname, setEditfirstname] = useState(cusEdit?.fname);
  const [Editlastname, setEditlastname] = useState(cusEdit?.lname);
  const [Editemail, setEditemail] = useState(cusEdit?.emailorphone);
  const [Editpassword, setEditpassword] = useState(cusEdit?.password);
  const [EditmobileNumber, setEditmobileNumber] = useState(cusEdit?.cpassword);
  const [EditdateOfBirth, setEditdateOfBirth] = useState(cusEdit?.dob);
  const [EditcusGroup, setEditcusGroup] = useState(cusEdit?.cusGroup);
  // eslint-disable-next-line no-unused-vars
  const [EditvalidCustomer, setEditvalidCustomer] = useState(cusEdit?.checked);
  // eslint-disable-next-line no-unused-vars
  const [EditshowOffers, setEditshowOffers] = useState(cusEdit?.showOffers);

  const customerSave = useSelector((state) => state.customerSave);
  const { success: CustomerSaveSuccess } = customerSave;

  // const handleChangeradio = (event) => {
  //   if (combination == "Mr") {
  //     setCombination(event.target.value);
  //   } else if (combination == "Mrs") {
  //     setCombination(event.target.value);
  //   } else {
  //     setCombination(event.target.value);
  //   }
  // };

  const enableValidCustomer = (event) => {
    if (checked === true) {
      setchecked(event.target.checked);
    } else {
      setchecked(event.target.checked);
    }
  };

  const enablePartnerOffers = (event) => {
    if (check === true) {
      setCheck(event.target.checked);
    } else {
      setCheck(event.target.checked);
    }
  };
  // const handleChange = (event) => {
  //   setValue(event.target.value);
  // };
  //******************************** */ Save Section*******************
  const createCustemerDetailes = (e) => {
    console.log("e", e);
    dispatch(
      saveDetail({
        fname: e.fname,
        lname: e.lname,
        emailorphone: e.email,
        password: e.password,
        cpassword: e.cpassword,
        dob: e.dob,
        cusGroup: CustomerActive,
        checked: checked,
        showOffers: check,

        // EmpProfile: EmployeProfile,
        // active: EmployeActive,
      })
    );
    window.confirm("Profile Saved Successfully!!");
    navigate("/custemer");
    e.target.reset();

    setchecked(false);
    setCheck(false);

    setCustomerActive("");
  }; //makes empty columns

  useEffect(() => {
    dispatch(CustomerListDetails());

    if (CustomerSaveSuccess) {
      dispatch({ type: CUSTOMER_DETAILS_RESET });
    }
    if (updateCustomer) {
      dispatch({ type: CUSTOMER_UPDATE_RESET });
    }
    if (successDelete) {
      dispatch({ type: CUSTOMER_DELETE_RESET });
    }
  }, [dispatch, successDelete, CustomerSaveSuccess, updateCustomer]);

  const Updatehandle = () => {
    dispatch(
      updateCustomerDetails({
        id: EditId,

        fname: Editfirstname,
        lname: Editlastname,
        emailorphone: Editemail,
        password: Editpassword,
        cpassword: EditmobileNumber,
        dob: EditdateOfBirth,
        cusGroup: EditcusGroup,
        checked: EditvalidCustomer,
        showOffers: EditshowOffers,
      })
    );
    window.confirm("Customer Details Update Successfully!!");
    navigate("/custemer");
  };

  return (
    <>
      <Typography variant="h6" sx={{ mt: -2 }}>
        Create Customer
      </Typography>
      <Box sx={{ display: "flex" }}>
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
            <Typography sx={{ fontSize: "13px" }}>Home</Typography>
          </Link>
          <Link
            to="/custemer"
            style={{
              color: "rgba(0, 0, 0, 0.6)",
              fontSize: "13px",
            }}
          >
            <Typography sx={{ fontSize: "13px" }}>Customer</Typography>
          </Link>

          <Typography sx={{ fontSize: "13px" }}>Create Customer</Typography>
        </Breadcrumbs>
      </Box>

      <Divider sx={{ mt: 3 }} />

      <>
        {EditId ? (
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
                    onSubmit={handleSubmit1(Updatehandle)}
                    component="form"
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
                      Update Customer Details
                    </Typography>

                    <TextField
                      size="small"
                      margin="normal"
                      fullWidth
                      id="First Name"
                      label="First Name"
                      name="fname"
                      autoComplete="off"
                      value={Editfirstname}
                      onChange={(e) => setEditfirstname(e.target.value)}
                      // InputProps={{
                      //   readOnly: true,
                      // }}
                    />

                    <TextField
                      size="small"
                      margin="normal"
                      fullWidth
                      id="Last Name"
                      label="Last Name"
                      name="lname"
                      autoComplete="off"
                      value={Editlastname}
                      onChange={(e) => setEditlastname(e.target.value)}
                    />

                    <TextField
                      size="small"
                      margin="normal"
                      fullWidth
                      id="Email"
                      label="Email"
                      name="email"
                      autoComplete="off"
                      value={Editemail}
                      onChange={(e) => setEditemail(e.target.value)}
                    />
                    <TextField
                      size="small"
                      margin="normal"
                      fullWidth
                      id="password"
                      label="Password"
                      name="password"
                      autoComplete="off"
                      value={Editpassword}
                      onChange={(e) => setEditpassword(e.target.value)}
                    />

                    <TextField
                      size="small"
                      margin="normal"
                      fullWidth
                      id="Number"
                      label="Confirm password"
                      name="mnumber"
                      autoComplete="off"
                      value={EditmobileNumber}
                      onChange={(e) => setEditmobileNumber(e.target.value)}
                    />
                    <TextField
                      size="small"
                      margin="normal"
                      fullWidth
                      id="dob"
                      type="date"
                      autoComplete="off"
                      value={EditdateOfBirth}
                      onChange={(e) => setEditdateOfBirth(e.target.value)}
                    />
                    {errors1.eprofil && (
                      <span className="formError">
                        Date of Birth is required
                      </span>
                    )}
                    <FormControl component="fieldset">
                      <FormLabel component="legend">Enabled</FormLabel>
                      <FormControlLabel
                        control={
                          <Switch
                            checked={EditvalidCustomer}
                            //value={EditvalidCustomer}
                            onChange={(e) =>
                              setEditvalidCustomer(e.target.checked)
                            }
                            color="primary"
                          />
                        }
                        labelPlacement="top"
                      />
                    </FormControl>
                    <FormControl component="fieldset">
                      <FormLabel component="legend">Partner offers</FormLabel>
                      <FormControlLabel
                        // value="top"
                        control={
                          <Switch
                            checked={EditshowOffers}
                            //value={EditshowOffers}
                            // onChange={(e) => setchecked(e.target.checked)}
                            onChange={(e) =>
                              setEditshowOffers(e.target.checked)
                            }
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
                        value={EditcusGroup}
                        label="Attributes Type"
                        onChange={(e) => setEditcusGroup(e.target.value)}
                      >
                        <MenuItem value={"Visitor"}>Visitor</MenuItem>
                        <MenuItem value={"Guest"}>Guest</MenuItem>
                        <MenuItem value={"Customer"}>Customer</MenuItem>
                      </Select>
                    </FormControl>
                    <Box sx={{ display: "flex" }}>
                      <Button
                        variant="contained"
                        sx={{
                          mt: 3,
                          mb: 2,
                          ml: 5,
                          borderRadius: "20px",
                          backgroundColor: "#0099CC",
                        }}
                        type="submit"
                      >
                        Update
                      </Button>
                    </Box>
                  </Box>
                </Container>
              </ThemeProvider>
            </Box>
          </Box>
        ) : (
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
                    onSubmit={handleSubmit1(createCustemerDetailes)}
                    component="form"
                    sx={{
                      display: "flex",
                      width: "100%",
                      flexDirection: "column",
                      alignItems: "center",
                      borderRadius: "0px",
                      p: 5,
                      border: "1px solid #000000",
                      mt: -10,
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{ textAlign: "center", mt: -5, fontSize: 16 }}
                    >
                      {" "}
                      Create Customer Details
                    </Typography>
                    {/* <FormControl>
                    
                    <Box sx={{ display: 'flex' }}>
                      <FormControlLabel
                        control={<Checkbox name="Mr." />}
                        label="Mr."
                      />
                      <FormControlLabel
                        control={<Checkbox name="Mrs." />}
                        label="Mrs."
                      />
                      <FormControlLabel
                        control={<Checkbox name="Miss." />}
                        label="Miss."
                      />
                    </Box>
                  </FormControl> */}
                    {/* <FormControl>
                      <RadioGroup
                        sx={{ color: "success" }}
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={combination}
                        onChange={handleChangeradio}
                      >
                        <Box sx={{ display: "flex" }}>
                          <FormControlLabel
                            value="Mr"
                            control={<Radio name="Mr" size="small" />}
                            label="Mr"
                          />
                          <FormControlLabel
                            value="Mrs"
                            control={<Radio name="Mrs" size="small" />}
                            label="Mrs"
                          />
                          <FormControlLabel
                            value="Miss"
                            control={<Radio name="Miss" size="small" />}
                            label="Miss"
                          />
                        </Box>
                      </RadioGroup>
                    </FormControl> */}

                    <TextField
                      size="small"
                      margin="normal"
                      fullWidth
                      id="First Name"
                      label={
                        <Typography sx={{ fontSize: 13 }}>
                          First Name
                        </Typography>
                      }
                      name="fname"
                      autoComplete="off"
                      sx={{ mt: 1 }}
                      {...register1("fname", { required: true })}
                      error={errors1.eprofil}
                    />
                    {errors1.eprofil && (
                      <span className="formError">First Name is required</span>
                    )}

                    <TextField
                      size="small"
                      margin="normal"
                      fullWidth
                      id="Last Name"
                      label={
                        <Typography sx={{ fontSize: 13 }}>Last Name</Typography>
                      }
                      name="lname"
                      autoComplete="off"
                      {...register1("lname", { required: true })}
                      error={errors1.lname}
                    />
                    {errors1.eprofil && (
                      <span className="formError">Last Name is required</span>
                    )}

                    <TextField
                      size="small"
                      margin="normal"
                      fullWidth
                      id="Email"
                      label={
                        <Typography sx={{ fontSize: 13 }}>Email</Typography>
                      }
                      name="email"
                      autoComplete="off"
                      {...register1("email", { required: true })}
                      error={errors1.email}
                    />
                    {errors1.eprofil && (
                      <span className="formError">Email is required</span>
                    )}

                    <TextField
                      size="small"
                      margin="normal"
                      fullWidth
                      id="Password"
                      label={
                        <Typography sx={{ fontSize: 13 }}>Password</Typography>
                      }
                      name="password"
                      autoComplete="off"
                      maxLength="10"
                      minLength="4"
                      {...register1("password", { required: true })}
                      error={errors1.password}
                    />
                    {errors1.eprofil && (
                      <span className="formError">password is required</span>
                    )}

                    <TextField
                      size="small"
                      margin="normal"
                      fullWidth
                      id="cPassword"
                      label={
                        <Typography sx={{ fontSize: 13 }}>
                          {" "}
                          Confirm Password
                        </Typography>
                      }
                      name="cpassword"
                      autoComplete="off"
                      maxLength="10"
                      minLength="4"
                      {...register1("cpassword", { required: true })}
                      error={errors1.cpassword}
                    />
                    {errors1.eprofil && (
                      <span className="formError">password is required</span>
                    )}

                    <TextField
                      size="small"
                      margin="normal"
                      fullWidth
                      id="dob"
                      type="date"
                      autoComplete="off"
                      {...register1("dob", { required: true })}
                      error={errors1.dob}
                    />
                    {errors1.eprofil && (
                      <span className="formError">
                        Date of Birth is required
                      </span>
                    )}
                    <FormControl component="fieldset">
                      <FormLabel component="legend" sx={{ fontSize: 13 }}>
                        Enabled
                      </FormLabel>
                      <FormControlLabel
                        // value="true"
                        control={
                          <Switch
                            checked={checked}
                            onChange={enableValidCustomer}
                            color="primary"
                            size="small"
                          />
                        }
                        labelPlacement="top"
                      />
                    </FormControl>
                    <FormControl component="fieldset">
                      <FormLabel component="legend" sx={{ fontSize: 13 }}>
                        Partner offers
                      </FormLabel>
                      <FormControlLabel
                        // value="top"
                        control={
                          <Switch
                            checked={check}
                            onChange={enablePartnerOffers}
                            color="primary"
                            size="small"
                          />
                        }
                        labelPlacement="top"
                      />
                    </FormControl>

                    <FormControl fullWidth sx={{ mt: 1 }}>
                      <InputLabel sx={{ fontSize: 13 }}>
                        Group access
                      </InputLabel>
                      <Select
                        id="standard-simple-select"
                        //   value={EmployeActive}
                        label="Attributes Type"
                        onChange={(e) => setCustomerActive(e.target.value)}
                        size="small"
                      >
                        <MenuItem sx={{ fontSize: 13 }} value={"Visitor"}>
                          Visitor
                        </MenuItem>
                        <MenuItem sx={{ fontSize: 13 }} value={"Guest"}>
                          Guest
                        </MenuItem>
                        <MenuItem
                          sx={{ fontSize: 13 }}
                          value={"Customer"}
                          default
                        >
                          Customer
                        </MenuItem>
                      </Select>
                    </FormControl>
                    <Box sx={{ display: "flex" }}>
                      <Button
                        variant="contained"
                        sx={{ mt: 1, mb: 0, ml: 5 }}
                        type="submit"
                        size="small"
                      >
                        Save
                      </Button>
                    </Box>
                  </Box>
                </Container>
              </ThemeProvider>
            </Box>
          </Box>
        )}
      </>
    </>
  );
}

export default CustomerFormScreen;
