import { deepPurple, red } from "@material-ui/core/colors";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Typography } from "../../node_modules/@material-ui/core/index";
import { catProductList } from "../actions/catProductAction";
import { deleteUser, listUsers } from "../actions/userAction";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { USER_DETAILS_RESET } from "../constants/userConstants";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

export default function UserListScreen() {
  const [pageSize, setPageSize] = useState(10);

  const navigate = useNavigate();
  const userList = useSelector((state) => state.userList);
  const { loading, error, users } = userList;

  const userDelete = useSelector((state) => state.userDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = userDelete;

  const catalogProd = useSelector((state) => state.catalogProd);
  const { catProducts } = catalogProd;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(catProductList());
    dispatch(listUsers());
    dispatch({
      type: USER_DETAILS_RESET,
    });
  }, [dispatch, successDelete]);
  const deleteHandler = (user) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteUser(user.row._id));
    }
  };

  const editHandler = (user) => {
    navigate(`/user/${user.row._id}/edit`);
  };

  const Showwhislist = () => {
    navigate(`/Wishlist`);
  };

  function getIsAdmin(users) {
    return `${users.row.userisAdmin ? "YES" : "NO" || ""}`;
  }

  function getISselller(users) {
    return `${users.row.isSeller ? "YES" : " NO" || ""}`;
  }

  function getStatus(users) {
    let userItem = users?.row?._id
      ? catProducts?.find((x) => x?.user === users?.row?._id)?.status
      : "arraa";
    if (userItem === "true") {
      return "Yes";
    } else {
      return "No";
    }
  }

  const columns = [
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
      field: "email",
      headerName: "EMAIL",
      flex: 1,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "status",
      headerName: "WISHLIST",
      flex: 1,
      headerClassName: "super-app-theme--header",
      valueGetter: getStatus,
    },
    {
      field: "visit",
      headerName: "SHOW WISHLIST",
      flex: 1,
      headerClassName: "super-app-theme--header",
      renderCell: (users) => {
        let userItem = users?.row?._id
          ? catProducts?.find((x) => x?.user === users?.row?._id)?.status
          : "arraa";
        if (userItem === "true") {
          return (
            <RemoveRedEyeIcon
              onClick={() => Showwhislist()}
              style={{
                color: deepPurple[500],
                fontSize: 15,
                margin: 20,
                cursor: "pointer",
              }}
            />
          );
        } else {
          return (
            <VisibilityOffIcon
              style={{
                color: deepPurple[500],
                fontSize: 15,
                margin: 20,
                cursor: "pointer",
              }}
            />
          );
        }
      },
    },
    {
      field: "isSeller",
      headerName: "IS SELLER",
      flex: 1,
      headerClassName: "super-app-theme--header",
      valueGetter: getISselller,
    },
    {
      field: "isAdmin",
      headerName: "IS ADMIN",
      flex: 1,
      headerClassName: "super-app-theme--header",
      valueGetter: getIsAdmin,
    },
    {
      field: "actions",
      headerName: "ACTIONS",
      flex: 1,
      headerClassName: "super-app-theme--header",
      renderCell: (users) => (
        <>
          <EditIcon
            onClick={() => editHandler(users)}
            style={{
              color: deepPurple[500],
              fontSize: 15,
              margin: 20,
              cursor: "pointer",
            }}
          />

          <DeleteIcon
            onClick={() => deleteHandler(users)}
            style={{ color: red[500], fontSize: 15, cursor: "pointer" }}
          />
        </>
      ),
    },
  ];

  return (
    <div>
      <Typography style={{ marginTop: 50 }} variant="h4">
        Users
      </Typography>
      {loadingDelete && <LoadingBox></LoadingBox>}
      {errorDelete && <MessageBox variant="danger">{errorDelete}</MessageBox>}
      {successDelete && (
        <MessageBox variant="success">User Deleted Successfully</MessageBox>
      )}
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <Box
          sx={{
            height: 460,
            width: "100%",
            "& .super-app-theme--header": {
              backgroundColor: "#808080",
              color: "#ffffff",
            },
            "& .css-1jbbcbn-MuiDataGrid-columnHeaderTitle": {
              fontSize: 16,
            },
            ".css-18cq9do-MuiDataGrid-root .MuiDataGrid-cellContent": {
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
              m: 2,
              borderRadius: 0,
            }}
            columns={columns}
            rows={users}
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
