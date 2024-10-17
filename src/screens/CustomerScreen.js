import { Switch, makeStyles } from "@material-ui/core";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Box } from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Divider from "@mui/material/Divider";
import FormControlLabel from "@mui/material/FormControlLabel";
import Typography from "@mui/material/Typography";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useNavigate } from "../../node_modules/react-router-dom/dist/index";
import {
  ActiveCustomerEnable,
  CustomerListDetails,
  deleteCustomer,
  deleteMultipleCustomer,
  updatetCustomerActivate,
} from "../actions/customerrAction";
import {
  CUSTOMER_BULK_DELETE_RESET,
  CUSTOMER_BULK_UPDATE_RESET,
  CUSTOMER_DELETE_RESET,
  CUSTOMER_DETAILS_RESET,
  CUSTOMER_ENABLE_UPDATE_RESET,
  CUSTOMER_UPDATE_RESET,
} from "../constants/customerrConstants";

import VisibilityIcon from "@mui/icons-material/Visibility";

import { useTheme } from "@mui/material/styles";
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
function CustomerScreen() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const customerList = useSelector((state) => state.customerList);
  const { customers } = customerList;

  const customerUpdate = useSelector((state) => state.customerUpdate);
  const { success: updateCustomer } = customerUpdate;

  const customerSave = useSelector((state) => state.customerSave);
  const { success: CustomerSaveSuccess } = customerSave;
  const customerDelete = useSelector((state) => state.customerDelete);
  const { success: successDelete } = customerDelete;

  const customerEnable = useSelector((state) => state.customerEnable);
  const { success: EnableSuccess } = customerEnable;
  const customerbulken = useSelector((state) => state.customerbulken);
  const { success: successcheckbox } = customerbulken;
  const customerBulkDel = useSelector((state) => state.customerBulkDel);
  const { success: bulkdelete } = customerBulkDel;

  const AddcustomerReg = () => {
    navigate("/custemerreg");
  };

  //******************************** */ Save Section*******************

  const editCustomerDetails = (params) => {
    navigate("/custemerreg/" + params._id);
  };

  const deletevalueHandler = (customer) => {
    if (window.confirm("Are you sure to delete?")) {
      dispatch(deleteCustomer(customer.row._id));
    }
  };
  const [hiddenColumns, setHiddenColumns] = useState([]);
  useEffect(() => {
    dispatch(CustomerListDetails());

    if (CustomerSaveSuccess) {
      dispatch({ type: CUSTOMER_DETAILS_RESET });
    }
    if (updateCustomer) {
      dispatch({ type: CUSTOMER_UPDATE_RESET });
    }
    if (successDelete) {
      dispatch({ type: CUSTOMER_DELETE_RESET });
    }
    if (EnableSuccess) {
      dispatch({ type: CUSTOMER_ENABLE_UPDATE_RESET });
    }
    if (successcheckbox) {
      dispatch({ type: CUSTOMER_BULK_UPDATE_RESET });
    }
    if (bulkdelete) {
      dispatch({ type: CUSTOMER_BULK_DELETE_RESET });
    }
  }, [
    dispatch,
    successDelete,
    CustomerSaveSuccess,
    updateCustomer,
    EnableSuccess,
    successcheckbox,
    bulkdelete,
  ]);

  const handleChangedata = (e, params) => {
    console.log("e", e, params);
    if (e.target.checked === true) {
      dispatch(
        ActiveCustomerEnable({
          id: params,
          active: e.target.checked,
        })
      );
    } else {
      dispatch(
        ActiveCustomerEnable({
          id: params,
          deactive: e.target.checked,
        })
      );
    }
  };
  const ViewHandeler = (id) => {
    //passing id to next screen
    navigate("/cusview/" + id);
  };
  const columns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 1,
      headerClassName: "super-app-theme--header",
      renderCell: (index) => index.api.getRowIndex(index.row._id) + 1,
      //hideable: false, used to unhideble
    },

    {
      field: "fname",
      headerName: " FirstName",
      flex: 1,
      headerClassName: "super-app-theme--header",
      renderCell: (params) => {
        return (
          <Typography sx={{ fontSize: 13 }}>{params.row.fname}</Typography>
        );
      },
    },
    {
      field: "lname",
      headerName: "LastName",
      flex: 1,
      headerClassName: "super-app-theme--header",
      renderCell: (params) => {
        return (
          <Typography sx={{ fontSize: 13 }}>{params.row.lname}</Typography>
        );
      },
    },
    {
      field: "emailorphone",
      headerName: "Email",
      flex: 1,
      headerClassName: "super-app-theme--header",
      renderCell: (params) => {
        return (
          <Typography sx={{ fontSize: 13 }}>
            {params.row.emailorphone}
          </Typography>
        );
      },
    },

    {
      field: "checked",
      headerName: "Status",
      flex: 1,
      headerClassName: "super-app-theme--header",
      renderCell: (params) => {
        if (params.row.checked === true) {
          return (
            <FormControlLabel
              control={
                <Switch
                  size="small"
                  className={classes.switch}
                  checked
                  onClick={(e) => handleChangedata(e, params.row._id)}
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
                  onClick={(e) => handleChangedata(e, params.row._id)}
                />
              }
            />
          );
        }
      },
    },
    {
      field: "viewId",
      headerName: "View ",
      headerClassName: "super-app-theme--header",
      editable: true,
      flex: 1,
      renderCell: (params) => (
        <>
          <VisibilityIcon
            onClick={() => ViewHandeler(params.row._id)}
            style={{
              color: "#FF0066",
              fontSize: 20,
              margin: 20,
              cursor: "pointer",
            }}
          />
        </>
      ),
    },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      headerClassName: "super-app-theme--header",
      renderCell: (params) => (
        <>
          <EditIcon
            onClick={() => editCustomerDetails(params.row)}
            style={{
              // color: deepPurple[500],
              fontSize: 15,
              margin: 20,
              cursor: "pointer",
            }}
          />

          <DeleteIcon
            onClick={() => deletevalueHandler(params)}
            style={{ color: "#FF3333", fontSize: 20, cursor: "pointer" }}
          />
        </>
      ),
    },
  ];
  const handleClosecheck = () => {
    setOpencheck(false);
    if (checkedcheck === true) {
      dispatch(
        updatetCustomerActivate({
          checkboxId: selectionModel,
          checkedshow: checkedcheck,
        })
      );
    } else {
      dispatch(
        updatetCustomerActivate({
          checkboxId: selectionModel,
          checkedhide: dsablechecked,
        })
      );
    }
  };
  const handleChangedelete = (event) => {
    setCheckeddelete(event.target.checked);
  };

  const handleClosecheckdelet = () => {
    setOpencheck(false);
    if (checkeddelete == true) {
      dispatch(deleteMultipleCustomer({ id: selectionModel }));
    }
  };
  const [checkeddelete, setCheckeddelete] = useState(false);
  const [opencheck, setOpencheck] = useState(false);
  const [selectionModel, setSelectionModel] = useState([]);
  // setCheckboxSelection
  // const [checked, setChecked] = useState(false);
  const [checkedcheck, setChecked] = useState(false);
  const [dchecked, setdisableChecked] = useState(false);
  const [dsablechecked, setdiChecked] = useState("");

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
  const handleDisClose = () => {
    setOpencheck(false);
  };
  const handleClickOpencheck = () => {
    setOpencheck(true);
    setChecked(false);
    setdisableChecked(false);
  };
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box>
      <Box>
        <Typography variant="h6" sx={{ mt: -2, ml: 2 }}>
          Customer Details
        </Typography>
        <Box sx={{ display: "flex", mt: 0, ml: 2 }}>
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
              <Typography sx={{ fontSize: "13px" }}>Home</Typography>
            </Link>

            <Typography sx={{ fontSize: "13px" }}>Customer Details</Typography>
          </Breadcrumbs>
          <Box sx={{ ml: "auto", float: "right", mt: -3 }}>
            <Button
              variant="contained"
              sx={{
                mr: 3,
                borderRadius: "20px",
                backgroundColor: "#0099CC",
              }}
              type="Click"
              onClick={AddcustomerReg}
            >
              Add New Customer
            </Button>
          </Box>
          {/* <Button
            variant="contained"
            sx={{ ml: "auto", float: "right", mr: 3,mt:-3, borderRadius: "20px",
            backgroundColor: "#0099CC", }}
            type="Click"
            onClick={AddcustomerReg}
          >
            Add New Customer
          </Button> */}
        </Box>
      </Box>
      <Divider sx={{ mt: 1 }} />

      <Box sx={{ display: "flex" }}>
        <Button
          sx={{
            mr: 3,
            mt: 0.5,
            mb: 0,
            ml: 2,
            borderRadius: "20px",
            backgroundColor: "#0099CC",
            fontSize: 12,
          }}
          variant="contained"
          onClick={handleClickOpencheck}
        >
          Bulk
        </Button>

        {/* <Button
            sx={{
              mr: 3,
              mt: 2,
              mb: 0,
              borderRadius: "20px",
              backgroundColor: "#0099CC",
              fontSize: 12,
            }}
            variant='contained'
            onClick={handleClickdelete}
          >
            Bulk Delete
          </Button> */}
      </Box>

      <Box>
        <Dialog
          fullScreen={fullScreen}
          open={opencheck}
          onClose={handleDisClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">
            {"Selected One"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              <FormControlLabel
                label="Show All"
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
                label="Hide All"
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
                label="Delete All"
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
          ".css-18cq9do-MuiDataGrid-root .MuiDataGrid-cellContent": {
            fontSize: 12,
          },
          ".css-bfht93-MuiDataGrid-root .MuiDataGrid-columnHeader--alignCenter .MuiDataGrid-columnHeaderTitleContainer":
            {
              backgroundColor: "#330033",
              color: "#ffffff",
            },
          ".css-h4y409-MuiList-root": {
            display: "grid",
          },
        }}
      >
        <DataGrid
          sx={{
            boxShadow: 10,
            m: 1,
            borderRadius: 0,
            fontSize: "14px",
          }}
          columns={columns}
          rows={customers ? customers : ""}
          getRowId={(rows) => rows._id}
          VerticalAlignment="Center"
          rowHeight={40}
          headerHeight={35}
          // pageSize={pageSize}
          // onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          rowsPerPageOptions={[5, 10, 20]}
          checkboxSelection
          pagination
          onColumnVisibilityChange={(col) =>
            setHiddenColumns([...hiddenColumns, col.field])
          }
          onSelectionModelChange={(newSelectionModel) => {
            setSelectionModel(newSelectionModel);
          }}
          selectionModel={selectionModel}
        />
      </Box>
    </Box>
  );
}

export default CustomerScreen;
