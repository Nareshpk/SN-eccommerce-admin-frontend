import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Switch } from "@material-ui/core";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Divider from "@mui/material/Divider";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  TAXES_CREATE_RESET,
  TAXES_MASTER_UPDATE_RESET,
} from "../constants/taxesConstants";
import { taxesDetails, TaxesList, updateTaxes } from "../actions/TaxesAction";

import { useParams } from "react-router-dom";
import { useNavigate } from "../../node_modules/react-router-dom/dist/index";
export default function TaxesFormScreen() {
  const taxesCreate = useSelector((state) => state.taxesCreate);
  const { success: taxSave } = taxesCreate;

  const updatetax = useSelector((state) => state.updatetax);
  const { success: taxUpdate } = updatetax;
  const dispatch = useDispatch();
  const params = useParams();
  const EditId = params.id;

  // const viewId = params.id;
  const taxesList = useSelector((state) => state.taxesList);
  const { taxes } = taxesList;
  const TaxEdit = taxes?.find((x) => x._id === EditId);

  const [EditName, setEditName] = useState(TaxEdit?.Name);
  const [EditRate, setEditRate] = useState(TaxEdit?.Rate);
  const [Editstatus, setEditstatus] = useState(TaxEdit?.checked);
  console.log("Editstatus", Editstatus);
  // const handlestatus = (e) => {
  //   console.log('Editstatus', e);
  //   if (e.target.checked === true) {
  //     setEditstatus(e.target.checked);
  //   } else {
  //     setEditstatus(TaxEdit?.status);
  //   }
  // };

  const switchHandler = (event) => {
    console.log("event", event);
    setEditstatus(!event.target.checked);
  };

  const navigate = useNavigate();
  useEffect(() => {
    dispatch(TaxesList());
    if (taxSave) {
      dispatch({ type: TAXES_CREATE_RESET });
    }
    if (taxUpdate) {
      dispatch({ type: TAXES_MASTER_UPDATE_RESET });
    }
  }, [taxSave, taxUpdate]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const SavetaxDetails = (e) => {
    console.log("e=========================", e);
    dispatch(
      taxesDetails({
        Name: e.taxname,
        Rate: e.taxrate,
        checked: e.checked,
      }),
    );
    window.confirm("Taxes Details Saved Successfully!!");
    navigate("/hometaxes");
    event.target.reset();
  };

  const Updatehandle = () => {
    dispatch(
      updateTaxes({
        id: EditId,
        Name: EditName,
        Rate: EditRate,
        checked: Editstatus,
      }),
    );
    window.confirm("Taxes Details Update Successfully!!");
    navigate("/hometaxes");
  };
  return (
    <div>
      <>
        <Typography variant="h6" sx={{ mt: -2 }}>
          Add Taxes{" "}
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
              to="/hometaxes"
              style={{ color: "rgba(0, 0, 0, 0.6)", fontSize: "13px" }}
            >
              <Typography sx={{ fontSize: 13 }}>Taxes</Typography>
            </Link>
            {EditId ? (
              <>
                <Typography sx={{ fontSize: 13 }}>Update Taxes</Typography>
              </>
            ) : (
              <>
                <Typography sx={{ fontSize: 13 }}>Add Taxes</Typography>
              </>
            )}
          </Breadcrumbs>

          <Divider
            fullWidth
            sx={{ backgroundColor: "#000000", mt: 0 }}
            showlabels="true"
          />
          <>
            {EditId ? (
              <Box>
                <Container
                  component="main"
                  maxWidth="sm"
                  sx={{
                    my: { xs: 2, md: 6, lg: 3 },
                    p: { xs: 2, md: 1, ml: 40 },
                  }}
                >
                  <CssBaseline />
                  <Box>
                    <Typography variant="h6">Taxes</Typography>
                  </Box>
                  <Box
                    component="form"
                    onSubmit={handleSubmit(Updatehandle)}
                    sx={{
                      display: "flex",
                      width: "100%",
                      flexDirection: "column",
                      alignItems: "center",
                      p: 5,
                    }}
                  >
                    <TextField
                      size="small"
                      margin="normal"
                      fullWidth
                      id="taxname"
                      label="Name"
                      name="name"
                      value={EditName}
                      onChange={(e) => setEditName(e.target.value)}
                      autoComplete="off"
                    />
                    <TextField
                      size="small"
                      margin="normal"
                      fullWidth
                      id="taxrate"
                      label="Rate"
                      name="rate"
                      value={EditRate}
                      onChange={(e) => setEditRate(e.target.value)}
                      autoComplete="off"
                    />

                    <InputLabel> Status</InputLabel>
                    <Switch
                      onChange={(e) => setEditstatus(e.target.checked)}
                      checked={Editstatus}
                    />

                    <Box sx={{ display: "flex" }}>
                      <Button
                        variant="contained"
                        sx={{ mt: 3, mb: 2, ml: 1 }}
                        type="submit"
                      >
                        update
                      </Button>
                    </Box>
                  </Box>
                </Container>
              </Box>
            ) : (
              <Box>
                <Container
                  component="main"
                  maxWidth="sm"
                  sx={{
                    my: { xs: 2, md: 6, lg: 3 },
                    p: { xs: 2, md: 1, ml: 40 },
                  }}
                >
                  <CssBaseline />
                  <Box>
                    <Typography variant="h6" sx={{ mt: -3, ml: -25 }}>
                      Taxes
                    </Typography>
                  </Box>
                  <Box
                    component="form"
                    onSubmit={handleSubmit(SavetaxDetails)}
                    sx={{
                      display: "flex",
                      width: "100%",
                      flexDirection: "column",
                      alignItems: "center",
                      p: 5,
                      border: "1px solid #888888",
                      boxShadow: " 1px 1px 1px 1px #909090",
                    }}
                  >
                    <TextField
                      size="small"
                      margin="normal"
                      fullWidth
                      id="taxname"
                      label={
                        <Typography sx={{ fontSize: 13 }}>Name</Typography>
                      }
                      name="name"
                      autoComplete="off"
                      {...register("taxname", { required: true })}
                      error={errors.name}
                      inputProps={{ style: { fontSize: 13 } }}
                    />
                    {errors.taxname && (
                      <span className="formError">Name is required</span>
                    )}

                    <TextField
                      size="small"
                      margin="normal"
                      fullWidth
                      id="taxrate"
                      label={
                        <Typography sx={{ fontSize: 13 }}>Rate</Typography>
                      }
                      name="rate"
                      autoComplete="off"
                      {...register("taxrate", { required: true })}
                      error={errors.rate}
                      inputProps={{ style: { fontSize: 13 } }}
                    />
                    {errors.taxrate && (
                      <span className="formError">Rate is required</span>
                    )}
                    <InputLabel sx={{ fontSize: 13 }}> Status</InputLabel>
                    <Switch
                      onChange={switchHandler}
                      {...register("checked")}
                      size="small"
                    />
                    <Box sx={{ display: "flex" }}>
                      <Button
                        variant="contained"
                        sx={{ mt: 3, mb: 2, ml: 1 }}
                        type="submit"
                        size="small"
                      >
                        Save
                      </Button>
                    </Box>
                  </Box>
                </Container>
              </Box>
            )}
          </>
        </Box>
      </>
    </div>
  );
}
