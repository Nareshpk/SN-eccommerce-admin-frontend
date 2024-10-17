/* eslint-disable no-unused-vars */
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React from "react";

import CssBaseline from "@mui/material/CssBaseline";

import Button from "@mui/material/Button";

import Breadcrumbs from "@mui/material/Breadcrumbs";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import "./breadcrumb.css";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  ShippingSizeAllDetails,
  ShippingSizeDetails,
  saveShipDetails,
  updateShippingSize,
} from "../actions/SizeWeightGroupAction";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"; // useSelector
import {
  SIZEWEIGHTGROUP_SAVE_RESET,
  SIZEWEIGHTGROUP_UPDATE_RESET,
} from "../constants/SizeWeightGroup";
import { useEffect, useState } from "react"; //, useState
export default function SizeWeightAndGroupAccess() {
  const params = useParams();
  const AttId = params.id;

  const sizeweightgroup = useSelector((state) => state.sizeweightgroup);
  const { success: siwegroupsave } = sizeweightgroup;

  //*******************************************LIST for last saved data**********/
  const sizeweightgrouplist = useSelector((state) => state.sizeweightgrouplist);
  const { shipAddList } = sizeweightgrouplist;
  let datatypes;

  {
    shipAddList?.map((item) => {
      datatypes = item;
    });
  }
  //*******************************************AllLIST for this screen**********/
  const ShipAllList = useSelector((state) => state.ShipAllList);
  const { shipAddAllList } = ShipAllList;

  //*****************************************************************************/
  const shippingSizeUpdate = useSelector((state) => state.shippingSizeUpdate);
  const { success: updatesizeship } = shippingSizeUpdate;

  const mesurement = shipAddAllList?.find((x) => x.preId === AttId)
    ? shipAddAllList?.find((x) => x.preId === AttId)
    : undefined;
  let undefineddata;
  if (mesurement == undefined) {
    undefineddata = true;
  }
  //  else {
  //   undefineddata = false;
  // }
  console.log("undefineddata", undefineddata);
  const [Editwidth, setEditwidth] = useState(mesurement?.width);
  const [Editheight, setEditHeight] = useState(mesurement?.height);
  const [Editdepth, setEditDepth] = useState(mesurement?.depth);
  const [Editweight, setEditWeight] = useState(mesurement?.weight);

  //*****************************************************************************/
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [depth, setDepth] = useState("");
  const [weight, setWeight] = useState("");

  const [, setNext] = useState(0);
  const [Finish, setFinish] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [Previous, setPrevious] = useState(0);
  //*****************************************************************************/
  const dispatch = useDispatch();
  const { handleSubmit } = useForm();
  const navigate = useNavigate();
  // const onPreviousChange = () => {
  //   navigate("/costAndShip");
  // };

  const onPreviousChange1 = () => {
    navigate(`/costAndShip/${AttId}`);
  };
  // const onNextChange = () => {
  //   navigate("/summary");
  // };
  //*****************************************************************************/
  const generallist = useSelector((state) => state.generallist);
  const { generaldata } = generallist;

  let dataype;
  {
    generaldata?.map((item) => {
      dataype = item;
    });
  }
  // const [id, setId] = useState(dataype?._id);

  //*****************************************************************************/
  const saveShppingSizeDetails = () => {
    if (Finish === 1) {
      dispatch(
        saveShipDetails({
          preId: undefineddata == true ? dataype?._id : AttId,
          width: width,
          height: height,
          depth: depth,
          weight: weight,
        }),
      );
      window.confirm("Details Saved Successfully!!");
      navigate("/logicGrid");
      event.target.reset();
      //   setAttribute(0);
      setNext(0);
      setFinish(0);
    } else {
      dispatch(
        saveShipDetails({
          preId: undefineddata == true ? dataype?._id : AttId,
          width: width,
          height: height,
          depth: depth,
          weight: weight,
        }),
      );
      // window.confirm("Details Saved Successfully!!");
      // event.target.reset();
      {
        mesurement == undefined
          ? navigate(`/summary/${AttId}`)
          : navigate(`/summary/${1}`);
      }
      // navigate(`/summary/${1}`);
      setNext(0);
      setFinish("");
    }
  };

  const updateShppingSizeDetails = () => {
    if (Finish === 1) {
      dispatch(
        updateShippingSize({
          id: mesurement?._id,
          preId: AttId,
          width: Editwidth,
          height: Editheight,
          depth: Editdepth,
          weight: Editweight,
        }),
      );
      window.confirm("Details Updated Successfully!!");
      navigate("/logicGrid");
      event.target.reset();
      //   setAttribute(0);
      setNext(0);
      setFinish(0);
    } else {
      dispatch(
        updateShippingSize({
          id: mesurement?._id,
          preId: AttId,
          width: Editwidth,
          height: Editheight,
          depth: Editdepth,
          weight: Editweight,
        }),
      );

      // event.target.reset();
      navigate(`/summary/${AttId}`);
      setNext(0);
      setFinish("");
    }
  };

  useEffect(() => {
    dispatch(ShippingSizeDetails());
    dispatch(ShippingSizeAllDetails());
    if (siwegroupsave) {
      dispatch({ type: SIZEWEIGHTGROUP_SAVE_RESET });
    }
    if (updatesizeship) {
      dispatch({ type: SIZEWEIGHTGROUP_UPDATE_RESET });
    }
  }, [siwegroupsave, dispatch]);

  return (
    <>
      {" "}
      {mesurement != undefined && AttId != 1 ? (
        <>
          {" "}
          <Box
            onSubmit={handleSubmit(updateShppingSizeDetails)}
            component="form"
          >
            <Grid container>
              <Grid item xs={12}>
                <React.Fragment>
                  <CssBaseline />
                  <Box
                    variant="outlined"
                    sx={{
                      boxShadow: 3,
                      width: "60rem",
                      height: "30rem",
                      bgcolor: (theme) =>
                        theme.palette.mode === "dark" ? "#101010" : "#fff",
                      color: (theme) =>
                        theme.palette.mode === "dark" ? "grey.300" : "grey.800",
                      p: 1,
                      m: 1,
                      ml: 2,
                      mt: 0,
                      borderRadius: 2,
                      textAlign: "center",
                      fontSize: "0.875rem",
                      fontWeight: "00",
                    }}
                  >
                    <Box>
                      <Breadcrumbs aria-label="breadcrumb flat">
                        <div className="breadcrumb flat">
                          <Link to="/logicGrid">Carriers</Link>
                          <Link to={`/logistic/${AttId}`}>
                            General Settings
                          </Link>
                          <Link to={`/costAndShip/${AttId}`}>
                            Shipping locations and costs
                          </Link>
                          <Link to="/sizeweightgroup" className="active">
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
                        height: "20rem",
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
                        textAlign: "left",
                        fontSize: "0.875rem",
                        fontWeight: "700",
                      }}
                    >
                      <Box>
                        <Box sx={{ ml: 30, display: "flex" }}>
                          <Typography sx={{ mt: 2, fontSize: "0.875rem" }}>
                            Maximum package width (cm)
                          </Typography>
                          <Box>
                            <TextField
                              sx={{ ml: 5, mt: 1 }}
                              size="small"
                              value={Editwidth}
                              onChange={(e) => setEditwidth(e.target.value)}
                            ></TextField>
                          </Box>
                        </Box>
                        <Box sx={{ ml: 30, display: "flex" }}>
                          <Typography sx={{ mt: 2, fontSize: "0.875rem" }}>
                            Maximum package height (cm)
                          </Typography>
                          <Box>
                            <TextField
                              sx={{ ml: 4.5, mt: 1 }}
                              size="small"
                              value={Editheight}
                              onChange={(e) => setEditHeight(e.target.value)}
                            ></TextField>
                          </Box>
                        </Box>
                        <Box sx={{ ml: 30, display: "flex" }}>
                          <Typography sx={{ mt: 2, fontSize: "0.875rem" }}>
                            Maximum package depth (cm)
                          </Typography>
                          <Box>
                            <TextField
                              sx={{ ml: 5, mt: 1 }}
                              size="small"
                              value={Editdepth}
                              onChange={(e) => setEditDepth(e.target.value)}
                            ></TextField>
                          </Box>
                        </Box>
                        <Box sx={{ ml: 30, display: "flex" }}>
                          <Typography sx={{ mt: 2, fontSize: "0.875rem" }}>
                            Maximum package weight (kg)
                          </Typography>
                          <Box>
                            <TextField
                              sx={{ ml: 5, mt: 1 }}
                              size="small"
                              value={Editweight}
                              onChange={(e) => setEditWeight(e.target.value)}
                            ></TextField>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                    <Box sx={{ mt: 4, ml: 60 }}>
                      <div>
                        <Button
                          sx={{ ml: 10 }}
                          variant="outlined"
                          size="medium"
                          type="submit"
                          onClick={onPreviousChange1}
                        >
                          Previous
                        </Button>
                        <Button
                          sx={{ ml: 2 }}
                          variant="outlined"
                          size="medium"
                          // onClick={onNextChange}
                          type="submit"
                          onClick={() => setNext(2)}
                        >
                          Next
                        </Button>
                        <Button
                          sx={{ ml: 2 }}
                          variant="outlined"
                          size="medium"
                          type="submit"
                          onClick={() => setFinish(1)}
                        >
                          Finish
                        </Button>
                      </div>
                    </Box>
                  </Box>
                </React.Fragment>
              </Grid>
            </Grid>
          </Box>
        </>
      ) : (
        <>
          {undefineddata == true ? (
            <>
              {" "}
              <Box
                onSubmit={handleSubmit(saveShppingSizeDetails)}
                component="form"
              >
                <Grid container>
                  <Grid item xs={12}>
                    <React.Fragment>
                      <CssBaseline />
                      <Box
                        variant="outlined"
                        sx={{
                          boxShadow: 3,
                          width: "60rem",
                          height: "30rem",
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
                      >
                        <Box>
                          <Breadcrumbs aria-label="breadcrumb flat">
                            <div className="breadcrumb flat">
                              <Link to="/logicGrid">Carriers</Link>
                              <Link className="deactive">General Settings</Link>
                              <Link className="deactive">
                                Shipping locations and costs
                              </Link>
                              <Link to="/sizeweightgroup" className="active">
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
                            height: "20rem",
                            bgcolor: (theme) =>
                              theme.palette.mode === "dark"
                                ? "#101010"
                                : "#fff",
                            color: (theme) =>
                              theme.palette.mode === "dark"
                                ? "grey.300"
                                : "grey.800",
                            p: 1,
                            m: 1,
                            ml: 2,
                            mt: 4,
                            borderRadius: 2,
                            textAlign: "left",
                            fontSize: "0.875rem",
                            fontWeight: "700",
                          }}
                        >
                          <Box>
                            <Box sx={{ ml: 30, display: "flex" }}>
                              <Typography sx={{ mt: 2, fontSize: "0.875rem" }}>
                                Maximum package width (cm)
                              </Typography>
                              <Box>
                                <TextField
                                  sx={{ ml: 5, mt: 1 }}
                                  size="small"
                                  onChange={(e) => setWidth(e.target.value)}
                                // value={AttId == 1 ? width : datatypes?.width}
                                ></TextField>
                              </Box>
                            </Box>
                            <Box sx={{ ml: 30, display: "flex" }}>
                              <Typography sx={{ mt: 2, fontSize: "0.875rem" }}>
                                Maximum package height (cm)
                              </Typography>
                              <Box>
                                <TextField
                                  sx={{ ml: 4.5, mt: 1 }}
                                  size="small"
                                  onChange={(e) => setHeight(e.target.value)}
                                // value={
                                //   AttId == 1 ? height : datatypes?.height
                                // }
                                ></TextField>
                              </Box>
                            </Box>
                            <Box sx={{ ml: 30, display: "flex" }}>
                              <Typography sx={{ mt: 2, fontSize: "0.875rem" }}>
                                Maximum package depth (cm)
                              </Typography>
                              <Box>
                                <TextField
                                  sx={{ ml: 5, mt: 1 }}
                                  size="small"
                                  onChange={(e) => setDepth(e.target.value)}
                                // value={AttId == 1 ? depth : datatypes?.depth}
                                ></TextField>
                              </Box>
                            </Box>
                            <Box sx={{ ml: 30, display: "flex" }}>
                              <Typography sx={{ mt: 2, fontSize: "0.875rem" }}>
                                Maximum package weight (kg)
                              </Typography>
                              <Box>
                                <TextField
                                  sx={{ ml: 5, mt: 1 }}
                                  size="small"
                                  onChange={(e) => setWeight(e.target.value)}
                                // value={
                                //   AttId == 1 ? weight : datatypes?.weight
                                // }
                                ></TextField>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                        <Box sx={{ mt: 4, ml: 60 }}>
                          <div>
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
                              // onClick={onNextChange}
                              type="submit"
                              onClick={() => setNext(2)}
                            >
                              Next
                            </Button>
                            <Button
                              sx={{ ml: 2 }}
                              variant="outlined"
                              color="success"
                              size="medium"
                              type="submit"
                              onClick={() => setFinish(1)}
                            >
                              Finish
                            </Button>
                          </div>
                        </Box>
                      </Box>
                    </React.Fragment>
                  </Grid>
                </Grid>
              </Box>
            </>
          ) : (
            <>
              {AttId == 1 ? (
                <>
                  <Box
                    onSubmit={handleSubmit(saveShppingSizeDetails)}
                    component="form"
                  >
                    <Grid container>
                      <Grid item xs={12}>
                        <React.Fragment>
                          <CssBaseline />
                          <Box
                            variant="outlined"
                            sx={{
                              boxShadow: 3,
                              width: "60rem",
                              height: "30rem",
                              bgcolor: (theme) =>
                                theme.palette.mode === "dark"
                                  ? "#101010"
                                  : "#fff",
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
                          >
                            <Box>
                              <Breadcrumbs aria-label="breadcrumb flat">
                                <div className="breadcrumb flat">
                                  <Link to="/logicGrid">Carriers</Link>
                                  <Link className="deactive">
                                    General Settings
                                  </Link>
                                  <Link className="deactive">
                                    Shipping locations and costs
                                  </Link>
                                  <Link
                                    to="/sizeweightgroup"
                                    className="active"
                                  >
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
                                height: "20rem",
                                bgcolor: (theme) =>
                                  theme.palette.mode === "dark"
                                    ? "#101010"
                                    : "#fff",
                                color: (theme) =>
                                  theme.palette.mode === "dark"
                                    ? "grey.300"
                                    : "grey.800",
                                p: 1,
                                m: 1,
                                ml: 2,
                                mt: 4,
                                borderRadius: 2,
                                textAlign: "left",
                                fontSize: "0.875rem",
                                fontWeight: "700",
                              }}
                            >
                              <Box>
                                <Box sx={{ ml: 30, display: "flex" }}>
                                  <Typography
                                    sx={{ mt: 2, fontSize: "0.875rem" }}
                                  >
                                    Maximum package width (cm)
                                  </Typography>
                                  <Box>
                                    <TextField
                                      sx={{ ml: 5, mt: 1 }}
                                      size="small"
                                      onChange={(e) => setWidth(e.target.value)}
                                    // value={
                                    //   AttId == 1 ? width : datatypes?.width
                                    // }
                                    ></TextField>
                                  </Box>
                                </Box>
                                <Box sx={{ ml: 30, display: "flex" }}>
                                  <Typography
                                    sx={{ mt: 2, fontSize: "0.875rem" }}
                                  >
                                    Maximum package height (cm)
                                  </Typography>
                                  <Box>
                                    <TextField
                                      sx={{ ml: 4.5, mt: 1 }}
                                      size="small"
                                      onChange={(e) =>
                                        setHeight(e.target.value)
                                      }
                                    // value={
                                    //   AttId == 1 ? height : datatypes?.height
                                    // }
                                    ></TextField>
                                  </Box>
                                </Box>
                                <Box sx={{ ml: 30, display: "flex" }}>
                                  <Typography
                                    sx={{ mt: 2, fontSize: "0.875rem" }}
                                  >
                                    Maximum package depth (cm)
                                  </Typography>
                                  <Box>
                                    <TextField
                                      sx={{ ml: 5, mt: 1 }}
                                      size="small"
                                      onChange={(e) => setDepth(e.target.value)}
                                    // value={
                                    //   AttId == 1 ? depth : datatypes?.depth
                                    // }
                                    ></TextField>
                                  </Box>
                                </Box>
                                <Box sx={{ ml: 30, display: "flex" }}>
                                  <Typography
                                    sx={{ mt: 2, fontSize: "0.875rem" }}
                                  >
                                    Maximum package weight (kg)
                                  </Typography>
                                  <Box>
                                    <TextField
                                      sx={{ ml: 5, mt: 1 }}
                                      size="small"
                                      onChange={(e) =>
                                        setWeight(e.target.value)
                                      }
                                    // value={
                                    //   AttId == 1 ? weight : datatypes?.weight
                                    // }
                                    ></TextField>
                                  </Box>
                                </Box>
                              </Box>
                            </Box>
                            <Box sx={{ mt: 4, ml: 60 }}>
                              <div>
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
                                  // onClick={onNextChange}
                                  type="submit"
                                  onClick={() => setNext(2)}
                                >
                                  Next
                                </Button>
                                <Button
                                  sx={{ ml: 2 }}
                                  variant="outlined"
                                  color="success"
                                  size="medium"
                                  type="submit"
                                  onClick={() => setFinish(1)}
                                >
                                  Finish
                                </Button>
                              </div>
                            </Box>
                          </Box>
                        </React.Fragment>
                      </Grid>
                    </Grid>
                  </Box>
                </>
              ) : (
                <></>
              )}
            </>
          )}
        </>
      )}
    </>
  );
}
