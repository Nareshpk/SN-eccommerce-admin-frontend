import AddCircleIcon from "@mui/icons-material/AddCircle";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import InfoIcon from "@mui/icons-material/Info";
import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  FormControlLabel,
  FormGroup,
  Grid,
} from "../../node_modules/@material-ui/core/index";
import { PricingListDetails, priceDetails, updatePricingdetail } from "../actions/prodAction";
import { TaxesList } from "../actions/TaxesAction";
import { PRICING_DETAILS_RESET, PRICING_DETAILS_UPDATE_RESET } from "../constants/prodConstants";
import SpecificPriceGridScreen from "./SpecificPriceGridScreen";
// import { useParams } from "react-router-dom";

// import { SPECIFIC_PRICE_CONDITION_RESET } from "../constants/specificPriceConstants";

import SpecificScreen from "./SpecificScreen";
import { useParams } from "../../node_modules/react-router-dom/dist/index";

// import { useNavigate } from "../../node_modules/react-router-dom/dist/index";

//**************************Tooltip*************************/

// const navigate = useNavigate();
function ProdPricingScreen(PropTypes) {
  const { product } = PropTypes;
  console.log("props", product);
  const [specific, setSpecific] = useState(0);
  console.log("specific", specific);
  const handlechange = () => {
    if (specific === 1) {
      setSpecific(0);
    } else {
      setSpecific(1);
    }
  };

  const params = useParams();
  const EditId = params.id;

  const PricingDetails = useSelector((state) => state.PricingDetails);
  const { success: pricingSave } = PricingDetails;
  const taxesList = useSelector((state) => state.taxesList);
  const { taxes } = taxesList;

  const handleChange = (event) => {
    console.log(event.target.value);
  };
  // const specificPrice = useSelector((state) => state.specificPrice);
  // const { success: specificprice } = specificPrice;
  const [Taxprice, setTaxprice] = useState(pricingSave?.Taxprice);
  const [Retailexclusive, setRetailexclusive] = useState(
    pricingSave?.Retailexclusive
  );
  const [Retailinclusive, setRetailinclusive] = useState(
    pricingSave?.Retailinclusive
  );
  const [Retailcost, setRetailcost] = useState(pricingSave?.Retailcost);

  const PriceList = useSelector((state) => state.PriceList);
  const { pricingdetail } = PriceList;

  const pricingObj = pricingdetail?.find((item) => item.mprodId === EditId)

  const PricingUpdate = useSelector((state) => state.PricingUpdate);
  const { success: updateprice } = PricingUpdate;

  const catalogProdView = useSelector((state) => state.catalogProdView);
  const { catProducts } = catalogProdView;

  const prodObj = catProducts?.find((item) => item?._id === EditId);
  // eslint-disable-next-line no-unused-vars
  const [productId, setproductId] = useState([prodObj?._id]);


  let productdata;
  {
    catProducts?.map((state) => {
      productdata = state?._id
    })
  }


  const [EditRetailexcl, setEditRetailexcl] = useState(pricingObj?.RetailExcl);
  const [EditRetailincl, setEditRetailincl] = useState(pricingObj?.RetailIncl);
  const [EditRetailcost, setEditRetailcost] = useState(pricingObj?.RetailCost);
  const [EditTaxprice, setEditTaxprice] = useState(pricingObj?.priceGroup);
  const dispatch = useDispatch();
  useEffect(() => {
    if (pricingSave) {
      dispatch({ type: PRICING_DETAILS_RESET });
    }
    if (updateprice) {
      dispatch({ type: PRICING_DETAILS_UPDATE_RESET })
    }
    dispatch(TaxesList());
    dispatch(PricingListDetails());
  }, [dispatch, pricingSave, updateprice]);
  const {
    //register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const setpercentage = (e) => {
    console.log("e", e);
    const taxper = taxes?.find((x) => x._id === e);

    let test = (Retailexclusive * (taxper ? taxper.Rate : 0)) / 100;
    let amt = test + parseInt(Retailexclusive);
    setRetailinclusive(amt);
  };

  const taxesrule = (e) => {
    setTaxprice(e.target.value);
  };

  const handleRetailexclusive = (e) => {
    setRetailexclusive(e.target.value);
    const taxper = taxes?.find((x) => x._id === Taxprice);
    console.log("");

    let test = (e.target.value * (taxper ? taxper.Rate : 0)) / 100;
    let amt = test + parseInt(e.target.value);
    setRetailinclusive(amt);
  };


  const setEditpercentage = (e) => {
    const taxper = taxes?.find((x) => x._id === e);

    let test = (EditRetailexcl * (taxper ? taxper.Rate : 0)) / 100;
    let amt = test + parseInt(EditRetailexcl);
    setEditRetailincl(amt);
  };

  const Edittaxesrule = (e) => {
    setEditTaxprice(e.target.value);
  };

  const handleEditRetailexclusive = (e) => {
    setEditRetailexcl(e.target.value);
    const taxper = taxes?.find((x) => x._id === EditTaxprice);
    console.log("");

    let test = (e.target.value * (taxper ? taxper.Rate : 0)) / 100;
    let amt = test + parseInt(e.target.value);
    setEditRetailincl(amt);
  };
  const SavePriceDetails = () => {

    dispatch(
      priceDetails({
        mprodId: productdata,
        RetailExcl: Retailexclusive,
        RetailIncl: Retailinclusive,
        RetailCost: Retailcost,
        priceGroup: Taxprice,
      })
    );

    window.confirm("Pricing Details Saved Successfully!!");
    event.target.reset();
    setRetailexclusive("");
    setRetailinclusive("");
    setTaxprice("");
    setRetailcost("");
    // navigate('/pricing');
  };

  const UpdatePriceDetails = () => {
    dispatch(
      updatePricingdetail({
        prodId: EditId,
        _id: pricingObj._id,
        RetailExcl: EditRetailexcl,
        RetailIncl: EditRetailincl,
        RetailCost: EditRetailcost,
        priceGroup: EditTaxprice,
        productId: productId,
      })
    );

    window.confirm("Pricing Update Saved Successfully!!");
    event.target.reset();
    setEditRetailexcl("");
    setEditRetailincl("");
    setEditTaxprice("");
    setEditRetailcost("");
    // navigate('/pricing');
  };
  //   const [specificPrice, setSpecificprice] = useState(0);
  //   console.log("specificPrice", specificPrice);

  return (
    <>
      {pricingObj ? (<>
        <Box onSubmit={handleSubmit(UpdatePriceDetails)} component='form'>
          <Grid container>
            <Grid item xs={12}>
              <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>
                Retail price
                <Tooltip>
                  <InfoIcon sx={{ fontSize: 12 }} />
                </Tooltip>
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mt: "20px",
                }}
              >
                <Grid item xs={4}>
                  <Typography sx={{ width: "100%", fontSize: 13 }}>
                    Retail price (tax excl.)
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography sx={{ width: "100%", fontSize: 13 }}>
                    Tax rule
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography sx={{ width: "100%", fontSize: 13 }}>
                    Retail price (tax incl.)
                  </Typography>
                </Grid>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mt: "30px",
                  width: "75%",
                }}
              >
                <Grid item xs={4}>
                  <Typography sx={{ mt: "2px", width: "100%" }}>
                    <TextField
                      size='small'
                      id='EditRetailexcl'
                      value={EditRetailexcl}
                      onChange={handleEditRetailexclusive}
                      InputProps={{
                        style: { fontSize: 13 },
                        startAdornment: (
                          <InputAdornment position='start'>
                            <CurrencyRupeeIcon sx={{ fontSize: 15 }} />
                          </InputAdornment>
                        ),
                      }}
                    />
                    {errors.Retailexclusive && (
                      <span className='formError'>retailexcl is required</span>
                    )}
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <FormControl sx={{ width: "100%", ml: 10 }}>
                    <InputLabel id='demo-simple-select-label'></InputLabel>
                    <Select
                      labelId='demo-simple-select-label'
                      size='small'
                      id='taxrule'
                      value={EditTaxprice}
                      onChange={Edittaxesrule}
                    >
                      {taxes?.map((item, index) => (
                        <MenuItem
                          key={index}
                          value={item._id}
                          onClick={() => setEditpercentage(item._id)}
                        >
                          {item.Name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={4}>
                  <Typography sx={{ mt: "2px", width: "100%", ml: 20 }}>
                    <TextField
                      size='small'
                      id='EditRetailincl'
                      value={EditRetailincl}
                      onChange={(e) => setEditRetailincl(e.target.value)}
                      onChangeinc={handleChange}
                      InputProps={{
                        style: { fontSize: 13 },
                        startAdornment: (
                          <InputAdornment position='start'>
                            <CurrencyRupeeIcon sx={{ fontSize: 15 }} />
                          </InputAdornment>
                        ),
                      }}
                    //{...register("Retailinclusive", { required: true })}
                    // error={errors.Retailinclusive}
                    />
                    {errors.Retailinclusive && (
                      <span className='formError'>retailincl is required</span>
                    )}
                  </Typography>
                </Grid>
              </Box>

              {/* <Typography sx={{ width: "40%" }}>
                        <TextField
                          // select
                          fullWidth
                          id="margin-normal"
                          margin="normal"
                        >
                          <MenuItem>FR Taux standard (20%)</MenuItem>
                        </TextField>
                      </Typography> */}

              <FormGroup sx={{ mt: "10px" }}>
                <FormControlLabel
                  control={<Checkbox size='small' defaultChecked />}
                  label={
                    <Typography sx={{ fontSize: 13 }}>
                      Display the On sale! lag on the product page, and on product
                      listings
                    </Typography>
                  }
                />
              </FormGroup>

              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "bold",
                  mt: "5px",
                }}
              >
                Cost price
                <Tooltip>
                  <InfoIcon sx={{ fontSize: 12 }} />
                </Tooltip>
              </Typography>

              <Typography sx={{ mt: "10px", width: "100%", display: "flex" }}>
                <TextField
                  size='small'
                  id='retailcost'
                  valuue={EditRetailcost}
                  onChange={(e) => setEditRetailcost(e.target.value)}
                  InputProps={{
                    style: { fontSize: 13 },
                    startAdornment: (
                      <InputAdornment position='start'>
                        <CurrencyRupeeIcon sx={{ fontSize: 15 }} />
                      </InputAdornment>
                    ),
                  }}
                //{...register("retailcost", { required: true })}
                //error={errors.retailcost}
                />
                {errors.retailcost && (
                  <span className='formError'>retailcost is required</span>
                )}
              </Typography>
              <Typography>
                <Button
                  variant='contained'
                  sx={{ ml: "80%", width: "10%" }}
                  type='submit'
                >
                  Update
                </Button>
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "bold",
                  mt: "5px",
                }}
              >
                Specific price
                <Tooltip>
                  <InfoIcon sx={{ fontSize: 12 }} />
                </Tooltip>
              </Typography>

              <Typography sx={{ mt: "10px" }}>
                <Button
                  sx={{
                    mt: "20px",
                    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2);",
                  }}
                  variant='outlined'
                  startIcon={<AddCircleIcon sx={{ fontSize: 12 }} />}
                  onClick={handlechange}
                >
                  Add a specific price
                </Button>
              </Typography>
            </Grid>
          </Grid>
        </Box>
        {specific === 1 ? <SpecificScreen /> : <></>}
        <SpecificPriceGridScreen />
      </>) : (<>
        <Box onSubmit={handleSubmit(SavePriceDetails)} component='form'>
          <Grid container>
            <Grid item xs={12}>
              <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>
                Retail price
                <Tooltip>
                  <InfoIcon sx={{ fontSize: 12 }} />
                </Tooltip>
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mt: "20px",
                }}
              >
                <Grid item xs={4}>
                  <Typography sx={{ width: "100%", fontSize: 13 }}>
                    Retail price (tax excl.)
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography sx={{ width: "100%", fontSize: 13 }}>
                    Tax rule
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography sx={{ width: "100%", fontSize: 13 }}>
                    Retail price (tax incl.)
                  </Typography>
                </Grid>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mt: "30px",
                  width: "75%",
                }}
              >
                <Grid item xs={4}>
                  <Typography sx={{ mt: "2px", width: "100%" }}>
                    <TextField
                      size='small'
                      id='Retailexclusive'
                      value={Retailexclusive}
                      onChange={handleRetailexclusive}
                      //onChange={(e) => setRetailexclusive(e.target.value)}
                      InputProps={{
                        style: { fontSize: 13 },
                        startAdornment: (
                          <InputAdornment position='start'>
                            <CurrencyRupeeIcon sx={{ fontSize: 15 }} />
                          </InputAdornment>
                        ),
                      }}
                    //{...register("Retailexclusive", { required: true })}
                    //error={errors.Retailexclusive}
                    />
                    {errors.Retailexclusive && (
                      <span className='formError'>retailexcl is required</span>
                    )}
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <FormControl sx={{ width: "100%", ml: 10 }}>
                    <InputLabel id='demo-simple-select-label'></InputLabel>
                    <Select
                      labelId='demo-simple-select-label'
                      size='small'
                      id='taxrule'
                      value={Taxprice}
                      onChange={taxesrule}
                    >
                      {taxes?.map((item, index) => (
                        <MenuItem
                          key={index}
                          value={item._id}
                          onClick={() => setpercentage(item._id)}
                        >
                          {item.Name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={4}>
                  <Typography sx={{ mt: "2px", width: "100%", ml: 20 }}>
                    <TextField
                      size='small'
                      id='Retailinclusive'
                      value={Retailinclusive}
                      onChange={(e) => setRetailinclusive(e.target.value)}
                      onChangeinc={handleChange}
                      InputProps={{
                        style: { fontSize: 13 },
                        startAdornment: (
                          <InputAdornment position='start'>
                            <CurrencyRupeeIcon sx={{ fontSize: 15 }} />
                          </InputAdornment>
                        ),
                      }}
                    //{...register("Retailinclusive", { required: true })}
                    // error={errors.Retailinclusive}
                    />
                    {errors.Retailinclusive && (
                      <span className='formError'>retailincl is required</span>
                    )}
                  </Typography>
                </Grid>
              </Box>

              {/* <Typography sx={{ width: "40%" }}>
                        <TextField
                          // select
                          fullWidth
                          id="margin-normal"
                          margin="normal"
                        >
                          <MenuItem>FR Taux standard (20%)</MenuItem>
                        </TextField>
                      </Typography> */}

              <FormGroup sx={{ mt: "10px" }}>
                <FormControlLabel
                  control={<Checkbox size='small' defaultChecked />}
                  label={
                    <Typography sx={{ fontSize: 13 }}>
                      Display the On sale! lag on the product page, and on product
                      listings
                    </Typography>
                  }
                />
              </FormGroup>

              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "bold",
                  mt: "5px",
                }}
              >
                Cost price
                <Tooltip>
                  <InfoIcon sx={{ fontSize: 12 }} />
                </Tooltip>
              </Typography>

              <Typography sx={{ mt: "10px", width: "100%", display: "flex" }}>
                <TextField
                  size='small'
                  id='retailcost'
                  valuue={Retailcost}
                  onChange={(e) => setRetailcost(e.target.value)}
                  InputProps={{
                    style: { fontSize: 13 },
                    startAdornment: (
                      <InputAdornment position='start'>
                        <CurrencyRupeeIcon sx={{ fontSize: 15 }} />
                      </InputAdornment>
                    ),
                  }}
                //{...register("retailcost", { required: true })}
                //error={errors.retailcost}
                />
                {errors.retailcost && (
                  <span className='formError'>retailcost is required</span>
                )}
              </Typography>
              <Typography>
                <Button
                  variant='contained'
                  sx={{ ml: "80%", width: "10%" }}
                  type='submit'
                >
                  Save
                </Button>
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "bold",
                  mt: "5px",
                }}
              >
                Specific price
                <Tooltip>
                  <InfoIcon sx={{ fontSize: 12 }} />
                </Tooltip>
              </Typography>

              <Typography sx={{ mt: "10px" }}>
                <Button
                  sx={{
                    mt: "20px",
                    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2);",
                  }}
                  variant='outlined'
                  startIcon={<AddCircleIcon sx={{ fontSize: 12 }} />}
                  onClick={handlechange}
                >
                  Add a specific price
                </Button>
              </Typography>
            </Grid>
          </Grid>
        </Box>
        {specific === 1 ? <SpecificScreen /> : <></>}
        <SpecificPriceGridScreen />
      </>)}

    </>
  );
}

export default ProdPricingScreen;
