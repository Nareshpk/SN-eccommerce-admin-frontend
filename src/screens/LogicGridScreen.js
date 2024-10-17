/* eslint-disable no-unused-vars */
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
// import TableContainer from "@mui/material/TableContainer";
// import Paper from "@mui/material/Paper";
import { makeStyles, Switch } from "@material-ui/core";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Divider } from "../../node_modules/@material-ui/core/index";
import {
  genSettingAllList,
  deletegeneralMasterlist,
  updategeneralActivate,
  updateGeneralEnable,
  deleteMultiplegeneral,
  updateGeneralEnableStatus,
} from "../actions/GeneralAction";
import { ShippingSizeAllDetails } from "../actions/SizeWeightGroupAction";
import { ShippingAllList } from "../actions/shippingLocAction";
import { SummaryList } from "../actions/summaryAction";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import {
  GENERAL_DETAIL_ACTIVATE_RESET,
  GENERAL_DETAIL_DELETE_RESET,
  GENERAL_DETAIL_ENABLE_RESET,
  GENERAL_ENABLE_RESET,
  GENERAL_MULTIPLE_DELETE_RESET,
} from "../constants/GeneralConstants";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Checkbox from "@mui/material/Checkbox";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContentText from "@mui/material/DialogContentText";
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
export default function LogicGridScreen() {
  const editHandler = (id) => {
    navigate(`/logistic/` + id);
  };
  const classes = useStyles();
  //*******************************General Screen findall*****************************/
  const generalallalllist = useSelector((state) => state.generalallalllist);
  const { generaldatum, loading } = generalallalllist;
  // console.log('generaldatum', generaldatum);

  //*******************************Shipping Location Screen findall******************/
  const shiploccostallList = useSelector((state) => state.shiploccostallList);
  const { shippinglistdata } = shiploccostallList;
  // console.log('shippinglistdata', shippinglistdata);

  //*******************************Size Group Access Screen findall*******************/
  const ShipAllList = useSelector((state) => state.ShipAllList);
  const { shipAddAllList } = ShipAllList;

  //*******************************Summary Screen findall*****************************/
  const summaryList = useSelector((state) => state.summaryList);
  const { summarydatum } = summaryList;

  //*****************************Delete findall **************************************/
  const generalDelete = useSelector((state) => state.generalDelete);
  const { success: successDelete } = generalDelete;

  //**********************************Bulk Action********************************* */

  const generalCheckbox = useSelector((state) => state.generalCheckbox);
  const { success: successcheckbox } = generalCheckbox;

  const GeneralEnable = useSelector((state) => state.GeneralEnable);
  const { success: successenable } = GeneralEnable;

  const Generalmuldelete = useSelector((state) => state.Generalmuldelete);
  const { success: successmultiple } = Generalmuldelete;

  const GeneralStatusEnable = useSelector((state) => state.GeneralStatusEnable);
  const { success: successstatusenable } = GeneralStatusEnable;

  //**********************************************************************************/
  let item;
  let item2;
  let item3;
  let item4 = [];
  for (let i = 0; i < generaldatum?.length; i++) {
    item = generaldatum[i];
    for (let j = 0; j < shippinglistdata?.length; j++) {
      if (item?._id === shippinglistdata[j]?.preId) {
        item2 = shippinglistdata[j];
      }
    }
    for (let k = 0; k < summarydatum?.length; k++) {
      if (item?._id === summarydatum[k]?.preId) {
        item3 = summarydatum[k];
      }
    }

    item4.push({
      id: item?._id,
      name: item?.name,
      filename: item?.filename,
      status: item2?.preId == item?._id ? item2.checked : null,
      enable: item3?.preId == item?._id ? item3.Checked : null,
    });
  }

  // {
  //   summarydatum
  //     ?.filter((item2) => {
  //       return item1.preId === item2.preId;
  //     })
  //     ?.map((item2) => {
  //       return {
  //         // id: item._id,
  //         // name: item.name,
  //         // status: item1.checked,
  //         enable: item2.checked,
  //       };
  //     });
  // }

  const navigate = useNavigate();
  const onProdctChange = () => {
    navigate(`/logistic/${1}`);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    if (successDelete) {
      dispatch({ type: GENERAL_DETAIL_DELETE_RESET });
    }
    if (successcheckbox) {
      dispatch({ type: GENERAL_DETAIL_ACTIVATE_RESET });
    }
    if (successenable) {
      dispatch({ type: GENERAL_DETAIL_ENABLE_RESET });
    }
    if (successmultiple) {
      dispatch({ type: GENERAL_MULTIPLE_DELETE_RESET });
    }
    if (successstatusenable) {
      dispatch({ type: GENERAL_ENABLE_RESET });
    }
    dispatch(updateGeneralEnable());
    dispatch(genSettingAllList());
    dispatch(ShippingSizeAllDetails());
    dispatch(ShippingAllList());
    dispatch(SummaryList());
  }, [
    dispatch,
    successDelete,
    successcheckbox,
    successenable,
    successmultiple,
    successstatusenable,
  ]);
  const [checked, setChecked] = useState(false);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure to delete?")) {
      dispatch(deletegeneralMasterlist(id));
    }
  };

  // const handleChangeEnabled = (event, params) => {
  //   if (params.enable == true) {
  //     setChecked(params.enable);
  //   } else {
  //     setChecked(event.target.checked);
  //   }
  // };

  // ********************************Enable Disable section********************************
  const [opencheck, setOpencheck] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const [selectionModel, setSelectionModel] = useState([]);
  // setCheckboxSelection
  // const [checked, setChecked] = useState(false);
  const [checkedcheck, setCheck] = useState(false);

  const [dchecked, setdisableChecked] = useState(false);
  const [dsablechecked, setdiChecked] = useState("");

  let griditem;
  let selectItem = [];
  let generalselect = [];
  let shippingselect = [];
  let sizeselect = [];
  let summaryselect = [];
  for (let i = 0; i < selectionModel?.length; i++) {
    griditem = selectionModel[i];

    for (let j = 0; j < summarydatum?.length; j++) {
      if (griditem == summarydatum[j]?.preId) {
        selectItem.push(summarydatum[j]?._id);
      }
    }
  }
  for (let i = 0; i < selectionModel?.length; i++) {
    griditem = selectionModel[i];

    for (let j = 0; j < generaldatum?.length; j++) {
      if (griditem == generaldatum[j]?._id) {
        generalselect.push(generaldatum[j]?._id);
        // console.log('griditem-------->>>', griditem);
      }
    }

    for (let j = 0; j < shippinglistdata?.length; j++) {
      if (griditem == shippinglistdata[j]?.preId) {
        shippingselect.push(shippinglistdata[j]?._id);
      }
      // console.log('selectItem2-------->>>', selectItem2);
    }

    for (let j = 0; j < shipAddAllList?.length; j++) {
      if (griditem == shipAddAllList[j]?.preId) {
        sizeselect.push(shipAddAllList[j]?._id);
      }
      // console.log('selectItem3-------->>>', selectItem3);
    }

    for (let j = 0; j < summarydatum?.length; j++) {
      if (griditem == summarydatum[j]?.preId) {
        summaryselect.push(summarydatum[j]?._id);
      }
      // console.log('selectItem4-------->>>', selectItem4);
    }
  }

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

  const handleClickOpencheck = () => {
    setOpencheck(true);
    setCheck(false);
    setdisableChecked(false);
  };

  const handleClosecheck = () => {
    setOpencheck(false);
    if (checkedcheck === true) {
      dispatch(
        updategeneralActivate({
          checkboxId: selectItem,
          checkedshow: checkedcheck,
        })
      );
    } else {
      dispatch(
        updategeneralActivate({
          checkboxId: selectItem,
          checkedhide: dsablechecked,
        })
      );
    }
  };

  const handleChangeEnablefree = (event) => {
    if (event.status == false) {
      dispatch(
        updateGeneralEnable({
          id: event.id,
          active: true,
        })
      );
    } else {
      dispatch(
        updateGeneralEnable({
          id: event.id,
          deactive: false,
        })
      );
    }
  };

  const handleChangeEnablestatus = (event) => {
    if (event.enable == false) {
      dispatch(
        updateGeneralEnableStatus({
          id: event.id,
          active: true,
        })
      );
    } else {
      dispatch(
        updateGeneralEnableStatus({
          id: event.id,
          deactive: false,
        })
      );
    }
  };
  const handleDisClose = () => {
    setOpencheck(false);
  };

  // ***********************Multy Delete Sectiion*********************************************
  const [deleteopen, setdeleteopen] = useState(false);
  const [checkeddelete, setCheckeddelete] = useState(false);

  const handleDeletrClose = () => {
    setdeleteopen(false);
    setCheckeddelete(false);
  };

  const handleChangedelete = (event) => {
    setCheckeddelete(event.target.checked);
  };

  const handleClosecheckdelet = () => {
    setdeleteopen(false);
    if (checkeddelete == true) {
      // console.log('checkeddelete', checkeddelete);
      dispatch(
        deleteMultiplegeneral({
          generalid: generalselect,
          shippingid: shippingselect,
          sizeid: sizeselect,
          summaryid: summaryselect,
        })
      );
    }
  };
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 25,
      editable: true,
      headerClassName: "super-app-theme--header",
      renderCell: (index) => index.api.getRowIndex(index.row.id) + 1,
    },
    {
      field: "filename",
      headerName: "Logo",
      width: 40,
      editable: true,
      headerClassName: "super-app-theme--header",
      renderCell: (params) => {
        return (
          <Avatar
            // onClick={handleClickOpen}
            sx={{ height: "40px", width: "40px", cursor: "pointer" }}
            src={`/api/generaldetails/Shipshow/${params.row.filename}`}
            alt={params.row.filename}
          />
        );
      },
    },
    {
      field: "name",
      headerName: "Name",
      editable: true,
      width: 400,
      headerClassName: "super-app-theme--header",
      renderCell: (params) => {
        return <Typography sx={{ fontSize: 13 }}>{params.row.name}</Typography>;
      },
    },
    {
      field: "position",
      headerName: "Position",
      editable: true,
      width: 80,
      headerClassName: "super-app-theme--header",
      renderCell: (params) => {
        return <Typography sx={{ fontSize: 13 }}>1</Typography>;
      },
    },
    {
      field: "checked",
      headerName: "Free",
      width: 80,
      editable: true,
      headerClassName: "super-app-theme--header",
      renderCell: (params) => {
        // console.log('params', params);
        if (params.row.status != true) {
          return (
            <FormControlLabel
              control={
                <Switch
                  size='small'
                  // className={classes.switch}
                  checked={params.row.status}
                  onClick={() => handleChangeEnablefree(params.row)}
                />
              }
            />
          );
        } else {
          return (
            <FormControlLabel
              control={
                <Switch
                  className={classes.switch}
                  checked={params.row.status}
                  size='small'
                  onClick={() => handleChangeEnablefree(params.row)}
                />
              }
            />
          );
        }
      },
    },
    {
      field: "enable",
      headerName: "Status",
      rate: "This column has a value getter and is not sortable.",
      editable: true,
      width: 75,
      headerClassName: "super-app-theme--header",
      renderCell: (params) => {
        if (params.row.enable == true) {
          return (
            <FormControlLabel
              control={
                <Switch
                  size='small'
                  className={classes.switch}
                  checked={params.row.enable}
                  onClick={() => handleChangeEnablestatus(params.row)}
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
                  checked={params.row.enable}
                  onClick={() => handleChangeEnablestatus(params.row)}
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
            onClick={() => editHandler(params.row.id)}
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
            onClick={() => deleteHandler(params.row.id)}
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
        <Typography variant='h6' sx={{ mt: -1 }}>
          Carriers
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
            Add New Carrier
          </Button>
        </Box>
      </Box>
      <Box sx={{ mt: 2, mb: 1 }}>
        <Divider />
      </Box>
      <Box>
        <Box sx={{ display: "flex" }}>
          <Button
            sx={{
              mr: 3,
              mt: 0,
              mb: 0,
              ml: 2,
              borderRadius: "20px",
              backgroundColor: "#0099CC",
              fontSize: 12,
            }}
            variant='contained'
            onClick={handleClickOpencheck}
          >
            Bulk
          </Button>
        </Box>
        <Box>
          <Dialog
            fullScreen={fullScreen}
            open={opencheck}
            onClose={handleDisClose}
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
              </DialogContentText>
              <DialogContent open={deleteopen} onClose={handleDeletrClose}>
                <FormControlLabel
                  label='Delete'
                  sx={{ ml: -4.5, mt: -2 }}
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
              </DialogContent>
            </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={handleDisClose}>
                Cancel
              </Button>
              {checkeddelete == true ? (
                <>
                  <Button
                    onClick={() => {
                      handleClosecheckdelet();
                    }}
                  >
                    Delete
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    onClick={() => {
                      handleClosecheck();
                    }}
                  >
                    Done
                  </Button>
                </>
              )}
            </DialogActions>
          </Dialog>
        </Box>
        <Box
          sx={{
            height: 400,
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
            rows={item4 ? item4 : ""}
            getRowId={(rows) => rows.id}
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
    </div>
  );
}
