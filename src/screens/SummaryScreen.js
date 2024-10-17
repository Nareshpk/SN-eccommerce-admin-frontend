import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import Switch from "@mui/material/Switch";
import React from "react";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { useDispatch, useSelector } from "react-redux"; //useDispatch,
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { genSettingList } from "../actions/GeneralAction";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  SUMMARY_SAVE_RESET,
  SUMMARY_UPDATE_RESET,
} from "../constants/SizeWeightGroup";
import {
  SummaryList,
  saveSummaryDetailss,
  updateSummary,
} from "../actions/summaryAction";
import { useNavigate } from "react-router-dom";
export const SummaryScreen = () => {
  const params = useParams();
  const AttId = params.id;

  const summarySave = useSelector((state) => state.summarySave);
  const { success: summarysavesucc } = summarySave;
  const summaryList = useSelector((state) => state.summaryList);
  const { summarydatum } = summaryList;

  const { handleSubmit } = useForm(); //register
  const dispatch = useDispatch();
  const generallist = useSelector((state) => state.generallist);
  const { generaldata } = generallist;
  const [checked, setChecked] = useState(true);

  const SummaryUpdate = useSelector((state) => state.SummaryUpdate);
  const { success: sumUpdate } = SummaryUpdate;

  const summaryUp = summarydatum?.find((x) => x.preId === AttId)
    ? summarydatum?.find((x) => x.preId === AttId)
    : undefined;

  let undefineddata;
  if (summaryUp == undefined) {
    undefineddata = true;
  }
  console.log("undefineddata", undefineddata);
  const generalallalllist = useSelector((state) => state.generalallalllist);
  const { generaldatum } = generalallalllist;
  const sumName = generaldatum?.find((x) => x._id === AttId);

  // const [Editname, setEditName] = useState(summaryUp?.Name);

  const [Editchecked, setEditchecked] = useState(summaryUp?.Checked);

  const handleChangeChekced1 = (event) => {
    setEditchecked(event.target.checked);
  };

  const switchHandler = (event) => {
    if (checked === true) {
      setChecked(event.target.checked);
    } else {
      setChecked(event.target.checked);
    }
  };
  const navigate = useNavigate();
  // const onPreviousChange = () => {
  //   navigate("/sizeweightgroup");
  // };
  const onPreviousChange1 = () => {
    navigate(`/sizeweightgroup/${AttId}`);
  };

  let datatypes;

  {
    generaldata?.map((item) => {
      datatypes = item;
    });
  }

  const saveSummaryDetails = () => {
    dispatch(
      saveSummaryDetailss({
        preId: undefineddata == true ? datatypes?._id : AttId,
        Checked: checked,
        Name: datatypes?.name,
      }),
    );
    window.confirm("Details Saved Successfully!!");
    navigate("/logicGrid");
    event.target.reset();
  };

  const UpdateSummaryDetails = () => {
    dispatch(
      updateSummary({
        id: summaryUp?._id,
        preId: AttId,
        Checked: Editchecked,
        Name: sumName?.name,
      }),
    );
    window.confirm("Details Updated Successfully!!");
    navigate("/logicGrid");
  };

  useEffect(() => {
    if (summarysavesucc) {
      dispatch({ type: SUMMARY_SAVE_RESET });
    }
    if (sumUpdate) {
      dispatch({ type: SUMMARY_UPDATE_RESET });
    }
    dispatch(genSettingList());
    dispatch(SummaryList());
  }, [summarysavesucc]);
  return (
    <>
      {summaryUp != undefined && AttId != 1 ? (
        <>
          {" "}
          <Box onSubmit={handleSubmit(UpdateSummaryDetails)} component="form">
            <Grid container>
              <Grid item xs={12}>
                <React.Fragment>
                  <CssBaseline />
                  <Box
                    variant="outlined"
                    sx={{
                      boxShadow: 3,
                      width: "60rem",
                      height: "45rem",
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
                          <Link to={`/sizeweightgroup/${AttId}`}>
                            Size,weight and group access
                          </Link>
                          <Link to="/summary" className="active">
                            Summary
                          </Link>
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
                      <Box
                        sx={{
                          width: 1,
                          p: 1,
                          bgcolor: (theme) =>
                            theme.palette.mode === "dark"
                              ? "#101010"
                              : "grey.100",
                          color: (theme) =>
                            theme.palette.mode === "dark"
                              ? "grey.300"
                              : "grey.800",
                          border: "1px solid",
                          borderColor: (theme) =>
                            theme.palette.mode === "dark"
                              ? "grey.800"
                              : "grey.300",
                          borderRadius: 2,
                          fontSize: "0.875rem",
                          fontWeight: "100",
                          textAlign: "left",
                        }}
                      >
                        <Box>
                          {" "}
                          Carrier Name:&nbsp;&nbsp;&nbsp;{sumName?.name}
                        </Box>
                      </Box>
                      <Box sx={{ m: 5, textAlign: "left" }}>
                        <p>
                          Shipping costs are calculated according to the price
                          and the tax rule FR Taux standard (20%) will be
                          applied.
                        </p>
                        <p>
                          This carrier can deliver orders from 1 € to 2 €. If
                          the order is out of range, the behavior is to disable
                          carrier.
                        </p>
                        <p>
                          This carrier will be proposed for those delivery
                          zones:
                        </p>
                        <Box sx={{ ml: 5, textAlign: "left", p: 2 }}>
                          <ListItem>
                            <ul style={{ listStyleType: "none" }}>
                              <li>Africa</li>
                              <li>Asia</li>
                              <li>Central America/Antilla</li>
                              <li>Europe</li>
                              <li>Europe (non-EU)</li>
                              <li>North America</li>
                            </ul>
                          </ListItem>
                        </Box>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        boxShadow: 3,
                        width: "57rem",
                        height: "5rem",
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
                        fontWeight: "100",
                        overFlow: "auto",
                      }}
                    >
                      <FormControlLabel
                        label={
                          <Typography
                            sx={{ mt: 1, m: 0, ml: -40, fontSize: "0.875rem" }}
                          >
                            {" "}
                            Enabled
                          </Typography>
                        }
                        control={
                          <Switch
                            sx={{ ml: 1 }}
                            // defaultChecked
                            checked={Editchecked}
                            onChange={handleChangeChekced1}
                          />
                        }
                        labelPlacement="start"
                      />
                    </Box>
                    <Box sx={{ mt: 4, ml: 60 }}>
                      <Button
                        sx={{ ml: 20 }}
                        variant="outlined"
                        size="medium"
                        type="submit"
                        onClick={onPreviousChange1}
                      >
                        Previous
                      </Button>

                      <Button
                        sx={{ ml: 5 }}
                        variant="outlined"
                        size="medium"
                        type="submit"
                      >
                        Finish
                      </Button>
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
              <Box onSubmit={handleSubmit(saveSummaryDetails)} component="form">
                <Grid container>
                  <Grid item xs={12}>
                    <React.Fragment>
                      <CssBaseline />
                      <Box
                        variant="outlined"
                        sx={{
                          boxShadow: 3,
                          width: "60rem",
                          height: "45rem",
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
                              <Link className="deactive">
                                Size,weight and group access
                              </Link>
                              <Link to="/summary" className="active">
                                Summary
                              </Link>
                            </div>
                          </Breadcrumbs>
                        </Box>
                        <Box
                          sx={{
                            boxShadow: 3,
                            width: "57rem",
                            height: "25rem",
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
                            textAlign: "center",
                            fontSize: "0.875rem",
                            fontWeight: "100",
                          }}
                        >
                          <Box
                            sx={{
                              width: 1,
                              p: 1,
                              bgcolor: (theme) =>
                                theme.palette.mode === "dark"
                                  ? "#101010"
                                  : "grey.100",
                              color: (theme) =>
                                theme.palette.mode === "dark"
                                  ? "grey.300"
                                  : "grey.800",
                              border: "1px solid",
                              borderColor: (theme) =>
                                theme.palette.mode === "dark"
                                  ? "grey.800"
                                  : "grey.300",
                              borderRadius: 2,
                              fontSize: "0.875rem",
                              fontWeight: "100",
                              textAlign: "left",
                            }}
                          >
                            <Box>
                              <>
                                {" "}
                                Carrier Name:&nbsp;&nbsp;&nbsp;{" "}
                                {AttId === 1 ? <></> : <>{datatypes?.name}</>}
                              </>
                            </Box>
                          </Box>
                          <Box sx={{ m: 5, textAlign: "left" }}>
                            <p>
                              Shipping costs are calculated according to the
                              price and the tax rule FR Taux standard (20%) will
                              be applied.
                            </p>
                            <p>
                              This carrier can deliver orders from 1 € to 2 €.
                              If the order is out of range, the behavior is to
                              disable carrier.
                            </p>
                            <p>
                              This carrier will be proposed for those delivery
                              zones:
                            </p>
                            <Box sx={{ ml: 5, textAlign: "left", p: 2 }}>
                              <ListItem>
                                <ul style={{ listStyleType: "none" }}>
                                  <li>Africa</li>
                                  <li>Asia</li>
                                  <li>Central America/Antilla</li>
                                  <li>Europe</li>
                                  <li>Europe (non-EU)</li>
                                  <li>North America</li>
                                </ul>
                              </ListItem>
                            </Box>
                          </Box>
                        </Box>
                        <Box
                          sx={{
                            boxShadow: 3,
                            width: "57rem",
                            height: "5rem",
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
                            fontWeight: "100",
                            overFlow: "auto",
                          }}
                        >
                          <FormControlLabel
                            label={
                              <Typography
                                sx={{
                                  mt: 1,
                                  m: 0,
                                  ml: -40,
                                  fontSize: "0.875rem",
                                }}
                              >
                                {" "}
                                Enabled
                              </Typography>
                            }
                            control={
                              <Switch
                                sx={{ ml: 1 }}
                                // defaultChecked
                                checked={checked}
                                onChange={switchHandler}
                              />
                            }
                            labelPlacement="start"
                          />
                        </Box>
                        <Box sx={{ mt: 4, ml: 60 }}>
                          {/* <Button
                        sx={{ ml: 20 }}
                        variant="outlined"
                        size="medium"
                        type="submit"
                        onClick={onPreviousChange}
                      >
                        Previous
                      </Button> */}
                          {/* <Button
                          sx={{ ml: 2 }}
                          variant="outlined"
                          size="medium"
                          // onClick={onNextChange}
                          type="submit"
                          onClick={() => setNext(2)}
                        >
                          Next
                        </Button> */}
                          <Button
                            sx={{ ml: 35 }}
                            variant="outlined"
                            size="medium"
                            color="success"
                            type="submit"
                          >
                            Finish
                          </Button>
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
                  {" "}
                  <Box
                    onSubmit={handleSubmit(saveSummaryDetails)}
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
                              height: "45rem",
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
                                  <Link className="deactive">
                                    Size,weight and group access
                                  </Link>
                                  <Link to="/summary" className="active">
                                    Summary
                                  </Link>
                                </div>
                              </Breadcrumbs>
                            </Box>
                            <Box
                              sx={{
                                boxShadow: 3,
                                width: "57rem",
                                height: "25rem",
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
                                textAlign: "center",
                                fontSize: "0.875rem",
                                fontWeight: "100",
                              }}
                            >
                              <Box
                                sx={{
                                  width: 1,
                                  p: 1,
                                  bgcolor: (theme) =>
                                    theme.palette.mode === "dark"
                                      ? "#101010"
                                      : "grey.100",
                                  color: (theme) =>
                                    theme.palette.mode === "dark"
                                      ? "grey.300"
                                      : "grey.800",
                                  border: "1px solid",
                                  borderColor: (theme) =>
                                    theme.palette.mode === "dark"
                                      ? "grey.800"
                                      : "grey.300",
                                  borderRadius: 2,
                                  fontSize: "0.875rem",
                                  fontWeight: "100",
                                  textAlign: "left",
                                }}
                              >
                                <Box>
                                  <>
                                    {" "}
                                    Carrier Name:&nbsp;&nbsp;&nbsp;{" "}
                                    {AttId === 1 ? (
                                      <></>
                                    ) : (
                                      <>{datatypes?.name}</>
                                    )}
                                  </>
                                </Box>
                              </Box>
                              <Box sx={{ m: 5, textAlign: "left" }}>
                                <p>
                                  Shipping costs are calculated according to the
                                  price and the tax rule FR Taux standard (20%)
                                  will be applied.
                                </p>
                                <p>
                                  This carrier can deliver orders from 1 € to 2
                                  €. If the order is out of range, the behavior
                                  is to disable carrier.
                                </p>
                                <p>
                                  This carrier will be proposed for those
                                  delivery zones:
                                </p>
                                <Box sx={{ ml: 5, textAlign: "left", p: 2 }}>
                                  <ListItem>
                                    <ul style={{ listStyleType: "none" }}>
                                      <li>Africa</li>
                                      <li>Asia</li>
                                      <li>Central America/Antilla</li>
                                      <li>Europe</li>
                                      <li>Europe (non-EU)</li>
                                      <li>North America</li>
                                    </ul>
                                  </ListItem>
                                </Box>
                              </Box>
                            </Box>
                            <Box
                              sx={{
                                boxShadow: 3,
                                width: "57rem",
                                height: "5rem",
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
                                fontWeight: "100",
                                overFlow: "auto",
                              }}
                            >
                              <FormControlLabel
                                label={
                                  <Typography
                                    sx={{
                                      mt: 1,
                                      m: 0,
                                      ml: -40,
                                      fontSize: "0.875rem",
                                    }}
                                  >
                                    {" "}
                                    Enabled
                                  </Typography>
                                }
                                control={
                                  <Switch
                                    sx={{ ml: 1 }}
                                    // defaultChecked
                                    checked={checked}
                                    onChange={switchHandler}
                                  />
                                }
                                labelPlacement="start"
                              />
                            </Box>
                            <Box sx={{ mt: 4, ml: 60 }}>
                              {/* <Button
                        sx={{ ml: 20 }}
                        variant="outlined"
                        size="medium"
                        type="submit"
                        onClick={onPreviousChange}
                      >
                        Previous
                      </Button> */}
                              {/* <Button
                          sx={{ ml: 2 }}
                          variant="outlined"
                          size="medium"
                          // onClick={onNextChange}
                          type="submit"
                          onClick={() => setNext(2)}
                        >
                          Next
                        </Button> */}
                              <Button
                                sx={{ ml: 35 }}
                                variant="outlined"
                                size="medium"
                                color="success"
                                type="submit"
                              >
                                Finish
                              </Button>
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
};

export default SummaryScreen;
