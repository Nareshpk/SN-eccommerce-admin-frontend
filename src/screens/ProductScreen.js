import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  createReview, listProducts
} from "../actions/productAction";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { PRODUCT_REVIEW_CREATE_RESET } from "../constants/productConstants";
// import ModalImage from "react-modal-image";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Rating from "@mui/material/Rating";
// import Reviews from "@mui/material/Reviews";
import CardMedia from "@mui/material/CardMedia";
import Select from "@mui/material/Select";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Typography from "@mui/material/Typography";
import ReactImageMagnify from "@vorld/react-image-magnify";
import Axios from "axios";
import {
  CircularProgress,
  DialogContent
} from "../../node_modules/@material-ui/core/index";
// import { CenterFocusStrong } from "../../node_modules/@mui/icons-material/index";
import Carousel from "react-elastic-carousel";
import { catProdIndividualId } from "../actions/catProductAction";
import Product from "../components/Product";
// import RemoveCircleIcon from '@mui/icons-material/RemoveCircle'

export default function ProductScreen() {
  const productList = useSelector((state) => state.productList);
  const { products } = productList;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const { id: productId } = params;

  const catalogProd = useSelector((state) => state.catalogProd);
  const { catProducts } = catalogProd;

  console.log("catProducts", catProducts);


  const catProdDetail = useSelector((state) => state.catProdDetail);
  const { loading, error, catalogIndProd } = catProdDetail;

  // console.log("product", catalogIndProd);

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const productReviewCreate = useSelector((state) => state.productReviewCreate);
  const {
    loading: loadingReviewCreate,
    error: errorReviewCreate,
    success: successReviewCreate,
  } = productReviewCreate;

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [images, setImage] = useState();
  const [subimg, setSubImage] = useState();
  const [categoryName, setCategoryName] = useState();
  const [categorygroup, setCategorygroup] = useState();

  const handleChangeimage = (e) => {
    console.log('e--------------->', e);
    setImage(e.target.src);
  };



  useEffect(() => {
    dispatch(catProdIndividualId(productId));
    const fetchBusinesses = async () => {
      const img = await Axios.get(`/api/uploads/show/${productId}`, {
        responseType: "blob",
      });
      setImage(URL.createObjectURL(img.data));
    };

    const fetchBusines = async () => {
      const subimg = await Axios.get(`/api/uploads/showsub/${productId}`, {});
      setSubImage(subimg.data);
    };

    fetchBusines();
    fetchBusinesses();
    const fetchCategory = async () => {
      const categoryName = await Axios.get(`/api/categoryMain/categoryName/${productId}`);
      setCategoryName(categoryName.data);
    };
    const fetchCategoryGroup = async () => {
      const categorygroup = await Axios.get(`/api/subCategory/categorygroup/${productId}`);
      setCategorygroup(categorygroup.data);
    };
    fetchCategory();
    fetchCategoryGroup();
    if (successReviewCreate) {
      window.alert("Review Submitted Successfully");
      setRating("");
      setComment("");
      dispatch({ type: PRODUCT_REVIEW_CREATE_RESET });
    }
    dispatch(listProducts({}));
  }, [dispatch, productId, successReviewCreate]);

  const addToCartHandler = () => {
    navigate(`/cart/${productId}`);
  };

  const addToHandler = () => {
    navigate(`/signin`);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (comment && rating) {
      dispatch(
        createReview(productId, { rating, comment, name: userInfo.name })
      );
    } else {
      alert("Please enter comment and rating");
    }
  };

  const handleChange = (event) => {
    setRating(event.target.value);
  };

  const breakPoints = [
    { width: 400, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 600, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 900, itemsToShow: 5 },
    { width: 1200, itemsToShow: 5 },
    { width: 1500, itemsToShow: 7 },
    { width: 2000, itemsToShow: 9 },
  ];

  return (
    <Box sx={{ flexGrow: 1, marginTop: 3 }}>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <Grid container spacing={2}>
          {/* <Grid xs sx={{margin:10}}> */}

          <Box sx={{ mt: 4, display: { xs: "none", sm: "none", md: "none" } }}>
            <CardMedia
              sx={{
                border: "2px solid gray",
                cursor: "pointer",
                transition: "transform .5s ease",
                "&:hover": {
                  transform: "scale(1.1)",
                },
                margin: 1,
                width: 120,
                height: 150,
                justifycontent: "space-between",
              }}
              component="img"
              // height="200"
              image={`/api/uploads/show/${productId}`}
              alt={"subimgnew.filename"}
              onMouseOver={handleChangeimage}
            />
            {subimg?.map((subimgnew, index) => (
              <Box key={index}>
                <CardMedia
                  sx={{
                    border: "2px solid gray",
                    cursor: "pointer",
                    transition: "transform .5s ease",
                    "&:hover": {
                      transform: "scale(1.1)",
                    },
                    margin: 1,
                    width: 120,
                    height: 150,
                    justifycontent: "space-between",
                  }}
                  component="img"
                  // height="200"
                  image={`/api/uploads/showsubimgnew/${subimgnew.filename}`}
                  alt={"subimgnew.filename"}
                  onMouseOver={handleChangeimage}
                />
              </Box>
            ))}
          </Box>
          {/* </Grid> */}
          <Grid
            item
            sx={{
              zIndex: 1,
              display: {
                xs: "none",
                md: "block",
                sm: "block",
                lg: "block",
                xl: "block",
              },
            }}
          >
            <Box
              sx={{
                borderRadius: 0,
                width: "auto",
                m: 3,
                // boxShadow:
                //   "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              }}
            >
              <ReactImageMagnify
                {...{
                  smallImage: {
                    className: "large",
                    src: `${images}`,
                    width: 380,
                    height: 490,
                  },
                  largeImage: {
                    className: "small",
                    src: `${images}`,
                    width: 600,
                    height: 600,
                  },
                }}
              />
              {/* <Box >
                  <CardMedia
                    sx={{
                      transition: "transform .5s ease",
                      "&:hover": {
                        transform: "scale(1.1)",
                      },
                      width: 120,
                      height: 150,
                      justifycontent:'space-between'
                    }}
                    component="img"
                    // height="200"
                    image={images}
                   
                  />
                 
                </Box> */}
            </Box>
            <Box
              sx={{
                padding: 0,
                margin: 0,
                mt: 10,
                width: "auto",
                listStyle: "none",
                display: "flex",
                flexFlow: "wrap row",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <CardMedia
                sx={{
                  border: "2px solid gray",
                  cursor: "pointer",
                  transition: "transform .5s ease",
                  "&:hover": {
                    transform: "scale(1.1)",
                  },
                  margin: 1,
                  width: { xs: 60, sm: 120 },
                  height: { xs: 90, sm: 150 },
                  justifycontent: "space-between",
                }}
                component="img"
                // height="200"
                image={`/api/uploads/show/${productId}`}
                alt={"subimgnew.filename"}
                onMouseOver={handleChangeimage}
              />
              {subimg?.map((subimgnew, index) => (
                <Box key={index}>
                  <CardMedia
                    sx={{
                      border: "2px solid gray",
                      cursor: "pointer",
                      transition: "transform .5s ease",
                      "&:hover": {
                        transform: "scale(1.1)",
                      },
                      margin: 1,

                      width: { xs: 60, sm: 120 },
                      height: { xs: 90, sm: 150 },
                      justifycontent: "space-between",
                    }}
                    component="img"
                    // height="200"
                    image={`/api/uploads/showsubimgnew/${subimgnew.filename}`}
                    alt={"subimgnew.filename"}
                    onMouseOver={handleChangeimage}
                  />
                </Box>
              ))}
            </Box>
          </Grid>
          <Grid
            sx={{ mt: 4, display: { xs: "block", sm: "none", md: "none" } }}
          >
            <Box
              sx={{
                padding: 0,
                margin: 0,
                width: "auto",
                listStyle: "none",
                display: "flex",
                flexFlow: "wrap row",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <CardMedia
                sx={{
                  border: "2px solid gray",
                  cursor: "pointer",
                  transition: "transform .5s ease",
                  "&:hover": {
                    transform: "scale(1.1)",
                  },
                  margin: 1,
                  width: { xs: 60, sm: 120 },
                  height: { xs: 90, sm: 150 },
                  justifycontent: "space-between",
                }}
                component="img"
                // height="200"
                image={`/api/uploads/show/${productId}`}
                alt={"subimgnew.filename"}
                onMouseOver={handleChangeimage}
              />
              {subimg?.map((subimgnew, index) => (
                <Box key={index}>
                  <CardMedia
                    sx={{
                      border: "2px solid gray",
                      cursor: "pointer",
                      transition: "transform .5s ease",
                      "&:hover": {
                        transform: "scale(1.1)",
                      },
                      margin: 1,

                      width: { xs: 60, sm: 120 },
                      height: { xs: 90, sm: 150 },
                      justifycontent: "space-between",
                    }}
                    component="img"
                    // height="200"
                    image={`/api/uploads/showsubimgnew/${subimgnew.filename}`}
                    alt={"subimgnew.filename"}
                    onMouseOver={handleChangeimage}
                  />
                </Box>
              ))}
            </Box>
          </Grid>
          <Grid
            item
            sx={{
              display: {
                xs: "block",
                md: "none",
                sm: "none",
                lg: "none",
                xl: "none",
              },
            }}
          >
            <Box>
              <CardMedia
                sx={{
                  borderRadius: 0,
                  width: "100%",
                  marginTop: 3,
                  height: "100%",
                  // boxShadow:
                  //   "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                }}
                component="img"
                src={images}
              ></CardMedia>
            </Box>
          </Grid>

          <Grid item xs sx={{ zIndex: 0 }}>
            <Grid>
              <Box>
                <Card
                  style={{
                    padding: 30,
                    borderRadius: 0,
                    margin: 20,
                    // boxShadow:
                    //   "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                  }}
                >
                  <Box>
                    <Typography
                      variant="h5"
                      gutterBottom
                      style={{ color: "#A02020", textTransform: "capitalize" }}
                    >
                      {catalogIndProd.prodname}
                    </Typography>

                    <Typography variant="body1" gutterBottom>
                      <Rating>
                        Value={catalogIndProd.rating}
                        {/* numReviews={product.numReviews} */}
                      </Rating>
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      {catalogIndProd.numReviews + "reviews"}
                    </Typography>

                    <Typography
                      variant="body1"
                      style={{ color: "#A02020", textTransform: "capitalize" }}
                      gutterBottom
                    >
                      <strong>Price :</strong> ₹{catalogIndProd.price}
                    </Typography>
                    <Typography
                      variant="body1"
                      style={{ color: "#A02020", textTransform: "capitalize" }}
                      gutterBottom
                    >
                      <strong>Brand :</strong> {catalogIndProd.brand}
                    </Typography>
                    {categoryName?.map((categoryname) => (
                      <>
                        <Typography
                          variant="body1"
                          style={{
                            color: "#A02020",
                            textTransform: "capitalize",
                          }}
                          gutterBottom
                        >
                          <strong>Category :</strong> {categoryname.categoryname}
                        </Typography>
                      </>
                    ))}

                    <Typography
                      variant="body1"
                      style={{ color: "#A02020", textTransform: "capitalize" }}
                      gutterBottom
                    >
                      <strong>Description :</strong> {catalogIndProd.description}
                    </Typography>
                    {categorygroup?.map((categroup) => (
                      <>
                        <Typography
                          variant="body1"
                          style={{ color: "#A02020", textTransform: "capitalize" }}
                          gutterBottom
                        >
                          <strong> Category Group :</strong> {categroup.subcategorygroup}
                        </Typography>
                      </>
                    ))}

                    <Typography
                      variant="body1"
                      style={{ color: "#A02020", textTransform: "capitalize" }}
                      gutterBottom
                    >
                      <strong>Category Type :</strong> {catalogIndProd.categorytype}
                    </Typography>
                  </Box>
                </Card>
              </Box>
            </Grid>
            <Grid>
              <Box>
                <Card
                  style={{
                    padding: 30,
                    borderRadius: 0,
                    margin: 20,
                    // boxShadow:
                    //   "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                  }}
                >
                  <Box>
                    <Typography
                      variant="body1"
                      style={{ color: "#A02020" }}
                      gutterBottom
                    >
                      <strong>Price :</strong> ₹{catalogIndProd.price}
                    </Typography>

                    <Typography
                      variant="body1"
                      style={{ color: "#A02020" }}
                      gutterBottom
                    >
                      <strong>Status :</strong>{" "}
                      {catalogIndProd.countInStock > 0 ? (
                        <span style={{ color: "green" }}>In Stock</span>
                      ) : (
                        <span style={{ color: "red" }}>Unavailable</span>
                      )}
                    </Typography>


                    <>
                      <Typography
                        variant="body1"
                        style={{ color: "#A02020" }}
                        component="span"
                      >
                        <strong>Qty:</strong>
                        {/* <FormControl
                          sx={{ marginLeft: 2, width: "90%" }}
                          size="small"
                        >
                          <Select
                            value={qty}
                            onChange={(e) => setQty(e.target.value)}
                          >
                            {[...Array(product.countInStock).keys()].map(
                              (x) => (
                                <MenuItem key={x + 1} value={x + 1}>
                                  {x + 1}
                                </MenuItem>
                              )
                            )}
                          </Select>
                        </FormControl> */}
                        {/* <Button onClick={handleIncrement}>+</Button>
                        <TextField>{qty}</TextField>
                        <Button onClick={handleDecrement}>-</Button> */}
                        {/* <Box
                            sx={{ display: "flex", alignItems: "center" }}
                          > */}


                        {/* </Box> */}
                      </Typography>
                      {userInfo ? (
                        <Button
                          variant="contained"
                          onClick={addToCartHandler}
                          sx={{
                            marginTop: 2,
                            marginLeft: { xs: 2, sm: 2, md: 6, lg: 6 },
                            width: "90%",
                          }}
                        >
                          {" "}
                          Add to Cart
                        </Button>
                      ) : (
                        <Button
                          variant="contained"
                          onClick={addToHandler}
                          sx={{ marginTop: 2, width: "100%" }}
                        >
                          {" "}
                          Add to Cart
                        </Button>
                      )}
                    </>
                  </Box>
                </Card>
              </Box>
            </Grid>

            <Box>
              <Card
                style={{
                  padding: 30,
                  borderRadius: 0,
                  margin: 20,
                  boxShadow:
                    "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                }}
              >
                <Box>


                  <div>


                    {userInfo ? (
                      <Box
                        sx={{ display: "flex", flexDirection: "column" }}
                        component="form"
                        onSubmit={submitHandler}
                      >
                        <Typography variant="h5" style={{ color: "#A02020" }}>
                          Write a customer review
                        </Typography>

                        <Box sx={{ minWidth: 120 }}>
                          <FormControl
                            fullWidth
                            sx={{
                              m: 3,
                              width: "83.5%",
                              justifycontent: "center",
                            }}
                          >
                            <InputLabel id="demo-simple-select-label">
                              Rating
                            </InputLabel>
                            <Select
                              id="demo-simple-select-label"
                              // id="demo-simple-select"
                              // value={Rating}
                              label="Rating"
                              onChange={handleChange}
                            >
                              <MenuItem value={1}>1- Poor</MenuItem>
                              <MenuItem value={2}>2- Fair</MenuItem>
                              <MenuItem value={3}>3- Good</MenuItem>
                              <MenuItem value={4}>4- Very good</MenuItem>
                              <MenuItem value={5}>5- Excelent</MenuItem>
                            </Select>
                          </FormControl>
                        </Box>

                        <Box
                          sx={{ m: 3, width: "83%", justifycontent: "center" }}
                        >
                          <TextareaAutosize
                            minRows={5}
                            placeholder="Comment"
                            id="comment"
                            style={{ width: "100%" }}
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                          />
                        </Box>

                        <Button
                          variant="contained"
                          type="submit"
                          sx={{ m: 3, width: "83.5%" }}
                        >
                          Submit
                        </Button>

                        <div>
                          {loadingReviewCreate && <LoadingBox></LoadingBox>}
                          {errorReviewCreate && (
                            <MessageBox variant="danger">
                              {errorReviewCreate}
                            </MessageBox>
                          )}
                        </div>
                      </Box>
                    ) : (
                      <Box
                        sx={{
                          fontWeight: 500,
                          fontSize: 20,
                          textAlign: "center",
                        }}
                      >
                        <DialogContent>
                          Please{" "}
                          <Button color="secondary" href="/signin">
                            Sign In
                          </Button>{" "}
                          to write a review
                        </DialogContent>
                      </Box>
                    )}
                  </div>
                </Box>
              </Card>
            </Box>
          </Grid>
        </Grid>
      )}
      <hr style={{ margin: "10px 0px" }}></hr>
      <>
        <Typography
          variant="h4"
          sx={{
            "&:hover": { color: "#6633FF", textDecoration: "underline" },
            my: 3,
          }}
        >
          Products related to this item
        </Typography>
        <Card
          sx={{
            borderRadius: 0,
            py: 3,
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          }}
        >
          {loading ? (
            <CircularProgress></CircularProgress>
          ) : error ? (
            <MessageBox variant="danger">{error}</MessageBox>
          ) : (
            <Carousel
              className="new1"
              mouseTracking
              enableSwipe={true}
              pagination={false}
              breakPoints={breakPoints}
              disableArrowsOnEnd={false}
            >
              {products
                ?.filter((item) => {
                  return (
                    item?.categorygroup === catalogIndProd?.categorygroup &&
                    item?._id != catalogIndProd?._id
                  );
                })
                .map((categorys) => (
                  <>
                    <Box key={categorys?._id}>
                      <Product product={categorys}></Product>
                    </Box>
                  </>
                ))}
            </Carousel>
          )}
        </Card>
      </>
    </Box>
  );
}
