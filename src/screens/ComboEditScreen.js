/* eslint-disable no-unused-vars */
import React from "react";
import { Box, Typography } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import InfoIcon from "@mui/icons-material/Info";
import TextField from "@mui/material/TextField";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import { ComboDetails, CombotaxDetails } from "../actions/ComboAction";
import {
  COMBO_SAVE_RESET,
  COMBO_UPDATE_RESET,
} from "../constants/ComboConstants";
import { useEffect } from "react";
import { CombinationChildList } from "../actions/catProductAction";
import { useNavigate } from "../../node_modules/react-router-dom/dist/index";
import CardMedia from "@mui/material/CardMedia";
import { Checkbox } from "../../node_modules/@material-ui/core/index";
import Axios from "axios";

export default function ComboEditScreen() {
  const quantity = ` How many products should be available for sale?`;
  const params = useParams();
  const dispatch = useDispatch();
  const EditId = params.id;
  const { id: CombinationId } = params;
  const navigate = useNavigate();
  const ComboSave = useSelector((state) => state.ComboSave);
  const { success: combodetails } = ComboSave;
  const ComboUpdate = useSelector((state) => state.ComboUpdate);
  const { success: updatedetails } = ComboUpdate;
  const Combinationchild = useSelector((state) => state.Combinationchild);
  const { childComination } = Combinationchild;
  const comboTax = useSelector((state) => state.comboTax);
  const { combotax } = comboTax;
  // let pricePer = pricingSave?.find((x) => x._id === EditId);

  const combo = childComination?.find((x) => x._id === EditId)?.comstock;
  const combo1 = childComination?.find((x) => x._id === EditId);
  // const combo2 = combotax?.find((x) => x.productId === combo1.CombinationId);

  let taxRate;
  const combotaxvalue = combotax
    ?.filter((item) => {
      return item?.productId === combo1?.CombinationId;
    })
    ?.map((item) => {
      taxRate = item.Rate;
    });

  const [taxout1, settaxout1] = useState("");

  const [Editquentity, setEditquentity] = useState(combo1?.comstock);
  const [EditCost, setEditCost] = useState(combo1?.Cost);
  const [Edittaxexclude, setEdittaxexclude] = useState(combo1?.taxexclude);

  let taxinclude = (EditCost / 100) * taxRate + parseInt(EditCost);

  const [taxout, settaxout] = useState(combodetails?.taxin);
  const [costPrice, setcostPrice] = useState(combodetails?.setcostPrice);
  const [Savequentity, setSavequentity] = useState(combo);
  // const [check1, setcheck1] = useState(false);

  const [subimg, setSubImage] = useState();
  const [images, setImage] = useState();

  const [checked, setChecked] = useState();
  const onchangeCheck1 = (event, i) => {
    setChecked(i);
    setImage(event);
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const setpercentage = (e) => {
    settaxout1(e.target.value);
  };
  const saveCombination = (e) => {
    if (combo1?.comcheck === true) {
      dispatch(
        ComboDetails({
          id: EditId,
          Cost: EditCost,
          // taxexclude: Edittaxexclude,
          taxinclude: taxinclude,
          // finalPrice: finalPrice,
          qty: Editquentity,
          item: images,
        })
      );
      window.confirm("Combination Details Updated Successfully!!");
      event.target.reset();
      navigate("/product");
    } else {
      dispatch(
        ComboDetails({
          id: EditId,
          Cost: e.costPrice,
          // taxexclude: taxout1,
          // taxinclude: one,
          // finalPrice: two,
          qty: Savequentity,
        })
      );
      window.confirm("Combination Details Saved Successfully!!");
      event.target.reset();
      settaxout1("");
      settaxout("");
      setcostPrice("");
      setSavequentity("");
      navigate("/productadd");
    }
  };

  useEffect(() => {
    const fetchBusines = async () => {
      const subimg = await Axios.get(`/api/uploads/sub/${CombinationId}`, {});
      setSubImage(subimg.data);
    };
    fetchBusines();

    if (combodetails) {
      dispatch({ type: COMBO_SAVE_RESET });
    }
    if (updatedetails) {
      dispatch({ type: COMBO_UPDATE_RESET });
    }
    dispatch(CombotaxDetails());
    dispatch(CombinationChildList());
  }, [combodetails, updatedetails]);
  return (
    <>
      {combo1?.comcheck === true ? (
        <>
          <Box>
            <Breadcrumbs
              separator={<NavigateNextIcon fontSize='small' />}
              aria-label='breadcrumb'
            >
              <Link
                to='/'
                style={{
                  color: "rgba(0, 0, 0, 0.6)",
                  fontSize: "15px",
                }}
              >
                <Typography>Home</Typography>
              </Link>
              <Link
                to='/product'
                style={{ color: "rgba(0, 0, 0, 0.6)", fontSize: "15px" }}
              >
                <Typography>Combination</Typography>
              </Link>
              <Typography>Add Combination</Typography>
            </Breadcrumbs>
            <Divider
              fullWidth
              sx={{ backgroundColor: "#000000", mt: 3 }}
              showlabels='true'
            />
            <Box>
              <Box onSubmit={handleSubmit(saveCombination)} component='form'>
                <Typography
                  sx={{
                    mt: "20px",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  Quantity
                  <Tooltip title={quantity}>
                    <InfoIcon />
                  </Tooltip>
                </Typography>
                <Typography>
                  <TextField
                    sx={{ width: "50%" }}
                    fullWidth
                    id='quantity'
                    margin='normal'
                    value={Editquentity}
                    onChange={(e) => setEditquentity(e.target.value)}
                  />
                </Typography>
                <Box sx={{ mt: 5 }}>Price</Box>
                <Box sx={{ display: "flex", mt: 5 }}>
                  <Typography sx={{ ml: 2 }}>CostPrice(without tax)</Typography>

                  <Typography sx={{ ml: 30 }}>CostPrice(with tax)</Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mt: "30px",
                    height: 100,
                    width: "70%",
                  }}
                >
                  <TextField
                    sx={{ width: "50%", ml: 1 }}
                    inputProps={{ style: { fontSize: 14 } }}
                    size='small'
                    margin='normal'
                    fullWidth
                    id='costPrice'
                    name='costPrice'
                    autoComplete='costPrice'
                    autoFocus
                    value={EditCost}
                    onChange={(e) => setEditCost(e.target.value)}
                  />

                  <TextField
                    sx={{ width: "50%", ml: 2 }}
                    inputProps={{ style: { fontSize: 14 } }}
                    size='small'
                    margin='normal'
                    fullWidth
                    id='taxin'
                    name='taxin'
                    autoComplete='taxin'
                    autoFocus
                    value={taxinclude}
                  />
                </Box>
                Images
                <Box
                  sx={{
                    display: "flex",
                    justifycontent: "space-between",
                    mt: 3,
                  }}
                >
                  {subimg?.map((subimglatest, index) => (
                    <Box key={index}>
                      <CardMedia
                        sx={{
                          border: "2px solid gray",
                          margin: 1,
                          width: { xs: 60, sm: 120 },
                          height: { xs: 90, sm: 150 },
                          justifycontent: "space-between",
                        }}
                        component='img'
                        // height="200"
                        image={`/api/uploads/showsubimglatest/${subimglatest.filename}`}
                        alt={"subimglatest.filename"}
                      />
                      <Checkbox
                        checked={checked === index}
                        color='primary'
                        onChange={() => {
                          onchangeCheck1(subimglatest.filename, index);
                        }}
                        id={subimglatest._id}
                        name={subimglatest._id}
                      />
                    </Box>
                  ))}
                </Box>
                <Box>
                  <Button
                    sx={{
                      mt: "60px",
                      boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2);",
                      ml: 50,
                    }}
                    type='submit'
                    variant='contained'
                  >
                    Update
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </>
      ) : (
        <>
          <Box>
            <Box>
              <Breadcrumbs
                separator={<NavigateNextIcon fontSize='small' />}
                aria-label='breadcrumb'
              >
                <Link
                  to='/'
                  style={{
                    color: "rgba(0, 0, 0, 0.6)",
                    fontSize: "15px",
                  }}
                >
                  <Typography>Home</Typography>
                </Link>
                <Link
                  to='/productadd'
                  style={{ color: "rgba(0, 0, 0, 0.6)", fontSize: "15px" }}
                >
                  <Typography>Combination</Typography>
                </Link>
                <Typography>Add Combination</Typography>
              </Breadcrumbs>
              <Divider
                fullWidth
                sx={{ backgroundColor: "#000000", mt: 3 }}
                showlabels='true'
              />
              <Box onSubmit={handleSubmit(saveCombination)} component='form'>
                <Typography
                  sx={{
                    mt: "20px",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  Quantity
                  <Tooltip title={quantity}>
                    <InfoIcon />
                  </Tooltip>
                </Typography>
                <Typography>
                  <TextField
                    sx={{ width: "50%" }}
                    fullWidth
                    id='quantity'
                    margin='normal'
                    value={Savequentity}
                    onChange={(e) => setSavequentity(e.target.value)}
                  />
                </Typography>
                <Box sx={{ mt: 5 }}>Price</Box>
                <Box sx={{ display: "flex", mt: 5, ml: 1 }}>
                  <Typography sx={{ ml: 2 }}>CostPrice</Typography>

                  <Typography sx={{ ml: "10rem" }}>
                    Impact on price (tax.incl.)
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mt: "30px",
                    height: 100,
                    width: "50%",
                  }}
                >
                  <TextField
                    sx={{ width: "50%", ml: 1 }}
                    inputProps={{ style: { fontSize: 14 } }}
                    size='small'
                    margin='normal'
                    fullWidth
                    id='costPrice'
                    name='costPrice'
                    autoComplete='costPrice'
                    autoFocus
                    {...register("costPrice", { required: true })}
                    error={errors?.costPrice}
                  />

                  <TextField
                    sx={{ width: "50%", ml: "2rem" }}
                    inputProps={{ style: { fontSize: 14 } }}
                    size='small'
                    margin='normal'
                    fullWidth
                    id='taxin'
                    name='taxin'
                    autoComplete='taxin'
                    autoFocus
                    value={taxinclude}
                    // onChange={(e) => settaxin(e.target.value)}
                    // onChange={settaxin}
                    {...register("taxin", { required: true })}
                    error={errors?.taxin}
                  />
                  {errors.taxin && (
                    <span className='formError'>
                      Impact On Price is required
                    </span>
                  )}
                </Box>
                <Box>Images</Box>
                <Box
                  sx={{
                    display: "flex",
                    justifycontent: "space-between",
                    mt: 3,
                  }}
                >
                  {/* <CardMedia
                    component="img"
                    sx={{
                      border: "2px solid gray",
                      cursor: "pointer",
                      margin: 3,
                      width: 120,
                      height: 150,
                      justifycontent: "space-between",
                    }}
                    image={`/api/uploads/showcombimg/${CombinationId}`}
                  /> */}
                  {subimg?.map((subimglatest, index) => (
                    <Box key={index}>
                      <CardMedia
                        sx={{
                          border: "2px solid gray",
                          margin: 1,
                          width: { xs: 60, sm: 120 },
                          height: { xs: 90, sm: 150 },
                          justifycontent: "space-between",
                        }}
                        component='img'
                        // height="200"
                        image={`/api/uploads/showsubimglatest/${subimglatest.filename}`}
                        alt={"subimglatest.filename"}
                      />
                      <Checkbox
                        checked={checked === index}
                        color='primary'
                        onChange={() => {
                          onchangeCheck1(subimglatest.filename, index);
                        }}
                        id={subimglatest._id}
                        name={subimglatest._id}
                      />
                    </Box>
                  ))}
                </Box>
                <Box>
                  <Button
                    sx={{
                      mt: "60px",
                      boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2);",
                      ml: 50,
                    }}
                    type='submit'
                    variant='contained'
                  >
                    Save
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>{" "}
        </>
      )}
    </>
  );
}
