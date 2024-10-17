import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import {
  createProduct,
  updateProduct,
  detailsProduct,
} from "../actions/productAction";
import LoadingBox from "../components/LoadingBox";
import Container from "@mui/material/Container";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core";
import { PRODUCT_DETAILS_RESET } from "../constants/productConstants";
import { useForm } from "react-hook-form";
import {
  MenuItem,
  Typography,
} from "../../node_modules/@material-ui/core/index";
import { CategoryChildListDetails, categoryListDetails, categoryMasterListDetails, subCategoryListDetails } from "../actions/categoryAction";
// import MultiImageInput from "react-multiple-image-input";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
export default function ProductEditScreen() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [activeStep, setActiveStep] = useState(0);
  const navigate = useNavigate();
  const params = useParams();
  const { id: productId } = params;
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [imageFile, setImageFile] = useState();
  const [categorytitle, setCategorytitle] = useState("");
  const [category, setCategory] = useState("");
  const [categorygroup, setCategorygroup] = useState("");
  const [categorytype, setCategorytype] = useState("");
  const [countInStock, setCountInStock] = useState("");
  const [brand, setBrand] = useState("");
  const [description, setDescription] = useState("");
  const productDetails = useSelector((state) => state.productDetails);
  const { product } = productDetails;
  const productUpdate = useSelector((state) => state.productUpdate);
  const productCreate = useSelector((state) => state.productCreate);
  const {
    // eslint-disable-next-line no-unused-vars
    success: successUpdate,
  } = productUpdate;

  const {
    // eslint-disable-next-line no-unused-vars
    loading: loadingCreate,
    // eslint-disable-next-line no-unused-vars
    error: errorCreate,
    // eslint-disable-next-line no-unused-vars
    success: successCreate,
    product: createdProduct,
  } = productCreate;

  const [nameError, setNameError] = useState("");
  const [priceError, setPriceError] = useState("");
  const [categoryError, setCategoryError] = useState("");
  const [categorygroupError, setCategorygroupError] = useState("");
  const [categorytypeError, setCategorytypeError] = useState("");
  const [countInStockError, setCountInStockError] = useState("");
  const [brandError, setBrandError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");

  // const categoryList = useSelector((state) => state.categoryList);
  // const { categorydetails } = categoryList;

  // *************************************
  const categoryMasterList = useSelector((state) => state.categoryMasterList);
  const { categoryMasterdetails } = categoryMasterList;

  const subCategoryList = useSelector((state) => state.subCategoryList);
  const { subCategory } = subCategoryList;

  const ChildCategoryLis = useSelector((state) => state.ChildCategoryLis);
  const { childCategory } = ChildCategoryLis;
  

  const validateName = (e) => {
    setName(e.target.value);
    if (e.target.value.length === 0) {
      setNameError("Name is required");
    } else {
      setNameError("");
      setName(e.target.value);
    }
  };

  const validatePrice = (e) => {
    var pattern = new RegExp(
      /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i
    );
    setPrice(e.target.value);

    if (e.target.value.length === 0) {
      setPriceError("Price is required");
    } else if (!pattern.test(e.target.value)) {
      setPriceError("Please Enter Number Only");
    } else {
      setPriceError("");
      setPrice(e.target.value);
    }
  };

  const validateCategory = (e) => {
    setCategory(e.target.value);
    if (e.target.value.length === 0) {
      setCategoryError("Category is required");
    } else {
      setCategoryError("");
      setCategory(e.target.value);
    }
  };

  const validateCategorygroup = (e) => {
    setCategorygroup(e.target.value);
    if (e.target.value.length === 0) {
      setCategorygroupError("Category Group is required");
    } else {
      setCategorygroupError("");
      setCategorygroup(e.target.value);
    }
  };

  const validateCategorytype = (e) => {
    setCategorytype(e.target.value);
    if (e.target.value.length === 0) {
      setCategorytypeError("Category Type is required");
    } else {
      setCategorytypeError("");
      setCategorytype(e.target.value);
    }
  };

  const validateBrand = (e) => {
    setBrand(e.target.value);
    if (e.target.value.length === 0) {
      setBrandError("Category Brand is required");
    } else {
      setBrandError("");
      setBrand(e.target.value);
    }
  };
  const validateCountInStock = (e) => {
    var pattern = new RegExp(
      /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i
    );
    setCountInStock(e.target.value);
    if (e.target.value.length === 0) {
      setCountInStockError("CountInStock is required");
    } else if (!pattern.test(e.target.value)) {
      setCountInStockError("Please Enter Number Only");
    } else {
      setCountInStockError("");
      setCountInStock(e.target.value);
    }
  };
  const validateDescription = (e) => {
    setDescription(e.target.value);
    if (e.target.value.length === 0) {
      setDescriptionError("Description is required");
    } else {
      setDescriptionError("");
      setDescription(e.target.value);
    }
  };

  const dispatch = useDispatch();

  const createSteps = ["Create Product", "File Upload"];
  const updateSteps = ["Update Product", "Update File"];

  useEffect(() => {
    dispatch(categoryListDetails());
    dispatch(categoryMasterListDetails());
    dispatch(subCategoryListDetails());
    dispatch(CategoryChildListDetails());
    if (!product && productId) {
      dispatch(detailsProduct(productId));
    }
    if (product) {
      setName(product.name);
      setPrice(product.price);
      setCategory(product.category);
      setCategorygroup(product.categorygroup);
      setCategorytype(product.categorytype);
      setCountInStock(product.countInStock);
      setBrand(product.brand);
      setDescription(product.description);
    }
  }, [product, productId, dispatch, navigate]);

  const updateHandler = (e) => {
    e.preventDefault();
    if (
      !nameError &&
      !priceError &&
      !categoryError &&
      !categorygroupError &&
      !categorytypeError &&
      !countInStockError &&
      !brandError &&
      !descriptionError
    ) {
      dispatch(
        updateProduct({
          _id: productId,
          name,
          price,
          fileId: product.fileId,
          category,
          categorygroup,
          categorytype,
          brand,
          countInStock,
          description,
        })
      );
      dispatch({ type: PRODUCT_DETAILS_RESET });
      setActiveStep(activeStep + 1);
    }
  };
  const createHandler = (e) => {
    dispatch(
      createProduct({
        name: e.name,
        price: e.price,
        category: category.toLowerCase(),
        categorygroup: categorygroup,
        categorytype: categorytype,
        categorytitel: categorytitle,
        brand: e.categorybrand,
        countInStock: e.countInStock,
        description: e.description,
      })
    );
    setActiveStep(activeStep + 1);
  };

  // const [loadingUpload, setLoadingUpload] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [errorUpload, setErrorUpload] = useState("");
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const onSelectFile = async (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  // const onSelectFile1 = async (e) => {
  //   console.log("e================>>>", e);
  //   const file = e.target.files[0];
  //   setImageFile(file);
  // };
  // ***************************************************
  // const crop = {
  //   unit: "px", // default, can be 'px' or '%'
  //   x: 130,
  //   y: 50,
  //   width: 200,
  //   height: 200,
  // };

  const [image, setImage] = useState("");
  const [images, setImages] = useState([]);
  function handleChange(e) {
    setImage(e.target.files);
  }

  function handleChange1(e) {
    setImages(e.target.files);
  }

  // const handleChangeApi = async (e) => {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append("image", image[0]);
  //   for (let i = 0; i < images.length; i++) {
  //     formData.append("images", images[i]);
  //   }
  //   for (var pair of formData.entries()) {
  //     console.log(pair[0] + ", " + pair[1]);
  //   }
  //   const data = Axios.post("/api/uploads", formData, {
  //     headers: {
  //       "Content-Type": "multipart/form-data",
  //       Authorization: `Bearer ${userInfo.token}`,
  //       Product: `Bearer ${product}`,
  //     },
  //   });
  //   console.log("data=======>>", data);
  // };
  // ***************************************************

 

  // const [age, setAge] = React.useState("");
  // const handlecategoryChange = (e) => {
  // console.log("event=====>>", age);
  //   setAge(e.target.value);
  // };

  // const handlecategoryChange = (event) => {
  //   setCategory(event.target.value);
  // };

  // const handlecategorygroupChange = (event) => {
  //   setCategorygroup(event.target.value);
  // };

  // const handlecategorytypeChange = (event) => {
  //   setCategorytype(event.target.value);
  // };

  // ***************************************************
  const handleChangeApi = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image[0]);
    for (let i = 0; i < images.length; i++) {
      formData.append("images", images[i]);
    }
    for (var pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }
    // const bodyFormData = new FormData();
    // bodyFormData.append("image", e.imageFile[0]);
    try {
      if (!product && !productId) {
        const { data } = await Axios.post("/api/uploads", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${userInfo.token}`,
            Product: `Bearer ${product}`,
          },
        });
        dispatch(
          updateProduct({
            _id: createdProduct._id,
            name: createdProduct.name,
            brand: createdProduct.brand,
            category: createdProduct.category,
            categorygroup: createdProduct.categorygroup,
            categorytype: createdProduct.categorytype,
            description: createdProduct.description,
            price: createdProduct.price,
            countInStock: createdProduct.countInStock,
            fileId: data.image._id,
          })
        );
      }
      if (product) {
        await Axios.put(`/api/uploads/${product.fileId}`, formData, {
          // const { data } = await Axios.put(`/api/uploads/${product.fileId}`, bodyFormData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${userInfo.token}`,
            Product: `Bearer ${product}`,
          },
        });
      }
      navigate("/productlist");
    } catch (error) {
      setErrorUpload(error.message);
    }
  };

  const theme = createTheme();

  const useStyles = makeStyles(() => ({
    label: {
      "& .css-1hv8oq8-MuiStepLabel-label.Mui-active": { fontSize: "14px" },
      "& .css-1hv8oq8-MuiStepLabel-label.Mui-disabled": { fontSize: "14px" },
      "& .Mui-disabled .MuiStepIcon-root": { fontSize: "30px" },
      "& .Mui-active .MuiStepIcon-root": { fontSize: "30px" },
      "& .css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root.Mui-completed": {
        fontSize: "30px",
        color: "green",
      },
      "& .css-1hv8oq8-MuiStepLabel-label.Mui-completed": { fontSize: "14px" },
    },
    cssLabel: {
      "&.css-1pysi21-MuiFormLabel-root-MuiInputLabel-root": {
        fontSize: "14px",
      },
      "& .css-1pysi21-MuiFormLabel-root-MuiInputLabel-root.Mui-focused": {
        fontSize: "14px",
      },
    },
    cssFocused: {
      "& .css-1pysi21-MuiFormLabel-root-MuiInputLabel-root.Mui-focused": {
        fontSize: "14px",
      },
    },
  }));

  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Container
        component="main"
        maxWidth="sm"
        sx={{ my: { xs: 3, md: 6, lg: 10 }, p: { xs: 2, md: 3 } }}
      >
        <CssBaseline />
        {!product && !productId ? (
          <Stepper activeStep={activeStep}>
            {createSteps.map((label) => (
              <Step key={label} className={classes.label}>
                <StepLabel style={{ display: "flex", flexDirection: "column" }}>
                  {label}
                </StepLabel>
              </Step>
            ))}
          </Stepper>
        ) : product ? (
          <Stepper activeStep={activeStep}>
            {updateSteps.map((label) => (
              <Step key={label}>
                <StepLabel
                  className={classes.label}
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  {label}
                </StepLabel>
              </Step>
            ))}
          </Stepper>
        ) : (
          <div></div>
        )}

        {!product && !productId ? (
          activeStep === 0 ? (
            <Box
              component="form"
              onSubmit={handleSubmit(createHandler)}
              sx={{
                display: "flex",
                width: "80%",
                flexDirection: "column",
                alignItems: "center",
                margin: "0px 10%",
                borderRadius: "5px",
              }}
            >
              <TextField
                inputProps={{ style: { fontSize: 14 } }}
                InputLabelProps={{
                  classes: {
                    root: classes.cssLabel,
                    focused: classes.cssFocused,
                  },
                }}
                size="small"
                margin="normal"
                // required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="off"
                onChange={(e) => setName(e.target.value)}
                // helperText="Incorrect entry."
                {...register("name", { required: true })}
                error={errors.name}
              />
              {errors.name && (
                <span className="formError">Name is required</span>
              )}
              <TextField
                InputLabelProps={{
                  classes: {
                    root: classes.cssLabel,
                    focused: classes.cssFocused,
                  },
                }}
                size="small"
                margin="normal"
                fullWidth
                id="price"
                label="Price"
                name="price"
                autoComplete="off"
                // onChange={(e) => validatePrice(e)}
                onChange={(e) => setPrice(e.target.value)}
                {...register("price", {
                  required: true,
                  pattern:
                    /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i,
                })}
                error={errors.price}
              />
              {errors?.price?.type === "required" && (
                <span className="formError">Price is required</span>
              )}
              {errors?.price?.type === "pattern" && (
                <span className="formError">Please Enter Number Only</span>
              )}

              {/* *********************************************************** */}

              <FormControl fullWidth>
                <InputLabel>Category Title</InputLabel>
                <Select
                  id="standard-simple-select"
                  value={categorytitle}
                  label="Category Name"
                  name="category"
                  onChange={(e) => setCategorytitle(e.target.value)}
                //   {...register("category", { required: true })}
                // error={errors.category}
                >
                  {categoryMasterdetails?.map((item, index) => (
                    <MenuItem key={index} value={item._id}>
                      {item.categorytittel}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl fullWidth sx={{ mt: 1 }}>
                <InputLabel>Category Name</InputLabel>
                <Select
                  id="standard-simple-select"
                  value={category}
                  label="Category Name"
                  name="category"
                  onChange={(e) => setCategory(e.target.value)}
                //   {...register("category", { required: true })}
                // error={errors.category}
                >
                  {categoryMasterdetails?.filter((item) => {
                      return item._id=== categorytitle;
                    }).map((item, index) => (
                    <MenuItem key={index} value={item._id}>
                      {item.categoryname}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl fullWidth sx={{ mt: 1 }}>
                <InputLabel>Category Group</InputLabel>
                <Select
                  id="standard-simple-select"
                  value={categorygroup}
                  label="Category Group"
                  onChange={(e) => setCategorygroup(e.target.value)}
                >
                  {subCategory
                    ?.filter((item) => {
                      return item.categoryId=== category;
                    })
                    .map((item, index) => (
                      <MenuItem key={index} value={item._id}>
                        {item.subcategorygroup}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>

              <FormControl fullWidth sx={{ mt: 1 }}>
                <InputLabel>Category Type</InputLabel>
                <Select
                  id="standard-simple-select"
                  value={categorytype}
                  label="Category Type"
                  onChange={(e) => setCategorytype(e.target.value)}
                >
                  {childCategory
                    ?.filter((item) => {
                      return item.childcategorygroup === categorygroup;
                    })
                    .map((item, index) => (
                      <MenuItem key={index} value={item.childcategorytype}>
                        {item.childcategorytype}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
              {/* *********************************************************** */}
              <TextField
                InputLabelProps={{
                  classes: {
                    root: classes.cssLabel,
                    focused: classes.cssFocused,
                  },
                }}
                inputProps={{ style: { fontSize: 14 } }}
                size="small"
                margin="normal"
                fullWidth
                id="brand"
                label="Brand"
                name="brand"
                autoComplete="off"
                onChange={(e) => setBrand(e.target.value)}
                {...register("categorybrand", { required: true })}
                error={errors.categorybrand}
              />
              {errors.categorybrand && (
                <span className="formError">Category brand is required</span>
              )}

              <TextField
                InputLabelProps={{
                  classes: {
                    root: classes.cssLabel,
                    focused: classes.cssFocused,
                  },
                }}
                inputProps={{ style: { fontSize: 14 } }}
                size="small"
                variant="outlined"
                margin="normal"
                fullWidth
                id="countInStock"
                label="CountInStock"
                name="countInStock"
                autoComplete="off"
                // onChange={(e) => validateCountInStock(e)}
                onChange={(e) => setCountInStock(e.target.value)}
                {...register("countInStock", {
                  required: true,
                  pattern:
                    /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i,
                })}
                error={errors.countInStock}
              />
              {errors?.countInStock?.type === "required" && (
                <span className="formError">CountInStock is required</span>
              )}
              {errors?.countInStock?.type === "pattern" && (
                <span className="formError">Please Enter Number Only</span>
              )}
              <TextField
                InputLabelProps={{
                  classes: {
                    root: classes.cssLabel,
                    focused: classes.cssFocused,
                  },
                }}
                inputProps={{ style: { fontSize: 14 } }}
                size="small"
                margin="normal"
                fullWidth
                id="description"
                label="Description"
                name="description"
                autoComplete="off"
                onChange={(e) => setDescription(e.target.value)}
                {...register("description", { required: true })}
                error={errors.description}
              />
              {errors.description && (
                <span className="formError">Description is required</span>
              )}

              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                type="submit"
              >
                Create
              </Button>
            </Box>
          ) : (
            <>
              {/* <Box
              component="form"
              sx={{
                display: "flex",
                width: "100%",
                flexDirection: "column",
                alignItems: "center",
                // margin: "0px 0%",
                borderRadius: "5px",
              }}
            >
               <TextField style={{margin:"10px 0px"}}
            inputProps={{style: {fontSize: 14},accept:"image/*"}}
             size="small"
              fullWidth   
              type="file"
              id="imageFile"
              name="file"
              autoComplete="off"
              onChange={handleChange}
              // onChange={(e)=>onSelectFile(e)}
              {...register("imageFile", { required: true })}
              error={(errors.imageFile)}
              
            />
             <TextField style={{margin:"10px 0px"}}
            inputProps={{style: {fontSize: 14},multiple:true,accept:"image/*"}}
             size="small"
              fullWidth   
              type="file"
              id="imageFile"
              name="file"
              autoComplete="off"
              onChange={handleChange1}
              // onChange={(e)=>onSelectFile(e)}
              {...register("imageFile", { required: true })}
              error={(errors.imageFile)}
              
            />
              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleChangeApi}
               
              >
                Upload
              </Button>
            </Box> */}
              <Box
                component="form"
                sx={{
                  display: "flex",
                  width: "100%",
                  flexDirection: "column",
                  alignItems: "center",
                  // margin: "0px 0%",
                  borderRadius: "5px",
                }}
              >
                <Typography variant="h5">Main image</Typography>
                <TextField
                  style={{ margin: "10px 0px" }}
                  inputProps={{ style: { fontSize: 14 }, accept: "image/*" }}
                  fullWidth
                  type="file"
                  name="file"
                  onChange={handleChange}
                />
                <Typography variant="h5">Sub images</Typography>
                <TextField
                  style={{ margin: "10px 0px" }}
                  inputProps={{
                    style: { fontSize: 14 },
                    multiple: true,
                    accept: "image/*",
                  }}
                  fullWidth
                  type="file"
                  name="uploadedImages"
                  multiple
                  onChange={handleChange1}
                />
                <Button
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={handleChangeApi}
                >
                  Upload
                </Button>
              </Box>
            </>
          )
        ) : product ? (
          activeStep === 0 ? (
            <Box
              component="form"
              onSubmit={updateHandler}
              sx={{
                display: "flex",
                width: "80%",
                flexDirection: "column",
                alignItems: "center",
                margin: "0px 10%",
                borderRadius: "5px",
              }}
            >
              <TextField
                inputProps={{ style: { fontSize: 14 } }}
                InputLabelProps={{
                  classes: {
                    root: classes.cssLabel,
                    focused: classes.cssFocused,
                  },
                }}
                size="small"
                margin="normal"
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="off"
                value={name}
                //  onChange={(e) => setName(e.target.value)}
                onChange={(e) => validateName(e)}
                error={nameError}
              />
              <span className="formError">{nameError}</span>
              <TextField
                InputLabelProps={{
                  classes: {
                    root: classes.cssLabel,
                    focused: classes.cssFocused,
                  },
                }}
                inputProps={{ style: { fontSize: 14 } }}
                size="small"
                margin="normal"
                fullWidth
                id="price"
                label="Price"
                name="price"
                autoComplete="off"
                value={price}
                //  onChange={(e) => setPrice(e.target.value)}
                onChange={(e) => validatePrice(e)}
                error={priceError}
              />
              <span className="formError">{priceError}</span>
              <TextField
                InputLabelProps={{
                  classes: {
                    root: classes.cssLabel,
                    focused: classes.cssFocused,
                  },
                }}
                inputProps={{ style: { fontSize: 14 } }}
                size="small"
                margin="normal"
                fullWidth
                id="category"
                label="Category"
                name="category"
                autoComplete="off"
                value={category}
                //  onChange={(e) => setCategory(e.target.value)}
                onChange={(e) => validateCategory(e)}
                error={categoryError}
              />
              <span className="formError">{categoryError}</span>
              <TextField
                InputLabelProps={{
                  classes: {
                    root: classes.cssLabel,
                    focused: classes.cssFocused,
                  },
                }}
                inputProps={{ style: { fontSize: 14 } }}
                size="small"
                margin="normal"
                fullWidth
                id="category group"
                label="Category group"
                name="category group"
                autoComplete="off"
                value={categorygroup}
                //  onChange={(e) => setCategorygroup(e.target.value)}
                onChange={(e) => validateCategorygroup(e)}
                error={categorygroupError}
              />
              <span className="formError">{categorygroupError}</span>
              <TextField
                InputLabelProps={{
                  classes: {
                    root: classes.cssLabel,
                    focused: classes.cssFocused,
                  },
                }}
                inputProps={{ style: { fontSize: 14 } }}
                size="small"
                margin="normal"
                required
                fullWidth
                id="category text"
                label="Category text"
                name="category text"
                autoComplete="off"
                value={categorytype}
                //  onChange={(e) => setCategorytype(e.target.value)}
                onChange={(e) => validateCategorytype(e)}
                error={categorytypeError}
              />
              <span className="formError">{categorytypeError}</span>
              <TextField
                InputLabelProps={{
                  classes: {
                    root: classes.cssLabel,
                    focused: classes.cssFocused,
                  },
                }}
                inputProps={{ style: { fontSize: 14 } }}
                size="small"
                margin="normal"
                required
                fullWidth
                id="brand"
                label="Brand"
                name="brand"
                autoComplete="off"
                value={brand}
                //  onChange={(e) => setBrand(e.target.value)}
                onChange={(e) => validateBrand(e)}
                error={brandError}
              />
              <span className="formError">{brandError}</span>

              <TextField
                InputLabelProps={{
                  classes: {
                    root: classes.cssLabel,
                    focused: classes.cssFocused,
                  },
                }}
                inputProps={{ style: { fontSize: 14 } }}
                size="small"
                margin="normal"
                required
                fullWidth
                id="countInStock"
                label="CountInStock"
                name="countInStock"
                autoComplete="off"
                value={countInStock}
                //  onChange={(e) => setCountInStock(e.target.value)}
                onChange={(e) => validateCountInStock(e)}
                error={countInStockError}
              />
              <span className="formError">{countInStockError}</span>
              <TextField
                InputLabelProps={{
                  classes: {
                    root: classes.cssLabel,
                    focused: classes.cssFocused,
                  },
                }}
                inputProps={{ style: { fontSize: 14 } }}
                size="small"
                margin="normal"
                required
                fullWidth
                id="description"
                label="Description"
                name="description"
                autoComplete="off"
                value={description}
                //  onChange={(e) => setDescription(e.target.value)}
                onChange={(e) => validateDescription(e)}
                error={descriptionError}
              />
              <span className="formError">{descriptionError}</span>

              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                type="submit"
              >
                Update
              </Button>
            </Box>
          ) : (
            <Box
              component="form"
              onSubmit={handleSubmit(handleChangeApi)}
              sx={{
                display: "flex",
                width: "80%",
                flexDirection: "column",
                alignItems: "center",
                margin: "0px 10%",
                borderRadius: "5px",
              }}
            >
              <TextField
                style={{ margin: "10px 0px" }}
                inputProps={{ style: { fontSize: 14 }, accept: "image/*" }}
                size="small"
                fullWidth
                type="file"
                id="imageFile"
                name="imageFile"
                autoComplete="off"
                onChange={(e) => onSelectFile(e)}
                {...register("imageFile", { required: true })}
                error={errors.imageFile}
              />
              {errors?.imageFile?.type === "required" && (
                <span className="formError">File is required</span>
              )}
              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                // onClick={uploadFileHandler}
                type="submit"
              >
                Upload
              </Button>
            </Box>
          )
        ) : (
          <div>
            <LoadingBox></LoadingBox>
          </div>
        )}
      </Container>
    </ThemeProvider>
  );
}
