import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";

import { Link } from "react-router-dom";

import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Divider } from "../../node_modules/@material-ui/core/index";
import { Box, Typography } from "@mui/material";
export default function SpecificViewScreen() {
  const params = useParams();
  const specificGrid = useSelector((state) => state.specificGrid);
  const { products } = specificGrid;
  const viewId = params.id;
  // console.log("viewId", viewId);
  const specificPrice = products?.find((x) => x._id === viewId);
  const [Viewcombination, setViewcombination] = useState(
    specificPrice?.combination
  );
  const [ViewdStartingDate, setViewStartingDate] = useState(
    specificPrice?.StartingDate
  );
  const [ViewEndDate, setViewEndDate] = useState(specificPrice?.EndDate);
  const [ViewCount, setViewCount] = useState(specificPrice?.Count);
  const [Viewdiscount, setViewdiscount] = useState(specificPrice?.discount);
  const [ViewTypeOfDiscount, setViewTypeOfDiscount] = useState(
    specificPrice?.TypeOfDiscount
  );
  return (
    <Box>
      <Typography sx={{ fontSize: "15px" }}>
        View Specific Price Details
      </Typography>
      <Box sx={{ display: "flex", flexDerection: "row", mt: 2 }}>
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
            to="/productadd/"
            style={{
              color: "rgba(0, 0, 0, 0.6)",
              fontSize: "15px",
            }}
          >
            <Typography>Products</Typography>
          </Link>
          <Typography sx={{ fontSize: "15px" }}>
            View Specific Price Details
          </Typography>
        </Breadcrumbs>
        <Divider sx={{ mt: 3 }} />
      </Box>
      <Box sx={{ mt: 10 }}>
        <Box
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
              onChange={(e) => setViewcombination(e.target.value)}
              value={Viewcombination}
              readonly
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
                  value={ViewdStartingDate}
                  onChange={(e) => setViewStartingDate(e.target.value)}
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
                value={ViewEndDate}
                onChange={(e) => setViewEndDate(e.target.value)}
              />
            </Typography>

            <Typography>
              <TextField
                defaultValue="1"
                id="startCount"
                name="startCount"
                autoComplete="off"
                value={ViewCount}
                onChange={(e) => setViewCount(e.target.value)}
              />
            </Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "bold",
                mt: "20px",
                m: 2,
                ml: 2,
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
                ml: 30,
              }}
            >
              Apply a discount of
            </Typography>
          </Box>
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
                value={Viewdiscount}
                onChange={(e) => setViewdiscount(e.target.value)}
              />
            </Typography>

            <FormControl sx={{ width: "30%", ml: 2 }}>
              <Select
                defaultValue={1}
                sx={{ height: 55 }}
                onChange={(e) => setViewTypeOfDiscount(e.target.value)}
                value={ViewTypeOfDiscount}
              >
                <MenuItem value={1}>
                  <CurrencyRupeeIcon />
                </MenuItem>
                <MenuItem sx={{ fontWeight: "bold" }} value={2}>
                  %
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
