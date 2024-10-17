import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Box } from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";
import { Divider } from "../../node_modules/@material-ui/core/index";
import {
  useDispatch,
  useSelector,
} from "../../node_modules/react-redux/es/exports";
import {
  customerAddressList,
  saveCustomerAddress,
  updatecustomerAddress,
} from "../actions/customerAction";
import { useNavigate } from "react-router-dom";

function AdressScreen() {
  const {
    register: register1,
    handleSubmit,
    formState: { errors: errors1 },
  } = useForm();

  const params = useParams();
  const customindId = params.id;

  const customAddressList = useSelector((state) => state.customAddressList);
  const { custAddList } = customAddressList;

  const addressId = custAddList?.find((x) => x?._id === customindId);

  const theme = createTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [customEmail, setcustomEmail] = useState(addressId?.custEmail);
  const [IdentNo, setIdentNo] = useState(addressId?.identificationNo);
  const [addressAlias, setaddressAlias] = useState(addressId?.addresAlias);
  const [fname, setfname] = useState(addressId?.fname);
  const [lname, setlname] = useState(addressId?.lname);
  const [comapny, setcomapny] = useState(addressId?.company);
  const [vatNo, setvatNo] = useState(addressId?.vatNo);
  const [address, setaddress] = useState(addressId?.address);
  const [address2, setaddress2] = useState(addressId?.Addres2);
  const [zip, setzip] = useState(addressId?.zip);
  const [city, setcity] = useState(addressId?.city);
  const [country, setcountry] = useState(addressId?.country);
  const [phone, setphone] = useState(addressId?.phone);
  const [mobile, setmobile] = useState(addressId?.mobile);
  const [other, setother] = useState(addressId?.other);

  useEffect(() => {
    dispatch(customerAddressList());
  }, []);

  const submitHandler = (e) => {
    dispatch(
      saveCustomerAddress({
        custEmail: e.custEmail,
        identificationNo: e.identificationNo,
        addresAlias: e.addresAlias,
        fname: e.fname,
        lname: e.lname,
        company: e.company,
        vatNo: e.vatNo,
        address: e.address,
        Addres2: e.Addres2,
        zip: e.zip,
        city: e.city,
        country: e.country,
        phone: e.phone,
        mobile: e.mobile,
        other: e.other,
      })
    );
    window.confirm("Address Details Saved SuccessFully!!");
    event.target.reset();
  };

  const updateHandler = () => {
    dispatch(
      updatecustomerAddress({
        _id: customindId,
        custEmail: customEmail,
        identificationNo: IdentNo,
        addresAlias: addressAlias,
        fname: fname,
        lname: lname,
        company: comapny,
        vatNo: vatNo,
        address: address,
        Addres2: address2,
        zip: zip,
        city: city,
        country: country,
        phone: phone,
        mobile: mobile,
        other: other,
      })
    );
    window.confirm("Customer Address Details Updated SuccessFully!!");
    navigate("/address");
  };

  return (
    <>
      <Typography variant='h5'>Create Customer Address</Typography>
      <Box sx={{ display: "flex", mt: 2 }}>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize='small' />}
          aria-label='breadcrumb'
        >
          <Link
            to='/'
            style={{
              color: "rgba(0, 0, 0, 0.6)",
              fontSize: "15px",
            }}
          >
            <Typography>Home</Typography>
          </Link>

          <Link
            to='/address'
            style={{
              color: "rgba(0, 0, 0, 0.6)",
              fontSize: "15px",
            }}
          >
            <Typography>Customer Address</Typography>
          </Link>

          <Typography sx={{ fontSize: "15px" }}>
            Create Customer Address
          </Typography>
        </Breadcrumbs>
      </Box>

      <Divider sx={{ mt: 3 }} />
      {customindId ? (
        <>
          <Box>
            <Box>
              <ThemeProvider theme={theme}>
                <Container
                  component='main'
                  maxWidth='sm'
                  sx={{
                    my: { xs: 3, md: 6, lg: 10 },
                    p: { xs: 2, md: 1 },
                  }}
                >
                  <CssBaseline />

                  <Box
                    component='form'
                    onSubmit={handleSubmit(updateHandler)}
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
                    <Typography variant='h5' sx={{ textAlign: "center" }}>
                      {" "}
                      Create Employee Details
                    </Typography>

                    <TextField
                      size='small'
                      margin='normal'
                      fullWidth
                      label='Customer Email'
                      autoComplete='off'
                      value={customEmail}
                      onChange={(e) => setcustomEmail(e.target.value)}
                    />

                    <TextField
                      size='small'
                      margin='normal'
                      fullWidth
                      label='Identification number'
                      autoComplete='off'
                      value={IdentNo}
                      onChange={(e) => setIdentNo(e.target.value)}
                    />

                    <TextField
                      size='small'
                      margin='normal'
                      fullWidth
                      label='Address alias'
                      autoComplete='off'
                      value={addressAlias}
                      onChange={(e) => setaddressAlias(e.target.value)}
                    />

                    <TextField
                      size='small'
                      margin='normal'
                      fullWidth
                      label='First name'
                      autoComplete='off'
                      value={fname}
                      onChange={(e) => setfname(e.target.value)}
                    />

                    <TextField
                      size='small'
                      margin='normal'
                      fullWidth
                      label='Last name'
                      autoComplete='off'
                      value={lname}
                      onChange={(e) => setlname(e.target.value)}
                    />

                    <TextField
                      size='small'
                      margin='normal'
                      fullWidth
                      label='Company'
                      autoComplete='off'
                      value={comapny}
                      onChange={(e) => setcomapny(e.target.value)}
                    />

                    <TextField
                      size='small'
                      margin='normal'
                      fullWidth
                      label='VAT number'
                      autoComplete='off'
                      value={vatNo}
                      onChange={(e) => setvatNo(e.target.value)}
                    />

                    <TextField
                      size='small'
                      margin='normal'
                      fullWidth
                      label='Address'
                      autoComplete='off'
                      value={address}
                      onChange={(e) => setaddress(e.target.value)}
                    />

                    <TextField
                      size='small'
                      margin='normal'
                      fullWidth
                      label='Address (2)'
                      autoComplete='off'
                      value={address2}
                      onChange={(e) => setaddress2(e.target.value)}
                    />

                    <TextField
                      size='small'
                      margin='normal'
                      fullWidth
                      label='Zip/Postal code'
                      autoComplete='off'
                      value={zip}
                      onChange={(e) => setzip(e.target.value)}
                    />

                    <TextField
                      size='small'
                      margin='normal'
                      fullWidth
                      label='City'
                      autoComplete='off'
                      value={city}
                      onChange={(e) => setcity(e.target.value)}
                    />

                    <TextField
                      size='small'
                      margin='normal'
                      fullWidth
                      label='Country'
                      autoComplete='off'
                      value={country}
                      onChange={(e) => setcountry(e.target.value)}
                    />

                    <TextField
                      size='small'
                      margin='normal'
                      fullWidth
                      label='Phone'
                      autoComplete='off'
                      value={phone}
                      onChange={(e) => setphone(e.target.value)}
                    />

                    <TextField
                      size='small'
                      margin='normal'
                      fullWidth
                      label='Mobile phone'
                      autoComplete='off'
                      value={mobile}
                      onChange={(e) => setmobile(e.target.value)}
                    />

                    <TextField
                      size='small'
                      margin='normal'
                      fullWidth
                      label='Other'
                      autoComplete='off'
                      value={other}
                      onChange={(e) => setother(e.target.value)}
                    />

                    <Box sx={{ display: "flex" }}>
                      <Button
                        variant='contained'
                        sx={{ mt: 3, mb: 2, ml: 5 }}
                        type='submit'
                      >
                        Update
                      </Button>
                    </Box>
                  </Box>
                </Container>
              </ThemeProvider>
            </Box>
          </Box>
        </>
      ) : (
        <>
          <Box>
            <Box>
              <ThemeProvider theme={theme}>
                <Container
                  component='main'
                  maxWidth='sm'
                  sx={{
                    my: { xs: 3, md: 6, lg: 10 },
                    p: { xs: 2, md: 1 },
                  }}
                >
                  <CssBaseline />

                  <Box
                    component='form'
                    onSubmit={handleSubmit(submitHandler)}
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
                    <Typography variant='h5' sx={{ textAlign: "center" }}>
                      {" "}
                      Create Employee Details
                    </Typography>

                    <TextField
                      size='small'
                      margin='normal'
                      fullWidth
                      label='Customer Email'
                      autoComplete='off'
                      {...register1("custEmail", { required: true })}
                      error={errors1.custEmail}
                    />
                    {errors1.eprofil && (
                      <span className='formError'>First Name is required</span>
                    )}

                    <TextField
                      size='small'
                      margin='normal'
                      fullWidth
                      label='Identification number'
                      autoComplete='off'
                      {...register1("identificationNo", { required: true })}
                      error={errors1.identificationNo}
                    />
                    {errors1.eprofil && (
                      <span className='formError'>
                        Identification Number is required
                      </span>
                    )}

                    <TextField
                      size='small'
                      margin='normal'
                      fullWidth
                      label='Address alias'
                      autoComplete='off'
                      {...register1("addresAlias", { required: true })}
                      error={errors1.addresAlias}
                    />
                    {errors1.eprofil && (
                      <span className='formError'>
                        Address alias is required
                      </span>
                    )}

                    <TextField
                      size='small'
                      margin='normal'
                      fullWidth
                      label='First name'
                      autoComplete='off'
                      {...register1("fname", { required: true })}
                      error={errors1.fname}
                    />
                    {errors1.fname && (
                      <span className='formError'>First name is required</span>
                    )}
                    <TextField
                      size='small'
                      margin='normal'
                      fullWidth
                      label='Last name'
                      autoComplete='off'
                      {...register1("lname", { required: true })}
                      error={errors1.lname}
                    />
                    {errors1.lname && (
                      <span className='formError'>Last name is required</span>
                    )}

                    <TextField
                      size='small'
                      margin='normal'
                      fullWidth
                      label='Company'
                      autoComplete='off'
                      {...register1("company", { required: true })}
                      error={errors1.company}
                    />
                    {errors1.eprofil && (
                      <span className='formError'>Company is required</span>
                    )}

                    <TextField
                      size='small'
                      margin='normal'
                      fullWidth
                      label='VAT number'
                      autoComplete='off'
                      {...register1("vatNo", { required: true })}
                      error={errors1.vatNo}
                    />
                    {errors1.eprofil && (
                      <span className='formError'>VAT Number is required</span>
                    )}

                    <TextField
                      size='small'
                      margin='normal'
                      fullWidth
                      label='Address'
                      autoComplete='off'
                      {...register1("address", { required: true })}
                      error={errors1.address}
                    />
                    {errors1.address && (
                      <span className='formError'>Address is required</span>
                    )}
                    <TextField
                      size='small'
                      margin='normal'
                      fullWidth
                      label='Address (2)'
                      autoComplete='off'
                      {...register1("Addres2", { required: true })}
                      error={errors1.Addres2}
                    />
                    {errors1.eprofil && (
                      <span className='formError'>Address 2 is required</span>
                    )}

                    <TextField
                      size='small'
                      margin='normal'
                      fullWidth
                      label='Zip/Postal code'
                      autoComplete='off'
                      {...register1("zip", { required: true })}
                      error={errors1.zip}
                    />
                    {errors1.zip && (
                      <span className='formError'>
                        Zip/Postal code is required
                      </span>
                    )}

                    <TextField
                      size='small'
                      margin='normal'
                      fullWidth
                      label='City'
                      autoComplete='off'
                      {...register1("city", { required: true })}
                      error={errors1.city}
                    />
                    {errors1.city && (
                      <span className='formError'>City is required</span>
                    )}

                    <TextField
                      size='small'
                      margin='normal'
                      fullWidth
                      label='Country'
                      autoComplete='off'
                      {...register1("country", { required: true })}
                      error={errors1.country}
                    />
                    {errors1.country && (
                      <span className='formError'>Country is required</span>
                    )}
                    <TextField
                      size='small'
                      margin='normal'
                      fullWidth
                      label='Phone'
                      autoComplete='off'
                      {...register1("phone", { required: true })}
                      error={errors1.phone}
                    />
                    {errors1.phone && (
                      <span className='formError'>Phone is required</span>
                    )}

                    <TextField
                      size='small'
                      margin='normal'
                      fullWidth
                      label='Mobile phone'
                      autoComplete='off'
                      {...register1("mobile", { required: true })}
                      error={errors1.mobile}
                    />
                    {errors1.mobile && (
                      <span className='formError'>
                        Mobile Phone is required
                      </span>
                    )}

                    <TextField
                      size='small'
                      margin='normal'
                      fullWidth
                      label='Other'
                      autoComplete='off'
                      {...register1("other", { required: true })}
                      error={errors1.other}
                    />
                    {errors1.other && (
                      <span className='formError'>Others is required</span>
                    )}

                    <Box sx={{ display: "flex" }}>
                      <Button
                        variant='contained'
                        sx={{ mt: 3, mb: 2, ml: 5 }}
                        type='submit'
                      >
                        Save
                      </Button>
                    </Box>
                  </Box>
                </Container>
              </ThemeProvider>
            </Box>
          </Box>
        </>
      )}
    </>
  );
}

export default AdressScreen;
