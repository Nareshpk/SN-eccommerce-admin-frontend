/* eslint-disable no-unused-vars */
import { makeStyles, Switch } from "@material-ui/core";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import TreeItem from "@mui/lab/TreeItem";
import TreeView from "@mui/lab/TreeView";
import Box from "@mui/material/Box";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import InputLabel from "@mui/material/InputLabel";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  CategoryMasterallLists,
  updatecategoryMaster,
} from "../actions/categoryMasterAction";
import { useParams } from "react-router-dom";
import { useLocation } from "../../node_modules/react-router-dom/dist/index";

function TestFromScreen() {
  const params = useParams();
  const parentId = params.id;
  const Locations = useLocation();

  let childName = Locations.state.child;
  console.log("Locations", childName);

  const {
    handleSubmit,
    formState: { errors },
  } = useForm();
  const CategoryMasterallList = useSelector(
    (state) => state.CategoryMasterallList
  );
  const { categorymasterallList } = CategoryMasterallList;
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
  const dispatch = useDispatch();

  let ChildrenArray = [];
  let NewArry = [];
  let ExpandArray = [];
  //   for (let i = 0; i < categorymasterallList?.length; i++) {
  //     if( categorymasterallList[i]._id ===parentId &&  childName == "Parent"){
  //         ChildrenArray.push(categorymasterallList[i])
  //         NewArry.push({
  //             ["Cname"]: "Parent",
  //             ["childIndex"]: i,
  //           });
  //     }
  //     for (let j = 0; j < categorymasterallList[i].children?.length; j++) {
  //       if (
  //         categorymasterallList[i].children[j]._id === parentId &&
  //         childName == "Child1"
  //       ) {
  //         ChildrenArray.push(categorymasterallList[i].children[j]);
  //         NewArry.push({
  //           ["Cname"]: "child-1",
  //           ["childIndex"]: j,
  //         });
  //       }
  //       for (
  //         let k = 0;
  //         k < categorymasterallList[i].children[j].children.length;
  //         k++
  //       ) {
  //         if (
  //           categorymasterallList[i].children[j].children[k]._id === parentId &&
  //           childName == "Child2"
  //         ) {
  //           ChildrenArray.push(categorymasterallList[i].children[j].children[k]);
  //           NewArry.push({
  //             ["Cname"]: "child-2",
  //             ["childs1"]: j,
  //             ["childIndex"]: k,
  //           });
  //         }

  //         for (
  //             let A = 0;
  //             A < categorymasterallList[i].children[j].children[k].children.length;
  //             A++
  //           ) {
  //             if (
  //                 categorymasterallList[i].children[j].children[k].children[A]._id === parentId &&
  //                 childName == "Child3"
  //               ) {
  //                 ChildrenArray.push(categorymasterallList[i].children[j].children[k]);
  //                 NewArry.push({
  //                   ["Cname"]: "child-3",
  //                   ["childs1"]: j,
  //                   ["childs2"]: k,
  //                   ["childIndex"]: A,
  //                 });
  //               }
  //           }
  //       }
  //     }
  //   }
  for (let i = 0; i < categorymasterallList?.length; i++) {
    if (categorymasterallList[i]._id === parentId && childName == "Parent") {
      ChildrenArray.push(categorymasterallList[i]);
      NewArry.push({
        ["Cname"]: "Parent",
        ["childIndex"]: i,
      });
    }
    for (let j = 0; j < categorymasterallList[i]?.children?.length; j++) {
      if (
        categorymasterallList[i].children[j]._id === parentId &&
        childName == "Child1"
      ) {
        ChildrenArray.push(categorymasterallList[i].children[j]);
        ExpandArray.push(
          categorymasterallList[i]._id,
        );
        NewArry.push({
          ["Cname"]: "child-1",
          ["childIndex"]: j,
        });
      }
      for (
        let k = 0;
        k < categorymasterallList[i].children[j].children.length;
        k++
      ) {
        if (
          categorymasterallList[i].children[j].children[k]._id === parentId &&
          childName == "Child2"
        ) {
          ChildrenArray.push(categorymasterallList[i].children[j].children[k]);
          ExpandArray.push(
            categorymasterallList[i]._id,
            categorymasterallList[i].children[j]._id
          );
          NewArry.push({
            ["Cname"]: "child-2",
            ["childs1"]: j,
            ["childIndex"]: k,
          });
        }
        for (
          let a = 0;
          a < categorymasterallList[i].children[j].children[k].children.length;
          a++
        ) {
          if (
            categorymasterallList[i].children[j].children[k].children[a]._id ===
              parentId &&
            childName == "Child3"
          ) {
            ChildrenArray.push(
              categorymasterallList[i].children[j].children[k].children[a]
            );
            ExpandArray.push(
              categorymasterallList[i]._id,
              categorymasterallList[i].children[j]._id,
              categorymasterallList[i].children[j].children[k]._id
            );
            NewArry.push({
              ["Cname"]: "child-3",
              ["childs1"]: j,
              ["childs2"]: k,
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
                ?.children[b]._id === parentId &&
              childName == "Child4"
            ) {
              ChildrenArray.push(
                categorymasterallList[i].children[j].children[k].children[a]
                  .children[b]
              );
              ExpandArray.push(
                categorymasterallList[i]._id,
                categorymasterallList[i].children[j]._id,
                categorymasterallList[i].children[j].children[k]._id,
                categorymasterallList[i].children[j].children[k].children[a]._id,
              );
              NewArry.push({
                ["Cname"]: "child-4",
                ["childs1"]: j,
                ["childs2"]: k,
                ["childs3"]: a,
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
                  ?.children[b]?.children[c]._id === parentId &&
                childName == "Child5"
              ) {
                ChildrenArray.push(
                  categorymasterallList[i].children[j].children[k].children[a]
                    .children[b].children[c]
                );
                ExpandArray.push(
                  categorymasterallList[i]._id,
                  categorymasterallList[i].children[j]._id,
                  categorymasterallList[i].children[j].children[k]._id,
                  categorymasterallList[i].children[j].children[k].children[a]._id,
                  categorymasterallList[i].children[j].children[k].children[a].children[b]._id,
                );
                NewArry.push({
                  ["Cname"]: "child-5",
                  ["childs1"]: j,
                  ["childs2"]: k,
                  ["childs3"]: a,
                  ["childs4"]: b,
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
                    ?.children[b]?.children[c]?.children[d]?._id === parentId &&
                  childName == "Child6"
                ) {
                  ChildrenArray.push(
                    categorymasterallList[i].children[j].children[k].children[a]
                      .children[b].children[c].children[d]
                  );
                  ExpandArray.push(
                    categorymasterallList[i]._id,
                    categorymasterallList[i].children[j]._id,
                    categorymasterallList[i].children[j].children[k]._id,
                    categorymasterallList[i].children[j].children[k].children[a]._id,
                    categorymasterallList[i].children[j].children[k].children[a].children[b]._id,
                    categorymasterallList[i].children[j].children[k].children[a].children[b].children[c]._id,
                  );
                  NewArry.push({
                    ["Cname"]: "child-6",
                    ["childs1"]: j,
                    ["childs2"]: k,
                    ["childs3"]: a,
                    ["childs4"]: b,
                    ["childs5"]: c,
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
                      ?._id === parentId &&
                    childName == "Child7"
                  ) {
                    ChildrenArray.push(
                      categorymasterallList[i].children[j].children[k].children[
                        a
                      ].children[b].children[c].children[d].children[e]
                    );
                    ExpandArray.push(
                      categorymasterallList[i]._id,
                      categorymasterallList[i].children[j]._id,
                      categorymasterallList[i].children[j].children[k]._id,
                      categorymasterallList[i].children[j].children[k].children[a]._id,
                      categorymasterallList[i].children[j].children[k].children[a].children[b]._id,
                      categorymasterallList[i].children[j].children[k].children[a].children[b].children[c]._id,
                      categorymasterallList[i].children[j].children[k].children[a].children[b].children[c].children[d]._id,
                      );
                    NewArry.push({
                      ["Cname"]: "child-7",
                      ["childs1"]: j,
                      ["childs2"]: k,
                      ["childs3"]: a,
                      ["childs4"]: b,
                      ["childs5"]: c,
                      ["childs6"]: d,
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
                        ?.children[x]?._id === parentId &&
                      childName == "Child8"
                    ) {
                      ChildrenArray.push(
                        categorymasterallList[i].children[j].children[k]
                          .children[a].children[b].children[c].children[d]
                          .children[e].children[x]
                      );
                      ExpandArray.push(
                      categorymasterallList[i]._id,
                      categorymasterallList[i].children[j]._id,
                      categorymasterallList[i].children[j].children[k]._id,
                      categorymasterallList[i].children[j].children[k].children[a]._id,
                      categorymasterallList[i].children[j].children[k].children[a].children[b]._id,
                      categorymasterallList[i].children[j].children[k].children[a].children[b].children[c]._id,
                      categorymasterallList[i].children[j].children[k].children[a].children[b].children[c].children[d]._id,
                      categorymasterallList[i].children[j].children[k].children[a].children[b].children[c].children[d].children[e]._id,
                      );
                      NewArry.push({
                        ["Cname"]: "child-8",
                        ["childs1"]: j,
                        ["childs2"]: k,
                        ["childs3"]: a,
                        ["childs4"]: b,
                        ["childs5"]: c,
                        ["childs6"]: d,
                        ["childs7"]: e,
                        ["childIndex"]: x,
                      });
                    }

                    for (
                      let H = 0;
                      H <
                      categorymasterallList[i].children[j].children[k].children[
                        a
                      ]?.children[b]?.children[c]?.children[d]?.children[e]
                        ?.children[x]?.children.length;
                      H++
                    ) {
                      if (
                        categorymasterallList[i].children[j].children[k]
                          .children[a]?.children[b]?.children[c]?.children[d]
                          ?.children[e]?.children[x]?.children[H]?._id ===
                          parentId &&
                        childName == "Child9"
                      ) {
                        ChildrenArray.push(
                          categorymasterallList[i].children[j].children[k]
                            .children[a]?.children[b]?.children[c]?.children[d]
                            ?.children[e]?.children[x]?.children[H]
                        );
                        ExpandArray.push(
                          categorymasterallList[i]._id,
                          categorymasterallList[i].children[j]._id,
                          categorymasterallList[i].children[j].children[k]._id,
                          categorymasterallList[i].children[j].children[k].children[a]._id,
                          categorymasterallList[i].children[j].children[k].children[a].children[b]._id,
                          categorymasterallList[i].children[j].children[k].children[a].children[b].children[c]._id,
                          categorymasterallList[i].children[j].children[k].children[a].children[b].children[c].children[d]._id,
                          categorymasterallList[i].children[j].children[k].children[a].children[b].children[c].children[d].children[e]._id,
                          categorymasterallList[i].children[j].children[k].children[a].children[b].children[c].children[d].children[e].children[x]._id,
                          );
                        NewArry.push({
                          ["Cname"]: "child-9",
                          ["childs1"]: j,
                          ["childs2"]: k,
                          ["childs3"]: a,
                          ["childs4"]: b,
                          ["childs5"]: c,
                          ["childs6"]: d,
                          ["childs7"]: e,
                          ["childs8"]: x,
                          ["childIndex"]: H,
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
  }
  console.log("ChildrenArray-->>", ChildrenArray);

  const [checked, setchecked] = useState(ChildrenArray[0]?.checked);
  const [Name, setName] = useState(ChildrenArray[0]?.name);
  const [check, setCheck] = useState(true);
  const [description, setDescription] = useState(ChildrenArray[0]?.description);
  const [parent, setParent] = useState(ChildrenArray[0]?.parent);
  const [parenstId, setParentID] = useState(ChildrenArray[0]?.parentId);
  useEffect(() => {
    dispatch(CategoryMasterallLists());
  }, [dispatch]);
  const theme = createTheme();
  const UpdateHandler = (e) => {
    dispatch(
      updatecategoryMaster({
        id: ChildrenArray[0]?._id,
        name: Name,
        checked: checked,
        parent: parent,
        description: description,
        pId: parenstId,
        Cname: NewArry.length > 0 ? NewArry[0].Cname : null,
        childs1: NewArry.length > 0 ? NewArry[0].childs1 : null,
        childs2: NewArry.length > 0 ? NewArry[0].childs2 : null,
        childs3: NewArry.length > 0 ? NewArry[0].childs3 : null,
        childs4: NewArry.length > 0 ? NewArry[0].childs4 : null,
        childs5: NewArry.length > 0 ? NewArry[0].childs5 : null,
        childs6: NewArry.length > 0 ? NewArry[0].childs6 : null,
        childs7: NewArry.length > 0 ? NewArry[0].childs7 : null,
        childs8: NewArry.length > 0 ? NewArry[0].childs8 : null,
        childIndex: NewArry.length > 0 ? NewArry[0].childIndex : null,
        // catThumbnail: e.catThumbnail,
        // menuThumbnail: e.menuThumbnail
      })
    );
  };

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
            <Typography sx={{ fontSize: "13px" }}>Category</Typography>
          </Link>

          <Typography sx={{ fontSize: "13px" }}>Update Category</Typography>
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
              <Typography variant="h6" sx={{ textAlign: "center", mt: -5 }}>
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
                value={Name}
                onChange={(e) => setName(e.target.value)}
                inputProps={{ style: { fontSize: 13 } }}
              />
              {errors.name && (
                <span className="formError">Name is required</span>
              )}
              <Box sx={{ display: "flex" }}>
                <Box sx={{ mt: 5 }}>
                  <InputLabel sx={{ fontSize: 13, ml: 1 }}> Status</InputLabel>
                  {check === true ? (
                    <>
                      <Switch
                        className={classes.switch}
                        onChange={(e) => setchecked(e.target.checked)}
                        checked={checked}
                      />
                    </>
                  ) : (
                    <>
                      <Switch
                        onChange={(e) => setchecked(e.target.checked)}
                        checked={checked}
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
                    defaultExpanded={ExpandArray ? ExpandArray : ["root"]}
                    defaultExpandIcon={<ChevronRightIcon />}
                    // onChange={(nodeId) => setParent(nodeId)}
                    onNodeSelect={handleSelectedItems}
                    sx={{
                      border: "1px solid black",
                      p: 1,
                      ".MuiTreeItem-root": {
                        ".Mui-focused:not(.Mui-selected)": classes.focused,
                        ".Mui-selected, .Mui-focused.Mui-selected, .Mui-selected:hover":
                          classes.selected,
                      },
                    }}
                  >
                    {categorymasterallList?.map((item) => renderTree(item))}
                  </TreeView>
                </Box>
              </Box>

              <InputLabel sx={{ mt: 1, fontSize: 13 }}>Description</InputLabel>
              <TextareaAutosize
                minRows={3}
                placeholder="Type in here..."
                id="comment"
                style={{ width: "100%" }}
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
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
  );
}

export default TestFromScreen;
