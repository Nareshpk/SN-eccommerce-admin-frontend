import { deepPurple, red } from "@material-ui/core/colors";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Grid, Typography } from "../../node_modules/@material-ui/core/index";
import { deleteProduct, listProducts } from "../actions/productAction";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
// import Axios from "axios";
import {
  PRODUCT_CREATE_RESET,
  PRODUCT_DELETE_RESET,
  PRODUCT_DETAILS_RESET,
  PRODUCT_UPDATE_RESET,
} from "../constants/productConstants";
import Avatar from "@mui/material/Avatar";
import CardMedia from "@mui/material/CardMedia";
import Dialog from "@mui/material/Dialog";
import { subCategoryListDetails } from "../actions/categoryAction";

export default function ProductListScreen() {
  const navigate = useNavigate();
  const { pageNumber = 1 } = useParams();
  const { pathname } = useLocation();
  const sellerMode = pathname.indexOf("/seller") >= 0;
  const productList = useSelector((state) => state.productList);

  const [pageSize, setPageSize] = useState(10);

  const { loading, error, products } = productList;

  const productDetails = useSelector((state) => state.productDetails);
  const { product } = productDetails;
  // const params = useParams();
  // const { id: productId } = params;
  const productCreate = useSelector((state) => state.productCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    product: createdProduct,
  } = productCreate;
  const productUpdate = useSelector((state) => state.productUpdate);
  const { success: successUpdate } = productUpdate;
  const productDelete = useSelector((state) => state.productDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = productDelete;

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();

  const [newImg, setNewimg] = useState();
  //  const handleChange =(e)=>{
  //   setNewimg(e.target.src)
  //   console.log("e======",e.target.src);
  //  }

  //  ****************************
  const [open, setOpen] = useState(false);
  // const [fullWidth, setFullWidth] = React.useState(true);
  // const [maxWidth, setMaxWidth] = React.useState<DialogProps['maxWidth']>('xs');

  const handleClickOpen = (e) => {
    setNewimg(e.target.src);
    setOpen(true);
  };

  const categoryMasterList = useSelector((state) => state.categoryMasterList);
  const { categoryMasterdetails } = categoryMasterList;


  const subCategoryList = useSelector((state) => state.subCategoryList);
  const { subCategory } = subCategoryList;

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (successCreate) {
      dispatch({ type: PRODUCT_CREATE_RESET });
    }
    if (successUpdate) {
      dispatch({ type: PRODUCT_UPDATE_RESET });
    }
    if (product) {
      dispatch({ type: PRODUCT_DETAILS_RESET });
    }
    if (successDelete) {
      dispatch({ type: PRODUCT_DELETE_RESET });
    }
    dispatch(subCategoryListDetails());
    dispatch(
      listProducts({ seller: sellerMode ? userInfo._id : "", pageNumber })
    );
  }, [
    createdProduct,
    dispatch,
    navigate,
    sellerMode,
    successCreate,
    successUpdate,
    successDelete,
    userInfo._id,
    pageNumber,
    product,
  ]);

  const deleteHandler = (product) => {
    if (window.confirm("Are you sure to delete?")) {
      dispatch(deleteProduct(product.row._id));
    }
  };

  const createHandler = () => {
    navigate(`/products/new`);
  };

  const categoycreateHandler = () => {
    navigate(`/categorysmaster`);
  };

  const editHandler = (product) => {
    navigate(`/product/${product.row._id}/edit`);
  };

  function getCategoryGroupId(products) {
    return `${products.row.categorygroup ? subCategory.find(x => x._id === products.row.categorygroup)?.subcategorygroup : "arraa"}`;
  }

  function getCategoryId(products) {
    return `${products.row.category ? categoryMasterdetails.find(x => x._id === products.row.category)?.categoryname : "arraa"}`;
  }
  
 

  const columns = [
    {
      field: "fileId",
      headerName: "Image",
      flex: 1,
      headerClassName: "super-app-theme--header",
      renderCell: (params) => {
        return (
          <Avatar
            onClick={handleClickOpen}
            // onMouseOut={handleClose}
            sx={{ height: "50px", width: "50px", cursor: "pointer" }}
            src={`/api/uploads/showNew/${params.id}`}
            alt="avatar"
          />
        );
      },
    },
    {
      field: "_id",
      headerName: "ID",
      flex: 1,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "name",
      headerName: "NAME",
      flex: 1,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "price",
      headerName: "PRICE",
      flex: 1,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "category",
      headerName: "CATEGORY",
      flex: 1,
      headerClassName: "super-app-theme--header",
      valueGetter: getCategoryId,
    },
    {
      field: "categorygroup",
      headerName: "CATEGORY GROUP",
      flex: 1,
      headerClassName: "super-app-theme--header",
      valueGetter: getCategoryGroupId,
    },
    {
      field: "brand",
      headerName: "BRAND",
      flex: 1,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "actions",
      headerName: "ACTIONS",
      flex: 1,
      headerClassName: "super-app-theme--header",
      renderCell: (products) => (
        <>
          <EditIcon
            onClick={() => editHandler(products)}
            style={{
              color: deepPurple[500],
              fontSize: 15,
              margin: 20,
              cursor: "pointer",
            }}
          />

          <DeleteIcon
            onClick={() => deleteHandler(products)}
            style={{ color: red[500], fontSize: 15, cursor: "pointer" }}
          />
        </>
      ),
    },
  ];

  return (
    <div>
      <Typography style={{ marginTop: 30 }} variant="h4">
        Products
      </Typography>
      {userInfo.isSeller && userInfo && (
        <Grid
          conteiner
          sx={{ display: "flex", flexFlow: "wrap row", flexDirection: "row" }}
        >
          <Button variant="contained"  onClick={createHandler}>
            Create Product
          </Button>

          <Button variant="contained" style={{margin:10}} onClick={categoycreateHandler}>
            Create category
          </Button>
        </Grid>
      )}
      {loadingDelete && <LoadingBox></LoadingBox>}
      {errorDelete && <MessageBox variant="danger">{errorDelete}</MessageBox>}
      {loadingCreate && <LoadingBox></LoadingBox>}
      {errorCreate && <MessageBox variant="danger">{errorCreate}</MessageBox>}
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          <Dialog
            // fullWidth={fullWidth}
            // maxWidth={maxWidth}
            open={open}
            onClick={handleClose}
            sx={{
              width: 700,
              hight: 700,
            }}
          >
            <Box>
              <CardMedia
                sx={{ 
                  cursor: "pointer",
                  justifycontent: "space-between",
                }}
                component="img"
                // height="200"
                image={newImg}
                // alt={"subimgnew.filename"}
                // onMouseOver={handleChangeimage}
              />
            </Box>
          </Dialog>
          <Box
            sx={{
              height: 760,
              width: "100%",

              "& .super-app-theme--header": {
                backgroundColor: "#808080",
                color: "#ffffff",
              },
              "& .css-1jbbcbn-MuiDataGrid-columnHeaderTitle": {
                fontSize: 16,
              },
              ".css-o8hwua-MuiDataGrid-root .MuiDataGrid-cellContent": {
                fontSize: 13,
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
                borderRadius: 0,
                m: 2,
              }}
              columns={columns}
              rows={products}
              getRowId={(rows) => rows._id}
              VerticalAlignment="Center"
              rowHeight={64}
              pageSize={pageSize}
              onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
              rowsPerPageOptions={[5, 10, 20]}
              pagination
            />
          </Box>
        </>
      )}
    </div>
  );
}
