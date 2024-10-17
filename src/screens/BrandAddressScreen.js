import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MenuItem } from "../../node_modules/@material-ui/core/index";
import { saveAddress } from "../actions/brandAction";
import { useForm } from "react-hook-form";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import { Divider } from "../../node_modules/@material-ui/core/index";

function BrandAddressScreen() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const theme = createTheme();

  const brandReduce = useSelector((state) => state.brandReduce);
  const { brandLists } = brandReduce;

  const [brandId, setBrandId] = useState("");
  const addresssubmitHandler = (e) => {
    dispatch(
      saveAddress({
        brand: brandId,
        lastname: e.lastname,
        firstname: e.firstname,
        address: e.address,
        address2: e.address2,
        zip: e.zip,
        city: e.city,
        country: e.country,
        dni: e.dni,
        phone: e.phone,
        mobile: e.mobile,
        other: e.other,
      }),
    );
    window.confirm("Address Details Added SuccessFully!!");
    event.target.reset();
    setBrandId("");
  };
  return (
    <>
      <Box>
        <Typography variant="h6" sx={{ mt: -2 }}>
          Add Brands Address
        </Typography>
        <Box sx={{ display: "flex", mt: 0 }}>
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
              <Typography sx={{ fontSize: 13 }}> Home</Typography>
            </Link>

            <Link
              to="/brand"
              style={{
                color: "rgba(0, 0, 0, 0.6)",
                fontSize: "13px",
              }}
            >
              <Typography sx={{ fontSize: 13 }}>Brands</Typography>
            </Link>

            <Typography sx={{ fontSize: 13 }}>Add Brands Address</Typography>
          </Breadcrumbs>
        </Box>
      </Box>
      <Divider sx={{ mt: 1 }} />
      <Box>
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
              onSubmit={handleSubmit(addresssubmitHandler)}
              sx={{
                display: "flex",
                width: "100%",
                flexDirection: "column",
                alignItems: "left",
                borderRadius: "2px",
                p: 5,
                border: "1px solid black",
                mt: -5,
              }}
            >
              <Typography variant="h6" sx={{ textAlign: "center", mt: -5 }}>
                Brands
              </Typography>

              <Typography sx={{ fontSize: 13 }}>Brand</Typography>
              <FormControl fullWidth sx={{ mt: 1 }}>
                <Select
                  size="small"
                  id="standard-simple-select"
                  value={brandId}
                  onChange={(e) => setBrandId(e.target.value)}
                >
                  {brandLists?.map((item, index) => (
                    <MenuItem key={index} value={item._id}>
                      {item.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <Typography sx={{ fontSize: 13 }}>Last Name*</Typography>
              <TextField
                size="small"
                sx={{ mt: 1 }}
                required
                id="lastname"
                name="lastname"
                autoComplete="off"
                {...register("lastname", { required: true })}
                error={errors.lastname}
              />
              {errors.lastname && (
                <span className="formError">Last Name is required</span>
              )}

              <Typography sx={{ mt: 1, fontSize: 13 }}>First Name*</Typography>
              <TextField
                sx={{ mt: 1 }}
                size="small"
                required
                id="firstname"
                name="firstname"
                autoComplete="off"
                {...register("firstname", { required: true })}
                error={errors.firstname}
              />
              {errors.firstname && (
                <span className="formError">First Name is required</span>
              )}

              <Typography sx={{ mt: 1, fontSize: 13 }}>Address*</Typography>
              <TextField
                size="small"
                sx={{ mt: 1 }}
                required
                id="address"
                name="address"
                autoComplete="off"
                {...register("address", { required: true })}
                error={errors.address}
              />
              {errors.address && (
                <span className="formError">Address is required</span>
              )}

              <Typography sx={{ mt: 1, fontSize: 13 }}>Address2</Typography>
              <TextField
                sx={{ mt: 1 }}
                size="small"
                required
                id="address2"
                name="address2"
                autoComplete="off"
                {...register("address2", { required: true })}
                error={errors.address2}
              />
              {errors.address2 && (
                <span className="formError">Address is required</span>
              )}

              <Typography sx={{ mt: 1, fontSize: 13 }}>
                Zip/Postal code
              </Typography>
              <TextField
                sx={{ mt: 1 }}
                size="small"
                required
                id="zip"
                name="zip"
                autoComplete="off"
                {...register("zip", { required: true })}
                error={errors.zip}
              />
              {errors.zip && (
                <span className="formError">Zip/Postal code is required</span>
              )}

              <Typography sx={{ mt: 1, fontSize: 13 }}>City*</Typography>
              <TextField
                sx={{ mt: "10px" }}
                size="small"
                required
                id="city"
                name="city"
                autoComplete="off"
                {...register("city", { required: true })}
                error={errors.city}
              />
              {errors.city && (
                <span className="formError">City is required</span>
              )}

              <Typography sx={{ mt: 1, fontSize: 13 }}>Country*</Typography>
              <TextField
                sx={{ mt: 1 }}
                size="small"
                required
                id="country"
                name="country"
                autoComplete="off"
                {...register("country", { required: true })}
                error={errors.country}
              />
              {errors.country && (
                <span className="formError">Country is required</span>
              )}

              <Typography sx={{ mt: 1, fontSize: 13 }}>DNI</Typography>
              <TextField
                sx={{ mt: 1 }}
                size="small"
                required
                id="dni"
                name="dni"
                autoComplete="off"
                {...register("dni", { required: true })}
                error={errors.dni}
              />
              {errors.dni && <span className="formError">DNI is required</span>}

              <Typography sx={{ mt: 1, fontSize: 13 }}>Phone</Typography>
              <TextField
                sx={{ mt: 1 }}
                size="small"
                required
                id="phone"
                name="phone"
                autoComplete="off"
                {...register("phone", { required: true })}
                error={errors.phone}
              />
              {errors.phone && (
                <span className="formError">Phone is required</span>
              )}

              <Typography sx={{ mt: 1, fontSize: 13 }}>Mobile phone</Typography>
              <TextField
                sx={{ mt: 1 }}
                size="small"
                required
                id="mobile"
                name="mobile"
                autoComplete="off"
                {...register("mobile", { required: true })}
                error={errors.mobile}
              />
              {errors.mobile && (
                <span className="formError">Mobile phone is required</span>
              )}

              <Typography sx={{ mt: 1, fontSize: 13 }}>Other</Typography>
              <TextField
                sx={{ mt: 1 }}
                size="small"
                required
                id="other"
                name="other"
                autoComplete="off"
                {...register("other", { required: true })}
                error={errors.other}
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
      </Box>
    </>
  );
}

export default BrandAddressScreen;
