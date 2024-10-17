import Box from "@mui/material/Box";
// import TableContainer from "@mui/material/TableContainer";
// import Paper from "@mui/material/Paper";
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
import {
  ActiveState,
  AssignZoneActivate,
  StateListDetails,
  deleteMultiplestate,
  deleteState,
  updateStateActivate,
} from "../actions/StateAction";
import {
  STATE_BULKDELETE_RESET,
  STATE_CHECKBOX_RESET,
  STATE_DELETE_RESET,
  STATE_ENABLE_RESET,
  STATE_ZONEASSIGHN_RESET,
} from "../constants/StateConstants";
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
export default function StateGridScreen() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const StateList = useSelector((state) => state.StateList);
  const { Statedatum, loading } = StateList;
  const StateDelete = useSelector((state) => state.StateDelete);
  const { success: successDelete } = StateDelete;
  const StateEnable = useSelector((state) => state.StateEnable);
  const { success: stateen } = StateEnable;
  const StateCheckBox = useSelector((state) => state.StateCheckBox);
  const { success: checkbox } = StateCheckBox;
  const StateBulkDelete = useSelector((state) => state.StateBulkDelete);
  const { success: bulkdel } = StateBulkDelete;
  const StateZone = useSelector((state) => state.StateZone);
  const { success: checkboxzone } = StateZone;
  const ZoneList = useSelector((state) => state.ZoneList);
  const { zonedatum } = ZoneList;
  const [zone, setzone] = React.useState("");

  const handleChange1 = (event) => {
    console.log("eventttttttttttttttttttttttt", event);
    setzone(event.target.value);
  };
  const navigate = useNavigate();
  const onProdctChange = () => {
    navigate("/state");
  };
  useEffect(() => {
    dispatch(StateListDetails());
    dispatch(ZoneListDetails());
    if (successDelete) {
      dispatch({ type: STATE_DELETE_RESET });
    }
    if (stateen) {
      dispatch({ type: STATE_ENABLE_RESET });
    }
    if (checkbox) {
      dispatch({ type: STATE_CHECKBOX_RESET });
    }
    if (bulkdel) {
      dispatch({ type: STATE_BULKDELETE_RESET });
    }
    if (checkboxzone) {
      dispatch({ type: STATE_ZONEASSIGHN_RESET });
    }
  }, [successDelete, stateen, dispatch, checkbox, bulkdel, checkboxzone]);

  const editHandler = (id) => {
    navigate(`/state/` + id);
  };
  const deleteHandler = (id) => {
    if (window.confirm("Are you sure to delete?")) {
      dispatch(deleteState(id));
    }
  };
  const handleChangeEnabled = (e, params) => {
    if (e.target.checked === true) {
      dispatch(
        ActiveState({
          id: params,
          active: e.target.checked,
        }),
      );
    } else {
      dispatch(
        ActiveState({
          id: params,
          deactive: e.target.checked,
        }),
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
      field: "state",
      headerName: "Name",
      minWidth: 350,
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
      headerName: "ISO",

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
                  size="small"
                  className={classes.switch}
                  color="#00CC00"
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
                  size="small"
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

  console.log("checkzone", checkzone);
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
        updateStateActivate({
          checkboxId: selectionModel,
          checkedshow: checkedcheck,
        }),
      );
    } else {
      dispatch(
        updateStateActivate({
          checkboxId: selectionModel,
          checkedhide: dsablechecked,
        }),
      );
    }
  };

  const handlechangezone = () => {
    setOpencheck(false);
    if (checkzone === true) {
      dispatch(
        AssignZoneActivate({
          checkboxId: selectionModel,
          checkedshow: zone,
        }),
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
      dispatch(deleteMultiplestate({ id: selectionModel }));
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
        <Typography variant="h6" sx={{ mt: -1 }}>
          States
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
            Add New State
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
              <Link to="/locatgrid">Zones</Link>
              <Link to="/countrygrid">Countries</Link>

              <Link to="/stategrid" className="active">
                States
              </Link>
              <Link to="/citygrid">Cities</Link>
            </div>
          </Breadcrumbs>
          <Box>
            {" "}
            <Button
              // fullWidth
              variant="contained"
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
                aria-labelledby="responsive-dialog-title"
              >
                <DialogTitle id="responsive-dialog-title">
                  {"Selected One"}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    <FormControlLabel
                      label="Enable"
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
                      label="Disable"
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
                    <FormControlLabel
                      label="Assign to a new Zone"
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
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={zone}
                              onChange={handleChange1}
                            >
                              {zonedatum?.map((item) => (
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
                            variant="contained"
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
              rows={Statedatum ? Statedatum : ""}
              getRowId={(rows) => rows._id}
              VerticalAlignment="Center"
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
