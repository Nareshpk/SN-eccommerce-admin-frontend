import Box from "@mui/material/Box";
import { useState } from 'react';
import { Switch, makeStyles } from "@material-ui/core";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import FormControlLabel from "@mui/material/FormControlLabel";
import Typography from "@mui/material/Typography";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Divider } from "../../node_modules/@material-ui/core/index";
import { CountryListDetails, deleteCountryMasterlist, deleteMultiplecountry, updateCountryEnable, updatecountryActivate } from '../actions/CountryAction';
import { COUNTRY_DETAIL_DELETE_RESET, COUNTRY_ENABLE_RESET, COUNTRY_ENABLE_UPDATES_RESET } from '../constants/CountryConstants';
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
export const CountryGridScreen = () => {

    const [selectionModel, setSelectionModel] = useState([]);
    console.log('selectionModel', selectionModel);
    const editHandler = (id) => {
        console.log('id', id);
        navigate(`/country/` + id);
    };
    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onProdctChange = () => {
        navigate("/country");
    };
    const deleteHandler = (id) => {
        if (window.confirm("Are you sure to delete?")) {
            dispatch(deleteCountryMasterlist(id));
        }
    };

    const CountryList = useSelector((state) => state.CountryList);
    const { country, loading } = CountryList;
    console.log('country', country);

    const CountryMasterDelete = useSelector((state) => state.CountryMasterDelete);
    const { success: countrylistdel } = CountryMasterDelete;

    const CountryEnable = useSelector((state) => state.CountryEnable);
    const { success: countryenable } = CountryEnable;

    const countryCheckbox = useSelector((state) => state.countryCheckbox);
    const { success: enableallcheckbox } = countryCheckbox;

    const CountrymultipleDelete = useSelector((state) => state.CountrymultipleDelete);
    const { success: deletealldetails } = CountrymultipleDelete;

    /********************************************Bulk Action *********** */
    const [opencheck, setOpencheck] = useState(false);


    const [checkedcheck, setCheck] = useState(false);

    const [dchecked, setdisableChecked] = useState(false);
    const [dsablechecked, setdiChecked] = useState("");
    const handleClickOpencheck = () => {
        setOpencheck(true);
        setCheck(false);
        setdisableChecked(false);
    };

    const handleChange = (event) => {
        setCheck(event.target.checked);
        setdisableChecked(false);
    };

    const handledisableChange = (event) => {
        setdisableChecked(event.target.checked);
        setCheck(false);
        if (dchecked === dchecked) {
            setdiChecked(false);
        }
    };


    const handleClosecheck = () => {
        setOpencheck(false);
        if (checkedcheck === true) {
            dispatch(
                updatecountryActivate({
                    checkboxId: selectionModel,
                    checkedshow: checkedcheck,
                })
            );
        } else {
            dispatch(
                updatecountryActivate({
                    checkboxId: selectionModel,
                    checkedhide: dsablechecked,
                })
            );
        }
    };
    const handleDisClose = () => {
        setOpencheck(false);
    };
    /*******************************Multi delete Action*************************** */
    // const [deleteopen, setdeleteopen] = useState(false);
    const [checkeddelete, setCheckeddelete] = useState(false);

    const handleClosecheckdelet = () => {
        setOpencheck(false);
        if (checkeddelete == true) {
            dispatch(deleteMultiplecountry({ id: selectionModel }));
        }
    };
    const handleChangedelete = (event) => {
        setCheckeddelete(event.target.checked);
    };
    /***************************** */
    useEffect(() => {
        if (countrylistdel) {
            dispatch({ type: COUNTRY_DETAIL_DELETE_RESET })
        }
        if (CountryEnable) {
            dispatch({ type: COUNTRY_ENABLE_RESET })
        }
        if (enableallcheckbox) {
            dispatch({ type: COUNTRY_ENABLE_UPDATES_RESET })
        }
        if (deletealldetails) {
            dispatch({ type: deletealldetails })
        }
        dispatch(CountryListDetails());
        dispatch(deleteMultiplecountry())
    }, [dispatch, countrylistdel, countryenable, enableallcheckbox, deletealldetails]);

    const handleChangeEnabled = (e, params) => {
        if (e.target.checked === true) {
            dispatch(
                updateCountryEnable({
                    id: params,
                    active: e.target.checked,
                })
            );
        } else {
            dispatch(
                updateCountryEnable({
                    id: params,
                    deactive: e.target.checked,
                })
            );
        }
    };

    const columns = [
        {
            field: "_id",
            headerName: "ID",
            width: 25,
            editable: true,
            headerClassName: "super-app-theme--header",
            renderCell: (index) => index.api.getRowIndex(index.row._id) + 1,
        },
        {
            field: "Country",
            headerName: "Country",
            editable: true,
            width: 255,
            headerClassName: "super-app-theme--header",
            renderCell: (params) => {
                return <Typography sx={{ fontSize: 13 }}>{params.row.Country}</Typography>;
            },
        },
        {
            field: "Code",
            headerName: "ISO Code",
            editable: true,
            width: 175,
            headerClassName: "super-app-theme--header",
            renderCell: (params) => {
                return <Typography sx={{ fontSize: 13 }}>{params.row.Code}</Typography>;
            },
        },
        {
            field: "zone",
            headerName: "Zone",
            editable: true,
            width: 175,
            headerClassName: "super-app-theme--header",
            renderCell: (params) => {
                return <Typography sx={{ fontSize: 13 }}>{params.row.zone}</Typography>;
            },
        },
        {
            field: "enable",
            headerName: "Status",
            rate: "This column has a value getter and is not sortable.",
            editable: true,
            width: 94,
            headerClassName: "super-app-theme--header",
            renderCell: (params) => {
                if (params.row.checked == true) {
                    return (
                        <FormControlLabel
                            control={
                                <Switch
                                    size='small'
                                    className={classes.switch}
                                    // color="#00CC00"
                                    checked
                                    onClick={(e) => handleChangeEnabled(e, params.row._id)}
                                />
                            }
                        />
                    );
                } else {
                    return (
                        <FormControlLabel
                            control={
                                <Switch
                                    size='small'
                                    onClick={(e) => handleChangeEnabled(e, params.row._id)}
                                />
                            }
                        />
                    );
                }
            },
        },

        {
            field: "edit",
            headerName: "Edit",
            width: 70,
            headerClassName: "super-app-theme--header",
            renderCell: (params) => (
                <>
                    <EditIcon
                        onClick={() => editHandler(params.row._id)}
                        style={{
                            color: "#993399",
                            fontSize: 20,
                            margin: 20,
                            cursor: "pointer",
                        }}
                    />
                </>
            ),
        },
        {
            field: "viwe",
            headerName: "Delete",
            width: 70,
            headerClassName: "super-app-theme--header",
            renderCell: (params) => (
                <>
                    <DeleteIcon
                        onClick={() => deleteHandler(params.row._id)}
                        style={{
                            color: "#FF0033",
                            fontSize: 20,
                            margin: 20,
                            cursor: "pointer",
                        }}
                    />
                </>
            ),
        },
    ];
    return (

        <div>
            <Box sx={{ display: "flex" }}>
                <Typography variant="h6" sx={{ mt: -1 }}>
                    Country
                </Typography>
                <Box sx={{ ml: "auto" }}>
                    <Button
                        variant="contained"
                        sx={{
                            mr: 3,
                            mt: -1,
                            borderRadius: "20px",
                            backgroundColor: "#0099CC",
                            fontSize: 12,
                        }}
                        onClick={onProdctChange}
                    >
                        <AddCircleOutlineIcon sx={{ fontSize: 18 }} />
                        Add New Country
                    </Button>
                </Box>
            </Box>
            <Box sx={{ mt: 2, mb: 1 }}>
                <Divider />
            </Box>
            <Box>
                {" "}
                <Box sx={{ mt: 2, display: "flex" }}>
                    <Breadcrumbs aria-label="breadcrumb flat">
                        <div className="breadcrumb flat">
                            <Link to="/locatgrid">
                                Zones
                            </Link>
                            <Link to="/countrygrid" className="active">Countries</Link>
                            <Link to="/stategrid">States</Link>
                            <Link to="/citygrid">Cities</Link>
                        </div>
                    </Breadcrumbs>
                    <Box>
                        <Button
                            sx={{ mb: 2, ml: 50 }}
                            variant='contained'
                            onClick={handleClickOpencheck}
                        >
                            Bulk
                        </Button>
                        <Box>
                            <Dialog
                                open={opencheck}
                                aria-labelledby='responsive-dialog-title'
                            >
                                <DialogTitle id='responsive-dialog-title'>
                                    {"Selected One"}
                                </DialogTitle>
                                <DialogContent>

                                    <DialogContentText>
                                        <FormControlLabel
                                            label='Enable'
                                            control={
                                                <Checkbox
                                                    checked={checkedcheck}
                                                    onChange={handleChange}
                                                    inputProps={{
                                                        "aria-label": "controlled",
                                                    }}
                                                />
                                            }
                                        />

                                        <FormControlLabel
                                            label='Disable'
                                            control={
                                                <Checkbox
                                                    checked={dchecked}
                                                    onChange={handledisableChange}
                                                    inputProps={{
                                                        "aria-label": "controlled",
                                                    }}
                                                />
                                            }
                                        />
                                        <FormControlLabel
                                            label="Delete"
                                            control={
                                                <Checkbox
                                                    checked={checkeddelete}
                                                    onChange={handleChangedelete}
                                                    inputProps={{
                                                        "aria-label": "controlled",
                                                    }}
                                                />
                                            }
                                        />
                                    </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                    <Button autoFocus onClick={handleDisClose}>
                                        Cancel
                                    </Button>

                                    {checkeddelete == true ? (
                                        <>
                                            <Button onClick={handleClosecheckdelet} autoFocus>
                                                Delete
                                            </Button>
                                        </>
                                    ) : (
                                        <>
                                            {" "}
                                            <Button onClick={handleClosecheck} autoFocus>
                                                Done
                                            </Button>
                                        </>
                                    )}
                                </DialogActions>
                            </Dialog>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ mt: 1, mb: 1 }}>
                    <Divider />
                </Box>

                <Box
                    sx={{
                        height: 400,
                        width: "100%",
                        "& .super-app-theme--header": {
                            backgroundColor: "#808080",
                            color: "#FFFFFF",
                        },
                        "& .css-1jbbcbn-MuiDataGrid-columnHeaderTitle": {
                            fontSize: 14,
                        },
                        ".css-o8hwua-MuiDataGrid-root .MuiDataGrid-cellContent": {
                            fontSize: 12,
                        },
                        ".css-bfht93-MuiDataGrid-root .MuiDataGrid-columnHeader--alignCenter .MuiDataGrid-columnHeaderTitleContainer":
                        {
                            backgroundColor: "#808080",
                            color: "#FFFFFF",
                        },
                        ".css-h4y409-MuiList-root": {
                            display: "grid",
                        },
                        ".css-1omg972-MuiDataGrid-root .MuiDataGrid-columnHeader--alignCenter .MuiDataGrid-columnHeaderTitleContainer":
                        {
                            backgroundColor: "#808080",
                        },
                    }}
                >
                    <DataGrid
                        sx={{
                            boxShadow: 10,
                            borderRadius: 0,
                            m: 2,
                        }}
                        columns={columns}
                        rows={country ? country : ""}
                        getRowId={(rows) => rows._id}
                        VerticalAlignment="Center"
                        loading={loading}
                        rowHeight={40}
                        headerHeight={35}
                        pagination
                        checkboxSelection
                        onSelectionModelChange={(newSelectionModel) => {
                            setSelectionModel(newSelectionModel);
                        }}
                        selectionModel={selectionModel}
                    />
                </Box>
            </Box>
        </div>
    );
}



export default CountryGridScreen;