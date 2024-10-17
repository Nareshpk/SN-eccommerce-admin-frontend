import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Box from "@mui/material/Box";
import Breadcrumbs from "@mui/material/Breadcrumbs";
// import Button from "@mui/material/Button";
import { makeStyles, Switch } from "@material-ui/core";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Divider } from "../../node_modules/@material-ui/core/index";
import { countryDetails, updateCountrydetail } from "../actions/CountryAction";
import { useNavigate, useParams } from "../../node_modules/react-router-dom/dist/index";
import { COUNTRY_DETAIL_UPDATE_RESET } from "../constants/CountryConstants";
import { ZoneListDetails } from "../actions/ZoneAction";
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
export const CountryScreen = () => {
    const params = useParams();
    const EditId = params.id;
    const CountryList = useSelector((state) => state.CountryList);
    const { country } = CountryList;

    const CountryEdit = country?.find((x) => x._id === EditId);

    const CountryUpdate = useSelector((state) => state.CountryUpdate);
    const { success: updatecountry } = CountryUpdate;

    const ZoneList = useSelector((state) => state.ZoneList);
    const { zonedatum } = ZoneList;

    const theme = createTheme();
    const classes = useStyles();
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const [EditCountry, setEditCountry] = useState(CountryEdit?.Country);
    const [EditCode, setEditCode] = useState(CountryEdit?.Code);
    const [Editzone, setEditzone] = useState("");
    const [Editchecked, setEditchecked] = useState(CountryEdit?.checked);

    const handleChangeChekced = (event) => {
        setEditchecked(event.target.checked);
    };
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [checked, setchecked] = useState();
    const [zone, setZone] = useState("");
    const handleChangeChekced1 = (event) => {
        setchecked(event.target.checked);
    };
    let zoneId = zonedatum?.find(x => x._id == zone)?.zoneName

    const SaveCountryDetails = async (e) => {
        dispatch(
            countryDetails({
                Country: e.country,
                Code: e.code,
                checked: checked,
                zone: zoneId,
                zoneID: zone,
            })
        );
        window.confirm("Country Details Saved Successfully!!");
        navigate("/countrygrid");
        // event.target.reset();
    }

    const updateCountryDetails = async () => {
        dispatch(
            updateCountrydetail({
                id: EditId,
                Country: EditCountry,
                Code: EditCode,
                checked: Editchecked,
                zone: Editzone,
            })
        );
        window.confirm("Country Details Update Successfully!!");
        navigate("/countrygrid");
        event.target.reset();
    }

    useEffect(() => {
        dispatch(ZoneListDetails());
        if (updatecountry) {
            dispatch({ type: COUNTRY_DETAIL_UPDATE_RESET });
        }
        // dispatch(countryDetails());
    }, [dispatch, updatecountry]);
    return (
        <>{EditId ? (
            <> <div
                style={{ boxShadow: "5px 0 30px rgba(1,41,112,0.08)", padding: "10px" }}
            >
                <Box>
                    <Typography variant="h6" sx={{ mt: -1 }}>
                        Add New Country
                    </Typography>
                    <Breadcrumbs
                        separator={<NavigateNextIcon fontSize="small" />}
                        aria-label="breadcrumb"
                    >
                        <Link
                            to="/"
                            style={{
                                color: "rgba(0, 0, 0, 0.6)",
                                fontSize: "13px",
                            }}
                        >
                            <Typography sx={{ fontSize: 13 }}>Home</Typography>
                        </Link>
                        <Link
                            to="/countrygrid"
                            style={{ color: "rgba(0, 0, 0, 0.6)", fontSize: "13px" }}
                        >
                            <Typography sx={{ fontSize: 13 }}>Countries</Typography>
                        </Link>
                    </Breadcrumbs>
                    <Box sx={{ mt: 0, mb: 1 }}>
                        <Divider />
                        <Box>
                            {" "}
                            <ThemeProvider theme={theme}>
                                <Container
                                    component="main"
                                    maxWidth="sm"
                                    sx={{
                                        my: { xs: 3, md: 6, lg: 10 },
                                        p: { xs: 2, md: 1 },
                                    }}
                                >
                                    <CssBaseline />
                                    <Box
                                        component="form"
                                        onSubmit={handleSubmit(updateCountryDetails)}
                                        sx={{
                                            display: "flex",
                                            width: "120%",
                                            height: 430,
                                            flexDirection: "column",
                                            borderRadius: "0px",
                                            p: 5,
                                            border: "1px solid #888888",
                                            mt: -7,
                                            ml: -8,
                                            boxShadow: " 1px 1px 1px 1px #909090",
                                        }}
                                    >
                                        <Box sx={{ display: "flex" }}>
                                            <Typography sx={{ fontSize: 13, mt: 3 }}>
                                                <span style={{ color: "red" }}>*</span>Country
                                            </Typography>
                                            <Box sx={{ ml: 10, width: "70%" }}>
                                                <TextField
                                                    size="small"
                                                    fullWidth
                                                    margin="normal"
                                                    value={EditCountry}
                                                    onChange={(e) => setEditCountry(e.target.value)}
                                                    inputProps={{ style: { fontSize: 13 } }}
                                                />
                                            </Box>
                                        </Box>
                                        <Box sx={{ display: "flex" }}>
                                            <Typography sx={{ fontSize: 13, mt: 3 }}>
                                                <span style={{ color: "red" }}>*</span>ISO Code
                                            </Typography>
                                            <Box sx={{ ml: 9, width: "70%" }}>
                                                <TextField
                                                    size="small"
                                                    fullWidth
                                                    margin="normal"
                                                    value={EditCode}
                                                    onChange={(e) => setEditCode(e.target.value)}
                                                    inputProps={{ style: { fontSize: 13 } }}
                                                />
                                            </Box>
                                        </Box>
                                        <Box sx={{ display: "flex" }}>
                                            <Typography sx={{ fontSize: 13, mt: 2 }}>
                                                <span style={{ color: "red" }}>*</span>Zone
                                            </Typography>
                                            <Select
                                                sx={{
                                                    m: 0,
                                                    ml: 12.5,
                                                    mt: 1,
                                                    fontSize: "0.875rem",
                                                    width: "14.5rem",
                                                }}
                                                value={Editzone}
                                                onChange={(e) => setEditzone(e.target.value)}
                                                labelId="demo-simple-select-label"
                                                size="small"
                                            >
                                                {zonedatum?.map((item) => (
                                                    <MenuItem
                                                        key={item?._id}
                                                        value={item?.zoneName}
                                                        style={{ fontSize: 13, ml: 1 }}
                                                    >
                                                        {item?.zoneName}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </Box>
                                        <Box sx={{ display: "flex" }}>
                                            <Typography sx={{ fontSize: 13, mt: 3 }}>
                                                <span style={{ color: "red" }}>*</span>Active:
                                            </Typography>
                                            <Box sx={{ ml: 10, mt: 2 }}>
                                                <Switch
                                                    className={classes.switch}
                                                    checked={Editchecked}
                                                    onChange={handleChangeChekced}
                                                />
                                            </Box>
                                        </Box>
                                        <Box>
                                            <Button
                                                variant="contained"
                                                sx={{ mt: 10, ml: 35 }}
                                                type="submit"
                                            >
                                                Update
                                            </Button>
                                        </Box>
                                    </Box>
                                </Container>
                            </ThemeProvider>
                        </Box>
                    </Box>
                </Box>
            </div></>) : (<> <div
                style={{ boxShadow: "5px 0 30px rgba(1,41,112,0.08)", padding: "10px" }}
            >
                <Box>
                    <Typography variant="h6" sx={{ mt: -1 }}>
                        Add New Country
                    </Typography>
                    <Breadcrumbs
                        separator={<NavigateNextIcon fontSize="small" />}
                        aria-label="breadcrumb"
                    >
                        <Link
                            to="/"
                            style={{
                                color: "rgba(0, 0, 0, 0.6)",
                                fontSize: "13px",
                            }}
                        >
                            <Typography sx={{ fontSize: 13 }}>Home</Typography>
                        </Link>
                        <Link
                            to="/countrygrid"
                            style={{ color: "rgba(0, 0, 0, 0.6)", fontSize: "13px" }}
                        >
                            <Typography sx={{ fontSize: 13 }}>Countries</Typography>
                        </Link>
                    </Breadcrumbs>
                    <Box sx={{ mt: 0, mb: 1 }}>
                        <Divider />
                        <Box>
                            {" "}
                            <ThemeProvider theme={theme}>
                                <Container
                                    component="main"
                                    maxWidth="sm"
                                    sx={{
                                        my: { xs: 3, md: 6, lg: 10 },
                                        p: { xs: 2, md: 1 },
                                    }}
                                >
                                    <CssBaseline />
                                    <Box
                                        component="form"
                                        onSubmit={handleSubmit(SaveCountryDetails)}
                                        sx={{
                                            display: "flex",
                                            width: "120%",
                                            height: 430,
                                            flexDirection: "column",
                                            borderRadius: "0px",
                                            p: 5,
                                            border: "1px solid #888888",
                                            mt: -7,
                                            ml: -8,
                                            boxShadow: " 1px 1px 1px 1px #909090",
                                        }}
                                    >
                                        <Box sx={{ display: "flex" }}>
                                            <Typography sx={{ fontSize: 13, mt: 3 }}>
                                                <span style={{ color: "red" }}>*</span>Country
                                            </Typography>
                                            <Box sx={{ ml: 10, width: "70%" }}>
                                                <TextField
                                                    size="small"
                                                    fullWidth
                                                    margin="normal"
                                                    id="country"
                                                    name="country"
                                                    autoComplete="off"
                                                    inputProps={{ style: { fontSize: 13 } }}
                                                    {...register("country", { required: true })}
                                                    error={errors.country}
                                                />
                                                {errors.country && (
                                                    <span className="formError">Country is required</span>
                                                )}
                                            </Box>
                                        </Box>
                                        <Box sx={{ display: "flex" }}>
                                            <Typography sx={{ fontSize: 13, mt: 3 }}>
                                                <span style={{ color: "red" }}>*</span>ISO Code
                                            </Typography>
                                            <Box sx={{ ml: 9, width: "70%" }}>
                                                <TextField
                                                    size="small"
                                                    fullWidth
                                                    margin="normal"
                                                    id="code"
                                                    name="code"
                                                    autoComplete="off"
                                                    inputProps={{ style: { fontSize: 13 } }}
                                                    {...register("code", { required: true })}
                                                    error={errors.code}
                                                />
                                                {errors.code && (
                                                    <span className="formError">ISO Code  is required</span>
                                                )}
                                            </Box>
                                        </Box>
                                        <Box sx={{ display: "flex" }}>
                                            <Typography sx={{ fontSize: 13, mt: 2 }}>
                                                <span style={{ color: "red" }}>*</span>Zone
                                            </Typography>
                                            <Select
                                                sx={{
                                                    m: 0,
                                                    ml: 12.5,
                                                    mt: 1,
                                                    fontSize: "0.875rem",
                                                    width: "14.5rem",
                                                }}
                                                value={zone}
                                                onChange={(e) => setZone(e.target.value)}
                                                labelId="demo-simple-select-label"
                                                size="small"
                                            >
                                                {zonedatum?.map((item) => (
                                                    <MenuItem
                                                        key={item?._id}
                                                        value={item?._id}
                                                        style={{ fontSize: 13, ml: 1 }}
                                                    >
                                                        {item?.zoneName}
                                                    </MenuItem>
                                                ))}

                                            </Select>
                                        </Box>
                                        <Box sx={{ display: "flex" }}>
                                            <Typography sx={{ fontSize: 13, mt: 3 }}>
                                                <span style={{ color: "red" }}>*</span>Active:
                                            </Typography>
                                            <Box sx={{ ml: 10, mt: 2 }}>
                                                <Switch
                                                    className={classes.switch}
                                                    checked={checked}
                                                    onChange={handleChangeChekced1}
                                                />
                                            </Box>
                                        </Box>
                                        <Box>
                                            <Button
                                                variant="contained"
                                                sx={{ mt: 10, ml: 35 }}
                                                type="submit"
                                            >
                                                Save
                                            </Button>
                                        </Box>
                                    </Box>
                                </Container>
                            </ThemeProvider>
                        </Box>
                    </Box>
                </Box>
            </div></>)}</>


    )
}

export default CountryScreen;