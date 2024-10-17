/* eslint-disable no-unused-vars */
import { makeStyles, Switch } from "@material-ui/core";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Box from "@mui/material/Box";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import Select from "@mui/material/Select";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux"; // useDispatch,
import { Link, useParams } from "react-router-dom";
import { Divider } from "../../node_modules/@material-ui/core/index";
import { CountryListDetails } from "../actions/CountryAction";
import { StateListDetails } from "../actions/StateAction";
import { ZoneListDetails } from "../actions/ZoneAction";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";

import Icon from "@mui/material/Icon";
import { useNavigate } from "../../node_modules/react-router-dom/dist/index";
import { saveCity, updateCity } from "../actions/CityAction";
import { CITY_SAVE_RESET, CITY_UPDATE_RESET } from "../constants/CityConstants";
import { green } from "@mui/material/colors";
import { Tooltip } from "bootstrap";
const useStyles = makeStyles({
  switch: {
    "& .Mui-checked": {
      color: "#00CC00",
      // transform: "translateX(25px) !important"
    },
    "& .MuiSwitch-track": {
      backgroundColor: "#00CC00 !important",
    },
  },
});
export default function CityScreen() {
  const params = useParams();
  const EditId = params.id;

  const ZoneList = useSelector((state) => state.ZoneList);
  const { zonedatum } = ZoneList;

  const CountryList = useSelector((state) => state.CountryList);
  const { country } = CountryList;
  console.log("country", country);
  const CitySave = useSelector((state) => state.CitySave);
  const { success: savecity } = CitySave;
  const CityUpdate = useSelector((state) => state.CityUpdate);
  const { success: cityUpdate } = CityUpdate;
  const StateList = useSelector((state) => state.StateList);
  const { Statedatum } = StateList;

  const CityList = useSelector((state) => state.CityList);
  const { citydatum } = CityList;

  const citydata = citydatum?.find((x) => x._id === EditId);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [Zone, setZone] = useState("");
  const [State, setState] = useState("");
  const [Country, setCountry] = useState("");
  const [Checked, setChecked] = useState(true);
  const [EditIso, setEditIso] = useState(citydata?.iso);
  const [EditState, setEditState] = useState(citydata?.state);
  const [EditCity, setEditCity] = useState(citydata?.city);
  const [EditCountry, setEditCountry] = useState(citydata?.country);
  console.log("EditCountry", EditCountry);
  const [EditZone, setEditZone] = useState(citydata?.zone);
  const [EditChecked, setEditChecked] = useState(citydata?.checked);
  // const { update } = useFieldArray({ name: "array" });
  // update(0, { From: "", To: "" });

  // for (let i = 0; i < citydata?.pincodes?.length; i++) {

  // }
  const [EditPinStart, setEditPinStart] = useState();
  const [EditPinTo, setEditPinTo] = useState();

  let ZoneId = zonedatum?.find((x) => x._id == Zone)?.zoneName;
  let CountryID = country?.find((x) => x._id == Country)?.Country;
  let stateID = Statedatum?.find((x) => x._id == State)?.state;
  console.log(".................", ZoneId, CountryID, stateID);
  const SaveStateDetails = (e) => {
    dispatch(
      saveCity({
        iso: e.iso,
        stateId: State,
        state: stateID,
        city: e.city,
        zoneId: Zone,
        countryId: Country,
        zone: ZoneId,
        country: CountryID,
        checked: Checked,
        pincode: e.pincode,
      })
    );
    window.alert("Details saved Successfully");
    navigate("/citygrid");
  };

  const UpdateStateDetails = (data) => {
    dispatch(
      updateCity({
        id: EditId,
        iso: EditIso,
        state: EditState,
        city: EditCity,
        zone: EditZone,
        country: EditCountry,
        pincode: data.pincode,
        checked: EditChecked,
      })
    );
    window.alert("Details Updated Successfully");
    navigate("/citygrid");
  };

  const classes = useStyles();
  const theme = createTheme();
  let item = citydata?.pincodes;
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      pincode: item ? item : [{ From: "", To: "" }],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "pincode",
  });
  const handleappendupdate = () => {
    append({ From: "", To: "" });
  };

  useEffect(() => {
    dispatch(ZoneListDetails());
    dispatch(CountryListDetails());
    dispatch(StateListDetails());
    if (savecity) {
      dispatch({ type: CITY_SAVE_RESET });
    }

    if (cityUpdate) {
      dispatch({ type: CITY_UPDATE_RESET });
    }
  }, [dispatch, savecity, cityUpdate]);

  return (
    <>
      {EditId ? (
        <>
          {" "}
          <div
            style={{
              boxShadow: "5px 0 20px rgba(1,41,112,0.08)",
              padding: "10px",
            }}
          >
            <Box>
              <Typography variant='h6' sx={{ mt: -1 }}>
                Add New
              </Typography>
              <Breadcrumbs
                separator={<NavigateNextIcon fontSize='small' />}
                aria-label='breadcrumb'
              >
                <Link
                  to='/'
                  style={{
                    color: "rgba(0, 0, 0, 0.6)",
                    fontSize: "13px",
                  }}
                >
                  <Typography sx={{ fontSize: 13 }}>Home</Typography>
                </Link>
                <Link
                  to='/citygrid'
                  style={{ color: "rgba(0, 0, 0, 0.6)", fontSize: "13px" }}
                >
                  <Typography sx={{ fontSize: 13 }}>Cities</Typography>
                </Link>
              </Breadcrumbs>
              <Box sx={{ mt: 0, mb: 1 }}>
                <Divider />
                <Box>
                  {" "}
                  <ThemeProvider theme={theme}>
                    <Container
                      component='main'
                      maxWidth='sm'
                      sx={{
                        my: { xs: 3, md: 6, lg: 10 },
                        p: { xs: 2, md: 1 },
                      }}
                    >
                      <CssBaseline />
                      <Box
                        component='form'
                        onSubmit={handleSubmit(UpdateStateDetails)}
                        sx={{
                          display: "flex",
                          width: "110%",
                          flexDirection: "column",
                          borderRadius: "0px",
                          p: 10,
                          border: "1px solid #888888",
                          mt: -10,
                          boxShadow: " 1px 1px 1px 1px #909090",
                          mb: -5,
                        }}
                      >
                        <Box sx={{ ml: 15, mt: 15 }}>
                          {" "}
                          <Box sx={{ display: "flex", mt: -23, ml: -20 }}>
                            <Typography sx={{ fontSize: 13, mt: 2 }}>
                              <span style={{ color: "red" }}>*</span>Zone:
                            </Typography>
                            <Box sx={{ minWidth: 320, ml: 5, mt: 1 }}>
                              <FormControl fullWidth>
                                <InputLabel id='demo-simple-select-label'></InputLabel>
                                <Select
                                  size='small'
                                  labelId='demo-simple-select-label'
                                  id='demo-simple-select'
                                  onChange={(e) => setEditZone(e.target.value)}
                                  value={EditZone}
                                  inputProps={{ style: { fontSize: 15 } }}
                                >
                                  {zonedatum
                                    ?.filter((item) => {
                                      return item.checked === true;
                                    })
                                    ?.map((item) => (
                                      <MenuItem
                                        key={item?._id}
                                        value={item?.zoneName}
                                        style={{ fontSize: 13 }}
                                      >
                                        {item?.zoneName}
                                      </MenuItem>
                                    ))}
                                </Select>
                              </FormControl>
                            </Box>
                          </Box>
                          <Box sx={{ display: "flex", mt: 0, ml: -20 }}>
                            <Typography sx={{ fontSize: 13, mt: 2 }}>
                              <span style={{ color: "red" }}>*</span>Country:
                            </Typography>
                            <Box sx={{ minWidth: 320, ml: 2.5, mt: 1 }}>
                              <FormControl fullWidth>
                                <InputLabel id='demo-simple-select-label'></InputLabel>
                                <Select
                                  size='small'
                                  labelId='demo-simple-select-label'
                                  id='demo-simple-select'
                                  value={EditCountry}
                                  onChange={(e) =>
                                    setEditCountry(e.target.value)
                                  }
                                >
                                  {country
                                    ?.filter((state) => {
                                      return state.checked === true;
                                    })
                                    ?.map(
                                      (item) => (
                                        console.log("item", item),
                                        (
                                          <MenuItem
                                            key={item?._id}
                                            value={item?.Country}
                                            style={{ fontSize: 13, ml: 1 }}
                                          >
                                            {item?.Country}
                                          </MenuItem>
                                        )
                                      )
                                    )}
                                </Select>
                              </FormControl>
                            </Box>
                          </Box>
                          <Box sx={{ display: "flex", mt: 2, ml: -20 }}>
                            <Box>
                              <Typography sx={{ fontSize: 13 }}>
                                {" "}
                                <span style={{ color: "red" }}>*</span>State:
                              </Typography>
                            </Box>
                            <Box sx={{ minWidth: 320, ml: 5, mt: 0 }}>
                              <FormControl fullWidth>
                                <InputLabel id='demo-simple-select-label'></InputLabel>
                                <Select
                                  size='small'
                                  labelId='demo-simple-select-label'
                                  id='demo-simple-select'
                                  value={EditState}
                                  onChange={(e) => setEditState(e.target.value)}
                                  inputProps={{ style: { fontSize: 15 } }}
                                >
                                  {Statedatum?.filter((state) => {
                                    return state.checked === true;
                                  })?.map((item) => (
                                    <MenuItem
                                      key={item?._id}
                                      value={item?.state}
                                      style={{ fontSize: 13 }}
                                    >
                                      {item?.state}
                                    </MenuItem>
                                  ))}
                                </Select>
                              </FormControl>
                            </Box>
                          </Box>
                          <Box sx={{ display: "flex", mt: 2, ml: -20 }}>
                            <Box>
                              <Typography sx={{ fontSize: 13 }}>
                                {" "}
                                <span style={{ color: "red" }}>*</span>City:
                              </Typography>
                            </Box>
                            <Box sx={{ ml: 6 }}>
                              {" "}
                              <TextField
                                fullWidth
                                id='outlined-size-small'
                                size='small'
                                value={EditCity}
                                onChange={(e) => setEditCity(e.target.value)}
                                inputProps={{ style: { fontSize: 15 } }}
                              />
                            </Box>
                          </Box>
                          <Box sx={{ display: "flex", mt: 2, ml: -20 }}>
                            <Box>
                              <Typography sx={{ fontSize: 13 }}>
                                {" "}
                                <span style={{ color: "red" }}>*</span>ISO Code:
                              </Typography>
                            </Box>
                            <Box sx={{ ml: 1.9 }}>
                              {" "}
                              <TextField
                                fullWidth
                                id='outlined-size-small'
                                size='small'
                                onChange={(e) => setEditIso(e.target.value)}
                                value={EditIso}
                                inputProps={{ style: { fontSize: 15 } }}
                              />
                            </Box>
                          </Box>
                          <Box sx={{ display: "flex", mt: 2, ml: -20 }}>
                            <Box>
                              <Typography sx={{ fontSize: 13 }}>
                                {" "}
                                <span style={{ color: "red" }}>*</span>PinCode:
                              </Typography>
                            </Box>
                            <Box
                              sx={{
                                ml: 1.5,
                                overflow: "auto",
                                height: 200,
                              }}
                            >
                              {" "}
                              {fields ? (
                                <>
                                  {fields.map((item, index) => {
                                    return (
                                      <>
                                        <Box sx={{ display: "flex" }}>
                                          <Box
                                            sx={{
                                              "& .MuiTextField-root": {
                                                m: 1,
                                                width: "16ch",
                                              },
                                            }}
                                            noValidate
                                            autoComplete='off'
                                          >
                                            <Controller
                                              control={control}
                                              name={name}
                                              render={({ field }) => (
                                                <TextField
                                                  size='small'
                                                  fullWidth
                                                  name={`pincode[${index}].From`}
                                                  defaultValue={item.From}
                                                  {...register(
                                                    `pincode.${index}.From`,
                                                    {
                                                      required: true,
                                                      pattern: {
                                                        value: /^\d{6}$/,
                                                      },
                                                      maxLength: 6,
                                                      minLength: 6,
                                                    }
                                                  )}
                                                  // error={!!errors?.From}
                                                />
                                              )}
                                            />
                                            {errors?.From?.type ===
                                              "required" && (
                                              <span className='formError'>
                                                Mobile number is required
                                              </span>
                                            )}
                                            {errors?.From?.type ===
                                              "pattern" && (
                                              <span className='formError'>
                                                Mobile number is invalid
                                              </span>
                                            )}
                                            {errors?.From?.type ===
                                              "maxLength" && (
                                              <span className='formError'>
                                                Mobile number is invalid
                                              </span>
                                            )}
                                            {errors?.From?.type ===
                                              "minLength" && (
                                              <span className='formError'>
                                                Mobile number is invalid
                                              </span>
                                            )}
                                          </Box>
                                          <Box
                                            sx={{
                                              "& .MuiTextField-root": {
                                                m: 1,
                                                width: "16ch",
                                              },
                                            }}
                                            noValidate
                                            autoComplete='off'
                                          >
                                            <Controller
                                              control={control}
                                              name={name}
                                              render={({ field }) => (
                                                <TextField
                                                  size='small'
                                                  fullWidth
                                                  name={`pincode[${index}].To`}
                                                  defaultValue={item.To}
                                                  {...register(
                                                    `pincode.${index}.To`,
                                                    {
                                                      required: true,
                                                      pattern: {
                                                        value: /^\d{6}$/,
                                                      },
                                                      maxLength: 6,
                                                      minLength: 6,
                                                    }
                                                  )}
                                                />
                                              )}
                                            />
                                          </Box>
                                          <Box
                                            sx={{
                                              "& > :not(style)": {
                                                m: 2,
                                              },
                                            }}
                                          >
                                            {" "}
                                          </Box>

                                          <IconButton
                                            type='button'
                                            onClick={() => {
                                              append({
                                                From: "",
                                                To: "",
                                              });
                                            }}
                                          >
                                            <AddIcon
                                              sx={{
                                                color: "#fff",
                                                backgroundColor: "green",
                                                borderRadius: "50%",
                                                fontSize: 25,
                                              }}
                                            />
                                          </IconButton>
                                          <IconButton
                                            type='button'
                                            onClick={() => remove(index)}
                                          >
                                            <ClearIcon
                                              sx={{
                                                color: "#fff",
                                                backgroundColor: "red",
                                                borderRadius: "50%",
                                                fontSize: 25,
                                              }}
                                            />
                                          </IconButton>
                                        </Box>
                                      </>
                                    );
                                  })}
                                </>
                              ) : (
                                <> </>
                              )}
                            </Box>
                          </Box>
                          <Box sx={{ display: "flex", ml: -20 }}>
                            <Typography sx={{ fontSize: 13, mt: 3 }}>
                              <span style={{ color: "red" }}>*</span>Active:
                            </Typography>
                            <Box sx={{ ml: 3, mt: 2 }}>
                              <Switch
                                className={classes.switch}
                                checked={EditChecked}
                                // color="success"
                                onChange={(e) =>
                                  setEditChecked(e.target.checked)
                                }

                                // size="small"
                              />
                            </Box>
                          </Box>
                          <Box>
                            <Button
                              // fullWidth
                              variant='contained'
                              sx={{ mt: 3, ml: 10 }}
                              type='submit'
                            >
                              update
                            </Button>
                          </Box>
                        </Box>
                      </Box>
                    </Container>
                  </ThemeProvider>
                </Box>
              </Box>
            </Box>
          </div>
        </>
      ) : (
        <>
          {" "}
          <div
            style={{
              boxShadow: "5px 0 20px rgba(1,41,112,0.08)",
              padding: "10px",
            }}
          >
            <Box>
              <Typography variant='h6' sx={{ mt: -1 }}>
                Add New
              </Typography>
              <Breadcrumbs
                separator={<NavigateNextIcon fontSize='small' />}
                aria-label='breadcrumb'
              >
                <Link
                  to='/'
                  style={{
                    color: "rgba(0, 0, 0, 0.6)",
                    fontSize: "13px",
                  }}
                >
                  <Typography sx={{ fontSize: 13 }}>Home</Typography>
                </Link>
                <Link
                  to='/citygrid'
                  style={{ color: "rgba(0, 0, 0, 0.6)", fontSize: "13px" }}
                >
                  <Typography sx={{ fontSize: 13 }}>Cities</Typography>
                </Link>
              </Breadcrumbs>
              <Box sx={{ mt: 0, mb: 1 }}>
                <Divider />
                <Box>
                  {" "}
                  <ThemeProvider theme={theme}>
                    <Container
                      component='main'
                      maxWidth='sm'
                      sx={{
                        my: { xs: 3, md: 6, lg: 10 },
                        p: { xs: 2, md: 1 },
                      }}
                    >
                      <CssBaseline />
                      <Box
                        component='form'
                        onSubmit={handleSubmit(SaveStateDetails)}
                        sx={{
                          display: "flex",
                          width: "110%",
                          flexDirection: "column",
                          borderRadius: "0px",
                          p: 10,
                          border: "1px solid #888888",
                          mt: -10,
                          boxShadow: " 1px 1px 1px 1px #909090",
                          mb: -5,
                        }}
                      >
                        <Box sx={{ ml: 15, mt: 15 }}>
                          {" "}
                          <Box sx={{ display: "flex", mt: -23, ml: -20 }}>
                            <Typography sx={{ fontSize: 13, mt: 2 }}>
                              <span style={{ color: "red" }}>*</span>Zone:
                            </Typography>
                            <Box sx={{ minWidth: 320, ml: 5, mt: 1 }}>
                              <FormControl fullWidth>
                                <InputLabel id='demo-simple-select-label'></InputLabel>
                                <Select
                                  size='small'
                                  labelId='demo-simple-select-label'
                                  id='demo-simple-select'
                                  // value={Zone}
                                  onChange={(e) => setZone(e.target.value)}
                                  inputProps={{ style: { fontSize: 15 } }}
                                >
                                  {zonedatum
                                    ?.filter((item) => {
                                      return item.checked === true;
                                    })
                                    ?.map((item) => (
                                      <MenuItem
                                        key={item?._id}
                                        value={item?._id}
                                        style={{ fontSize: 13 }}
                                      >
                                        {item?.zoneName}
                                      </MenuItem>
                                    ))}
                                </Select>
                              </FormControl>
                            </Box>
                          </Box>
                          <Box sx={{ display: "flex", mt: 0, ml: -20 }}>
                            <Typography sx={{ fontSize: 13, mt: 2 }}>
                              <span style={{ color: "red" }}>*</span>Country:
                            </Typography>
                            <Box sx={{ minWidth: 320, ml: 2.5, mt: 1 }}>
                              <FormControl fullWidth>
                                <InputLabel id='demo-simple-select-label'></InputLabel>
                                <Select
                                  size='small'
                                  labelId='demo-simple-select-label'
                                  id='demo-simple-select'
                                  onChange={(e) => setCountry(e.target.value)}
                                >
                                  {country
                                    ?.filter((state) => {
                                      return state.checked === true;
                                    })
                                    ?.map((item) => (
                                      <MenuItem
                                        key={item?._id}
                                        value={item?._id}
                                        style={{ fontSize: 13, ml: 1 }}
                                      >
                                        {item?.Country}
                                      </MenuItem>
                                    ))}
                                </Select>
                              </FormControl>
                            </Box>
                          </Box>
                          <Box sx={{ display: "flex", mt: 0, ml: -20 }}>
                            <Typography sx={{ fontSize: 13, mt: 2 }}>
                              <span style={{ color: "red" }}>*</span>State:
                            </Typography>
                            <Box sx={{ minWidth: 320, ml: 5, mt: 1 }}>
                              <FormControl fullWidth>
                                <InputLabel id='demo-simple-select-label'></InputLabel>
                                <Select
                                  size='small'
                                  labelId='demo-simple-select-label'
                                  id='demo-simple-select'
                                  // value={Zone}
                                  onChange={(e) => setState(e.target.value)}
                                  inputProps={{ style: { fontSize: 15 } }}
                                >
                                  {Statedatum?.filter((state) => {
                                    return state.checked === true;
                                  })?.map((item) => (
                                    <MenuItem
                                      key={item?._id}
                                      value={item?._id}
                                      style={{ fontSize: 13 }}
                                    >
                                      {item?.state}
                                    </MenuItem>
                                  ))}
                                </Select>
                              </FormControl>
                            </Box>
                          </Box>
                          <Box sx={{ display: "flex", mt: 2, ml: -20 }}>
                            <Box>
                              <Typography sx={{ fontSize: 13 }}>
                                {" "}
                                <span style={{ color: "red" }}>*</span>City:
                              </Typography>
                            </Box>
                            <Box sx={{ ml: 6 }}>
                              {" "}
                              <TextField
                                fullWidth
                                id='outlined-size-small'
                                size='small'
                                {...register("city", { required: true })}
                                error={errors.city}
                                inputProps={{ style: { fontSize: 15 } }}
                              />
                            </Box>
                          </Box>
                          <Box sx={{ display: "flex", mt: 2, ml: -20 }}>
                            <Box>
                              <Typography sx={{ fontSize: 13 }}>
                                {" "}
                                <span style={{ color: "red" }}>*</span>ISO Code:
                              </Typography>
                            </Box>
                            <Box sx={{ ml: 1.9 }}>
                              {" "}
                              <TextField
                                fullWidth
                                id='outlined-size-small'
                                size='small'
                                {...register("iso", { required: true })}
                                error={errors.iso}
                                inputProps={{ style: { fontSize: 15 } }}
                              />
                            </Box>
                          </Box>
                          <Box sx={{ display: "flex", mt: 2, ml: -20 }}>
                            <Box>
                              <Typography sx={{ fontSize: 13, mt: 2 }}>
                                {" "}
                                <span style={{ color: "red" }}>*</span>PinCode:
                              </Typography>
                            </Box>
                            <Box
                              sx={{
                                ml: 1.5,
                                overflow: "auto",
                                height: 200,
                              }}
                            >
                              {" "}
                              {fields ? (
                                <>
                                  {fields?.map((item, index) => {
                                    return (
                                      <>
                                        <Box sx={{ display: "flex" }}>
                                          <Box
                                            sx={{
                                              "& .MuiTextField-root": {
                                                m: 1,
                                                width: "16ch",
                                              },
                                            }}
                                            autoComplete='off'
                                          >
                                            <TextField
                                              size='small'
                                              pattern='^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$'
                                              id='outlined-size-normal'
                                              name={`pincode.${index}.From`}
                                              key={item.From}
                                              placeholder='From'
                                              {...register(
                                                `pincode.${index}.From`,
                                                {
                                                  required: true,
                                                  pattern: {
                                                    value: /^\d{6}$/,
                                                  },
                                                  maxLength: 6,
                                                  minLength: 6,
                                                }
                                              )}

                                              // error={errors?.pincode[0]?.From}
                                            />
                                            {/* {errors?.pincode[0]?.From
                                                ?.type === "required" && (
                                                <Typography
                                                  sx={{
                                                    fontSize: 10,
                                                    color: "red",
                                                    ml: 3,
                                                  }}
                                                >
                                                  Pincode is required
                                                </Typography>
                                              )}

                                              {errors?.pincode[0]?.From
                                                ?.type === "maxLength" && (
                                                <Typography
                                                  sx={{
                                                    fontSize: 10,
                                                    color: "red",
                                                    ml: 3,
                                                  }}
                                                >
                                                  Pincode is too long
                                                </Typography>
                                              )}
                                              {errors?.pincode[0]?.From
                                                ?.type === "minLength" && (
                                                <Typography
                                                  sx={{
                                                    fontSize: 10,
                                                    color: "red",
                                                    ml: 3,
                                                  }}
                                                >
                                                  Pincode is too short
                                                </Typography>
                                              )} */}
                                          </Box>

                                          <Box
                                            sx={{
                                              "& .MuiTextField-root": {
                                                m: 1,
                                                width: "16ch",
                                              },
                                            }}
                                            autoComplete='off'
                                          >
                                            <TextField
                                              size='small'
                                              pattern='[1-9][0-9]{5}'
                                              id='outlined-size-normal'
                                              key={item.To}
                                              placeholder='To'
                                              name={`pincode.${index}.To`}
                                              {...register(
                                                `pincode.${index}.To`,
                                                {
                                                  required: true,
                                                  pattern: {
                                                    value: /^\d{6}$/,
                                                  },
                                                  maxLength: 6,
                                                  minLength: 6,
                                                }
                                              )}
                                            />
                                          </Box>
                                          <Box
                                            sx={{
                                              "& > :not(style)": {
                                                m: 2,
                                              },
                                            }}
                                          >
                                            {" "}
                                          </Box>

                                          <IconButton
                                            type='button'
                                            onClick={handleappendupdate}
                                          >
                                            <AddIcon
                                              sx={{
                                                color: "#fff",
                                                backgroundColor: "green",
                                                borderRadius: "50%",
                                                fontSize: 25,
                                              }}
                                            />
                                          </IconButton>
                                          <IconButton
                                            type='button'
                                            onClick={() => remove(index)}
                                          >
                                            <ClearIcon
                                              sx={{
                                                color: "#fff",
                                                backgroundColor: "red",
                                                borderRadius: "50%",
                                                fontSize: 25,
                                              }}
                                            />
                                          </IconButton>
                                        </Box>
                                      </>
                                    );
                                  })}
                                </>
                              ) : (
                                <> </>
                              )}
                            </Box>
                          </Box>
                          <Box sx={{ display: "flex", ml: -20 }}>
                            <Typography sx={{ fontSize: 13, mt: 3 }}>
                              <span style={{ color: "red" }}>*</span>Active:
                            </Typography>
                            <Box sx={{ ml: 3, mt: 2 }}>
                              <Switch
                                className={classes.switch}
                                checked={Checked}
                                // color="success"
                                onChange={(e) => setChecked(e.target.checked)}
                                // size="small"
                              />
                            </Box>
                          </Box>
                          <Box>
                            <Button
                              // fullWidth
                              variant='contained'
                              sx={{ mt: 3, ml: 10, mb: -10 }}
                              type='submit'
                            >
                              Save
                            </Button>
                          </Box>
                        </Box>
                      </Box>
                    </Container>
                  </ThemeProvider>
                </Box>
              </Box>
            </Box>
          </div>
        </>
      )}
    </>
  );
}
