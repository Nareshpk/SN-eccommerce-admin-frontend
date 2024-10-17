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
import { useEffect, useState } from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Divider from "@mui/material/Divider";
import { ColorPicker } from "material-ui-color";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";
import {
  // CardMedia,
  Checkbox,
  MenuItem,
} from "../../node_modules/@material-ui/core/index";
import {
  AttributeMasterListDetails,
  AttributeValueListDetails,
  createAttributeVlaue,
  updateAttributeValue,
} from "../actions/AttributeActions";

function AttributeValueScreen() {
  const {
    register: register1,
    handleSubmit: handleSubmit1,
    formState: { errors: errors1 },
  } = useForm();
  const dispatch = useDispatch();
  //   const {
  //     // register: register4,
  //     handleSubmit: handleSubmit4,
  //     // formState: { errors: errors4 },
  //   } = useForm();
  const params = useParams();
  const customindId = params.id;
  const navigate = useNavigate();
  const attributeMasterList = useSelector((state) => state.attributeMasterList);
  const { attributeMasterdetails } = attributeMasterList;

  const AttributeValueList = useSelector((state) => state.AttributeValueList);
  const { attributeValuedetails } = AttributeValueList;

  const Attvalue = attributeValuedetails?.find((x) => x?._id === customindId);
  // console.log("customindId", customindId);
  // console.log("Attvaluuuuuuuue", attributeMasterdetails);

  const [AttributeVlaue, setAttributeVlaue] = useState("");
  // console.log("attributeValuedetails", attributeValuedetails);
  const [btnattValue, setBtnattValue] = useState(0);
  const [, setBtnattValueAnother] = useState(0);
  const [color, setColor] = useState(false);
  const [check1, setcheck1] = useState(true);

  const [AtteditType, setAttValueType] = useState(Attvalue?.attributeVlaue);
  const [AttEditvalue, setEditValue] = useState(Attvalue?.value);
  const onchangeCheck1 = (event) => {
    if (check1 === true) {
      setcheck1(event.target.checked);
    } else {
      setcheck1(event.target.checked);
    }
  };

  const AttributeType = attributeMasterdetails?.find(
    (x) => x?._id === AttributeVlaue,
  )?.attributetype;
  const AttributeType1 = attributeMasterdetails?.find(
    (x) => x?._id === AtteditType,
  )?.attributetype;
  // console.log("AttributeType", AttributeType);
  const theme = createTheme();

  const UpdatEditValue = (e) => {
    dispatch(
      updateAttributeValue({
        _id: Attvalue._id,
        atteditType: AtteditType,
        attEditvalue: AttEditvalue,
        imageFile: e.imageFile,
        prodselect: check1,
      }),
    );
    window.confirm("Attribute Update Successfully!!");
    navigate("/attributes");
  };

  const createAttributeValue = (e) => {
    if (btnattValue === 1) {
      dispatch(
        createAttributeVlaue({
          value: e.value,
          attributeVlaue: AttributeVlaue,
          color: color.name,
          imageFile: e.imageFile,
          prodselect: check1,
        }),
      );
      window.confirm("Attribute Value Saved Successfully!!");
      navigate("/attributes");
      event.target.reset();
      setAttributeVlaue();
      setColor("");
      //   setAttributeValue(0);
      setBtnattValue(0);
      setBtnattValueAnother(0);
      setcheck1(false);
    } else {
      dispatch(
        createAttributeVlaue({
          value: e.value,
          attributeVlaue: AttributeVlaue,
          color: color.name,
          imageFile: e.imageFile,
          prodselect: check1,
        }),
      );
      window.confirm("Attribute Value Saved Successfully!!");
      event.target.reset();
      setAttributeVlaue();
      setColor("");
      setBtnattValue(0);
      setBtnattValueAnother(0);
      setcheck1(false);
    }
  };

  useEffect(() => {
    dispatch(AttributeMasterListDetails());
    dispatch(AttributeValueListDetails());
  }, [dispatch]);
  return (
    <>
      <Typography variant="h6" sx={{ mt: -2 }}>
        Add Attribute Value{" "}
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
            <Typography sx={{ fontSize: 13 }}>Home</Typography>
          </Link>
          <Link
            to="/attributes"
            style={{ color: "rgba(0, 0, 0, 0.6)", fontSize: "15px" }}
          >
            <Typography sx={{ fontSize: 13 }}>Attribute</Typography>
          </Link>
          <Typography sx={{ fontSize: "13px" }}>
            Add Attribute Value{" "}
          </Typography>
        </Breadcrumbs>

        <Divider
          fullWidth
          sx={{ backgroundColor: "#000000", mt: 3 }}
          showlabels="true"
        />
      </Box>

      {Attvalue?._id ? (
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
                onSubmit={handleSubmit1(UpdatEditValue)}
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
                  Update Attributes Value
                </Typography>
                <FormControl fullWidth sx={{ mt: 1 }}>
                  <InputLabel>Attributes Type</InputLabel>
                  <Select
                    id="standard-simple-select"
                    value={AtteditType}
                    label="Attributes Type"
                    onChange={(e) => setAttValueType(e.target.value)}
                  >
                    {attributeMasterdetails?.map((detail) => (
                      <MenuItem key={detail._id} value={detail._id}>
                        {detail.attributename}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <TextField
                  size="small"
                  margin="normal"
                  fullWidth
                  id="value"
                  label="Value"
                  name="value"
                  autoComplete="off"
                  value={AttEditvalue}
                  onChange={(e) => setEditValue(e.target.value)}
                />

                {AttributeType1 === "Color or Texture" ? (
                  <>
                    <ColorPicker
                      defaultValue="transparent"
                      id="ColorPic"
                      name="ColorPic"
                      value={color}
                      onChange={setColor}
                    />

                    <Typography variant="h6">Texture</Typography>
                  </>
                ) : (
                  <></>
                )}

                {/* <TextField
                  style={{ margin: "10px 0px" }}
                  inputProps={{
                    style: { fontSize: 14 },
                    accept: "image/*",
                  }}
                  size='small'
                  fullWidth
                  type='file'
                  id='imageFile'
                  name='imageFile'
                  autoComplete='off'
                  // onChange={(e) => onSelectFile(e)}
                  {...register1("imageFile", {
                    required: false,
                  })}
                  error={errors1.imageFile}
                />
                {Attvalue?.filename ? (
                  <CardMedia
                    component='img'
                    height='125'
                    sx={{
                      border: "1px solid black",
                      width: "25%",
                    }}
                    image={`/api/AttributeValue/view/${Attvalue?.filename}`}
                    alt={Attvalue.filename}
                  />
                ) : (
                  <></>
                )} */}

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
                onSubmit={handleSubmit1(createAttributeValue)}
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
                  Create Attributes Value
                </Typography>
                <FormControl fullWidth sx={{ mt: 1 }}>
                  <InputLabel>Attributes Type</InputLabel>
                  <Select
                    size="small"
                    id="standard-simple-select"
                    value={AttributeVlaue}
                    label="Attributes Type"
                    onChange={(e) => setAttributeVlaue(e.target.value)}
                  >
                    {attributeMasterdetails?.map((detail) => (
                      // console.log("detail==>", detail),
                      <MenuItem key={detail._id} value={detail._id}>
                        {detail.attributename}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <TextField
                  size="small"
                  margin="normal"
                  fullWidth
                  id="value"
                  label="Value"
                  name="value"
                  autoComplete="off"
                  {...register1("value", {
                    required: true,
                  })}
                  error={errors1.value}
                />
                {errors1.value && (
                  <span className="formError">value is required</span>
                )}
                <Checkbox
                  checked={check1}
                  onChange={onchangeCheck1}
                  name="presta"
                />
                {AttributeType === "Color or Texture" ? (
                  <>
                    <ColorPicker
                      defaultValue="transparent"
                      id="ColorPic"
                      name="ColorPic"
                      value={color}
                      onChange={setColor}
                    />
                    {errors1.ColorPic && (
                      <span className="formError">ColorPic is required</span>
                    )}
                    <Typography variant="h6">Texture</Typography>
                  </>
                ) : (
                  <></>
                )}

                {/* <TextField
                  style={{ margin: "10px 0px" }}
                  inputProps={{
                    style: { fontSize: 14 },
                    accept: "image/*",
                  }}
                  size='small'
                  fullWidth
                  type='file'
                  id='imageFile'
                  name='imageFile'
                  autoComplete='off'
                  // onChange={(e) => onSelectFile(e)}
                  {...register1("imageFile", {
                    required: false,
                  })}
                  error={errors1.imageFile}
                />
                {errors1?.imageFile?.type === "required" && (
                  <span className='formError'>File is required</span>
                )} */}
                <Box sx={{ display: "flex" }}>
                  <Button
                    // fullWidth
                    variant="contained"
                    sx={{
                      mt: 3,
                      mb: 2,
                      mr: 2,
                      borderRadius: "20px",
                      backgroundColor: "#0099CC",
                    }}
                    type="Click"
                    onClick={() => setBtnattValueAnother(2)}
                  >
                    Save And Another Value
                  </Button>
                  <Button
                    // fullWidth
                    variant="contained"
                    sx={{
                      mt: 3,
                      mb: 2,
                      mr: 2,
                      borderRadius: "20px",
                      backgroundColor: "#0099CC",
                    }}
                    type="Click"
                    onClick={() => setBtnattValue(1)}
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

export default AttributeValueScreen;
