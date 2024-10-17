import { Switch } from "@material-ui/core";
import { deepPurple, red } from "@material-ui/core/colors";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect } from "react";
import {
  useDispatch,
  useSelector,
} from "../../node_modules/react-redux/es/exports";
import {
  customerAddressList,
  deletecustomerAddress,
} from "../actions/customerAction";
import { useNavigate } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import { Divider } from "../../node_modules/@material-ui/core/index";

function AddreeCustamerScreen() {
  const customAddressList = useSelector((state) => state.customAddressList);
  const { custAddList } = customAddressList;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const CustomAdditem = () => {
    navigate("/addressreg");
  };

  useEffect(() => {
    dispatch(customerAddressList());
  }, []);

  const editHandler = (cusAddIndId) => {
    navigate("/addressreg/" + cusAddIndId);
  };

  const deleteHandler = (params) => {
    if (window.confirm("Are you sure to delete?")) {
      dispatch(deletecustomerAddress(params.row._id));
    }
  };

  const columns = [
    {
      field: "custEmail",
      headerName: "Customer Email",
      flex: 1,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "identificationNo",
      headerName: "Identification Number",
      flex: 1,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "addresAlias",
      headerName: "Address alias",
      flex: 1,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "fname",
      headerName: "First name",
      flex: 1,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "lname",
      headerName: "Last name",
      flex: 1,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "company",
      headerName: "Company",
      flex: 1,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "vatNo",
      headerName: "VAT number",
      flex: 1,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "Addres2",
      headerName: "Address 2",
      flex: 1,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "zip",
      headerName: "Zip/Postal code",
      flex: 1,
      headerClassName: "super-app-theme--header",
    },

    {
      field: "city",
      headerName: "City",
      flex: 1,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "country",
      headerName: "Country",
      flex: 1,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "phone",
      headerName: "Phone",
      flex: 1,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "mobile",
      headerName: "Mobile phone",
      flex: 1,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "other",
      headerName: "Other",
      flex: 1,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "checked",
      headerName: "Displayed",
      headerClassName: "super-app-theme--header",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      flex: 1,
      renderCell: (params) => {
        if (params.row.checked == true) {
          return <Switch color='primary' checked />;
        } else {
          return <Switch />;
        }
      },
    },
    {
      field: "actions",
      headerName: "ACTIONS",
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
            onClick={() => deleteHandler(params)}
            style={{ color: red[500], fontSize: 15, cursor: "pointer" }}
          />
        </>
      ),
    },
  ];

  return (
    <>
      <Typography variant='h6' sx={{ mt: -2 }}>
        Customer Address
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

          <Typography sx={{ fontSize: "13px" }}>Customer Address</Typography>
        </Breadcrumbs>
        <Box sx={{ ml: "auto", mt: -3 }}>
          <Button
            sx={{
              mr: 3,
              borderRadius: "20px",
              backgroundColor: "#0099CC",
              fontSize: 12,
            }}
            variant='contained'
            onClick={CustomAdditem}
          >
            Add new addresses
          </Button>
        </Box>
      </Box>

      <Divider sx={{ mt: 3 }} />
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
          rows={custAddList ? custAddList : ""}
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

export default AddreeCustamerScreen;
