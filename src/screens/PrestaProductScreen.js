import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { IconButton } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import InfoIcon from "@mui/icons-material/Info";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import InputAdornment from "@mui/material/InputAdornment";
import MenuItem from "@mui/material/MenuItem";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";
import { DropzoneArea } from "material-ui-dropzone";
import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormGroup from "@mui/material/FormGroup";
import Select from "@mui/material/Select";

function PrestaProductScreen() {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
  };

  const Combinations = `
  Combinations are the different variations of a product, with attributes like its size, 
  weight or color taking different values. Does your product require combinations?
`;

  const reference = `
  Your reference code for this product. Allowed special characters: .-_#.
`;

  const quantity = `
  How many products should be available for sale?
`;

  const price = `
  This is the net sales price for your customers. 
  The retail price will automatically be calculated using the applied tax rate.
`;
  price;

  const categories = `
  Where should the product be available on your site?
   The main category is where the product appears by default: this is the category which is seen in the product page's URL.
   Disabled categories are written in italics.
`;

  const newcategories = `
If you want to quickly create a new category, you can do it here.
 Don’t forget to then go to the Categories page to fill in the needed details (description, image, etc.).
 A new category will not automatically appear in your shop's menu, please read the Help about it.
`;

  const sale = `
The minimum quantity required to buy this product (set to 1 to disable this feature).
 E.g.: if set to 3,
 customers will be able to purchase the product only if they take at least 3 in quantity.
`;

  const level = `
The email will be sent to all the users who have the right to run the stock page.
 To modify the permissions, go to Advanced Parameters > Team
`;

  const delivery = `
Display delivery time for a product is advised for merchants selling in Europe to comply with the local laws.
`;

  const shipping = `
If a carrier has a tax, it will be added to the shipping fees. Does not apply to free shipping.
`;

  const retail = `
This is the net sales price for your customers. The retail price will automatically be calculated using the applied tax rate.
`;

  const unit = `
If your country's pricing laws or regulations require mandatory information about the base price of a unit,
 fill in the base price here (for example, price per kg, per liter, per meter).
`;

  const Cost = `
The cost price is the price you paid for the product. Do not include the tax.
 It should be lower than the retail price: the difference between the two will be your margin.
`;

  const Specific = `
You can set specific prices for customers belonging to different groups, different countries, etc.
`;

  const Priority = `
Sometimes one customer can fit into multiple price rules.
 Priorities allow you to define which rules apply first.
`;
  return (
    <Box>
      <Box>
        <Tabs value={tabIndex} onChange={handleTabChange}>
          <Tab label='Basic Settings' />
          <Tab label='Quantities' />
          <Tab label='Shipping' />
          <Tab label='Pricing' />
          <Tab label='SEO' />
          <Tab label='Options' />
        </Tabs>
      </Box>
      <Box sx={{ padding: 2 }}>
        {tabIndex === 0 && (
          <Grid container spacing={3}>
            <Grid item xs={8}>
              <Box>
                <Box
                  sx={{
                    border: "2px solid gray",
                    width: "100%",
                    height: "250px",
                  }}
                >
                  <DropzoneArea />
                </Box>

                <Typography
                  sx={{ mt: "50px", fontSize: "20px", fontWeight: "bold" }}
                >
                  Summary
                </Typography>

                <Box sx={{ mt: "40px" }}>
                  <CKEditor
                    editor={ClassicEditor}
                    data='<p>Hello from CKEditor 5!</p>'
                    onReady={(editor) => {
                      console.log(
                        "CKEditor5 React Component is ready to use!",
                        editor
                      );
                    }}
                    onChange={(event, editor) => {
                      const data = editor.getData();
                      console.log({ event, editor, data });
                    }}
                  />
                </Box>

                <Typography
                  sx={{ mt: "50px", fontSize: "20px", fontWeight: "bold" }}
                >
                  Description
                </Typography>

                <Box sx={{ mt: "40px" }}>
                  <CKEditor
                    editor={ClassicEditor}
                    data='<p>Hello from CKEditor 5!</p>'
                    onReady={(editor) => {
                      console.log(
                        "CKEditor5 React Component is ready to use!",
                        editor
                      );
                    }}
                    onChange={(event, editor) => {
                      const data = editor.getData();
                      console.log({ event, editor, data });
                    }}
                  />
                </Box>

                <Typography
                  sx={{ mt: "50px", fontSize: "20px", fontWeight: "bold" }}
                >
                  Features
                </Typography>

                <Typography>
                  <Button
                    sx={{ mt: "20px" }}
                    variant='outlined'
                    startIcon={<AddCircleIcon />}
                  >
                    Add a feature
                  </Button>
                </Typography>

                <Typography>
                  <Button
                    sx={{ mt: "20px" }}
                    variant='outlined'
                    startIcon={<AddCircleIcon />}
                  >
                    Add a brand
                  </Button>
                </Typography>

                <Typography
                  sx={{ mt: "40px", fontSize: "20px", fontWeight: "bold" }}
                >
                  Related Product
                </Typography>

                <Typography>
                  <Button
                    sx={{ mt: "20px" }}
                    variant='outlined'
                    startIcon={<AddCircleIcon />}
                  >
                    Add a related product
                  </Button>
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Typography
                sx={{ mt: "0px", fontSize: "20px", fontWeight: "bold" }}
              >
                Combinations
                <Tooltip title={Combinations}>
                  <InfoIcon />
                </Tooltip>
              </Typography>

              <FormControl>
                <RadioGroup
                  aria-labelledby='demo-radio-buttons-group-label'
                  name='radio-buttons-group'
                >
                  <FormControlLabel
                    value='PayPal'
                    control={<Radio />}
                    label='Simple Product'
                  />
                  <FormControlLabel
                    value='Stripe'
                    control={<Radio />}
                    type='radio'
                    label='Product with combinations'
                  />
                </RadioGroup>
              </FormControl>

              <Typography
                sx={{ mt: "20px", fontSize: "20px", fontWeight: "bold" }}
              >
                Reference
                <Tooltip title={reference}>
                  <InfoIcon />
                </Tooltip>
              </Typography>

              <Typography>
                <TextField fullWidth id='margin-normal' margin='normal' />
              </Typography>

              <Typography
                sx={{ mt: "20px", fontSize: "20px", fontWeight: "bold" }}
              >
                Quantity
                <Tooltip title={quantity}>
                  <InfoIcon />
                </Tooltip>
              </Typography>

              <Typography>
                <TextField
                  label='0'
                  fullWidth
                  id='margin-normal'
                  margin='normal'
                />
              </Typography>

              <Typography>
                Advanced Settings in <ExitToAppIcon />
                <span style={{ color: "blue" }}>Quantities</span>
              </Typography>

              <Typography
                sx={{ mt: "30px", fontSize: "20px", fontWeight: "bold" }}
              >
                Price
                <Tooltip title={price}>
                  <InfoIcon />
                </Tooltip>
              </Typography>

              <Box sx={{ display: "flex", mt: "20px" }}>
                <TextField
                  label='Tax excluded'
                  id='outlined-start-adornment'
                  sx={{ m: 1 }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>€</InputAdornment>
                    ),
                  }}
                />

                <TextField
                  label='Tax included'
                  id='outlined-start-adornment'
                  sx={{ m: 1 }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>€</InputAdornment>
                    ),
                  }}
                />
              </Box>

              <TextField
                select
                label='Tax Rule'
                fullWidth
                id='margin-normal'
                margin='normal'
              >
                <MenuItem>FR Taux standard (20%)</MenuItem>
              </TextField>

              <Typography>
                Advanced Settings in <ExitToAppIcon />
                <span style={{ color: "blue" }}>Pricing</span>
              </Typography>

              <Typography
                sx={{ mt: "30px", fontSize: "20px", fontWeight: "bold" }}
              >
                categories
                <Tooltip title={categories}>
                  <InfoIcon />
                </Tooltip>
              </Typography>

              <Box
                sx={{
                  width: "100%",
                  height: 400,
                  borderRadius: "2px",
                  border: "1px solid black",
                  mt: "30px",
                }}
              >
                <Typography sx={{ m: 2 }}>
                  <TextField
                    fullWidth
                    id='standard-bare'
                    variant='outlined'
                    defaultValue='Search Categories'
                    InputProps={{
                      endAdornment: (
                        <IconButton>
                          <SearchOutlined />
                        </IconButton>
                      ),
                    }}
                  />
                </Typography>

                <Typography sx={{ m: 2, fontSize: "17px", fontWeight: "bold" }}>
                  ASSOCIATED CATEGORIES
                </Typography>

                <Typography sx={{ m: 2 }}>
                  <TextField fullWidth />
                </Typography>
              </Box>

              <Typography
                sx={{ mt: "30px", fontSize: "20px", fontWeight: "bold" }}
              >
                Create a new category
                <Tooltip title={newcategories}>
                  <InfoIcon />
                </Tooltip>
              </Typography>

              <Typography>
                <Button
                  sx={{ mt: "20px" }}
                  variant='outlined'
                  startIcon={<AddCircleIcon />}
                >
                  Create a Category
                </Button>
              </Typography>
            </Grid>
          </Grid>
        )}
        {tabIndex === 1 && (
          <Grid container>
            <Grid item xs={12}>
              <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
                Quantities
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Typography sx={{ mt: "20px", width: "100%" }}>
                  Quantity
                </Typography>
                <Typography sx={{ mt: "20px", width: "100%" }}>
                  Minimum quantity for sale
                  <Tooltip title={sale}>
                    <InfoIcon />
                  </Tooltip>
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Typography sx={{ mt: "20px", width: "100%" }}>
                  <TextField size='small' defaultValue='0' />
                </Typography>
                <Typography sx={{ mt: "20px", width: "100%" }}>
                  <TextField size='small' defaultValue='1' />
                </Typography>
              </Box>

              <Typography
                sx={{ fontSize: "20px", fontWeight: "bold", mt: "30px" }}
              >
                Stock
              </Typography>

              <Box>
                <Typography sx={{ mt: "20px" }}>Stock Location</Typography>
                <Typography sx={{ mt: "20px" }}>
                  <TextField size='small' />
                </Typography>
              </Box>

              <Box>
                <Typography sx={{ mt: "20px", width: "100%" }}>
                  Low Stock Level
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                  width: "100%",
                }}
              >
                <Typography sx={{ mt: "20px", width: "100%" }}>
                  <TextField size='small' />
                </Typography>

                <Typography
                  sx={{
                    mt: "20px",
                    wordWrap: "break-word",
                    width: "100%",
                    fontSize: "15px",
                  }}
                >
                  <Checkbox /> Send me an email when the quantity is below or
                  equals this level
                  <Tooltip title={level}>
                    <InfoIcon />
                  </Tooltip>
                </Typography>
              </Box>

              <Typography
                sx={{ fontSize: "20px", fontWeight: "bold", mt: "30px" }}
              >
                Availability preferences
              </Typography>

              <Typography sx={{ mt: "20px" }}>
                Behavior when out of stock
              </Typography>

              <FormControl>
                <RadioGroup
                  aria-labelledby='demo-radio-buttons-group-label'
                  name='radio-buttons-group'
                >
                  <FormControlLabel
                    value='PayPal'
                    control={<Radio />}
                    label='Deny orders'
                  />
                  <FormControlLabel
                    value='Stripe'
                    control={<Radio />}
                    type='radio'
                    label='Allow orders'
                  />
                  <FormControlLabel
                    value='rr'
                    control={<Radio />}
                    label='Use default behavior (Deny orders)'
                  />
                </RadioGroup>
              </FormControl>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mt: "30px",
                }}
              >
                <Typography sx={{ width: "100%" }}>
                  Label when in stock
                </Typography>
                <Typography sx={{ width: "100%" }}>
                  Label when out of stock (and back order allowed)
                </Typography>
                <Typography sx={{ width: "100%" }}>
                  Availability date
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mt: "30px",
                }}
              >
                <Typography sx={{ width: "100%" }}>
                  <TextField size='small' />
                </Typography>
                <Typography sx={{ width: "100%" }}>
                  <TextField size='small' />
                </Typography>
                <Typography sx={{ width: "100%" }}>
                  <TextField
                    id='date'
                    size='small'
                    type='date'
                    sx={{ width: "60%" }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Typography>
              </Box>
            </Grid>
          </Grid>
        )}
        {tabIndex === 2 && (
          <Box>
            <Grid container>
              <Grid item xs={12}>
                <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
                  Package Dimension
                </Typography>

                <Typography sx={{ mt: "30px" }}>
                  Charge additional shipping costs based on packet dimensions
                  covered here.
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mt: "30px",
                  }}
                >
                  <Typography sx={{ width: "100%" }}>Width</Typography>
                  <Typography sx={{ width: "100%" }}>Height</Typography>
                  <Typography sx={{ width: "100%" }}>Depth</Typography>
                  <Typography sx={{ width: "100%" }}>Weight</Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mt: "20px",
                  }}
                >
                  <OutlinedInput
                    sx={{ width: "100%", m: "0 10px" }}
                    id='outlined-adornment-weight'
                    endAdornment={
                      <InputAdornment position='end'>cm</InputAdornment>
                    }
                    aria-describedby='outlined-weight-helper-text'
                    inputProps={{
                      "aria-label": "weight",
                    }}
                  />

                  <OutlinedInput
                    sx={{ width: "100%" }}
                    id='outlined-adornment-weight'
                    endAdornment={
                      <InputAdornment position='end'>cm</InputAdornment>
                    }
                    aria-describedby='outlined-weight-helper-text'
                    inputProps={{
                      "aria-label": "weight",
                    }}
                  />

                  <OutlinedInput
                    sx={{ width: "100%", m: "0 10px" }}
                    id='outlined-adornment-weight'
                    endAdornment={
                      <InputAdornment position='end'>cm</InputAdornment>
                    }
                    aria-describedby='outlined-weight-helper-text'
                    inputProps={{
                      "aria-label": "weight",
                    }}
                  />

                  <OutlinedInput
                    sx={{ width: "100%" }}
                    id='outlined-adornment-weight'
                    endAdornment={
                      <InputAdornment position='end'>kg</InputAdornment>
                    }
                    aria-describedby='outlined-weight-helper-text'
                    inputProps={{
                      "aria-label": "weight",
                    }}
                  />
                </Box>

                <Typography
                  sx={{ fontSize: "20px", fontWeight: "bold", mt: "30px" }}
                >
                  Delivery Time
                  <Tooltip title={delivery}>
                    <InfoIcon />
                  </Tooltip>
                </Typography>

                <FormControl sx={{ mt: "20px" }}>
                  <RadioGroup
                    aria-labelledby='demo-radio-buttons-group-label'
                    name='radio-buttons-group'
                  >
                    <FormControlLabel
                      value='PayPal'
                      control={<Radio />}
                      label='None'
                    />
                    <FormControlLabel
                      value='Stripe'
                      control={<Radio />}
                      type='radio'
                      label='Default delivery time'
                    />
                    <FormControlLabel
                      value='rr'
                      control={<Radio />}
                      label='Specific delivery time to this product'
                    />
                  </RadioGroup>
                </FormControl>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mt: "30px",
                  }}
                >
                  <Typography sx={{ width: "100%" }}>
                    Delivery time of in-stock products:
                  </Typography>
                  <Typography sx={{ width: "100%" }}>
                    Delivery time of out-of-stock products with allowed orders:
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mt: "30px",
                  }}
                >
                  <Typography sx={{ width: "100%", m: "0 20px 0 0" }}>
                    <TextField
                      fullWidth
                      id='outlined-multiline-static'
                      defaultValue='Delivered within 3-4 days'
                    />
                  </Typography>
                  <Typography sx={{ width: "100%" }}>
                    <TextField
                      fullWidth
                      id='outlined-multiline-static'
                      defaultValue='Delivered within 5-7 days'
                    />
                  </Typography>
                </Box>

                <Typography
                  sx={{ fontSize: "20px", fontWeight: "bold", mt: "30px" }}
                >
                  Shipping fees
                  <Tooltip title={shipping}>
                    <InfoIcon />
                  </Tooltip>
                </Typography>

                <Typography sx={{ mt: "10px" }}>
                  Does this product incur additional shipping costs?
                </Typography>

                <Typography sx={{ mt: "10px" }}>
                  <TextField
                    id='outlined-start-adornment'
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position='start'>€</InputAdornment>
                      ),
                    }}
                  />
                </Typography>

                <Typography
                  sx={{ fontSize: "20px", fontWeight: "bold", mt: "30px" }}
                >
                  Available carriers
                </Typography>

                <FormGroup sx={{ mt: "20px" }}>
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label='1 - PrestaShop (Pick up in-store)'
                  />
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label='2 - My carrier (Delivery next day!)'
                  />
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label='3 - My cheap carrier (Buy more to pay less!)'
                  />
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label='4 - My light carrier (The lighter the cheaper!)'
                  />
                </FormGroup>
              </Grid>
            </Grid>
          </Box>
        )}
        {tabIndex === 3 && (
          <Box>
            <Grid container>
              <Grid item xs={12}>
                <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
                  Retail price
                  <Tooltip title={retail}>
                    <InfoIcon />
                  </Tooltip>
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mt: "30px",
                  }}
                >
                  <Typography sx={{ width: "100%" }}>
                    Retail price (tax excl.)
                  </Typography>
                  <Typography sx={{ width: "100%" }}>
                    Retail price (tax incl.)
                  </Typography>
                  <Typography sx={{ width: "100%" }}>
                    Retail price per unit (tax excl.)
                    <Tooltip title={unit}>
                      <InfoIcon />
                    </Tooltip>
                  </Typography>
                  <Typography sx={{ width: "100%" }}></Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mt: "30px",
                  }}
                >
                  <Typography sx={{ mt: "10px", width: "100%" }}>
                    <TextField
                      id='outlined-start-adornment'
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position='start'>€</InputAdornment>
                        ),
                      }}
                    />
                  </Typography>
                  <Typography sx={{ mt: "10px", width: "100%" }}>
                    <TextField
                      id='outlined-start-adornment'
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position='start'>€</InputAdornment>
                        ),
                      }}
                    />
                  </Typography>
                  <Typography sx={{ mt: "10px", width: "100%" }}>
                    <TextField
                      id='outlined-start-adornment'
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position='start'>€</InputAdornment>
                        ),
                      }}
                    />
                  </Typography>

                  <Typography sx={{ mt: "10px", width: "100%" }}>
                    <TextField
                      id='outlined-start-adornment'
                      defaultValue='Per Kilo,per litre'
                    />
                  </Typography>
                </Box>

                <Typography sx={{ mt: "30px" }}>Tax rule</Typography>

                <Typography sx={{ width: "40%" }}>
                  <TextField
                    select
                    fullWidth
                    id='margin-normal'
                    margin='normal'
                  >
                    <MenuItem>FR Taux standard (20%)</MenuItem>
                  </TextField>
                </Typography>

                <FormGroup sx={{ mt: "20px" }}>
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label='Display the On sale! lag on the product page, and on product listings.'
                  />
                </FormGroup>

                <Typography
                  sx={{ fontSize: "20px", fontWeight: "bold", mt: "30px" }}
                >
                  Cost price
                  <Tooltip title={Cost}>
                    <InfoIcon />
                  </Tooltip>
                </Typography>

                <Typography sx={{ mt: "10px" }}>
                  Cost price (tax excl.)
                </Typography>

                <Typography
                  sx={{ fontSize: "20px", fontWeight: "bold", mt: "30px" }}
                >
                  Specific price
                  <Tooltip title={Specific}>
                    <InfoIcon />
                  </Tooltip>
                </Typography>

                <Typography sx={{ mt: "10px" }}>
                  <Button
                    sx={{ mt: "20px" }}
                    variant='outlined'
                    startIcon={<AddCircleIcon />}
                  >
                    Add a specific price
                  </Button>
                </Typography>

                <Typography
                  sx={{ fontSize: "20px", fontWeight: "bold", mt: "30px" }}
                >
                  Priority management
                  <Tooltip title={Priority}>
                    <InfoIcon />
                  </Tooltip>
                </Typography>

                <Typography sx={{ mt: "20px" }}>Priorities</Typography>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mt: "30px",
                  }}
                >
                  <FormControl sx={{ width: "100%", m: 2 }}>
                    <Select>
                      <MenuItem>Currency</MenuItem>
                      <MenuItem>Country</MenuItem>
                      <MenuItem>Group</MenuItem>
                    </Select>
                  </FormControl>

                  <FormControl sx={{ width: "100%", m: 2 }}>
                    <Select>
                      <MenuItem>Currency</MenuItem>
                      <MenuItem>Country</MenuItem>
                      <MenuItem>Group</MenuItem>
                    </Select>
                  </FormControl>

                  <FormControl sx={{ width: "100%", m: 2 }}>
                    <Select>
                      <MenuItem>Currency</MenuItem>
                      <MenuItem>Country</MenuItem>
                      <MenuItem>Group</MenuItem>
                    </Select>
                  </FormControl>

                  <FormControl sx={{ width: "100%", m: 2 }}>
                    <Select>
                      <MenuItem>Currency</MenuItem>
                      <MenuItem>Country</MenuItem>
                      <MenuItem>Group</MenuItem>
                    </Select>
                  </FormControl>
                </Box>

                <FormGroup sx={{ mt: "20px" }}>
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label='Apply to all products'
                  />
                </FormGroup>
              </Grid>
            </Grid>
          </Box>
        )}
        {tabIndex === 4 && (
          <Box>
            <Typography>SEO</Typography>
          </Box>
        )}
        {tabIndex === 5 && (
          <Box>
            <Grid container>
              <Grid item xs={12}>
                <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
                  Visibility
                </Typography>

                <Typography sx={{ mt: "20px" }}>
                  Where do you want your product to appear?
                </Typography>

                <Typography sx={{ width: "40%", mt: "20px" }}>
                  <TextField
                    select
                    fullWidth
                    id='margin-normal'
                    margin='normal'
                  >
                    <MenuItem>Everyw here</MenuItem>
                  </TextField>
                </Typography>
              </Grid>
            </Grid>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default PrestaProductScreen;
