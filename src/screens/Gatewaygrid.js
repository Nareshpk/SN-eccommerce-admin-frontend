import Box from "@mui/material/Box";

import { Switch } from "@material-ui/core";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

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

import * as React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Avatar, Divider } from "../../node_modules/@material-ui/core/index";

import { CityListDetails } from "../actions/CityAction";
import { CITY_ZONEASSIGHN_RESET } from "../constants/CityConstants";
import { ZoneListDetails } from "../actions/ZoneAction";
import {
  ActivePay,
  PaymentListDetails,
  deleteMultiplepayments,
  deletePayment,
  updatePayActivate,
} from "../actions/PayAction";
import {
  PAY_BULKDELETE_RESET,
  PAY_CHECKBOX_RESET,
  PAY_DELETE_RESET,
  PAY_ENABLE_RESET,
} from "../constants/PaymentConstants";
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
export default function GatewayGrid() {
  const dispatch = useDispatch();
  const classes = useStyles();

  const PaymentList = useSelector((state) => state.PaymentList);
  const { paymentdatum, loading } = PaymentList;

  const PaymentDelete = useSelector((state) => state.PaymentDelete);
  const { success: successDelete } = PaymentDelete;
  const Paymenten = useSelector((state) => state.Paymenten);
  const { success: payen } = Paymenten;
  const paybulkenable = useSelector((state) => state.paybulkenable);
  const { success: checkbox } = paybulkenable;
  const payDelete = useSelector((state) => state.payDelete);
  const { success: bulkdel } = payDelete;
  const CityZone = useSelector((state) => state.CityZone);
  const { success: checkboxzone } = CityZone;

  const navigate = useNavigate();
  const onProdctChange = () => {
    navigate("/payment");
  };
  useEffect(() => {
    dispatch(PaymentListDetails());
    dispatch(CityListDetails());
    dispatch(ZoneListDetails());
    if (successDelete) {
      dispatch({ type: PAY_DELETE_RESET });
    }
    if (payen) {
      dispatch({ type: PAY_ENABLE_RESET });
    }
    if (checkbox) {
      dispatch({ type: PAY_CHECKBOX_RESET });
    }
    if (bulkdel) {
      dispatch({ type: PAY_BULKDELETE_RESET });
    }
    if (checkboxzone) {
      dispatch({ type: CITY_ZONEASSIGHN_RESET });
    }
  }, [successDelete, payen, dispatch, checkbox, bulkdel, checkboxzone]);

  const editHandler = (id) => {
    navigate(`/payment/` + id);
  };
  const deleteHandler = (id) => {
    if (window.confirm("Are you sure to delete?")) {
      dispatch(deletePayment(id));
    }
  };
  const handleChangeEnabled = (e, params) => {
    if (e.target.checked === true) {
      dispatch(
        ActivePay({
          id: params,
          active: e.target.checked,
        })
      );
    } else {
      dispatch(
        ActivePay({
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
      field: "logo",
      headerName: "Logo",

      flex: 1,
      editable: true,
      headerClassName: "super-app-theme--header",
      renderCell: (params) => {
        return (
          <Avatar
            // onClick={handleClickOpen}
            sx={{ height: "40px", width: "40px", cursor: "pointer" }}
            src={`/api/paymentdetails/payshow/${params.row.filename}`}
            alt={params.row.filename}
          />
        );
      },
    },
    {
      field: "paymentName",
      headerName: "Name",
      minWidth: 150,
      flex: 1,
      editable: true,
      headerClassName: "super-app-theme--header",
      renderCell: (params) => {
        return (
          <Typography sx={{ fontSize: 13 }}>
            {params.row.paymentName}
          </Typography>
        );
      },
    },

    {
      field: "mode",
      headerName: "Mode",
      minWidth: 180,
      flex: 1,
      editable: true,
      headerClassName: "super-app-theme--header",
      renderCell: (params) => {
        return <Typography sx={{ fontSize: 13 }}>{params.row.mode}</Typography>;
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
  // const [checkzonename, setcheckzonename] = useState(Statedatum?.zone);

  const handleClickOpencheck = () => {
    setOpencheck(true);
    setCheckeddelete(false);
    setChecked(false);
    setdisableChecked(false);
  };
  const handleDisClose = () => {
    setOpencheck(false);
    // setCheckeddelete(false);
  };
  const handleClosecheck = () => {
    setOpencheck(false);
    if (checkedcheck === true) {
      dispatch(
        updatePayActivate({
          checkboxId: selectionModel,
          checkedshow: checkedcheck,
        })
      );
    } else {
      dispatch(
        updatePayActivate({
          checkboxId: selectionModel,
          checkedhide: dsablechecked,
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
      dispatch(deleteMultiplepayments({ id: selectionModel }));
    }
  };

  const handleChangedelete = (event) => {
    setCheckeddelete(event.target.checked);
  };

  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <Typography variant="h6" sx={{ mt: -1 }}>
          Gateway
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
            Add New Gateway
          </Button>
        </Box>
      </Box>
      <Box sx={{ mt: 2, mb: 1 }}>
        <Divider />
      </Box>
      <Box>
        <Box sx={{ mt: 2, display: "flex" }}>
          <Box>
            <Button
              // fullWidth
              variant="contained"
              sx={{ mb: 2, ml: 3 }}
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
              rows={paymentdatum ? paymentdatum : ""}
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
