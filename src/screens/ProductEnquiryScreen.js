import ClearIcon from "@mui/icons-material/Clear";
import DeleteIcon from "@mui/icons-material/Delete";
import DetailsIcon from "@mui/icons-material/Details";
import EditIcon from "@mui/icons-material/Edit";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Typography } from "../../node_modules/@material-ui/core/index";
import { catProductList } from "../actions/catProductAction";
import { prodEnquiryList } from "../actions/prodEnquiryAction";
import CardMedia from "@mui/material/CardMedia";
import { useNavigate } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import { Divider } from "../../node_modules/@material-ui/core/index";

function ProductEnquiryScreen() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const productEnquiryList = useSelector((state) => state.productEnquiryList);
  const { prodEnqList } = productEnquiryList;

  const catalogProd = useSelector((state) => state.catalogProd);
  const { catProducts } = catalogProd;

  useEffect(() => {
    dispatch(prodEnquiryList());
    dispatch(catProductList());
  }, []);

  // **************************************
  const [open, setOpen] = useState(false);
  const [ProdId, setProdId] = useState("");
  console.log("ProdId", ProdId);
  const handleClickOpen = (params) => {
    setProdId(params.productId);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleview = () => {
    navigate(`/productview/${ProdId}`);
  };
  // ******************************************************

  function getprodName(params) {
    return params?.row?.productId
      ? catProducts?.find((x) => x?._id === params?.row?.productId)?.prodname
      : "null";
  }

  const columns = [
    {
      headerName: "ID",
      flex: 1,
      headerClassName: "super-app-theme--header",
      renderCell: (index) => index.api.getRowIndex(index.row._id) + 1,
    },
    {
      field: "fname",
      headerName: "First Name",
      flex: 1,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "lname",
      headerName: "Last Name",
      flex: 1,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "phone",
      headerName: "Mobile",
      flex: 1,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "reqmessage",
      headerName: "Requested Message",
      flex: 1,
      headerClassName: "super-app-theme--header",
    },

    {
      field: "productId",
      headerName: "productId",
      flex: 1,
      headerClassName: "super-app-theme--header",
      valueGetter: getprodName,
    },

    {
      field: "createdAt",
      headerName: "Enqiry date",
      flex: 1,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "Replay",
      headerName: "Replay",
      flex: 1,
      headerClassName: "super-app-theme--header",
      renderCell: () => {
        return (
          <ClearIcon
            style={{
              color: "red",
              fontSize: 25,
              fontWight: "Bold",
              margin: 20,
              cursor: "pointer",
            }}
          />
        );
      },
    },

    {
      field: "details",
      headerName: "Product Details",
      flex: 1,
      headerClassName: "super-app-theme--header",
      renderCell: (params) => {
        return (
          <DetailsIcon
            onClick={() => handleClickOpen(params.row)}
            style={{
              color: "red",
              fontSize: 25,
              fontWight: "Bold",
              margin: 20,
              cursor: "pointer",
            }}
          />
        );
      },
    },

    {
      field: "Edit",
      headerName: "ACTIONS",
      flex: 1,
      headerClassName: "super-app-theme--header",
      renderCell: () => (
        <>
          <EditIcon
            // onClick={() => editAddressHandler(params.row)}
            style={{
              fontSize: 15,

              margin: 20,
              cursor: "pointer",
            }}
          />
        </>
      ),
    },

    {
      field: "Delete",
      headerName: "ACTIONS",
      flex: 1,
      headerClassName: "super-app-theme--header",
      renderCell: () => (
        <>
          <DeleteIcon
            // onClick={() => deleteAddressHandler(params)}
            style={{
              fontSize: 15,
              margin: 20,
              cursor: "pointer",
            }}
          />
        </>
      ),
    },
  ];

  return (
    <>
      <Typography variant='h6' sx={{ mt: -4 }}>
        Customer Enquiry
      </Typography>
      <Box sx={{ display: "flex", mt: 0 }}>
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

          <Typography sx={{ fontSize: "13px" }}>Customer Enquiry</Typography>
        </Breadcrumbs>
      </Box>
      <Divider sx={{ mt: 3 }} />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        {catProducts
          ?.filter((item) => {
            return item._id === ProdId;
          })
          .map((item) => (
            <>
              <DialogContent
                sx={{
                  width: 500,
                  hight: 700,
                }}
              >
                <Box
                  sx={{
                    display: "flex",

                    flexDirection: "column",
                    alignItems: "center",
                    borderRadius: "2px",
                    p: 5,
                    border: "1px solid black",
                  }}
                >
                  <Typography>Product Name*</Typography>
                  <TextField
                    disabled
                    sx={{ mt: "10px" }}
                    fullWidth
                    required
                    id='newname'
                    name='newname'
                    autoComplete='off'
                    value={item.prodname}
                  />
                  <Typography>Reference*</Typography>
                  <TextField
                    disabled
                    sx={{ mt: "10px" }}
                    required
                    fullWidth
                    id='newname'
                    name='newname'
                    autoComplete='off'
                    value={item.reference}
                  />
                  <CardMedia
                    sx={{ height: 440 }}
                    image={`/api/uploads/showCatProd/${item._id}`}
                    component='img'
                  />
                  <Button sx={{ ml: 30 }} onClick={handleview}>
                    View More Deatils
                  </Button>
                </Box>
              </DialogContent>
            </>
          ))}
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button onClick={handleClose} autoFocus>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
      <Box
        sx={{
          height: 360,
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
          rows={prodEnqList ? prodEnqList : ""}
          getRowId={(rows) => rows._id}
          VerticalAlignment='Center'
          rowHeight={40}
          headerHeight={35}
          pagination
          // pageSize={10}
          // rowsPerPageOptions={[25, 50, 100]}

          checkboxSelection
        />
      </Box>
    </>
  );
}

export default ProductEnquiryScreen;
