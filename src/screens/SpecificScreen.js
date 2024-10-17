import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  productPriceList,
  specificPriceDetail,
  updateSpecificPrice,
} from "../actions/specificPriceAction";
import {
  SPECIFIC_PRICE_CONDITION_RESET,
  SPECIFIC_UPDATE_RESET,
} from "../constants/specificPriceConstants";
import { useParams } from "react-router-dom";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
function SpecificScreen() {
  const dispatch = useDispatch();
  const specificPrice = useSelector((state) => state.specificPrice);
  const { success: specificprice } = specificPrice;
  const SpecificUpdate = useSelector((state) => state.SpecificUpdate);
  const { success: successupdate } = SpecificUpdate;

  const [DiscountType, setDiscountType] = useState(1);

  // const specificGrid = useSelector((state) => state.specificGrid);
  // const { products } = specificGrid;

  const speciPriceList = useSelector((state) => state.speciPriceList);
  const { pricelist } = speciPriceList;
  console.log('pricelist', pricelist);

  const params = useParams();
  const EditId = params.id;

  const specificObj = pricelist?.find((item) => item.mprodId === EditId)
  console.log('specificObj', specificObj);

  const catalogProdView = useSelector((state) => state.catalogProdView);
  const { catProducts } = catalogProdView;

  let productdata;
  {
    catProducts?.map((state) => {
      productdata = state?._id
    })
  }


  // const [combination, setcombination] = useState("");
  const [subtype, setSubtype] = useState([]);
  useEffect(() => {
    if (specificprice) {
      dispatch({ type: SPECIFIC_PRICE_CONDITION_RESET });
    }
    if (successupdate) {
      dispatch({ type: SPECIFIC_UPDATE_RESET });
    }
    dispatch(productPriceList());
  }, [dispatch, specificprice, successupdate]);
  const filterOptions = createFilterOptions({
    matchFrom: "start",
    stringify: (option) => option.attributename,
  });

  const saveDetails = (e) => {
    dispatch(
      specificPriceDetail({
        mprodId: productdata,
        StartingDate: e.date1,
        EndDate: e.date2,
        Count: e.startCount,
        discount: e.discount,
        TypeOfDiscount: DiscountType,
        combination: subtype,
      })
    );
    window.confirm("Specific Price Details Saved Successfully!!");
    event.target.reset();
    setSubtype("");
  };
  const updatespecific = () => {
    dispatch(
      updateSpecificPrice({
        prodId: EditId,
        _id: specificObj._id,
        StartingDate: EditStartingDate,
        EndDate: EditEndDate,
        Count: EditCount,
        discount: Editdiscount,
        TypeOfDiscount: EditTypeOfDiscount,
        combination: Editcombination,
      })
    );
    window.confirm("Specific Price Details Updated Successfully!!");
    event.target.reset();
    setEditcombination("");
    setEditStartingDate("");
    setEditEndDate("");
    setEditCount("");
    setEditdiscount("");
    setEditTypeOfDiscount("");
  };
  const {
    register,
    handleSubmit: handleSubmit1,
    formState: { errors },
  } = useForm();


  // const specificPriceEdit = products?.find((x) => x._id === EditId);
  const [Editcombination, setEditcombination] = useState(
    specificObj?.combination
  );
  const [EditStartingDate, setEditStartingDate] = useState(
    specificObj?.StartingDate
  );
  const [EditEndDate, setEditEndDate] = useState(specificObj?.EndDate);
  const [EditCount, setEditCount] = useState(specificObj?.Count);
  const [Editdiscount, setEditdiscount] = useState(specificObj?.discount);
  const [EditTypeOfDiscount, setEditTypeOfDiscount] = useState(
    specificObj?.TypeOfDiscount
  );
  const AttributeValueList = useSelector((state) => state.AttributeValueList);
  const { attributeValuedetails } = AttributeValueList;

  return (
    <>
      {specificObj ? (
        <>
          <Box
            onSubmit={handleSubmit1(updatespecific)}
            component="form"
            sx={{
              width: "100%",
              height: "400px",
              border: "0.1px solid lightgray",
              mt: "20px",
              borderRadius: "5px",
              boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2);",
            }}
          >
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "bold",
                mt: "20px",
                m: 2,
              }}
            >
              Specific price conditions
            </Typography>

            <FormControl sx={{ width: "30%", ml: 2 }}>
              <Select
                defaultValue={"All Combination"}
                sx={{ height: 55 }}
                onChange={(e) => setEditcombination(e.target.value)}
                value={Editcombination}
              >
                <MenuItem value={"All Combination"}>All Combination</MenuItem>
                <MenuItem value={"extra Small"}>Size: extra small</MenuItem>
                <MenuItem value={"Small"}>Size:Small</MenuItem>
                <MenuItem value={"Medium"}>Size:Medium</MenuItem>
                <MenuItem value={"Large"}>Size:Large</MenuItem>
                <MenuItem value={"extraLarge"}>Size:extra Large</MenuItem>
              </Select>
            </FormControl>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            ></Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                m: 2,
                width: "70%",
              }}
            >
              <Typography sx={{ ml: 5 }}>Available From</Typography>
              <Typography>To</Typography>
              <Typography>Starting at</Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                m: 2,
                width: "80%",
              }}
            >
              <Typography
                sx={{
                  justifyContent: "space-between",
                  ml: 1,
                }}
              >
                <Typography sx={{ width: "100%" }}>
                  <TextField
                    id="date1"
                    type="date"
                    onChange={(e) => setEditStartingDate(e.target.value)}
                    value={EditStartingDate}
                  />
                </Typography>
              </Typography>
              <Typography
                sx={{
                  justifyContent: "space-between",
                }}
              >
                <TextField
                  id="date2"
                  type="date"
                  onChange={(e) => setEditEndDate(e.target.value)}
                  value={EditEndDate}
                />
              </Typography>

              <Typography>
                <TextField
                  defaultValue="1"
                  id="startCount"
                  name="startCount"
                  autoComplete="off"
                  error={errors.startCount}
                  onChange={(e) => setEditCount(e.target.value)}
                  value={EditCount}
                />
                {errors.startCount && (
                  <span className="formError">Starting Count is required</span>
                )}
              </Typography>
            </Box>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "bold",
                mt: "20px",
                m: 2,
              }}
            >
              Impact on Price
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "bold",
                mt: "20px",
                m: 2,
              }}
            >
              Apply a discount of
            </Typography>
            <Box
              sx={{
                fontSize: "14px",
                fontWeight: "bold",
                mt: "20px",
                m: 2,
                display: "flex",
              }}
            >
              <Typography>
                <TextField
                  defaultValue="0"
                  sx={{ width: "20rem", display: "flex" }}
                  id="discount"
                  name="discount"
                  autoComplete="off"
                  error={errors.discount}
                  onChange={(e) => setEditdiscount(e.target.value)}
                  value={Editdiscount}
                />
                {errors.discount && (
                  <span className="formError">discount is required</span>
                )}
              </Typography>

              <FormControl sx={{ width: "30%", ml: 2 }}>
                <Select
                  defaultValue={1}
                  sx={{ height: 55 }}
                  onChange={(e) => setEditTypeOfDiscount(e.target.value)}
                  value={EditTypeOfDiscount}
                >
                  <MenuItem value={1}>
                    <CurrencyRupeeIcon />
                  </MenuItem>
                  <MenuItem sx={{ fontWeight: "bold" }} value={2}>
                    %
                  </MenuItem>
                </Select>
              </FormControl>
              <Stack spacing={2} direction="row" sx={{ height: 50 }}>
                <Button
                  sx={{ height: 50, ml: 5 }}
                  variant="contained"
                  size="medium"
                  type="submit"
                >
                  Update
                </Button>
              </Stack>
            </Box>
          </Box>
        </>
      ) : (
        <Box
          onSubmit={handleSubmit1(saveDetails)}
          component="form"
          sx={{
            width: "100%",
            height: "400px",
            border: "0.1px solid lightgray",
            mt: "20px",
            borderRadius: "5px",
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2);",
          }}
        >
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: "bold",
              mt: "20px",
              m: 2,
            }}
          >
            Specific price conditions
          </Typography>

          <Box sx={{ display: "flex" }}>
            {" "}
            <Autocomplete
              sx={{ width: "100%", ml: 2, mr: 2 }}
              multiple={true}
              id="free-solo-demo"
              options={attributeValuedetails}
              getOptionLabel={(option) =>
                `${option.attributename} : ${option.value}`
              }
              // value={subtype}
              onChange={(event, newValue) => {
                {
                  newValue.map((item) => {
                    setSubtype([
                      ...subtype,
                      {
                        ["id"]: item?._id,
                        ["atributevalue"]: item?.value,
                        ["atributename"]: item?.attributename,
                      },
                    ]);
                  });
                }
              }}
              // onChange={(e) => setSubtype(e.target.value)}
              filterOptions={filterOptions}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Combination"
                  margin="normal"
                  variant="outlined"
                />
              )}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          ></Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              m: 2,
              width: "70%",
            }}
          >
            <Typography sx={{ ml: 5 }}>Available From</Typography>
            <Typography>To</Typography>
            <Typography>Starting at</Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              m: 2,
              width: "80%",
            }}
          >
            <Typography
              sx={{
                justifyContent: "space-between",
                ml: 1,
              }}
            >
              <Typography sx={{ width: "100%" }}>
                <TextField
                  id="date1"
                  type="date"
                  {...register("date1", {
                    required: true,
                  })}
                />
              </Typography>
            </Typography>
            <Typography
              sx={{
                justifyContent: "space-between",
              }}
            >
              <TextField
                id="date2"
                type="date"
                {...register("date2", {
                  required: true,
                })}
              />
            </Typography>

            <Typography>
              <TextField
                defaultValue="1"
                id="startCount"
                name="startCount"
                autoComplete="off"
                {...register("startCount", {
                  required: true,
                })}
                error={errors.startCount}
              />
              {errors.startCount && (
                <span className="formError">Starting Count is required</span>
              )}
            </Typography>
          </Box>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: "bold",
              mt: "20px",
              m: 2,
            }}
          >
            Impact on Price
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: "bold",
              mt: "20px",
              m: 2,
            }}
          >
            Apply a discount of
          </Typography>
          <Box
            sx={{
              fontSize: "14px",
              fontWeight: "bold",
              mt: "20px",
              m: 2,
              display: "flex",
            }}
          >
            <Typography>
              <TextField
                defaultValue="0"
                sx={{ width: "20rem", display: "flex" }}
                id="discount"
                name="discount"
                autoComplete="off"
                {...register("discount", {
                  required: true,
                })}
                error={errors.discount}
              />
              {errors.discount && (
                <span className="formError">discount is required</span>
              )}
            </Typography>

            <FormControl sx={{ width: "30%", ml: 2 }}>
              <Select
                defaultValue={1}
                sx={{ height: 55 }}
                onChange={(e) => setDiscountType(e.target.value)}
                value={DiscountType}
              >
                <MenuItem value={1}>
                  <CurrencyRupeeIcon />
                </MenuItem>
                <MenuItem sx={{ fontWeight: "bold" }} value={2}>
                  %
                </MenuItem>
              </Select>
            </FormControl>
            <Stack spacing={2} direction="row">
              <Button
                sx={{ height: 50, ml: 5 }}
                variant="contained"
                size="medium"
                type="submit"
              >
                Save
              </Button>
            </Stack>
          </Box>
        </Box>
      )}
    </>
  );
}
export default SpecificScreen;
