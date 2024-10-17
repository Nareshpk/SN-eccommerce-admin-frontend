import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
// import { useNavigate } from '../../node_modules/react-router-dom/dist/index';
// import { useNavigate } from 'react-router-dom';
import data from "../data";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function AccountCreation() {
  const navigate = useNavigate();
  const userAccount = useSelector((state) => state.userAccountCreation);
  const { userInfo } = userAccount;

  useEffect(() => {
    if (userInfo) {
      navigate("");
    }
  }, [userInfo, navigate]);
  return (
    <Box
      sx={{
        mt: 10,
        textAlign: "center",
        boxShadow:
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        p: 5,
      }}
    >
      <Typography variant='h5'>
        This Email is already being used for an Amazon account.Would you like to
        convert it to an Amazon Business account?
      </Typography>
      <br></br>
      <Typography>
        {" "}
        If you<strong> choose to convert the account</strong> for
        <span>
          {" "}
          &lt;{localStorage.getItem("Email", JSON.stringify(data))}&gt;{" "}
        </span>
        to an amazon business account:
      </Typography>
      <br></br>
      <Typography variant='h5'>
        {" "}
        Your orders and payment methods will carry over and can be seen by
        people you add to your account.
      </Typography>
      <br></br>
      <Box>
        <Button variant='contained' onClick={() => navigate("/account")}>
          Start here
        </Button>
      </Box>
    </Box>
  );
}
