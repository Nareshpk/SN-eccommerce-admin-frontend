/* eslint-disable no-unused-vars */
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Avatar, Box, CardMedia } from "@mui/material";
import { createFilterOptions } from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Dialog from "@mui/material/Dialog";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Accordion, AccordionSummary } from "../../node_modules/@material-ui/core/index";
import { makeStyles } from "../../node_modules/@material-ui/styles/index";
import { Autocomplete } from "../../node_modules/@mui/material/index";
import { useNavigate } from "../../node_modules/react-router-dom/dist/index";
import { AttributeMasterListDetails } from "../actions/AttributeActions";
import { CombotaxDetails, deleteCombolist } from "../actions/ComboAction";
import { CombinationChildList, CombinationListValue, saveCombination, updateCatStock } from "../actions/catProductAction";
import { COMBO_DELETE_RESET, COMBO_UPDATE_RESET } from "../constants/ComboConstants";
import { COMBINATION_SAVE_RESET, COMBINATION_UPDATE_RESET } from "../constants/catBrandConstant";
export default function CombinationScreen(proddetails) {
    const {
        // register: register1,
        handleSubmit: handleSubmit1,
        // formState: { errors: errors1 },
    } = useForm();
    const dispatch = useDispatch();

    const params = useParams();
    const Editcombid = params.id;

    // *************************************************************


    const useStyles = makeStyles(() => ({
        label: {
            "& .css-1hv8oq8-MuiStepLabel-label.Mui-active": { fontSize: "14px" },
            "& .css-1hv8oq8-MuiStepLabel-label.Mui-disabled": { fontSize: "14px" },
            "& .Mui-disabled .MuiStepIcon-root": { fontSize: "30px" },
            "& .Mui-active .MuiStepIcon-root": { fontSize: "30px" },
            "& .css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root.Mui-completed": {
                fontSize: "30px",
                color: "green",
            },
            "& .css-1hv8oq8-MuiStepLabel-label.Mui-completed": { fontSize: "14px" },
        },
        cssLabel: {
            "&.css-1pysi21-MuiFormLabel-root-MuiInputLabel-root": {
                fontSize: "14px",
            },
            "& .css-1pysi21-MuiFormLabel-root-MuiInputLabel-root.Mui-focused": {
                fontSize: "14px",
            },
        },
        cssFocused: {
            "& .css-1pysi21-MuiFormLabel-root-MuiInputLabel-root.Mui-focused": {
                fontSize: "14px",
            },
        },
        selected: {
            bgcolor: "red",
            color: "white",
        },
        root: {
            width: '30%',
            padding: "10px",
            // minHeight: 10,
            // maxHeight: 10,
            // overflowY: 'scroll',
        },
    }));

    const classes = useStyles();

    const catalogProd = useSelector((state) => state.catalogProd);
    const { catProducts } = catalogProd;

    const prodctObj = catProducts?.find((item) => item?._id === Editcombid);

    const [newcombination, setNewcombination] = useState(prodctObj?.combination);

    const [editproId, seteditproId] = useState(prodctObj?._id);

    const AttributeValueList = useSelector((state) => state.AttributeValueList);
    const { attributeValuedetails } = AttributeValueList;

    const catCom = useSelector((state) => state.catCom);
    const { success: successcom } = catCom;

    const catComUpdate = useSelector((state) => state.catComUpdate);
    const { success: updatechildcom } = catComUpdate;

    const ComboDelete = useSelector((state) => state.ComboDelete);
    const { success: combodelete } = ComboDelete;


    const ComboUpdate = useSelector((state) => state.ComboUpdate);
    const { success: updateCombo } = ComboUpdate;

    const Combinationchild = useSelector((state) => state.Combinationchild);
    const { childComination } = Combinationchild;

    const attributeMasterList = useSelector((state) => state.attributeMasterList);
    const { attributeMasterdetails } = attributeMasterList;

    const catProductSave = useSelector((state) => state.catProductSave);
    const { productId } = catProductSave;

    // ************************combination*********************************
    const [combination, setCombination] = useState("Simple Product");

    const [CombStock, setCombStock] = useState("");
    const [CombStockId, setCombStockId] = useState("");
    const [Comopen, setComOpen] = useState(false);
    const [ComnewImg, setComNewimg] = useState();
    const [gridComopen, setgridComOpen] = useState(0);
    const handleChangInput = (e) => {
        let value = e.target.value;
        setCombStock([...CombStock, value]);
    };

    //  ************************combination section Start******************************
    const [inputValue, setInputValue] = useState("");
    let subtype = [];
    let defaultOption = [];
    const [state, setState] = useState();
    {
        attributeValuedetails
            ?.filter((item) => {
                return item.allId === inputValue;
            })
            ?.map((item) => {
                defaultOption = [
                    ...defaultOption,
                    {
                        ["_id"]: item?._id,
                        ["attributeVlaue"]: item?.attributeVlaue,
                        ["value"]: item?.value,
                        ["attributename"]: item?.attributename,
                        ["color"]: item?.color,
                        ["allId"]: item?.allId,
                    },
                ];
            });
    }
    const [message, setMessage] = useState([]);
    const handleChange = (event, atttr) => {
        var updatedList = [...message];
        if (event.target.checked) {
            updatedList = [...message, {
                ["_id"]: atttr?._id,
                ["attributeVlaue"]: atttr?.attributeVlaue,
                ["value"]: atttr?.value,
                ["attributename"]: atttr?.attributename,
                ["color"]: atttr?.color,
                ["allId"]: atttr?.allId,
            },];
        } else {
            let index = message.findIndex(item => {
                return item._id == atttr?._id
            })
            updatedList.splice(index, 1);
        }
        setMessage(updatedList);
    };

    const combinationhandleChange = (event, value) => {
        {
            value?.map((item) => {
                setInputValue(item?._id);
            });
        }
        setState(value);
        // setState(value)
    };
    if (defaultOption?.length < state?.length) {
        for (let i = 0; i < state?.length; i++) {
            defaultOption.push(state[i]);
        }
    }
    if (defaultOption) {
        for (let i = 0; i < defaultOption.length; i++) {
            let item = {
                ["id"]: defaultOption[i]?._id,
                ["atributevalue"]: defaultOption[i]?.value,
                ["atributename"]: defaultOption[i]?.attributename,
                ["color"]: defaultOption[i]?.color,
                ["allId"]: defaultOption[i]?.allId,
            };
            subtype.push(item);
        }
    }

    const CreateCombination = () => {
        if (combination === "true") {
            dispatch(
                saveCombination({
                    catlogCombination: subtype,
                    product: productId?._id,
                })
            );
            window.confirm("Combination Generate  SuccessFully!");
            setgridComOpen(1);
        }
        // if (newcombination === "true") {
        dispatch(
            saveCombination({
                catlogCombination: subtype,
                proId: editproId,
            })
        );
        window.confirm("Combination Generate  SuccessFully!!!");
        event.target.reset();
        seteditproId("");
        setgridComOpen(1);
        // }
    };

    const HandlecombSave = () => {
        dispatch(
            updateCatStock({
                StockId: CombStockId,
                Stock: CombStock,
            })
        );
        window.confirm("Combination Stock Save SuccessFully!!");
        setCombStock("");
        setCombStockId("");
    };


    // **********************COMINATION SCREEN**************************************

    function getnumId(comproducts) {
        return `${comproducts.row.CombinationId
            ? catProducts?.find((x) => x?._id == comproducts.row.CombinationId)
                ?.prodname
            : ""
            }`;
    }

    const navigate = useNavigate();
    const editCombination = (obj) => {
        navigate(`/comboEdit/${obj.id}`);
        dispatch(CombotaxDetails(obj.CombinationId));
    };

    const deleteHandlerstock = (id) => {
        if (window.confirm("Are you sure to delete?")) {
            dispatch(deleteCombolist(id));
        }
    };

    const filterOptions = createFilterOptions({
        matchFrom: "start",
        stringify: (option) => option.attributename,
    });

    const ComList = childComination
        ?.filter((item) => {
            return item.CombinationId == productId?._id;
        })
        ?.map((item) => {
            return {
                id: item._id,
                comname: item.comname,
                comvalue: item.comvalue,
                color: item.color,
                comstock: item.comstock,
                CombinationId: item.CombinationId,
            };
        });

    const assemList = childComination
        ?.filter((item) => {
            return item.CombinationId === prodctObj?._id;
        })
        ?.map((item) => {
            return {
                id: item._id,
                comname: item.comname,
                comvalue: item.comvalue,
                color: item.color,
                comstock: item.comstock,
                CombinationId: item.CombinationId,
                filename: item.filename,
            };
        });


    const handleNewcombination = (event) => {
        if (newcombination == "Simple Product") {
            setNewcombination(event.target.value);
        } else {
            setNewcombination(event.target.value);
        }
    };

    const handleChangecombination = (event) => {
        if (combination == "Simple Product") {
            setCombination(event.target.value);
        } else {
            setCombination(event.target.value);
        }
    };

    useEffect(() => {
        if (successcom) {
            dispatch({ type: COMBINATION_SAVE_RESET });
        }
        if (combodelete) {
            dispatch({ type: COMBO_DELETE_RESET });
        }
        if (updatechildcom) {
            dispatch({ type: COMBINATION_UPDATE_RESET })
        }
        if (updateCombo) {
            dispatch({ type: COMBO_UPDATE_RESET })
        }
        // dispatch(AttributeValueListDetails());
        dispatch(CombinationListValue());
        dispatch(CombinationChildList());
        dispatch(AttributeMasterListDetails());
    }, [dispatch, successcom, combodelete, updatechildcom, updateCombo]);
    const handleComClose = () => {
        setComOpen(false);
    };

    const handleComClickOpen = (e) => {
        setComNewimg(e.target.src);
        setComOpen(true);
    };

    const combinationcolumns = [
        {
            field: "_id",
            headerName: "ID",
            flex: 1,
            headerClassName: "super-app-theme--header",
            renderCell: (index) => index.api.getRowIndex(index.row.id) + 1,
        },
        {
            field: "imageId",
            headerName: "Product Image",
            flex: 1,
            headerClassName: "super-app-theme--header",
            renderCell: (params) => {
                return (
                    <Avatar
                        onClick={handleComClickOpen}
                        sx={{ height: "50px", width: "50px", cursor: "pointer" }}
                        src={`/api/uploads/showsubimglatest/${params?.row?.filename}`}
                        alt="avatar"
                    />
                );
            },
        },

        {
            field: "",
            headerName: "Product Name",
            flex: 1,
            headerClassName: "super-app-theme--header",
            valueGetter: getnumId,
        },

        {
            field: "comname",
            headerName: "Attribute Name",
            flex: 1,
            headerClassName: "super-app-theme--header",
        },
        {
            field: "comvalue",
            headerName: "Attribute Type",
            flex: 1,
            headerClassName: "super-app-theme--header",
            // valueGetter: getnumId,
        },
        {
            field: "color",
            headerName: "Attribute Color",
            flex: 1,
            headerClassName: "super-app-theme--header",
            // valueGetter: getnumId,
        },
        {
            field: "comstock",
            headerName: "Stock",
            flex: 1,
            headerClassName: "super-app-theme--header",
            // valueGetter: getnumId,
        },
        {
            field: "Edit",
            headerName: "Stock",
            flex: 1,
            headerClassName: "super-app-theme--header",
            renderCell: (params) => (
                <TextField
                    size="small"
                    Value={CombStock}
                    onChange={(event) => handleChangInput(event)}
                    onClick={() => setCombStockId([...CombStockId, params.row.id])}
                    // onChangeinc={(event) => handleChangeUpdate(event)}
                    // name={index}
                    id="Stock"
                    type="name"
                />
            ),
        },
        {
            field: "actions",
            headerName: "ACTIONS",
            flex: 1,
            headerClassName: "super-app-theme--header",
            renderCell: (params) => (
                <>
                    <EditIcon
                        onClick={() => editCombination(params.row)}
                        style={{
                            fontSize: 15,
                            margin: 20,
                            cursor: "pointer",
                        }}
                    />

                    <DeleteIcon
                        onClick={() => deleteHandlerstock(params.row.id)}
                        style={{ color: "#FF3333", fontSize: 20, cursor: "pointer" }}
                    />
                </>
            ),
        },
    ];

    return (
        <>
            {newcombination === "true" ? (<>
                <Grid container>
                    <Grid item xs>
                        <Box
                            component="form"
                            onSubmit={handleSubmit1(CreateCombination)}
                        >
                            <Box
                                sx={{ display: "flex" }}
                            >
                                <Autocomplete
                                    sx={{
                                        width: "69%",
                                    }}
                                    size="small"
                                    multiple={true}
                                    id="free-solo-demo"
                                    options={attributeValuedetails}
                                    getOptionLabel={(option) =>
                                        `${option.attributename} : ${option.value} `
                                    }
                                    // value={subtype}
                                    // onChange={(event, newValue) => {
                                    //   {
                                    //     newValue?.map((item) => {
                                    //       // console.log("itemmmmmmm", item)
                                    //       setSubtype([
                                    //         ...subtype,
                                    //         {
                                    //           ["id"]: item?._id,
                                    //           ["atributevalue"]: item?.value,
                                    //           ["atributename"]: item?.attributename,
                                    //           ["color"]: item?.color,
                                    //         },
                                    //       ]);
                                    //     });
                                    //   }
                                    // }}
                                    // onChange={(e) => setSubtype(e.target.value)}
                                    filterOptions={filterOptions}
                                    renderInput={(params) => (
                                        <TextField
                                            InputProps={{
                                                style: { fontSize: 13 },
                                            }}
                                            size="small"
                                            {...params}
                                            label="Combination"
                                            margin="normal"
                                            variant="outlined"
                                        />
                                    )}
                                />
                                <div className={classes.root}>
                                    {attributeMasterdetails?.map((catMaster, key) => (
                                        <>
                                            <Accordion>
                                                <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon />}
                                                    aria-label="Expand"
                                                    aria-controls="additional-actions1-content"
                                                    id="additional-actions1-header"
                                                >
                                                    <span>
                                                        <span> {catMaster?.attributename}</span>
                                                    </span>
                                                </AccordionSummary>
                                                {attributeValuedetails?.filter((attributeValue) => {
                                                    return catMaster?._id === attributeValue?.attributeVlaue
                                                }).map((atttr) => (
                                                    <>
                                                        < AccordionSummary>
                                                            <FormControlLabel
                                                                control={<Checkbox
                                                                    disabled={false} />}
                                                                label={atttr.value}
                                                                onChange={event => handleChange(event, atttr)}
                                                            >
                                                            </FormControlLabel>
                                                        </AccordionSummary>
                                                    </>
                                                ))}
                                            </Accordion>
                                        </>
                                    ))}
                                </div>
                            </Box>
                            <Button
                                variant="contained"
                                sx={{ mr: 20 }}
                                type="submit"
                            >
                                Generate
                            </Button>
                        </Box>

                        <Box style={{ height: 560, width: "100%" }}>
                            <DataGrid
                                sx={{
                                    boxShadow: 10,
                                    borderRadius: 0,
                                    m: 2,
                                }}
                                columns={combinationcolumns}
                                rows={assemList ? assemList : ""}
                                getRowId={(rows) => rows.id}
                                VerticalAlignment="Center"
                                rowHeight={64}
                                pageSize={10}
                                rowsPerPageOptions={[10]}
                            />

                            <Button
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                onClick={HandlecombSave}
                                type="Click"
                            >
                                Save
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </>) : (<>
                <Grid container>
                    <Grid item xs>
                        {gridComopen === 1 ? (
                            <Box style={{ height: 560, width: "100%" }}>
                                <DataGrid
                                    sx={{
                                        boxShadow: 10,
                                        borderRadius: 0,
                                        m: 2,
                                    }}
                                    columns={combinationcolumns}
                                    rows={ComList ? ComList : ""}
                                    getRowId={(rows) => rows.id}
                                    VerticalAlignment="Center"
                                    rowHeight={64}
                                    pageSize={10}
                                    rowsPerPageOptions={[10]}
                                // checkboxSelection
                                />
                                <Box>
                                    <Dialog
                                        // fullWidth={fullWidth}
                                        // maxWidth={maxWidth}
                                        open={Comopen}
                                        onClick={handleComClose}
                                        sx={{
                                            width: 700,
                                            hight: 700,
                                        }}
                                    >
                                        <Box>
                                            <CardMedia
                                                sx={{
                                                    cursor: "pointer",
                                                    justifycontent: "space-between",
                                                }}
                                                component="img"
                                                // height="200"
                                                image={ComnewImg}
                                            // alt={"subimgnew.filename"}
                                            // onMouseOver={handleChangeimage}
                                            />
                                        </Box>
                                    </Dialog>
                                </Box>
                                <Button
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                    onClick={HandlecombSave}
                                    type="Click"
                                >
                                    Save
                                </Button>
                            </Box>
                        ) : (
                            <>
                                {subtype?.length > 0 ? (
                                    <Box
                                        // sx={{ width: "30%" }}
                                        component="form"
                                        onSubmit={handleSubmit1(CreateCombination)}
                                    >
                                        <Box
                                            sx={{ display: "flex" }}
                                        >
                                            <Autocomplete
                                                sx={{
                                                    width: "69%",
                                                }}
                                                size="small"
                                                multiple={true}
                                                id="free-solo-demo"
                                                options={attributeValuedetails}
                                                value={defaultOption}
                                                autoSelect={true}
                                                getOptionLabel={(option) =>
                                                    `${option?.attributename} : ${option?.value} `
                                                }
                                                onChange={(event, value) =>
                                                    combinationhandleChange(event, value)}
                                                filterOptions={filterOptions}
                                                renderInput={(params) => (
                                                    <TextField
                                                        InputProps={{
                                                            style: { fontSize: 13 },
                                                        }}
                                                        size="small"
                                                        {...params}
                                                        label="Combination"
                                                        margin="normal"
                                                        variant="outlined"
                                                    />
                                                )}
                                            />
                                            <div className={classes.root}>
                                                {attributeMasterdetails?.map((catMaster, key) => (
                                                    <>
                                                        <Accordion>
                                                            <AccordionSummary
                                                                expandIcon={<ExpandMoreIcon />}
                                                                aria-label="Expand"
                                                                aria-controls="additional-actions1-content"
                                                                id="additional-actions1-header"
                                                            >
                                                                <span>
                                                                    <span> {catMaster?.attributename}</span>
                                                                </span>
                                                            </AccordionSummary>
                                                            {attributeValuedetails?.filter((attributeValue) => {
                                                                return catMaster?._id === attributeValue?.attributeVlaue
                                                            }).map((atttr) => (
                                                                <>
                                                                    < AccordionSummary>
                                                                        <FormControlLabel
                                                                            control={<Checkbox
                                                                                disabled={false} />}
                                                                            label={atttr.value}
                                                                            onChange={event => handleChange(event, atttr)}
                                                                        >
                                                                        </FormControlLabel>
                                                                    </AccordionSummary>
                                                                </>
                                                            ))}
                                                        </Accordion>
                                                    </>
                                                ))}
                                            </div>
                                        </Box>
                                        <Button
                                            variant="contained"
                                            sx={{ mr: 20 }}
                                            type="submit"
                                        >
                                            Generate
                                        </Button>
                                    </Box>
                                ) : (
                                    <Box
                                        // sx={{ width: "30%" }}
                                        component="form"
                                        onSubmit={handleSubmit1(CreateCombination)}
                                    >
                                        <Box
                                            sx={{ display: "flex" }}
                                        >
                                            <Autocomplete
                                                sx={{
                                                    width: "69%",
                                                }}
                                                size="small"
                                                multiple={true}
                                                id="free-solo-demo"
                                                options={attributeValuedetails}
                                                value={defaultOption}
                                                autoSelect={true}
                                                getOptionLabel={(option) =>
                                                    `${option?.attributename} : ${option?.value} `
                                                }
                                                onChange={(event, value) => combinationhandleChange(event, value)}
                                                filterOptions={filterOptions}
                                                renderInput={(params) => (
                                                    <TextField
                                                        InputProps={{
                                                            style: { fontSize: 13 },
                                                        }}
                                                        size="small"
                                                        {...params}
                                                        label="Combination"
                                                        margin="normal"
                                                        variant="outlined"
                                                    />
                                                )}
                                            />
                                            <div className={classes.root}>
                                                {attributeMasterdetails?.map((catMaster, key) => (
                                                    <>
                                                        <Accordion>
                                                            <AccordionSummary
                                                                expandIcon={<ExpandMoreIcon />}
                                                                aria-label="Expand"
                                                                aria-controls="additional-actions1-content"
                                                                id="additional-actions1-header"
                                                            >
                                                                <span>
                                                                    <span> {catMaster?.attributename}</span>
                                                                </span>
                                                            </AccordionSummary>
                                                            {attributeValuedetails?.filter((attributeValue) => {
                                                                return catMaster?._id === attributeValue?.attributeVlaue
                                                            }).map((atttr) => (
                                                                <>
                                                                    < AccordionSummary>
                                                                        <FormControlLabel
                                                                            control={<Checkbox />}
                                                                            label={atttr.value}
                                                                            onChange={event => handleChange(event, atttr)}
                                                                        >
                                                                        </FormControlLabel>
                                                                    </AccordionSummary>
                                                                </>
                                                            ))}
                                                        </Accordion>
                                                    </>
                                                ))}
                                            </div>
                                        </Box>
                                        <Button
                                            variant="contained"
                                            sx={{ mt: 3, mr: 20 }}
                                            type="submit"
                                        >
                                            Generate
                                        </Button>
                                    </Box>
                                )}
                            </>
                        )}
                    </Grid>
                </Grid>
            </>)
            }

        </>
    );
}
