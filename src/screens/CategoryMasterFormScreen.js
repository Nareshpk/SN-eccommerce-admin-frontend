/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { useForm } from "react-hook-form";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import InputLabel from "@mui/material/InputLabel";
// import Select from "@mui/material/Select";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
// import MenuItem from "@mui/material/MenuItem";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { useDispatch, useSelector } from "react-redux";
import { FormControl, Switch } from "@material-ui/core";
import Radio from "@mui/material/Radio";
import Checkbox from "@mui/material/Checkbox";
import {
  CategoryMasterallLists,
  createCategoryMaster,
  updateCategoryChild,
  updateCategoryGrandChild,
  updatecategoryMaster,
} from "../actions/categoryMasterAction";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import CardMedia from "@mui/material/CardMedia";
// import Radio from '@mui/material/Radio';
// import FormLabel from '@mui/material/FormLabel';
// import { getMuiTheme } from "../styles/Styles";
import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem from "@mui/lab/TreeItem";
import { useNavigate } from "../../node_modules/react-router-dom/dist/index";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";

export default function CategoryMasterFormScreen() {
  const CategoryMasterallList = useSelector(
    (state) => state.CategoryMasterallList
  );
  const { categorymasterallList } = CategoryMasterallList;

  const params = useParams();
  const categoryMasterId = params.id;

  const navigate = useNavigate();

  ///*******************************Child Section********************************** */
  const categoryChildAll = useSelector((state) => state.categoryChildAll);
  const { ChildcategoryList } = categoryChildAll;
  const categorychildObj = ChildcategoryList?.find(
    (item) => item._id === categoryMasterId
  );
  console.log("categorychildObj===================>>", categorychildObj);

  ///*******************************Parent Section********************************** */
  const categoryObj = categorymasterallList?.find(
    (item) => item._id === categoryMasterId
  );

  const ParentIdName = ChildcategoryList?.find(
    (x) => x._id === categoryMasterId
  );

  const categoryParentObj = categorymasterallList?.find(
    (item) => item._id === ParentIdName?.parent
  );

  //****************************** Grand child Section *********************/
  const categorygrandChildList = useSelector(
    (state) => state.categorygrandChildList
  );
  const { grandChildList } = categorygrandChildList;
  const grandchildObj = grandChildList?.find(
    (x) => x?._id === categoryMasterId
  );

  let childObjName;
  let childObjId;
  const childObj = ChildcategoryList?.filter((item) => {
    return item._id === grandchildObj?.parent;
  })?.map((item) => {
    childObjId = item?.parent;
    childObjName = item?.name;
  });

  let parentName;
  const PName = categorymasterallList?.filter((item) => {});

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  ///*******************************Child Section********************************** */

  const [childName, setChildName] = useState(categorychildObj?.name);
  const [childId, setChildId] = useState(categorychildObj?.parent);
  const [childchecked, setchildchecked] = useState(categorychildObj?.checked);

  const [childparent, setchildParent] = useState(categorychildObj?.parent);
  const [childdescription, setchildDescription] = useState(
    categorychildObj?.description
  );
  const [childcoverimg, childsetcoverimg] = useState(
    categorychildObj?.coverimg
  );

  ///******************************* Grand Child Section********************************** */
  const [granddchildName, setGrandChildName] = useState(grandchildObj?.name);
  const [grandchildchecked, setgrandchildchecked] = useState(
    grandchildObj?.checked
  );

  const [grandchildparent, setgrandchildParent] = useState(
    grandchildObj?.parent
  );
  const [grandchilddescription, setgrandchildDescription] = useState(
    grandchildObj?.description
  );
  const [grandchildcoverimg, grandchildsetcoverimg] = useState(
    grandchildObj?.coverimg
  );

  ///*******************************Parent Section Start********************************** */
  // eslint-disable-next-line no-unused-vars
  const [name, setName] = useState(categoryObj?.name);
  // eslint-disable-next-line no-unused-vars
  const [checked, setchecked] = useState(categoryObj?.checked);
  // eslint-disable-next-line no-unused-vars
  const [parent, setParent] = useState(categoryObj?.parent);
  // eslint-disable-next-line no-unused-vars
  const [description, setDescription] = useState(categoryObj?.description);
  // eslint-disable-next-line no-unused-vars
  const [coverimg, setcoverimg] = useState(categoryObj?.coverimg);
  // eslint-disable-next-line no-unused-vars
  const [CreatedAnother, setCreatedAnother] = useState("");
  const [, setCreated] = useState("");
  // eslint-disable-next-line no-unused-vars
  // const [menuThumbnail, setmenuThumbnail] = useState('');
  // const [image, setimage] = useState('');

  ///*******************************Parent Section End********************************** */
  const dispatch = useDispatch();
  const theme = createTheme();
  const UpdateHandler = (e) => {
    if (categoryObj) {
      dispatch(
        updatecategoryMaster({
          id: categoryObj?._id,
          name: name,
          checked: checked,
          parent: parent,
          description: description,
          coverimg: coverimg,
          // catThumbnail: e.catThumbnail,
          // menuThumbnail: e.menuThumbnail
        })
      );
      window.confirm("Updated Successfully!!");
      navigate("/categorymaster");
      event.target.reset();
    } else if (categorychildObj) {
      dispatch(
        updateCategoryChild({
          id: categorychildObj?._id,
          name: childName,
          checked: childchecked,
          parent: childparent,
          description: childdescription,
          coverimg: childcoverimg,
        })
      );
      window.confirm("Updated Successfully!!");
      navigate(`/categorychild/${categorychildObj.parent}`);
    } else if (grandchildObj) {
      dispatch(
        updateCategoryGrandChild({
          id: grandchildObj?._id,
          name: granddchildName,
          checked: grandchildchecked,
          parent: grandchildparent,
          description: grandchilddescription,
          coverimg: grandchildcoverimg,
        })
      );
      window.confirm("Updated Successfully!!");
      navigate(`/categorygrandchild/${grandchildObj.parent}`);
    }
  };

  const [selectedFile, setSelectedFile] = useState();
  const [selectedFilenew, setSelectednew] = useState();

  const [preview, setPreview] = useState();
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files?.length === 0) {
      setSelectedFile(undefined);
      return;
    } else {
      setSelectednew(e.target.files);
    }

    // I've kept this example simple by using the first image instead of multiple
    setSelectedFile(e.target.files[0]);
  };
  const [check, setCheck] = useState(true);

  let NewArry = [];
  for (let i = 0; i < categorymasterallList?.length; i++) {
    for (let j = 0; j < categorymasterallList[i]?.children?.length; j++) {
      if (categorymasterallList[i].children[j]._id === parent) {
      
        NewArry.push({
          ["parenttest"]: categorymasterallList[i].children[j].parent,
          ["parenttestname"]: "child-1",
          ["childIndex"]: j,
        });
      }
      for ( 
        let k = 0;
        k < categorymasterallList[i].children[j].children.length;
        k++
      ) {
        if (categorymasterallList[i].children[j].children[k]?._id === parent) {
          NewArry.push({
            ["parenttest"]:
              categorymasterallList[i].children[j].children[k].parentId,
            ["parenttestname"]: "child-2",
            ["child1"]: j,
            ["childIndex"]: k,
          });
        }
        for (
          let a = 0;
          a < categorymasterallList[i].children[j].children[k].children.length;
          a++
        ) {
          if (
            categorymasterallList[i].children[j].children[k].children[a]
              ?._id === parent
          ) {
            console.log("k------------>>", k);
            console.log("a------------>>", a);
            NewArry.push({
              ["parenttest"]:
                categorymasterallList[i].children[j].children[k].children[a]
                  ?.parentId,
              ["parenttestname"]: "child-3",
              ["child1"]: j,
              ["child2"]: k,
              ["childIndex"]: a,
            });
          }

          for (
            let b = 0;
            b <
            categorymasterallList[i].children[j].children[k].children[a]
              ?.children.length;
            b++
          ) {
            if (
              categorymasterallList[i].children[j].children[k].children[a]
                ?.children[b]._id === parent
            ) {
              NewArry.push({
                ["parenttest"]:
                  categorymasterallList[i].children[j].children[k].children[a]
                    ?.children[b].parentId,
                ["parenttestname"]: "child-4",
                ["child1"]: j,
                ["child2"]: k,
                ["child3"]: a,
                ["childIndex"]: b,
              });
            }

            for (
              let c = 0;
              c <
              categorymasterallList[i].children[j].children[k].children[a]
                ?.children[b]?.children.length;
              c++
            ) {
              if (
                categorymasterallList[i].children[j].children[k].children[a]
                  ?.children[b]?.children[c]._id === parent
              ) {
                NewArry.push({
                  ["parenttest"]:
                    categorymasterallList[i].children[j].children[k].children[a]
                      ?.children[b]?.children[c]?.parentId,
                  ["parenttestname"]: "child-5",
                  ["child1"]: j,
                  ["child2"]: k,
                  ["child3"]: a,
                  ["child4"]: b,
                  ["childIndex"]: c,
                });
              }

              for (
                let d = 0;
                d <
                categorymasterallList[i].children[j].children[k].children[a]
                  ?.children[b]?.children[c]?.children.length;
                d++
              ) {
                if (
                  categorymasterallList[i].children[j].children[k].children[a]
                    ?.children[b]?.children[c]?.children[d]?._id === parent
                ) {
                  NewArry.push({
                    ["parenttest"]:
                      categorymasterallList[i].children[j].children[k].children[
                        a
                      ]?.children[b]?.children[c]?.children[d]?.parentId,
                    ["parenttestname"]: "child-6",
                    ["child1"]: j,
                    ["child2"]: k,
                    ["child3"]: a,
                    ["child4"]: b,
                    ["child5"]: c,
                    ["childIndex"]: d,
                  });
                }
                for (
                  let e = 0;
                  e <
                  categorymasterallList[i].children[j].children[k].children[a]
                    ?.children[b]?.children[c]?.children[d]?.children.length;
                  e++
                ) {
                  if (
                    categorymasterallList[i].children[j].children[k].children[a]
                      ?.children[b]?.children[c]?.children[d]?.children[e]
                      ?._id === parent
                  ) {
                    NewArry.push({
                      ["parenttest"]:
                        categorymasterallList[i].children[j].children[k]
                          .children[a]?.children[b]?.children[c]?.children[d]
                          ?.children[e]?.parentId,
                      ["parenttestname"]: "child-7",
                      ["child1"]: j,
                      ["child2"]: k,
                      ["child3"]: a,
                      ["child4"]: b,
                      ["child5"]: c,
                      ["child6"]: d,
                      ["childIndex"]: e,
                    });
                  }
                  for (
                    let x = 0;
                    x <
                    categorymasterallList[i].children[j].children[k].children[a]
                      ?.children[b]?.children[c]?.children[d]?.children[e]
                      ?.children.length;
                    x++
                  ) {
                    if (
                      categorymasterallList[i].children[j].children[k].children[
                        a
                      ]?.children[b]?.children[c]?.children[d]?.children[e]
                        ?.children[x]?._id === parent
                    ) {
                      NewArry.push({
                        ["parenttest"]:
                          categorymasterallList[i].children[j].children[k]
                            .children[a]?.children[b]?.children[c]?.children[d]
                            ?.children[e]?.children[x]?.parentId,
                        ["parenttestname"]: "child-8",
                        ["child1"]: j,
                        ["child2"]: k,
                        ["child3"]: a,
                        ["child4"]: b,
                        ["child5"]: c,
                        ["child6"]: d,
                        ["child7"]: e,
                        ["childIndex"]: x,
                      });
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  const createHandler = (e) => {
    if (CreatedAnother === 1) {
      dispatch(
        createCategoryMaster({
          name: e.name,
          checked: check,
          parent: e.parent ? e.parent : parent,
          description: e.description,
          coverimg: selectedFilenew,
          parentId: NewArry.length > 0 ? NewArry[0].parenttest : null,
          childname: NewArry.length > 0 ? NewArry[0].parenttestname : null,
          childIndex: NewArry.length > 0 ? NewArry[0].childIndex : null,
          child1: NewArry.length > 0 ? NewArry[0].child1 : null,
          child2: NewArry.length > 0 ? NewArry[0].child2 : null,
          child3: NewArry.length > 0 ? NewArry[0].child3 : null,
          child4: NewArry.length > 0 ? NewArry[0].child4 : null,
          child5: NewArry.length > 0 ? NewArry[0].child5 : null,
          child6: NewArry.length > 0 ? NewArry[0].child6 : null,
          child7: NewArry.length > 0 ? NewArry[0].child7 : null,

          // catThumbnail: e.catThumbnail,
          // menuThumbnail: e.menuThumbnail
        })
      );
      window.confirm("New Category Added Successfully!!");
      navigate("/categorymaster");
      event.target.reset();
    } else {
      dispatch(
        createCategoryMaster({
          name: e.name,
          checked: check,
          parent: e.parent ? e.parent : parent,
          description: e.description,
          coverimg: selectedFilenew,
          parentId: NewArry.length > 0 ? NewArry[0].parenttest : null,
          childname: NewArry.length > 0 ? NewArry[0].parenttestname : null,
          childIndex: NewArry.length > 0 ? NewArry[0].childIndex : null,
          child1: NewArry.length > 0 ? NewArry[0].child1 : null,
          child2: NewArry.length > 0 ? NewArry[0].child2 : null,
          child3: NewArry.length > 0 ? NewArry[0].child3 : null,
          child4: NewArry.length > 0 ? NewArry[0].child4 : null,
          child5: NewArry.length > 0 ? NewArry[0].child5 : null,
          child6: NewArry.length > 0 ? NewArry[0].child6 : null,
          child7: NewArry.length > 0 ? NewArry[0].child7 : null,

          // parenttest: parenttest,
          // parenttestname: parenttestname,
          // catThumbnail: e.catThumbnail,
          // menuThumbnail: e.menuThumbnail
        })
      );
      window.confirm("New Category Added Successfully!!");

      event.target.reset();
      navigate("/categoryFormmaster");
    }
  };

  // const switchHandler = (event) => {
  //   if (event.target.checked) {
  //     setCheck(event.target.checked);
  //   } else {
  //     setCheck(event.target.checked);
  //   }
  // };

  function handleChange(e) {
    setcoverimg(e.target.files);
  }

  const useStyles = makeStyles(() => ({
    label: {
      "& .css-1hv8oq8-MuiStepLabel-label.Mui-active": { fontSize: "13px" },
      "& .css-1hv8oq8-MuiStepLabel-label.Mui-disabled": { fontSize: "13px" },
      "& .Mui-disabled .MuiStepIcon-root": { fontSize: "13px" },
      "& .Mui-active .MuiStepIcon-root": { fontSize: "13px" },
      "& .css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root.Mui-completed": {
        fontSize: "13px",
        color: "green",
      },
      "& .css-1hv8oq8-MuiStepLabel-label.Mui-completed": { fontSize: "13px" },
    },
    cssLabel: {
      "&.css-1pysi21-MuiFormLabel-root-MuiInputLabel-root": {
        fontSize: "13px",
      },
      "& .css-1pysi21-MuiFormLabel-root-MuiInputLabel-root.Mui-focused": {
        fontSize: "13px",
      },
    },
    cssFocused: {
      "& .css-1pysi21-MuiFormLabel-root-MuiInputLabel-root.Mui-focused": {
        fontSize: "13px",
      },
    },
    selected: {
      bgcolor: "red",
      color: "white",
    },
    switch: {
      "& .Mui-checked": {
        color: "#00CC00",
        // transform: "translateX(25px) !important"
      },
      "& .MuiSwitch-track": {
        backgroundColor: "#00CC00 !important",
      },
    },
  }));

  const classes = useStyles();
  useEffect(() => {
    dispatch(CategoryMasterallLists());
  }, [dispatch]);

  const renderTree = (nodes, i) => (
    <TreeItem
      key={nodes._id}
      nodeId={nodes?._id}
      nodeIds={nodes}
      label={<Typography sx={{ fontSize: 13 }}>{nodes?.name}</Typography>}
    >
      {Array.isArray(nodes?.children)
        ? nodes?.children.map((node) => renderTree(node))
        : null}
    </TreeItem>
  );
  const handleSelectedItems = (event, nodeId) => {
    setParent(nodeId);
  };

  return (
    <>
      <Box sx={{ backgroundColor: "#fff" }}>
        {categorychildObj ? (
          <>
            <>
                <Box>
                  <Typography variant="h6" sx={{ mt: -2 }}>
                    Update Category
                  </Typography>
                  <Box
                    component="div"
                    sx={{
                      p: 2,
                      display: "flex",
                      flexDirection: "row",
                      backgroundColor: "#fff",
                    }}
                  >
                    <Breadcrumbs
                      sx={{ mt: -2, ml: -2 }}
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
                        to="/categorymaster"
                        style={{
                          color: "rgba(0, 0, 0, 0.6)",
                          fontSize: "13px",
                        }}
                      >
                        <Typography sx={{ fontSize: "13px" }}>
                          Category
                        </Typography>
                      </Link>
                      <Link
                        to={`/categorychild/${categorychildObj.parent}`}
                        style={{
                          color: "rgba(0, 0, 0, 0.6)",
                          fontSize: "15px",
                        }}
                      >
                        <Typography sx={{ fontSize: "13px" }}>
                          {categoryParentObj?.name}
                        </Typography>
                      </Link>

                      <Typography sx={{ fontSize: "13px" }}>
                        Update Category
                      </Typography>
                    </Breadcrumbs>
                  </Box>
                  <Divider sx={{ mt: -2 }} />
                  <Box sx={{ mt: -10, mb: -18 }}>
                    {" "}
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
                          onSubmit={handleSubmit(UpdateHandler)}
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
                          <Typography
                            variant="h6"
                            sx={{ textAlign: "center", mt: -5 }}
                          >
                            {" "}
                            Category Update
                          </Typography>
                          <TextField
                            size="small"
                            margin="normal"
                            fullWidth
                            id="categoryTittel"
                            label="Name"
                            name="name"
                            autoComplete="off"
                            value={childName}
                            onChange={(e) => setChildName(e.target.value)}
                            inputProps={{ style: { fontSize: 13 } }}
                          />
                          {errors.name && (
                            <span className="formError">Name is required</span>
                          )}
                          <Box sx={{ display: "flex" }}>
                            <Box sx={{ mt: 5 }}>
                              <InputLabel sx={{ fontSize: 13, ml: 1 }}>
                                {" "}
                                Status
                              </InputLabel>
                              {check === true ? (
                                <>
                                  <Switch
                                    className={classes.switch}
                                    onChange={(e) =>
                                      setchildchecked(e.target.checked)
                                    }
                                    checked={childchecked}
                                  />
                                </>
                              ) : (
                                <>
                                  <Switch
                                    onChange={(e) =>
                                      setchildchecked(e.target.checked)
                                    }
                                    checked={childchecked}
                                  />
                                </>
                              )}
                            </Box>
                            <Box sx={{ ml: 15 }}>
                              {" "}
                              <InputLabel sx={{ mb: 1, fontSize: 13 }}>
                                {" "}
                                Parent category
                              </InputLabel>
                              <TreeView
                                aria-label="rich object"
                                defaultCollapseIcon={<ExpandMoreIcon />}
                                defaultExpanded={["root"]}
                                defaultExpandIcon={<ChevronRightIcon />}
                                // onChange={(nodeId) => setParent(nodeId)}
                                onNodeSelect={handleSelectedItems}
                                sx={{
                                  border: "1px solid black",
                                  p: 1,
                                  ".MuiTreeItem-root": {
                                    ".Mui-focused:not(.Mui-selected)":
                                      classes.focused,
                                    ".Mui-selected, .Mui-focused.Mui-selected, .Mui-selected:hover":
                                      classes.selected,
                                  },
                                }}
                              >
                                {categorymasterallList?.map((item) =>
                                  renderTree(item)
                                )}
                              </TreeView>
                            </Box>
                          </Box>

                          <InputLabel sx={{ mt: 1, fontSize: 13 }}>
                            Description
                          </InputLabel>
                          <TextareaAutosize
                            minRows={3}
                            placeholder="Type in here..."
                            id="comment"
                            style={{ width: "100%" }}
                            name="description"
                            value={childdescription}
                            onChange={(e) =>
                              setchildDescription(e.target.value)
                            }
                          />

                          <InputLabel sx={{ mt: 1, fontSize: 13 }}>
                            Cover image
                          </InputLabel>
                          <TextField
                            style={{ margin: "10px 0px" }}
                            inputProps={{
                              style: { fontSize: 14 },
                              accept: "image/*",
                            }}
                            size="small"
                            fullWidth
                            type="file"
                            id="imageFile"
                            name="coverimg"
                            autoComplete="off"
                            onChange={handleChange}
                          />
                          <CardMedia
                            component="img"
                            height="125"
                            sx={{ border: "1px solid black", width: "25%" }}
                            image={`/api/categorymaster/show/${categorychildObj?.coverimg}`}
                            alt={categorychildObj?.coverimg}
                          />

                          <Button
                            // fullWidth
                            size="small"
                            variant="contained"
                            sx={{ mt: 3, mb: -2 }}
                            type="submit"
                          >
                            Update
                          </Button>
                        </Box>
                      </Container>
                    </ThemeProvider>
                  </Box>
                </Box>
              </>
           
            </>
          
        ) : (
          <Box>
            <Typography variant="h6" sx={{ mt: -2 }}>
              Create Category
            </Typography>
            <Box
              component="div"
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "row",
                backgroundColor: "#fff",
              }}
            >
              <Breadcrumbs
                sx={{ mt: -2, ml: -2 }}
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
                  to="/categorymaster"
                  style={{
                    color: "rgba(0, 0, 0, 0.6)",
                    fontSize: "13px",
                  }}
                >
                  <Typography sx={{ fontSize: "13px" }}>Category</Typography>
                </Link>
                <Typography sx={{ fontSize: "13px" }}>
                  Create Category
                </Typography>
              </Breadcrumbs>
            </Box>
            <Divider sx={{ mt: -2 }} />
            <Box sx={{ mt: -10, mb: -18 }}>
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
                    onSubmit={handleSubmit(createHandler)}
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
                    <Typography
                      variant="h6"
                      sx={{ textAlign: "center", mt: -5 }}
                    >
                      {" "}
                      Category
                    </Typography>
                    <FormControl fullWidth>
                      <TextField
                        sx={{ mt: 0 }}
                        InputLabelProps={{
                          classes: {
                            root: classes.cssLabel,
                            focused: classes.cssFocused,
                          },
                        }}
                        size="small"
                        margin="normal"
                        fullWidth
                        id="categoryTittel"
                        label="Name"
                        name="name"
                        autoComplete="off"
                        onChange={(e) => setName(e.target.value)}
                        inputProps={register("name")}
                        // {...register("name", { required: true })}
                        error={errors.name}
                      />
                    </FormControl>
                    {errors.name && (
                      <span className="formError">Name is required</span>
                    )}
                    <Box sx={{ display: "flex" }}>
                      <Box sx={{ mt: 5 }}>
                        <InputLabel sx={{ fontSize: 13, ml: 1 }}>
                          {" "}
                          Status
                        </InputLabel>
                        {check === true ? (
                          <>
                            <Switch
                              className={classes.switch}
                              onChange={(e) => setCheck(e.target.checked)}
                              checked={check}
                            />
                          </>
                        ) : (
                          <>
                            <Switch
                              onChange={(e) => setCheck(e.target.checked)}
                              checked={check}
                            />
                          </>
                        )}
                      </Box>
                      <Box sx={{ ml: 15 }}>
                        {" "}
                        <InputLabel sx={{ mb: 1, fontSize: 13 }}>
                          {" "}
                          Parent category
                        </InputLabel>
                        <TreeView
                          aria-label="rich object"
                          defaultCollapseIcon={<ExpandMoreIcon />}
                          defaultExpanded={["root"]}
                          defaultExpandIcon={<ChevronRightIcon />}
                          // onChange={(nodeId) => setParent(nodeId)}
                          onNodeSelect={handleSelectedItems}
                          sx={{
                            border: "1px solid black",
                            p: 1,

                            ".MuiTreeItem-root": {
                              ".Mui-focused:not(.Mui-selected)":
                                classes.focused,
                              ".Mui-selected, .Mui-focused.Mui-selected, .Mui-selected:hover":
                                classes.selected,
                            },
                          }}
                        >
                          {categorymasterallList?.map((item) =>
                            renderTree(item)
                          )}
                        </TreeView>
                      </Box>

                      {/* {...register("checked")} */}
                      {/* <span >{checked===true?"yes":"No"}</span> */}
                    </Box>

                    <InputLabel sx={{ mt: 1, fontSize: 13 }}>
                      Description
                    </InputLabel>

                    <TextareaAutosize
                      minRows={3}
                      placeholder="Type in here..."
                      id="comment"
                      style={{ width: "100%" }}
                      name="description"
                      // value={comment}
                      onChange={(e) => setDescription(e.target.value)}
                      {...register("description")}
                    />

                    <InputLabel sx={{ mt: 1, fontSize: 13 }}>
                      {" "}
                      Cover image
                    </InputLabel>

                    <input
                      style={{
                        border: "1px solid black",
                        padding: 3,
                        width: 200,
                        // margin: -5,
                      }}
                      type="file"
                      onChange={onSelectFile}
                    />
                    {selectedFile && (
                      <img
                        height="100px"
                        width="100px"
                        border="1px solid #555"
                        src={preview}
                      />
                    )}
                    <Box sx={{ display: "flex" }}>
                      <Button
                        size="small"
                        variant="contained"
                        sx={{ mt: 3, mb: -2 }}
                        type="Click"
                        onClick={() => setCreated(2)}
                      >
                        Save and Add
                      </Button>
                      <Button
                        size="small"
                        variant="contained"
                        sx={{ mt: 3, mb: -2, ml: 5 }}
                        type="Click"
                        onClick={() => setCreatedAnother(1)}
                      >
                        Save
                      </Button>
                    </Box>
                  </Box>
                </Container>
              </ThemeProvider>
            </Box>
          </Box>
        )}
      </Box>
    </>
  );
}
