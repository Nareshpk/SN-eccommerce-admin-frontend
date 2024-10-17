/* eslint-disable no-unused-vars */
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useSelector } from "../../node_modules/react-redux/es/exports";
import {
  applicatinSettingList,
  deleteApp,
  saveApplicationSetting,
  updateAppEnable,
} from "../actions/applicationAction";
import Avatar from "@mui/material/Avatar";
import { useState } from "react";
import CardMedia from "@mui/material/CardMedia";
import Dialog from "@mui/material/Dialog";
import DeleteIcon from "@mui/icons-material/Delete";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Switch, makeStyles } from "@material-ui/core";
import {
  APPLICATION_DELETE_RESET,
  APPLICATION_ENABLE_UPDATE_RESET,
} from "../constants/applicationConstant";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import { Divider } from "../../node_modules/@material-ui/core/index";

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

function ApplicationScreen() {
  const classes = useStyles();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const theme = createTheme();

  const dispatch = useDispatch();

  const [newImg, setNewimg] = useState();

  const [open, setOpen] = useState(false);

  const handleClickOpen = (e) => {
    setNewimg(e.target.src);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const submitHandler = async (e) => {
    dispatch(
      saveApplicationSetting({
        name: e.name,
        imageFile: e.imageFile,
      })
    );
    window.confirm("Image Uploaded Successfully!!");
    event.target.reset();
  };

  const applicationList = useSelector((state) => state.applicationList);
  const { appSettingList } = applicationList;

  const applicationDelete = useSelector((state) => state.applicationDelete);
  const { success: deletesuccess } = applicationDelete;

  const appEnable = useSelector((state) => state.appEnable);
  const { success: enablesuccess } = appEnable;

  useEffect(() => {
    if (enablesuccess) {
      dispatch({ type: APPLICATION_ENABLE_UPDATE_RESET });
    }
    if (deletesuccess) {
      dispatch({ type: APPLICATION_DELETE_RESET });
    }
    dispatch(applicatinSettingList());
  }, [dispatch, deletesuccess, enablesuccess]);

  const deletevalueHandler = (params) => {
    if (window.confirm("Are you sure to delete?")) {
      dispatch(deleteApp(params.row._id));
    }
  };

  const handleChangedata = (e, params) => {
    if (e.target.checked === true) {
      dispatch(
        updateAppEnable({
          id: params,
          active: e.target.checked,
        })
      );
    } else {
      dispatch(
        updateAppEnable({
          id: params,
          deactive: e.target.checked,
        })
      );
    }
  };

  const appColumns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 1,
      headerClassName: "super-app-theme--header",
      renderCell: (index) => index.api.getRowIndex(index.row._id) + 1,
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "filename",
      headerName: "Image",
      flex: 1,
      headerClassName: "super-app-theme--header",
      renderCell: (params) => {
        return (
          <Avatar
            onClick={handleClickOpen}
            sx={{ height: "50px", width: "50px", cursor: "pointer" }}
            src={`/api/brand/show/${params.row.filename}`}
            alt={params.row.filename}
          />
        );
      },
    },
    {
      field: "active",
      headerName: "Status",
      flex: 1,
      headerClassName: "super-app-theme--header",
      renderCell: (params) => {
        if (params.row.active === true) {
          return (
            <FormControlLabel
              control={
                <Switch
                  size='small'
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
      field: "Delete",
      headerName: "Delete",
      flex: 1,
      headerClassName: "super-app-theme--header",
      renderCell: (params) => (
        <>
          <DeleteIcon
            onClick={() => deletevalueHandler(params)}
            style={{ color: "#FF3333", fontSize: 20, cursor: "pointer" }}
          />
        </>
      ),
    },
  ];

  return (
    <>
      <Typography variant='h6' sx={{ mt: -2 }}>
        Application Settings
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

          <Typography sx={{ fontSize: "13px" }}>
            Application Settings
          </Typography>
        </Breadcrumbs>
      </Box>
      <Divider sx={{ mt: 1 }} />
      <ThemeProvider theme={theme}>
        <Box sx={{ mt: -8 }}>
          {" "}
          <Container
            component='main'
            maxWidth='sm'
            sx={{ my: { xs: 3, md: 6, lg: 10 }, p: { xs: 2, md: 1 } }}
          >
            <CssBaseline />
            <Box
              component='form'
              onSubmit={handleSubmit(submitHandler)}
              sx={{
                display: "flex",
                width: "100%",
                flexDirection: "column",
                alignItems: "center",
                borderRadius: "0px",
                p: 5,
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              }}
            >
              <Typography variant='h6'>Application Settings</Typography>

              <TextField
                inputProps={{ style: { fontSize: 13 } }}
                size='small'
                margin='normal'
                fullWidth
                id='name'
                label='Name'
                name='name'
                autoComplete='off'
                // onChange={(e) => setName(e.target.value)}
                {...register("name", { required: true })}
                error={errors.name}
              />
              {errors.name && (
                <span className='formError'>Name is required</span>
              )}

              <TextField
                style={{ margin: "10px 0px" }}
                inputProps={{ style: { fontSize: 14 }, accept: "image/*" }}
                size='small'
                fullWidth
                type='file'
                id='imageFile'
                name='imageFile'
                autoComplete='off'
                // onChange={(e) => onSelectFile(e)}
                {...register("imageFile", { required: true })}
                error={errors.imageFile}
              />
              {errors?.imageFile?.type === "required" && (
                <span className='formError'>File is required</span>
              )}

              <Button
                size='small'
                variant='contained'
                sx={{ mt: 3, mb: 0 }}
                type='submit'
              >
                Upload
              </Button>
            </Box>
          </Container>
        </Box>
      </ThemeProvider>

      <Box
        sx={{
          height: 360,
          width: "100%",
          mt: -5,

          "& .super-app-theme--header": {
            backgroundColor: "#808080",
            color: "#ffffff",
          },
          "& .css-1jbbcbn-MuiDataGrid-columnHeaderTitle": {
            fontSize: 14,
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
          columns={appColumns}
          rows={appSettingList ? appSettingList : ""}
          getRowId={(rows) => rows._id}
          VerticalAlignment='Center'
          rowHeight={60}
          headerHeight={35}
          pagination
          checkboxSelection
        />
      </Box>

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

export default ApplicationScreen;
