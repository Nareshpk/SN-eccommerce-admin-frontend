/* eslint-disable no-unused-vars */
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
// import SettingsIcon from '@mui/icons-material/Settings';
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import ZoomInIcon from '@mui/icons-material/ZoomIn';
import { makeStyles, Switch } from "@material-ui/core";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Checkbox from "@mui/material/Checkbox";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import FormControlLabel from "@mui/material/FormControlLabel";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useParams } from "react-router-dom";
import {
  CATEGORY_CHILD_UPDATES_RESET,
  CATEGORY_UPDATES_RESET,
  CHILD_MULTIPLE_DELETE_RESET,
} from "../constants/categoryMasterConstant";
import {
  CategoryChildallLists,
  CategoryMasterallLists,
  ChildcategoryActivate,
  deleteCategegoryMasterlist,
  deleteMultipleChild,
  updateChildEnable,
} from "../actions/categoryMasterAction";
import { useNavigate } from "../../node_modules/react-router-dom/dist/index";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
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

function CategoryMasterChildScreen() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const theme = useTheme();
  const navigate = useNavigate();

  const params = useParams();
  const parentId = params.id;

  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const categoryChildAll = useSelector((state) => state.categoryChildAll);
  const { ChildcategoryList, loading } = categoryChildAll;
  const CategoryMasterallList = useSelector(
    (state) => state.CategoryMasterallList
  );
  const { categorymasterallList } = CategoryMasterallList;

  const ChildcategoryCheckbox = useSelector(
    (state) => state.ChildcategoryCheckbox
  );
  const CategoryName = categorymasterallList?.find(
    (x) => x._id === parentId
  )?.name;

  const ChildGatagri = categorymasterallList?.find(
    (x) => x._id === parentId
  )?.children;

  const ChildDatagrid = ChildGatagri?.filter((item) => {
    return item.parent === parentId;
  })?.map((item) => {
    return {
      _id: item._id,
      name: item.name,
      description: item.description,
      checked: item.checked,
    };
  });

  const { success: successChild } = ChildcategoryCheckbox;

  const EnableChild = useSelector((state) => state.EnableChild);
  const { success: successChildenable } = EnableChild;

  const childDelete = useSelector((state) => state.childDelete);
  const { success: successchildDelete } = childDelete;

  const [childopen, setChidldOpen] = useState(false);

  const [ChildModel, setChildModel] = useState([]);

  const [childchecked, setChildChecked] = useState(false);
  const [dcheckedchild, setdisableCheckedchild] = useState(false);
  const [dsablecheckedchild, setdiCheckedchild] = useState("");

  const handleClickOpenChild = () => {
    setChidldOpen(true);
    setChildChecked(false);
    setdisableCheckedchild(false);
  };

  const handleChangeChild = (event) => {
    setChildChecked(event.target.checked);
    setdisableCheckedchild(false);
  };

  const handledisableChangechild = (event) => {
    setdisableCheckedchild(event.target.checked);
    setChildChecked(false);
    if (dcheckedchild === dcheckedchild) {
      setdiCheckedchild(false);
    }
  };

  const handleDisCloseChild = () => {
    setChidldOpen(false);
  };

  const handleCloseChild = () => {
    setChidldOpen(false);
    if (childchecked === true) {
      dispatch(
        ChildcategoryActivate({
          childId: ChildModel,
          checkedshow: childchecked,
        })
      );
    } else {
      dispatch(
        ChildcategoryActivate({
          childId: ChildModel,
          checkedhide: dsablecheckedchild,
        })
      );
    }
  };

  const ViewgarndChildHandeler = (id) => {
    navigate(`/categorygrandchild/` + id);
  };

  const handleChangechild = (e, params) => {
    if (e.target.checked === true) {
      dispatch(
        updateChildEnable({
          id: params,
          active: e.target.checked,
        })
      );
    } else {
      dispatch(
        updateChildEnable({
          id: params,
          deactive: e.target.checked,
        })
      );
    }
  };

  const [deleteopen1, setdeleteopen1] = useState(false);
  const [checkeddelete1, setCheckeddelete1] = useState(false);

  const handleClickdelete1 = () => {
    setdeleteopen1(true);
    setCheckeddelete1(false);
  };
  const handleDeletrClose1 = () => {
    setdeleteopen1(false);
    setCheckeddelete1(false);
  };

  const handleChangedelete1 = (event) => {
    setCheckeddelete1(event.target.checked);
  };

  const handleClosecheckdelet1 = () => {
    setdeleteopen1(false);
    if (checkeddelete1 == true) {
      dispatch(deleteMultipleChild({ id: ChildModel }));
    }
  };

  const editHandler = (id) => {
    navigate(`/categorymasterform/` + id);
  };

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure to delete?")) {
      dispatch(deleteCategegoryMasterlist(id));
    }
  };
  useEffect(() => {
    if (successchildDelete) {
      dispatch({ type: CHILD_MULTIPLE_DELETE_RESET });
    }

    if (successChildenable) {
      dispatch({ type: CATEGORY_UPDATES_RESET });
    }

    if (successChild) {
      dispatch({ type: CATEGORY_CHILD_UPDATES_RESET });
    }
    dispatch(CategoryMasterallLists());
    dispatch(CategoryChildallLists());
  }, [dispatch, successChild, successChildenable, successchildDelete]);

  const Childcolumns = [
    {
      field: "_id",
      headerName: "ID",
      dataKey: "serial",
      headerClassName: "super-app-theme--header",
      renderCell: (index) => index.api.getRowIndex(index.row._id) + 1,
      flex: 1,
    },

    {
      field: "name",
      headerName: "Name",
      flex: 1,
      editable: true,
      headerClassName: "super-app-theme--header",
      renderCell: (params) => {
        return <Typography sx={{ fontSize: 13 }}>{params.row.name}</Typography>;
      },
    },
    {
      field: "description",
      headerName: "Description",
      flex: 1,
      editable: true,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "checked",
      headerName: "Status",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
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
                  checked
                  onClick={(e) => handleChangechild(e, params.row._id)}
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
                  onClick={(e) => handleChangechild(e, params.row._id)}
                />
              }
            />
          );
        }
      },
    },
    {
      field: "parent",
      headerName: "View ",
      editable: true,
      flex: 1,
      headerClassName: "super-app-theme--header",
      renderCell: (params) => (
        <>
          <VisibilityIcon
            onClick={() => ViewgarndChildHandeler(params.row._id)}
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
      field: "View",
      headerName: "Actions",
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
              color: "#C70039",
              fontSize: 20,
              margin: 20,
              cursor: "pointer",
            }}
          />
        </>
      ),
    },
    // {
    //   field: "View",
    //   headerName: "Actions",
    //   flex: 1,
    //   headerClassName: "super-app-theme--header",
    //   renderCell: (params) => (
    //     <>
    //       <EditIcon
    //         onClick={() => editHandler(params.row._id)}
    //         style={{
    //           // color: deepPurple[500],
    //           fontSize: 25,
    //           margin: 20,
    //           cursor: "pointer",
    //           color: "#FF0099",
    //         }}
    //       />
    //       <DeleteIcon
    //         onClick={() => deleteHandler(params.row._id)}
    //         style={{ fontSize: 25, cursor: "pointer", color: "#C70039 " }}
    //       />
    //     </>
    //   ),
    // },
  ];
  return (
    <Box
      sx={{
        height: 560,
        width: "100%",
      }}
    >
      <Typography component='h1' variant='h6' sx={{ mt: -2, ml: 3 }}>
        {CategoryName}
      </Typography>
      <Box sx={{ mt: 0 }}>
        {" "}
        <Breadcrumbs
          sx={{ ml: 3 }}
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
            <Typography sx={{ fontSize: "13px" }}>Home</Typography>
          </Link>
          <Link
            to='/categorymaster'
            style={{
              color: "rgba(0, 0, 0, 0.6)",
              fontSize: "13px",
            }}
          >
            <Typography sx={{ fontSize: "13px" }}>Category</Typography>
          </Link>
          <Typography sx={{ fontSize: "13px" }}>{CategoryName}</Typography>
        </Breadcrumbs>
      </Box>
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
          variant='contained'
          onClick={handleClickOpenChild}
        >
          Bulk
        </Button>

        <Button
          sx={{
            mr: 3,
            mt: 2,
            mb: 0,
            borderRadius: "20px",
            backgroundColor: "#0099CC",
            fontSize: 12,
          }}
          variant='contained'
          onClick={handleClickdelete1}
        >
          Bulk Delete
        </Button>
      </Box>
      <Box>
        <Dialog
          fullScreen={fullScreen}
          open={childopen}
          onClose={handleDisCloseChild}
          aria-labelledby='responsive-dialog-title'
        >
          <DialogTitle id='responsive-dialog-title'>
            {"Selected One"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              <FormControlLabel
                label='Show All'
                control={
                  <Checkbox
                    checked={childchecked}
                    onChange={handleChangeChild}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                }
              />

              <FormControlLabel
                label='Hide All'
                control={
                  <Checkbox
                    checked={dcheckedchild}
                    onChange={handledisableChangechild}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                }
              />
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleDisCloseChild}>
              Cancel
            </Button>
            <Button onClick={handleCloseChild} autoFocus>
              Done
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
      <Box>
        <Dialog open={deleteopen1} onClose={handleDeletrClose1}>
          <DialogTitle>Delete</DialogTitle>
          <DialogContent>
            <FormControlLabel
              label='Delete All'
              control={
                <Checkbox
                  checked={checkeddelete1}
                  onChange={handleChangedelete1}
                  inputProps={{
                    "aria-label": "controlled",
                  }}
                />
              }
            />
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleDeletrClose1}>
              Cancel
            </Button>
            <Button onClick={handleClosecheckdelet1} autoFocus>
              Done
            </Button>
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
          columns={Childcolumns}
          rows={ChildDatagrid ? ChildDatagrid : ""}
          getRowId={(rows) => rows._id}
          VerticalAlignment='Center'
          loading={loading}
          rowHeight={40}
          headerHeight={35}
          //   pageSize={pageSize}
          //   onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          // pageSize={10}
          // rowsPerPageOptions= {[25, 50, 100]}
          pagination
          checkboxSelection
          onSelectionModelChange={(newChildModel) => {
            setChildModel(newChildModel);
          }}
          selectionModel={ChildModel}
        />
      </Box>
    </Box>
  );
}

export default CategoryMasterChildScreen;
