import Box from "@mui/material/Box";

import { Switch, makeStyles } from "@material-ui/core";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Typography from "@mui/material/Typography";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Divider } from "../../node_modules/@material-ui/core/index";

import Checkbox from "@mui/material/Checkbox";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import {
  ActiveZone,
  ZoneListDetails,
  deleteMultiplezone,
  deleteZone,
  updateZoneActivate,
} from "../actions/ZoneAction";
import {
  ZONE_BULKDELETE_RESET,
  ZONE_CHECKBOX_RESET,
  ZONE_DELETE_RESET,
  ZONE_ENABLE_RESET,
} from "../constants/ZoneConstants";

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

export default function LocationGridScreen() {
  const [selectionModel, setSelectionModel] = useState([]);
  const dispatch = useDispatch();
  const classes = useStyles();
  const ZoneList = useSelector((state) => state.ZoneList);
  const { zonedatum, loading } = ZoneList;
  const ZoneDelete = useSelector((state) => state.ZoneDelete);
  const { success: successDelete } = ZoneDelete;
  const ZoneEnable = useSelector((state) => state.ZoneEnable);
  const { success: zoneen } = ZoneEnable;

  const ZoneCheckbox = useSelector((state) => state.ZoneCheckbox);
  const { success: checkbox } = ZoneCheckbox;
  const ZoneBulkDelete = useSelector((state) => state.ZoneBulkDelete);
  const { success: bulkdel } = ZoneBulkDelete;
  const navigate = useNavigate();
  const onProdctChange = () => {
    navigate("/zone");
  };
  useEffect(() => {
    dispatch(ZoneListDetails());
    if (successDelete) {
      dispatch({ type: ZONE_DELETE_RESET });
    }
    if (zoneen) {
      dispatch({ type: ZONE_ENABLE_RESET });
    }
    if (checkbox) {
      dispatch({ type: ZONE_CHECKBOX_RESET });
    }
    if (bulkdel) {
      dispatch({ type: ZONE_BULKDELETE_RESET });
    }
  }, [successDelete, zoneen, bulkdel, checkbox]);

  const editHandler = (id) => {
    navigate(`/zone/` + id);
  };
  const deleteHandler = (id) => {
    if (window.confirm("Are you sure to delete?")) {
      dispatch(deleteZone(id));
    }
  };
  const handleChangeEnabled = (e, params) => {
    if (e.target.checked === true) {
      dispatch(
        ActiveZone({
          id: params,
          active: e.target.checked,
        }),
      );
    } else {
      dispatch(
        ActiveZone({
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
      dataKey: "serial",
      headerClassName: "super-app-theme--header",
      renderCell: (index) => index.api.getRowIndex(index.row._id) + 1,
      flex: 1,
    },
    {
      field: "Name",
      headerName: "Name",
      flex: 1,
      editable: true,
      headerClassName: "super-app-theme--header",
      renderCell: (params) => {
        return (
          <Typography sx={{ fontSize: 13 }}>{params.row.zoneName}</Typography>
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
        updateZoneActivate({
          checkboxId: selectionModel,
          checkedshow: checkedcheck,
        }),
      );
    } else {
      dispatch(
        updateZoneActivate({
          checkboxId: selectionModel,
          checkedhide: dsablechecked,
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
      dispatch(deleteMultiplezone({ id: selectionModel }));
    }
  };
  const handleChangedelete = (event) => {
    setCheckeddelete(event.target.checked);
  };

  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <Typography variant="h6" sx={{ mt: -1 }}>
          Zones
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
            Add New Zones
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
              <Link to="/locatgrid" className="active">
                Zones
              </Link>
              <Link to="/countrygrid">Countries</Link>

              <Link to="/stategrid">States</Link>
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
                  {"Select One"}
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
            rows={zonedatum ? zonedatum : ""}
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
