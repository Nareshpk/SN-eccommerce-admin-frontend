/* eslint-disable no-unused-vars */
import Box from "@mui/material/Box";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "../../node_modules/react-router-dom/dist/index";
import CardMedia from "@mui/material/CardMedia";
import Axios from "axios";
import {
  GeneralDetails,
  genSettingAllList,
  genSettingList,
  updateGeneral,
} from "../actions/GeneralAction";
import "./breadcrumb.css";
import { GENERAL_DETAIL_UPDATE_RESET } from "../constants/GeneralConstants";
// import Card from "@mui/material/Card";
export const GeneralSettingScreen = () => {
  function handleChange(e) {
    setcoverimg(e.target.files);
  }
  const params = useParams();
  console.log('params', params);
  const AttId = params.id;

  const [selectedFile, setSelectedFile] = useState();
  const [selectedFilenew, setSelectednew] = useState();
  const [preview, setPreview] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [, setNext] = useState(0);
  const [Finish, setFinish] = useState(0);
  const [Previous, setPrevious] = useState(0);
  const [Carrier, setCarrier] = useState("");
  const [url, setUrl] = useState("");

  const generalsave = useSelector((state) => state.generalsave);
  const { success: savegendetail, productId } = generalsave;

  const generalallalllist = useSelector((state) => state.generalallalllist);
  const { generaldatum } = generalallalllist;

  let sample;
  {
    generaldatum?.map((item) => {
      sample = item;
    });
  }

  const generallist = useSelector((state) => state.generallist);
  const { generaldata } = generallist;

  let dataype;
  {
    generaldata?.map((item) => {
      dataype = item;
    });
  }

  const [trackurl, settrackurl] = useState(dataype?.originalname);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const SavegeneralDetails = async (e) => {
    if (Finish === 1) {
      const fd = new FormData();
      // fd.append("image", selectedFilenew);
      // fd.append("name", Carrier);
      // fd.append("track", url);
      // const { data } = await Axios.post("/api/generaldetails", fd);
      // console.log("data", data);
      dispatch(
        GeneralDetails({
          name: Carrier,
          imageFile: selectedFilenew,
          track: url,
        }),
      );
      window.confirm("Details Saved Successfully!!");
      event.target.reset();
      navigate("/logicGrid");
      // setAttribute(0);
      setNext(0);
      setFinish(0);
    } else {
      dispatch(
        GeneralDetails({
          name: Carrier,
          imageFile: selectedFilenew,
          track: url,
        }),
      );

      navigate(`/costAndShip/${1}`);
      setNext(0);
      setFinish("");
    }
  };

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files?.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    setSelectednew(e.target.files);
    setSelectedFile(e.target.files[0]);
  };

  //*****************************************Update Section************************** */
  const generalupdate = useSelector((state) => state.generalupdate);
  const { success: genUpdate } = generalupdate;
  const genEdit = generaldatum?.find((x) => x._id === AttId);

  const [EditName, setEditName] = useState(genEdit?.name);
  const [EditUrl, setEditUrl] = useState(genEdit?.track);
  const [coverimg, setcoverimg] = useState(genEdit?.filename);

  const UpdategeneralDetails = () => {
    if (Finish === 1) {
      dispatch(
        updateGeneral({
          id: AttId,
          name: EditName,
          imageFile: coverimg,
          track: EditUrl,
        }),
      );
      window.confirm("Details Updated Successfully!!");
      event.target.reset();

      setNext(0);
      setFinish(0);
    } else {
      dispatch(
        updateGeneral({
          id: AttId,
          name: EditName,
          imageFile: coverimg,
          track: EditUrl,
        }),
      );

      navigate(`/costAndShip/${AttId}`);
      setNext(0);
      setFinish("");
    }
  };

  //************************************************************************************
  useEffect(() => {
    dispatch(GeneralDetails());
    dispatch(genSettingList());
    dispatch(genSettingAllList());
    if (genUpdate) {
      dispatch({ type: GENERAL_DETAIL_UPDATE_RESET });
    }
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile, genUpdate]);
  return (
    <>
      {AttId != 1 ? (
        <>
          <div>
            <Box>
              <Grid container>
                <Grid item xs={12}>
                  <React.Fragment>
                    <CssBaseline />
                    <Box
                      variant="outlined"
                      onSubmit={handleSubmit(UpdategeneralDetails)}
                      sx={{
                        boxShadow: 3,
                        width: "60rem",
                        height: "40rem",
                        bgcolor: (theme) =>
                          theme.palette.mode === "dark" ? "#101010" : "#fff",
                        color: (theme) =>
                          theme.palette.mode === "dark"
                            ? "grey.300"
                            : "grey.800",
                        p: 1,
                        m: 1,
                        ml: 2,
                        mt: 0,
                        borderRadius: 2,
                        textAlign: "center",
                        fontSize: "0.875rem",
                        fontWeight: "00",
                      }}
                      component="form"
                    >
                      <Box>
                        <Breadcrumbs aria-label="breadcrumb flat">
                          <div className="breadcrumb flat">
                            <Link to="/logicGrid">Carriers</Link>
                            <Link to="/logistic" className="active">
                              General Settings
                            </Link>
                            <Link to={`/costAndShip/${AttId}`}>
                              Shipping locations and costs
                            </Link>
                            <Link to={`/sizeweightgroup/${AttId}`}>
                              Size,weight and group access
                            </Link>
                            <Link to={`/summary/${AttId}`}>Summary</Link>
                          </div>
                        </Breadcrumbs>
                      </Box>
                      <Box
                        sx={{
                          boxShadow: 3,
                          width: "57rem",
                          height: "25rem",
                          bgcolor: (theme) =>
                            theme.palette.mode === "dark" ? "#101010" : "#fff",
                          color: (theme) =>
                            theme.palette.mode === "dark"
                              ? "grey.300"
                              : "grey.800",
                          p: 1,
                          m: 1,
                          ml: 2,
                          mt: 4,
                          borderRadius: 2,
                          textAlign: "center",
                          fontSize: "0.875rem",
                          fontWeight: "100",
                        }}
                      >
                        <Box sx={{ display: "flex", ml: 20, mt: 5 }}>
                          <Typography sx={{ fontSize: "0.875rem" }}>
                            Carrier Name:
                          </Typography>
                          <Box sx={{ ml: 4 }}>
                            <TextField
                              id="carriername"
                              name="carriername"
                              variant="outlined"
                              style={{ width: 375 }}
                              inputProps={{
                                style: { fontSize: 12 },
                              }}
                              value={EditName}
                              onChange={(e) => setEditName(e.target.value)}
                              size="small"
                            />
                          </Box>
                        </Box>
                        <Box sx={{ display: "flex", ml: 20, mt: 5 }}>
                          <Typography sx={{ fontSize: "0.875rem" }}>
                            Logo:
                          </Typography>
                          <Box sx={{ ml: "94px" }}>
                            <Box>
                              <TextField
                                style={{ margin: "10px 0px" }}
                                inputProps={{
                                  style: { fontSize: 14 },
                                  accept: "image/*",
                                }}
                                size="small"
                                fullWidth
                                type="file"
                                id="filename"
                                name="filename"
                                autoComplete="off"
                                onChange={handleChange}
                              />
                              <CardMedia
                                component="img"
                                height="125"
                                sx={{ border: "1px solid black", width: "25%" }}
                                image={`/api/generaldetails/Shipshow/${genEdit?.filename}`}
                                alt={genEdit?.filename}
                              />
                            </Box>
                          </Box>
                        </Box>
                        <Box sx={{ display: "flex", ml: 20, mt: 5 }}>
                          <Typography sx={{ fontSize: "0.875rem" }}>
                            Tracking URL:
                          </Typography>
                          <Box sx={{ ml: 5 }}>
                            <TextField
                              id="trackurl"
                              name="trackurl"
                              variant="outlined"
                              value={EditUrl}
                              onChange={(e) => setEditUrl(e.target.value)}
                              style={{ width: 375 }}
                              inputProps={{
                                style: { fontSize: 12 },
                              }}
                              size="small"
                            />
                            {/* {errors.trackurl && (
                                                <span className='formError'>Tracking URL is required</span>
                                            )} */}
                          </Box>
                        </Box>
                      </Box>
                      <Box sx={{ mt: 4, ml: 60 }}>
                        <Button
                          sx={{ ml: 10 }}
                          variant="outlined"
                          size="medium"
                        >
                          Previous
                        </Button>
                        <Button
                          sx={{ ml: 2 }}
                          variant="outlined"
                          size="medium"
                          type="submit"
                          onClick={() => setNext(2)}
                        >
                          Next
                        </Button>
                        <Button
                          sx={{ ml: 2 }}
                          variant="outlined"
                          size="medium"
                          color="success"
                          type="submit"
                          onClick={() => setFinish(1)}
                        >
                          Finish
                        </Button>
                      </Box>
                    </Box>
                  </React.Fragment>
                </Grid>
              </Grid>
            </Box>
          </div>
        </>
      ) : (
        <>
          <div>
            <Box>
              <Grid container>
                <Grid item xs={12}>
                  <React.Fragment>
                    <CssBaseline />
                    <Box
                      variant="outlined"
                      onSubmit={handleSubmit(SavegeneralDetails)}
                      sx={{
                        boxShadow: 3,
                        width: "60rem",
                        height: "40rem",
                        bgcolor: (theme) =>
                          theme.palette.mode === "dark" ? "#101010" : "#fff",
                        color: (theme) =>
                          theme.palette.mode === "dark"
                            ? "grey.300"
                            : "grey.800",
                        p: 1,
                        m: 1,
                        ml: 2,
                        mt: 0,
                        borderRadius: 2,
                        textAlign: "center",
                        fontSize: "0.875rem",
                        fontWeight: "00",
                      }}
                      component="form"
                    >
                      <Box>
                        <Breadcrumbs aria-label="breadcrumb flat">
                          <div className="breadcrumb flat">
                            <Link to="/logicGrid">Carriers</Link>
                            <Link to="/logistic" className="active">
                              General Settings
                            </Link>
                            <Link className="deactive">
                              Shipping locations and costs
                            </Link>
                            <Link className="deactive">
                              Size,weight and group access
                            </Link>
                            <Link className="deactive">Summary</Link>
                          </div>
                        </Breadcrumbs>
                      </Box>
                      <Box
                        sx={{
                          boxShadow: 3,
                          width: "57rem",
                          height: "25rem",
                          bgcolor: (theme) =>
                            theme.palette.mode === "dark" ? "#101010" : "#fff",
                          color: (theme) =>
                            theme.palette.mode === "dark"
                              ? "grey.300"
                              : "grey.800",
                          p: 1,
                          m: 1,
                          ml: 2,
                          mt: 4,
                          borderRadius: 2,
                          textAlign: "center",
                          fontSize: "0.875rem",
                          fontWeight: "100",
                        }}
                      >
                        <Box sx={{ display: "flex", ml: 20, mt: 5 }}>
                          <Typography sx={{ fontSize: "0.875rem" }}>
                            Carrier Name:
                          </Typography>
                          <Box sx={{ ml: 4 }}>
                            <TextField
                              id="carriername"
                              name="carriername"
                              variant="outlined"
                              style={{ width: 375 }}
                              value={AttId == 1 ? Carrier : dataype?.name}
                              inputProps={{
                                style: { fontSize: 12 },
                              }}
                              onChange={(e) => setCarrier(e.target.value)}
                              size="small"
                            />
                          </Box>
                        </Box>
                        <Box sx={{ display: "flex", ml: 20, mt: 5 }}>
                          <Typography sx={{ fontSize: "0.875rem" }}>
                            Logo:
                          </Typography>
                          <Box sx={{ ml: "94px" }}>
                            <Box>
                              <TextField
                                size="small"
                                variant="outlined"
                                input
                                type="file"
                                onChange={onSelectFile}
                                style={{ width: 375 }}
                                inputProps={{
                                  style: { fontSize: "0.875rem" },
                                }}
                              />

                              <Box sx={{ ml: -22 }}>
                                {selectedFile ? (
                                  <img
                                    height="100px"
                                    width="100px"
                                    border="1px solid #555"
                                    style={{ marginLeft: "-6rem" }}
                                    src={preview}
                                  />
                                ) : (
                                  <img
                                    height="100px"
                                    width="100px"
                                    border="1px solid #555"
                                    style={{ marginLeft: "-6rem" }}
                                    src={
                                      AttId == 1
                                        ? preview
                                        : `/api/generaldetails/show/${dataype?.filename}`
                                    }
                                  />
                                )}
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                        <Box sx={{ display: "flex", ml: 20, mt: 5 }}>
                          <Typography sx={{ fontSize: "0.875rem" }}>
                            Tracking URL:
                          </Typography>
                          <Box sx={{ ml: 5 }}>
                            <TextField
                              id="trackurl"
                              name="trackurl"
                              variant="outlined"
                              value={AttId == 1 ? url : dataype?.track}
                              onChange={(e) => setUrl(e.target.value)}
                              style={{ width: 375 }}
                              inputProps={{
                                style: { fontSize: 12 },
                              }}
                              size="small"
                            />
                            {/* {errors.trackurl && (
                                                <span className='formError'>Tracking URL is required</span>
                                            )} */}
                          </Box>
                        </Box>
                      </Box>
                      <Box sx={{ mt: 4, ml: 60 }}>
                        {/* <Button
                          sx={{ ml: 10 }}
                          variant="outlined"
                          size="medium"
                          type="submit"
                          onClick={onPreviousChange}
                        >
                          Previous
                        </Button> */}
                        <Button
                          sx={{ ml: 25 }}
                          variant="outlined"
                          size="medium"
                          type="submit"
                          onClick={() => setNext(2)}
                        >
                          Next
                        </Button>
                        <Button
                          sx={{ ml: 2 }}
                          variant="outlined"
                          size="medium"
                          color="success"
                          type="submit"
                          onClick={() => setFinish(1)}
                        >
                          Finish
                        </Button>
                      </Box>
                    </Box>
                  </React.Fragment>
                </Grid>
              </Grid>
            </Box>
          </div>
        </>
      )}
    </>
  );
};

export default GeneralSettingScreen;
