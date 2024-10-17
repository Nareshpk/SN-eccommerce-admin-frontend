import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Box from "@mui/material/Box";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";
import { Divider } from "../../node_modules/@material-ui/core/index";
import TextField from "@mui/material/TextField";
import { makeStyles, Switch } from "@material-ui/core";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux"; // useDispatch,
import { ZoneListDetails } from "../actions/ZoneAction";
import { useEffect, useState } from "react";
import { CountryListDetails } from "../actions/CountryAction";
import { saveState, updateState } from "../actions/StateAction";
import {
  STATE_SAVE_RESET,
  STATE_UPDATE_RESET,
} from "../constants/StateConstants";
import { useNavigate } from "../../node_modules/react-router-dom/dist/index";
// import { State } from "country-state-city";
// import { getAllStates } from "../../node_modules/country-state-city/lib/state";
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
export default function StateSreen() {
  const params = useParams();
  const EditId = params.id;

  const ZoneList = useSelector((state) => state.ZoneList);
  const { zonedatum } = ZoneList;

  const CountryList = useSelector((state) => state.CountryList);
  const { country } = CountryList;

  const StateSave = useSelector((state) => state.StateSave);
  const { success: savestate } = StateSave;
  const StateUpdate = useSelector((state) => state.StateUpdate);
  const { success: stateUpdate } = StateUpdate;
  const StateList = useSelector((state) => state.StateList);
  const { Statedatum } = StateList;

  const statedata = Statedatum?.find((x) => x._id === EditId);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [Zone, setZone] = useState("");
  const [Countrys, setCountry] = useState("");
  const [Checked, setChecked] = useState(true);
  const [EditIso, setEditIso] = useState(statedata?.iso);
  const [EditState, setEditState] = useState(statedata?.state);
  const [EditCountry, setEditCountry] = useState(statedata?.country);
  const [EditZone, setEditZone] = useState(statedata?.zone);
  const [EditChecked, setEditChecked] = useState(statedata?.checked);
  let ZoneId = zonedatum?.find((x) => x._id == Zone)?.zoneName;
  let CountryID = country?.find((x) => x._id == Countrys)?.Country;
  const SaveStateDetails = (e) => {
    dispatch(
      saveState({
        iso: e.iso,
        state: e.state,
        zoneId: Zone,
        countryId: Countrys,
        zone: ZoneId,
        countrtyId: Countrys,
        country: CountryID,
        checked: Checked,
      })
    );

    window.alert("Details saved Successfully");
    navigate("/stategrid");
  };

  const UpdateStateDetails = () => {
    dispatch(
      updateState({
        id: EditId,
        iso: EditIso,
        state: EditState,
        zone: EditZone,
        country: EditCountry,
        checked: EditChecked,
      })
    );
    window.alert("Details Updated Successfully");
    navigate("/stategrid");
  };

  const classes = useStyles();
  const theme = createTheme();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    dispatch(ZoneListDetails());
    dispatch(CountryListDetails());
    if (savestate) {
      dispatch({ type: STATE_SAVE_RESET });
    }

    if (stateUpdate) {
      dispatch({ type: STATE_UPDATE_RESET });
    }
    // dispatch(getAllStates());
  }, [dispatch, savestate, stateUpdate]);

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
                  to='/stategrid'
                  style={{ color: "rgba(0, 0, 0, 0.6)", fontSize: "13px" }}
                >
                  <Typography sx={{ fontSize: 13 }}>States</Typography>
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
                          width: "100%",
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
                                  onChange={(e) =>
                                    setEditCountry(e.target.value)
                                  }
                                  value={EditCountry}
                                >
                                  {country
                                    ?.filter((item) => {
                                      return item.checked === true;
                                    })
                                    ?.map((item) => (
                                      <MenuItem
                                        key={item?._id}
                                        value={item?.Country}
                                        style={{ fontSize: 13, ml: 1 }}
                                      >
                                        {item?.Country}
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
                                <span style={{ color: "red" }}>*</span>State:
                              </Typography>
                            </Box>
                            <Box sx={{ ml: 5 }}>
                              {" "}
                              <TextField
                                fullWidth
                                id='outlined-size-small'
                                size='small'
                                onChange={(e) => setEditState(e.target.value)}
                                value={EditState}
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
                  to='/stategrid'
                  style={{ color: "rgba(0, 0, 0, 0.6)", fontSize: "13px" }}
                >
                  <Typography sx={{ fontSize: 13 }}>States</Typography>
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
                          width: "100%",
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
                                    ?.filter((item) => {
                                      return item.checked === true;
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
                          <Box sx={{ display: "flex", mt: 2, ml: -20 }}>
                            <Box>
                              <Typography sx={{ fontSize: 13 }}>
                                {" "}
                                <span style={{ color: "red" }}>*</span>State:
                              </Typography>
                            </Box>
                            <Box sx={{ ml: 5 }}>
                              {" "}
                              <TextField
                                fullWidth
                                id='outlined-size-small'
                                size='small'
                                {...register("state", { required: true })}
                                error={errors.state}
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
                              sx={{ mt: 3, ml: 10 }}
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
