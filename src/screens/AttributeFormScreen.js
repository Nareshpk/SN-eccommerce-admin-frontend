import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";

import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Divider from "@mui/material/Divider";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";
import { MenuItem } from "../../node_modules/@material-ui/core/index";
import {
  AttributeCategory,
  AttributeMasterListDetails,
  updateAttribute,
} from "../actions/AttributeActions";

function AttributeFormScreen() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {
    // register: register4,
    handleSubmit: handleSubmit4,
    // formState: { errors: errors4 },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const AttId = params.id;
  //   const [Attribute, setAttribute] = useState(0);
  const [attributestype, setAttributestype] = useState("");
  const [btn, setBtn] = useState(0);
  const [, setbtnAnoter] = useState(0);

  const names = ["Dropdown List", "Radio Buttons", "Color or Texture"];

  const attributeMasterList = useSelector((state) => state.attributeMasterList);
  const { attributeMasterdetails } = attributeMasterList;

  const AttEdit = attributeMasterdetails?.find((x) => x?._id === AttId);

  const [attributupdtename, setAttriNameupdate] = useState(
    AttEdit?.attributename,
  );
  const [attributupdte, setAttriupdate] = useState(AttEdit?.attributetype);

  const createHandler = (e) => {
    if (btn === 1) {
      dispatch(
        AttributeCategory({
          name: e.name,
          attributestype: attributestype,
        }),
      );
      window.confirm("Attribute Saved Successfully!!");
      navigate("/attributes");
      event.target.reset();
      setAttributestype("");
      //   setAttribute(0);
      setBtn(0);
      setbtnAnoter(0);
    } else {
      dispatch(
        AttributeCategory({
          name: e.name,
          attributestype: attributestype,
        }),
      );
      window.confirm("Attribute Saved Successfully!!");
      event.target.reset();
      setBtn(0);
      setAttributestype("");
    }
  };

  const updatdHandler = () => {
    dispatch(
      updateAttribute({
        _id: AttEdit?._id,
        attributename: attributupdtename,
        attributetype: attributupdte,
      }),
    );
    window.confirm("Attribute Update Successfully!!");
    navigate("/attributes");
  };

  const theme = createTheme();

  useEffect(() => {
    dispatch(AttributeMasterListDetails());
  }, []);

  return (
    <>
      <Typography variant="h6" sx={{ mt: -2 }}>
        Add Attribute{" "}
      </Typography>
      <Box>
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
          <Link
            to="/attributes"
            style={{ color: "rgba(0, 0, 0, 0.6)", fontSize: "15px" }}
          >
            <Typography sx={{ fontSize: "13px" }}>Attribute</Typography>
          </Link>

          {AttId ? (
            <>
              <Typography sx={{ fontSize: "13px" }}>
                Update Attribute{" "}
              </Typography>
            </>
          ) : (
            <>
              <Typography sx={{ fontSize: "13px" }}>Add Attribute </Typography>
            </>
          )}
        </Breadcrumbs>

        <Divider
          fullWidth
          sx={{ backgroundColor: "#000000", mt: 1 }}
          showlabels="true"
        />
      </Box>

      {AttEdit?._id ? (
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
                component="form"
                onSubmit={handleSubmit4(updatdHandler)}
                sx={{
                  display: "flex",
                  width: "100%",
                  flexDirection: "column",
                  alignItems: "center",
                  borderRadius: "0px",
                  p: 5,
                  border: "1px solid #000000",
                  mt: -7,
                }}
              >
                <Typography variant="h5" sx={{ textAlign: "center" }}>
                  {" "}
                  Update Attributes
                </Typography>
                <TextField
                  size="small"
                  margin="normal"
                  fullWidth
                  id="categoryTittel"
                  label="Name"
                  name="attributupdtename"
                  value={attributupdtename}
                  autoComplete="off"
                  onChange={(e) => setAttriNameupdate(e.target.value)}
                />

                <FormControl fullWidth sx={{ mt: 1 }}>
                  <InputLabel>Attributes Type</InputLabel>
                  <Select
                    id="standard-simple-select"
                    value={attributupdte}
                    label="Attributes Type"
                    onChange={(e) => setAttriupdate(e.target.value)}
                  >
                    {names.map((name) => (
                      <MenuItem key={name} value={name}>
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <Button
                  // fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  type="submit"
                >
                  Update
                </Button>
              </Box>
            </Container>
          </ThemeProvider>
        </Box>
      ) : (
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
                component="form"
                onSubmit={handleSubmit(createHandler)}
                sx={{
                  display: "flex",
                  width: "100%",
                  flexDirection: "column",
                  alignItems: "center",
                  borderRadius: "0px",
                  p: 5,
                  border: "1px solid #000000",
                  mt: -7,
                }}
              >
                <Typography variant="h6" sx={{ textAlign: "center", mt: -3 }}>
                  {" "}
                  Create Attributes
                </Typography>
                <TextField
                  size="small"
                  margin="normal"
                  fullWidth
                  id="categoryTittel"
                  label="Name"
                  name="name"
                  autoComplete="off"
                  inputProps={{
                    style: {
                      fontSize: 13,
                    },
                  }}
                  {...register("name", { required: true })}
                  error={errors.name}
                />
                {errors.name && (
                  <span className="formError">Name is required</span>
                )}

                <FormControl fullWidth sx={{ mt: 1 }}>
                  <InputLabel>Attributes Type</InputLabel>
                  <Select
                    size="small"
                    id="standard-simple-select"
                    value={attributestype}
                    label="Attributes Type"
                    onChange={(e) => setAttributestype(e.target.value)}
                  >
                    {names.map((name) => (
                      <MenuItem key={name} value={name}>
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <Box sx={{ display: "flex" }}>
                  <Button
                    variant="contained"
                    sx={{ mt: 3, mb: 2, ml: 4 }}
                    type="submit"
                    onClick={() => setbtnAnoter(2)}
                  >
                    Save And Add
                  </Button>

                  <Button
                    variant="contained"
                    sx={{ mt: 3, mb: 2, ml: 4 }}
                    type="submit"
                    onClick={() => setBtn(1)}
                  >
                    Save
                  </Button>
                </Box>
              </Box>
            </Container>
          </ThemeProvider>
        </Box>
      )}
    </>
  );
}

export default AttributeFormScreen;
