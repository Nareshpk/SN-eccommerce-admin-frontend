import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailsUser, updateUserProfile } from '../actions/userAction';
import MessageBox from '../components/MessageBox';
import CircularProgress from '@mui/material/CircularProgress';
import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function ProfileScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [sellerName, setSellerName] = useState('');
  const [sellerLogo1, setSellerLogo1] = useState('');
  
  const [sellerLogo2, setSellerLogo2] = useState('');
  const [sellerLogo3, setSellerLogo3] = useState('');
  const [sellerLogo4, setSellerLogo4] = useState('');
  const [sellerDescription, setSellerDescription] = useState('');

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;
  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const {
    // eslint-disable-next-line no-unused-vars
    success: successUpdate,
    // eslint-disable-next-line no-unused-vars
    error: errorUpdate,
    // eslint-disable-next-line no-unused-vars
    loading: loadingUpdate,
  } = userUpdateProfile;

  const dispatch = useDispatch();
  useEffect(() => {
    if (!user) {
      dispatch({ type: USER_UPDATE_PROFILE_RESET });
      dispatch(detailsUser(userInfo._id));
    } else {
      setName(user.name);
      setEmail(user.email);
      if (user.seller) {
        setSellerName(user.seller.name);
        setSellerLogo1(user.seller.logo1);
        setSellerLogo2(user.seller.logo2);
        setSellerLogo3(user.seller.logo3);
        setSellerLogo4(user.seller.logo4);
        setSellerDescription(user.seller.description);
      }
    }
  }, [dispatch, userInfo._id, user]);
  const submitHandler = (e) => {
    e.preventDefault();
    // dispatch update profile
    if (password !== confirmPassword) {
      alert('Password and Confirm Password Are Not Matched');
    } else {
      dispatch(
        updateUserProfile({
          userId: user._id,
          name,
          email,
          password,
          sellerName,
          sellerLogo1,
          sellerLogo2,
          sellerLogo3,
          sellerLogo4,
        
          sellerDescription,
        })
      );
    }
  };
  let theme = createTheme();
  return (
    // <div>
    //   <form className="form" onSubmit={submitHandler}>
    //     <div>
    //       <h1>User Profile</h1>
    //     </div>
    //     {loading ? (
    //       <CircularProgress></CircularProgress>
    //     ) : error ? (
    //       <MessageBox variant="danger">{error}</MessageBox>
    //     ) : (
    //       <>
    //           {loadingUpdate && <LoadingBox></LoadingBox>}
    //         {errorUpdate && (
    //           <MessageBox variant="danger">{errorUpdate}</MessageBox>
    //         )}
    //         {successUpdate && (
    //           <MessageBox variant="success">
    //             Profile Updated Successfully
    //           </MessageBox>
    //         )}
    //         <div>
    //           <label htmlFor="name">Name</label>
    //           <input
    //             id="name"
    //             type="text"
    //             placeholder="Enter name"
    //             value={name}
    //             onChange={(e) => setName(e.target.value)}
    //           ></input>
    //         </div>
    //         <div>
    //           <label htmlFor="email">Email</label>
    //           <input
    //             id="email"
    //             type="email"
    //             placeholder="Enter email"
    //             value={email}
    //             onChange={(e) => setEmail(e.target.value)}
    //           ></input>
    //         </div>
    //         <div>
    //           <label htmlFor="password">Password</label>
    //           <input
    //             id="password"
    //             type="password"
    //             placeholder="Enter password"
    //             onChange={(e) => setPassword(e.target.value)}
    //           ></input>
    //         </div>
    //         <div>
    //           <label htmlFor="confirmPassword">confirm Password</label>
    //           <input
    //             id="confirmPassword"
    //             type="password"
    //             placeholder="Enter confirm password"
    //             onChange={(e) => setConfirmPassword(e.target.value)}
    //           ></input>
    //         </div>
    //         {user.isSeller && (
    //           <>
    //             <h2>Seller</h2>
    //             <div>
    //               <label htmlFor="sellerName">Seller Name</label>
    //               <input
    //                 id="sellerName"
    //                 type="text"
    //                 placeholder="Enter Seller Name"
    //                 value={sellerName}
    //                 onChange={(e) => setSellerName(e.target.value)}
    //               ></input>
    //             </div>
    //             <div>
    //               <label htmlFor="sellerLogo">Seller Logo1</label>
    //               <input
    //                 id="sellerLogo1"
    //                 type="text"
    //                 placeholder="Enter Seller Logo"
    //                 value={sellerLogo1}
    //                 onChange={(e) => setSellerLogo1(e.target.value)}
    //               ></input>
    //             </div>
    //             <div>
    //               <label htmlFor="sellerLogo">Seller logo2</label>
    //               <input
    //                 id="sellerLogo2"
    //                 type="text"
    //                 placeholder="Enter Seller Logo"
    //                 value={sellerLogo2}
    //                 onChange={(e) => setSellerLogo2(e.target.value)}
    //               ></input>
    //             </div>
    //             <div>
    //               <label htmlFor="sellerLogo">sellerLogo3</label>
    //               <input
    //                 id="sellerLogo2"
    //                 type="text"
    //                 placeholder="Enter Seller Logo"
    //                 value={sellerLogo3}
    //                 onChange={(e) => setSellerLogo3(e.target.value)}
    //               ></input>
    //             </div>
    //             <div>
    //               <label htmlFor="sellerLogo">Seller logo4</label>
    //               <input
    //                 id="sellerLogo2"
    //                 type="text"
    //                 placeholder="Enter Seller Logo"
    //                 value={sellerLogo4}
    //                 onChange={(e) => setSellerLogo4(e.target.value)}
    //               ></input>
    //             </div>
    //             <div>
    //               <label htmlFor="sellerDescription">Seller Description</label>
    //               <input
    //                 id="sellerDescription"
    //                 type="text"
    //                 placeholder="Enter Seller Description"
    //                 value={sellerDescription}
    //                 onChange={(e) => setSellerDescription(e.target.value)}
    //               ></input>
    //             </div>
    //           </>
    //         )}
    //         <div>
    //           <label />
    //           <button className="primary" type="submit">
    //             Update
    //           </button>
    //         </div>
    //       </>
    //     )}
    //   </form>
    // </div>
    <ThemeProvider theme={theme}>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          border: '1px solid #ddd',
          padding:'0px 30px 30px 30px',
          borderRadius:'5px',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        </Avatar>
        <Typography component="h1" variant="h5">
         User Prfile
        </Typography>
         {loading && <CircularProgress></CircularProgress>}
          {error && <MessageBox variant="danger">{error}</MessageBox>}
        <Box component="form"  onSubmit={submitHandler}  sx={{ mt: 1 }}>
        <TextField
            margin="normal"
            size="small"
            required
            fullWidth
            id="name"
            label="Enter Name"
            name="name"
            autoComplete="name"
            autoFocus
            inputProps={{style: {fontSize: 14}}}
            value={name}
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
            inputProps={{style: {fontSize: 14}}}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
          inputProps={{style: {fontSize: 14}}}
            margin="normal"
            size="small"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
            <TextField
          inputProps={{style: {fontSize: 14}}}
            margin="normal"
            size="small"
            required
            fullWidth
            name="confirmPassword"
            label="confirmPassword"
            type="password"
            id="confirmPassword"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </Box>
        {loading && <CircularProgress></CircularProgress>}
           {error && <MessageBox variant="danger">{error}</MessageBox>}
     
         
        <Box component="form"    sx={{ mt: 1 }}>
          <Typography component="h1" variant="h5">
         Seller
         </Typography>
        <TextField
            margin="normal"
            size="small"
            required
            fullWidth
            id="outlined-error-helper-text"
            label="Enter Seller Name"
            name="name"
            type="text"
            autoComplete="name"
            autoFocus
            value={sellerName}
            inputProps={{style: {fontSize: 14}}}
            onChange={(e) => setSellerName(e.target.value)}
          />
          <TextField
            margin="normal"
            size="small"
            required
            fullWidth
            id="sellerLogo1"
            label="Seller logo1"
            value={sellerLogo1}
            autoFocus
            inputProps={{style: {fontSize: 14}}}
            onChange={(e) => setSellerLogo1(e.target.value)}
          />
          <TextField
          inputProps={{style: {fontSize: 14}}}
            margin="normal"
            size="small"
            required
            fullWidth
            id="sellerLogo2"
            name="Enter Seller Logo"
            label="Seller logo2"
            type="text"
            value={sellerLogo2}
            onChange={(e) => setSellerLogo2(e.target.value)}
          />
            <TextField
          inputProps={{style: {fontSize: 14}}}
            margin="normal"
            size="small"
            id="sellerLogo2"
            required
            fullWidth
            name="Enter Seller Logo"
            label="Seller logo3"
            type="text"
            value={sellerLogo3}
            onChange={(e) => setSellerLogo3(e.target.value)}
          />
          <TextField
          inputProps={{style: {fontSize: 14}}}
            margin="normal"
            size="small"
            id="sellerLogo2"
            required
            fullWidth
            name="Enter Seller Logo"
            label="Seller logo4"
            type="text"
            value={sellerLogo4}
            onChange={(e) => setSellerLogo4(e.target.value)}
          />
          <TextField
          inputProps={{style: {fontSize: 14}}}
            margin="normal"
            size="small"
            id="sellerLogo2"
            required
            fullWidth
            name="Enter Seller Logo"
            label="Seller Description"
            type="text"
            value={sellerDescription}
            onChange={(e) => setSellerDescription(e.target.value)}
          />
          
        </Box>
        <Button
             type="submit"
             fullWidth
             variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
           Update
          </Button>
      </Box>
    </Container>
  </ThemeProvider>
  );
}