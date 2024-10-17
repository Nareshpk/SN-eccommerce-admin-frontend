import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
// import SettingsIcon from '@mui/icons-material/Settings';
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import ZoomInIcon from '@mui/icons-material/ZoomIn';
import { makeStyles, Switch } from "@material-ui/core";
import Checkbox from "@mui/material/Checkbox";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import FormControlLabel from "@mui/material/FormControlLabel";
import useMediaQuery from "@mui/material/useMediaQuery";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
  CategoryChildallLists,
  CategoryMasterallLists,
  deleteCategegoryMasterlist,
  deleteMultiplegranchild,
  GrandChildcategory,
  grandChildCategoryLists,
  updategrandChildEnable,
} from "../actions/categoryMasterAction";
import {
  CATEGORY_GRAND_CHILD_UPDATES_RESET,
  CATEGORY_UPDATES_RESET,
  GRAND_CHILD_MULTIPLE_DELETE_RESET,
} from "../constants/categoryMasterConstant";
// import SettingsIcon from '@mui/icons-material/Settings';
// import ZoomInIcon from '@mui/icons-material/ZoomIn';
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "../../node_modules/react-router-dom/dist/index";
import { useParams } from "react-router-dom";
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

function CategoryMasterGrandChildScreen() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const theme = useTheme();
  const navigate = useNavigate();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const categorygrandChildList = useSelector(
    (state) => state.categorygrandChildList
  );
  const { grandChildList, loading } = categorygrandChildList;

  const grandChildcategoryCheckbox = useSelector(
    (state) => state.grandChildcategoryCheckbox
  );
  const { success: successgrandChild } = grandChildcategoryCheckbox;

  const EnablegrandChild = useSelector((state) => state.EnablegrandChild);
  const { success: successgrandChld } = EnablegrandChild;

  const grandDelete = useSelector((state) => state.grandDelete);
  const { success: successgrandDelete } = grandDelete;

  const [grandchildopen, setGrandChidldOpen] = useState(false);

  const [grandChildModel, setGrandChildModel] = useState([]);

  const [grandchildchecked, setgrandChildChecked] = useState(false);
  const [dcheckedgrandchild, setdisableCheckedgrandchild] = useState(false);
  const [dsablecheckedgrandchild, setdiCheckedgrandchild] = useState("");
  const params = useParams();
  const childId = params.id;
  const categoryChildAll = useSelector((state) => state.categoryChildAll);
  const { ChildcategoryList } = categoryChildAll;
  const subCategoryName = ChildcategoryList?.find(
    (x) => x._id === childId
  )?.name;
  const CategoryMasterallList = useSelector(
    (state) => state.CategoryMasterallList
  );
  const { categorymasterallList } = CategoryMasterallList;

  const ParentIdName = ChildcategoryList?.find(
    (x) => x._id === childId
  )?.parent;

  const subbCategoryName = categorymasterallList?.find(
    (x) => x._id === ParentIdName
  )?.name;

  const grandChild = grandChildList
    ?.filter((item) => {
      return item.parent === childId;
    })
    ?.map((item) => {
      return {
        _id: item._id,
        name: item.name,
        description: item.description,
        checked: item.checked,
      };
    });

  const handleClickOpengrandChild = () => {
    setGrandChidldOpen(true);
    setgrandChildChecked(false);
    setdisableCheckedgrandchild(false);
  };

  const handleChangegrandChild = (event) => {
    setgrandChildChecked(event.target.checked);
    setdisableCheckedgrandchild(false);
  };

  const handleChangegrandchild = (e, params) => {
    if (e.target.checked === true) {
      dispatch(
        updategrandChildEnable({
          id: params,
          active: e.target.checked,
        })
      );
    } else {
      dispatch(
        updategrandChildEnable({
          id: params,
          deactive: e.target.checked,
        })
      );
    }
  };

  const handleClosegrandChild = () => {
    setGrandChidldOpen(false);
    if (grandchildchecked === true) {
      dispatch(
        GrandChildcategory({
          grandchildId: grandChildModel,
          checkedshow: grandchildchecked,
        })
      );
    } else {
      dispatch(
        GrandChildcategory({
          grandchildId: grandChildModel,
          checkedhide: dsablecheckedgrandchild,
        })
      );
    }
  };

  const handleDisClosegrandChild = () => {
    setGrandChidldOpen(false);
  };

  const handledisableChangegrandchild = (event) => {
    setdisableCheckedgrandchild(event.target.checked);
    setgrandChildChecked(false);

    setdiCheckedgrandchild(false);
  };

  const handleDisCloseChild = () => {};
  const editHandler = (id) => {
    navigate(`/categorymasterform/` + id);
  };

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure to delete?")) {
      dispatch(deleteCategegoryMasterlist(id));
    }
  };
  const [deleteopen3, setdeleteopen3] = useState(false);
  const [checkeddelete3, setCheckeddelete3] = useState(false);

  const handleClickdelete3 = () => {
    setdeleteopen3(true);
    setCheckeddelete3(false);
  };
  const handleDeletrClose3 = () => {
    setdeleteopen3(false);
    setCheckeddelete3(false);
  };

  const handleChangedelete3 = (event) => {
    setCheckeddelete3(event.target.checked);
  };

  const handleClosecheckdelet3 = () => {
    setdeleteopen3(false);
    if (checkeddelete3 == true) {
      dispatch(deleteMultiplegranchild({ id: grandChildModel }));
    }
  };

  useEffect(() => {
    if (successgrandDelete) {
      dispatch({ type: GRAND_CHILD_MULTIPLE_DELETE_RESET });
    }

    if (successgrandChld) {
      dispatch({ type: CATEGORY_UPDATES_RESET });
    }

    if (successgrandChild) {
      dispatch({ type: CATEGORY_GRAND_CHILD_UPDATES_RESET });
    }
    dispatch(CategoryMasterallLists());
    dispatch(grandChildCategoryLists());
    dispatch(CategoryChildallLists());
  }, [dispatch, successgrandChild, successgrandChld, successgrandDelete]);

  const grandChildcolumns = [
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
      headerClassName: "super-app-theme--header",
      editable: true,
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
                  onClick={(e) => handleChangegrandchild(e, params.row._id)}
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
                  onClick={(e) => handleChangegrandchild(e, params.row._id)}
                />
              }
            />
          );
        }
      },
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
  ];
  return (
    <Box
      sx={{
        height: 560,
        width: "100%",
      }}
    >
      <Typography component='h1' variant='h6' sx={{ mt: -2, ml: 3 }}>
        {subCategoryName}
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
          <Link
            to={`/categorychild/${ParentIdName}`}
            style={{
              color: "rgba(0, 0, 0, 0.6)",
              fontSize: "13px",
            }}
          >
            <Typography sx={{ fontSize: "13px" }}>
              {subbCategoryName}
            </Typography>
          </Link>
          <Typography sx={{ fontSize: "13px" }}>{subCategoryName}</Typography>
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
          onClick={handleClickOpengrandChild}
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
          onClick={handleClickdelete3}
        >
          Bulk Delete
        </Button>
      </Box>
      <Box>
        <Dialog
          fullScreen={fullScreen}
          open={grandchildopen}
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
                    checked={grandchildchecked}
                    onChange={handleChangegrandChild}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                }
              />

              <FormControlLabel
                label='Hide All'
                control={
                  <Checkbox
                    checked={dcheckedgrandchild}
                    onChange={handledisableChangegrandchild}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                }
              />
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleDisClosegrandChild}>
              Cancel
            </Button>
            <Button onClick={handleClosegrandChild} autoFocus>
              Done
            </Button>
          </DialogActions>
        </Dialog>
      </Box>

      <Box>
        <Dialog open={deleteopen3} onClose={handleDeletrClose3}>
          <DialogTitle>Delete</DialogTitle>
          <DialogContent>
            <FormControlLabel
              label='Delete All'
              control={
                <Checkbox
                  checked={checkeddelete3}
                  onChange={handleChangedelete3}
                  inputProps={{
                    "aria-label": "controlled",
                  }}
                />
              }
            />
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleDeletrClose3}>
              Cancel
            </Button>
            <Button onClick={handleClosecheckdelet3} autoFocus>
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
          columns={grandChildcolumns}
          rows={grandChild ? grandChild : ""}
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
          onSelectionModelChange={(newgrandChildModel) => {
            setGrandChildModel(newgrandChildModel);
          }}
          selectionModel={grandChildModel}
        />
      </Box>
    </Box>
  );
}

export default CategoryMasterGrandChildScreen;
