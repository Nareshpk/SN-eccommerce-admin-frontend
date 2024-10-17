import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "../../node_modules/react-router-dom/dist/index";
import { makeStyles, Switch } from "@material-ui/core";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Checkbox from "@mui/material/Checkbox";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import {
  deleteMultipletax,
  deleteTaxesMasterlist,
  TaxesList,
  updatetaxActivate,
  updateTaxEnable,
} from "../actions/TaxesAction";
import {
  TAXES_ENABLE_RESET,
  TAXES_MASTER_DEL_RESET,
  TAXES_MULTIPLE_DELETE_RESET,
  TAXES_UPDATES_RESET,
} from "../constants/taxesConstants";
// import { TAXES_MASTER_DEL_RESET, TAXES_MASTER_UPDATE_RESET } from "../constants/taxesConstants";

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

export default function TaxesMasterScreen() {
  const classes = useStyles();
  const taxesList = useSelector((state) => state.taxesList);
  const { taxes, loading } = taxesList;
  const mastertax = useSelector((state) => state.mastertax);
  const { success: successDelete } = mastertax;

  const taxesCheckbox = useSelector((state) => state.taxesCheckbox);
  const { success: successcheckbox } = taxesCheckbox;

  const taxmultiple = useSelector((state) => state.taxmultiple);
  const { success: successmultiple } = taxmultiple;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const TaxEnables = useSelector((state) => state.TaxEnables);
  const { success: successtaxEnable } = TaxEnables;
  const submitHandler = () => {
    navigate("/taxes");
  };

  useEffect(() => {
    if (successDelete) {
      dispatch({ type: TAXES_MASTER_DEL_RESET });
    }
    if (successcheckbox) {
      dispatch({ type: TAXES_UPDATES_RESET });
    }
    if (successmultiple) {
      dispatch({ type: TAXES_MULTIPLE_DELETE_RESET });
    }
    if (successtaxEnable) {
      dispatch({ type: TAXES_ENABLE_RESET });
    }
    // if (successDelete) {
    //   dispatch({ type: TAXES_MASTER_UPDATE_RESET});
    // }
    dispatch(TaxesList());
  }, [
    dispatch,
    successDelete,
    successcheckbox,
    successmultiple,
    successtaxEnable,
  ]);

  const editHandler = (id) => {
    navigate(`/taxes/` + id);
  };

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure to delete?")) {
      dispatch(deleteTaxesMasterlist(id));
    }
  };

  // ********************************Enable Disable section********************************
  const [opencheck, setOpencheck] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

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

  const handleClickOpencheck = () => {
    setOpencheck(true);
    setChecked(false);
    setdisableChecked(false);
  };

  const handleClosecheck = () => {
    setOpencheck(false);
    if (checkedcheck === true) {
      dispatch(
        updatetaxActivate({
          checkboxId: selectionModel,
          checkedshow: checkedcheck,
        }),
      );
    } else {
      dispatch(
        updatetaxActivate({
          checkboxId: selectionModel,
          checkedhide: dsablechecked,
        }),
      );
    }
  };

  const handleChangeEnabled = (e, params) => {
    if (e.target.checked === true) {
      dispatch(
        updateTaxEnable({
          id: params,
          active: e.target.checked,
        }),
      );
    } else {
      dispatch(
        updateTaxEnable({
          id: params,
          deactive: e.target.checked,
        }),
      );
    }
  };
  const handleDisClose = () => {
    setOpencheck(false);
  };

  // ***********************Multy Delete Sectiion*********************************************
  // const [deleteopen, setdeleteopen] = useState(false);
  const [checkeddelete, setCheckeddelete] = useState(false);

  // const handleClickdelete = () => {
  //   setdeleteopen(true);
  //   setCheckeddelete(false);
  // };
  // const handleDeletrClose = () => {
  //   setdeleteopen(false);
  //   setCheckeddelete(false);
  // };

  const handleChangedelete = (event) => {
    setCheckeddelete(event.target.checked);
  };

  const handleClosecheckdelet = () => {
    // setdeleteopen(false);
    if (checkeddelete == true) {
      dispatch(deleteMultipletax({ id: selectionModel }));
    }
  };
  // *****

  // /********************************************data grid Section**********************/
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
        return <Typography sx={{ fontSize: 13 }}>{params.row.Name}</Typography>;
      },
    },
    {
      field: "Rate",
      headerName: "Rate",
      flex: 1,
      editable: true,
      headerClassName: "super-app-theme--header",
      renderCell: (params) => {
        return <Typography sx={{ fontSize: 13 }}>{params.row.Rate}</Typography>;
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

  // ****************************child data grid*********************************

  return (
    <Box>
      <Typography component="h1" variant="h6" sx={{ mt: -2, ml: 2 }}>
        Taxes
      </Typography>
      <Box
        component="div"
        sx={{
          // p: 2,
          display: "flex",
          flexDirection: "row",
          backgroundColor: "#fff",
        }}
      >
        <Breadcrumbs
          sx={{ ml: 2 }}
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

          <Typography sx={{ fontSize: "13px" }}>Taxes</Typography>
        </Breadcrumbs>

        <Box sx={{ ml: "auto" }}>
          <Button
            variant="contained"
            sx={{
              mr: 3,
              // mt: 5,
              borderRadius: "20px",
              backgroundColor: "#0099CC",
              fontSize: 12,
            }}
            onClick={submitHandler}
          >
            <AddCircleOutlineIcon /> Add New Taxes
          </Button>
          {/* <Button variant="outlined">Help</Button> */}
        </Box>
      </Box>
      <Divider />

      <Box
      // sx={{
      //   height: 560,
      //   width: "100%",
      // }}
      >
        <Box sx={{ display: "flex" }}>
          <Button
            sx={{
              mr: 3,
              mt: 2,
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

        {/* <Box>
          <Dialog open={deleteopen} onClose={handleDeletrClose}>
            <DialogTitle>Delete</DialogTitle>
            <DialogContent></DialogContent>
            <DialogActions>
              <Button autoFocus onClick={handleDeletrClose}>
                Cancel
              </Button>
            </DialogActions>
          </Dialog>
        </Box> */}
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
            rows={taxes ? taxes : ""}
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
    </Box>
  );
}
