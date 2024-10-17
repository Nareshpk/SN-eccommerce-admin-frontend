import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { makeStyles, Switch } from "@material-ui/core";
import { deepPurple, red } from "@material-ui/core/colors";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import Checkbox from "@mui/material/Checkbox";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Select from "@mui/material/Select";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import useMediaQuery from "@mui/material/useMediaQuery";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Divider, MenuItem } from "../../node_modules/@material-ui/core/index";
import {
  brandAddressList,
  brandList,
  deleteBrand,
  deleteBrandAddress,
  deleteMultiplebrand,
  updateActivate,
  updateBrand,
  updateBrandAddress,
  updatebrandEnable,
} from "../actions/brandAction";
import {
  BRAND_DELETE_RESET,
  BRAND_ENABLE_UPDATE_RESET,
  BRAND_MULTIPLE_DELETE_RESET,
  BRAND_SAVE_RESET,
  BRAND_UPDATES_RESET,
  BRAND_UPDATE_RESET,
} from "../constants/brandConstant";
import { useNavigate, Link } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Breadcrumbs from "@mui/material/Breadcrumbs";

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

function BrandScreen() {
  const classes = useStyles();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [brand, setBrand] = useState(0);

  const [supplier, setSupplier] = useState(0);

  const [newImg, setNewimg] = useState();
  const [open, setOpen] = useState(false);
  const [brnadindId, setbrnadindId] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [checked, setchecked] = useState(true);
  // ------Update Brand--------
  const [newname, setNewname] = useState("");
  const [newckeditor, setNewckeditor] = useState("");
  const [neweditor, setNeweditor] = useState("");
  const [newchecked, setNewchecked] = useState("");

  // ----Update Brand----------
  const [brandAddId, setBrandAddId] = useState("");

  const [newbrandId, setNewbrandId] = useState("");
  const [newlastname, setNewlastname] = useState("");
  const [newfirstname, setNewfirstname] = useState("");
  const [newaddress, setNewaddress] = useState("");
  const [newaddress2, setNewaddress2] = useState("");
  const [newzip, setNewzip] = useState("");
  const [newcity, setNewcity] = useState("");
  const [newcountry, setNewcountry] = useState("");
  const [newdni, setNewdni] = useState("");
  const [newphone, setNewphone] = useState("");
  const [newmobile, setNewmobile] = useState("");
  const [newother, setNewother] = useState("");

  const handleTabChange = (event, newBrand) => {
    setBrand(newBrand);

    setSupplier(0);
    setbrnadindId(0);
    setBrandAddId(0);
  };

  const handleClickOpen = (e) => {
    setNewimg(e.target.src);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const dispatch = useDispatch();

  const theme = createTheme();
  const navigate = useNavigate();

  const updateHandler = (e) => {
    dispatch(
      updateBrand({
        _id: brnadindId._id,
        name: newname,
        imageFile: e.imageFile,
        editor: neweditor,
        ckeditor: newckeditor,
        checked: newchecked,
      }),
    );
    window.confirm("Brand Details Updated SuccessFully!!");
    navigate("/home");
    setNewname("");
    setbrnadindId(0);
  };

  const addressUpdateHandler = () => {
    dispatch(
      updateBrandAddress({
        id: brandAddId._id,
        brand: newbrandId,
        firstname: newfirstname,
        lastname: newlastname,
        address: newaddress,
        address2: newaddress2,
        zip: newzip,
        city: newcity,
        country: newcountry,
        dni: newdni,
        phone: newphone,
        mobile: newmobile,
        other: newother,
      }),
    );
    window.confirm("Brand Address Details Updated SuccessFully!!");
    setBrandAddId(0);
  };

  const brandReduce = useSelector((state) => state.brandReduce);
  const { brandLists, loading } = brandReduce;

  const brandAddreList = useSelector((state) => state.brandAddreList);
  const { brandAddLists } = brandAddreList;

  const brandUpdate = useSelector((state) => state.brandUpdate);
  const { success: successUpdate } = brandUpdate;

  const brandDelete = useSelector((state) => state.brandDelete);
  const { success: successDelete } = brandDelete;

  const brandCheckbox = useSelector((state) => state.brandCheckbox);
  const { success: successcheckbox } = brandCheckbox;

  const Enablebrand = useSelector((state) => state.Enablebrand);
  const { success: successbrand } = Enablebrand;

  const brandCreate = useSelector((state) => state.brandCreate);
  const { success: successbrandsave } = brandCreate;

  const Brandmultiple = useSelector((state) => state.Brandmultiple);
  const { success: successmultiple } = Brandmultiple;

  // *********************Click Button*************************
  const Addbrand = () => {
    navigate("/brandForm");
  };
  const addbrandaddress = () => {
    navigate("/brandaddress");
  };

  // *******************Click Button*************************

  useEffect(() => {
    dispatch(brandList());

    dispatch(brandAddressList());
    if (successmultiple) {
      dispatch({ type: BRAND_MULTIPLE_DELETE_RESET });
    }
    if (successbrandsave) {
      dispatch({ type: BRAND_SAVE_RESET });
    }
    if (successbrand) {
      dispatch({ type: BRAND_ENABLE_UPDATE_RESET });
    }
    if (successcheckbox) {
      dispatch({ type: BRAND_UPDATES_RESET });
    }
    if (successUpdate) {
      dispatch({ type: BRAND_UPDATE_RESET });
    }
    if (successDelete) {
      dispatch({ type: BRAND_DELETE_RESET });
    }
  }, [
    dispatch,
    successcheckbox,
    successbrand,
    successDelete,
    successbrandsave,
    successmultiple,
  ]);

  const editHandler = (brandIndId) => {
    setbrnadindId(brandIndId);
    setNewname(brandIndId.name);
    setNewckeditor(brandIndId.ckeditor);
    setNeweditor(brandIndId.editor);
    setNewchecked(brandIndId.checked);
  };

  const editAddressHandler = (brandAddId) => {
    setBrandAddId(brandAddId);
    setNewbrandId(brandAddId.brand);
    setNewlastname(brandAddId.lastname);
    setNewfirstname(brandAddId.firstname);
    setNewaddress(brandAddId.address);
    setNewaddress2(brandAddId.address2);
    setNewzip(brandAddId.zip);
    setNewcity(brandAddId.lastname);
    setNewcountry(brandAddId.lastname);
    setNewdni(brandAddId.dni);
    setNewphone(brandAddId.phone);
    setNewmobile(brandAddId.mobile);
    setNewother(brandAddId.other);
  };

  const deleteHandler = (params) => {
    if (window.confirm("Are you sure to delete?")) {
      dispatch(deleteBrand(params.row._id));
    }
  };

  // *************************************************************************************
  const [opencheck, setOpencheck] = useState(false);
  const theme1 = useTheme();
  const fullScreen = useMediaQuery(theme1.breakpoints.down("md"));

  const [selectionModel, setSelectionModel] = useState([]);
  // setCheckboxSelection
  const [checkedcheck, setChecked] = useState(false);
  const [dchecked, setdisableChecked] = useState(false);
  const [dsablechecked, setdiChecked] = useState("");

  const handleChange = (event) => {
    setChecked(event.target.checked);
    setdisableChecked(false);
  };

  const handledisableChange = (event) => {
    setdisableChecked(event.target.checked);
    setChecked(false);
    if (dchecked === dchecked) {
      setdiChecked(false);
    }
  };

  const handleClickOpencheck = () => {
    setOpencheck(true);
    setChecked(false);
    setCheckeddelete(false);
    setdisableChecked(false);
  };

  const handleDisClose = () => {
    setOpencheck(false);
  };

  const handleClosecheck = () => {
    setOpencheck(false);
    if (checkedcheck === true) {
      dispatch(
        updateActivate({
          checkboxId: selectionModel,
          checkedshow: checkedcheck,
        }),
      );
    } else {
      dispatch(
        updateActivate({
          checkboxId: selectionModel,
          checkedhide: dsablechecked,
        }),
      );
    }
  };

  const handleChangedata = (e, params) => {
    if (e.target.checked === true) {
      dispatch(
        updatebrandEnable({
          id: params,
          active: e.target.checked,
        }),
      );
    } else {
      dispatch(
        updatebrandEnable({
          id: params,
          deactive: e.target.checked,
        }),
      );
    }
  };

  // ***********************************************************

  const deleteAddressHandler = (params) => {
    if (window.confirm("Are you sure to delete?")) {
      dispatch(deleteBrandAddress(params.row._id));
    }
  };
  // **********************************************Multiple Delet Action*********
  // const [deleteopen, setdeleteopen] = useState(false);
  const [checkeddelete, setCheckeddelete] = useState(false);

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
    setOpencheck(false);
    // setdeleteopen(false);
    if (checkeddelete == true) {
      dispatch(deleteMultiplebrand({ id: selectionModel }));
    }
  };
  // *****************************************************************

  const columns = [
    {
      headerName: "ID",
      flex: 1,
      headerClassName: "super-app-theme--header",
      renderCell: (index) => index.api.getRowIndex(index.row._id) + 1,
    },
    {
      field: "imageFile",
      headerName: "Logo",
      flex: 1,
      headerClassName: "super-app-theme--header",
      renderCell: (params) => {
        return (
          <Avatar
            onClick={handleClickOpen}
            sx={{ height: "40px", width: "40px", cursor: "pointer" }}
            src={`/api/brand/show/${params.row.filename}`}
            alt={params.row.filename}
          />
        );
      },
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      headerClassName: "super-app-theme--header",
      renderCell: (params) => {
        return <Typography sx={{ fontSize: 13 }}>{params.row.name}</Typography>;
      },
    },

    {
      field: "checked",
      headerName: "Status",
      headerClassName: "super-app-theme--header",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      flex: 1,
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
                <Switch onClick={(e) => handleChangedata(e, params.row._id)} />
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
            onClick={() => editHandler(params.row)}
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

  function getbrandId(brandAddLists) {
    return brandAddLists?.row?.brand
      ? brandLists?.find((x) => x?._id === brandAddLists?.row?.brand)?.name
      : "null";
  }

  const brandcolumns = [
    {
      headerName: "ID",
      flex: 1,
      headerClassName: "super-app-theme--header",
      renderCell: (index) => index.api.getRowIndex(index.row._id) + 1,
    },
    {
      field: "brand",
      headerName: "Brand",
      flex: 1,
      headerClassName: "super-app-theme--header",
      valueGetter: getbrandId,
    },
    {
      field: "firstname",
      headerName: "First Name",
      flex: 1,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "lastname",
      headerName: "Last Name",
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
      field: "address",
      headerName: "Address",
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
      field: "actions",
      headerName: "Actions",
      flex: 1,
      headerClassName: "super-app-theme--header",
      renderCell: (params) => (
        <>
          <EditIcon
            onClick={() => editAddressHandler(params.row)}
            style={{
              color: deepPurple[500],
              fontSize: 15,
              margin: 20,
              cursor: "pointer",
            }}
          />

          <DeleteIcon
            onClick={() => deleteAddressHandler(params)}
            style={{ color: red[500], fontSize: 15, cursor: "pointer" }}
          />
        </>
      ),
    },
  ];

  return (
    <>
      <Box sx={{}}>
        {brand === 0 && (
          <>
            {brnadindId ? (
              <Box>
                <Box sx={{ display: "flex" }}>
                  <Typography sx={{ fontSize: "25px", fontWeight: "600" }}>
                    Update Brand
                  </Typography>
                </Box>
                <Box>
                  {" "}
                  <Breadcrumbs
                    separator={<NavigateNextIcon fontSize="small" />}
                    aria-label="breadcrumb"
                  >
                    <Link
                      to="/"
                      style={{
                        color: "rgba(0, 0, 0, 0.6)",
                        fontSize: "15px",
                      }}
                    >
                      <Typography>Home</Typography>
                    </Link>
                    <Link
                      reloadDocument
                      to="/brand"
                      style={{
                        color: "rgba(0, 0, 0, 0.6)",
                        fontSize: "15px",
                      }}
                    >
                      <Typography sx={{ fontSize: "15px" }}>Brands</Typography>
                    </Link>

                    <Typography sx={{ fontSize: "15px" }}>
                      {" "}
                      Update Brands
                    </Typography>
                  </Breadcrumbs>
                </Box>
              </Box>
            ) : (
              <Box>
                <Typography variant="h6" sx={{ mt: -2 }}>
                  Brands
                </Typography>
                <Box sx={{ display: "flex", mt: 2 }}>
                  <Breadcrumbs
                    sx={{ mt: -2 }}
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

                    <Typography sx={{ fontSize: "13px" }}>Brands</Typography>
                  </Breadcrumbs>
                  <Box sx={{ ml: "auto", mt: -1 }}>
                    <Button
                      sx={{
                        mr: 3,
                        mt: -3,
                        borderRadius: "20px",
                        backgroundColor: "#0099CC",
                        fontSize: 12,
                      }}
                      variant="contained"
                      onClick={Addbrand}
                    >
                      Add new brand
                    </Button>

                    <Button
                      sx={{
                        mr: 2,
                        mt: -3,
                        borderRadius: "20px",
                        backgroundColor: "#0099CC",
                        fontSize: 12,
                      }}
                      variant="contained"
                      onClick={addbrandaddress}
                    >
                      Add new brand address
                    </Button>
                  </Box>
                </Box>
              </Box>
            )}
          </>
        )}
        {brand === 1 && (
          <Box sx={{ display: "flex" }}>
            <Typography sx={{ fontSize: "25px", fontWeight: "600" }}>
              Suppliers
            </Typography>

            <Box sx={{ ml: "auto" }}>
              <Button
                sx={{ mr: 2 }}
                variant="contained"
                startIcon={<AddCircleIcon />}
                onClick={() => setSupplier(1)}
              >
                Add new supplier
              </Button>

              <Button variant="outlined" sx={{ mr: 2 }}>
                Recommended Modules and Services
              </Button>

              <Button variant="outlined">Help</Button>
            </Box>
          </Box>
        )}
      </Box>
      <Divider sx={{ mt: 3 }} />
      <Box>
        <Box>
          <Tabs value={brand} onChange={handleTabChange}>
            <Tab sx={{ fontSize: 13 }} label="Brands" />
            <Tab sx={{ fontSize: 13 }} label="Supplier" />
          </Tabs>
        </Box>
        <Box>
          {brand === 0 && (
            <>
              {brnadindId ? (
                <ThemeProvider theme={theme}>
                  <Container
                    component="main"
                    maxWidth="sm"
                    sx={{
                      my: { xs: 5, md: 6, lg: 5 },
                      p: { xs: 2, md: 1 },
                    }}
                  >
                    <CssBaseline />
                    <Box
                      component="form"
                      onSubmit={handleSubmit(updateHandler)}
                      sx={{
                        display: "flex",
                        width: "100%",
                        flexDirection: "column",
                        alignItems: "left",
                        borderRadius: "2px",
                        p: 5,
                        border: "1px solid black",
                      }}
                    >
                      <Typography variant="h4" sx={{ textAlign: "center" }}>
                        Brands
                      </Typography>

                      <Typography>Name*</Typography>
                      <TextField
                        sx={{ mt: "10px" }}
                        required
                        id="newname"
                        name="newname"
                        autoComplete="off"
                        value={newname}
                        onChange={(e) => setNewname(e.target.value)}
                      />

                      <Box sx={{ mt: "20px" }}>
                        <Typography sx={{ mb: "10px" }}>
                          Short Description
                        </Typography>
                        <CKEditor
                          editor={ClassicEditor}
                          data={newckeditor}
                          onChange={(event, editor) => {
                            const data = editor.getData();
                            setNewckeditor({ data });
                          }}
                        />
                      </Box>

                      <Box sx={{ mt: "20px" }}>
                        <Typography sx={{ mb: "10px" }}>Description</Typography>
                        <CKEditor
                          editor={ClassicEditor}
                          data={neweditor}
                          onChange={(event, editor) => {
                            const data = editor.getData();
                            setNeweditor({ data });
                          }}
                        />
                      </Box>

                      <Typography sx={{ mt: "10px" }}>Logo</Typography>
                      <TextField
                        style={{ margin: "10px 0px" }}
                        inputProps={{
                          style: { fontSize: 14 },
                          accept: "image/*",
                        }}
                        fullWidth
                        type="file"
                        id="imageFile"
                        name="imageFile"
                        autoComplete="off"
                        // onChange={(e) => onSelectFile(e)}
                        {...register("imageFile", { required: false })}
                        error={errors.imageFile}
                      />
                      {errors?.imageFile?.type === "required" && (
                        <span className="formError">File is required</span>
                      )}

                      <CardMedia
                        component="img"
                        height="125"
                        sx={{ border: "1px solid black", width: "25%" }}
                        image={`/api/brand/view/${brnadindId.filename}`}
                        alt={brnadindId.filename}
                      />

                      <Typography sx={{ mt: "10px" }}>Enabled</Typography>
                      <Switch
                        color="primary"
                        checked={newchecked}
                        onChange={(e) => setNewchecked(e.target.value)}
                      />

                      <Button
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        type="submit"
                      >
                        Update
                      </Button>
                    </Box>
                  </Container>
                </ThemeProvider>
              ) : (
                <Box>
                  <>
                    {brandAddId._id ? (
                      <ThemeProvider theme={theme}>
                        <Container
                          component="main"
                          maxWidth="sm"
                          sx={{
                            my: { xs: 5, md: 6, lg: 5 },
                            p: { xs: 2, md: 1 },
                          }}
                        >
                          <CssBaseline />
                          <Box
                            component="form"
                            onSubmit={handleSubmit(addressUpdateHandler)}
                            sx={{
                              display: "flex",
                              width: "100%",
                              flexDirection: "column",
                              alignItems: "left",
                              borderRadius: "2px",
                              p: 5,
                              border: "1px solid black",
                            }}
                          >
                            <Typography
                              variant="h4"
                              sx={{ textAlign: "center" }}
                            >
                              Brands
                            </Typography>

                            <Typography>Brand</Typography>
                            <FormControl fullWidth sx={{ mt: 1 }}>
                              <Select
                                id="standard-simple-select"
                                value={newbrandId}
                                onChange={(e) => setNewbrandId(e.target.value)}
                              >
                                {brandLists?.map((item, index) => (
                                  <MenuItem key={index} value={item._id}>
                                    {item.name}
                                  </MenuItem>
                                ))}
                              </Select>
                            </FormControl>

                            <Typography sx={{ mt: "10px" }}>
                              Last Name*
                            </Typography>
                            <TextField
                              sx={{ mt: "10px" }}
                              required
                              id="newlastname"
                              name="newlastname"
                              autoComplete="off"
                              value={newlastname}
                              onChange={(e) => setNewlastname(e.target.value)}
                            />

                            <Typography sx={{ mt: "10px" }}>
                              First Name*
                            </Typography>
                            <TextField
                              sx={{ mt: "10px" }}
                              required
                              id="newfirstname"
                              name="newfirstname"
                              autoComplete="off"
                              value={newfirstname}
                              onChange={(e) => setNewfirstname(e.target.value)}
                            />

                            <Typography sx={{ mt: "10px" }}>
                              Address*
                            </Typography>
                            <TextField
                              sx={{ mt: "10px" }}
                              required
                              id="newaddress"
                              name="newaddress"
                              autoComplete="off"
                              value={newaddress}
                              onChange={(e) => setNewaddress(e.target.value)}
                            />

                            <Typography sx={{ mt: "10px" }}>
                              Address2
                            </Typography>
                            <TextField
                              sx={{ mt: "10px" }}
                              required
                              id="newaddress2"
                              name="newaddress2"
                              autoComplete="off"
                              value={newaddress2}
                              onChange={(e) => setNewaddress2(e.target.value)}
                            />

                            <Typography sx={{ mt: "10px" }}>
                              Zip/Postal code
                            </Typography>
                            <TextField
                              sx={{ mt: "10px" }}
                              required
                              id="newzip"
                              name="newzip"
                              autoComplete="off"
                              value={newzip}
                              onChange={(e) => setNewzip(e.target.value)}
                            />

                            <Typography sx={{ mt: "10px" }}>City*</Typography>
                            <TextField
                              sx={{ mt: "10px" }}
                              required
                              id="newcity"
                              name="newcity"
                              autoComplete="off"
                              value={newcity}
                              onChange={(e) => setNewcity(e.target.value)}
                            />

                            <Typography sx={{ mt: "10px" }}>
                              Country*
                            </Typography>
                            <TextField
                              sx={{ mt: "10px" }}
                              required
                              id="newcountry"
                              name="newcountry"
                              autoComplete="off"
                              value={newcountry}
                              onChange={(e) => setNewcountry(e.target.value)}
                            />

                            <Typography sx={{ mt: "10px" }}>DNI</Typography>
                            <TextField
                              sx={{ mt: "10px" }}
                              required
                              id="newdni"
                              name="newdni"
                              autoComplete="off"
                              value={newdni}
                              onChange={(e) => setNewdni(e.target.value)}
                            />

                            <Typography sx={{ mt: "10px" }}>Phone</Typography>
                            <TextField
                              sx={{ mt: "10px" }}
                              required
                              id="newphone"
                              name="newphone"
                              autoComplete="off"
                              value={newphone}
                              onChange={(e) => setNewphone(e.target.value)}
                            />

                            <Typography sx={{ mt: "10px" }}>
                              Mobile phone
                            </Typography>
                            <TextField
                              sx={{ mt: "10px" }}
                              required
                              id="newmobile"
                              name="newmobile"
                              autoComplete="off"
                              value={newmobile}
                              onChange={(e) => setNewmobile(e.target.value)}
                            />

                            <Typography sx={{ mt: "10px" }}>Other</Typography>
                            <TextField
                              sx={{ mt: "10px" }}
                              required
                              id="newother"
                              name="newother"
                              autoComplete="off"
                              value={newother}
                              onChange={(e) => setNewother(e.target.value)}
                            />

                            <Button
                              fullWidth
                              variant="contained"
                              sx={{ mt: 3, mb: 2 }}
                              type="submit"
                            >
                              Save
                            </Button>
                          </Box>
                        </Container>
                      </ThemeProvider>
                    ) : (
                      <>
                        <Box>
                          <Box sx={{ display: "flex" }}>
                            <Button
                              sx={{
                                mr: 3,
                                mt: 2,
                                mb: 0,

                                borderRadius: "20px",
                                backgroundColor: "#0099CC",
                                fontSize: 12,
                              }}
                              variant="contained"
                              onClick={handleClickOpencheck}
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
                              variant='contained'
                              onClick={handleClickdelete}
                            >
                              Bulk Delete
                            </Button> */}
                          </Box>
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
                                        onChange={handleChange}
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
                                  <FormControlLabel
                                    label="Delete All"
                                    control={
                                      <Checkbox
                                        checked={checkeddelete}
                                        onChange={handleChangedelete}
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

                                {checkeddelete === true ? (
                                  <>
                                    <Button
                                      onClick={handleClosecheckdelet}
                                      autoFocus
                                    >
                                      Delete
                                    </Button>
                                  </>
                                ) : (
                                  <>
                                    <Button
                                      onClick={handleClosecheck}
                                      autoFocus
                                    >
                                      Done
                                    </Button>
                                  </>
                                )}
                              </DialogActions>
                            </Dialog>
                          </Box>
                          {/* <Box>
                            <Dialog
                              open={deleteopen}
                              onClose={handleDeletrClose}
                            >
                              <DialogTitle>Delete</DialogTitle>
                              <DialogContent>
                                <FormControlLabel
                                  label='Delete All'
                                  control={
                                    <Checkbox
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
                                <Button
                                  onClick={handleClosecheckdelet}
                                  autoFocus
                                >
                                  Done
                                </Button>
                              </DialogActions>
                            </Dialog>
                          </Box> */}
                          <Box
                            sx={{
                              height: 325,
                              width: "100%",

                              "& .super-app-theme--header": {
                                backgroundColor: "#808080",
                                color: "#ffffff",
                              },
                              "& .css-1jbbcbn-MuiDataGrid-columnHeaderTitle": {
                                fontSize: 14,
                              },
                              ".css-o8hwua-MuiDataGrid-root .MuiDataGrid-cellContent":
                                {
                                  fontSize: 13,
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
                              columns={columns}
                              rows={brandLists ? brandLists : ""}
                              getRowId={(rows) => rows._id}
                              loading={loading}
                              VerticalAlignment="Center"
                              rowHeight={60}
                              headerHeight={35}
                              // pageSize={10}
                              // rowsPerPageOptions={[25, 50, 100]}
                              pagination
                              checkboxSelection
                              onSelectionModelChange={(newSelectionModel) => {
                                setSelectionModel(newSelectionModel);
                              }}
                              selectionModel={selectionModel}
                            />
                          </Box>
                        </Box>
                        <Box sx={{ mt: 15 }}>
                          <Typography
                            sx={{
                              mt: "20px",
                              fontSize: "18px",
                              fontWeight: "bold",
                            }}
                          >
                            Brands Address Values
                          </Typography>
                          <Box
                            sx={{
                              height: 560,
                              width: "100%",

                              "& .super-app-theme--header": {
                                backgroundColor: "#808080",
                                color: "#ffffff",
                              },
                              "& .css-1jbbcbn-MuiDataGrid-columnHeaderTitle": {
                                fontSize: 16,
                              },
                              ".css-o8hwua-MuiDataGrid-root .MuiDataGrid-cellContent":
                                {
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
                              columns={brandcolumns}
                              rows={brandAddLists ? brandAddLists : ""}
                              getRowId={(rows) => rows._id}
                              VerticalAlignment="Center"
                              rowHeight={64}
                              pagination
                              // pageSize={10}
                              // rowsPerPageOptions={[25, 50, 100]}

                              checkboxSelection
                            />
                          </Box>
                        </Box>
                      </>
                    )}
                  </>
                </Box>
              )}
            </>
          )}
          {brand === 1 && (
            <Box>
              <Box>
                {supplier === 1 ? (
                  <Typography>
                    <LocalShippingIcon />
                    Suppliers
                  </Typography>
                ) : (
                  <>
                    <Typography>Supplier</Typography>
                  </>
                )}
              </Box>
            </Box>
          )}
        </Box>
      </Box>

      <Dialog
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
            image={newImg}
          />
        </Box>
      </Dialog>
    </>
  );
}

export default BrandScreen;
