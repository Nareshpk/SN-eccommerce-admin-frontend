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
import { useDispatch, useSelector } from "react-redux";
import { createCategory } from "../actions/categoryAction";

export default function CategoryScreen() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const categoryCreate = useSelector((state) => state.categoryCreate);
  const {
    // eslint-disable-next-line no-unused-vars
    loading: loadingCreate,
    // eslint-disable-next-line no-unused-vars
    error: errorCreate,
    // eslint-disable-next-line no-unused-vars
    success: successCreate,
    category,
  } = categoryCreate;
  console.log(category);

  const categoryList = useSelector((state) => state.categoryList);
  const { categorydetails } = categoryList;

  const createHandler = (e) => {
    dispatch(
      createCategory({
        categoryTittel: e.categoryTittel,
        categoryName: e.categoryName,
        categorygroup: e.categorygroup,
        categorytype: e.categorytype,
        categorystatus: e.categorystatus,
      })
    );
    window.confirm("Category Saved Successfully!!");
    event.target.reset();
  };

  useEffect(() => {
    // dispatch(categoryListDetails());
  }, [dispatch]);
  const theme = createTheme();

  const columns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 1,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "categorytittel",
      headerName: "CATEGORY TITLE",
      flex: 1,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "categoryname",
      headerName: "CATEGORY NAME",
      flex: 1,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "categorygroup",
      headerName: "CATEGORY GROUP",
      flex: 1,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "categorytype",
      headerName: "CATEGORY TYPE",
      flex: 1,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
      headerClassName: "super-app-theme--header",
    },
    // {
    //   field: "actions",
    //   headerName: "ACTIONS",
    //   flex: 1,
    //   headerClassName: "super-app-theme--header",
    //   renderCell: (products) => (
    //     <>
    //       <EditIcon
    //         onClick={() => editHandler(products)}
    //         style={{
    //           color: deepPurple[500],
    //           fontSize: 15,
    //           margin: 20,
    //           cursor: "pointer",
    //         }}
    //       />

    //       <DeleteIcon
    //         onClick={() => deleteHandler(products)}
    //         style={{ color: red[500], fontSize: 15, cursor: "pointer" }}
    //       />
    //     </>
    //   ),
    // },
  ];

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container
          component="main"
          maxWidth="sm"
          sx={{ my: { xs: 3, md: 6, lg: 10 }, p: { xs: 2, md: 1 } }}
        >
          <CssBaseline />

          <Box
            onSubmit={handleSubmit(createHandler)}
            component="form"
            sx={{
              display: "flex",
              width: "100%",
              flexDirection: "column",
              alignItems: "center",
              borderRadius: "0px",
              p: 5,
              border: "1px solid #000000",
            }}
          >
            <Typography variant="h5" sx={{ textAlign: "center" }}>
              {" "}
              Create Categories
            </Typography>
            <TextField
              size="small"
              margin="normal"
              fullWidth
              id="categoryTittel"
              label="Category Tittel"
              name="categoryTittel"
              autoComplete="off"
              {...register("categoryTittel", { required: true })}
              error={errors.categoryTittel}
            />
            {errors.categoryTittel && (
              <span className="formError">Category Tittel is required</span>
            )}
            <TextField
              inputProps={{ style: { fontSize: 14 } }}
              size="small"
              margin="normal"
              fullWidth
              id="categoryName"
              label="Category Name"
              name="categoryName"
              autoComplete="off"
              {...register("categoryName", { required: true })}
              error={errors.categoryName}
            />
            {errors.categoryName && (
              <span className="formError">Category Name is required</span>
            )}

            <TextField
              inputProps={{ style: { fontSize: 14 } }}
              size="small"
              margin="normal"
              fullWidth
              id="categorygroup"
              label="Category group"
              name="categorygroup"
              autoComplete="off"
              {...register("categorygroup", { required: true })}
              error={errors.categorygroup}
            />
            {errors.categorygroup && (
              <span className="formError">Category group is required</span>
            )}

            <TextField
              inputProps={{ style: { fontSize: 14 } }}
              size="small"
              margin="normal"
              fullWidth
              id="categorytype"
              label="Category text"
              name="categorytype"
              autoComplete="off"
              {...register("categorytype", { required: true })}
              error={errors.categorytype}
            />
            {errors.categorytype && (
              <span className="formError">Category text is required</span>
            )}

            <TextField
              inputProps={{ style: { fontSize: 14 } }}
              size="small"
              margin="normal"
              fullWidth
              id="categorystatus"
              label="status"
              name="categorystatus"
              autoComplete="off"
              {...register("categorystatus", { required: true })}
              error={errors.categorystatus}
            />
            {errors.categorystatus && (
              <span className="formError">status is required</span>
            )}

            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              type="submit"
            >
              Create
            </Button>
          </Box>
        </Container>
      </ThemeProvider>
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
          rows={categorydetails}
          getRowId={(rows) => rows._id}
          VerticalAlignment="Center"
          rowHeight={64}
          // pageSize={pageSize}
          // onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          rowsPerPageOptions={[5, 10, 20]}
          pagination
        />
      </Box>
    </>
  );
}
