import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { createOrder } from "../actions/orderActions";
import { ORDER_CREATE_RESET } from "../constants/orderConstants";

export default function PlaceOrderScreen() {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  if (!cart.paymentMethod) {
    navigate("/payment");
  }

  const userCartListItem = useSelector((state) => state.userCartListItem);
  const { usercarts: usercart } = userCartListItem;

  const orderCreate = useSelector((state) => state.orderCreate);
  const { success, order } = orderCreate;
  // const toPrice = (num) => Number(num.toFixed(2)); // 5.123 => "5.12" => 5.12
  // cart.itemsPrice = toPrice(
  //   cart.cartItems.reduce((a, c) => a + c.qty * c.price, 0)
  // );
  // cart.shippingPrice = cart.itemsPrice > 100 ? toPrice(0) : toPrice(10);
  // cart.taxPrice = toPrice(0.15 * cart.itemsPrice);
  // cart.totalPrice = cart.itemsPrice + cart.shippingPrice + cart.taxPrice;
  const dispatch = useDispatch();
  const placeOrderHandler = () => {
    dispatch(createOrder({ ...cart, orderItems: usercart }));
  };
  useEffect(() => {
    if (success) {
      navigate(`/order/${order._id}`);
      dispatch({ type: ORDER_CREATE_RESET });
    }
  }, [dispatch, order, navigate, success]);
  return (
    <Box sx={{ flexGrow: 1, m: 2 }}>
      <Grid container spacing={2}>
        <Grid sm align="center">
          <Box>
            <Box
              sx={{
                p: 5,
                m: 2,
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              }}
            >
              <Typography variant="h4">Shipping</Typography>
              <Typography variant="subtitle1" sx={{ marginTop: 3,textTransform: 'capitalize' }}>
                <strong>Name:</strong> {cart.shippingAddress.fullName}
                <br />
                <strong>Address:</strong> {cart.shippingAddress.address}
                <br />
                <strong>City:</strong> {cart.shippingAddress.city}
                <br />
                <strong>PostalCode:</strong>
                {cart.shippingAddress.postalCode}
                <br />
                <strong>Country:</strong>
                {cart.shippingAddress.country}
              </Typography>
            </Box>

            <Box
              sx={{
                p: 5,
                m: 2,
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              }}
            >
              <Typography variant="h4">Payment</Typography>
              <Typography variant="subtitle1" sx={{ marginTop: 3,textTransform: 'capitalize' }}>
                <strong>Method:</strong> {cart.paymentMethod}
              </Typography>
            </Box>

            <Box
              sx={{
                p: 5,
                m: 2,
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                display: {
                  xs: "none",
                  md: "block",
                  sm: "none",
                  lg: "block",
                  xl: "block",
                },
              }}
            >
              <Typography variant="h4">Order Items</Typography>

              {usercart?.map((item) => (
                <Box
                  key={item._id}
                  sx={{
                    display: "flex",
                    flexDirection: "row",

                    justifyContent: "space-between",
                    marginTop: 2,
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{ width: 151 }}
                    src={item.image}
                    alt={item.name}
                  />

                  <Link
                    style={{ textDecoration: "none", color: "black",textTransform: 'capitalize' }}
                    to={`/product/${item.product}`}
                  >
                    {" "}
                    <Typography
                      variant="h6"
                      sx={{
                        "&:hover": {
                          color: "#ff7519",
                          textDecoration: "underline",
                          textTransform: 'capitalize'
                        },
                      }}
                    >
                      {item.name}
                    </Typography>
                  </Link>

                  <Typography variant="h6">
                    {item.qty} x ₹{item.price} = ₹{item.qty * item.price}
                  </Typography>
                </Box>
              ))}
            </Box>
            <Grid align="center">
              <Box
                sx={{
                  // p: 5,
                  // m: 2,

                  boxShadow:
                    "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                  display: {
                    xs: "block",
                    md: "none",
                    sm: "block",
                    lg: "none",
                    xl: "none",
                  },
                }}
              >
                <Typography sx={{ textAlign: "center" }} variant="h4">
                  Order Items
                </Typography>

                {usercart?.map((item) => (
                  <Box
                    key={item._id}
                    sx={{
                      display: "flex",

                      flexDirection: "column",
                      justifyContent: "space-between",

                      marginLeft: 10,
                      alignItems: "center",
                      p: 5,
                      m: 2,
                      flex: 1,
                    }}
                  >
                    <CardMedia
                      component="img"
                      sx={{ width: 151 }}
                      src={item.image}
                      alt={item.name}
                    />

                    <Link
                      style={{ textDecoration: "none", color: "black",textTransform: 'capitalize' }}
                      to={`/product/${item.product}`}
                    >
                      {" "}
                      <Typography
                        variant="subtitle1"
                        sx={{
                          "&:hover": {
                            color: "#ff7519",
                            textDecoration: "underline",
                          },
                        }}
                      >
                        {item.name}
                      </Typography>
                    </Link>

                    <Typography variant="subtitle1">
                      {item.qty} x ₹{item.price} = ₹{item.qty * item.price}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Grid>
          </Box>

          <Grid xs sm md lg xl sx={{ display: { xs: "block", sm: "none" } }}>
            <Box
              sx={{
                p: 5,
                m: 2,
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              }}
            >
              <Box>
                <Typography variant="h6">Order Summary</Typography>
              </Box>
              <Box>
                <Typography gutterBottom variant="subtitle1" component="div">
                  Shipping Items: {usercart?.reduce((a, c) => a + c.qty, 0)}
                </Typography>
              </Box>
              <Box>
                <Typography gutterBottom variant="subtitle1" component="div">
                  Shipping Price: ₹
                  {usercart?.reduce((a, c) => a + c.price * c.qty, 0)}
                </Typography>
              </Box>
              <Box>
                <Typography variant="subtitle1">
                  {/* <strong>Tax:</strong>₹{cart.taxPrice.toFixed(2)} */}
                </Typography>
              </Box>
              <Box>
                <Typography gutterBottom variant="subtitle1" component="div">
                  Order Total : ₹
                  {usercart?.reduce((a, c) => a + c.price * c.qty, 0)}
                </Typography>
              </Box>
              <Box>
                <Button
                  fullWidth
                  variant="contained"
                  onClick={placeOrderHandler}
                  disabled={usercart?.length === 0}
                  sx={{ mt: 3, mb: 2 }}
                  type="submit"
                >
                  Place Order
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
        {/* <Grid xs sm md lg xl>
            <Box
              sx={{
                p: 5,
                m: 2,
                marginTop: 2,
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              }}
            >
              <Typography variant="h4">Order Summary</Typography>

              <Typography variant="subtitle1">
                <strong>Items:</strong>${order.itemsPrice.toFixed(2)}
              </Typography>

              <Typography variant="subtitle1">
                <strong>Shipping:</strong>${order.shippingPrice.toFixed(2)}
              </Typography>

              <Typography variant="subtitle1">
                <strong>Tax:</strong>${order.taxPrice.toFixed(2)}
              </Typography>

              <Typography variant="subtitle1">
                <strong> Order Total:</strong>${order.totalPrice.toFixed(2)}
              </Typography>

              {!order.isPaid && (
                <Box sx={{ marginTop: 2 }}>
                  {!sdkReady ? (
                    <LoadingBox></LoadingBox>
                  ) : (
                    <>
                      {errorPay && (
                        <MessageBox variant="danger">{errorPay}</MessageBox>
                      )}
                      {loadingPay && <LoadingBox></LoadingBox>}

                      <PayPalButton
                        amount={order.totalPrice}
                        onSuccess={successPaymentHandler}
                      ></PayPalButton>
                    </>
                  )}
                </Box>
              )}
              {userInfo.isAdmin && order.isPaid && !order.isDelivered && (
                <Box>
                  {loadingDeliver && <LoadingBox></LoadingBox>}
                  {errorDeliver && (
                    <MessageBox variant="danger">{errorDeliver}</MessageBox>
                  )}
                  <Button
                    fullWidth
                    variant="contained"
                    onClick={deliverHandler}
                    sx={{ mt: 3, mb: 2 }}
                    type="button"
                  >
                    Delivery Order
                  </Button>
                </Box>
              )}
            </Box>
          </Grid> */}

        <Grid xs sm md lg xl sx={{ display: { xs: "none", sm: "block" } }}>
          <Box
            sx={{
              p: 5,
              m: 2,
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            }}
          >
            <Box>
              <Typography variant="h5">Order Summary</Typography>
            </Box>
            <Box>
              <Typography gutterBottom variant="subtitle1" component="div">
                Shipping Items: {usercart?.reduce((a, c) => a + c.qty, 0)}
              </Typography>
            </Box>
            <Box>
              <Typography gutterBottom variant="subtitle1" component="div">
                Shipping Price: ₹
                {usercart?.reduce((a, c) => a + c.price * c.qty, 0)}
              </Typography>
            </Box>
            <Box>
              <Typography variant="subtitle1">
                {/* <strong>Tax:</strong>₹{cart.taxPrice.toFixed(2)} */}
              </Typography>
            </Box>
            <Box>
              <Typography gutterBottom variant="subtitle1" component="div">
                Order Total : ₹
                {usercart?.reduce((a, c) => a + c.price * c.qty, 0)}
              </Typography>
            </Box>
            <Box>
              <Button
                fullWidth
                variant="contained"
                onClick={placeOrderHandler}
                disabled={usercart?.length === 0}
                sx={{ mt: 3, mb: 2 }}
                type="submit"
              >
                Place Order
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
