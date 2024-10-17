import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { detailsUser, updateUser } from "../actions/userAction";
import MessageBox from "../components/MessageBox";
import { USER_UPDATE_RESET } from "../constants/userConstants";
import CircularProgress from "@mui/material/CircularProgress";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export default function UserEditScreen() {
  const navigate = useNavigate();
  const params = useParams();
  const { id: userId } = params;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSeller, setIsSeller] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const userUpdate = useSelector((state) => state.userUpdate);
  const {
    // eslint-disable-next-line no-unused-vars
    loading: loadingUpdate,
    // eslint-disable-next-line no-unused-vars
    error: errorUpdate,
    success: successUpdate,
  } = userUpdate;

  const dispatch = useDispatch();
  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: USER_UPDATE_RESET });
      navigate("/userlist");
    }
    if (!user) {
      dispatch(detailsUser(userId));
    } else {
      setName(user.name);
      setEmail(user.email);
      setIsSeller(user.isSeller);
      setIsAdmin(user.isAdmin);
    }
  }, [dispatch, navigate, successUpdate, user, userId]);

  const submitHandler = (e) => {
    e.preventDefault();
    // dispatch update user
    dispatch(updateUser({ _id: userId, name, email, isSeller, isAdmin }));
  };
  let theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
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
            Edit User {name}
          </Typography>
          {loading && <CircularProgress></CircularProgress>}
          {error && <MessageBox variant="danger">{error}</MessageBox>}
          <Box component="form" onSubmit={submitHandler} sx={{ mt: 1 }}>
            <TextField
              inputProps={{ style: { fontSize: 14 } }}
              margin="normal"
              size="small"
              required
              fullWidth
              id="name"
              name="name"
              label="name"
              type="text"
              value={name}
              autoComplete="current-password"
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              margin="normal"
              size="small"
              required
              fullWidth
              id="outlined-error-helper-text"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={email}
              autoFocus
              inputProps={{ style: { fontSize: 14 } }}
              onChange={(e) => setEmail(e.target.value)}
            />

            <FormControlLabel
              control={
                <Checkbox
                  id="isSeller"
                  value="remember"
                  checked={isSeller}
                  onChange={(e) => setIsSeller(e.target.checked)}
                  color="primary"
                />
              }
              label="Is Seller"
            />
            <FormControlLabel
              control={
                <Checkbox
                  id="isAdmin"
                  value="remember"
                  checked={isAdmin}
                  onChange={(e) => setIsAdmin(e.target.checked)}
                  color="primary"
                />
              }
              label="Is Admin"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              update
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
