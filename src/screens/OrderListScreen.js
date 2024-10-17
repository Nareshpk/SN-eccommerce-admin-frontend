import { deepPurple, red } from "@material-ui/core/colors";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { Typography } from "../../node_modules/@material-ui/core/index";
import { deleteOrder, listOrders } from "../actions/orderActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { ORDER_DELETE_RESET } from "../constants/orderConstants";

export default function OrderListScreen() {

  const [pageSize, setPageSize] = useState(10);

  const { pathname } = useLocation();
  const sellerMode = pathname.indexOf('/seller') >= 0;
  const navigate = useNavigate();
  const orderList = useSelector((state) => state.orderList);
  const { loading, error, orders } = orderList;
  const orderDelete = useSelector((state) => state.orderDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = orderDelete;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  // const userAdminin = useSelector((state) => state.userAdminin);
  // const { useInfo } = userAdminin;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: ORDER_DELETE_RESET });
    dispatch(listOrders({ seller: sellerMode ? userInfo._id : '' }));
  }, [dispatch, sellerMode, successDelete, userInfo._id]);

  const deleteHandler = (order) => {
    if (window.confirm('Are you sure to delete?')) {
      dispatch(deleteOrder(order.row._id));
    }
  };

  const editHandler = (order) => {
    navigate(`/order/${order.row._id}`);
  };

  function getDate(orders) {
    return `${orders.row.createdAt.substring(0, 10) || ''}`;
  }

  function getUserName(orders) {
    return `${orders.row.user.name || ''}`;
  }

  function getTotal(orders) {
    return `${orders.row.totalPrice?.toFixed(2) || ''}`;
  }

  function getPaid(orders) {
    return `${orders.row.isPaid ? orders.row.paidAt.substring(0, 10) : "No" || ''}`;
  }

  function getDelivered(orders) {
    return `${orders.row.isDelivered ? orders.row.deliveredAt.substring(0, 10) : "No" || ''}`;
  }



  const columns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 1,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "user",
      headerName: "USER",
      flex: 1,
      headerClassName: "super-app-theme--header",
      valueGetter: getUserName,
    },
    {
      field: "createdAt",
      headerName: "DATE",
      flex: 1,
      headerClassName: "super-app-theme--header",
      valueGetter: getDate,
    },
    {
      field: "totalPrice",
      headerName: "TOTAL",
      flex: 1,
      headerClassName: "super-app-theme--header",
      valueGetter: getTotal,
    },
    {
      field: "isPaid",
      headerName: "PAID",
      flex: 1,
      headerClassName: "super-app-theme--header",
      valueGetter: getPaid,
    },
    {
      field: "isDelivered",
      headerName: "DELIVERED",
      flex: 1,
      headerClassName: "super-app-theme--header",
      valueGetter: getDelivered,
    },
    {
      field: "actions",
      headerName: "ACTIONS",
      flex: 1,
      headerClassName: "super-app-theme--header",
      renderCell: (orders) => (
        <>
          <EditIcon
            onClick={() => editHandler(orders)}
            style={{ color: deepPurple[500], fontSize: 15, margin: 20, cursor: "pointer" }}
          />

          <DeleteIcon
            onClick={() => deleteHandler(orders)}
            style={{ color: red[500], fontSize: 15, cursor: "pointer" }}
          />
        </>
      ),
    },
  ];


  return (
    <div>
      <Typography style={{ marginTop: 30, }} variant="h4" >Orders</Typography>
      {loadingDelete && <LoadingBox></LoadingBox>}
      {errorDelete && <MessageBox variant="danger">{errorDelete}</MessageBox>}
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <Box
          sx={{
            bottom:3,
            height: 460,
            width: "100%",
            // zIndex:0,
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
            rows={orders}
            getRowId={(rows) => rows._id}
            VerticalAlignment="Center"
            rowHeight={34}
            pageSize={pageSize}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            rowsPerPageOptions={[5, 10, 20]}
            pagination
          />
        </Box>
        
      )}
    </div>
  );
}