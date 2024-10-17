import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { accountin } from "../actions/userAction";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useForm } from "react-hook-form";
import Tooltip from "@mui/material/Tooltip";
export default function AccountScreen() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  // const [email, setEmail] = useState("");

  // const [password, setPassword] = useState("");

  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get("redirect");
  const redirect = redirectInUrl ? redirectInUrl : "/accountcreation";

  const userAccount = useSelector((state) => state.userAccount);
  const { userInfo, loading, error } = userAccount;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    dispatch(accountin(e.email, e.password));
  };

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  const longText = `To ensure that identity of yours and
  other business remain secure,We always confirm new business registeration.`;

  return (
    <>
      <Box sx={{ flexGrow: 1, mt: 10 }}>
        <Grid container spacing={2}>
          <Grid item xs={2}></Grid>
          <Grid
            item
            xs={4}
            sx={{
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              border: "1px solid black",
            }}
            direction='row'
          >
            <Box sx={{ borer: "1px solid black" }}>
              <Box
                component='form'
                onSubmit={handleSubmit(submitHandler)}
                sx={{ mt: 1, p: 2, m: 2 }}
              >
                <Typography variant='h5' gutterBottom>
                  Let us create your free Amazon Business account
                </Typography>
                {loading && <LoadingBox></LoadingBox>}
                {error && <MessageBox variant='danger'>{error}</MessageBox>}
                <TextField
                  inputProps={{ style: { fontSize: 14 } }}
                  size='small'
                  margin='normal'
                  fullWidth
                  id='email'
                  label='Email'
                  name='email'
                  autoComplete='email'
                  autoFocus
                  {...register("email", { required: true })}
                  error={!!errors?.email}
                />
                {errors.email && (
                  <span className='formError'>Email is required</span>
                )}

                <TextField
                  inputProps={{ style: { fontSize: 14 } }}
                  size='small'
                  margin='normal'
                  fullWidth
                  id='password'
                  label='Password'
                  name='password'
                  autoComplete='password'
                  autoFocus
                  {...register("password", { required: true })}
                  error={!!errors?.password}
                />
                {errors.password && (
                  <span className='formError'>Password is required</span>
                )}

                <Button
                  type='submit'
                  fullWidth
                  variant='contained'
                  sx={{ mt: 3, mb: 2 }}
                >
                  Get Started
                </Button>

                <Typography variant='h6' gutterBottom>
                  Make sure that you have information about your organisation to
                  help us verify your business account faster.
                </Typography>

                <Tooltip title={longText}>
                  <Typography variant='h6' gutterBottom sx={{ color: "blue" }}>
                    Why is verification Needed?
                  </Typography>
                </Tooltip>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={4}
            sx={{
              backgroundColor: "#82B6D9",
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              border: "1px solid black",
            }}
            direction='row'
          >
            <Typography variant='h6' gutterBottom>
              Reshape buying for your organisation
            </Typography>
            <br></br>
            <Box style={{ display: "flex", p: 2, m: 2 }}>
              <img
                src='https://m.media-amazon.com/images/G/31/AmazonBusiness/Registration/desktop/quantity-discounts-icon._CB612297378_.svg'
                alt='GST Invoice &amp; Bulk Discounts'
                style={{
                  maxWidth: "45px",
                  height: "45px",
                  padding: 5,
                  margin: 5,
                }}
              ></img>
              <div>
                <p style={{ margin: "0px" }}> GST Invoice & Bulk Discounts</p>

                <span style={{ fontWeight: "300" }}>
                  Save up to 28% more with GST input credit and avail discounts
                  on multi-unit purchases.
                </span>
              </div>
            </Box>
            <br></br>
            <Box style={{ display: "flex" }}>
              <img
                src='https://m.media-amazon.com/images/G/31/AmazonBusiness/Registration/desktop/analytics-icon._CB612297378_.svg'
                alt='Business Analytics'
                style={{
                  maxWidth: "45px",
                  height: "45px",
                  padding: 5,
                  margin: 5,
                }}
              ></img>
              <div>
                <p style={{ margin: "0px" }}>Business Analytics</p>
                <p style={{ fontWeight: "300" }}>
                  Track and monitor spending by your organisation with dynamic
                  charts and data tables.
                </p>
              </div>
            </Box>

            <br></br>
            <Box style={{ display: "flex" }}>
              <img
                src='https://m.media-amazon.com/images/G/31/AmazonBusiness/Registration/desktop/add-users-icon._CB612297378_.svg'
                alt='Secure Your Account'
                style={{
                  maxWidth: "45px",
                  height: "45px",
                  padding: 5,
                  margin: 5,
                }}
              ></img>
              <div>
                <p style={{ margin: "0px" }}> Secure Your Account</p>
                <p style={{ fontWeight: "300" }}>
                  Add more colleagues to your account for making business
                  purchases instead of sharing your login credentials.
                </p>
              </div>
            </Box>
            <br></br>
            <br></br>
            <Box>
              <img
                style={{
                  fontWeight: "300",
                  height: "92px",
                  width: "50%",
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                  borderRadius: 5,
                }}
                src='/image/ama5.jpg'
                alt=''
              ></img>
            </Box>
            <br></br>
            <Typography
              variant='h6'
              gutterBottom
              sx={{ textDecoration: "underline", textAlign: "center" }}
            >
              Learn more about amazon Business
            </Typography>
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>
      </Box>
    </>
  );
}
