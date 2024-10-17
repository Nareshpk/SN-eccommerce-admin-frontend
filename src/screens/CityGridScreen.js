import Box from "@mui/material/Box";

import { Switch } from "@material-ui/core";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Typography from "@mui/material/Typography";
import { DataGrid } from "@mui/x-data-grid";

import { makeStyles } from "@material-ui/core";
import Checkbox from "@mui/material/Checkbox";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import * as React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Divider } from "../../node_modules/@material-ui/core/index";
import { StateListDetails } from "../actions/StateAction";

import {
  ActiveCity,
  AssignZoneCityActivate,
  CityListDetails,
  deleteCity,
  deleteMultipleCity,
  updateCityActivate,
} from "../actions/CityAction";
import {
  CITY_BULKDELETE_RESET,
  CITY_CHECKBOX_RESET,
  CITY_DELETE_RESET,
  CITY_ENABLE_RESET,
  CITY_ZONEASSIGHN_RESET,
} from "../constants/CityConstants";
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
export default function CityGridScreen() {
  const dispatch = useDispatch();
  const classes = useStyles();

  const CityList = useSelector((state) => state.CityList);
  const { citydatum, loading } = CityList;

  const CityDelete = useSelector((state) => state.CityDelete);
  const { success: successDelete } = CityDelete;
  const CityEnable = useSelector((state) => state.CityEnable);
  const { success: stateen } = CityEnable;
  const CityCheckBox = useSelector((state) => state.CityCheckBox);
  const { success: checkbox } = CityCheckBox;
  const CityMultipleDelete = useSelector((state) => state.CityMultipleDelete);
  const { success: bulkdel } = CityMultipleDelete;
  const CityZone = useSelector((state) => state.CityZone);
  const { success: checkboxzone } = CityZone;
  const ZoneList = useSelector((state) => state.ZoneList);
  const { zonedatum } = ZoneList;
  const [zone, setzone] = useState("");

  const handleChange1 = (event) => {
    setzone(event.target.value);
  };
  const navigate = useNavigate();
  const onProdctChange = () => {
    navigate("/city");
  };
  useEffect(() => {
    dispatch(StateListDetails());
    dispatch(CityListDetails());
    dispatch(ZoneListDetails());
    if (successDelete) {
      dispatch({ type: CITY_DELETE_RESET });
    }
    if (stateen) {
      dispatch({ type: CITY_ENABLE_RESET });
    }
    if (checkbox) {
      dispatch({ type: CITY_CHECKBOX_RESET });
    }
    if (bulkdel) {
      dispatch({ type: CITY_BULKDELETE_RESET });
    }
    if (checkboxzone) {
      dispatch({ type: CITY_ZONEASSIGHN_RESET });
    }
  }, [successDelete, stateen, dispatch, checkbox, bulkdel, checkboxzone]);

  const editHandler = (id) => {
    navigate(`/city/` + id);
  };
  const deleteHandler = (id) => {
    if (window.confirm("Are you sure to delete?")) {
      dispatch(deleteCity(id));
    }
  };
  const handleChangeEnabled = (e, params) => {
    if (e.target.checked === true) {
      dispatch(
        ActiveCity({
          id: params,
          active: e.target.checked,
        })
      );
    } else {
      dispatch(
        ActiveCity({
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
      minWidth: 15,
      dataKey: "serial",
      headerClassName: "super-app-theme--header",
      renderCell: (index) => index.api.getRowIndex(index.row._id) + 1,
      flex: 1,
    },
    {
      field: "city",
      headerName: "City",
      minWidth: 150,
      flex: 1,
      editable: true,
      headerClassName: "super-app-theme--header",
      renderCell: (params) => {
        return <Typography sx={{ fontSize: 13 }}>{params.row.city}</Typography>;
      },
    },

    {
      field: "state",
      headerName: "State",
      minWidth: 180,
      flex: 1,
      editable: true,
      headerClassName: "super-app-theme--header",
      renderCell: (params) => {
        return (
          <Typography sx={{ fontSize: 13 }}>{params.row.state}</Typography>
        );
      },
    },
    {
      field: "iso",
      headerName: "ISO Code",

      flex: 1,
      editable: true,
      headerClassName: "super-app-theme--header",
      renderCell: (params) => {
        return <Typography sx={{ fontSize: 13 }}>{params.row.iso}</Typography>;
      },
    },
    {
      field: "zone",
      headerName: "Zone",
      minWidth: 130,
      flex: 1,
      editable: true,
      headerClassName: "super-app-theme--header",
      renderCell: (params) => {
        return <Typography sx={{ fontSize: 13 }}>{params.row.zone}</Typography>;
      },
    },
    {
      field: "country",
      headerName: "Country",
      flex: 1,
      minWidth: 100,
      editable: true,
      headerClassName: "super-app-theme--header",
      renderCell: (params) => {
        return (
          <Typography sx={{ fontSize: 13 }}>{params.row.country}</Typography>
        );
      },
    },
    {
      field: "checked",
      headerName: "Status",
      minWidth: 40,
      rate: "This column has a value getter and is not sortable.",
      editable: true,
      headerClassName: "super-app-theme--header",
      flex: 1,
      renderCell: (params) => {
        if (params.row.checked === true) {
          return (
            <FormControlLabel
              control={
                <Switch
                  size='small'
                  className={classes.switch}
                  color='#00CC00'
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
      minWidth: 30,
      flex: 1,
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
      minWidth: 30,
      flex: 1,
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
  const [selectionModel, setSelectionModel] = useState([]);
  const [opencheck, setOpencheck] = useState(false);
  const [checkedcheck, setChecked] = useState(false);
  const [dchecked, setdisableChecked] = useState(false);
  const [dsablechecked, setdiChecked] = useState("");
  const [checkeddelete, setCheckeddelete] = useState(false);
  const [checkzone, setcheckzone] = useState(false);
  // const [checkzonename, setcheckzonename] = useState(Statedatum?.zone);

  const handleClickOpencheck = () => {
    setOpencheck(true);
    setCheckeddelete(false);
    setChecked(false);
    setdisableChecked(false);
    setcheckzone(false);
  };
  const handleDisClose = () => {
    setOpencheck(false);
    // setCheckeddelete(false);
  };
  const handleClosecheck = () => {
    setOpencheck(false);
    if (checkedcheck === true) {
      dispatch(
        updateCityActivate({
          checkboxId: selectionModel,
          checkedshow: checkedcheck,
        })
      );
    } else {
      dispatch(
        updateCityActivate({
          checkboxId: selectionModel,
          checkedhide: dsablechecked,
        })
      );
    }
  };
  const zoneedit = zonedatum?.find((x) => x._id === zone)?.zoneName;
  const handlechangezone = () => {
    setOpencheck(false);
    if (checkzone === true) {
      dispatch(
        AssignZoneCityActivate({
          checkboxId: selectionModel,
          checkedshow: zoneedit,
          zoneId: zone,
        })
      );
    }
  };
  const handleChange = (event) => {
    setChecked(event.target.checked);
    setdisableChecked(false);
  };
  const handledisableChange = (event) => {
    setdisableChecked(event.target.checked);
    setChecked(false);
    if (dchecked === dchecked) {
      setdiChecked(false);
    }
  };
  const handleClosecheckdelet = () => {
    setOpencheck(false);
    if (checkeddelete == true) {
      dispatch(deleteMultipleCity({ id: selectionModel }));
    }
  };
  const handleChangedelete = (event) => {
    setCheckeddelete(event.target.checked);
  };

  const handleChangezone = (event) => {
    setcheckzone(event.target.checked);
  };
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <Typography variant='h6' sx={{ mt: -1 }}>
          Cities
        </Typography>
        <Box sx={{ ml: "auto" }}>
          <Button
            variant='contained'
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
            Add New City
          </Button>
        </Box>
      </Box>
      <Box sx={{ mt: 2, mb: 1 }}>
        <Divider />
      </Box>
      <Box>
        <Box sx={{ mt: 2, display: "flex" }}>
          <Breadcrumbs aria-label='breadcrumb flat'>
            <div className='breadcrumb flat'>
              <Link to='/locatgrid'>Zones</Link>
              <Link to='/countrygrid'>Countries</Link>

              <Link to='/stategrid'>States</Link>
              <Link to='/citygrid' className='active'>
                Cities
              </Link>
            </div>
          </Breadcrumbs>
          <Box>
            <Button
              // fullWidth
              variant='contained'
              sx={{ mb: 2, ml: 50 }}
              onClick={handleClickOpencheck}
            >
              bulk
            </Button>
            <Box>
              <Dialog
                // fullScreen={fullScreen}
                open={opencheck}
                // onClose={handleDisClose}
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
                      label='Delete'
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
                    <FormControlLabel
                      label='Assign to a new Zone'
                      control={
                        <Checkbox
                          checked={checkzone}
                          onChange={handleChangezone}
                          inputProps={{
                            "aria-label": "controlled",
                          }}
                        />
                      }
                    />

                    {checkzone === true ? (
                      <>
                        <Box sx={{ minWidth: 120 }}>
                          <FormControl fullWidth>
                            <Select
                              labelId='demo-simple-select-label'
                              id='demo-simple-select'
                              value={zone}
                              onChange={handleChange1}
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
                      </>
                    ) : (
                      <></>
                    )}
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
                      {checkzone === true ? (
                        <>
                          {" "}
                          <Button
                            sx={{ mt: 1 }}
                            variant='contained'
                            autoFocus
                            onClick={handlechangezone}
                          >
                            Apply
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
        <Box>
          <Box
            sx={{
              height: 360,
              width: "100%",

              "& .super-app-theme--header": {
                backgroundColor: "#808080",
                color: "#ffffff",
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
                  color: "#ffffff",
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
              rows={citydatum ? citydatum : ""}
              getRowId={(rows) => rows._id}
              VerticalAlignment='Center'
              rowHeight={40}
              headerHeight={35}
              loading={loading}
              pagination
              checkboxSelection
              onSelectionModelChange={(newSelectionModel) => {
                setSelectionModel(newSelectionModel);
              }}
              selectionModel={selectionModel}
            />
          </Box>
        </Box>
      </Box>
    </div>
  );
}
