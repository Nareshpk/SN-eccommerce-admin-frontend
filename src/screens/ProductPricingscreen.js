import InfoIcon from '@mui/icons-material/Info';
import { Box, Typography } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import { DataGrid } from '@mui/x-data-grid';
//import { useForm } from 'react-hook-form';
import MenuItem from '@mui/material/MenuItem';
import InputAdornment from '@mui/material/InputAdornment';
import FormGroup from '@mui/material/FormGroup';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
DataGrid;
export default function ProductPricingscreen() {
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
  const [specific, setSpecific] = useState(0);
  //   const {
  //     register,
  //     handleSubmit,
  //     formState: { errors },
  //     control,
  //   } = useForm();
  return (
    <Box>
      <Grid container>
        <Grid item xs={12}>
          <Typography sx={{ fontSize: '20px', fontWeight: 'bold' }}>
            Retail price
            <Tooltip title={retail}>
              <InfoIcon />
            </Tooltip>
          </Typography>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              mt: '30px',
            }}
          >
            <Typography sx={{ width: '100%' }}>
              Retail price (tax excl.)
            </Typography>
            <Typography sx={{ width: '100%' }}>
              Retail price (tax incl.)
            </Typography>
            <Typography sx={{ width: '100%' }}>
              Retail price per unit (tax excl.)
              <Tooltip title={unit}>
                <InfoIcon />
              </Tooltip>
            </Typography>
            <Typography sx={{ width: '100%' }}></Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              mt: '30px',
            }}
          >
            <Typography sx={{ mt: '10px', width: '100%' }}>
              <TextField
                id="outlined-start-adornment"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">€</InputAdornment>
                  ),
                }}
              />
            </Typography>
            <Typography sx={{ mt: '10px', width: '100%' }}>
              <TextField
                id="outlined-start-adornment"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">€</InputAdornment>
                  ),
                }}
              />
            </Typography>
            <Typography sx={{ mt: '10px', width: '100%' }}>
              <TextField
                id="outlined-start-adornment"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">€</InputAdornment>
                  ),
                }}
              />
            </Typography>

            <Typography sx={{ mt: '10px', width: '100%' }}>
              <TextField
                id="outlined-start-adornment"
                defaultValue="Per Kilo,per litre"
              />
            </Typography>
          </Box>

          <Typography sx={{ mt: '30px' }}>Tax rule</Typography>

          <Typography sx={{ width: '40%' }}>
            <TextField
              // select
              fullWidth
              id="margin-normal"
              margin="normal"
            >
              <MenuItem>FR Taux standard (20%)</MenuItem>
            </TextField>
          </Typography>

          <FormGroup sx={{ mt: '20px' }}>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Display the On sale! lag on the product page, and on product listings."
            />
          </FormGroup>

          <Typography
            sx={{
              fontSize: '20px',
              fontWeight: 'bold',
              mt: '30px',
            }}
          >
            Cost price
            <Tooltip title={Cost}>
              <InfoIcon />
            </Tooltip>
          </Typography>

          <Typography sx={{ mt: '10px' }}>Cost price (tax excl.)</Typography>

          <Typography
            sx={{
              fontSize: '20px',
              fontWeight: 'bold',
              mt: '30px',
            }}
          >
            Specific price
            <Tooltip title={Specific}>
              <InfoIcon />
            </Tooltip>
          </Typography>

          <Typography sx={{ mt: '10px' }}>
            <Button
              sx={{
                mt: '20px',
                boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2);',
              }}
              variant="outlined"
              startIcon={<AddCircleIcon />}
              onClick={() => setSpecific(1)}
            >
              Add a specific price
            </Button>
          </Typography>

          {specific === 1 ? (
            <Box
              sx={{
                width: '100%',
                height: '400px',
                border: '0.1px solid lightgray',
                mt: '20px',
                borderRadius: '5px',
                boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2);',
              }}
            >
              <Typography
                sx={{
                  fontSize: '14px',
                  fontWeight: 'bold',
                  mt: '20px',
                  m: 2,
                }}
              >
                Specific price conditions
              </Typography>

              <Typography sx={{ m: 2 }}>For</Typography>

              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  m: 2,
                }}
              >
                <Typography>
                  <TextField defaultValue="All Currencies" />
                </Typography>
                <Typography>
                  <TextField defaultValue="All Countries" />
                </Typography>
                <Typography>
                  <TextField defaultValue="All Groups" />
                </Typography>
              </Box>

              <Typography sx={{ m: 2 }}>Customer</Typography>

              <Typography sx={{ m: 2 }}>
                <TextField defaultValue="All Customers" />
              </Typography>

              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  m: 2,
                  width: '88%',
                }}
              >
                <Typography>Available From</Typography>
                <Typography>To</Typography>
                <Typography>Starting at</Typography>
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  m: 2,
                }}
              >
                <Typography>
                  <TextField type="date" />
                </Typography>
                <Typography>
                  <TextField type="date" />
                </Typography>
                <Typography>
                  <TextField defaultValue="1" />
                </Typography>
              </Box>
            </Box>
          ) : (
            <></>
          )}

          <Typography
            sx={{
              fontSize: '20px',
              fontWeight: 'bold',
              mt: '30px',
            }}
          >
            Priority management
            <Tooltip title={Priority}>
              <InfoIcon />
            </Tooltip>
          </Typography>

          <Typography sx={{ mt: '20px' }}>Priorities</Typography>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              mt: '30px',
            }}
          >
            <FormControl sx={{ width: '100%', m: 2 }}>
              <Select>
                <MenuItem>Currency</MenuItem>
                <MenuItem>Country</MenuItem>
                <MenuItem>Group</MenuItem>
              </Select>
            </FormControl>

            <FormControl sx={{ width: '100%', m: 2 }}>
              <Select>
                <MenuItem>Currency</MenuItem>
                <MenuItem>Country</MenuItem>
                <MenuItem>Group</MenuItem>
              </Select>
            </FormControl>

            <FormControl sx={{ width: '100%', m: 2 }}>
              <Select>
                <MenuItem>Currency</MenuItem>
                <MenuItem>Country</MenuItem>
                <MenuItem>Group</MenuItem>
              </Select>
            </FormControl>

            <FormControl sx={{ width: '100%', m: 2 }}>
              <Select>
                <MenuItem>Currency</MenuItem>
                <MenuItem>Country</MenuItem>
                <MenuItem>Group</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <FormGroup sx={{ mt: '20px' }}>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Apply to all products"
            />
          </FormGroup>
        </Grid>
      </Grid>
    </Box>
  );
}
