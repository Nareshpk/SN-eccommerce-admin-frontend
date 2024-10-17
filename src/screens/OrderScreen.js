/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Axios from "axios";
import { PayPalButton } from "react-paypal-button-v2";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import { Link, useNavigate, useParams } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import {
  deliverOrder,
  detailsOrder,
  listOrderMine,
  payOrder,
} from "../actions/orderActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

import {
  ORDER_DELIVER_RESET,
  ORDER_PAY_RESET,
} from "../constants/orderConstants";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import { StatuslistOrderMine } from "../actions/StatusAction";
import { AddressBillList } from "../actions/addressActions";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
export default function OrderScreen() {
  const navigate = useNavigate();
  const params = useParams();
  const orderid = params;
  console.log(orderid);
  const [sdkReady, setSdkReady] = useState(false);
  // const orderDetails = useSelector((state) => state.orderDetails);
  // const { order, loading, error } = orderDetails;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const orderMineList = useSelector((state) => state.orderMineList);
  const { orders } = orderMineList;
  console.log("orders", orders);
  const AddressList = useSelector((state) => state.AddressList);
  const { Adddatum } = AddressList;
  console.log("Adddatum", Adddatum);
  let orderdetails = [];
  let orderId;
  let date;
  let time;
  let delivery;
  let shipping;
  let cartitems;
  let name;
  let amount;
  let Shippingcharges;
  let paymentMode;
  let email;
  let carrier;
  let Status;
  orders
    ?.filter((item) => {
      return item._id == orderid.id;
    })
    ?.map((item) => {
      orderdetails.push(item);
      orderId = item._id;
      date = item.Dateandtime.slice(10, 20);
      time = item.Dateandtime.slice(22, 31);
      delivery = item.delivery;
      shipping = item.billing;
      cartitems = item.cartItems;
      name = item.CustomerName;
      amount = item.Amount;
      Shippingcharges = item.ShippingCharges;
      paymentMode = item.PaymentMode;
      email = item.email;
      carrier = item.carrier;
      Status = item.Status;
    });
  console.log("orderdetails", date, time, delivery, shipping);
  let DeliveryAddress = [];
  Adddatum?.filter((item) => {
    return item._id == delivery;
  })?.map((item) => {
    DeliveryAddress.push(item);
  });
  console.log("DeliveryAddress", DeliveryAddress);
  let Billingaddress = [];
  Adddatum?.filter((item) => {
    return item._id == shipping;
  })?.map((item) => {
    console.log("item", item);
    Billingaddress.push(item);
  });
  console.log("cartitems", cartitems);
  let product = [];
  let totalproduct;
  for (let i = 0; i < cartitems?.length; i++) {
    console.log("cartitemssss", cartitems[i].prodname);
    product.push(cartitems[i]);
    totalproduct = cartitems?.length;
  }

  Adddatum?.filter((item) => {
    return item.email;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listOrderMine());
    dispatch(AddressBillList());
    dispatch(StatuslistOrderMine());
  }, [dispatch]);
  return (
    <div>
      <Box sx={{ flexGrow: 1, m: 2 }}>
        <Grid container spacing={2} columns={16}>
          <Grid item xs={8}>
            <Card>
              <CardContent>
                <Typography
                  sx={{
                    fontFamily: "sans-serif",
                    color: "#0d84b7",
                  }}
                >
                  Name: {name}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "sans-serif",
                    color: "#0d84b7",
                  }}
                >
                  TotalNo of Products: {totalproduct}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "sans-serif",
                    color: "#0d84b7",
                  }}
                >
                  Total Amount: ₹{amount} (tax incl.)
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "sans-serif",
                    color: "#0d84b7",
                  }}
                >
                  Carrier Name:{carrier}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={8}>
            <Card>
              <CardContent>
                <Typography
                  sx={{
                    fontFamily: "sans-serif",
                    color: "#0d84b7",
                  }}
                >
                  OrderId: {orderId}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "sans-serif",
                    color: "#0d84b7",
                  }}
                >
                  Order Date: {date} Time: {time}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "sans-serif",
                    color: "#0d84b7",
                  }}
                >
                  Payment Mode: {paymentMode}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "sans-serif",
                    color: "#0d84b7",
                  }}
                >
                  Payment Status: {Status}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid container spacing={2} columns={16}>
          <Grid item xs={8}>
            <Item>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 250 }} aria-label='simple table'>
                  <TableHead>
                    <TableRow>
                      <TableCell
                        sx={{
                          fontFamily: "sans-serif",
                          color: "#0d84b7",
                        }}
                      >
                        {" "}
                        Billing Address
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {Billingaddress?.map(
                      (row) => (
                        console.log("row", row),
                        (
                          <TableRow
                            key={row._id}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                          >
                            <TableRow align='left'>{row.fname}</TableRow>
                            <TableRow align='left'>{row.address1}</TableRow>
                            <TableRow align='left'>{row.address2}</TableRow>
                            <TableRow align='left'>{row.cityName}</TableRow>
                            <TableRow align='left'>{row.countryName}</TableRow>
                            <TableRow align='left'>{row.zipcode}</TableRow>
                            <TableRow align='left'>{row.phone}</TableRow>
                            <TableRow align='left'>{row.email}</TableRow>
                            <TableRow align='left'>
                              {row.additionalinfo}
                            </TableRow>
                          </TableRow>
                        )
                      )
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
            </Item>
          </Grid>
          <Grid item xs={8}>
            <Item>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 250 }} aria-label='simple table'>
                  <TableHead>
                    <TableRow>
                      <TableCell
                        sx={{
                          fontFamily: "sans-serif",
                          color: "#0d84b7",
                        }}
                      >
                        Delivery Address
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {DeliveryAddress?.map(
                      (row) => (
                        console.log("row", row),
                        (
                          <TableRow key={row._id}>
                            <TableRow align='left'>{row.fname}</TableRow>
                            <TableRow align='left'>{row.address1}</TableRow>
                            <TableRow align='left'>{row.address2}</TableRow>
                            <TableRow align='left'>{row.cityName}</TableRow>
                            <TableRow align='left'>{row.countryName}</TableRow>
                            <TableRow align='left'>{row.zipcode}</TableRow>
                            <TableRow align='left'>{row.phone}</TableRow>
                            <TableRow align='left'>{row.email}</TableRow>
                            <TableRow align='left'>
                              {row.additionalinfo}
                            </TableRow>
                          </TableRow>
                        )
                      )
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
            </Item>
          </Grid>
        </Grid>
        <Grid container spacing={2} columns={16}>
          <Grid item xs={16}>
            <Item>
              {" "}
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                  <TableHead>
                    <TableRow>
                      <TableCell
                        align='left'
                        sx={{
                          fontFamily: "sans-serif",
                          color: "#0d84b7",
                        }}
                      >
                        BagItems
                      </TableCell>
                      <TableCell
                        align='left'
                        sx={{
                          fontFamily: "sans-serif",
                          color: "#0d84b7",
                        }}
                      >
                        Product Name
                      </TableCell>
                      <TableCell
                        align='left'
                        sx={{
                          fontFamily: "sans-serif",
                          color: "#0d84b7",
                        }}
                      >
                        Qty
                      </TableCell>
                      <TableCell
                        align='left'
                        sx={{
                          fontFamily: "sans-serif",
                          color: "#0d84b7",
                        }}
                      >
                        Unit Price
                      </TableCell>
                      <TableCell
                        align='left'
                        sx={{
                          fontFamily: "sans-serif",
                          color: "#0d84b7",
                        }}
                      >
                        Sub Total
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {product.map((row) => (
                      <TableRow
                        key={row._id}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell align='left'>
                          {
                            <CardMedia
                              sx={{
                                height: "50px",
                                width: "50px",
                                cursor: "pointer",
                              }}
                              // image={`/api/uploads/showsubimglatest/${row?.imageId}`}
                              // sx={{ height: "50px", width: "50px", cursor: "pointer" }}
                              image={`/api/uploads/showCatProd/${row._id}`}
                              alt='avatar'
                            />
                          }
                        </TableCell>
                        <TableCell align='left'>{row.prodname}</TableCell>
                        <TableCell align='left'>{row.quantity}</TableCell>
                        <TableCell align='left'>₹{row.taxincluded}</TableCell>
                        <TableCell align='left'>
                          ₹{row.quantity * row.taxincluded}
                        </TableCell>
                      </TableRow>
                    ))}
                    <TableRow>
                      <TableCell align='left'></TableCell>
                      <TableCell align='left'></TableCell>
                      <TableCell align='left'></TableCell>
                      <TableCell align='left'>
                        <Typography
                          sx={{
                            fontsize: 16,
                            fontFamily: "sans-serif",
                            color: "#0d84b7",
                          }}
                        >
                          Shippingcharges:
                        </Typography>
                      </TableCell>
                      <TableCell align='left'>
                        {" "}
                        ₹{parseInt(Shippingcharges).toFixed(2)}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align='left'></TableCell>
                      <TableCell align='left'></TableCell>
                      <TableCell align='left'></TableCell>
                      <TableCell align='left'>
                        <Typography
                          sx={{
                            fontsize: 16,
                            fontFamily: "sans-serif",
                            color: "#0d84b7",
                          }}
                        >
                          Total Amount:
                        </Typography>
                      </TableCell>
                      <TableCell align='left'>
                        {" "}
                        ₹{parseInt(amount).toFixed(2)}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
