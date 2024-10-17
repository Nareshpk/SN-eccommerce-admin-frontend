/* eslint-disable no-constant-condition */
import { makeStyles } from "@material-ui/core/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CircularProgress from "@mui/material/CircularProgress";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import Rating from "@mui/material/Rating";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "../../node_modules/react-router-dom/dist/index";
import { categoryMasterListDetails } from "../actions/categoryAction";
import { listProducts } from "../actions/productAction";
import MessageBox from "../components/MessageBox";
import Product from "../components/Product";
import { prices, ratings } from "../utils";

export default function SearchScreen() {
  const {
    name = "all",
    category = "all",
    categorygroup = "all",
    categorytype = "all",
    min = 0,
    max = 0,
    rating = 0,
    order = "newest",
    pageNumber = 1,
  } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;
  const productCategoryList = useSelector((state) => state.productCategoryList);
  const {
    // loading: loadingCategories,
    // eslint-disable-next-line no-unused-vars
    error: errorCategories,
    categories,
  } = productCategoryList;
  const categoryMasterList = useSelector((state) => state.categoryMasterList);
  const { categoryMasterdetails } = categoryMasterList;
  // const productCategorygroupList = useSelector((state) => state.productCategorygroupList);
  // const {
  //   loadinggrp: loadingCategoriesGroup,
  //   errorcategrp: errorCategoriesGroup,
  //   categoriesGroup,
  // } = productCategorygroupList;

  // const productCategorytypeList = useSelector((state) => state.productCategorytypeList);
  // const {
  //   loadingtype: loadingCategoriesType,
  //   errorcategtype: errorCategoriesType,
  //   categoriesType,
  // } = productCategorytypeList;
  // console.log("categoriesGroup----------------->>>", categoriesGroup)
  // console.log("categoriesType----------------->>>", categoriesType)
  useEffect(() => {
    dispatch(categoryMasterListDetails());
    dispatch(
      listProducts({
        pageNumber,
        name: name !== "all" ? name : "",
        category: category !== "all" ? category : "",
        categorygroup: categorygroup !== "all" ? categorygroup : "",
        categorytype: categorytype !== "all" ? categorytype : "",
        min,
        max,
        rating,
        order,
      })
    );
  }, [
    category,
    categorygroup,
    categorytype,
    dispatch,
    max,
    min,
    name,
    order,
    rating,
    pageNumber,
  ]);

  const getFilterUrl = (filter) => {
    const filterCategory = filter.category || category;
    // eslint-disable-next-line no-unused-vars
    const filterCategorygroup = filter.categorygroup || categorygroup;
    // eslint-disable-next-line no-unused-vars
    const filterCategorytype = filter.categorytype || categorytype;
    const filterName = filter.name || name;
    const filterMin = filter.min ? filter.min : filter.min === 0 ? 0 : min;
    const filterMax = filter.max ? filter.max : filter.max === 0 ? 0 : max;
    const filterRating = filter.rating || rating;
    const sortOrder = filter.order || order;
    const filterPage = filter.page || pageNumber;
    return `/search/category/${filterCategory}/name/${filterName}/min/${filterMin}/max/${filterMax}/rating/${filterRating}/order/${sortOrder}/pageNumber/${filterPage}`;
    // `/search/categorygroup/${filterCategorygroup}/name/${filterName}/min/${filterMin}/max/${filterMax}/rating/${filterRating}/order/${sortOrder}/pageNumber/${filterPage}`,
    // `/search/categorytype/${filterCategorytype}/name/${filterName}/min/${filterMin}/max/${filterMax}/rating/${filterRating}/order/${sortOrder}/pageNumber/${filterPage}`);
  };
  // eslint-disable-next-line no-unused-vars
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  }));

  return (
    <div>
      <Box sx={{ flexgrow: 1, marginTop: 3 }}>
        <Grid container spacing={0}>
          {/* Mobile view start */}
          <Grid item xs sx={{ display: { xs: "block", sm: "none" } }}>
            <Box>
              <Grid item xs>
                <Box>
                  <Card
                    sx={{
                      marginTop: 1,
                      marginLeft: 2,
                      maxWidth: 300,
                      textAlign: "center",
                      boxShadow:
                        "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                      bgcolor: (theme) =>
                        theme.palette.mode === "dark" ? "#101010" : "#fff",
                      color: (theme) =>
                        theme.palette.mode === "dark" ? "grey.500" : "grey.800",
                      p: 1,
                      m: 1,
                      borderRadius: 2,
                    }}
                  >
                    <CardContent>
                      <Typography variant="h5" color="#0066CC">
                        {products?.length} Results
                      </Typography>

                      <Typography variant="h6" color="#0066CC">
                        Sort by
                        <FormControl
                          sx={{
                            m: 1,
                            minWidth: 200,
                            hiegth: 10,
                            flexDirection: "column",
                          }}
                        >
                          <Select
                            value={order}
                            onChange={(e) => {
                              navigate(getFilterUrl({ order: e.target.value }));
                            }}
                          >
                            <MenuItem value="newest">Newest Arrivals</MenuItem>
                            <MenuItem value="lowest">
                              Price: Low to High
                            </MenuItem>
                            <MenuItem value="highest">
                              Price: High to Low
                            </MenuItem>
                            <MenuItem value="toprated">
                              Avg. Customer Reviews
                            </MenuItem>
                          </Select>
                        </FormControl>
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>
              </Grid>
              <Grid item xs>
                <Box sx={{ marginLeft: 1 }}>
                  <Card
                    sx={{
                      marginTop: 1,
                      maxWidth: 300,
                      textAlign: "center",
                      boxShadow:
                        "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                      textTransform: "capitalize",
                      cursor: "pointer",
                    }}
                  >
                    <Typography variant="h6" color="#0066CC">
                      Department
                    </Typography>

                    <CardContent>
                      <Link
                        style={{ textDecoration: "none", color: "inherit" }}
                        className={"all" === category ? "active" : ""}
                        to={getFilterUrl({ category: "all" })}
                        // to={`/search/category/sample category`}
                      >
                        <Typography variant="h6">Any </Typography>
                      </Link>

                      {categories?.map((c) => (
                        <>
                        {categoryMasterdetails?.filter((item)=>{
                          return item._id === c 
                        }).map((item)=>(
                          <Box key={item._id}>
                          <Link
                            style={{ textDecoration: "none", color: "inherit" }}
                            className={item.categoryname === category ? "active" : ""}
                            to={getFilterUrl({ category: c })}
                            // to={`/search/category/${c}`}
                          >
                            <Typography variant="h6">{item.categoryname}</Typography>
                          </Link>
                        </Box>
                        ))}
                        </>
                      
                      ))}
                    </CardContent>
                  </Card>
                </Box>
              </Grid>
              <Grid item xs>
                <Box sx={{ marginLeft: 1 }}>
                  <Card
                    sx={{
                      marginTop: 1,
                      maxWidth: 300,
                      textAlign: "center",
                      boxShadow:
                        "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                    }}
                  >
                    <Typography variant="h6" color="#0066CC">
                      Price
                    </Typography>
                    <CardContent>
                      {prices.map((p) => (
                        <Typography key={p.name}>
                          <Link
                            style={{ textDecoration: "none", color: "inherit" }}
                            to={getFilterUrl({ min: p.min, max: p.max })}
                            className={
                              `₹{p.min}-₹{p.max}` === `₹{min}-₹{max}`
                                ? "active"
                                : ""
                            }
                          >
                            <Typography variant="h6">{p.name}</Typography>
                          </Link>
                        </Typography>
                      ))}
                    </CardContent>
                  </Card>
                </Box>
              </Grid>
              <Grid item xs>
                <Box sx={{ marginLeft: 1 }}>
                  <Card
                    sx={{
                      marginTop: 1,
                      maxWidth: 300,
                      textAlign: "center",
                      boxShadow:
                        "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                    }}
                  >
                    <Typography variant="h6" color="#0066CC">
                      Avg. Customer Review
                    </Typography>
                    <CardContent>
                      {ratings.map((r) => (
                        <Typography key={r.name}>
                          <Link
                            to={getFilterUrl({ rating: r.rating })}
                            className={
                              `${r.rating}` === `${rating}` ? "active" : ""
                            }
                          >
                            <Rating
                              caption={" & up"}
                              rating={r.rating}
                            ></Rating>
                          </Link>
                        </Typography>
                      ))}
                    </CardContent>
                  </Card>
                </Box>
              </Grid>
            </Box>
          </Grid>
          {/* Mobile view End */}
          {/* system view start */}
          <Grid item sx={{ display: { xs: "none", sm: "block" } }}>
            <Box>
              <Grid item xs>
                <Box>
                  <Card
                    sx={{
                      marginTop: 1,
                      maxWidth: 300,
                      textAlign: "center",
                      boxShadow:
                        "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                    }}
                  >
                    <CardContent>
                      {/* {loading ? (
                        <CircularProgress></CircularProgress>
                      ) : error ? (
                        <MessageBox variant="danger">{error}</MessageBox>
                      ) : ( */}
                      <Typography variant="h5" color="#0066CC">
                        {products?.length} Results
                      </Typography>
                      {/* )} */}
                      <Typography variant="h6">
                        Sort by
                        <FormControl
                          sx={{
                            m: 1,
                            minWidth: 200,
                            hiegth: 10,
                            flexDirection: "column",
                          }}
                        >
                          <Select
                            value={order}
                            onChange={(e) => {
                              navigate(getFilterUrl({ order: e.target.value }));
                            }}
                          >
                            <MenuItem value="newest">Newest Arrivals</MenuItem>
                            <MenuItem value="lowest">
                              Price: Low to High
                            </MenuItem>
                            <MenuItem value="highest">
                              Price: High to Low
                            </MenuItem>
                            <MenuItem value="toprated">
                              Avg. Customer Reviews
                            </MenuItem>
                          </Select>
                        </FormControl>
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>
              </Grid>
              <Grid item xs>
                <Box>
                  <Card
                    sx={{
                      marginTop: 1,
                      maxWidth: 500,
                      textAlign: "center",
                      boxShadow:
                        "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                      textTransform: "capitalize",
                      cursor: "pointer",
                    }}
                  >
                    <Typography variant="h6" color="#0066CC">
                      Department
                    </Typography>

                    {/* {loadingCategories ? (
                      <CircularProgress></CircularProgress>
                    ) : errorCategories ? (
                      <MessageBox variant="danger">
                        {errorCategories}
                      </MessageBox>
                    ) : ( */}
                    <CardContent>
                      <Link
                        style={{ textDecoration: "none", color: "inherit" }}
                        className={"all" === category ? "active" : ""}
                        to={getFilterUrl({ category: "all" })}
                        // to={`/search/category/sample category`}
                      >
                        <Typography variant="h6">Any </Typography>
                      </Link>

                      {categories?.map((c) => (
                        <>
                        {categoryMasterdetails?.filter((item)=>{
                          return item._id === c 
                        }).map((item)=>(
                          <Box key={item._id}>
                          <Link
                            style={{ textDecoration: "none", color: "inherit" }}
                            className={item.categoryname === category ? "active" : ""}
                            to={getFilterUrl({ category: c })}
                            // to={`/search/category/${c}`}
                          >
                            <Typography variant="h6">{item.categoryname}</Typography>
                          </Link>
                        </Box>
                        ))}
                        </>
                      
                      ))}
                    </CardContent>
                    {/* )} */}
                  </Card>
                </Box>
              </Grid>
              <Grid item xs>
                <Box>
                  <Card
                    sx={{
                      marginTop: 1,
                      maxWidth: 500,
                      textAlign: "center",
                      boxShadow:
                        "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                    }}
                  >
                    <Typography variant="h6" color="#0066CC">
                      Price
                    </Typography>
                    <CardContent>
                      {prices.map((p) => (
                        <Typography key={p.name}>
                          <Link
                            style={{ textDecoration: "none", color: "inherit" }}
                            to={getFilterUrl({ min: p.min, max: p.max })}
                            className={
                              `₹{p.min}-₹{p.max}` === `₹{min}-₹{max}`
                                ? "active"
                                : ""
                            }
                          >
                            <Typography variant="h6">{p.name}</Typography>
                          </Link>
                        </Typography>
                      ))}
                    </CardContent>
                  </Card>
                </Box>
              </Grid>
              <Grid item xs>
                <Box>
                  <Card
                    sx={{
                      marginTop: 1,
                      maxWidth: 500,
                      textAlign: "center",
                      boxShadow:
                        "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                    }}
                  >
                    <Typography variant="h6" color="#0066CC">
                      Avg. Customer Review
                    </Typography>
                    <CardContent>
                      {ratings.map((r) => (
                        <Typography key={r.name}>
                          <Link
                            to={getFilterUrl({ rating: r.rating })}
                            className={
                              `${r.rating}` === `${rating}` ? "active" : ""
                            }
                          >
                            <Rating
                              caption={" & up"}
                              rating={r.rating}
                            ></Rating>
                          </Link>
                        </Typography>
                      ))}
                    </CardContent>
                  </Card>
                </Box>
              </Grid>
            </Box>
          </Grid>
          {/* system view End */}

          <Grid item xs sx={{ display: { xs: "none", sm: "block" } }}>
            <Box>
              {loading ? (
                <CircularProgress></CircularProgress>
              ) : error ? (
                <MessageBox variant="danger">{error}</MessageBox>
              ) : (
                <>
                  {products.length === 0 && (
                    <MessageBox>No Product Found</MessageBox>
                  )}
                  <Box
                    sx={{
                      padding: 0,
                      margin: 0,
                      listStyle: "none",
                      display: "flex",
                      flexFlow: "wrap row",
                      flexDirection: "row",
                    }}
                  >
                    {products.map((product) => (
                      <Product key={product._id} product={product}></Product>
                    ))}
                  </Box>
                  <Box>
                    {[...Array(pages).keys()].map((x) => (
                      <Link
                        style={{ textDecoration: "none" }}
                        className={x + 1 === page ? "active" : ""}
                        key={x + 1}
                        to={getFilterUrl({ page: x + 1 })}
                      >
                        {x + 1}
                      </Link>
                    ))}
                  </Box>
                </>
              )}
            </Box>
          </Grid>
          <Grid item xs sx={{ display: { xs: "block", sm: "none" } }}>
            <Box>
              {loading ? (
                <CircularProgress></CircularProgress>
              ) : error ? (
                <MessageBox variant="danger">{error}</MessageBox>
              ) : (
                <>
                  {products.length === 0 && (
                    <MessageBox>No Product Found</MessageBox>
                  )}
                  <Box
                    sx={{
                      padding: 0,
                      margin: 8,
                      listStyle: "none",
                      display: "flex",
                      flexFlow: "wrap row",
                      flexDirection: "row",
                    }}
                  >
                    {products.map((product) => (
                      <Product key={product._id} product={product}></Product>
                    ))}
                  </Box>
                  <Box>
                    {[...Array(pages).keys()].map((x) => (
                      <Link
                        style={{ textDecoration: "none" }}
                        className={x + 1 === page ? "active" : ""}
                        key={x + 1}
                        to={getFilterUrl({ page: x + 1 })}
                      >
                        {x + 1}
                      </Link>
                    ))}
                  </Box>
                </>
              )}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
