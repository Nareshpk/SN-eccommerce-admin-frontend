import { Tab, Tabs } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { DataGrid } from "@mui/x-data-grid";
// import { DataGridPro } from '@mui/x-data-grid-pro';
import { useEffect, useState } from "react";
// import Card from "@mui/material/Card";
import SearchIcon from "@mui/icons-material/Search";
import Chip from "@mui/material/Chip";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { event } from "jquery";

import { useDispatch, useSelector } from "react-redux";
import {
  AttributeMasterListDetails,
  AttributeValueListDetails,
  deleteAttribute,
  deleteAttributevalue,
  deletefeature,
  deletefeaturevalue,
  deleteMultipleattId,
  deleteMultipleattvalue,
  deleteMultiplef,
  deleteMultiplefvalue,
  FeaturesMasterListDetails,
  FeaturesValueListDetails,
  updateAttactive,
  updateAttEnable,
  updateAttvalueEnable,
  updateFeaturactive,
  updatefeatureEnable,
  updateFeatureValueactive,
  updateFvalueEnable,
  updateValueactive,
} from "../actions/AttributeActions";
// import { useDemoData } from '@mui/x-data-grid-generator';
import { makeStyles, Switch } from "@material-ui/core";
import { deepPurple, red } from "@material-ui/core/colors";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SearchOffIcon from "@mui/icons-material/SearchOff";

import Checkbox from "@mui/material/Checkbox";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import FormControlLabel from "@mui/material/FormControlLabel";
// import Menu from "@mui/material/Menu";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link, useNavigate } from "react-router-dom";
import {
  ATTRIBUTE_ACTIVE_UPDATE_RESET,
  ATTRIBUTE_DELETE_RESET,
  ATTRIBUTE_ENABLE_UPDATE_RESET,
  ATTRIBUTE_MULTIPLE_DELETE_RESET,
  ATTRIBUTE_UPDATE_RESET,
  ATTRIBUTE_VALUE_ACTIVE_UPDATE_RESET,
  ATTRIBUTE_VALUE_DELETE_RESET,
  ATTRIBUTE_VALUE_ENABLE_UPDATE_RESET,
  ATTRIBUTE_VALUE_MULTIPLE_DELETE_RESET,
  ATTRIBUTE_VALUE_UPDATE_RESET,
  FEATURES_ACTIVE_UPDATE_RESET,
  FEATURES_DELETE_RESET,
  FEATURES_ENABLE_UPDATE_RESET,
  FEATURES_MULTIPLE_DELETE_RESET,
  FEATURES_UPDATE_RESET,
  FEATURES_VALUE_ACTIVE_UPDATE_RESET,
  FEATURES_VALUE_DELETE_RESET,
  FEATURES_VALUE_ENABLE_UPDATE_RESET,
  FEATURES_VALUE_MULTIPLE_DELETE_RESET,
  FEATURES_VALUE_UPDATE_RESET,
} from "../constants/AttributesConstants";

const useStyles = makeStyles({
  switch: {
    "& .Mui-checked": {
      color: "#00CC00",
      // transform: "translateX(25px) !important"
    },
    "& .MuiSwitch-track": {
      backgroundColor: "#00CC00 !important",
    },
  },
});

function AttributesScreen() {
  const classes = useStyles();

  const dispatch = useDispatch();
  const [tabIndex, setTabIndex] = useState(0);
  const [Attribute, setAttribute] = useState(0);

  const [feautureview, setFeatureView] = useState();

  // ************************Attribut Edit Section******************************************

  // *****************************Feature Edit Section*******************************************

  // const [backSpace, setBackSpace] = useState("");

  // *****************************Feature Edit Section End*******************************************
  const handleTabChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
    setAttribute(0);
    setFeatureView(0);

    setAttribute(0);
  };
  const attributeMasterList = useSelector((state) => state.attributeMasterList);
  const { attributeMasterdetails } = attributeMasterList;

  const AttributeValueList = useSelector((state) => state.AttributeValueList);
  const { attributeValuedetails } = AttributeValueList;

  const FeaturesList = useSelector((state) => state.FeaturesList);
  const { Featuresdetails } = FeaturesList;
  // console.log("FeaturesList======>", FeaturesList)

  const FeaturesValueList = useSelector((state) => state.FeaturesValueList);
  const { Featuresvaluedetails } = FeaturesValueList;

  const attributeUpdate = useSelector((state) => state.attributeUpdate);
  const { success: successUpdate } = attributeUpdate;

  const attributeDelete = useSelector((state) => state.attributeDelete);
  const { success: successDelete } = attributeDelete;

  const attributeValueUpdate = useSelector(
    (state) => state.attributeValueUpdate,
  );
  const { success: successvalueUpdate } = attributeValueUpdate;

  const attributeValueDelete = useSelector(
    (state) => state.attributeValueDelete,
  );
  const { success: successvalueDelete } = attributeValueDelete;

  // *****************************Feature Edit Section*******************************************
  const feautureUpdate = useSelector((state) => state.feautureUpdate);
  const { success: successfeautureUpdate } = feautureUpdate;

  const featureDelete = useSelector((state) => state.featureDelete);
  const { success: successfeautureDelete } = featureDelete;

  const feautureValueUpdate = useSelector((state) => state.feautureValueUpdate);
  const { success: successfeauturevalueUpdate } = feautureValueUpdate;

  const featureValueDelete = useSelector((state) => state.featureValueDelete);
  const { success: successfeauturevalueDelete } = featureValueDelete;

  const attributeActive = useSelector((state) => state.attributeActive);
  const { success: successattActive } = attributeActive;

  const attvalueActive = useSelector((state) => state.attvalueActive);
  const { success: successvalueActive } = attvalueActive;

  const featureActive = useSelector((state) => state.featureActive);
  const { success: successFActive } = featureActive;

  const featurevalueActive = useSelector((state) => state.featurevalueActive);
  const { success: successFvaleActive } = featurevalueActive;

  const AttEnableUpdate = useSelector((state) => state.AttEnableUpdate);
  const { success: successAttEnableUpdate } = AttEnableUpdate;

  const AttValueEnable = useSelector((state) => state.AttValueEnable);
  const { success: successAttValueEnable } = AttValueEnable;

  const featureEnable = useSelector((state) => state.featureEnable);
  const { success: successfeatureEnable } = featureEnable;

  const featurevalueEnable = useSelector((state) => state.featurevalueEnable);
  const { success: featurevaluesuccess } = featurevalueEnable;

  const Attributemultiple = useSelector((state) => state.Attributemultiple);
  const { success: successAttributemultiple } = Attributemultiple;
  // console.log("successAttributemultiple=======>", successAttributemultiple)

  const AttValueDelete = useSelector((state) => state.AttValueDelete);
  const { success: successAttValueDelete } = AttValueDelete;

  const FeaturemutiDelete = useSelector((state) => state.FeaturemutiDelete);
  const { success: FeaturemutiDeletesuccess } = FeaturemutiDelete;

  const FvalueDelete = useSelector((state) => state.FvalueDelete);
  const { success: FvalueDeletesuccess } = FvalueDelete;

  // *****************************Attribute Create Section*******************************************
  // const [anchorEl2, setAnchorEl2] = useState(null);
  // const handleClosechcke = () => {
  //   setAnchorEl2(null);
  // };

  // *******************************Attribute**************************************

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setCheckeddelete(false);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [selectionModel, setSelectionModel] = useState([]);
  const [checkedcheck, setChecked] = useState(false);
  const [dchecked, setdisableChecked] = useState(false);
  const [dsablechecked, setdiChecked] = useState("");
  const handleChange = (event) => {
    setChecked(event.target.checked);
    setdisableChecked(false);
  };

  const handledisableChange = (event) => {
    setdisableChecked(event.target.checked);
    setChecked(false);
    if (dchecked === dchecked) {
      setdiChecked(false);
    }
  };

  const handleDisClose = () => {
    setOpen(false);
  };

  const handleClosecheck = () => {
    setOpen(false);
    if (checkedcheck === true) {
      dispatch(
        updateAttactive({
          checkboxId: selectionModel,
          checkedshow: checkedcheck,
        }),
      );
      window.confirm("Active Successfully!!");
      setAttribute(0);
    } else {
      dispatch(
        updateAttactive({
          checkboxId: selectionModel,
          checkedhide: dsablechecked,
        }),
      );
      window.confirm("De-Active Successfully!!");
      setAttribute(0);
    }
  };
  // *****************************Attribute Value*****************************

  // ************************************************
  // *******************************Futerue**************************************

  const [Fopen, setFOpen] = useState(false);

  const handleClickFOpen = () => {
    setCheckeddelete3(false);
    setFOpen(true);
  };

  const handleFClose = () => {
    setOpen(false);
  };

  const [FselectionModel, setFSelectionModel] = useState([]);
  const [Fcheckedcheck, setFChecked] = useState(false);
  const [Fdchecked, setFdisableChecked] = useState(false);
  const [Fdsablechecked, setFdiChecked] = useState("");
  const handleFChange = (event) => {
    setFChecked(event.target.checked);
    setFdisableChecked(false);
  };

  const handleFdisableChange = (event) => {
    setFdisableChecked(event.target.checked);
    setFChecked(false);
    if (Fdchecked === Fdchecked) {
      setFdiChecked(false);
    }
  };

  const handleFDisClose = () => {
    setFOpen(false);
  };

  const handleFClosecheck = () => {
    setFOpen(false);
    if (Fcheckedcheck === true) {
      dispatch(
        updateFeaturactive({
          checkboxId: FselectionModel,
          checkedshow: Fcheckedcheck,
        }),
      );
      window.confirm("Active Successfully!!");
      setAttribute(0);
    } else {
      dispatch(
        updateFeaturactive({
          checkboxId: FselectionModel,
          checkedhide: Fdsablechecked,
        }),
      );
      window.confirm("De-Active Successfully!!");
      setAttribute(0);
    }
  };

  // *******************************Futeruer Value**************************************

  const [Fvlaueopen, setFvlaueOpen] = useState(false);

  const handleClickFvlaueOpen = () => {
    setFvlaueOpen(true);
  };

  const handleFvlaueClose = () => {
    setFvlaueOpen(false);
  };

  const [FvlaueselectionModel, setFvlaueSelectionModel] = useState([]);
  const [Fvlauecheckedcheck, setFvlaueChecked] = useState(false);

  const [Fvlauedchecked, setFvlauedisableChecked] = useState(false);

  const [Fvlauedsablechecked, setFvlauediChecked] = useState("");
  const handleFvlaueChange = (event) => {
    setFvlaueChecked(event.target.checked);
    setFvlauedisableChecked(false);
  };

  const handleFvlauedisableChange = (event) => {
    setFvlauedisableChecked(event.target.checked);
    setFvlaueChecked(false);
    if (Fvlauedchecked === Fvlauedchecked) {
      setFvlauediChecked(false);
    }
  };

  const handleFvlaueDisClose = () => {
    setFvlaueOpen(false);
  };

  const handleFvlaueClosecheck = () => {
    setFvlaueOpen(false);
    if (Fvlauecheckedcheck == true) {
      dispatch(
        updateFeatureValueactive({
          checkboxId: FvlaueselectionModel,
          checkedshow: Fvlauecheckedcheck,
        }),
      );
      window.confirm("Active Successfully!!");
      setAttribute(0);
    } else {
      dispatch(
        updateFeatureValueactive({
          checkboxId: FvlaueselectionModel,
          checkedhide: Fvlauedsablechecked,
        }),
      );
      window.confirm("De-Active Successfully!!");
      setAttribute(0);
    }
  };
  // ****************************************************************************

  //  const createAnotherValue = (e) =>{
  //   dispatch(
  //     AttributeCategory({
  //       name: e.name,
  //       attributestype: attributestype,
  //     })
  //   );
  //   window.confirm("Attribute Saved Successfully!!");
  //   event.target.reset();
  //   setAttributestype("");
  //  }

  // *****************************Feature Create Section*******************************************
  const [valueopen, setvalueOpen] = useState(false);
  const [valeselectionModel, setvalueSelectionModel] = useState([]);
  const [valuecheckedcheck, setvalueChecked] = useState(false);
  const [valuedchecked, setvaluedisableChecked] = useState(false);
  const [valuedsablechecked, setvaluediChecked] = useState("");
  const handleChangevalue = (event) => {
    setvalueChecked(event.target.checked);
    setvaluedisableChecked(false);
  };

  const handlevaluedisableChange = (event) => {
    setvaluedisableChecked(event.target.checked);
    setvalueChecked(false);
    if (valuedchecked === valuedchecked) {
      setvaluediChecked(false);
    }
  };

  const handlevalueDisClose = () => {
    setvalueOpen(false);
  };

  const handlevlaueClosecheck = () => {
    setvalueOpen(false);
    if (valuecheckedcheck === true) {
      dispatch(
        updateValueactive({
          checkboxId: valeselectionModel,
          checkedshow: valuecheckedcheck,
        }),
      );
      window.confirm("Active Successfully!!");
    } else {
      dispatch(
        updateValueactive({
          checkboxId: valeselectionModel,
          checkedhide: valuedsablechecked,
        }),
      );
      window.confirm("De-Active Successfully!!");
    }
  };

  const handleClickvalueOpen = () => {
    setvalueOpen(true);
  };

  const handlevalueClose = () => {
    setvalueOpen(false);
  };

  const editAttributeValueHandler = (valueId) => {
    navigate("/attributvalue/" + valueId);
  };

  const deletevalueHandler = (attributedvalue) => {
    if (window.confirm("Are you sure to delete?")) {
      dispatch(deleteAttributevalue(attributedvalue.row.id));
    }
  };
  // *****************************Attr value Multidelete section****************************************
  const [deleteopen1, setdeleteopen1] = useState(false);
  // console.log("setdeleteopen1=========", setdeleteopen1)
  const [checkeddelete1, setCheckeddelete1] = useState(false);
  // console.log("checkeddelete1========>", checkeddelete1)

  const handleClickdelete1 = () => {
    setdeleteopen1(true);
    setCheckeddelete1(false);
  };
  const handleDeletrClose1 = () => {
    setdeleteopen1(false);
    setCheckeddelete1(false);
  };

  const handleChangedelete1 = (event) => {
    setCheckeddelete1(event.target.checked);
  };

  const handleClosecheckdelet1 = () => {
    setdeleteopen1(false);
    if (checkeddelete1 == true) {
      dispatch(deleteMultipleattvalue({ id: valeselectionModel }));
    }
  };

  const handleChangeavalue = (e, params) => {
    if (e.target.checked === true) {
      dispatch(
        updateAttvalueEnable({
          id: params,
          active: e.target.checked,
        }),
      );
    } else {
      dispatch(
        updateAttvalueEnable({
          id: params,
          deactive: e.target.checked,
        }),
      );
    }
  };

  // **********************************Attribute Edit Section *****************

  // *****************************Feature Edit Section*******************************************

  // *****************************Feature Edit Section End*******************************************

  // *****************************Attribute Update Section*******************************************

  // *****************************Attribute delete Section*******************************************
  const [viewitem, setViewitem] = useState("");
  const deleteHandler = (attributed) => {
    if (window.confirm("Are you sure to delete?")) {
      dispatch(deleteAttribute(attributed.row._id));
    }
  };

  // *****************************Feature delete Section*******************************************
  const deleteFeatureHandler = (featureId) => {
    if (window.confirm("Are you sure to delete?")) {
      dispatch(deletefeature(featureId.row._id));
    }
  };

  const deleteFeaturevalueHandler = (featureIdvalue) => {
    if (window.confirm("Are you sure to delete?")) {
      dispatch(deletefeaturevalue(featureIdvalue.row.id));
    }
  };
  // *****************************Feature delete Section End*******************************************

  // ***********************Multy Delete Sectiion*********************************************
  // const [deleteopen, setdeleteopen] = useState(false);
  const [checkeddelete, setCheckeddelete] = useState(false);

  // const handleClickdelete = () => {
  //   setdeleteopen(true);
  //   setCheckeddelete(false);
  // };
  // const handleDeletrClose = () => {
  //   setdeleteopen(false);
  //   setCheckeddelete(false);
  // };

  const handleChangedelete = (event) => {
    setCheckeddelete(event.target.checked);
  };

  const handleClosecheckdelet = () => {
    setOpen(false);
    if (checkeddelete == true) {
      dispatch(deleteMultipleattId({ id: selectionModel }));
    }
  };

  // *******************************************************************
  const [deleteopen3, setdeleteopen3] = useState(false);
  const [checkeddelete3, setCheckeddelete3] = useState(false);

  // const handleClickdelete3 = () => {
  //   setdeleteopen3(true);
  //   setCheckeddelete3(false);
  // };
  const handleDeletrClose3 = () => {
    setdeleteopen3(false);
    setCheckeddelete3(false);
  };

  const handleChangedelete3 = (event) => {
    setCheckeddelete3(event.target.checked);
  };

  const handleClosecheckdelet3 = () => {
    setFOpen(false);

    if (checkeddelete3 == true) {
      dispatch(deleteMultiplef({ id: FselectionModel }));
    }
  };
  // *********************************
  const [deleteopen4, setdeleteopen4] = useState(false);
  const [checkeddelete4, setCheckeddelete4] = useState(false);

  const handleClickdelete4 = () => {
    setdeleteopen4(true);
    setCheckeddelete4(false);
  };
  const handleDeletrClose4 = () => {
    setdeleteopen4(false);
    setCheckeddelete4(false);
  };

  const handleChangedelete4 = (event) => {
    setCheckeddelete4(event.target.checked);
  };

  const handleClosecheckdelet4 = () => {
    setdeleteopen4(false);
    if (checkeddelete4 == true) {
      dispatch(deleteMultiplefvalue({ id: FvlaueselectionModel }));
    }
  };

  function refreshPage() {
    window.location.reload(false);
  }

  useEffect(() => {
    dispatch(FeaturesValueListDetails());
    dispatch(FeaturesMasterListDetails());
    dispatch(AttributeMasterListDetails());
    dispatch(AttributeValueListDetails());

    if (successAttributemultiple) {
      dispatch({ type: ATTRIBUTE_MULTIPLE_DELETE_RESET });
    }

    if (successAttValueDelete) {
      dispatch({ type: ATTRIBUTE_VALUE_MULTIPLE_DELETE_RESET });
    }

    if (FeaturemutiDeletesuccess) {
      dispatch({ type: FEATURES_MULTIPLE_DELETE_RESET });
    }

    if (FvalueDeletesuccess) {
      dispatch({ type: FEATURES_VALUE_MULTIPLE_DELETE_RESET });
    }

    if (successAttEnableUpdate) {
      dispatch({ type: ATTRIBUTE_ENABLE_UPDATE_RESET });
    }
    if (successAttValueEnable) {
      dispatch({ type: ATTRIBUTE_VALUE_ENABLE_UPDATE_RESET });
    }
    if (successfeatureEnable) {
      dispatch({ type: FEATURES_ENABLE_UPDATE_RESET });
    }
    if (featurevaluesuccess) {
      dispatch({ type: FEATURES_VALUE_ENABLE_UPDATE_RESET });
    }
    if (successattActive) {
      dispatch({ type: ATTRIBUTE_ACTIVE_UPDATE_RESET });
    }
    if (successvalueActive) {
      dispatch({ type: ATTRIBUTE_VALUE_ACTIVE_UPDATE_RESET });
    }
    if (successFActive) {
      dispatch({ type: FEATURES_ACTIVE_UPDATE_RESET });
    }
    if (successFvaleActive) {
      dispatch({ type: FEATURES_VALUE_ACTIVE_UPDATE_RESET });
    }
    if (successUpdate) {
      dispatch({ type: ATTRIBUTE_UPDATE_RESET });
    }
    if (successDelete) {
      dispatch({ type: ATTRIBUTE_DELETE_RESET });
    }
    if (successvalueUpdate) {
      dispatch({ type: ATTRIBUTE_VALUE_UPDATE_RESET });
    }
    if (successvalueDelete) {
      dispatch({ type: ATTRIBUTE_VALUE_DELETE_RESET });
    }

    if (successfeautureUpdate) {
      dispatch({ type: FEATURES_UPDATE_RESET });
    }
    if (successfeautureDelete) {
      dispatch({ type: FEATURES_DELETE_RESET });
    }
    if (successfeauturevalueUpdate) {
      dispatch({ type: FEATURES_VALUE_UPDATE_RESET });
    }
    if (successfeauturevalueDelete) {
      dispatch({ type: FEATURES_VALUE_DELETE_RESET });
    }
  }, [
    dispatch,
    successUpdate,
    successDelete,
    successvalueUpdate,
    successfeautureUpdate,
    successfeautureDelete,
    successfeauturevalueUpdate,
    successattActive,
    successvalueActive,
    successFActive,
    successFvaleActive,
    featurevaluesuccess,
    successfeatureEnable,
    successAttValueEnable,
    successAttEnableUpdate,
    successAttributemultiple,
    successAttValueDelete,
    FeaturemutiDeletesuccess,
    FvalueDeletesuccess,
  ]);
  const navigate = useNavigate();

  const theme = createTheme();

  // ******************Enabe Activate*****************************
  const handleChangedata = (e, params) => {
    if (e.target.checked === true) {
      dispatch(
        updateAttEnable({
          id: params,
          active: e.target.checked,
        }),
      );
    } else {
      dispatch(
        updateAttEnable({
          id: params,
          deactive: e.target.checked,
        }),
      );
    }
  };

  const handleChangefeature = (e, params) => {
    if (e.target.checked === true) {
      dispatch(
        updatefeatureEnable({
          id: params,
          active: e.target.checked,
        }),
      );
    } else {
      dispatch(
        updatefeatureEnable({
          id: params,
          deactive: e.target.checked,
        }),
      );
    }
  };

  const handleChangeFvalue = (e, params) => {
    if (e.target.checked === true) {
      dispatch(
        updateFvalueEnable({
          id: params,
          active: e.target.checked,
        }),
      );
    } else {
      dispatch(
        updateFvalueEnable({
          id: params,
          deactive: e.target.checked,
        }),
      );
    }
  };

  // *****************buttonClick*************************
  const Attchange = () => {
    navigate("/attributesForm");
  };
  const AttvlaueChange = () => {
    navigate("/attributvalue");
  };

  const FeaturesChange = () => {
    navigate("/feature");
  };
  const featurevalueChaneg = () => {
    navigate("/featurevalue");
  };

  const editAttributeHandler = (attributeId) => {
    navigate(`/attributesForm/${attributeId}`);
  };

  const editFeatureHandler = (FeatureId) => {
    navigate("/feature/" + FeatureId._id);
  };

  const editFeatureValueHandler = (FeaturevalueId) => {
    navigate("/featurevalue/" + FeaturevalueId.id);
  };

  const editHandler = (id) => {
    setViewitem(id);
  };
  // **************************************

  function getsubCategoryId(attributeMasterdetails) {
    const attributeItem = attributeValuedetails
      ?.filter((item) => {
        return item.attributeVlaue === attributeMasterdetails.row._id;
      })
      .map((item) => {
        <Box key={item}></Box>;
        return {
          id: item._id,
          value: item.value,
          attributeVlaue: item.attributeVlaue,
          filename: item.filename,
        };
      });
    if (attributeItem !== undefined) {
      return attributeItem?.length;
    }
  }

  const columns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 1,
      headerClassName: "super-app-theme--header",
      renderCell: (index) => index.api.getRowIndex(index.row._id) + 1,
    },
    {
      field: "attributename",
      headerName: "Attribute Name",
      flex: 1,
      headerClassName: "super-app-theme--header",
      renderCell: (params) => {
        return (
          <Typography sx={{ fontSize: 13 }}>
            {params.row.attributename}
          </Typography>
        );
      },
    },
    {
      field: "categoryId",
      headerName: "Values",
      flex: 1,
      headerClassName: "super-app-theme--header",
      valueGetter: getsubCategoryId,
    },
    {
      field: "attributetype",
      headerName: "Attribute Type",
      flex: 1,
      headerClassName: "super-app-theme--header",
      renderCell: (params) => {
        return (
          <Typography sx={{ fontSize: 13 }}>
            {params.row.attributetype}
          </Typography>
        );
      },
    },
    {
      field: "attributecheck",
      headerName: "Status",
      flex: 1,
      headerClassName: "super-app-theme--header",
      renderCell: (params) => {
        if (params.row.attributecheck === true) {
          return (
            <FormControlLabel
              control={
                <Switch
                  size="small"
                  className={classes.switch}
                  checked
                  onClick={(e) => handleChangedata(e, params.row._id)}
                />
              }
            />
          );
        } else {
          return (
            <FormControlLabel
              control={
                <Switch
                  size="small"
                  onClick={(e) => handleChangedata(e, params.row._id)}
                />
              }
            />
          );
        }
      },
    },
    {
      // field: "Edit",
      headerName: "View",
      flex: 1,
      headerClassName: "super-app-theme--header",
      renderCell: (params) => {
        const attributeList = attributeValuedetails
          ?.filter((item) => {
            return item.attributeVlaue === params.row._id;
          })
          .map((item) => {
            <Box key={item._id}></Box>;
            return {
              id: item._id,
              value: item.value,
              attributeVlaue: item.attributeVlaue,
              // filename: item.filename,
            };
          });
        if (attributeList?.length > 0) {
          return (
            <ThemeProvider theme={theme}>
              <Chip
                onClick={() => editHandler(params.row)}
                icon={<SearchIcon />}
                label="View"
              />
            </ThemeProvider>
          );
        } else {
          return (
            <ThemeProvider theme={theme}>
              <Chip icon={<SearchOffIcon />} label="View" />
            </ThemeProvider>
          );
        }
      },
    },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      headerClassName: "super-app-theme--header",
      renderCell: (params) => (
        <>
          <EditIcon
            onClick={() => editAttributeHandler(params.id)}
            style={{
              color: deepPurple[500],
              fontSize: 15,
              margin: 20,
              cursor: "pointer",
            }}
          />

          <DeleteIcon
            onClick={() => deleteHandler(params)}
            style={{ color: red[500], fontSize: 15, cursor: "pointer" }}
          />
        </>
      ),
    },
  ];

  const assemList = attributeValuedetails
    ?.filter((item) => {
      return item.attributeVlaue === viewitem?._id;
    })
    .map((item) => {
      return {
        id: item._id,
        value: item.value,
        color: item.color,
        attributename: item.attributename,
        attributeVlaue: item.attributeVlaue,
        filename: item.filename,
        attvaluecheck: item.attvaluecheck,
      };
    });

  const valuecolumn = [
    {
      field: "id",
      headerName: "ID",
      flex: 1,
      headerClassName: "super-app-theme--header",
      renderCell: (index) => index.api.getRowIndex(index.row.id) + 1,
    },
    {
      field: "attributename",
      headerName: "Attribute Name",
      flex: 1,
      headerClassName: "super-app-theme--header",
      // valueGetter:getValue,
    },
    {
      field: "value",
      headerName: "Values",
      flex: 1,
      headerClassName: "super-app-theme--header",
      // valueGetter:getValue,
    },
    {
      field: "color",
      headerName: "Color",
      flex: 1,
      headerClassName: "super-app-theme--header",
      // valueGetter: getsubCategoryId,
    },

    {
      field: "",
      headerName: "Status",
      flex: 1,
      headerClassName: "super-app-theme--header",
      renderCell: (params) => {
        if (params.row.attvaluecheck === true) {
          return (
            <FormControlLabel
              control={
                <Switch
                  className={classes.switch}
                  checked
                  onClick={(e) => handleChangeavalue(e, params.row.id)}
                />
              }
            />
          );
        } else {
          return (
            <FormControlLabel
              control={
                <Switch onClick={(e) => handleChangeavalue(e, params.row.id)} />
              }
            />
          );
        }
      },
    },
    {
      field: "attvaluecheck",
      headerName: "Status",
      flex: 1,
      headerClassName: "super-app-theme--header",
      // renderCell: (params) => {
      //   if (params.row.attvaluecheck == true) {
      //     return <Switch color="primary" checked />;
      //   } else {
      //     return <Switch />;
      //   }
      // },
    },
    {
      field: "vactions",
      headerName: "ACTIONS",
      flex: 1,
      headerClassName: "super-app-theme--header",
      renderCell: (params) => (
        <>
          <EditIcon
            onClick={() => editAttributeValueHandler(params.row.id)}
            style={{
              color: deepPurple[500],
              fontSize: 15,
              margin: 20,
              cursor: "pointer",
            }}
          />

          <DeleteIcon
            onClick={() => deletevalueHandler(params)}
            style={{ color: red[500], fontSize: 15, cursor: "pointer" }}
          />
        </>
      ),
    },
  ];

  function getFeatureValue(Featuresdetails) {
    const FList = Featuresvaluedetails?.filter((item) => {
      return item.featuretype === Featuresdetails.row._id;
    }).map((item) => {
      <Box key={item}></Box>;
      return {
        id: item._id,
        featurevalue: item.featurevalue,
        featuretype: item.featuretype,
      };
    });

    return FList?.length;
  }

  const featurecolumn = [
    {
      field: "_id",
      headerName: "ID",
      flex: 1,
      headerClassName: "super-app-theme--header",
      renderCell: (index) => index.api.getRowIndex(index.row._id) + 1,
    },
    {
      field: "featurename",
      headerName: "Feature Name",
      flex: 1,
      headerClassName: "super-app-theme--header",
      renderCell: (params) => {
        return (
          <Typography sx={{ fontSize: 13 }}>
            {params.row.featurename}
          </Typography>
        );
      },
    },
    {
      field: "value",
      headerName: "Value",
      flex: 1,
      headerClassName: "super-app-theme--header",
      valueGetter: getFeatureValue,
    },
    {
      field: "attributecheck",
      headerName: "Status",
      flex: 1,
      headerClassName: "super-app-theme--header",
      renderCell: (params) => {
        if (params.row.featurecheck === true) {
          return (
            <FormControlLabel
              control={
                <Switch
                  size="small"
                  className={classes.switch}
                  checked
                  onClick={(e) => handleChangefeature(e, params.row._id)}
                />
              }
            />
          );
        } else {
          return (
            <FormControlLabel
              control={
                <Switch
                  size="small"
                  onClick={(e) => handleChangefeature(e, params.row._id)}
                />
              }
            />
          );
        }
      },
    },
    {
      // field: "",
      headerName: "View",
      flex: 1,
      headerClassName: "super-app-theme--header",
      renderCell: (params) => {
        const FList = Featuresvaluedetails?.filter((item) => {
          return item.featuretype === params.row._id;
        }).map((item) => {
          <Box key={item}></Box>;
          return {
            id: item._id,
            featurevalue: item.featurevalue,
            featuretype: item.featuretype,
          };
        });
        if (FList?.length === 0) {
          return (
            <ThemeProvider theme={theme}>
              <Chip icon={<SearchOffIcon />} label="View" />
            </ThemeProvider>
          );
        } else {
          return (
            <ThemeProvider theme={theme}>
              <Chip
                onClick={() => setFeatureView(params)}
                icon={<SearchIcon />}
                label="View"
              />
            </ThemeProvider>
          );
        }
      },
    },

    {
      field: "Factions",
      headerName: "ACTIONS",
      flex: 1,
      headerClassName: "super-app-theme--header",
      renderCell: (params) => (
        <>
          <EditIcon
            onClick={() => editFeatureHandler(params.row)}
            style={{
              color: deepPurple[500],
              fontSize: 15,
              margin: 20,
              cursor: "pointer",
            }}
          />

          <DeleteIcon
            onClick={() => deleteFeatureHandler(params)}
            style={{ color: red[500], fontSize: 15, cursor: "pointer" }}
          />
        </>
      ),
    },
  ];

  function getValue(products) {
    return `${products.row.featuretype
      ? Featuresdetails?.find((x) => x._id === products.row.featuretype)
        ?.featurename
      : "arraa"
      }`;
  }

  const featurevaluecolumn = [
    {
      field: "id",
      headerName: "ID",
      flex: 1,
      headerClassName: "super-app-theme--header",
      renderCell: (index) => index.api.getRowIndex(index.row.id) + 1,
    },
    {
      field: "featurevalue",
      headerName: "Values",
      flex: 1,
      headerClassName: "super-app-theme--header",
      // valueGetter:getValue,
    },
    {
      field: "",
      headerName: "Feature Type",
      flex: 1,
      headerClassName: "super-app-theme--header",
      valueGetter: getValue,
    },
    {
      field: "attributecheck",
      headerName: "Status",
      flex: 1,
      headerClassName: "super-app-theme--header",
      renderCell: (params) => {
        if (params.row.featurevaluecheck === true) {
          return (
            <FormControlLabel
              control={
                <Switch
                  className={classes.switch}
                  checked
                  onClick={(e) => handleChangeFvalue(e, params.row.id)}
                />
              }
            />
          );
        } else {
          return (
            <FormControlLabel
              control={
                <Switch onClick={(e) => handleChangeFvalue(e, params.row.id)} />
              }
            />
          );
        }
      },
    },
    {
      field: "Fvactions",
      headerName: "ACTIONS",
      flex: 1,
      headerClassName: "super-app-theme--header",
      renderCell: (params) => (
        <>
          <EditIcon
            onClick={() => editFeatureValueHandler(params.row)}
            style={{
              color: deepPurple[500],
              fontSize: 15,
              margin: 20,
              cursor: "pointer",
            }}
          />

          <DeleteIcon
            onClick={() => deleteFeaturevalueHandler(params)}
            style={{ color: red[500], fontSize: 15, cursor: "pointer" }}
          />
        </>
      ),
    },
  ];

  const FeautureList = Featuresvaluedetails?.filter((item) => {
    return item.featuretype === feautureview?.id;
  }).map((item) => {
    return {
      id: item._id,
      featurevalue: item.featurevalue,
      featuretype: item.featuretype,
      featurevaluecheck: item.featurevaluecheck,
    };
  });

  return (
    <Box>
      {tabIndex === 0 && (
        <>
          {viewitem._id ? (
            <>
              <Typography variant="h5">{viewitem.attributename}</Typography>
              <Box sx={{ display: "flex", flexDerection: "row", mt: 5 }}>
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
                    onClick={refreshPage}
                    to="/attributes"
                    style={{
                      color: "rgba(0, 0, 0, 0.6)",
                      fontSize: "15px",
                    }}
                  >
                    <Typography>Attributes</Typography>
                  </Link>
                  <Typography sx={{ fontSize: "15px" }}>
                    {viewitem.attributename}
                  </Typography>
                </Breadcrumbs>

                <Box sx={{ ml: "auto" }}>
                  <>
                    <Button
                      sx={{
                        mr: 3,
                        borderRadius: "20px",
                        backgroundColor: "#0099CC",
                      }}
                      variant="contained"
                      type="Click"
                      onClick={AttvlaueChange}
                    >
                      Add New value
                    </Button>
                  </>
                </Box>
              </Box>
            </>
          ) : (
            <>
              {Attribute === 0 ? (
                <>
                  <Typography variant="h6" sx={{ mt: -3 }}>
                    Attributes
                  </Typography>
                  <Box sx={{ display: "flex", flexDerection: "row", mt: 0 }}>
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
                      <Typography sx={{ fontSize: "13px" }}>
                        Attributes
                      </Typography>
                    </Breadcrumbs>

                    <Box sx={{ ml: "auto" }}>
                      <>
                        <Button
                          variant="contained"
                          sx={{
                            mr: 3,
                            mt: -2,
                            borderRadius: "20px",
                            backgroundColor: "#0099CC",
                            fontSize: 12,
                          }}
                          onClick={Attchange}
                        >
                          Add New Attribute
                        </Button>
                        <Button
                          sx={{
                            mr: 3,
                            mt: -2,
                            borderRadius: "20px",
                            backgroundColor: "#0099CC",
                            fontSize: 12,
                          }}
                          variant="contained"
                          type="Click"
                          onClick={AttvlaueChange}
                        >
                          Add New value
                        </Button>
                      </>
                    </Box>
                  </Box>
                </>
              ) : (
                <>
                  <Box sx={{ display: "flex", flexDerection: "row" }}>
                    <Typography variant="h5">Add New Attribute</Typography>
                    <Box sx={{ ml: "auto" }}>
                      <></>
                    </Box>
                  </Box>
                </>
              )}
            </>
          )}
        </>
      )}
      {tabIndex === 1 && (
        <>
          {feautureview?.id ? (
            <>
              <Typography variant="h6" sx={{ mt: -3 }}>
                {feautureview.row.featurename}
              </Typography>
              <Box sx={{ display: "flex", flexDerection: "row", mt: 1 }}>
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
                    onClick={refreshPage}
                    to="/attributes"
                    style={{
                      color: "rgba(0, 0, 0, 0.6)",
                      fontSize: "13px",
                    }}
                  >
                    <Typography>Feature</Typography>
                  </Link>
                  <Typography sx={{ fontSize: "13px" }}>
                    {feautureview.row.featurename}
                  </Typography>
                </Breadcrumbs>

                <Box sx={{ ml: "auto" }}>
                  <>
                    <Button
                      sx={{
                        mr: 3,
                        borderRadius: "20px",
                        backgroundColor: "#0099CC",
                      }}
                      variant="contained"
                      onClick={featurevalueChaneg}
                    >
                      Add New value
                    </Button>
                  </>
                </Box>
              </Box>
              {/* <Box sx={{ ml: "auto" }}>
                    <Button
                      sx={{
                        mr: 3,
                        borderRadius: "20px",
                        backgroundColor: "#0099CC",
                      }}
                      variant="contained"
                      onClick={featurevalueChaneg}
                    >
                      Add New value
                    </Button>
                  </Box> */}
            </>
            // ==================>.....Edit section....................<=======================
          ) : (
            <>
              <Typography variant="h6" sx={{ mt: -3 }}>
                Features
              </Typography>
              <Box sx={{ display: "flex", flexDerection: "row", mt: 0 }}>
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

                  <Typography sx={{ fontSize: "13px" }}>Features</Typography>
                </Breadcrumbs>
                <Box sx={{ ml: "auto" }}>
                  <Button
                    variant="contained"
                    sx={{
                      mr: 3,
                      mt: -2,
                      borderRadius: "20px",
                      backgroundColor: "#0099CC",
                      fontSize: 12,
                    }}
                    onClick={FeaturesChange}
                  >
                    Add New Features
                  </Button>
                  <Button
                    sx={{
                      mr: 3,
                      mt: -2,
                      borderRadius: "20px",
                      backgroundColor: "#0099CC",
                      fontSize: 12,
                    }}
                    variant="contained"
                    onClick={featurevalueChaneg}
                  >
                    Add New value
                  </Button>
                </Box>
              </Box>
            </>
          )}
        </>
      )}
      <Box>
        <Divider
          fullWidth
          sx={{ backgroundColor: "#000000", mt: 1 }}
          showlabels="true"
        />
      </Box>
      <Box>
        <Tabs
          value={tabIndex}
          textColor="secondary"
          indicatorColor="secondary"
          // centered
          onChange={handleTabChange}
        >
          <Tab sx={{ fontSize: "12px" }} label="Attributes" />
          <Tab sx={{ fontSize: "12px" }} label="Features" />
        </Tabs>
      </Box>

      {tabIndex === 0 && (
        <>
          {viewitem ? (
            <>
              <Box sx={{ display: "flex" }}>
                <Button
                  sx={{
                    mr: 3,
                    mt: 5,
                    borderRadius: "20px",
                    backgroundColor: "#0099CC",
                    fontSize: 12,
                  }}
                  variant="contained"
                  onClick={handleClickvalueOpen}
                >
                  Bulk
                </Button>

                <Button
                  sx={{
                    mr: 3,
                    mt: 5,
                    borderRadius: "20px",
                    backgroundColor: "#0099CC",
                    fontSize: 12,
                  }}
                  variant="contained"
                  onClick={handleClickdelete1}
                >
                  Bulk Delete
                </Button>
              </Box>
              <Box>
                <Dialog open={valueopen} onClose={handlevalueClose}>
                  <DialogTitle>Select One</DialogTitle>
                  <DialogContent>
                    <FormControlLabel
                      label="Show All"
                      control={
                        <Checkbox
                          checked={valuecheckedcheck}
                          onChange={handleChangevalue}
                          inputProps={{
                            "aria-label": "controlled",
                          }}
                        />
                      }
                    />

                    <FormControlLabel
                      label="Hide All"
                      control={
                        <Checkbox
                          checked={valuedchecked}
                          onChange={handlevaluedisableChange}
                          inputProps={{
                            "aria-label": "controlled",
                          }}
                        />
                      }
                    />
                  </DialogContent>
                  <DialogActions>
                    <Button autoFocus onClick={handlevalueDisClose}>
                      Cancel
                    </Button>
                    <Button onClick={handlevlaueClosecheck} autoFocus>
                      Done
                    </Button>
                  </DialogActions>
                </Dialog>
              </Box>
              <Box>
                <Dialog open={deleteopen1} onClose={handleDeletrClose1}>
                  <DialogTitle>Delete</DialogTitle>
                  <DialogContent>
                    <FormControlLabel
                      label="Delete All"
                      control={
                        <Checkbox
                          checked={checkeddelete1}
                          onChange={handleChangedelete1}
                          inputProps={{
                            "aria-label": "controlled",
                          }}
                        />
                      }
                    />
                  </DialogContent>
                  <DialogActions>
                    <Button autoFocus onClick={handleDeletrClose1}>
                      Cancel
                    </Button>
                    <Button onClick={handleClosecheckdelet1} autoFocus>
                      Done
                    </Button>
                  </DialogActions>
                </Dialog>
              </Box>
              <Box
                sx={{
                  height: 325,
                  width: "100%",

                  "& .super-app-theme--header": {
                    backgroundColor: "#808080",
                    color: "#ffffff",
                  },
                  "& .css-1jbbcbn-MuiDataGrid-columnHeaderTitle": {
                    fontSize: 14,
                  },
                  ".css-o8hwua-MuiDataGrid-root .MuiDataGrid-cellContent": {
                    fontSize: 13,
                  },
                  ".css-bfht93-MuiDataGrid-root .MuiDataGrid-columnHeader--alignCenter .MuiDataGrid-columnHeaderTitleContainer":
                  {
                    backgroundColor: "#808080",
                    color: "#ffffff",
                  },
                  ".css-h4y409-MuiList-root": {
                    display: "grid",
                  },
                  ".css-1omg972-MuiDataGrid-root .MuiDataGrid-columnHeader--alignCenter .MuiDataGrid-columnHeaderTitleContainer":
                  {
                    backgroundColor: "#808080",
                  },
                }}
              >
                <DataGrid
                  sx={{
                    boxShadow: 10,
                    borderRadius: 0,
                    m: 2,
                  }}
                  columns={valuecolumn}
                  rows={assemList}
                  getRowId={(rows) => rows.id}
                  rowHeight={40}
                  headerHeight={35}
                  // pageSize={10}
                  // rowsPerPageOptions= {[25, 50, 100]}
                  pagination
                  checkboxSelection
                  onSelectionModelChange={(newSelectionModel) => {
                    setvalueSelectionModel(newSelectionModel);
                  }}
                  selectionModel={valeselectionModel}
                />
              </Box>
            </>
          ) : (
            <>
              <Box sx={{ display: "flex" }}>
                <Button
                  sx={{
                    mr: 3,
                    mt: 2,
                    mb: 0,
                    ml: 1,
                    borderRadius: "20px",
                    backgroundColor: "#0099CC",
                    fontSize: 12,
                  }}
                  variant="contained"
                  onClick={handleClickOpen}
                >
                  Bulk
                </Button>

                {/* <Button
                  sx={{
                    mr: 3,
                    mt: 2,
                    mb: 0,

                    borderRadius: "20px",
                    backgroundColor: "#0099CC",
                    fontSize: 12,
                  }}
                  variant="contained"
                  onClick={handleClickdelete}
                >
                  Bulk Delete
                </Button> */}
              </Box>
              <Box>
                <Dialog open={open} onClose={handleClose}>
                  <DialogTitle>Select One</DialogTitle>
                  <DialogContent>
                    <FormControlLabel
                      label="Show All"
                      control={
                        <Checkbox
                          checked={checkedcheck}
                          onChange={handleChange}
                          inputProps={{
                            "aria-label": "controlled",
                          }}
                        />
                      }
                    />

                    <FormControlLabel
                      label="Hide All"
                      control={
                        <Checkbox
                          checked={dchecked}
                          onChange={handledisableChange}
                          inputProps={{
                            "aria-label": "controlled",
                          }}
                        />
                      }
                    />
                    <FormControlLabel
                      label="Delete All"
                      control={
                        <Checkbox
                          checked={checkeddelete}
                          onChange={handleChangedelete}
                          inputProps={{
                            "aria-label": "controlled",
                          }}
                        />
                      }
                    />
                  </DialogContent>
                  <DialogActions>
                    <Button autoFocus onClick={handleDisClose}>
                      Cancel
                    </Button>
                    {checkeddelete === true ? (
                      <>
                        {" "}
                        <Button onClick={handleClosecheckdelet} autoFocus>
                          Delete
                        </Button>
                      </>
                    ) : (
                      <>
                        {" "}
                        <Button onClick={handleClosecheck} autoFocus>
                          Done
                        </Button>
                      </>
                    )}
                  </DialogActions>
                </Dialog>
              </Box>

              {/* <Box>
                <Dialog open={deleteopen} onClose={handleDeletrClose}>
                  <DialogTitle>Delete</DialogTitle>
                  <DialogContent>
                    <FormControlLabel
                      label="Delete All"
                      control={
                        <Checkbox
                          checked={checkeddelete}
                          onChange={handleChangedelete}
                          inputProps={{
                            "aria-label": "controlled",
                          }}
                        />
                      }
                    />
                  </DialogContent>
                  <DialogActions>
                    <Button autoFocus onClick={handleDeletrClose}>
                      Cancel
                    </Button>
                    <Button onClick={handleClosecheckdelet} autoFocus>
                      Done
                    </Button>
                  </DialogActions>
                </Dialog>
              </Box> */}

              <Box
                sx={{
                  height: 325,
                  width: "100%",

                  "& .super-app-theme--header": {
                    backgroundColor: "#808080",
                    color: "#ffffff",
                  },
                  "& .css-1jbbcbn-MuiDataGrid-columnHeaderTitle": {
                    fontSize: 14,
                  },
                  ".css-o8hwua-MuiDataGrid-root .MuiDataGrid-cellContent": {
                    fontSize: 13,
                  },
                  ".css-bfht93-MuiDataGrid-root .MuiDataGrid-columnHeader--alignCenter .MuiDataGrid-columnHeaderTitleContainer":
                  {
                    backgroundColor: "#808080",
                    color: "#ffffff",
                  },
                  ".css-h4y409-MuiList-root": {
                    display: "grid",
                  },
                  ".css-1omg972-MuiDataGrid-root .MuiDataGrid-columnHeader--alignCenter .MuiDataGrid-columnHeaderTitleContainer":
                  {
                    backgroundColor: "#808080",
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
                  rows={attributeMasterdetails ? attributeMasterdetails : ""}
                  getRowId={(rows) => rows._id}
                  VerticalAlignment="Center"
                  rowHeight={40}
                  headerHeight={35}
                  // pageSize={10}
                  // rowsPerPageOptions= {[25, 50, 100]}
                  pagination
                  checkboxSelection
                  onSelectionModelChange={(newSelectionModel) => {
                    setSelectionModel(newSelectionModel);
                  }}
                  selectionModel={selectionModel}
                />
              </Box>
            </>
          )}
        </>
      )}

      <Box>
        {tabIndex === 1 && (
          <>
            {feautureview?.id ? (
              <>
                <Box sx={{ display: "flex" }}>
                  <Button
                    sx={{
                      mr: 3,
                      mt: 2,
                      mb: 0,
                      borderRadius: "20px",
                      backgroundColor: "#0099CC",
                    }}
                    variant="contained"
                    onClick={handleClickFvlaueOpen}
                  >
                    Bulk
                  </Button>
                  <Button
                    sx={{
                      mr: 3,
                      mt: 2,
                      mb: 0,
                      borderRadius: "20px",
                      backgroundColor: "#0099CC",
                    }}
                    variant="contained"
                    onClick={handleClickdelete4}
                  >
                    Bulk Delete
                  </Button>
                </Box>
                <Box>
                  <Dialog open={Fvlaueopen} onClose={handleFvlaueClose}>
                    <DialogTitle>Select One</DialogTitle>
                    <DialogContent>
                      <FormControlLabel
                        label="Show All"
                        control={
                          <Checkbox
                            checked={Fvlauecheckedcheck}
                            onChange={handleFvlaueChange}
                            inputProps={{
                              "aria-label": "controlled",
                            }}
                          />
                        }
                      />

                      <FormControlLabel
                        label="Hide All"
                        control={
                          <Checkbox
                            checked={Fvlauedchecked}
                            onChange={handleFvlauedisableChange}
                            inputProps={{
                              "aria-label": "controlled",
                            }}
                          />
                        }
                      />
                    </DialogContent>
                    <DialogActions>
                      <Button autoFocus onClick={handleFvlaueDisClose}>
                        Cancel
                      </Button>
                      <Button onClick={handleFvlaueClosecheck} autoFocus>
                        Done
                      </Button>
                    </DialogActions>
                  </Dialog>
                </Box>
                <Box>
                  <Dialog open={deleteopen4} onClose={handleDeletrClose4}>
                    <DialogTitle>Delete</DialogTitle>
                    <DialogContent>
                      <FormControlLabel
                        label="Delete All"
                        control={
                          <Checkbox
                            checked={checkeddelete4}
                            onChange={handleChangedelete4}
                            inputProps={{
                              "aria-label": "controlled",
                            }}
                          />
                        }
                      />
                    </DialogContent>
                    <DialogActions>
                      <Button autoFocus onClick={handleDeletrClose4}>
                        Cancel
                      </Button>
                      <Button onClick={handleClosecheckdelet4} autoFocus>
                        Done
                      </Button>
                    </DialogActions>
                  </Dialog>
                </Box>
                <Box
                  sx={{
                    height: 325,
                    width: "100%",

                    "& .super-app-theme--header": {
                      backgroundColor: "#808080",
                      color: "#ffffff",
                    },
                    "& .css-1jbbcbn-MuiDataGrid-columnHeaderTitle": {
                      fontSize: 14,
                    },
                    ".css-o8hwua-MuiDataGrid-root .MuiDataGrid-cellContent": {
                      fontSize: 13,
                    },
                    ".css-bfht93-MuiDataGrid-root .MuiDataGrid-columnHeader--alignCenter .MuiDataGrid-columnHeaderTitleContainer":
                    {
                      backgroundColor: "#808080",
                      color: "#ffffff",
                    },
                    ".css-h4y409-MuiList-root": {
                      display: "grid",
                    },
                    ".css-1omg972-MuiDataGrid-root .MuiDataGrid-columnHeader--alignCenter .MuiDataGrid-columnHeaderTitleContainer":
                    {
                      backgroundColor: "#808080",
                    },
                  }}
                >
                  <DataGrid
                    sx={{
                      boxShadow: 10,
                      borderRadius: 0,
                      m: 2,
                    }}
                    columns={featurevaluecolumn}
                    rows={FeautureList}
                    getRowId={(rows) => rows.id}
                    // pageSize={10}
                    // rowsPerPageOptions= {[25, 50, 100]}
                    pagination
                    checkboxSelection
                    onSelectionModelChange={(newSelectionModel) => {
                      setFvlaueSelectionModel(newSelectionModel);
                    }}
                    selectionModel={FvlaueselectionModel}
                  />
                </Box>
              </>
            ) : (
              <>
                <Box sx={{ display: "flex" }}>
                  <Button
                    sx={{
                      mr: 3,
                      mt: 2,
                      mb: 0,
                      ml: 1,
                      borderRadius: "20px",
                      backgroundColor: "#0099CC",
                      fontSize: 12,
                    }}
                    variant="contained"
                    onClick={handleClickFOpen}
                  >
                    Bulk
                  </Button>
                  {/* <Button
                    sx={{
                      mr: 3,
                      mt: 2,
                      mb: 0,

                      borderRadius: "20px",
                      backgroundColor: "#0099CC",
                      fontSize: 12,
                    }}
                    variant='contained'
                    onClick={handleClickdelete3}
                  >
                    Bulk Delete
                  </Button> */}
                </Box>
                <Box>
                  <Dialog open={Fopen} onClose={handleFClose}>
                    <DialogTitle>Select One</DialogTitle>
                    <DialogContent>
                      <FormControlLabel
                        label="Show All"
                        control={
                          <Checkbox
                            checked={Fcheckedcheck}
                            onChange={handleFChange}
                            inputProps={{
                              "aria-label": "controlled",
                            }}
                          />
                        }
                      />

                      <FormControlLabel
                        label="Hide All"
                        control={
                          <Checkbox
                            checked={Fdchecked}
                            onChange={handleFdisableChange}
                            inputProps={{
                              "aria-label": "controlled",
                            }}
                          />
                        }
                      />
                      <FormControlLabel
                        label="Delete All"
                        control={
                          <Checkbox
                            checked={checkeddelete3}
                            onChange={handleChangedelete3}
                            inputProps={{
                              "aria-label": "controlled",
                            }}
                          />
                        }
                      />
                    </DialogContent>
                    <DialogActions>
                      <Button autoFocus onClick={handleFDisClose}>
                        Cancel
                      </Button>
                      {checkeddelete3 === true ? (
                        <>
                          <Button onClick={handleClosecheckdelet3} autoFocus>
                            Delete
                          </Button>
                        </>
                      ) : (
                        <>
                          <Button onClick={handleFClosecheck} autoFocus>
                            Done
                          </Button>
                        </>
                      )}
                    </DialogActions>
                  </Dialog>
                </Box>

                <Box>
                  <Dialog open={deleteopen3} onClose={handleDeletrClose3}>
                    <DialogTitle>Delete</DialogTitle>
                    <DialogContent>
                      <FormControlLabel
                        label="Delete All"
                        control={
                          <Checkbox
                            checked={checkeddelete3}
                            onChange={handleChangedelete3}
                            inputProps={{
                              "aria-label": "controlled",
                            }}
                          />
                        }
                      />
                    </DialogContent>
                    <DialogActions>
                      <Button autoFocus onClick={handleDeletrClose3}>
                        Cancel
                      </Button>
                      <Button onClick={handleClosecheckdelet3} autoFocus>
                        Done
                      </Button>
                    </DialogActions>
                  </Dialog>
                </Box>
                <Box
                  sx={{
                    height: 325,
                    width: "100%",

                    "& .super-app-theme--header": {
                      backgroundColor: "#808080",
                      color: "#ffffff",
                    },
                    "& .css-1jbbcbn-MuiDataGrid-columnHeaderTitle": {
                      fontSize: 14,
                    },
                    ".css-o8hwua-MuiDataGrid-root .MuiDataGrid-cellContent": {
                      fontSize: 13,
                    },
                    ".css-bfht93-MuiDataGrid-root .MuiDataGrid-columnHeader--alignCenter .MuiDataGrid-columnHeaderTitleContainer":
                    {
                      backgroundColor: "#808080",
                      color: "#ffffff",
                    },
                    ".css-h4y409-MuiList-root": {
                      display: "grid",
                    },
                    ".css-1omg972-MuiDataGrid-root .MuiDataGrid-columnHeader--alignCenter .MuiDataGrid-columnHeaderTitleContainer":
                    {
                      backgroundColor: "#808080",
                    },
                  }}
                >
                  <DataGrid
                    sx={{
                      boxShadow: 10,
                      borderRadius: 0,
                      m: 2,
                    }}
                    columns={featurecolumn}
                    rows={Featuresdetails ? Featuresdetails : ""}
                    getRowId={(rows) => rows._id}
                    rowHeight={40}
                    headerHeight={35}
                    // pageSize={10}
                    // rowsPerPageOptions={[25,50,100]}
                    pagination
                    checkboxSelection
                    onSelectionModelChange={(newSelectionModel) => {
                      setFSelectionModel(newSelectionModel);
                    }}
                    selectionModel={FselectionModel}
                  />
                </Box>
              </>
            )}
          </>
        )}
      </Box>
    </Box>
  );
}

export default AttributesScreen;
