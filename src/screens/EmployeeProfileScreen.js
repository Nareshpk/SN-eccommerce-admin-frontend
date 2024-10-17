import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { saveProfile } from "../actions/EmployeeAction";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import { Divider } from "../../node_modules/@material-ui/core/index";

function EmployeeProfileScreen() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const theme = createTheme();
      const dispatch = useDispatch();

      

    const createProfile = (e) => {
        dispatch(
          saveProfile({
            EmpProfile: e.eprofil,
          })
        );
        window.confirm("Profile Saved Successfully!!");
        event.target.reset();
      };
    
  return (
    <Box>
       <>
            <Typography variant="h5">Add Employee Profile</Typography>
            <Box sx={{ display: "flex", mt: 2 }}>
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
                  to="/team"
                  style={{
                    color: "rgba(0, 0, 0, 0.6)",
                    fontSize: "15px",
                  }}
                >
                  <Typography>Employee Profile</Typography>
                </Link>
                <Typography sx={{ fontSize: "15px" }}>
                 Add Employee Profile
                </Typography>
              </Breadcrumbs>
              
            </Box>
          </>
          <Divider sx={{ mt: 3 }} />
    <Box>
      <ThemeProvider theme={theme}>
        <Container
          component="main"
          maxWidth="sm"
          sx={{
            my: { xs: 3, md: 6, lg: 10 },
            p: { xs: 2, md: 1 },
          }}
        >
          <CssBaseline />

          <Box
            onSubmit={handleSubmit(createProfile)}
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
              Create Profile
            </Typography>
            <TextField
              size="small"
              margin="normal"
              fullWidth
              id="profile"
              label="Profile"
              name="profile"
              autoComplete="off"
              {...register("eprofil", { required: true })}
              error={errors.eprofil}
            />
            {errors.eprofil && (
              <span className="formError">
                profile is required
              </span>
            )}
            <Box sx={{ display: "flex" }}>
              <Button
                variant="contained"
                sx={{ mt: 3, mb: 2, ml: 5, borderRadius: "20px",
                backgroundColor: "#0099CC", }}
                type="submit"
              >
                Save
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </Box>
  </Box>
  )
}

export default EmployeeProfileScreen
