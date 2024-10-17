/* eslint-disable no-unused-vars */
import { deepPurple } from "@material-ui/core/colors";
import ContentPasteSearchIcon from "@mui/icons-material/ContentPasteSearch";
import Box from "@mui/material/Box";
import { alpha, styled } from "@mui/material/styles";
import { DataGrid, gridClasses } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  AssignStatusActivate,
  deleteOrder,
  listOrderMine,
} from "../actions/orderActions";
import MessageBox from "../components/MessageBox";
import CircularProgress from "@mui/material/CircularProgress";
import { Typography } from "../../node_modules/@material-ui/core/index";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
// import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Select from "@mui/material/Select";
import Chip from "@material-ui/core/Chip";
import { StatuslistOrderMine } from "../actions/StatusAction";
import { useFieldArray, useForm } from "react-hook-form";
import {
  ORDER_DELETE_RESET,
  ORDER_STATUSASSIGN_LIST_RESET,
} from "../constants/orderConstants";
// import { DataGrid } from "@mui/x-data-grid";
export default function OrderHistoryScreen() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const [pageSize, setPageSize] = useState(10);
  const [selectionModel, setSelectionModel] = useState([]);
  const [age, setAge] = useState("");
  const [age1, setAge1] = useState();
  const [keyvalue, setKeyvalue] = useState();
  const navigate = useNavigate();
  const orderMineList = useSelector((state) => state.orderMineList);
  const { loading, error, orders } = orderMineList;

  const statuslist = useSelector((state) => state.statuslist);
  const { statusdatum } = statuslist;

  const updatedatagrid = useSelector((state) => state.updatedatagrid);
  const { success } = updatedatagrid;

  const orderDelete = useSelector((state) => state.orderDelete);
  const { success: deleteorder } = orderDelete;
  let defaultSelected = statusdatum?.find((opt) => !!opt.Status);
  console.log("defaultSelected------->>", defaultSelected);
  const [status, setStatus] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    if (deleteorder) {
      dispatch({ type: ORDER_DELETE_RESET });
    }
    if (success) {
      dispatch({ type: ORDER_STATUSASSIGN_LIST_RESET });
    }
    dispatch(listOrderMine());
    dispatch(StatuslistOrderMine());
    dispatch(AssignStatusActivate());
  }, [dispatch, success, deleteorder]);

  const detailHandler = (order) => {
    navigate(`/order/${order.row._id}`);
  };

  const deleteHandler = (id) => {
    console.log("id", id);
    if (window.confirm("Are you sure to delete?")) {
      dispatch(deleteOrder(id));
    }
  };
  function getDate(orders) {
    return `${orders.row.createdAt.substring(0, 10) || ""}`;
  }
  console.log("keyvalue", keyvalue);
  console.log("age", age);
  console.log("age1", age1);
  const handleChange = (event) => {
    console.log("event", event.target.value);

    setAge(event.target.value);
  };

  function getFullName(params) {
    return {
      icon: <CurrencyRupeeIcon style={{ fill: "blue[500]", fontSize: 12 }} />,
      label: params?.row?.Amount,
    };
  }

  const [File, setFile] = useState("");
  console.log("File", File);
  const handleChange1 = (event) => {
    setFile(event.target.value);
    // row.selectedFile = event.target.value;
  };
  console.log("status", status);
  const handlestatus = (e) => {
    setStatus(e);
    dispatch(
      AssignStatusActivate({
        checkboxId: selectionModel,
        checkedshow: e,

        // zoneId: zone,
      })
    );
  };
  const handlechangezone = (e) => {
    if (e === status) {
      dispatch(
        AssignStatusActivate({
          checkboxId: selectionModel,
          checkedshow: status,
          // zoneId: zone,
        })
      );
    }
  };

  const columns = [
    {
      field: "id",
      headerName: "Id",
      width: 25,
      // flex: 1,
      headerClassName: "super-app-theme--header",
      renderCell: (index) => index.api.getRowIndex(index.row._id) + 1,
    },
    {
      field: "_id",
      headerName: "Ref Id",
      width: 250,
      // flex: 1,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "createdAt",
      headerName: "DATE",
      width: 110,
      headerClassName: "super-app-theme--header",
      valueGetter: getDate,
    },
    {
      field: "CustomerName",
      headerName: "Customer Name",
      width: 150,

      headerClassName: "super-app-theme--header",
    },
    {
      field: "Amount",
      headerName: "Amount",
      width: 100,
      headerClassName: "super-app-theme--header",
      valueGetter: getFullName,
      renderCell: (params) => {
        return (
          <Chip variant='outlined' size='small' {...getFullName(params)} />
        );
      },
    },
    {
      field: "selectedFile",
      hideable: true,
      headerName: "Payment Status",
      headerClassName: "super-app-theme--header",
      width: 150,
      renderCell: (params) => (
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <select
            value={params.row.Status}
            style={{ width: "100%", height: "30px" }}
            onChange={(e) => handlestatus(e.target.value)}
            // onClick={(e) => handlechangezone(e.target.value)}
          >
            <option>{params.row.Status}</option>
            {statusdatum?.map((items, key) => {
              return (
                <>
                  <option
                    style={{ border: "1px solid #f0f0f5" }}
                    key={items._id}
                    value={items.Status}
                  >
                    {items.Status}
                  </option>
                </>
              );
            })}
          </select>
        </Box>
      ),
    },
    {
      field: "actions",
      headerName: "Details",
      width: 80,
      headerClassName: "super-app-theme--header",
      renderCell: (orders) => (
        <>
          <ContentPasteSearchIcon
            onClick={() => detailHandler(orders)}
            style={{
              color: deepPurple[500],
              fontSize: 15,
              // margin: 30,
              cursor: "pointer",
            }}
          />

          {/* <EditIcon
              onClick={() => editHandler(orders.row._id)}
              style={{
                color: "#993399",
                fontSize: 20,
                margin: 20,
                cursor: "pointer",
              }}
            /> */}
          <DeleteIcon
            onClick={() => deleteHandler(orders.row._id)}
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

  const ODD_OPACITY = 0.2;

  const StripedDataGrid = styled(DataGrid)(({ theme }) => ({
    [`& .${gridClasses.row}.even`]: {
      backgroundColor: theme.palette.grey[200],
      "&:hover, &.Mui-hovered": {
        backgroundColor: alpha(theme.palette.primary.main, ODD_OPACITY),
        "@media (hover: none)": {
          backgroundColor: "transparent",
        },
      },
      "&.Mui-selected": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          ODD_OPACITY + theme.palette.action.selectedOpacity
        ),
        "&:hover, &.Mui-hovered": {
          backgroundColor: alpha(
            theme.palette.primary.main,
            ODD_OPACITY +
              theme.palette.action.selectedOpacity +
              theme.palette.action.hoverOpacity
          ),
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            backgroundColor: alpha(
              theme.palette.primary.main,
              ODD_OPACITY + theme.palette.action.selectedOpacity
            ),
          },
        },
      },
    },
  }));

  return (
    <div>
      <Typography style={{ marginTop: 30 }} variant='h5'>
        Order History
      </Typography>
      {loading ? (
        <CircularProgress
          size={100}
          sx={{
            flex: 1,
            // marginTop: 24,
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%) ",
          }}
        ></CircularProgress>
      ) : error ? (
        <MessageBox variant='danger'>{error}</MessageBox>
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
            VerticalAlignment='Center'
            rowHeight={40}
            headerHeight={35}
            getRowClassName={(params) =>
              params.indexRelativeToCurrentPage % 2 === 0 ? "even" : "odd"
            }
            pageSize={pageSize}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            rowsPerPageOptions={[5, 10, 20]}
            pagination
            checkboxSelection
            onSelectionModelChange={(newSelectionModel) => {
              setSelectionModel(newSelectionModel);
            }}
            selectionModel={selectionModel}
          />
        </Box>
      )}
    </div>
  );
}
