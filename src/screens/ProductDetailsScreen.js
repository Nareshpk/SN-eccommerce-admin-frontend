import { deepPurple, red } from "@material-ui/core/colors";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Box, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { DataGrid } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import {
  catProductList,
  deleteCatalogProd,
  deleteMultipleProduct,
  updateproductactive,
  updateProductEnable,
} from "../actions/catProductAction";
DataGrid;

import CardMedia from "@mui/material/CardMedia";
import Dialog from "@mui/material/Dialog";
// import Card from "@mui/material/Card";
import { Switch } from "@material-ui/core";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Divider } from "../../node_modules/@material-ui/core/index";
import { makeStyles } from "../../node_modules/@material-ui/styles/index";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import {
  CAT_PRODUCT_ACTIVE_UPDATE_RESET,
  CAT_PRODUCT_DELETE_RESET,
  PRODUCT_ENABLE_UPDATE_RESET,
  PRODUCT_MULTIPLE_DELETE_RESET,
} from "../constants/catBrandConstant";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import Chip from "@material-ui/core/Chip";

const useStyles1 = makeStyles({
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

function ProductDetailsScreen() {
  const swicclasses = useStyles1();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // ***************************
  const onProdctChange = () => {
    navigate("/productadd");
  };
  // ***************************
  const FeaturesList = useSelector((state) => state.FeaturesList);
  const { Featuresdetails } = FeaturesList;

  const brandReduce = useSelector((state) => state.brandReduce);
  const { brandLists } = brandReduce;

  const catalogProd = useSelector((state) => state.catalogProd);
  const { catProducts } = catalogProd;

  const Productmultiple = useSelector((state) => state.Productmultiple);
  const { success: successDelete } = Productmultiple;

  const Enableproduct = useSelector((state) => state.Enableproduct);
  const { success: successpro } = Enableproduct;

  const ProductActive = useSelector((state) => state.ProductActive);
  const { success } = ProductActive;

  const catProddelete = useSelector((state) => state.catProddelete);
  const { success: deletedsuccess } = catProddelete;
  console.log("deletedsuccess", deletedsuccess);
  // ************************

  // const [deleteopen, setdeleteopen] = useState(false);
  const [checkeddelete, setCheckeddelete] = useState(false);

  const [valueopen, setvalueOpen] = useState(false);
  const [valeselectionModel, setvalueSelectionModel] = useState([]);
  const [valuecheckedcheck, setvalueChecked] = useState(false);
  const [valuedchecked, setvaluedisableChecked] = useState(false);
  const [valuedsablechecked, setvaluediChecked] = useState("");
  const [newImg, setNewimg] = useState();
  const [open, setOpen] = useState(false);

  const editHandler = (catProdIndId) => {
    navigate("/productadd/" + catProdIndId);
  };

  const handleClickvalueOpen = () => {
    setCheckeddelete(false);
    setvalueOpen(true);
  };

  const handlevalueClose = () => {
    setvalueOpen(false);
  };

  const handleChangevalue = (event) => {
    setvalueChecked(event.target.checked);
    setvaluedisableChecked(false);
  };

  const handlevaluedisableChange = (event) => {
    setvaluedisableChecked(event.target.checked);
    setvalueChecked(false);
    if (valuedchecked === valuedchecked) {
      setvaluediChecked(false);
    }
  };

  const handlevalueDisClose = () => {
    setvalueOpen(false);
  };

  const handlevlaueClosecheck = () => {
    setvalueOpen(false);
    if (valuecheckedcheck === true) {
      dispatch(
        updateproductactive({
          checkboxId: valeselectionModel,
          checkedshow: valuecheckedcheck,
        })
      );
      window.confirm("Active Successfully!!");
    } else {
      dispatch(
        updateproductactive({
          checkboxId: valeselectionModel,
          checkedhide: valuedsablechecked,
        })
      );
      window.confirm("De-Active Successfully!!");
    }
  };

  const handleClickOpen = (e) => {
    setNewimg(e.target.src);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
    setvalueOpen(false);
    if (checkeddelete == true) {
      dispatch(deleteMultipleProduct({ id: valeselectionModel }));
    }
  };

  const catProddeleteHandler = (params) => {
    if (window.confirm("Are you sure to delete?")) {
      dispatch(deleteCatalogProd(params.row._id));
    }
  };

  const handleChangedata = (e, params) => {
    if (e.target.checked === true) {
      dispatch(
        updateProductEnable({
          id: params,
          active: e.target.checked,
        })
      );
    } else {
      dispatch(
        updateProductEnable({
          id: params,
          deactive: e.target.checked,
        })
      );
    }
  };

  useEffect(() => {
    if (deletedsuccess) {
      dispatch({ type: CAT_PRODUCT_DELETE_RESET });
    }
    if (successDelete) {
      dispatch({ type: PRODUCT_MULTIPLE_DELETE_RESET });
    }
    if (successpro) {
      dispatch({ type: PRODUCT_ENABLE_UPDATE_RESET });
    }
    if (success) {
      dispatch({ type: CAT_PRODUCT_ACTIVE_UPDATE_RESET });
    }

    dispatch(catProductList());
  }, [success, successpro, successDelete, deletedsuccess]);

  function getDate(orders) {
    return `${orders.row.createdAt.substring(0, 10) || ""}`;
  }

  function getFeatureName(catProducts) {
    return `${
      catProducts?.row?.featureId
        ? Featuresdetails?.find((x) => x?._id === catProducts?.row?.featureId)
            ?.featurename
        : ""
    }`;
  }

  function getBrandName(params) {
    return `${
      params?.row?.brand
        ? brandLists?.find((x) => x?._id === params?.row?.brand)?.name
        : ""
    }`;
  }
  function getFullName(params) {
    return {
      icon: <CurrencyRupeeIcon style={{ fill: "blue[500]" }} />,
      label: params?.row?.taxexcluded,
    };
    // ${<CurrencyRupeeIcon /> || ''};
  }
  const columns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 1,
      headerClassName: "super-app-theme--header",
      renderCell: (index) => index.api.getRowIndex(index.row._id) + 1,
    },
    {
      field: "prodname",
      headerName: "Name",
      flex: 1,
      headerClassName: "super-app-theme--header",
      renderCell: (params) => {
        return (
          <Typography sx={{ fontSize: 13 }}>{params.row.prodname}</Typography>
        );
      },
    },
    {
      field: "imageId",
      headerName: "Product Image",
      flex: 1,
      headerClassName: "super-app-theme--header",
      renderCell: (params) => {
        return (
          <Avatar
            onClick={handleClickOpen}
            // onMouseOut={handleClose}
            sx={{ height: "50px", width: "50px", cursor: "pointer" }}
            src={`/api/uploads/showCatProd/${params.row._id}`}
            alt='avatar'
          />
        );
      },
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
      headerClassName: "super-app-theme--header",
      valueGetter: getDate,
    },
    {
      field: "featureId",
      headerName: "Feature",
      flex: 1,
      headerClassName: "super-app-theme--header",
      valueGetter: getFeatureName,
    },
    {
      field: "reference",
      headerName: "Reference",
      flex: 1,
      headerClassName: "super-app-theme--header",
      renderCell: (params) => {
        return (
          <Typography sx={{ fontSize: 13 }}>{params.row.reference}</Typography>
        );
      },
    },
    {
      field: "brand",
      headerName: "Brand",
      flex: 1,
      headerClassName: "super-app-theme--header",
      valueGetter: getBrandName,
    },
    {
      field: "quantity",
      headerName: "Quantity",
      flex: 1,
      headerClassName: "super-app-theme--header",
      renderCell: (params) => {
        return (
          <Typography sx={{ fontSize: 13 }}>{params.row.quantity}</Typography>
        );
      },
    },
    {
      field: "taxexcluded",
      headerName: "Price",
      flex: 1,
      headerClassName: "super-app-theme--header",
      valueGetter: getFullName,
      renderCell: (params) => {
        return (
          <Chip variant='outlined' size='small' {...getFullName(params)} />
        );
      },
      // renderCell: () => {
      //   return (
      //     <>
      //       <CurrencyRupeeIcon sx={{ fontSize: '16px' }} />
      //     </>
      //   );
      // },
    },
    {
      field: "attributecheck",
      headerName: "Status",
      flex: 1,
      headerClassName: "super-app-theme--header",
      renderCell: (params) => {
        if (params.row.status === true) {
          return (
            <FormControlLabel
              control={
                <Switch
                  size='small'
                  className={swicclasses.switch}
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
                  size='small'
                  onClick={(e) => handleChangedata(e, params.row._id)}
                />
              }
            />
          );
        }
      },
    },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      headerClassName: "super-app-theme--header",
      renderCell: (params) => (
        <>
          <EditIcon
            onClick={() => editHandler(params.row._id)}
            style={{
              color: deepPurple[500],
              fontSize: 15,
              margin: 20,
              cursor: "pointer",
            }}
          />

          <DeleteIcon
            onClick={() => catProddeleteHandler(params)}
            style={{ color: red[500], fontSize: 15, cursor: "pointer" }}
          />
        </>
      ),
    },
  ];
  return (
    <>
      <Typography variant='h6' sx={{ mt: -3 }}>
        Products
      </Typography>
      <Box sx={{ display: "flex" }}>
        {/* <Typography
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "row",
            backgroundColor: "#fff",
            fontSize: "50px",
          }}
        >
          Products
        </Typography> */}

        <Box sx={{ display: "flex", flexDerection: "row", mt: 0 }}>
          <Breadcrumbs
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
            <Typography sx={{ fontSize: "13px" }}>Products</Typography>
          </Breadcrumbs>
        </Box>

        <Box sx={{ ml: "auto" }}>
          <Button
            variant='contained'
            sx={{
              mr: 3,

              borderRadius: "20px",
              backgroundColor: "#0099CC",
              fontSize: 12,
            }}
            onClick={onProdctChange}
          >
            <AddCircleOutlineIcon sx={{ fontSize: 18 }} />
            Add New Product
          </Button>
        </Box>
      </Box>
      <Divider />

      <>
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
            size='small'
            variant='contained'
            onClick={handleClickvalueOpen}
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
            size='small'
            variant='contained'
            onClick={handleClickdelete}
          >
            Bulk Delete
          </Button> */}
        </Box>
        <Box>
          <Dialog open={valueopen} onClose={handlevalueClose}>
            <DialogTitle>Select One</DialogTitle>
            <DialogContent>
              <FormControlLabel
                label='Show All'
                control={
                  <Checkbox
                    size='small'
                    checked={valuecheckedcheck}
                    onChange={handleChangevalue}
                    inputProps={{
                      "aria-label": "controlled",
                    }}
                  />
                }
              />

              <FormControlLabel
                label='Hide All'
                control={
                  <Checkbox
                    size='small'
                    checked={valuedchecked}
                    onChange={handlevaluedisableChange}
                    inputProps={{
                      "aria-label": "controlled",
                    }}
                  />
                }
              />
              <FormControlLabel
                label='Delete All'
                control={
                  <Checkbox
                    size='small'
                    checked={checkeddelete}
                    onChange={handleChangedelete}
                    inputProps={{
                      "aria-label": "controlled",
                    }}
                  />
                }
              />
            </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={handlevalueDisClose}>
                Cancel
              </Button>
              {checkeddelete == true ? (
                <>
                  {" "}
                  <Button onClick={handleClosecheckdelet} autoFocus>
                    Delete
                  </Button>
                </>
              ) : (
                <>
                  <Button onClick={handlevlaueClosecheck} autoFocus>
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
            <DialogContent>
              <FormControlLabel
                label="Delete All"
                control={
                  <Checkbox
                    size="small"
                    checked={checkeddelete}
                    onChange={handleChangedelete}
                    inputProps={{
                      "aria-label": "controlled",
                    }}
                  />
                }
              />
            </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={handleDeletrClose}>
                Cancel
              </Button>
              <Button onClick={handleClosecheckdelet} autoFocus>
                Done
              </Button>
            </DialogActions>
          </Dialog>
        </Box> */}
        <Box
          sx={{
            height: 380,
            width: "100%",

            "& .super-app-theme--header": {
              backgroundColor: "#808080",
              color: "#ffffff",
            },
            "& .css-1jbbcbn-MuiDataGrid-columnHeaderTitle": {
              fontSize: 14,
            },
            ".css-o8hwua-MuiDataGrid-root .MuiDataGrid-cellContent": {
              fontSize: 10,
            },
            ".css-bfht93-MuiDataGrid-root .MuiDataGrid-columnHeader--alignCenter .MuiDataGrid-columnHeaderTitleContainer":
              {
                backgroundColor: "#330033",
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
            rows={catProducts ? catProducts : ""}
            getRowId={(rows) => rows._id}
            VerticalAlignment='Center'
            rowHeight={60}
            headerHeight={35}
            pagination
            checkboxSelection
            onSelectionModelChange={(newSelectionModel) => {
              setvalueSelectionModel(newSelectionModel);
            }}
            selectionModel={valeselectionModel}
          />
        </Box>
      </>

      <Dialog
        // fullWidth={fullWidth}
        // maxWidth={maxWidth}
        open={open}
        onClick={handleClose}
        sx={{
          width: 700,
          hight: 300,
        }}
      >
        <Box>
          <CardMedia
            sx={{
              cursor: "pointer",
              justifycontent: "space-between",
            }}
            component='img'
            // height="200"
            image={newImg}
            // alt={"subimgnew.filename"}
            // onMouseOver={handleChangeimage}
          />
        </Box>
      </Dialog>
    </>
  );
}

export default ProductDetailsScreen;
