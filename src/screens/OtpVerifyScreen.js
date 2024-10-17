import { useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useForm } from "react-hook-form";
import Avatar from "@mui/material/Avatar";
import { useDispatch, useSelector } from "react-redux";
import { otpList } from "../actions/otpAction";
import { useNavigate } from "react-router-dom";

const OtpVerifyScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const otpLists = useSelector((state) => state.otpLists);
  const { allotpList } = otpLists;
  // console.log("allotpList", allotpList[-1]);

  const all = allotpList ? allotpList[allotpList?.length - 1]: undefined;
  // const dispatch = useDispatch();

  // const [otp, setOtp] = useState("");
  // console.log("otp", otp);

  const submitHandler = (e) => {


    if(e.otp === all?.otp) {
      navigate("/");
    }
    else {
      window.confirm("Please Enter Your Correct OTP!!");
    }
    
  };

  useEffect(() => {
    dispatch(otpList({}));
  }, [dispatch]);



  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
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
          <Typography component="h1" variant="h5">
            Login With OTP
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit(submitHandler)}
            sx={{ mt: 1 }}
          >
            <TextField
              inputProps={{ style: { fontSize: 14 } }}
              size="small"
              margin="normal"
              fullWidth
              id="otp"
              label="Enter your OTP"
              name="otp"
              autoComplete="otp"
              autoFocus
              // onChange={(e) => setOtp(e.target.value)}
              {...register("otp", { required: true })}
              error={!!errors?.otp}
            />
            {errors.otp && (
              <span className="formError">Otp is required</span>
            )}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}

export default OtpVerifyScreen
