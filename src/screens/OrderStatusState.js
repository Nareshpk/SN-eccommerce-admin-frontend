/* eslint-disable no-unused-vars */
import React from "react";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Typography } from "../../node_modules/@material-ui/core/index";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Divider from "@mui/material/Divider";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { StatuslistOrderMine, orderStatus } from "../actions/StatusAction";
import { useNavigate } from "../../node_modules/react-router-dom/dist/index";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
export default function OrderStatusState() {
  const statuslist = useSelector((state) => state.statuslist);
  const { statusdatum } = statuslist;
  console.log("statusdatum", statusdatum);
  const Item = styled(Paper)(({ theme }) => ({
    // backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "left",
    // color: theme.palette.text.secondary,
  }));
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handlestatus = (e) => {
    console.log("e", e);
    dispatch(
      orderStatus({
        Status: e.status,
      })
    );
    window.alert("Status saved");
    navigate("/orderstatus");
    event.target.reset();
  };

  useEffect(() => {
    dispatch(StatuslistOrderMine());
  }, [dispatch]);
  return (
    <div>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize='small' />}
        aria-label='breadcrumb'
      >
        <Link
          to='/'
          style={{
            color: "rgba(0, 0, 0, 0.6)",
            fontSize: "13px",
          }}
        >
          <Typography sx={{ fontSize: 13 }}>Home</Typography>
        </Link>
        <Link
          to='/orderstatus'
          style={{ color: "rgba(0, 0, 0, 0.6)", fontSize: "13px" }}
        >
          <Typography sx={{ fontSize: 13 }}>Status</Typography>
        </Link>

        <>
          <Typography sx={{ fontSize: 13 }}>Add Status</Typography>
        </>
      </Breadcrumbs>

      <Divider
        fullWidth
        sx={{ backgroundColor: "#000000", mt: 3 }}
        showlabels='true'
      />
      <Box
        sx={{ flexGrow: 1, mt: 3 }}
        component='form'
        onSubmit={handleSubmit(handlestatus)}
      >
        <Grid container spacing={2}>
          <Grid item xs={6} md={12}>
            <Item>
              <Card variant='outlined' sx={{ padding: 5 }}>
                <Box sx={{ display: "flex" }}>
                  <Grid item md={2}>
                    <Item>
                      {" "}
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <label
                          style={{
                            fontFamily: "sans-serif",
                            color: "#0d84b7",
                          }}
                        >
                          Add Status:
                        </label>
                      </Box>
                    </Item>
                  </Grid>
                  <Grid item md={8} sx={{ ml: 5 }}>
                    <Box sx={{ width: 500 }}>
                      <TextField
                        sx={{ width: 500 }}
                        size='small'
                        // id='outlined-basic'
                        variant='outlined'
                        {...register("status", { required: true })}
                        inputProps={{ style: { fontSize: 13 } }}
                      />
                    </Box>
                  </Grid>
                  <Grid item md={2} sx={{ ml: 5 }}>
                    <Box>
                      <Button variant='contained' type='submit'>
                        Create
                      </Button>
                    </Box>
                  </Grid>
                </Box>
              </Card>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
