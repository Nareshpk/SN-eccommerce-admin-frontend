import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { registers } from '../actions/userAction';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { makeStyles } from "@material-ui/core";
import { useForm } from "react-hook-form";

export default function RegisterScreen() {
  const {
    register,
    handleSubmit,watch,
    formState: { errors }
  } = useForm();
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const [name, setName] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [mobile, setMobile] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [email, setEmail] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [password, setPassword] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [confirmPassword, setConfirmPassword] = useState('');

  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';
  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo, loading, error } = userRegister;
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    // e.preventDefault();
    dispatch(registers({
      name: e.name,
      email: e.email,
      password: e.password,
      mobile: e.mobile
    }));
  };

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  const useStyles = makeStyles(() => ({
    label: {
      "& .css-1hv8oq8-MuiStepLabel-label.Mui-active": { fontSize: "14px" },
      "& .css-1hv8oq8-MuiStepLabel-label.Mui-disabled": { fontSize: "14px" },
      "& .Mui-disabled .MuiStepIcon-root": { fontSize: "30px" },
      "& .Mui-active .MuiStepIcon-root": { fontSize: "30px" },
      "& .css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root.Mui-completed": { fontSize: "30px", color: "green" },
      "& .css-1hv8oq8-MuiStepLabel-label.Mui-completed": { fontSize: "14px" },
    },
    cssLabel: {
      "&.css-1pysi21-MuiFormLabel-root-MuiInputLabel-root": { fontSize: "14px" },
      "& .css-1pysi21-MuiFormLabel-root-MuiInputLabel-root.Mui-focused": { fontSize: "14px" },
    },
    cssFocused: {
      "& .css-1pysi21-MuiFormLabel-root-MuiInputLabel-root.Mui-focused": { fontSize: "14px" },
    },
  }));

  const classes = useStyles();
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            border: '1px solid #ddd',
            padding: '0px 30px 30px 30px',
            borderRadius: '5px'
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          </Avatar>
          <Typography component="h1" variant="h5">
            Create Account
          </Typography>
          {loading && <LoadingBox></LoadingBox>}
          {error && <MessageBox variant="danger">{error}</MessageBox>}
          <Box component="form" onSubmit={handleSubmit(submitHandler)} sx={{ mt: 1 }}>
            <TextField
              InputLabelProps={{
                classes: {
                  root: classes.cssLabel,
                  focused: classes.cssFocused
                }
              }}
              inputProps={{ style: { fontSize: 14 } }}
              size="small"
              margin="normal"
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
              onChange={(e) => setName(e.target.value)}
              {...register("name", { required: true })}
              error={!!(errors?.name)}
            />
            {errors.name && <span className="formError">Name is required</span>}
            <TextField
              InputLabelProps={{
                classes: {
                  root: classes.cssLabel,
                  focused: classes.cssFocused
                }
              }}
              inputProps={{ style: { fontSize: 14 } }}
              size="small"
              margin="normal"
              fullWidth
              id="mobile"
              label="Mobile Number"
              name="mobile"
              autoComplete="mobile"
              onChange={(e) => setMobile(e.target.value)}
              {...register("mobile", { required: true, pattern:{ value:/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i, }, maxLength: 10, minLength: 10 })}
              error={!!(errors?.mobile)}
            />
            {(errors?.mobile?.type === "required" && <span className="formError">Mobile number is required</span>)}
            {errors?.mobile?.type === "pattern" && (<span className="formError">Mobile number is invalid</span>)}
            {errors?.mobile?.type === "maxLength" && (<span className="formError">Mobile number is invalid</span>)}
            {errors?.mobile?.type === "minLength" && (<span className="formError">Mobile number is invalid</span>)}
            <TextField
              InputLabelProps={{
                classes: {
                  root: classes.cssLabel,
                  focused: classes.cssFocused
                }
              }}
              size="small"
              inputProps={{ style: { fontSize: 14 } }}
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={(e) => setEmail(e.target.value)}
              // eslint-disable-next-line no-useless-escape
              {...register("email", { required: true, pattern:{ value: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,}  })}
              error={!!(errors?.email)}
            />
            {(errors?.email?.type === "required" && <span className="formError">Email is required</span>)}
            {errors?.email?.type === "pattern" && (<span className="formError">Email is invalid</span>)}
            <TextField
              InputLabelProps={{
                classes: {
                  root: classes.cssLabel,
                  focused: classes.cssFocused
                }
              }}
              size="small"
              inputProps={{ style: { fontSize: 14 } }}
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              {...register("password", { required: true,pattern:{value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()-+_]).{8,}$/}})}
              error={!!(errors?.password)}
            />
            {(errors?.password?.type === "required" && <span className="formError">Password is required</span>)}
            {errors?.password?.type === "pattern" && (<span className="formError">Password must be strong with atlest length 8</span>)}

            <TextField
              InputLabelProps={{
                classes: {
                  root: classes.cssLabel,
                  focused: classes.cssFocused
                }
              }}
              size="small"
              inputProps={{ style: { fontSize: 14 } }}
              margin="normal"
              fullWidth
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              id="confirmPassword"
              autoComplete="current-password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              {...register("confirmPassword", { required: true,validate: value => value === watch('password')})}
              error={!!(errors?.confirmPassword)}
            />
            {(errors?.confirmPassword?.type === "required" && <span className="formError">Confirm Password is required</span>)}
            {(errors?.confirmPassword?.type === 'validate' && <span className="formError">Confirm Password is mismatch</span>)}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Typography align='center' sx={{mt: 2}}>
            <Link to="/signin" style={{ fontSize: '14px',textAlign: "center" }} >
                  {"Already have an account? Sign In"}
                </Link>
            </Typography>
            <Typography align='center' sx={{mt: 2}}>
            <Link to="/account" style={{ fontSize: '14px',paddingRight: "5px",textAlign: "center" }} >
                  {" Buying for Work? Create a free business account"}
                </Link>
            </Typography>
            
               
              
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}