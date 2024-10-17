/* eslint-disable no-unused-vars */
import Grid from "@mui/material/Grid";
import React, { useEffect, useState } from "react";
// import Breadcrumbs from "@mui/material/Breadcrumbs";
// import { Link } from "react-router-dom";
// import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
// import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Box from "@mui/material/Box";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Checkbox from "@mui/material/Checkbox";
import CssBaseline from "@mui/material/CssBaseline";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormLabel from "@mui/material/FormLabel";
import InputAdornment from "@mui/material/InputAdornment";
import MenuItem from "@mui/material/MenuItem";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Axios from "axios";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { genSettingList } from "../actions/GeneralAction";
import { ZoneListDetails } from "../actions/ZoneAction";
import {
  ShippingAllList,
  ShippingList,
  shippingDetails,
  updateShippingDetails,
} from "../actions/shippingLocAction";
import {
  SHIPPING_SAVE_RESET,
  SHIPPING_UPDATE_RESET,
} from "../constants/shippingLocConstants";
import "./breadcrumb.css";
// import Card from "@mui/material/Card";
export default function ShippingLocationAndCosts() {
  const params = useParams();
  const AttId = params.id;

  const shippinglist = useSelector((state) => state.shippinglist);
  const { success: shippingdetail } = shippinglist;

  const ShippingviewList = useSelector((state) => state.ShippingviewList);
  const { shippingdata } = ShippingviewList;

  const ZoneList = useSelector((state) => state.ZoneList);
  const { zonedatum } = ZoneList;

  //**************************ALL LIST FOR THIS SCREEN*****************/
  const shiploccostallList = useSelector((state) => state.shiploccostallList);
  const { shippinglistdata } = shiploccostallList;

  const freeShippingUpdate = useSelector((state) => state.freeShippingUpdate);
  const { success: freeShipping } = freeShippingUpdate;

  const freeshipdata = shippinglistdata?.find((x) => x.preId === AttId)
    ? shippinglistdata?.find((x) => x.preId === AttId)
    : undefined;
  // this.handlemethod(freeshipdata)

  // const freeshipdataa = shippinglistdata?.find((x) => x.preId = AttId);

  let undefineddata;
  if (freeshipdata == undefined) {
    undefineddata = true;
  }

  const [field1, setField1] = useState(freeshipdata?.test, {});
  const [field, setField] = useState([]);
  const [add, setAdd] = useState(0);

  function fieldgrid() {
    if (freeshipdata?.test?.length > 0) {
      setField([...freeshipdata.test]);
    } else {
      setField([{}]);
    }
  }

  const addField = () => {
    setField([...field, {}]);
    setAdd(1);
  };

  const removeField = (index) => {
    const values = [...field];
    values.pop();
    setField(values);
  };

  let viewdata;
  {
    shippingdata?.map((item) => {
      viewdata = item;
    });
  }

  const generallist = useSelector((state) => state.generallist);
  const { generaldata } = generallist;

  let dataype;
  {
    generaldata?.map((item) => {
      dataype = item;
    });
  }

  const [id, setId] = useState(dataype?._id);

  const [isCheck, setIsCheck] = useState([]);
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm({
    defaultValues: {
      test: freeshipdata?.test
        ? freeshipdata?.test
        : [
            {
              range1: "",
              range2: "",
              range3: "",
              Homecities: freeshipdata?.zoneName,
            },
          ],
    },
  });

  const [EditBehaviour, setEditBehaviour] = useState(freeshipdata?.tax);
  const [EditCombination, setEditCombination] = useState(freeshipdata?.title);
  const [Editchecked, setEditchecked] = useState(freeshipdata?.checked);
  const [zoneEditId, setzoneEditId] = useState(freeshipdata?.ZoneId);

  const [checked, setChecked] = useState();
  const handleChangeChekced = (event) => {
    setChecked(event.target.checked);
  };
  const handleChangeChekced1 = (event) => {
    setEditchecked(event.target.checked);
  };

  const [behaviour, setBehaviour] = useState("");
  const navigate = useNavigate();
  const [, setNext] = useState(0);
  const [Finish, setFinish] = useState(0);
  const dispatch = useDispatch();
  const [combination, setCombination] = useState("According to total price");
  const handlechangeradio = (event) => {
    if (combination == "According to total price") {
      setCombination(event.target.value);
    } else {
      setCombination(event.target.value);
    }
  };

  const onPreviousChange1 = () => {
    navigate(`/logistic/${AttId}`);
  };
  useEffect(() => {
    fieldgrid();
    const fetchBusinesses = async () => {
      const { data } = await Axios.get(`/api/generaldetails/generallist`);

      setId(data[0]._id);
    };
    fetchBusinesses();
    dispatch(genSettingList());
    dispatch(ZoneListDetails());
    dispatch(ShippingList());
    dispatch(ShippingAllList());

    if (freeShipping) {
      dispatch({ type: SHIPPING_UPDATE_RESET });
    }
    if (shippingdetail) {
      dispatch({ type: SHIPPING_SAVE_RESET });
    }
  }, [dispatch]);

  const [zone, setZone] = useState([]);
  const handleChange = (e, item) => {
    if (e.target.checked === true) {
      setZone([...zone, item._id]);
    }
  };

  const [Amount, setAmount] = useState([]);
  const [Range1, setRange1] = useState();
  const [Range2, setRange2] = useState();
  const handleChangeRange1 = (event) => {
    setRange1(event.target.value);
  };
  const handleChangeRange2 = (event) => {
    setRange2(event.target.value);
  };
  const [events, setevents] = useState("");
  let itemaaa;
  const handleChanges = (event, k, j, value) => {
    var output = [];
    Amount?.forEach(function (item, key) {
      itemaaa = key;
    });
    Amount[itemaaa].amount = event;
  };

  const handleChangeInputs = (event, property, i) => {
    const value = Number(event, i);
    setAmount([
      ...Amount,
      {
        ["id"]: property[i]._id,
        ["amount"]: "",
        ["range1"]: Range1,
        ["range2"]: Range2,
      },
    ]);
  };

  const SaveshipDetails = (e) => {
    if (Finish === 1) {
      dispatch(
        shippingDetails({
          preId: freeshipdata == undefined ? AttId : dataype?._id,
          checked: checked,
          tax: behaviour,
          title: combination,
          test: Amount,
          ZoneId: zone,
        })
      );
      window.confirm("Details Saved Successfully!!");
      event.target.reset();
      navigate("/logicGrid");
      setNext(0);
      setFinish(0);
    } else {
      dispatch(
        shippingDetails({
          preId: freeshipdata == undefined ? AttId : dataype?._id,
          checked: checked,
          tax: behaviour,
          title: combination,
          test: Amount,
          ZoneId: zone,
        })
      );

      {
        freeshipdata == undefined
          ? navigate(`/sizeweightgroup/${AttId}`)
          : navigate(`/sizeweightgroup/${1}`);
      }
      setNext(0);
      setFinish("");
    }
  };

  const UpdateshipDetails = (data, index) => {
    let item;
    if (field.length < data.test.length) {
      item = data.test.splice(index, 1);
    } else {
      item = data.test;
    }

    if (Finish === 1) {
      dispatch(
        updateShippingDetails({
          id: freeshipdata?._id,
          preId: AttId,
          checked: Editchecked,
          tax: EditBehaviour,
          title: EditCombination,
          test: item,
          ZoneId: zoneEditId,
        })
      );
      window.confirm("Details Updated Successfully!!");
      navigate("/logicGrid");
      event.target.reset();
      //   setAttribute(0);
      setNext(0);
      setFinish(0);
    } else {
      dispatch(
        updateShippingDetails({
          id: freeshipdata?._id,
          preId: AttId,
          checked: Editchecked,
          tax: EditBehaviour,
          title: EditCombination,
          test: item,
          ZoneId: zoneEditId,
        })
      );

      navigate(`/sizeweightgroup/${AttId}`);
      setNext(0);
      setFinish("");
      setzoneEditId("");
    }
  };
  return (
    <>
      {freeshipdata != undefined && AttId != 1 ? (
        <>
          {" "}
          <Box>
            <Grid container>
              <Grid item xs={12}>
                <React.Fragment>
                  <CssBaseline />
                  <Box
                    variant='outlined'
                    onSubmit={handleSubmit(UpdateshipDetails)}
                    sx={{
                      boxShadow: 3,
                      width: "60rem",
                      height: "50rem",
                      bgcolor: (theme) =>
                        theme.palette.mode === "dark" ? "#101010" : "#fff",
                      color: (theme) =>
                        theme.palette.mode === "dark" ? "grey.300" : "grey.800",
                      p: 1,
                      m: 1,
                      ml: 2,
                      mt: 0,
                      borderRadius: 2,
                      textAlign: "center",
                      fontSize: "0.875rem",
                      fontWeight: "00",
                    }}
                    component='form'
                  >
                    <Box>
                      <Breadcrumbs aria-label='breadcrumb flat'>
                        <div className='breadcrumb flat'>
                          <Link to='/logicGrid'>Carriers</Link>
                          <Link to={`/logistic/${AttId}`}>
                            General Settings
                          </Link>
                          <Link to='/costAndShip' className='active'>
                            Shipping locations and costs
                          </Link>
                          <Link to={`/sizeweightgroup/${AttId}`}>
                            Size,weight and group access
                          </Link>
                          <Link to={`/summary/${AttId}`}>Summary</Link>
                        </div>
                      </Breadcrumbs>
                    </Box>

                    <Box
                      sx={{
                        boxShadow: 3,
                        width: "57rem",
                        height: "40rem",
                        bgcolor: (theme) =>
                          theme.palette.mode === "dark" ? "#101010" : "#fff",
                        color: (theme) =>
                          theme.palette.mode === "dark"
                            ? "grey.300"
                            : "grey.800",
                        p: 1,
                        m: 1,
                        ml: 2,
                        mt: 4,
                        borderRadius: 2,
                        textAlign: "left",
                        fontSize: "0.875rem",
                        fontWeight: "700",
                      }}
                    >
                      <FormControlLabel
                        label={
                          <Typography
                            sx={{ m: 1, ml: 31, fontSize: "0.875rem" }}
                          >
                            {" "}
                            Free shipping
                          </Typography>
                        }
                        control={
                          <Switch
                            sx={{ ml: 2 }}
                            checked={Editchecked}
                            onChange={handleChangeChekced1}
                          />
                        }
                        labelPlacement='start'
                      />

                      <Box sx={{ textAlign: "left" }}>
                        <FormControl>
                          <FormLabel id='demo-radio-buttons-group-label'>
                            <Typography
                              sx={{ m: 0, ml: 40, fontSize: "0.875rem" }}
                            >
                              Billing
                            </Typography>
                          </FormLabel>
                          <RadioGroup
                            aria-labelledby='demo-radio-buttons-group-label'
                            name='radio-buttons-group'
                            value={EditCombination}
                            onChange={(e) => setEditCombination(e.target.value)}
                          >
                            <FormControlLabel
                              value='According to total price'
                              control={<Radio size='small' name='totalprice' />}
                              label={
                                <Typography sx={{ fontSize: 13 }}>
                                  According to total price
                                </Typography>
                              }
                              sx={{ m: 0, ml: 48, fontSize: "1rem", mt: -3.5 }}
                            />
                            <FormControlLabel
                              value=' According to total weight'
                              control={
                                <Radio size='small' name='totalweight' />
                              }
                              sx={{ m: 0, ml: 48, fontSize: "1rem" }}
                              label={
                                <Typography sx={{ fontSize: 13 }}>
                                  According to total weight
                                </Typography>
                              }
                            />
                          </RadioGroup>
                        </FormControl>
                      </Box>

                      <Box sx={{ display: "flex", ml: 25, mt: 1 }}>
                        <Typography sx={{ fontSize: "0.875rem", mt: 1 }}>
                          Out-of-range behavior
                        </Typography>
                        <Select
                          sx={{
                            m: 0,
                            ml: 4.4,
                            fontSize: "0.875rem",
                            width: "14.5rem",
                          }}
                          labelId='demo-simple-select-label'
                          value={EditBehaviour}
                          onChange={(e) => setEditBehaviour(e.target.value)}
                          size='small'
                        >
                          <MenuItem
                            sx={{ fontSize: "0.875rem" }}
                            value={"Apply the cost the highest defined page"}
                          >
                            Apply the cost the highest defined page
                          </MenuItem>
                          <MenuItem
                            sx={{ fontSize: "0.875rem" }}
                            value={" Disable Carrier"}
                          >
                            Disable Carrier
                          </MenuItem>
                        </Select>
                      </Box>
                      <>
                        {checked === true ? (
                          <>
                            <Box sx={{ mt: 1 }}>
                              <Box>
                                {" "}
                                <Typography
                                  sx={{
                                    fontSize: "0.875rem",
                                    ml: 0.5,
                                    mt: 2,
                                  }}
                                >
                                  Ranges
                                </Typography>
                              </Box>
                            </Box>
                            <Box
                              sx={{
                                mr: 0,
                                height: "23rem",
                                overflow: "scroll",
                                width: "100%",
                              }}
                            >
                              <Card sx={{ width: 4000, mt: 0, height: 120 }}>
                                <CardContent
                                  sx={{ backgroundColor: "#f2f2f2" }}
                                >
                                  <Box sx={{ display: "flex", mt: 1 }}>
                                    <Typography sx={{ fontSize: "0.875rem" }}>
                                      applied when the weight is
                                    </Typography>
                                    <KeyboardArrowRightIcon />
                                    <DragHandleIcon />
                                    <Box
                                      sx={{
                                        display: "flex",
                                        ml: 3.2,
                                        mt: -0.5,
                                      }}
                                    >
                                      {field.map((field, index) => (
                                        <div
                                          key={index}
                                          style={{
                                            display: "inline-block",
                                          }}
                                        >
                                          <TextField
                                            // name="range1"
                                            size='small'
                                            disabled
                                            sx={{
                                              width: "135px",
                                              p: 1,
                                            }}
                                            // value={field.range1}
                                            // onChange={(event) => handleChangeInput(index, event)}
                                            // {...register(
                                            //   `test.${index}.range1`,
                                            //   { required: false }
                                            // )}
                                            InputProps={{
                                              startAdornment: (
                                                <InputAdornment
                                                  position='start'
                                                  sx={{
                                                    ml: -1.7,
                                                    padding: "17px 10px",
                                                    border: "0.5px solid gray",
                                                    backgroundColor: (theme) =>
                                                      theme.palette.divider,
                                                  }}
                                                >
                                                  Kg
                                                </InputAdornment>
                                              ),
                                              style: { fontSize: 13 },
                                            }}
                                          />
                                        </div>
                                      ))}
                                    </Box>
                                  </Box>
                                  <Box sx={{ display: "flex", mt: 1 }}>
                                    <Typography sx={{ fontSize: "0.875rem" }}>
                                      applied when the weight is
                                    </Typography>
                                    <KeyboardArrowLeftIcon />
                                    <Box
                                      sx={{
                                        display: "flex",
                                        ml: 6,
                                        mt: -0.5,
                                      }}
                                    >
                                      {field.map((field, index) => (
                                        <div
                                          key={index}
                                          style={{
                                            display: "inline-block",
                                          }}
                                        >
                                          <TextField
                                            // name="range2"
                                            size='small'
                                            disabled
                                            sx={{
                                              width: "135px",
                                              p: 1,
                                            }}
                                            // {...register(
                                            //   `test.${index}.range2`,
                                            //   { required: false }
                                            // )}
                                            // value={field.range2}
                                            // onChange={(event) => handleChangeInput(index, event)}
                                            InputProps={{
                                              startAdornment: (
                                                <InputAdornment
                                                  position='start'
                                                  sx={{
                                                    ml: -1.7,
                                                    padding: "17px 10px",
                                                    border: "0.5px solid gray",
                                                    backgroundColor: (theme) =>
                                                      theme.palette.divider,
                                                  }}
                                                >
                                                  Kg
                                                </InputAdornment>
                                              ),
                                              style: { fontSize: 13 },
                                            }}
                                          />
                                        </div>
                                      ))}
                                    </Box>
                                  </Box>
                                </CardContent>
                              </Card>
                              <FormGroup>
                                <Card sx={{ width: 4000, mt: 0 }}>
                                  <CardContent
                                    sx={{ backgroundColor: "#ffff" }}
                                  >
                                    <Box sx={{ display: "flex", mt: 1 }}>
                                      <Typography sx={{ fontSize: "0.875rem" }}>
                                        All
                                      </Typography>
                                      <FormControlLabel
                                        sx={{ ml: 2 }}
                                        control={
                                          <Checkbox
                                            defaultChecked
                                            sx={{ ml: 21 }}
                                            size='small'
                                          />
                                        }
                                      />
                                      <Box sx={{ display: "flex" }}>
                                        {field.map((field, index) => (
                                          <div
                                            key={index}
                                            style={{
                                              display: "inline-block",
                                            }}
                                          >
                                            <TextField
                                              // name="range3"
                                              size='small'
                                              disabled
                                              sx={{
                                                width: "120px",
                                                ml: 2,
                                                mt: -0.5,
                                              }}
                                              // value={field.range3}
                                              // onChange={(event) => handleChangeInput(index, event)}
                                              // {...register(
                                              //   `test.${index}.range3`,
                                              //   { required: false }
                                              // )}
                                              InputProps={{
                                                startAdornment: (
                                                  <InputAdornment
                                                    position='start'
                                                    sx={{
                                                      ml: -1.7,
                                                      padding: "17px 10px",
                                                      border:
                                                        "0.5px solid gray",
                                                      backgroundColor: (
                                                        theme
                                                      ) =>
                                                        theme.palette.divider,
                                                    }}
                                                  >
                                                    <CurrencyRupeeIcon
                                                      sx={{
                                                        fontSize: 15,
                                                      }}
                                                    />
                                                  </InputAdornment>
                                                ),
                                                style: { fontSize: 13 },
                                              }}
                                            />
                                          </div>
                                        ))}
                                      </Box>
                                    </Box>
                                  </CardContent>
                                  <CardContent
                                    sx={{ backgroundColor: "#f2f2f2" }}
                                  >
                                    <Box sx={{ mt: 1 }}>
                                      {zonedatum?.map((items, index) => (
                                        <>
                                          <Box sx={{ display: "flex" }}>
                                            <Box>
                                              {" "}
                                              <Typography
                                                component='li'
                                                sx={{
                                                  fontSize: "0.875rem",
                                                  listStyleType: "none",
                                                  mt: 1,
                                                }}
                                              >
                                                {items?.zoneName}
                                              </Typography>
                                              <Box
                                                key={index}
                                                sx={{ mt: -3.5, ml: 26.5 }}
                                              >
                                                <FormControlLabel
                                                  control={
                                                    <Checkbox
                                                      key={items._id}
                                                      onChange={(e) =>
                                                        handleChange(e, items)
                                                      }
                                                    />
                                                  }
                                                  {...register("check1", {
                                                    required: false,
                                                  })}
                                                />
                                              </Box>
                                            </Box>
                                            <Box>
                                              {field.map((field, index) => (
                                                <div
                                                  key={index}
                                                  style={{
                                                    display: "inline-block",
                                                  }}
                                                >
                                                  <TextField
                                                    // name="data4"
                                                    size='small'
                                                    disabled
                                                    sx={{
                                                      width: "118px",
                                                      ml: 2,
                                                      mt: 0.5,
                                                    }}
                                                    // value={field.zoneName}
                                                    // onChange={(event) => handleChangeInput(index, event)}
                                                    // {...register(
                                                    //   `test.${index}.${items.zoneName}`,
                                                    //   {
                                                    //     required: false,
                                                    //   }
                                                    // )}
                                                    InputProps={{
                                                      startAdornment: (
                                                        <InputAdornment
                                                          position='start'
                                                          sx={{
                                                            ml: -1.7,
                                                            padding:
                                                              "17px 10px",
                                                            border:
                                                              "0.5px solid gray",
                                                            backgroundColor: (
                                                              theme
                                                            ) =>
                                                              theme.palette
                                                                .divider,
                                                          }}
                                                        >
                                                          <CurrencyRupeeIcon
                                                            sx={{
                                                              fontSize: 15,
                                                            }}
                                                          />
                                                        </InputAdornment>
                                                      ),
                                                      style: {
                                                        fontSize: 13,
                                                      },
                                                    }}
                                                  />
                                                </div>
                                              ))}
                                            </Box>
                                          </Box>
                                        </>
                                      ))}
                                    </Box>
                                  </CardContent>
                                </Card>
                              </FormGroup>
                            </Box>
                            <Button
                              variant='outlined'
                              size='small'
                              onClick={addField}
                              sx={{ mt: 2 }}
                            >
                              Add new range
                            </Button>
                            <>
                              <Button
                                variant='outlined'
                                size='small'
                                onClick={() => removeField()}
                                sx={{ mt: 2 }}
                              >
                                Remove range
                              </Button>
                            </>
                          </>
                        ) : (
                          <>
                            <Box sx={{ mt: 1 }}>
                              <Box>
                                {" "}
                                <Typography
                                  sx={{
                                    fontSize: "0.875rem",
                                    ml: 0.5,
                                    mt: 2,
                                  }}
                                >
                                  Ranges
                                </Typography>
                              </Box>
                            </Box>
                            <Box
                              sx={{
                                mr: 0,
                                height: "23rem",
                                overflow: "scroll",
                                width: "100%",
                              }}
                            >
                              <Card sx={{ width: 4000, mt: 0, height: 120 }}>
                                <CardContent
                                  sx={{ backgroundColor: "#f2f2f2" }}
                                >
                                  <Box sx={{ display: "flex", mt: 1 }}>
                                    <Typography sx={{ fontSize: "0.875rem" }}>
                                      applied when the weight is
                                    </Typography>
                                    <KeyboardArrowRightIcon />
                                    <DragHandleIcon />
                                    <Box
                                      sx={{
                                        display: "flex",
                                        ml: 3.2,
                                        mt: -0.5,
                                      }}
                                    >
                                      {field.map((field, index) => (
                                        <div
                                          key={index}
                                          style={{
                                            display: "inline-block",
                                          }}
                                        >
                                          <TextField
                                            name='range1'
                                            size='small'
                                            sx={{
                                              width: "135px",
                                              p: 1,
                                            }}
                                            // value={EditRangeindex === index && EditRange1 ? EditRange1 : field.range1}
                                            // onChange={(e) => HandleRange1(e, index)}
                                            // onChange={(e) => setEditRange1(e.target.value)
                                            // value={field.range1}
                                            // onChange={(event) => handleChangeInput(index, event)}
                                            // {...register(
                                            //   `test.${index}.range1`,
                                            //   { required: false }
                                            // )}
                                            InputProps={{
                                              startAdornment: (
                                                <InputAdornment
                                                  position='start'
                                                  sx={{
                                                    ml: -1.7,
                                                    padding: "17px 10px",
                                                    border: "0.5px solid gray",
                                                    backgroundColor: (theme) =>
                                                      theme.palette.divider,
                                                  }}
                                                >
                                                  Kg
                                                </InputAdornment>
                                              ),
                                              style: { fontSize: 13 },
                                            }}
                                            {...register(
                                              `test.${index}.range1`,
                                              { required: false }
                                            )}
                                          />
                                        </div>
                                      ))}
                                    </Box>
                                  </Box>
                                  <Box sx={{ display: "flex", mt: 1 }}>
                                    <Typography sx={{ fontSize: "0.875rem" }}>
                                      applied when the weight is
                                    </Typography>
                                    <KeyboardArrowLeftIcon />
                                    <Box
                                      sx={{
                                        display: "flex",
                                        ml: 6,
                                        mt: -0.5,
                                      }}
                                    >
                                      {field.map((field, index) => (
                                        <div
                                          key={index}
                                          style={{
                                            display: "inline-block",
                                          }}
                                        >
                                          <TextField
                                            name='range2'
                                            size='small'
                                            sx={{
                                              width: "135px",
                                              p: 1,
                                            }}
                                            // value={EditRange2}
                                            // onChange={(e) => setEditRange2(e.target.value)}
                                            // {...register(
                                            //   `test.${index}.range2`,
                                            //   { required: false }
                                            // )}
                                            // value={field.range2}
                                            // onChange={(event) => handleChangeInput(index, event)}
                                            InputProps={{
                                              startAdornment: (
                                                <InputAdornment
                                                  position='start'
                                                  sx={{
                                                    ml: -1.7,
                                                    padding: "17px 10px",
                                                    border: "0.5px solid gray",
                                                    backgroundColor: (theme) =>
                                                      theme.palette.divider,
                                                  }}
                                                >
                                                  Kg
                                                </InputAdornment>
                                              ),
                                              style: { fontSize: 13 },
                                            }}
                                            {...register(
                                              `test.${index}.range2`,
                                              { required: false }
                                            )}
                                          />
                                        </div>
                                      ))}
                                    </Box>
                                  </Box>
                                </CardContent>
                              </Card>
                              <FormGroup>
                                <Card sx={{ width: 4000, mt: 0 }}>
                                  <CardContent
                                    sx={{ backgroundColor: "#ffff" }}
                                  >
                                    <Box sx={{ display: "flex", mt: 1 }}>
                                      <Typography sx={{ fontSize: "0.875rem" }}>
                                        All
                                      </Typography>
                                      <FormControlLabel
                                        sx={{ ml: 2 }}
                                        control={
                                          <Checkbox
                                            defaultChecked
                                            sx={{ ml: 21 }}
                                            size='small'
                                          />
                                        }
                                      />
                                      <Box sx={{ display: "flex" }}>
                                        {field.map((field, index) => (
                                          <div
                                            key={index}
                                            style={{
                                              display: "inline-block",
                                            }}
                                          >
                                            <TextField
                                              name='range3'
                                              size='small'
                                              sx={{
                                                width: "120px",
                                                ml: 2,
                                                mt: -0.5,
                                              }}
                                              // value={EditRange3}
                                              // onChange={(e) => setEditRange3(e.target.value)}
                                              // value={field.range3}
                                              // onChange={(event) => handleChangeInput(index, event)}
                                              // {...register(
                                              //   `test.${index}.range3`,
                                              //   { required: false }
                                              // )}
                                              InputProps={{
                                                startAdornment: (
                                                  <InputAdornment
                                                    position='start'
                                                    sx={{
                                                      ml: -1.7,
                                                      padding: "17px 10px",
                                                      border:
                                                        "0.5px solid gray",
                                                      backgroundColor: (
                                                        theme
                                                      ) =>
                                                        theme.palette.divider,
                                                    }}
                                                  >
                                                    <CurrencyRupeeIcon
                                                      sx={{
                                                        fontSize: 15,
                                                      }}
                                                    />
                                                  </InputAdornment>
                                                ),
                                                style: { fontSize: 13 },
                                              }}
                                              {...register(
                                                `test.${index}.range3`,
                                                { required: false }
                                              )}
                                            />
                                          </div>
                                        ))}
                                      </Box>
                                    </Box>
                                  </CardContent>
                                  <CardContent
                                    sx={{ backgroundColor: "#f2f2f2" }}
                                  >
                                    <Box sx={{ mt: 1 }}>
                                      {zonedatum
                                        ?.filter((item) => {
                                          return item.checked === true;
                                        })
                                        .map((items, index) => (
                                          <>
                                            <Box sx={{ display: "flex" }}>
                                              <Box>
                                                {" "}
                                                <Typography
                                                  component='li'
                                                  sx={{
                                                    fontSize: "0.875rem",
                                                    listStyleType: "none",
                                                    mt: 1,
                                                  }}
                                                >
                                                  {items?.zoneName}
                                                </Typography>
                                                <Box
                                                  key={index}
                                                  sx={{ mt: -3.5, ml: 26.5 }}
                                                >
                                                  <FormControlLabel
                                                    control={
                                                      <Checkbox
                                                        key={items._id}
                                                        value={zoneEditId}
                                                        onChange={(e) =>
                                                          handleChange(e, items)
                                                        }
                                                      />
                                                    }
                                                    {...register("check1", {
                                                      required: false,
                                                    })}
                                                  />
                                                </Box>
                                              </Box>
                                              <Box>
                                                {field.map((field, index) => (
                                                  <div
                                                    key={index}
                                                    style={{
                                                      display: "inline-block",
                                                    }}
                                                  >
                                                    <TextField
                                                      name='zoneName'
                                                      size='small'
                                                      sx={{
                                                        width: "118px",
                                                        ml: 2,
                                                        mt: 0.5,
                                                      }}
                                                      // value={EditZone}
                                                      // onChange={(e) => setEditZone(e.target.value)}
                                                      // {...register(
                                                      //   `test.${index}.${items.zoneName}`,
                                                      //   {
                                                      //     required: false,
                                                      //   }
                                                      // )}
                                                      InputProps={{
                                                        startAdornment: (
                                                          <InputAdornment
                                                            position='start'
                                                            sx={{
                                                              ml: -1.7,
                                                              padding:
                                                                "17px 10px",
                                                              border:
                                                                "0.5px solid gray",
                                                              backgroundColor: (
                                                                theme
                                                              ) =>
                                                                theme.palette
                                                                  .divider,
                                                            }}
                                                          >
                                                            <CurrencyRupeeIcon
                                                              sx={{
                                                                fontSize: 15,
                                                              }}
                                                            />
                                                          </InputAdornment>
                                                        ),
                                                        style: {
                                                          fontSize: 13,
                                                        },
                                                      }}
                                                      {...register(
                                                        `test.${index}.${items.zoneName}`,
                                                        {
                                                          required: false,
                                                        }
                                                      )}
                                                    />
                                                  </div>
                                                ))}
                                              </Box>
                                            </Box>
                                          </>
                                        ))}
                                    </Box>
                                  </CardContent>
                                </Card>
                              </FormGroup>
                            </Box>
                            <Button
                              variant='outlined'
                              size='small'
                              onClick={addField}
                              sx={{ mt: 2 }}
                            >
                              Add new range
                            </Button>
                            <>
                              <Button
                                variant='outlined'
                                size='small'
                                onClick={() => removeField()}
                                sx={{ mt: 2 }}
                              >
                                Remove range
                              </Button>
                            </>
                          </>
                        )}
                      </>
                    </Box>
                    <Box sx={{ mt: 4, ml: 60 }}>
                      <div>
                        <Button
                          sx={{ ml: 10 }}
                          variant='outlined'
                          size='medium'
                          type='submit'
                          onClick={onPreviousChange1}
                        >
                          Previous
                        </Button>
                        <Button
                          sx={{ ml: 2 }}
                          variant='outlined'
                          size='medium'
                          type='submit'
                          onClick={() => setNext(2)}
                        >
                          Next
                        </Button>
                        <Button
                          sx={{ ml: 2 }}
                          variant='outlined'
                          size='medium'
                          type='submit'
                          onClick={() => setFinish(1)}
                        >
                          Finish
                        </Button>
                      </div>
                    </Box>
                  </Box>
                </React.Fragment>
              </Grid>
            </Grid>
          </Box>
        </>
      ) : (
        <>
          {undefineddata == true ? (
            <>
              {" "}
              <Box>
                <Grid container>
                  <Grid item xs={12}>
                    <React.Fragment>
                      <CssBaseline />
                      <Box
                        variant='outlined'
                        onSubmit={handleSubmit(SaveshipDetails)}
                        sx={{
                          boxShadow: 3,
                          width: "60rem",
                          height: "50rem",
                          bgcolor: (theme) =>
                            theme.palette.mode === "dark" ? "#101010" : "#fff",
                          color: (theme) =>
                            theme.palette.mode === "dark"
                              ? "grey.300"
                              : "grey.800",
                          p: 1,
                          m: 1,
                          ml: 2,
                          mt: 0,
                          borderRadius: 2,
                          textAlign: "center",
                          fontSize: "0.875rem",
                          fontWeight: "00",
                        }}
                        component='form'
                      >
                        <Box>
                          <Breadcrumbs aria-label='breadcrumb flat'>
                            <div className='breadcrumb flat'>
                              <Link to='/logicGrid'>Carriers</Link>
                              <Link className='deactive'>General Settings</Link>
                              <Link to='/costAndShip' className='active'>
                                Shipping locations and costs
                              </Link>
                              <Link className='deactive'>
                                Size,weight and group access
                              </Link>
                              <Link className='deactive'>Summary</Link>
                            </div>
                          </Breadcrumbs>
                        </Box>

                        <Box
                          sx={{
                            boxShadow: 3,
                            width: "57rem",
                            height: "40rem",
                            bgcolor: (theme) =>
                              theme.palette.mode === "dark"
                                ? "#101010"
                                : "#fff",
                            color: (theme) =>
                              theme.palette.mode === "dark"
                                ? "grey.300"
                                : "grey.800",
                            p: 1,
                            m: 1,
                            ml: 2,
                            mt: 4,
                            borderRadius: 2,
                            textAlign: "left",
                            fontSize: "0.875rem",
                            fontWeight: "700",
                          }}
                        >
                          <FormControlLabel
                            label={
                              <Typography
                                sx={{ m: 1, ml: 31, fontSize: "0.875rem" }}
                              >
                                {" "}
                                Free shipping
                              </Typography>
                            }
                            control={
                              <Switch
                                sx={{ ml: 2 }}
                                checked={checked}
                                onChange={handleChangeChekced}
                              />
                            }
                            labelPlacement='start'
                          />

                          <Box sx={{ textAlign: "left" }}>
                            <FormControl>
                              <FormLabel id='demo-radio-buttons-group-label'>
                                <Typography
                                  sx={{ m: 0, ml: 40, fontSize: "0.875rem" }}
                                >
                                  Billing
                                </Typography>
                              </FormLabel>
                              <RadioGroup
                                aria-labelledby='demo-radio-buttons-group-label'
                                name='radio-buttons-group'
                                // value={AttId == 1 ? combination : viewdata?.title}
                                onChange={handlechangeradio}
                              >
                                <FormControlLabel
                                  value='According to total price'
                                  control={
                                    <Radio size='small' name='totalprice' />
                                  }
                                  label={
                                    <Typography sx={{ fontSize: 13 }}>
                                      According to total price
                                    </Typography>
                                  }
                                  sx={{
                                    m: 0,
                                    ml: 48,
                                    fontSize: "1rem",
                                    mt: -3.5,
                                  }}
                                />
                                <FormControlLabel
                                  value=' According to total weight'
                                  control={
                                    <Radio size='small' name='totalweight' />
                                  }
                                  sx={{ m: 0, ml: 48, fontSize: "1rem" }}
                                  label={
                                    <Typography sx={{ fontSize: 13 }}>
                                      According to total weight
                                    </Typography>
                                  }
                                />
                              </RadioGroup>
                            </FormControl>
                          </Box>

                          <Box sx={{ display: "flex", ml: 25, mt: 1 }}>
                            <Typography sx={{ fontSize: "0.875rem", mt: 1 }}>
                              Out-of-range behavior
                            </Typography>
                            <Select
                              sx={{
                                m: 0,
                                ml: 4.4,
                                fontSize: "0.875rem",
                                width: "14.5rem",
                              }}
                              labelId='demo-simple-select-label'
                              onChange={(e) => setBehaviour(e.target.value)}
                              // value={behaviour }
                              size='small'
                            >
                              <MenuItem
                                sx={{ fontSize: "0.875rem" }}
                                value={
                                  "Apply the cost the highest defined page"
                                }
                              >
                                Apply the cost the highest defined page
                              </MenuItem>
                              <MenuItem
                                sx={{ fontSize: "0.875rem" }}
                                value={" Disable Carrier"}
                              >
                                Disable Carrier
                              </MenuItem>
                            </Select>
                          </Box>
                          <>
                            {checked === true ? (
                              <>
                                <Box sx={{ mt: 1 }}>
                                  <Box>
                                    {" "}
                                    <Typography
                                      sx={{
                                        fontSize: "0.875rem",
                                        ml: 0.5,
                                        mt: 2,
                                      }}
                                    >
                                      Ranges
                                    </Typography>
                                  </Box>
                                </Box>
                                <Box
                                  sx={{
                                    mr: 0,
                                    height: "23rem",
                                    overflow: "scroll",
                                    width: "100%",
                                  }}
                                >
                                  <Card
                                    sx={{ width: 4000, mt: 0, height: 120 }}
                                  >
                                    <CardContent
                                      sx={{ backgroundColor: "#f2f2f2" }}
                                    >
                                      <Box sx={{ display: "flex", mt: 1 }}>
                                        <Typography
                                          sx={{ fontSize: "0.875rem" }}
                                        >
                                          applied when the weight is
                                        </Typography>
                                        <KeyboardArrowRightIcon />
                                        <DragHandleIcon />
                                        <Box
                                          sx={{
                                            display: "flex",
                                            ml: 3.2,
                                            mt: -0.5,
                                          }}
                                        >
                                          {field.map((field, index) => (
                                            <div
                                              key={index}
                                              style={{
                                                display: "inline-block",
                                              }}
                                            >
                                              <TextField
                                                name='range1'
                                                size='small'
                                                disabled
                                                sx={{
                                                  width: "135px",
                                                  p: 1,
                                                }}
                                                // value={field.data1}
                                                // onChange={(event) => handleChangeInput(index, event)}
                                                {...register(
                                                  `test.${index}.range1`,
                                                  { required: false }
                                                )}
                                                InputProps={{
                                                  startAdornment: (
                                                    <InputAdornment
                                                      position='start'
                                                      sx={{
                                                        ml: -1.7,
                                                        padding: "17px 10px",
                                                        border:
                                                          "0.5px solid gray",
                                                        backgroundColor: (
                                                          theme
                                                        ) =>
                                                          theme.palette.divider,
                                                      }}
                                                    >
                                                      Kg
                                                    </InputAdornment>
                                                  ),
                                                  style: { fontSize: 13 },
                                                }}
                                              />
                                            </div>
                                          ))}
                                        </Box>
                                      </Box>
                                      <Box sx={{ display: "flex", mt: 1 }}>
                                        <Typography
                                          sx={{ fontSize: "0.875rem" }}
                                        >
                                          applied when the weight is
                                        </Typography>
                                        <KeyboardArrowLeftIcon />
                                        <Box
                                          sx={{
                                            display: "flex",
                                            ml: 6,
                                            mt: -0.5,
                                          }}
                                        >
                                          {field.map((field, index) => (
                                            <div
                                              key={index}
                                              style={{
                                                display: "inline-block",
                                              }}
                                            >
                                              <TextField
                                                name='range2'
                                                size='small'
                                                disabled
                                                sx={{
                                                  width: "135px",
                                                  p: 1,
                                                }}
                                                {...register(
                                                  `test.${index}.range2`,
                                                  { required: false }
                                                )}
                                                // value={field.data2}
                                                // onChange={(event) => handleChangeInput(index, event)}
                                                InputProps={{
                                                  startAdornment: (
                                                    <InputAdornment
                                                      position='start'
                                                      sx={{
                                                        ml: -1.7,
                                                        padding: "17px 10px",
                                                        border:
                                                          "0.5px solid gray",
                                                        backgroundColor: (
                                                          theme
                                                        ) =>
                                                          theme.palette.divider,
                                                      }}
                                                    >
                                                      Kg
                                                    </InputAdornment>
                                                  ),
                                                  style: { fontSize: 13 },
                                                }}
                                              />
                                            </div>
                                          ))}
                                        </Box>
                                      </Box>
                                    </CardContent>
                                  </Card>
                                  <FormGroup>
                                    <Card sx={{ width: 4000, mt: 0 }}>
                                      <CardContent
                                        sx={{ backgroundColor: "#ffff" }}
                                      >
                                        <Box sx={{ display: "flex", mt: 1 }}>
                                          <Typography
                                            sx={{ fontSize: "0.875rem" }}
                                          >
                                            All
                                          </Typography>
                                          <FormControlLabel
                                            sx={{ ml: 2 }}
                                            control={
                                              <Checkbox
                                                defaultChecked
                                                sx={{ ml: 21 }}
                                                size='small'
                                              />
                                            }
                                          />
                                          <Box sx={{ display: "flex" }}>
                                            {field.map((field, index) => (
                                              <div
                                                key={index}
                                                style={{
                                                  display: "inline-block",
                                                }}
                                              >
                                                <TextField
                                                  name='range3'
                                                  size='small'
                                                  disabled
                                                  sx={{
                                                    width: "120px",
                                                    ml: 2,
                                                    mt: -0.5,
                                                  }}
                                                  // value={field.data3}
                                                  // onChange={(event) => handleChangeInput(index, event)}
                                                  {...register(
                                                    `test.${index}.range3`,
                                                    { required: false }
                                                  )}
                                                  InputProps={{
                                                    startAdornment: (
                                                      <InputAdornment
                                                        position='start'
                                                        sx={{
                                                          ml: -1.7,
                                                          padding: "17px 10px",
                                                          border:
                                                            "0.5px solid gray",
                                                          backgroundColor: (
                                                            theme
                                                          ) =>
                                                            theme.palette
                                                              .divider,
                                                        }}
                                                      >
                                                        <CurrencyRupeeIcon
                                                          sx={{
                                                            fontSize: 15,
                                                          }}
                                                        />
                                                      </InputAdornment>
                                                    ),
                                                    style: { fontSize: 13 },
                                                  }}
                                                />
                                              </div>
                                            ))}
                                          </Box>
                                        </Box>
                                      </CardContent>
                                      <CardContent
                                        sx={{ backgroundColor: "#f2f2f2" }}
                                      >
                                        <Box sx={{ mt: 1 }}>
                                          {zonedatum
                                            ?.filter((item) => {
                                              return item.checked === true;
                                            })
                                            ?.map((items, index) => (
                                              <>
                                                <Box sx={{ display: "flex" }}>
                                                  <Box>
                                                    {" "}
                                                    <Typography
                                                      component='li'
                                                      sx={{
                                                        fontSize: "0.875rem",
                                                        listStyleType: "none",
                                                        mt: 1,
                                                      }}
                                                    >
                                                      {items?.zoneName}
                                                    </Typography>
                                                    <Box
                                                      key={index}
                                                      sx={{
                                                        mt: -3.5,
                                                        ml: 26.5,
                                                      }}
                                                    >
                                                      <FormControlLabel
                                                        control={
                                                          <Checkbox
                                                            key={items._id}
                                                            onChange={(e) =>
                                                              handleChange(
                                                                e,
                                                                items
                                                              )
                                                            }
                                                          />
                                                        }
                                                        {...register("check1", {
                                                          required: false,
                                                        })}
                                                      />
                                                    </Box>
                                                  </Box>
                                                  <Box>
                                                    {field.map(
                                                      (field, index) => (
                                                        <div
                                                          key={index}
                                                          style={{
                                                            display:
                                                              "inline-block",
                                                          }}
                                                        >
                                                          <TextField
                                                            name='data4'
                                                            size='small'
                                                            disabled
                                                            sx={{
                                                              width: "118px",
                                                              ml: 2,
                                                              mt: 0.5,
                                                            }}
                                                            // value={field.data4}
                                                            // onChange={(event) => handleChangeInput(index, event)}
                                                            {...register(
                                                              `test.${index}.${items.zoneName}`,
                                                              {
                                                                required: false,
                                                              }
                                                            )}
                                                            InputProps={{
                                                              startAdornment: (
                                                                <InputAdornment
                                                                  position='start'
                                                                  sx={{
                                                                    ml: -1.7,
                                                                    padding:
                                                                      "17px 10px",
                                                                    border:
                                                                      "0.5px solid gray",
                                                                    backgroundColor:
                                                                      (theme) =>
                                                                        theme
                                                                          .palette
                                                                          .divider,
                                                                  }}
                                                                >
                                                                  <CurrencyRupeeIcon
                                                                    sx={{
                                                                      fontSize: 15,
                                                                    }}
                                                                  />
                                                                </InputAdornment>
                                                              ),
                                                              style: {
                                                                fontSize: 13,
                                                              },
                                                            }}
                                                          />
                                                        </div>
                                                      )
                                                    )}
                                                  </Box>
                                                </Box>
                                              </>
                                            ))}
                                        </Box>
                                      </CardContent>
                                    </Card>
                                  </FormGroup>
                                </Box>
                                <Button
                                  variant='outlined'
                                  size='small'
                                  onClick={addField}
                                  sx={{ mt: 2 }}
                                >
                                  Add new range
                                </Button>
                                {add === 1 ? (
                                  <>
                                    <Button
                                      variant='outlined'
                                      size='small'
                                      onClick={() => removeField()}
                                      sx={{ mt: 2 }}
                                    >
                                      Remove range
                                    </Button>
                                  </>
                                ) : (
                                  <></>
                                )}
                              </>
                            ) : (
                              <>
                                <Box sx={{ mt: 1 }}>
                                  <Box>
                                    {" "}
                                    <Typography
                                      sx={{
                                        fontSize: "0.875rem",
                                        ml: 0.5,
                                        mt: 2,
                                      }}
                                    >
                                      Ranges
                                    </Typography>
                                  </Box>
                                </Box>
                                <Box
                                  sx={{
                                    mr: 0,
                                    height: "23rem",
                                    overflow: "scroll",
                                    width: "100%",
                                  }}
                                >
                                  <Card
                                    sx={{ width: 4000, mt: 0, height: 120 }}
                                  >
                                    <CardContent
                                      sx={{ backgroundColor: "#f2f2f2" }}
                                    >
                                      <Box sx={{ display: "flex", mt: 1 }}>
                                        <Typography
                                          sx={{ fontSize: "0.875rem" }}
                                        >
                                          applied when the weight is
                                        </Typography>
                                        <KeyboardArrowRightIcon />
                                        <DragHandleIcon />
                                        <Box
                                          sx={{
                                            display: "flex",
                                            ml: 3.2,
                                            mt: -0.5,
                                          }}
                                        >
                                          {field?.map((item, index) => (
                                            <div
                                              key={index}
                                              style={{
                                                display: "inline-block",
                                              }}
                                            >
                                              <TextField
                                                name='range1'
                                                size='small'
                                                sx={{
                                                  width: "135px",
                                                  p: 1,
                                                }}
                                                // value={field.data1}
                                                // onChange={(event) => handleChangeInput(index, event)}
                                                {...register(
                                                  `test.${index}.range1`,
                                                  { required: false }
                                                )}
                                                InputProps={{
                                                  startAdornment: (
                                                    <InputAdornment
                                                      position='start'
                                                      sx={{
                                                        ml: -1.7,
                                                        padding: "17px 10px",
                                                        border:
                                                          "0.5px solid gray",
                                                        backgroundColor: (
                                                          theme
                                                        ) =>
                                                          theme.palette.divider,
                                                      }}
                                                    >
                                                      Kg
                                                    </InputAdornment>
                                                  ),
                                                  style: { fontSize: 13 },
                                                }}
                                              />
                                            </div>
                                          ))}
                                        </Box>
                                      </Box>
                                      <Box sx={{ display: "flex", mt: 1 }}>
                                        <Typography
                                          sx={{ fontSize: "0.875rem" }}
                                        >
                                          applied when the weight is
                                        </Typography>
                                        <KeyboardArrowLeftIcon />
                                        <Box
                                          sx={{
                                            display: "flex",
                                            ml: 6,
                                            mt: -0.5,
                                          }}
                                        >
                                          {field.map((field, index) => (
                                            <div
                                              key={index}
                                              style={{
                                                display: "inline-block",
                                              }}
                                            >
                                              <TextField
                                                name='range2'
                                                size='small'
                                                sx={{
                                                  width: "135px",
                                                  p: 1,
                                                }}
                                                {...register(
                                                  `test.${index}.range2`,
                                                  { required: false }
                                                )}
                                                // value={field.data2}
                                                // onChange={(event) => handleChangeInput(index, event)}
                                                InputProps={{
                                                  startAdornment: (
                                                    <InputAdornment
                                                      position='start'
                                                      sx={{
                                                        ml: -1.7,
                                                        padding: "17px 10px",
                                                        border:
                                                          "0.5px solid gray",
                                                        backgroundColor: (
                                                          theme
                                                        ) =>
                                                          theme.palette.divider,
                                                      }}
                                                    >
                                                      Kg
                                                    </InputAdornment>
                                                  ),
                                                  style: { fontSize: 13 },
                                                }}
                                              />
                                            </div>
                                          ))}
                                        </Box>
                                      </Box>
                                    </CardContent>
                                  </Card>
                                  <FormGroup>
                                    <Card sx={{ width: 4000, mt: 0 }}>
                                      <CardContent
                                        sx={{ backgroundColor: "#ffff" }}
                                      >
                                        <Box sx={{ display: "flex", mt: 1 }}>
                                          <Typography
                                            sx={{ fontSize: "0.875rem" }}
                                          >
                                            All
                                          </Typography>
                                          <FormControlLabel
                                            sx={{ ml: 2 }}
                                            control={
                                              <Checkbox
                                                defaultChecked
                                                sx={{ ml: 21 }}
                                                size='small'
                                              />
                                            }
                                          />
                                          <Box sx={{ display: "flex" }}>
                                            {field.map((field, index) => (
                                              <div
                                                key={index}
                                                style={{
                                                  display: "inline-block",
                                                }}
                                              >
                                                <TextField
                                                  name='range3'
                                                  size='small'
                                                  sx={{
                                                    width: "120px",
                                                    ml: 2,
                                                    mt: -0.5,
                                                  }}
                                                  // value={field.data3}
                                                  // onChange={(event) => handleChangeInput(index, event)}
                                                  {...register(
                                                    `test.${index}.range3`,
                                                    { required: false }
                                                  )}
                                                  InputProps={{
                                                    startAdornment: (
                                                      <InputAdornment
                                                        position='start'
                                                        sx={{
                                                          ml: -1.7,
                                                          padding: "17px 10px",
                                                          border:
                                                            "0.5px solid gray",
                                                          backgroundColor: (
                                                            theme
                                                          ) =>
                                                            theme.palette
                                                              .divider,
                                                        }}
                                                      >
                                                        <CurrencyRupeeIcon
                                                          sx={{
                                                            fontSize: 15,
                                                          }}
                                                        />
                                                      </InputAdornment>
                                                    ),
                                                    style: { fontSize: 13 },
                                                  }}
                                                />
                                              </div>
                                            ))}
                                          </Box>
                                        </Box>
                                      </CardContent>
                                      <CardContent
                                        sx={{ backgroundColor: "#f2f2f2" }}
                                      >
                                        <Box sx={{ mt: 1 }}>
                                          {zonedatum
                                            ?.filter((item) => {
                                              return item.checked === true;
                                            })
                                            ?.map((items, index) => (
                                              <>
                                                <Box sx={{ display: "flex" }}>
                                                  <Box>
                                                    {" "}
                                                    <Typography
                                                      component='li'
                                                      sx={{
                                                        fontSize: "0.875rem",
                                                        listStyleType: "none",
                                                        mt: 1,
                                                      }}
                                                    >
                                                      {items?.zoneName}
                                                    </Typography>
                                                    <Box
                                                      key={index}
                                                      sx={{
                                                        mt: -3.5,
                                                        ml: 26.5,
                                                      }}
                                                    >
                                                      <FormControlLabel
                                                        control={
                                                          <Checkbox
                                                            key={items._id}
                                                            onChange={(e) =>
                                                              handleChange(
                                                                e,
                                                                items
                                                              )
                                                            }
                                                          />
                                                        }
                                                        {...register("check1", {
                                                          required: false,
                                                        })}
                                                      />
                                                    </Box>
                                                  </Box>
                                                  <Box>
                                                    {field.map(
                                                      (field, index) => (
                                                        <div
                                                          key={index}
                                                          style={{
                                                            display:
                                                              "inline-block",
                                                          }}
                                                        >
                                                          <TextField
                                                            name='data4'
                                                            size='small'
                                                            sx={{
                                                              width: "118px",
                                                              ml: 2,
                                                              mt: 0.5,
                                                            }}
                                                            // value={field.data4}
                                                            // onChange={(event) => handleChangeInput(index, event)}
                                                            {...register(
                                                              `test.${index}.${items.zoneName}`,
                                                              {
                                                                required: false,
                                                              }
                                                            )}
                                                            InputProps={{
                                                              startAdornment: (
                                                                <InputAdornment
                                                                  position='start'
                                                                  sx={{
                                                                    ml: -1.7,
                                                                    padding:
                                                                      "17px 10px",
                                                                    border:
                                                                      "0.5px solid gray",
                                                                    backgroundColor:
                                                                      (theme) =>
                                                                        theme
                                                                          .palette
                                                                          .divider,
                                                                  }}
                                                                >
                                                                  <CurrencyRupeeIcon
                                                                    sx={{
                                                                      fontSize: 15,
                                                                    }}
                                                                  />
                                                                </InputAdornment>
                                                              ),
                                                              style: {
                                                                fontSize: 13,
                                                              },
                                                            }}
                                                          />
                                                        </div>
                                                      )
                                                    )}
                                                  </Box>
                                                </Box>
                                              </>
                                            ))}
                                        </Box>
                                      </CardContent>
                                    </Card>
                                  </FormGroup>
                                </Box>
                                <Button
                                  variant='outlined'
                                  size='small'
                                  onClick={addField}
                                  sx={{ mt: 2 }}
                                >
                                  Add new range
                                </Button>
                                {add === 1 ? (
                                  <>
                                    <Button
                                      variant='outlined'
                                      size='small'
                                      onClick={() => removeField()}
                                      sx={{ mt: 2 }}
                                    >
                                      Remove range
                                    </Button>
                                  </>
                                ) : (
                                  <></>
                                )}
                              </>
                            )}
                          </>
                        </Box>
                        <Box sx={{ mt: 4, ml: 60 }}>
                          <div>
                            <Button
                              sx={{ ml: 25 }}
                              variant='outlined'
                              size='medium'
                              type='submit'
                              onClick={() => setNext(2)}
                            >
                              Next
                            </Button>
                            <Button
                              sx={{ ml: 2 }}
                              variant='outlined'
                              size='medium'
                              type='submit'
                              color='success'
                              onClick={() => setFinish(1)}
                            >
                              Finish
                            </Button>
                          </div>
                        </Box>
                      </Box>
                    </React.Fragment>
                  </Grid>
                </Grid>
              </Box>
            </>
          ) : (
            <>
              {AttId == 1 ? (
                <Box>
                  <Grid container>
                    <Grid item xs={12}>
                      <React.Fragment>
                        <CssBaseline />
                        <Box
                          variant='outlined'
                          onSubmit={handleSubmit(SaveshipDetails)}
                          sx={{
                            boxShadow: 3,
                            width: "60rem",
                            height: "50rem",
                            bgcolor: (theme) =>
                              theme.palette.mode === "dark"
                                ? "#101010"
                                : "#fff",
                            color: (theme) =>
                              theme.palette.mode === "dark"
                                ? "grey.300"
                                : "grey.800",
                            p: 1,
                            m: 1,
                            ml: 2,
                            mt: 0,
                            borderRadius: 2,
                            textAlign: "center",
                            fontSize: "0.875rem",
                            fontWeight: "00",
                          }}
                          component='form'
                        >
                          <Box>
                            <Breadcrumbs aria-label='breadcrumb flat'>
                              <div className='breadcrumb flat'>
                                <Link to='/logicGrid'>Carriers</Link>
                                <Link className='deactive'>
                                  General Settings
                                </Link>
                                <Link to='/costAndShip' className='active'>
                                  Shipping locations and costs
                                </Link>
                                <Link className='deactive'>
                                  Size,weight and group access
                                </Link>
                                <Link className='deactive'>Summary</Link>
                              </div>
                            </Breadcrumbs>
                          </Box>

                          <Box
                            sx={{
                              boxShadow: 3,
                              width: "57rem",
                              height: "40rem",
                              bgcolor: (theme) =>
                                theme.palette.mode === "dark"
                                  ? "#101010"
                                  : "#fff",
                              color: (theme) =>
                                theme.palette.mode === "dark"
                                  ? "grey.300"
                                  : "grey.800",
                              p: 1,
                              m: 1,
                              ml: 2,
                              mt: 4,
                              borderRadius: 2,
                              textAlign: "left",
                              fontSize: "0.875rem",
                              fontWeight: "700",
                            }}
                          >
                            <FormControlLabel
                              label={
                                <Typography
                                  sx={{ m: 1, ml: 31, fontSize: "0.875rem" }}
                                >
                                  {" "}
                                  Free shipping
                                </Typography>
                              }
                              control={
                                <Switch
                                  sx={{ ml: 2 }}
                                  checked={checked}
                                  onChange={handleChangeChekced}
                                />
                              }
                              labelPlacement='start'
                            />

                            <Box sx={{ textAlign: "left" }}>
                              <FormControl>
                                <FormLabel id='demo-radio-buttons-group-label'>
                                  <Typography
                                    sx={{ m: 0, ml: 40, fontSize: "0.875rem" }}
                                  >
                                    Billing
                                  </Typography>
                                </FormLabel>
                                <RadioGroup
                                  aria-labelledby='demo-radio-buttons-group-label'
                                  name='radio-buttons-group'
                                  // value={AttId == 1 ? combination : viewdata?.title}
                                  onChange={handlechangeradio}
                                >
                                  <FormControlLabel
                                    value='According to total price'
                                    control={
                                      <Radio size='small' name='totalprice' />
                                    }
                                    label={
                                      <Typography sx={{ fontSize: 13 }}>
                                        According to total price
                                      </Typography>
                                    }
                                    sx={{
                                      m: 0,
                                      ml: 48,
                                      fontSize: "1rem",
                                      mt: -3.5,
                                    }}
                                  />
                                  <FormControlLabel
                                    value=' According to total weight'
                                    control={
                                      <Radio size='small' name='totalweight' />
                                    }
                                    sx={{ m: 0, ml: 48, fontSize: "1rem" }}
                                    label={
                                      <Typography sx={{ fontSize: 13 }}>
                                        According to total weight
                                      </Typography>
                                    }
                                  />
                                </RadioGroup>
                              </FormControl>
                            </Box>

                            <Box sx={{ display: "flex", ml: 25, mt: 1 }}>
                              <Typography sx={{ fontSize: "0.875rem", mt: 1 }}>
                                Out-of-range behavior
                              </Typography>
                              <Select
                                sx={{
                                  m: 0,
                                  ml: 4.4,
                                  fontSize: "0.875rem",
                                  width: "14.5rem",
                                }}
                                labelId='demo-simple-select-label'
                                onChange={(e) => setBehaviour(e.target.value)}
                                // value={behaviour }
                                size='small'
                              >
                                <MenuItem
                                  sx={{ fontSize: "0.875rem" }}
                                  value={
                                    "Apply the cost the highest defined page"
                                  }
                                >
                                  Apply the cost the highest defined page
                                </MenuItem>
                                <MenuItem
                                  sx={{ fontSize: "0.875rem" }}
                                  value={" Disable Carrier"}
                                >
                                  Disable Carrier
                                </MenuItem>
                              </Select>
                            </Box>
                            <>
                              {checked === true ? (
                                <>
                                  <Box sx={{ mt: 1 }}>
                                    <Box>
                                      {" "}
                                      <Typography
                                        sx={{
                                          fontSize: "0.875rem",
                                          ml: 0.5,
                                          mt: 2,
                                        }}
                                      >
                                        Ranges
                                      </Typography>
                                    </Box>
                                  </Box>
                                  <Box
                                    sx={{
                                      mr: 0,
                                      height: "23rem",
                                      overflow: "scroll",
                                      width: "100%",
                                    }}
                                  >
                                    <Card
                                      sx={{ width: 4000, mt: 0, height: 120 }}
                                    >
                                      <CardContent
                                        sx={{ backgroundColor: "#f2f2f2" }}
                                      >
                                        <Box sx={{ display: "flex", mt: 1 }}>
                                          <Typography
                                            sx={{ fontSize: "0.875rem" }}
                                          >
                                            applied when the weight is
                                          </Typography>
                                          <KeyboardArrowRightIcon />
                                          <DragHandleIcon />
                                          <Box
                                            sx={{
                                              display: "flex",
                                              ml: 3.2,
                                              mt: -0.5,
                                            }}
                                          >
                                            {field.map((field, index) => (
                                              <div
                                                key={index}
                                                style={{
                                                  display: "inline-block",
                                                }}
                                              >
                                                <TextField
                                                  name='range1'
                                                  size='small'
                                                  disabled
                                                  sx={{
                                                    width: "135px",
                                                    p: 1,
                                                  }}
                                                  // value={field.data1}
                                                  onChange={(event) =>
                                                    handleChangeRange1(event)
                                                  }
                                                  // {...register(
                                                  //   `test.${index}.range1`,
                                                  //   { required: false }
                                                  // )}
                                                  InputProps={{
                                                    startAdornment: (
                                                      <InputAdornment
                                                        position='start'
                                                        sx={{
                                                          ml: -1.7,
                                                          padding: "17px 10px",
                                                          border:
                                                            "0.5px solid gray",
                                                          backgroundColor: (
                                                            theme
                                                          ) =>
                                                            theme.palette
                                                              .divider,
                                                        }}
                                                      >
                                                        Kg
                                                      </InputAdornment>
                                                    ),
                                                    style: { fontSize: 13 },
                                                  }}
                                                />
                                              </div>
                                            ))}
                                          </Box>
                                        </Box>
                                        <Box sx={{ display: "flex", mt: 1 }}>
                                          <Typography
                                            sx={{ fontSize: "0.875rem" }}
                                          >
                                            applied when the weight is
                                          </Typography>
                                          <KeyboardArrowLeftIcon />
                                          <Box
                                            sx={{
                                              display: "flex",
                                              ml: 6,
                                              mt: -0.5,
                                            }}
                                          >
                                            {field.map((field, index) => (
                                              <div
                                                key={index}
                                                style={{
                                                  display: "inline-block",
                                                }}
                                              >
                                                <TextField
                                                  name='range2'
                                                  size='small'
                                                  disabled
                                                  sx={{
                                                    width: "135px",
                                                    p: 1,
                                                  }}
                                                  onChange={(event) =>
                                                    handleChangeRange2(event)
                                                  }
                                                  // {...register(
                                                  //   `test.${index}.range2`,
                                                  //   { required: false }
                                                  // )}
                                                  // value={field.data2}
                                                  // onChange={(event) => handleChangeInput(index, event)}
                                                  InputProps={{
                                                    startAdornment: (
                                                      <InputAdornment
                                                        position='start'
                                                        sx={{
                                                          ml: -1.7,
                                                          padding: "17px 10px",
                                                          border:
                                                            "0.5px solid gray",
                                                          backgroundColor: (
                                                            theme
                                                          ) =>
                                                            theme.palette
                                                              .divider,
                                                        }}
                                                      >
                                                        Kg
                                                      </InputAdornment>
                                                    ),
                                                    style: { fontSize: 13 },
                                                  }}
                                                />
                                              </div>
                                            ))}
                                          </Box>
                                        </Box>
                                      </CardContent>
                                    </Card>
                                    <FormGroup>
                                      <Card sx={{ width: 4000, mt: 0 }}>
                                        <CardContent
                                          sx={{ backgroundColor: "#ffff" }}
                                        >
                                          <Box sx={{ display: "flex", mt: 1 }}>
                                            <Typography
                                              sx={{ fontSize: "0.875rem" }}
                                            >
                                              All
                                            </Typography>
                                            <FormControlLabel
                                              sx={{ ml: 2 }}
                                              control={
                                                <Checkbox
                                                  defaultChecked
                                                  sx={{ ml: 21 }}
                                                  size='small'
                                                />
                                              }
                                            />
                                            <Box sx={{ display: "flex" }}>
                                              {field.map((field, index) => (
                                                <div
                                                  key={index}
                                                  style={{
                                                    display: "inline-block",
                                                  }}
                                                >
                                                  <TextField
                                                    name='range3'
                                                    size='small'
                                                    disabled
                                                    sx={{
                                                      width: "120px",
                                                      ml: 2,
                                                      mt: -0.5,
                                                    }}
                                                    // value={field.data3}
                                                    // onChange={(event) => handleChangeInput(index, event)}
                                                    {...register(
                                                      `test.${index}.range3`,
                                                      { required: false }
                                                    )}
                                                    InputProps={{
                                                      startAdornment: (
                                                        <InputAdornment
                                                          position='start'
                                                          sx={{
                                                            ml: -1.7,
                                                            padding:
                                                              "17px 10px",
                                                            border:
                                                              "0.5px solid gray",
                                                            backgroundColor: (
                                                              theme
                                                            ) =>
                                                              theme.palette
                                                                .divider,
                                                          }}
                                                        >
                                                          <CurrencyRupeeIcon
                                                            sx={{
                                                              fontSize: 15,
                                                            }}
                                                          />
                                                        </InputAdornment>
                                                      ),
                                                      style: { fontSize: 13 },
                                                    }}
                                                  />
                                                </div>
                                              ))}
                                            </Box>
                                          </Box>
                                        </CardContent>
                                        <CardContent
                                          sx={{ backgroundColor: "#f2f2f2" }}
                                        >
                                          <Box sx={{ mt: 1 }}>
                                            {zonedatum
                                              ?.filter((item) => {
                                                return item.checked === true;
                                              })
                                              ?.map((items, key) => (
                                                <>
                                                  <Box sx={{ display: "flex" }}>
                                                    <Box>
                                                      {" "}
                                                      <Typography
                                                        component='li'
                                                        sx={{
                                                          fontSize: "0.875rem",
                                                          listStyleType: "none",
                                                          mt: 1,
                                                        }}
                                                      >
                                                        {items?.zoneName}
                                                      </Typography>
                                                      <Box
                                                        key={key}
                                                        sx={{
                                                          mt: -3.5,
                                                          ml: 26.5,
                                                        }}
                                                      >
                                                        <FormControlLabel
                                                          control={
                                                            <Checkbox
                                                              key={items._id}
                                                              onChange={(e) =>
                                                                handleChange(
                                                                  e,
                                                                  items
                                                                )
                                                              }
                                                            />
                                                          }
                                                          {...register(
                                                            "check1",
                                                            {
                                                              required: false,
                                                            }
                                                          )}
                                                        />
                                                      </Box>
                                                    </Box>
                                                    <Box>
                                                      {field.map(
                                                        (field, index) => (
                                                          <div
                                                            key={index}
                                                            style={{
                                                              display:
                                                                "inline-block",
                                                            }}
                                                          >
                                                            <TextField
                                                              name='data4'
                                                              size='small'
                                                              disabled
                                                              sx={{
                                                                width: "118px",
                                                                ml: 2,
                                                                mt: 0.5,
                                                              }}
                                                              onChange={(e) =>
                                                                handleChanges(
                                                                  e.target.value
                                                                )
                                                              }
                                                              onClick={(e) =>
                                                                handleChangeInputs(
                                                                  e.target
                                                                    .value,
                                                                  zonedatum,
                                                                  key
                                                                )
                                                              }
                                                              // {...register(
                                                              //   `test.${index}.${items.zoneName}`,
                                                              //   {
                                                              //     required: false,
                                                              //   }
                                                              // )}
                                                              InputProps={{
                                                                startAdornment:
                                                                  (
                                                                    <InputAdornment
                                                                      position='start'
                                                                      sx={{
                                                                        ml: -1.7,
                                                                        padding:
                                                                          "17px 10px",
                                                                        border:
                                                                          "0.5px solid gray",
                                                                        backgroundColor:
                                                                          (
                                                                            theme
                                                                          ) =>
                                                                            theme
                                                                              .palette
                                                                              .divider,
                                                                      }}
                                                                    >
                                                                      <CurrencyRupeeIcon
                                                                        sx={{
                                                                          fontSize: 15,
                                                                        }}
                                                                      />
                                                                    </InputAdornment>
                                                                  ),
                                                                style: {
                                                                  fontSize: 13,
                                                                },
                                                              }}
                                                            />
                                                          </div>
                                                        )
                                                      )}
                                                    </Box>
                                                  </Box>
                                                </>
                                              ))}
                                          </Box>
                                        </CardContent>
                                      </Card>
                                    </FormGroup>
                                  </Box>
                                  <Button
                                    variant='outlined'
                                    size='small'
                                    onClick={addField}
                                    sx={{ mt: 2 }}
                                  >
                                    Add new range
                                  </Button>
                                  {add === 1 ? (
                                    <>
                                      <Button
                                        variant='outlined'
                                        size='small'
                                        onClick={() => removeField()}
                                        sx={{ mt: 2 }}
                                      >
                                        Remove range
                                      </Button>
                                    </>
                                  ) : (
                                    <></>
                                  )}
                                </>
                              ) : (
                                <>
                                  <Box sx={{ mt: 1 }}>
                                    <Box>
                                      {" "}
                                      <Typography
                                        sx={{
                                          fontSize: "0.875rem",
                                          ml: 0.5,
                                          mt: 2,
                                        }}
                                      >
                                        Ranges
                                      </Typography>
                                    </Box>
                                  </Box>
                                  <Box
                                    sx={{
                                      mr: 0,
                                      height: "23rem",
                                      overflow: "scroll",
                                      width: "100%",
                                    }}
                                  >
                                    <Card
                                      sx={{ width: 4000, mt: 0, height: 120 }}
                                    >
                                      <CardContent
                                        sx={{ backgroundColor: "#f2f2f2" }}
                                      >
                                        <Box sx={{ display: "flex", mt: 1 }}>
                                          <Typography
                                            sx={{ fontSize: "0.875rem" }}
                                          >
                                            applied when the weight is
                                          </Typography>
                                          <KeyboardArrowRightIcon />
                                          <DragHandleIcon />
                                          <Box
                                            sx={{
                                              display: "flex",
                                              ml: 3.2,
                                              mt: -0.5,
                                            }}
                                          >
                                            {field.map((field, index) => (
                                              <div
                                                key={index}
                                                style={{
                                                  display: "inline-block",
                                                }}
                                              >
                                                <TextField
                                                  // name="range1"
                                                  size='small'
                                                  sx={{
                                                    width: "135px",
                                                    p: 1,
                                                  }}
                                                  name={index}
                                                  ref={register()}
                                                  // onChange={handleFeatureValue}
                                                  // value={field.data1}
                                                  // onChange={(event) => handleChangeInput(index, event)}
                                                  onChange={(event) =>
                                                    handleChangeRange1(event)
                                                  }
                                                  // {...register(
                                                  //   `test.${index}.range1`,
                                                  //   { required: false }
                                                  // )}
                                                  InputProps={{
                                                    startAdornment: (
                                                      <InputAdornment
                                                        position='start'
                                                        sx={{
                                                          ml: -1.7,
                                                          padding: "17px 10px",
                                                          border:
                                                            "0.5px solid gray",
                                                          backgroundColor: (
                                                            theme
                                                          ) =>
                                                            theme.palette
                                                              .divider,
                                                        }}
                                                      >
                                                        Kg
                                                      </InputAdornment>
                                                    ),
                                                    style: { fontSize: 13 },
                                                  }}
                                                />
                                              </div>
                                            ))}
                                          </Box>
                                        </Box>
                                        <Box sx={{ display: "flex", mt: 1 }}>
                                          <Typography
                                            sx={{ fontSize: "0.875rem" }}
                                          >
                                            applied when the weight is
                                          </Typography>
                                          <KeyboardArrowLeftIcon />
                                          <Box
                                            sx={{
                                              display: "flex",
                                              ml: 6,
                                              mt: -0.5,
                                            }}
                                          >
                                            {field.map((field, index) => (
                                              <div
                                                key={index}
                                                style={{
                                                  display: "inline-block",
                                                }}
                                              >
                                                <TextField
                                                  name='range2'
                                                  size='small'
                                                  sx={{
                                                    width: "135px",
                                                    p: 1,
                                                  }}
                                                  onChange={(event) =>
                                                    handleChangeRange2(event)
                                                  }
                                                  // {...register(
                                                  //   `test.${index}.range2`,
                                                  //   { required: false }
                                                  // )}
                                                  // value={field.data2}
                                                  // onChange={(event) => handleChangeInput(index, event)}
                                                  InputProps={{
                                                    startAdornment: (
                                                      <InputAdornment
                                                        position='start'
                                                        sx={{
                                                          ml: -1.7,
                                                          padding: "17px 10px",
                                                          border:
                                                            "0.5px solid gray",
                                                          backgroundColor: (
                                                            theme
                                                          ) =>
                                                            theme.palette
                                                              .divider,
                                                        }}
                                                      >
                                                        Kg
                                                      </InputAdornment>
                                                    ),
                                                    style: { fontSize: 13 },
                                                  }}
                                                />
                                              </div>
                                            ))}
                                          </Box>
                                        </Box>
                                      </CardContent>
                                    </Card>
                                    <FormGroup>
                                      <Card sx={{ width: 4000, mt: 0 }}>
                                        <CardContent
                                          sx={{ backgroundColor: "#ffff" }}
                                        >
                                          <Box sx={{ display: "flex", mt: 1 }}>
                                            <Typography
                                              sx={{ fontSize: "0.875rem" }}
                                            >
                                              All
                                            </Typography>
                                            <FormControlLabel
                                              sx={{ ml: 2 }}
                                              control={
                                                <Checkbox
                                                  defaultChecked
                                                  sx={{ ml: 21 }}
                                                  size='small'
                                                />
                                              }
                                            />
                                            <Box sx={{ display: "flex" }}>
                                              {field.map((field, index) => (
                                                <div
                                                  key={index}
                                                  style={{
                                                    display: "inline-block",
                                                  }}
                                                >
                                                  <TextField
                                                    name='range3'
                                                    size='small'
                                                    sx={{
                                                      width: "120px",
                                                      ml: 2,
                                                      mt: -0.5,
                                                    }}
                                                    // value={field.data3}
                                                    // onChange={(event) => handleChangeInput(index, event)}
                                                    {...register(
                                                      `test.${index}.range3`,
                                                      { required: false }
                                                    )}
                                                    InputProps={{
                                                      startAdornment: (
                                                        <InputAdornment
                                                          position='start'
                                                          sx={{
                                                            ml: -1.7,
                                                            padding:
                                                              "17px 10px",
                                                            border:
                                                              "0.5px solid gray",
                                                            backgroundColor: (
                                                              theme
                                                            ) =>
                                                              theme.palette
                                                                .divider,
                                                          }}
                                                        >
                                                          <CurrencyRupeeIcon
                                                            sx={{
                                                              fontSize: 15,
                                                            }}
                                                          />
                                                        </InputAdornment>
                                                      ),
                                                      style: { fontSize: 13 },
                                                    }}
                                                  />
                                                </div>
                                              ))}
                                            </Box>
                                          </Box>
                                        </CardContent>
                                        <CardContent
                                          sx={{ backgroundColor: "#f2f2f2" }}
                                        >
                                          <Box sx={{ mt: 1 }}>
                                            {zonedatum
                                              ?.filter((item) => {
                                                return item.checked === true;
                                              })
                                              ?.map((items, key) => (
                                                <>
                                                  <Box sx={{ display: "flex" }}>
                                                    <Box>
                                                      {" "}
                                                      <Typography
                                                        component='li'
                                                        sx={{
                                                          fontSize: "0.875rem",
                                                          listStyleType: "none",
                                                          mt: 1,
                                                        }}
                                                      >
                                                        {items?.zoneName}
                                                      </Typography>
                                                      <Box
                                                        key={key}
                                                        sx={{
                                                          mt: -3.5,
                                                          ml: 26.5,
                                                        }}
                                                      >
                                                        <FormControlLabel
                                                          control={
                                                            <Checkbox
                                                              key={items._id}
                                                              onChange={(e) =>
                                                                handleChange(
                                                                  e,
                                                                  items
                                                                )
                                                              }
                                                            />
                                                          }
                                                          {...register(
                                                            "check1",
                                                            {
                                                              required: false,
                                                            }
                                                          )}
                                                        />
                                                      </Box>
                                                    </Box>
                                                    <Box>
                                                      {field.map(
                                                        (field, index) => (
                                                          <div
                                                            key={index}
                                                            style={{
                                                              display:
                                                                "inline-block",
                                                            }}
                                                          >
                                                            <TextField
                                                              name='data4'
                                                              size='small'
                                                              sx={{
                                                                width: "118px",
                                                                ml: 2,
                                                                mt: 0.5,
                                                              }}
                                                              onChange={(e) =>
                                                                handleChanges(
                                                                  e.target.value
                                                                )
                                                              }
                                                              onClick={(e) =>
                                                                handleChangeInputs(
                                                                  e.target
                                                                    .value,
                                                                  zonedatum,
                                                                  key
                                                                )
                                                              }
                                                              // value={field.data4}
                                                              // onChange={(event) => handleChangeInput(index, event)}
                                                              // {...register(
                                                              //   `test.${index}.${items.zoneName}`,
                                                              //   {
                                                              //     required: false,
                                                              //   }
                                                              // )}
                                                              InputProps={{
                                                                startAdornment:
                                                                  (
                                                                    <InputAdornment
                                                                      position='start'
                                                                      sx={{
                                                                        ml: -1.7,
                                                                        padding:
                                                                          "17px 10px",
                                                                        border:
                                                                          "0.5px solid gray",
                                                                        backgroundColor:
                                                                          (
                                                                            theme
                                                                          ) =>
                                                                            theme
                                                                              .palette
                                                                              .divider,
                                                                      }}
                                                                    >
                                                                      <CurrencyRupeeIcon
                                                                        sx={{
                                                                          fontSize: 15,
                                                                        }}
                                                                      />
                                                                    </InputAdornment>
                                                                  ),
                                                                style: {
                                                                  fontSize: 13,
                                                                },
                                                              }}
                                                            />
                                                          </div>
                                                        )
                                                      )}
                                                    </Box>
                                                  </Box>
                                                </>
                                              ))}
                                          </Box>
                                        </CardContent>
                                      </Card>
                                    </FormGroup>
                                  </Box>
                                  <Button
                                    variant='outlined'
                                    size='small'
                                    onClick={addField}
                                    sx={{ mt: 2 }}
                                  >
                                    Add new range
                                  </Button>
                                  {add === 1 ? (
                                    <>
                                      <Button
                                        variant='outlined'
                                        size='small'
                                        onClick={() => removeField()}
                                        sx={{ mt: 2 }}
                                      >
                                        Remove range
                                      </Button>
                                    </>
                                  ) : (
                                    <></>
                                  )}
                                </>
                              )}
                            </>
                          </Box>
                          <Box sx={{ mt: 4, ml: 60 }}>
                            <div>
                              <Button
                                sx={{ ml: 25 }}
                                variant='outlined'
                                size='medium'
                                type='submit'
                                onClick={() => setNext(2)}
                              >
                                Next
                              </Button>
                              <Button
                                sx={{ ml: 2 }}
                                variant='outlined'
                                size='medium'
                                type='submit'
                                color='success'
                                onClick={() => setFinish(1)}
                              >
                                Finish
                              </Button>
                            </div>
                          </Box>
                        </Box>
                      </React.Fragment>
                    </Grid>
                  </Grid>
                </Box>
              ) : (
                <></>
              )}
            </>
          )}
        </>
      )}
    </>
  );
}
