import InfoIcon from "@mui/icons-material/Info";
import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { useForm } from "react-hook-form";
import FormGroup from "@mui/material/FormGroup";
import { useDispatch, useSelector } from "react-redux";
import { OPTIONS_SAVE_RESET } from "../constants/OptionConstants";
import { useEffect } from "react";
import { OptionListDetails, saveOptions, updateOptiondetail } from "../actions/OptionsActions";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useParams } from "../../node_modules/react-router-dom/dist/index";
import { useNavigate } from "../../node_modules/react-router-dom/dist/index";
DataGrid;
// import Card from "@mui/material/Card";
export default function OptionsScreen() {

  const params = useParams();
  const EditId = params.id;
  const navigate = useNavigate();

  const optionSave = useSelector((state) => state.optionSave);
  const { success: saveoption } = optionSave;

  const catalogProdView = useSelector((state) => state.catalogProdView);
  const { catProducts } = catalogProdView;

  const OptionList = useSelector((state) => state.OptionList);
  const { options } = OptionList;

  const optionsObj = options?.find((item) => item.mprodId === EditId)

  let productdata;
  {
    catProducts?.map((state) => {
      productdata = state?._id
    })
  }


  const [redirection, setredirection] = useState("10");

  const [check1, setcheck1] = useState(false);

  const [check2, setcheck2] = useState(false);
  const [check3, setcheck3] = useState(false);
  const onchangeCheck1 = (event) => {
    if (check1 === true) {
      setcheck1(event.target.checked);
    } else {
      setcheck1(event.target.checked);
    }
  };
  const onchangeCheck2 = (event) => {
    if (check2 === true) {
      setcheck2(event.target.checked);
    } else {
      setcheck2(event.target.checked);
    }
  };
  const onchangeCheck3 = (event) => {
    if (check3 === true) {
      setcheck3(event.target.checked);
    } else {
      setcheck3(event.target.checked);
    }
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    if (saveoption) {
      dispatch({ type: OPTIONS_SAVE_RESET });
    }
    dispatch(OptionListDetails());
  }, [saveoption]);
  const condition = `
Not all shops sell new products.
 This option enables you to indicate the condition of the product.
 It can be required on some marketplaces.
`;
  const dispatch = useDispatch();
  const OptionSaveDetail = (e) => {
    dispatch(
      saveOptions({
        mprodId: productdata,
        appearence: redirection,
        availableForOrders: check1,
        webonly: check2,
        Tag: e.tags,
        Condition: e.conditions,
        Display: check3,
        ISBN: e.isbn,
        EAN: e.ean,
        UPC: e.upc,
        MPN: e.mpn,
      })
    );
    window.confirm("Pricing Details Saved Successfully!!");
    event.target.reset();
    navigate("/product");
    setcheck1(false);
    setcheck2(false);
    setcheck3(false);
  };

  const [Editredirection, setEditredirection] = useState(optionsObj?.appearence);
  const [Edittag, setEdittag] = useState(optionsObj?.Tag);
  const [Editcondition, setEditcondition] = useState(optionsObj?.Condition);
  const [Editisbn, setEditisbn] = useState(optionsObj?.ISBN);
  const [Editean, setEditean] = useState(optionsObj?.EAN);
  const [Editupc, setEditupc] = useState(optionsObj?.UPC);
  const [Editmpn, setEditmpn] = useState(optionsObj?.MPN);

  const OptionUpdateDetail = () => {
    dispatch(
      updateOptiondetail({
        prodId: EditId,
        _id: optionsObj._id,
        appearence: Editredirection,
        availableForOrders: check1,
        webonly: check2,
        Tag: Edittag,
        Condition: Editcondition,
        Display: check3,
        ISBN: Editisbn,
        EAN: Editean,
        UPC: Editupc,
        MPN: Editmpn,
      })
    );
    window.confirm("Pricing Details update Successfully!!");
    event.target.reset();
    setcheck1(false);
    setcheck2(false);
    setcheck3(false);
    setEditredirection("");
    setEdittag("");
    setEditcondition("");
    setEditisbn("");
    setEditupc("");
    setEditmpn("");
    setEditean("");
  };
  return (
    <>
      {optionsObj ? (<>
        <Box component='form' onSubmit={handleSubmit(OptionUpdateDetail)}>
          <Grid container>
            <Grid item xs={12}>
              <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
                Visibility
              </Typography>
              <Typography sx={{ mt: "10px" }}>
                Where do you want your product to appear?
              </Typography>
              <Typography sx={{ width: "70%", mt: "10px" }}>
                <FormControl fullWidth sx={{ width: "40%" }}>
                  <InputLabel id='demo-simple-select-label'></InputLabel>
                  <Select
                    size='small'
                    labelId='demo-simple-select-label'
                    id='demo-simple-select'
                    value={Editredirection}
                    defaultValue={10}
                    onChange={(e) => setEditredirection(e.target.value)}
                  >
                    <MenuItem value={10}>Everywhere</MenuItem>
                    <MenuItem value={20}>Search only</MenuItem>
                    <MenuItem value={30}>Catelog Only</MenuItem>
                    <MenuItem value={40}>Nowhere</MenuItem>
                  </Select>
                </FormControl>
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                  width: "100%",
                }}
              >
                <Typography sx={{ mt: "10px", width: "100%" }}>
                  <FormGroup sx={{ mt: "10px" }}>
                    <FormControlLabel
                      value='availablity'
                      control={
                        <Checkbox
                          size='small'
                          checked={check1}
                          onChange={onchangeCheck1}
                          name='presta'
                        />
                      }
                      label=' Available for order'
                    // {...register("availablity", {
                    //   required: false,
                    // })}
                    />
                    <FormControlLabel
                      value='webonly'
                      control={
                        <Checkbox
                          size='small'
                          checked={check2}
                          onChange={onchangeCheck2}
                          name='webonly'
                        />
                      }
                      label='  Web only (not sold in your retail store)'
                    // {...register("webonly", {
                    //   required: false,
                    // })}
                    />
                  </FormGroup>
                </Typography>
              </Box>
              <Typography sx={{ mt: "10px" }}>
                <Typography>Tags</Typography>
                <TextField
                  size='small'
                  sx={{ width: "70%" }}
                  // select
                  fullWidth
                  margin='normal'
                  value={Edittag}
                  onChange={(e) => setEdittag(e.target.value)}
                ></TextField>
              </Typography>
              <Typography
                sx={{
                  mt: "10px",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                Condition & References
              </Typography>
              <Typography sx={{ mt: "10px" }}>
                Condition
                <Tooltip title={condition}>
                  <InfoIcon sx={{ fontSize: 12 }} />
                </Tooltip>
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                  width: "100%",
                }}
              >
                <Typography sx={{ mt: "10px", width: "100%" }}>
                  <TextField
                    size='small'
                    fullWidth
                    margin='normal'
                    value={Editcondition}
                    onChange={(e) => setEditcondition(e.target.value)}
                  ></TextField>
                </Typography>
                <Typography
                  sx={{
                    mt: "20px",
                    wordWrap: "break-word",
                    width: "100%",
                    fontSize: "15px",
                  }}
                >
                  {/* <Checkbox
                value="newcheck"
                checked={check3}
                onChange={onchangeCheck3}
                {...register("newcheck", {
                  required: false,
                })}
              />{" "}
              Display condition on product page
            </Typography>
          </Box> */}
                  <Typography sx={{ mt: "10px", width: "100%", ml: 5 }}>
                    <FormGroup sx={{ mt: "10px" }}>
                      <FormControlLabel
                        value='newcheck'
                        control={
                          <Checkbox
                            size='small'
                            checked={check3}
                            onChange={onchangeCheck3}
                            name='newcheck'
                          />
                        }
                        label='  Display condition on product page'
                      // {...register("newcheck", {
                      //   required: false,
                      // })}
                      />
                    </FormGroup>
                  </Typography>
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                  width: "80%",
                  mt: "10px",
                }}
              >
                <Typography>ISBN</Typography>
                <Typography sx={{ mr: 5 }}>EAN-13 or JAN barcode</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                  width: "80%",
                }}
              >
                <Typography>
                  <TextField
                    size='small'
                    fullWidth
                    margin='normal'
                    value={Editisbn}
                    onChange={(e) => setEditisbn(e.target.value)}
                  ></TextField>
                </Typography>
                <Typography>
                  <TextField
                    size='small'
                    fullWidth
                    margin='normal'
                    value={Editean}
                    onChange={(e) => setEditean(e.target.value)}
                  ></TextField>
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                  width: "80%",
                  mt: "10px",
                }}
              >
                <Typography>UPC barcode</Typography>
                <Typography sx={{ mr: 23 }}>MPN</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                  width: "80%",
                }}
              >
                <Typography>
                  <TextField
                    size='small'
                    fullWidth
                    margin='normal'
                    value={Editupc}
                    onChange={(e) => setEditupc(e.target.value)}
                  ></TextField>
                </Typography>
                <Typography>
                  <TextField
                    size='small'
                    fullWidth
                    margin='normal'
                    value={Editmpn}
                    onChange={(e) => setEditmpn(e.target.value)}
                  ></TextField>
                </Typography>
              </Box>
              <Typography>
                <Button
                  type='submit'
                  sx={{ mt: "20px", ml: "50rem" }}
                  variant='contained'
                >
                  Update
                </Button>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </>) : (<>
        <Box component='form' onSubmit={handleSubmit(OptionSaveDetail)}>
          <Grid container>
            <Grid item xs={12}>
              <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
                Visibility
              </Typography>
              <Typography sx={{ mt: "10px" }}>
                Where do you want your product to appear?
              </Typography>
              <Typography sx={{ width: "70%", mt: "10px" }}>
                <FormControl fullWidth sx={{ width: "40%" }}>
                  <InputLabel id='demo-simple-select-label'></InputLabel>
                  <Select
                    size='small'
                    labelId='demo-simple-select-label'
                    id='demo-simple-select'
                    value={redirection}
                    defaultValue={10}
                    onChange={(e) => setredirection(e.target.value)}
                  >
                    <MenuItem value={10}>Everywhere</MenuItem>
                    <MenuItem value={20}>Search only</MenuItem>
                    <MenuItem value={30}>Catelog Only</MenuItem>
                    <MenuItem value={40}>Nowhere</MenuItem>
                  </Select>
                </FormControl>
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                  width: "100%",
                }}
              >
                <Typography sx={{ mt: "10px", width: "100%" }}>
                  <FormGroup sx={{ mt: "10px" }}>
                    <FormControlLabel
                      value='availablity'
                      control={
                        <Checkbox
                          size='small'
                          checked={check1}
                          onChange={onchangeCheck1}
                          name='presta'
                        />
                      }
                      label=' Available for order'
                      {...register("availablity", {
                        required: false,
                      })}
                    />
                    <FormControlLabel
                      value='webonly'
                      control={
                        <Checkbox
                          size='small'
                          checked={check2}
                          onChange={onchangeCheck2}
                          name='webonly'
                        />
                      }
                      label='  Web only (not sold in your retail store)'
                      {...register("webonly", {
                        required: false,
                      })}
                    />
                  </FormGroup>
                </Typography>
              </Box>
              <Typography sx={{ mt: "10px" }}>
                <Typography>Tags</Typography>
                <TextField
                  size='small'
                  sx={{ width: "70%" }}
                  // select
                  fullWidth
                  id='margin-normal'
                  margin='normal'
                  {...register("tags", { required: true })}
                  error={errors.tags}
                ></TextField>
              </Typography>
              <Typography
                sx={{
                  mt: "10px",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                Condition & References
              </Typography>
              <Typography sx={{ mt: "10px" }}>
                Condition
                <Tooltip title={condition}>
                  <InfoIcon sx={{ fontSize: 12 }} />
                </Tooltip>
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                  width: "100%",
                }}
              >
                <Typography sx={{ mt: "10px", width: "100%" }}>
                  <TextField
                    size='small'
                    fullWidth
                    id='margin-normal'
                    margin='normal'
                    {...register("conditions", { required: true })}
                    error={errors.conditions}
                  ></TextField>
                </Typography>
                <Typography
                  sx={{
                    mt: "20px",
                    wordWrap: "break-word",
                    width: "100%",
                    fontSize: "15px",
                  }}
                >
                  {/* <Checkbox
                value="newcheck"
                checked={check3}
                onChange={onchangeCheck3}
                {...register("newcheck", {
                  required: false,
                })}
              />{" "}
              Display condition on product page
            </Typography>
          </Box> */}
                  <Typography sx={{ mt: "10px", width: "100%", ml: 5 }}>
                    <FormGroup sx={{ mt: "10px" }}>
                      <FormControlLabel
                        value='newcheck'
                        control={
                          <Checkbox
                            size='small'
                            checked={check3}
                            onChange={onchangeCheck3}
                            name='newcheck'
                          />
                        }
                        label='  Display condition on product page'
                        {...register("newcheck", {
                          required: false,
                        })}
                      />
                    </FormGroup>
                  </Typography>
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                  width: "80%",
                  mt: "10px",
                }}
              >
                <Typography>ISBN</Typography>
                <Typography sx={{ mr: 5 }}>EAN-13 or JAN barcode</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                  width: "80%",
                }}
              >
                <Typography>
                  <TextField
                    size='small'
                    fullWidth
                    id='margin-normal'
                    margin='normal'
                    {...register("isbn", { required: true })}
                    error={errors.isbn}
                  ></TextField>
                </Typography>
                <Typography>
                  <TextField
                    size='small'
                    fullWidth
                    id='margin-normal'
                    margin='normal'
                    {...register("ean", { required: true })}
                    error={errors.ean}
                  ></TextField>
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                  width: "80%",
                  mt: "10px",
                }}
              >
                <Typography>UPC barcode</Typography>
                <Typography sx={{ mr: 23 }}>MPN</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                  width: "80%",
                }}
              >
                <Typography>
                  <TextField
                    size='small'
                    fullWidth
                    id='margin-normal'
                    margin='normal'
                    {...register("upc", { required: true })}
                    error={errors.upc}
                  ></TextField>
                </Typography>
                <Typography>
                  <TextField
                    size='small'
                    fullWidth
                    id='margin-normal'
                    margin='normal'
                    {...register("mpn", { required: true })}
                    error={errors.mpn}
                  ></TextField>
                </Typography>
              </Box>
              <Typography>
                <Button
                  type='submit'
                  sx={{ mt: "20px", ml: "50rem" }}
                  variant='contained'
                >
                  Save
                </Button>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </>)}

    </>
  );
}
