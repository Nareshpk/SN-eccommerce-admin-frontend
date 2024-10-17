import { Switch, makeStyles } from "@material-ui/core";
import EditIcon from "@mui/icons-material/Edit";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Autocomplete from "@mui/material/Autocomplete";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import CircularProgress from "@mui/material/CircularProgress";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Divider from "@mui/material/Divider";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AttributeValueListDetails } from "../actions/AttributeActions";
import {
  ActiveCustomerEnable,
  ActiveCustomerbulkEnable,
  CombinationChildList,
  notificationtest,
  saveStock,
} from "../actions/catProductAction";
import { listOrderMine } from "../actions/orderActions";
import MessageBox from "../components/MessageBox";
import {
  STOCK_ENABLEBULK_RESET,
  STOCK_ENABLE_RESET,
  STOCK_SAVE_RESET,
} from "../constants/catBrandConstant";
import { useNavigate } from "../../node_modules/react-router-dom/dist/index";

const useStyles = makeStyles({
  switch: {
    "& .Mui-checked": {
      color: "#00CC00",
    },
    "& .MuiSwitch-track": {
      backgroundColor: "#00CC00 !important",
    },
  },
});

export default function Stockmaintance() {
  const classes = useStyles();
  const catalogProd = useSelector((state) => state.catalogProd);
  const { catProducts } = catalogProd;
  const Combinationchild = useSelector((state) => state.Combinationchild);
  const { childComination } = Combinationchild;

  const productStock = useSelector((state) => state.productStock);
  const { success: sucessall } = productStock;
  const productstocklist = useSelector((state) => state.productstocklist);
  const { loading, error, stocklist } = productstocklist;
  console.log("stocklist============<", stocklist);
  const productstatus = useSelector((state) => state.productstatus);
  const { success } = productstatus;
  const productbulkenable = useSelector((state) => state.productbulkenable);
  const { success: bulk } = productbulkenable;

  const [Attribute, setAttribute] = useState();
  const [Productname, setProductname] = useState("");

  const HandleChange = (event, value) => {
    setAttribute(value?._id);
    setProductname(value?.prodname);
  };

  const [attributesdb, setAttributesdb] = useState();
  const [Attributevalue, setAttributevalue] = useState();
  const handleChange = (event) => {
    setAttributevalue(event);
    setAttributesdb(event.comname);
  };

  const [currenvalue, setCurrentvalue] = useState();
  // const [currenstock, setcurrenstock] = useState();

  // const [Stock, setStock] = useState();
  const [Editlastname, setEditlastname] = useState();
  console.log(Editlastname);
  const handleStock = (event) => {
    setEditlastname(event.comstock);
    setCurrentvalue(event.comvalue);
    // setcurrenstock(event.comstock);
  };

  // eslint-disable-next-line no-unused-vars
  const submitHandler = async (e) => {
    dispatch(
      saveStock({
        product: Productname,
        attribute: attributesdb,
        attributevalue: currenvalue,
        Stock: Editlastname,
        ProductId: Attribute,
      })
    );
  };

  const handleChangedata = (e, params) => {
    if (e.target.checked === true) {
      dispatch(
        ActiveCustomerEnable({
          id: params,
          active: e.target.checked,
        })
      );
    } else {
      dispatch(
        ActiveCustomerEnable({
          id: params,
          deactive: e.target.checked,
        })
      );
    }
  };

  //   attribute.forEach(function (item) {
  //     var existing = output.filter(function (v) {
  //       return v?.comname == item?.comname
  //         ;
  //     });
  //     if (!existing.length) {
  //       output.push(item);
  //     }
  //   });

  const dispatch = useDispatch();
  useEffect(() => {
    if (sucessall) {
      dispatch({ type: STOCK_SAVE_RESET });
    }
    if (success) {
      dispatch({ type: STOCK_ENABLE_RESET });
    }
    if (bulk) {
      dispatch({ type: STOCK_ENABLEBULK_RESET });
    }
    dispatch(listOrderMine());
    dispatch(AttributeValueListDetails());
    dispatch(CombinationChildList());
    dispatch(notificationtest());
  }, [sucessall, success]);

  // ==================>>>>>>> Bulk Action <===============

  const [opencheck, setOpencheck] = useState(false);
  const [checkedcheck, setChecked] = useState(false);
  const [dchecked, setdisableChecked] = useState(false);
  const [selectionModel, setSelectionModel] = useState([]);
  const [dsablechecked, setdiChecked] = useState("");
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handlebulkChange = (event) => {
    setChecked(event.target.checked);
    setdisableChecked(false);
  };
  const handleClickOpencheck = () => {
    setOpencheck(true);
    setChecked(false);
    setdisableChecked(false);
  };
  const handleDisClose = () => {
    setOpencheck(false);
  };
  const handledisableChange = (event) => {
    setdisableChecked(event.target.checked);
    setChecked(false);
    if (dchecked === dchecked) {
      setdiChecked(false);
    }
  };

  const handleClosecheck = () => {
    setOpencheck(false);
    if (checkedcheck === true) {
      dispatch(
        ActiveCustomerbulkEnable({
          checkboxId: selectionModel,
          checkedshow: checkedcheck,
        })
      );
    } else {
      dispatch(
        ActiveCustomerbulkEnable({
          checkboxId: selectionModel,
          checkedhide: dsablechecked,
        })
      );
    }
  };

  //  ========================> DataGrid Section <==================

  // function getnumId(comproducts) {
  //   return `${
  //     comproducts.row.CombinationId
  //       ? catProducts?.find((x) => x?._id == comproducts.row.CombinationId)
  //           ?.prodname
  //       : ""
  //   }`;
  // }

  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const editCombination = (obj) => {
    navigate(`/StockeditScreen/${obj}`);
    // dispatch(CombotaxDetails(obj.CombinationId));
  };

  const combinationcolumns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 1,
      headerClassName: "super-app-theme--header",
      renderCell: (index) => index.api.getRowIndex(index.row._id) + 1,
    },
    {
      field: "imageId",
      headerName: "Product Image",
      flex: 1,
      headerClassName: "super-app-theme--header",
      renderCell: (params) => {
        return (
          <Avatar
            sx={{ height: "50px", width: "50px", cursor: "pointer" }}
            src={`/api/uploads/showsubimglatest/${params?.row?.filename}`}
            alt="avatar"
          />
        );
      },
    },
    {
      field: "prodname",
      headerName: "Product Name",
      flex: 1,
      headerClassName: "super-app-theme--header",
      // valueGetter: getnumId,
    },
    {
      field: "comname",
      headerName: "Attribute Name",
      flex: 1,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "comvalue",
      headerName: "Attribute Type",
      flex: 1,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "comstock",
      headerName: "Stock",
      flex: 1,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "Sales",
      headerName: "Sales",
      flex: 1,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "Balance",
      headerName: "Balance",
      flex: 1,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "Edit",
      headerName: "Stock",
      flex: 1,
      headerClassName: "super-app-theme--header",
      renderCell: () => (
        <TextField
          size="small"
          id="Stock"
          type="name"
          onChange={(e) => setEditlastname(e.target.value)}
        />
      ),
    },
    {
      field: "checked",
      headerName: "Status",
      flex: 1,
      headerClassName: "super-app-theme--header",
      renderCell: (params) => {
        if (params.row.checked === true) {
          return (
            <FormControlLabel
              control={
                <Switch
                  size="small"
                  className={classes.switch}
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
                  size="small"
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
      headerName: "ACTIONS",
      flex: 1,
      headerClassName: "super-app-theme--header",
      renderCell: (params) => (
        <>
          <EditIcon
            onClick={() => editCombination(params.id)}
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

  // const columns = [
  //   {
  //     field: "_id",
  //     headerName: "ID",
  //     flex: 1,
  //     headerClassName: "super-app-theme--header",
  //     renderCell: (index) => index.api.getRowIndex(index.row._id) + 1,
  //   },
  //   {
  //     field: "product",
  //     headerName: "ProductName",
  //     flex: 1,
  //     headerClassName: "super-app-theme--header",
  //   },
  //   {
  //     field: "attribute",
  //     headerName: "Attribute",
  //     flex: 1,
  //     headerClassName: "super-app-theme--header",
  //   },
  //   {
  //     field: "attributevalue",
  //     headerName: "AttributeValue",
  //     flex: 1,
  //     headerClassName: "super-app-theme--header",
  //   },
  //   {
  //     field: "Stock",
  //     headerName: "Stock",
  //     flex: 1,
  //     headerClassName: "super-app-theme--header",
  //   },
  //   {
  //     field: "Sales",
  //     headerName: "Sales",
  //     flex: 1,
  //     headerClassName: "super-app-theme--header",
  //   },
  //   {
  //     field: "Balance",
  //     headerName: "Balance",
  //     flex: 1,
  //     headerClassName: "super-app-theme--header",
  //   },
  //   {
  //     field: "checked",
  //     headerName: "Status",
  //     flex: 1,
  //     headerClassName: "super-app-theme--header",
  //     renderCell: (params) => {
  //       if (params.row.checked === true) {
  //         return (
  //           <FormControlLabel
  //             control={
  //               <Switch
  //                 size="small"
  //                 className={classes.switch}
  //                 checked
  //                 onClick={(e) => handleChangedata(e, params.row._id)}
  //               />
  //             }
  //           />
  //         );
  //       } else {
  //         return (
  //           <FormControlLabel
  //             control={
  //               <Switch
  //                 size="small"
  //                 onClick={(e) => handleChangedata(e, params.row._id)}
  //               />
  //             }
  //           />
  //         );
  //       }
  //     },
  //   },
  //   // {
  //   //   field: "actions",
  //   //   headerName: "Actions",
  //   //   flex: 1,
  //   //   headerClassName: "super-app-theme--header",
  //   //   renderCell: (params) => (
  //   //     <>
  //   //       <EditIcon
  //   //         onClick={() => editHandler(params.row._id)}
  //   //         style={{
  //   //           // color: deepPurple[500],
  //   //           fontSize: 15,
  //   //           margin: 20,
  //   //           cursor: "pointer",
  //   //         }}
  //   //       />
  //   //     </>
  //   //   ),
  //   // },
  // ];

  return (
    <Box>
      <Typography variant="h6">Stock</Typography>
      <Box sx={{ display: "flex", flexDerection: "row", mt: 0 }}>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          <Link
            to="/"
            style={{
              color: "rgba(0, 0, 0, 0.6)",
              fontSize: "13px",
            }}
          >
            <Typography sx={{ fontSize: "13px" }}>Home</Typography>
          </Link>
          <Typography sx={{ fontSize: "13px" }}> Stock</Typography>
        </Breadcrumbs>
      </Box>
      <Box sx={{ display: "flex", mt: "30px" }}>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "bold",
          }}
        >
          Product
        </Typography>
        <Typography
          sx={{
            ml: "10rem",
            fontSize: "14px",
            fontWeight: "bold",
          }}
        >
          Attribute
        </Typography>
        <Typography
          sx={{
            ml: "10rem",
            fontSize: "14px",
            fontWeight: "bold",
          }}
        >
          Attribute Value
        </Typography>
        <Typography
          sx={{
            ml: "10rem",
            fontSize: "14px",
            fontWeight: "bold",
          }}
        >
          Count
        </Typography>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Autocomplete
          id="combo-box-demo"
          options={catProducts}
          filterSelectedOptions
          onChange={(e, value) => {
            HandleChange(e, value);
          }}
          getOptionLabel={(option) => ` ${option.prodname}`}
          sx={{ width: 200, mt: 2, maxHeight: "150px" }}
          renderInput={(params) => <TextField {...params} label="Product" />}
        />
        <FormControl sx={{ width: 200, mt: 2, ml: 2 }}>
          <InputLabel id="demo-simple-select-label">Attribute</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Attribute"
          >
            {childComination
              ?.filter((item) => {
                return item.CombinationId === Attribute;
              })
              .map((attributetry) => (
                <MenuItem
                  onClick={() => handleChange(attributetry)}
                  key={attributetry._id}
                  value={attributetry.comname}
                >
                  {attributetry?.comname}
                </MenuItem>
              ))}
          </Select>
        </FormControl>

        <FormControl sx={{ width: 200, mt: 2, ml: 2 }}>
          <InputLabel id="demo-simple-select-label">Attributevalue</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Attributevalue"
          >
            <MenuItem
              onClick={() => handleStock(Attributevalue)}
              key={Attributevalue?.comname}
              value={Attributevalue?.comvalue}
            >
              {Attributevalue?.comvalue}
            </MenuItem>
          </Select>
        </FormControl>
        <TextField
          sx={{ width: 200, mt: 2, ml: 2 }}
          id="outlined-basic"
          value={Editlastname}
          onChange={(e) => setEditlastname(e.target.value)}
        />
        {/* <Box sx={{ mt: 10 }}>
          <Button
            sx={{ borderRadius: "20px", backgroundColor: "#0099CC" }}
            variant="contained"
            onClick={() => {
              submitHandler();
            }}
          >
            Save
          </Button>
        </Box> */}
        <Divider />
        <Box sx={{ display: "flex" }}>
          <Button
            sx={{
              mt: 10,
              ml: -100,
              borderRadius: "20px",
              backgroundColor: "#0099CC",
            }}
            variant="contained"
            onClick={handleClickOpencheck}
          >
            Bulk
          </Button>
          <Box>
            <Dialog
              fullScreen={fullScreen}
              open={opencheck}
              onClose={handleDisClose}
              aria-labelledby="responsive-dialog-title"
            >
              <DialogTitle id="responsive-dialog-title">
                {"Selected One"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText>
                  <FormControlLabel
                    label="Show All"
                    control={
                      <Checkbox
                        checked={checkedcheck}
                        onChange={handlebulkChange}
                        inputProps={{
                          "aria-label": "controlled",
                        }}
                      />
                    }
                  />
                  <FormControlLabel
                    label="Hide All"
                    control={
                      <Checkbox
                        checked={dchecked}
                        onChange={handledisableChange}
                        inputProps={{
                          "aria-label": "controlled",
                        }}
                      />
                    }
                  />
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button autoFocus onClick={handleDisClose}>
                  Cancel
                </Button>
                <Button onClick={handleClosecheck} autoFocus>
                  Done
                </Button>
              </DialogActions>
            </Dialog>
          </Box>
        </Box>
      </Box>

      {/* ====================>>>>>> Data Grid section  <<<<<==================*/}
      <div>
        <Typography style={{ marginTop: 30 }} variant="h5">
          Stock Details
        </Typography>
        {loading ? (
          <CircularProgress
            size={80}
            sx={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%) ",
            }}
          ></CircularProgress>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
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
              columns={combinationcolumns}
              rows={stocklist}
              checkboxSelection
              getRowId={(rows) => rows._id}
              VerticalAlignment="Center"
              rowHeight={60}
              headerHeight={50}
              pagination
              onSelectionModelChange={(newSelectionModel) => {
                setSelectionModel(newSelectionModel);
              }}
              selectionModel={selectionModel}
            />
          </Box>
        )}

        <Box
          style={{ mt: 5, display: "flex", justifyContent: "right" }}
          sx={{
            marginTop: 2,
          }}
        >
          <Button
            sx={{ borderRadius: "20px", backgroundColor: "#0099CC" }}
            variant="contained"
            onClick={() => {
              submitHandler();
            }}
          >
            Save
          </Button>
        </Box>
      </div>
    </Box>
  );
}
