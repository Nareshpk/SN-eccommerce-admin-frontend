import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useForm } from "react-hook-form";

import { useEffect, useState } from "react";

import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";

import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Divider from "@mui/material/Divider";
import { Link, useNavigate, useParams } from "react-router-dom";
import { MenuItem } from "../../node_modules/@material-ui/core/index";
import {
  FeaturesMasterListDetails,
  FeaturesValueCategory,
  FeaturesValueListDetails,
  updatefeatureValue,
} from "../actions/AttributeActions";

function FeaturevalueScreen() {
  const {
    register: register3,
    handleSubmit: handleSubmit3,
    formState: { errors: errors3 },
  } = useForm();
  const theme = createTheme();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const params = useParams();
  const customindId = params.id;
  const [BtnFeatureVlaue, setBtnFeatureVlaue] = useState(0);
  const [, setBtnFeatureVlaueAnother] = useState(0);
  const [featurestype, setFeaturestype] = useState("");

  const FeaturesList = useSelector((state) => state.FeaturesList);
  const { Featuresdetails } = FeaturesList;

  const FeaturesValueList = useSelector((state) => state.FeaturesValueList);
  const { Featuresvaluedetails } = FeaturesValueList;

  const FuterueId = Featuresvaluedetails?.find((x) => x?._id === customindId);

  const [FeatureeditvalueType, setFeaturestypeValueEdit] = useState(
    FuterueId?.featuretype
  );
  const [FeaturEditvalue, setEditFeatureValue] = useState(
    FuterueId?.featurevalue
  );

  const createFeatureValue = (e) => {
    if (BtnFeatureVlaue === 1) {
      dispatch(
        FeaturesValueCategory({
          Featurevalue: e.fvalue,
          Featuretype: featurestype,
        })
      );
      window.confirm("Features Saved Successfully!!");
      navigate("/attributes");
      event.target.reset();
      setFeaturestype();
      setBtnFeatureVlaue(0);
      setBtnFeatureVlaueAnother(0);
    } else {
      dispatch(
        FeaturesValueCategory({
          Featurevalue: e.fvalue,
          Featuretype: featurestype,
        })
      );
      window.confirm("Features Saved Successfully!!");

      event.target.reset();
      setFeaturestype();
      setBtnFeatureVlaue(0);
      setBtnFeatureVlaueAnother(0);
    }
  };

  const updateFeatureValue = () => {
    dispatch(
      updatefeatureValue({
        _id: FuterueId?._id,
        featuretype: FeatureeditvalueType,
        featurevalue: FeaturEditvalue,
      })
    );
    window.confirm("Feature Update Successfully!!");
    navigate("/attributes");
  };

  useEffect(() => {
    dispatch(FeaturesMasterListDetails());
    dispatch(FeaturesValueListDetails());
  }, [dispatch]);

  return (
    <>
      {FuterueId?._id ? (
        <Box>
          <Typography variant='h5'>Feature Value</Typography>
          <Box>
            <Breadcrumbs
              separator={<NavigateNextIcon fontSize='small' />}
              aria-label='breadcrumb'
            >
              <Link
                to='/'
                style={{
                  color: "rgba(0, 0, 0, 0.6)",
                  fontSize: "15px",
                }}
              >
                <Typography>Home</Typography>
              </Link>
              <Link
                to='/attributes'
                style={{ color: "rgba(0, 0, 0, 0.6)", fontSize: "15px" }}
              >
                <Typography>Feature</Typography>
              </Link>
              <Typography sx={{ fontSize: "15px" }}>
                Update Feature Value{" "}
              </Typography>
            </Breadcrumbs>

            <Divider
              fullWidth
              sx={{ backgroundColor: "#000000", mt: 3 }}
              showlabels='true'
            />
          </Box>
          <ThemeProvider theme={theme}>
            <Container
              component='main'
              maxWidth='sm'
              sx={{
                my: { xs: 3, md: 6, lg: 10 },
                p: { xs: 2, md: 1 },
              }}
            >
              <CssBaseline />

              <Box
                onSubmit={handleSubmit3(updateFeatureValue)}
                component='form'
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
                <Typography variant='h5' sx={{ textAlign: "center" }}>
                  {" "}
                  Update Features Type
                </Typography>
                <FormControl fullWidth sx={{ mt: 1 }}>
                  <InputLabel>Feature Type</InputLabel>
                  <Select
                    id='standard-simple-select'
                    value={FeatureeditvalueType}
                    label='Attributes Type'
                    onChange={(e) => setFeaturestypeValueEdit(e.target.value)}
                  >
                    {Featuresdetails.map((Feature) => (
                      <MenuItem key={Feature._id} value={Feature._id}>
                        {Feature.featurename}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <TextField
                  size='small'
                  margin='normal'
                  fullWidth
                  id='fvalue'
                  label='Value'
                  name='fvalue'
                  autoComplete='off'
                  value={FeaturEditvalue}
                  onChange={(e) => setEditFeatureValue(e.target.value)}
                />

                <Button
                  fullWidth
                  variant='contained'
                  sx={{
                    mt: 3,
                    mb: 2,
                    borderRadius: "20px",
                    backgroundColor: "#0099CC",
                  }}
                  type='submit'
                >
                  Update
                </Button>
              </Box>
            </Container>
          </ThemeProvider>
        </Box>
      ) : (
        <Box>
          <Typography variant='h5'>Feature Value</Typography>
          <Box>
            <Breadcrumbs
              separator={<NavigateNextIcon fontSize='small' />}
              aria-label='breadcrumb'
            >
              <Link
                to='/'
                style={{
                  color: "rgba(0, 0, 0, 0.6)",
                  fontSize: "15px",
                }}
              >
                <Typography>Home</Typography>
              </Link>
              <Link
                to='/attributes'
                style={{ color: "rgba(0, 0, 0, 0.6)", fontSize: "15px" }}
              >
                <Typography>Feature</Typography>
              </Link>
              <Typography sx={{ fontSize: "15px" }}>
                Add Feature Value{" "}
              </Typography>
            </Breadcrumbs>

            <Divider
              fullWidth
              sx={{ backgroundColor: "#000000", mt: 3 }}
              showlabels='true'
            />
          </Box>
          <ThemeProvider theme={theme}>
            <Container
              component='main'
              maxWidth='sm'
              sx={{
                my: { xs: 3, md: 6, lg: 10 },
                p: { xs: 2, md: 1 },
              }}
            >
              <CssBaseline />

              <Box
                onSubmit={handleSubmit3(createFeatureValue)}
                component='form'
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
                <Typography variant='h5' sx={{ textAlign: "center" }}>
                  {" "}
                  Create Features Type
                </Typography>
                <FormControl fullWidth sx={{ mt: 1 }}>
                  <InputLabel>Feature Type</InputLabel>
                  <Select
                    id='standard-simple-select'
                    value={featurestype}
                    label='Attributes Type'
                    onChange={(e) => setFeaturestype(e.target.value)}
                  >
                    {Featuresdetails?.map((Feature) => (
                      <MenuItem key={Feature._id} value={Feature._id}>
                        {Feature.featurename}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <TextField
                  size='small'
                  margin='normal'
                  fullWidth
                  id='fvalue'
                  label='Value'
                  name='fvalue'
                  autoComplete='off'
                  {...register3("fvalue", { required: true })}
                  error={errors3.fvalue}
                />
                {errors3.name && (
                  <span className='formError'>Value is required</span>
                )}
                <Box sx={{ display: "flex" }}>
                  <Button
                    variant='contained'
                    sx={{
                      mr: 3,

                      ml: 5,
                      borderRadius: "20px",
                      backgroundColor: "#0099CC",
                    }}
                    type='Click'
                    onClick={() => setBtnFeatureVlaueAnother(2)}
                  >
                    Save And Another Value
                  </Button>

                  <Button
                    variant='contained'
                    sx={{
                      mr: 3,

                      ml: 5,
                      borderRadius: "20px",
                      backgroundColor: "#0099CC",
                    }}
                    type='Click'
                    onClick={() => setBtnFeatureVlaue(1)}
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

export default FeaturevalueScreen;
