import { Box } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { DataGrid } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import { Divider } from "../../node_modules/@material-ui/core/index";

import VisibilityIcon from "@mui/icons-material/Visibility";
import {
  deleteSpecific,
  productGridList,
} from "../actions/specificPriceAction";
import {
  SPECIFIC_DELETE_RESET,
  SPECIFIC_PRICE_CONDITION_RESET,
} from "../constants/specificPriceConstants";
function SpecificPriceGridScreen() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const specificPrice = useSelector((state) => state.specificPrice);
  const { success: specificprice } = specificPrice;
  const specificGrid = useSelector((state) => state.specificGrid);
  const { products } = specificGrid;
  const SpecificDelete = useSelector((state) => state.SpecificDelete);
  const { success: successDelete } = SpecificDelete;

  //  const [pageSize, setPageSize] = useState(5);

  //******************************** */ Save Section*******************

  const editSpecificDetails = (params) => {
    navigate("/specificEdit/" + params._id);
  };

  const deletevalueHandler = (products) => {
    if (window.confirm("Are you sure to delete?")) {
      dispatch(deleteSpecific(products.row._id));
    }
  };
  // const [hiddenColumns, setHiddenColumns] = useState([]);
  useEffect(() => {
    dispatch(productGridList());

    if (specificprice) {
      dispatch({ type: SPECIFIC_PRICE_CONDITION_RESET });
    }
    if (successDelete) {
      dispatch({ type: SPECIFIC_DELETE_RESET });
    }
  }, [dispatch, specificprice, successDelete]);

  const ViewHandeler = (id) => {
    //passing id to next screen
    navigate("/specificPrice/" + id);
  };
  // function getPeriod(params) {
  //   console.log('params', params);

  //   return {

  //     label: params?.row?.StartingDate,
  //     field:params?.row?.EndDate,
  //   };
  // }

  const columns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 1,
      headerClassName: "super-app-theme--header",
      renderCell: (index) => index.api.getRowIndex(index.row._id) + 1,
      //hideable: false, used to unhideble
    },
    {
      field: "combination",
      headerName: "Combination",
      flex: 1,
      headerClassName: "super-app-theme--header",
      // renderCell: (index) => index.api.getRowIndex(index.row._id) + 1,
    },
    {
      field: "discount",
      headerName: "Impact",
      flex: 1,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "Period",
      headerName: "Period",
      flex: 2,
      headerClassName: "super-app-theme--header",
      valueGetter: (params) =>
        params.row.StartingDate + " to" + params.row.EndDate,
    },
    {
      field: "Count",
      headerName: "From",
      flex: 1,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "viewId",
      headerName: "View ",
      headerClassName: "super-app-theme--header",
      editable: true,
      flex: 1,
      renderCell: (params) => (
        <>
          <VisibilityIcon
            onClick={() => ViewHandeler(params.row._id)}
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
      field: "actions",
      headerName: "Actions",
      flex: 1,
      headerClassName: "super-app-theme--header",
      renderCell: (params) => (
        <>
          <EditIcon
            onClick={() => editSpecificDetails(params.row)}
            style={{
              // color: deepPurple[500],
              fontSize: 15,
              margin: 20,
              cursor: "pointer",
            }}
          />

          <DeleteIcon
            onClick={() => deletevalueHandler(params)}
            style={{ color: "#FF3333", fontSize: 20, cursor: "pointer" }}
          />
        </>
      ),
    },
  ];
  //   function (specificList) {
  //     let per = `${specificList.row.StartingDate || ''} ${specificList.row.EndDate || ''}`;
  //     return per;
  // }
  return (
    <Box sx={{ mt: "2rem" }}>
      <Divider sx={{ mt: 3 }} />

      <Box
        sx={{
          height: 460,
          width: "100%",
          "& .super-app-theme--header": {
            backgroundColor: "#808080",
            color: "#ffffff",
          },
          "& .css-1jbbcbn-MuiDataGrid-columnHeaderTitle": {
            fontSize: 12,
          },
          ".css-18cq9do-MuiDataGrid-root .MuiDataGrid-cellContent": {
            fontSize: 12,
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
        <div style={{ height: 250, width: "100%" }}>
          <DataGrid
            sx={{
              boxShadow: 10,
              m: 2,
              borderRadius: 0,
              fontSize: "12px",
            }}
            columns={columns}
            rows={products ? products : ""}
            getRowId={(rows) => rows._id}
            VerticalAlignment="Center"
            rowHeight={34}
            // pageSize={pageSize}
            // onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            // rowsPerPageOptions={[5, 10, 20]}
            // pagination
            // onColumnVisibilityChange={(col) =>
            //   setHiddenColumns([...hiddenColumns, col.field])
            // }
          />
        </div>
      </Box>
    </Box>
  );
}

export default SpecificPriceGridScreen;
