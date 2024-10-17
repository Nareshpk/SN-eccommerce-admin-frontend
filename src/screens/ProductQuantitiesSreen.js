import InfoIcon from "@mui/icons-material/Info";
import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";

import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";
import { useEffect, useState } from "react";
//import { DataGrid } from '@mui/x-data-grid';
//import { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "../../node_modules/react-router-dom/dist/index";
import { QuantityListDetails, quantityDetail, updateQuantitydetail } from "../actions/ProductQuantitiesAction";
import { catProductViewList } from "../actions/catProductAction";
import { PRODUCT_QUANTITIES_RESET, PRODUCT_QUANTITIES_UPDATE_RESET } from "../constants/productQuantitiesConstands";

//import { PRODUCT_QUANTITIES_RESET } from '../constants/productQuantitiesConstands';
// DataGrid;

// import Card from "@mui/material/Card";

// import Card from "@mui/material/Card";
export default function ProductQuantitiesSreen() {
  const sale = `
The minimum quantity required to buy this product (set to 1 to disable this feature).
 E.g.: if set to 3,
 customers will be able to purchase the product only if they take at least 3 in quantity.
`;


  const params = useParams();
  const EditId = params.id;
  // console.log(" EditId======>", EditId)

  // const navigate = useNavigate();
  const QuantitiesSave = useSelector((state) => state.QuantitiesSave);
  const { success: QtySave } = QuantitiesSave;

  const QuantityUpdate = useSelector((state) => state.QuantityUpdate);
  const { success: updatequantity } = QuantityUpdate;

  const QuantityList = useSelector((state) => state.QuantityList);
  const { quantity } = QuantityList;
  console.log('quantity', quantity);

  const quantityObj = quantity?.find((item) => item?.mprodId === EditId);

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
  // console.log("catProducts======>", catProducts)

  const [EditQuantiry, setEditQuantiry] = useState(quantityObj?.Qty);
  const [EditMinQuantiry, setEditMinQuantiry] = useState(quantityObj?.minQty);

  const dispatch = useDispatch();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const saveQtyDetails = (e) => {
    // console.log("e=========================", e);
    dispatch(
      quantityDetail({
        mprodId: productdata,
        Qty: e.qty,
        minQty: e.mqty,
        // stoLoc: e.SLocation,
        // stolev: e.slevel,
        // orderAction: orderAction,
        // mailInfo: checked,
        // date: e.date,
        // stoIn: e.stockin,
        // stoOut: e.stockout,
      })
    );
    window.confirm("Quantity Details Saved Successfully!!");
    event.target.reset();
    // setorderAction("");
    // setchecked(false);
    // navigate("/product");
  };

  const updateQtyDetails = async () => {
    dispatch(
      updateQuantitydetail({
        _id: quantityObj._id,
        Qty: EditQuantiry,
        minQty: EditMinQuantiry,
        prodId: EditId,
        productId: productId,
      })
    );
    window.confirm("Quantity Details Update Successfully!!");
    event.target.reset();
    setEditQuantiry("");
    setEditMinQuantiry("");
    // navigate("/countrygrid");
  }

  useEffect(() => {
    if (QtySave) {
      dispatch({ type: PRODUCT_QUANTITIES_RESET });
    }
    if (updatequantity) {
      dispatch({ type: PRODUCT_QUANTITIES_UPDATE_RESET })
    }
    dispatch(catProductViewList());
    dispatch(QuantityListDetails());
  }, [dispatch, QtySave, updatequantity]);

  // const [orderAction, setorderAction] = useState("");
  // const [checked, setchecked] = useState(false);

  return (
    <>{quantityObj ? (<><Grid container spacing={2}>
      <Grid item xs={12}>
        <Box onSubmit={handleSubmit(updateQtyDetails)} component='form'>
          <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
            Quantities
          </Typography>

          <Grid item xs={6}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography sx={{ mt: "20px", fontSize: 14 }}>
                Quantity
              </Typography>

              <Typography sx={{ mt: "20px", fontSize: 14, mr: 3 }}>
                Minimum quantity for sale
                <Tooltip title={sale}>
                  <InfoIcon sx={{ fontSize: 12 }} />
                </Tooltip>
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Typography sx={{ mt: "10px" }}>
                <TextField
                  size='small'
                  margin='normal'
                  autoComplete='off'
                  value={EditQuantiry}
                  onChange={(e) => setEditQuantiry(e.target.value)}
                />
              </Typography>
              <Typography sx={{ mt: "10px" }}>
                <TextField
                  size='small'
                  margin='normal'
                  autoComplete='off'
                  value={EditMinQuantiry}
                  onChange={(e) => setEditMinQuantiry(e.target.value)}
                />
                {errors.mqty && (
                  <span className='formError'>
                    Minimum quantity is required
                  </span>
                )}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mt: "-60px",
              }}
            >
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
            </Box>
          </Grid>
        </Box>
      </Grid>
    </Grid></>) : (<>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box onSubmit={handleSubmit(saveQtyDetails)} component='form'>
            <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
              Quantities
            </Typography>

            <Grid item xs={6}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography sx={{ mt: "20px", fontSize: 14 }}>
                  Quantity
                </Typography>

                <Typography sx={{ mt: "20px", fontSize: 14, mr: 3 }}>
                  Minimum quantity for sale
                  <Tooltip title={sale}>
                    <InfoIcon sx={{ fontSize: 12 }} />
                  </Tooltip>
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Typography sx={{ mt: "10px" }}>
                  <TextField
                    size='small'
                    margin='normal'
                    id='qty'
                    name='qty'
                    autoComplete='off'
                    {...register("qty", { required: true })}
                    error={errors.qty}
                  />
                  {errors.qty && (
                    <span className='formError'>qty is required</span>
                  )}
                </Typography>
                <Typography sx={{ mt: "10px" }}>
                  <TextField
                    size='small'
                    margin='normal'
                    id='categoryTittel'
                    name='mqty'
                    autoComplete='off'
                    {...register("mqty", { required: true })}
                    error={errors.mqty}
                  />
                  {errors.mqty && (
                    <span className='formError'>
                      Minimum quantity is required
                    </span>
                  )}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mt: "-60px",
                }}
              >
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
              </Box>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </>)}

    </>
  );
}
