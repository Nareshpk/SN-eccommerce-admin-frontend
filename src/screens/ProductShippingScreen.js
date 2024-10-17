import InfoIcon from "@mui/icons-material/Info";
import { Box, Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Grid from "@mui/material/Grid";
import InputAdornment from "@mui/material/InputAdornment";

import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { ShipListDetails, shippingDetail, updateShipdetail } from "../actions/ProductShippingAction";
import { PRODUCT_SHIPPING_DETAILS_RESET, PRODUCT_SHIPPING_UPDATE_RESET } from "../constants/ProductSippingConstants";
import { useParams } from "../../node_modules/react-router-dom/dist/index";
DataGrid;

// import Card from "@mui/material/Card";
export default function ProductShippingScreen() {
  const delivery = `
Display delivery time for a product is advised for merchants selling in Europe to comply with the local laws.
`;
  const shipping = `
If a carrier has a tax, it will be added to the shipping fees. Does not apply to free shipping.
`;
  // const navigate = useNavigate();

  const params = useParams();
  const EditId = params.id;
  console.log(" EditId =====>", EditId)
  const ShippingSave = useSelector((state) => state.ShippingSave);
  const { success: shippingSave } = ShippingSave;

  const ShipUpdate = useSelector((state) => state.ShipUpdate);
  const { success: updateship } = ShipUpdate;

  const ShipList = useSelector((state) => state.ShipList);
  const { shippingdetail } = ShipList;

  const shippingObj = shippingdetail?.find((item) => item?.mprodId === EditId);

  const catalogProdView = useSelector((state) => state.catalogProdView);
  const { catProducts } = catalogProdView;

  let productdata;
  {
    catProducts?.map((state) => {
      productdata = state?._id
    })
  }
  console.log("catProducts====>", catProducts)

  const [EditWidth, setEditWidth] = useState(shippingObj?.width);
  const [EditHeight, setEditHeight] = useState(shippingObj?.height);
  const [EditDepth, setEditDepth] = useState(shippingObj?.depth);
  const [EditWeight, setEditWeight] = useState(shippingObj?.weight);
  const [EditStock, setEditStock] = useState(shippingObj?.inStock);
  const [EditOutStock, setEditOutStock] = useState(shippingObj?.outOfStock);
  const [EditShipfees, setEditShipfees] = useState(shippingObj?.fees);

  const dispatch = useDispatch();
  const saveShppingDetails = (e) => {
    //console.log('e', e);
    dispatch(
      shippingDetail({
        mprodId: productdata,
        width: e.width,
        height: e.height,
        depth: e.depth,
        weight: e.weight,
        delTime: combination,
        inStock: e.inStock,
        outOfStock: e.outOfStock,
        fees: e.fees,
        carrier1: check1,
        carrier2: check2,
        carrier3: check3,
        carrier4: check4,
      })
    );
    window.confirm("Shipping Details Saved Successfully!!");
    event.target.reset();
    setCombination("");
    setcheck1(false);
    setcheck2(false);
    setcheck3(false);
    setcheck4(false);
    // navigate("/product");
  };

  const updateShppingDetails = () => {
    dispatch(
      updateShipdetail({
        _id: shippingObj._id,
        prodId: EditId,
        width: EditWidth,
        height: EditHeight,
        depth: EditDepth,
        weight: EditWeight,
        delTime: combination,
        inStock: EditStock,
        outOfStock: EditOutStock,
        fees: EditShipfees,
        carrier1: check1,
        carrier2: check2,
        carrier3: check3,
        carrier4: check4,
      })
    );
    window.confirm("Shipping Details Update Successfully!!");

    event.target.reset();
    setCombination("");
    setEditWidth("");
    setEditHeight("");
    setEditDepth("");
    setEditWeight("");
    setEditStock("");
    setEditOutStock("");
    setEditShipfees("");
    setcheck1(false);
    setcheck2(false);
    setcheck3(false);
    setcheck4(false);
    // navigate("/product");
  };
  useEffect(() => {
    if (shippingSave) {
      dispatch({ type: PRODUCT_SHIPPING_DETAILS_RESET });
    }
    if (updateship) {
      dispatch({ type: PRODUCT_SHIPPING_UPDATE_RESET });
    }
    dispatch(ShipListDetails());
  }, [dispatch, shippingSave, updateship]);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [combination, setCombination] = useState("none");
  const handleChangeradio = (event) => {
    if (combination == "none") {
      setCombination(event.target.value);
    } else if (combination == "defDel") {
      setCombination(event.target.value);
    } else {
      setCombination(event.target.value);
    }
  };
  const [check1, setcheck1] = useState(false);
  const onchangeCheck1 = (event) => {
    //console.log('event.target.checked', event.target.checked);
    if (event.target.checked === true) {
      setcheck1(event.target.checked);
    } else {
      setcheck1(event.target.checked);
    }
  };
  const [check2, setcheck2] = useState(false);
  const onchangeCheck2 = (event) => {
    if (event.target.checked === true) {
      setcheck2(event.target.checked);
    } else {
      setcheck2(event.target.checked);
    }
  };
  const [check3, setcheck3] = useState(false);
  const onchangeCheck3 = (event) => {
    if (event.target.checked === true) {
      setcheck3(event.target.checked);
    } else {
      setcheck3(event.target.checked);
    }
  };
  const [check4, setcheck4] = useState(false);
  const onchangeCheck4 = (event) => {
    if (event.target.checked === true) {
      setcheck4(event.target.checked);
    } else {
      setcheck4(event.target.checked);
    }
  };
  return (
    <>   {shippingObj ? (<>
      <Box onSubmit={handleSubmit(updateShppingDetails)} component='form'>
        <Grid container>
          <Grid item xs={12}>
            <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>
              Package Dimension
            </Typography>

            <Typography sx={{ mt: "10px", fontSize: 13 }}>
              Charge additional shipping costs based on packet dimensions covered
              here.
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mt: "30px",
              }}
            >
              <Typography sx={{ width: "100%", ml: 5, fontSize: 13 }}>
                Width
              </Typography>

              <Typography sx={{ width: "100%", fontSize: 13 }}>Height</Typography>
              <Typography sx={{ width: "100%", fontSize: 13 }}>Depth</Typography>
              <Typography sx={{ width: "100%", fontSize: 13 }}>Weight</Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mt: "20px",
              }}
            >
              <TextField
                sx={{ width: "100%", m: "0 10px" }}
                size='small'
                InputProps={{
                  endAdornment: (
                    <InputAdornment
                      position='end'
                      sx={{
                        mr: -1.7,
                        padding: "15px 10px",
                        border: "0.5px solid gray",
                        backgroundColor: (theme) => theme.palette.divider,
                      }}
                    >
                      Cm
                    </InputAdornment>
                  ),
                  style: { fontSize: 13 },
                  "aria-label": "width",
                }}
                aria-describedby='outlined-weight-helper-text'
                value={EditWidth}
                onChange={(e) => setEditWidth(e.target.value)}
              />

              <TextField
                size='small'
                sx={{ width: "100%" }}
                value={EditHeight}
                onChange={(e) => setEditHeight(e.target.value)}
                aria-describedby='outlined-weight-helper-text'
                InputProps={{
                  endAdornment: (
                    <InputAdornment
                      position='end'
                      sx={{
                        mr: -1.7,
                        padding: "15.5px 10px",
                        border: "1px solid gray",
                        backgroundColor: (theme) => theme.palette.divider,
                      }}
                    >
                      Cm
                    </InputAdornment>
                  ),
                  style: { fontSize: 13 },
                  "aria-label": "height",
                }}
              />

              <TextField
                size='small'
                sx={{ width: "100%", m: "0 10px" }}
                value={EditDepth}
                onChange={(e) => setEditDepth(e.target.value)}
                aria-describedby='outlined-weight-helper-text'
                InputProps={{
                  endAdornment: (
                    <InputAdornment
                      position='end'
                      sx={{
                        mr: -1.7,
                        padding: "15.5px 10px",
                        border: "1px solid gray",
                        backgroundColor: (theme) => theme.palette.divider,
                      }}
                    >
                      Cm
                    </InputAdornment>
                  ),
                  style: { fontSize: 13 },
                  "aria-label": "depth",
                }}
              />

              <TextField
                size='small'
                sx={{ width: "100%" }}
                id='weight'
                value={EditWeight}
                onChange={(e) => setEditWeight(e.target.value)}
                aria-describedby='outlined-weight-helper-text'
                InputProps={{
                  endAdornment: (
                    <InputAdornment
                      position='end'
                      sx={{
                        mr: -1.7,
                        padding: "15.5px 10px",
                        border: "1px solid gray",
                        backgroundColor: (theme) => theme.palette.divider,
                      }}
                    >
                      Kg
                    </InputAdornment>
                  ),
                  style: { fontSize: 13 },
                  "aria-label": "weight",
                }}
              />
            </Box>

            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "bold",
                mt: "10px",
              }}
            >
              Delivery Time
              <Tooltip title={delivery}>
                <InfoIcon sx={{ fontSize: 12 }} />
              </Tooltip>
            </Typography>

            <FormControl sx={{ mt: "10px" }}>
              <RadioGroup
                aria-labelledby='demo-radio-buttons-group-label'
                name='radio-buttons-group'
                value={combination}
                onChange={handleChangeradio}
              >
                <FormControlLabel
                  value='none'
                  control={<Radio size='small' name='none' />}
                  label={<Typography sx={{ fontSize: 13 }}>None</Typography>}
                />
                <FormControlLabel
                  value='defDel'
                  control={<Radio size='small' name='defDel' />}
                  type='radio'
                  label={
                    <Typography sx={{ fontSize: 13 }}>
                      Default delivery time
                    </Typography>
                  }
                />
                <FormControlLabel
                  value='speciTime'
                  control={<Radio size='small' name='speciTime' />}
                  label={
                    <Typography sx={{ fontSize: 13 }}>
                      Specific delivery time to this product
                    </Typography>
                  }
                />
              </RadioGroup>
            </FormControl>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mt: "10px",
              }}
            >
              <Typography sx={{ width: "100%", fontSize: 13 }}>
                Delivery time of in-stock products:
              </Typography>
              <Typography sx={{ width: "100%", fontSize: 13, mr: 40 }}>
                Delivery time of out-of-stock products with allowed orders:
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mt: "10px",
              }}
            >
              <Typography sx={{ width: "100%", m: "0 10px 0 0" }}>
                <TextField
                  size='small'
                  width='100%'
                  id='outlined-multiline-static'
                  name='inStock'
                  defaultValue='Delivered within 3-4 days'
                  value={EditStock}
                  onChange={(e) => setEditStock(e.target.value)}
                  InputProps={{
                    style: { fontSize: 13 },
                  }}
                />
              </Typography>
              <Typography sx={{ width: "100%", mr: 40 }}>
                <TextField
                  size='small'
                  width='100%'
                  name='outOfStock'
                  id='outlined-multiline-static'
                  defaultValue='Delivered within 5-7 days'
                  value={EditOutStock}
                  onChange={(e) => setEditOutStock(e.target.value)}
                  InputProps={{
                    style: { fontSize: 13 },
                  }}
                />
              </Typography>
            </Box>

            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "bold",
                mt: "20px",
              }}
            >
              Shipping fees
              <Tooltip title={shipping}>
                <InfoIcon sx={{ fontSize: 12 }} />
              </Tooltip>
            </Typography>

            <Typography sx={{ mt: "10px", fontSize: 12 }}>
              Does this product incur additional shipping costs?
            </Typography>

            <Typography sx={{ mt: "10px" }}>
              <TextField
                size='small'
                id='outlined-start-adornment'
                name='fees'
                InputProps={{
                  style: { fontSize: 13 },
                  startAdornment: (
                    <InputAdornment position='start'>
                      <CurrencyRupeeIcon sx={{ fontSize: 15 }} />
                    </InputAdornment>
                  ),
                }}
                value={EditShipfees}
                onChange={(e) => setEditShipfees(e.target.value)}
              />
            </Typography>

            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: "bold",
                mt: "30px",
              }}
            >
              Available carriers
            </Typography>

            <FormGroup
              sx={{ mt: "20px" }}
            // value={carrierAction}
            // onChange={onChangeCheck}
            >
              <FormControlLabel
                value='presta'
                control={
                  <Checkbox
                    size='smal'
                    checked={check1}
                    onChange={onchangeCheck1}
                    name='presta'
                  />
                }
                label={
                  <Typography sx={{ fontSize: 13 }}>
                    1 - PrestaShop (Pick up in-store)
                  </Typography>
                }
                {...register("CarrierAction1", {
                  required: false,
                })}
              />
              <FormControlLabel
                value='carrier'
                control={
                  <Checkbox
                    size='smal'
                    checked={check2}
                    onChange={onchangeCheck2}
                    name='carrier'
                  />
                }
                label={
                  <Typography sx={{ fontSize: 13 }}>
                    2 - My carrier (Delivery next day!)
                  </Typography>
                }
                {...register("CarrierAction2", {
                  required: false,
                })}
              />
              <FormControlLabel
                value='cheapCarrier'
                control={
                  <Checkbox
                    size='smal'
                    checked={check3}
                    onChange={onchangeCheck3}
                    name='cheapCarrier'
                  />
                }
                label={
                  <Typography sx={{ fontSize: 13 }}>
                    3 - My cheap carrier (Buy more to pay less!)
                  </Typography>
                }
                {...register("CarrierAction3", {
                  required: false,
                })}
              />
              <FormControlLabel
                value='litCar'
                control={
                  <Checkbox
                    size='smal'
                    checked={check4}
                    onChange={onchangeCheck4}
                    name='litCar'
                  />
                }
                label={
                  <Typography sx={{ fontSize: 13 }}>
                    4 - My light carrier (The lighter the cheaper!)
                  </Typography>
                }
                {...register("CarrierAction4", {
                  required: false,
                })}
              />
            </FormGroup>
            <Typography>
              <Box sx={{ display: "flex" }}>
                <Button
                  variant='contained'
                  sx={{ mt: 1, mb: 2, ml: "50rem" }}
                  type='submit'
                >
                  Update
                </Button>
              </Box>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>) : (<>
      <Box onSubmit={handleSubmit(saveShppingDetails)} component='form'>
        <Grid container>
          <Grid item xs={12}>
            <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>
              Package Dimension
            </Typography>

            <Typography sx={{ mt: "10px", fontSize: 13 }}>
              Charge additional shipping costs based on packet dimensions covered
              here.
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mt: "30px",
              }}
            >
              <Typography sx={{ width: "100%", ml: 5, fontSize: 13 }}>
                Width
              </Typography>

              <Typography sx={{ width: "100%", fontSize: 13 }}>Height</Typography>
              <Typography sx={{ width: "100%", fontSize: 13 }}>Depth</Typography>
              <Typography sx={{ width: "100%", fontSize: 13 }}>Weight</Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mt: "20px",
              }}
            >
              <TextField
                sx={{ width: "100%", m: "0 10px" }}
                size='small'
                id='width'
                InputProps={{
                  endAdornment: (
                    <InputAdornment
                      position='end'
                      sx={{
                        mr: -1.7,
                        padding: "15px 10px",
                        border: "0.5px solid gray",
                        backgroundColor: (theme) => theme.palette.divider,
                      }}
                    >
                      Cm
                    </InputAdornment>
                  ),
                  style: { fontSize: 13 },
                  "aria-label": "width",
                }}
                aria-describedby='outlined-weight-helper-text'
                {...register("width", {
                  required: true,
                })}
              />

              <TextField
                size='small'
                sx={{ width: "100%" }}
                id='height'
                {...register("height", {
                  required: true,
                })}
                aria-describedby='outlined-weight-helper-text'
                InputProps={{
                  endAdornment: (
                    <InputAdornment
                      position='end'
                      sx={{
                        mr: -1.7,
                        padding: "15.5px 10px",
                        border: "1px solid gray",
                        backgroundColor: (theme) => theme.palette.divider,
                      }}
                    >
                      Cm
                    </InputAdornment>
                  ),
                  style: { fontSize: 13 },
                  "aria-label": "height",
                }}
              />

              <TextField
                size='small'
                sx={{ width: "100%", m: "0 10px" }}
                id='depth'
                {...register("depth", {
                  required: true,
                })}
                aria-describedby='outlined-weight-helper-text'
                InputProps={{
                  endAdornment: (
                    <InputAdornment
                      position='end'
                      sx={{
                        mr: -1.7,
                        padding: "15.5px 10px",
                        border: "1px solid gray",
                        backgroundColor: (theme) => theme.palette.divider,
                      }}
                    >
                      Cm
                    </InputAdornment>
                  ),
                  style: { fontSize: 13 },
                  "aria-label": "depth",
                }}
              />

              <TextField
                size='small'
                sx={{ width: "100%" }}
                id='weight'
                {...register("weight", {
                  required: true,
                })}
                aria-describedby='outlined-weight-helper-text'
                InputProps={{
                  endAdornment: (
                    <InputAdornment
                      position='end'
                      sx={{
                        mr: -1.7,
                        padding: "15.5px 10px",
                        border: "1px solid gray",
                        backgroundColor: (theme) => theme.palette.divider,
                      }}
                    >
                      Kg
                    </InputAdornment>
                  ),
                  style: { fontSize: 13 },
                  "aria-label": "weight",
                }}
              />
            </Box>

            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "bold",
                mt: "10px",
              }}
            >
              Delivery Time
              <Tooltip title={delivery}>
                <InfoIcon sx={{ fontSize: 12 }} />
              </Tooltip>
            </Typography>

            <FormControl sx={{ mt: "10px" }}>
              <RadioGroup
                aria-labelledby='demo-radio-buttons-group-label'
                name='radio-buttons-group'
                value={combination}
                onChange={handleChangeradio}
              >
                <FormControlLabel
                  value='none'
                  control={<Radio size='small' name='none' />}
                  label={<Typography sx={{ fontSize: 13 }}>None</Typography>}
                />
                <FormControlLabel
                  value='defDel'
                  control={<Radio size='small' name='defDel' />}
                  type='radio'
                  label={
                    <Typography sx={{ fontSize: 13 }}>
                      Default delivery time
                    </Typography>
                  }
                />
                <FormControlLabel
                  value='speciTime'
                  control={<Radio size='small' name='speciTime' />}
                  label={
                    <Typography sx={{ fontSize: 13 }}>
                      Specific delivery time to this product
                    </Typography>
                  }
                />
              </RadioGroup>
            </FormControl>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mt: "10px",
              }}
            >
              <Typography sx={{ width: "100%", fontSize: 13 }}>
                Delivery time of in-stock products:
              </Typography>
              <Typography sx={{ width: "100%", fontSize: 13, mr: 40 }}>
                Delivery time of out-of-stock products with allowed orders:
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mt: "10px",
              }}
            >
              <Typography sx={{ width: "100%", m: "0 10px 0 0" }}>
                <TextField
                  size='small'
                  width='100%'
                  id='outlined-multiline-static'
                  name='inStock'
                  defaultValue='Delivered within 3-4 days'
                  {...register("inStock", { required: true })}
                  error={errors.inStock}
                  InputProps={{
                    style: { fontSize: 13 },
                  }}
                />
              </Typography>
              <Typography sx={{ width: "100%", mr: 40 }}>
                <TextField
                  size='small'
                  width='100%'
                  name='outOfStock'
                  id='outlined-multiline-static'
                  defaultValue='Delivered within 5-7 days'
                  {...register("outOfStock", { required: true })}
                  error={errors.outOfStock}
                  InputProps={{
                    style: { fontSize: 13 },
                  }}
                />
              </Typography>
            </Box>

            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "bold",
                mt: "20px",
              }}
            >
              Shipping fees
              <Tooltip title={shipping}>
                <InfoIcon sx={{ fontSize: 12 }} />
              </Tooltip>
            </Typography>

            <Typography sx={{ mt: "10px", fontSize: 12 }}>
              Does this product incur additional shipping costs?
            </Typography>

            <Typography sx={{ mt: "10px" }}>
              <TextField
                size='small'
                id='outlined-start-adornment'
                name='fees'
                InputProps={{
                  style: { fontSize: 13 },
                  startAdornment: (
                    <InputAdornment position='start'>
                      <CurrencyRupeeIcon sx={{ fontSize: 15 }} />
                    </InputAdornment>
                  ),
                }}
                {...register("fees", {
                  required: true,
                })}
              />
            </Typography>

            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: "bold",
                mt: "30px",
              }}
            >
              Available carriers
            </Typography>

            <FormGroup
              sx={{ mt: "20px" }}
            // value={carrierAction}
            // onChange={onChangeCheck}
            >
              <FormControlLabel
                value='presta'
                control={
                  <Checkbox
                    size='smal'
                    checked={check1}
                    onChange={onchangeCheck1}
                    name='presta'
                  />
                }
                label={
                  <Typography sx={{ fontSize: 13 }}>
                    1 - PrestaShop (Pick up in-store)
                  </Typography>
                }
                {...register("CarrierAction1", {
                  required: false,
                })}
              />
              <FormControlLabel
                value='carrier'
                control={
                  <Checkbox
                    size='smal'
                    checked={check2}
                    onChange={onchangeCheck2}
                    name='carrier'
                  />
                }
                label={
                  <Typography sx={{ fontSize: 13 }}>
                    2 - My carrier (Delivery next day!)
                  </Typography>
                }
                {...register("CarrierAction2", {
                  required: false,
                })}
              />
              <FormControlLabel
                value='cheapCarrier'
                control={
                  <Checkbox
                    size='smal'
                    checked={check3}
                    onChange={onchangeCheck3}
                    name='cheapCarrier'
                  />
                }
                label={
                  <Typography sx={{ fontSize: 13 }}>
                    3 - My cheap carrier (Buy more to pay less!)
                  </Typography>
                }
                {...register("CarrierAction3", {
                  required: false,
                })}
              />
              <FormControlLabel
                value='litCar'
                control={
                  <Checkbox
                    size='smal'
                    checked={check4}
                    onChange={onchangeCheck4}
                    name='litCar'
                  />
                }
                label={
                  <Typography sx={{ fontSize: 13 }}>
                    4 - My light carrier (The lighter the cheaper!)
                  </Typography>
                }
                {...register("CarrierAction4", {
                  required: false,
                })}
              />
            </FormGroup>
            <Typography>
              <Box sx={{ display: "flex" }}>
                <Button
                  variant='contained'
                  sx={{ mt: 1, mb: 2, ml: "50rem" }}
                  type='submit'
                >
                  Save
                </Button>
              </Box>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>)}</>

  );
}
