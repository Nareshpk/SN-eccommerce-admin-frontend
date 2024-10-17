import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import Avatar from "@mui/material/Avatar";
import { useNavigate } from "react-router-dom";
import { saveOtp } from "../actions/otpAction";

const OtpScreen = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  console.log("email", email);

  const submitHandler = (e) => {
    // setEmail(e.email);
    dispatch(
      saveOtp({
        email: e.email,
      })
    );
    navigate("/otpVerify");
  };

  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 5,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            border: "1px solid #ddd",
            padding: "0px 30px 30px 30px",
            borderRadius: "5px",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
          <Typography component='h1' variant='h5'>
            Login With OTP
          </Typography>

          <Box
            component='form'
            onSubmit={handleSubmit(submitHandler)}
            sx={{ mt: 1 }}
          >
            <TextField
              inputProps={{ style: { fontSize: 14 } }}
              size='small'
              margin='normal'
              fullWidth
              id='email'
              label='Enter your Email'
              name='email'
              autoComplete='email'
              autoFocus
              onChange={(e) => setEmail(e.target.value)}
              {...register("email", { required: true })}
              error={!!errors?.email}
            />
            {errors.email && (
              <span className='formError'>Email is required</span>
            )}

            <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
            >
              Send OTP
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default OtpScreen;
