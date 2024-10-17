import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { MenuItem } from '../../node_modules/@material-ui/core/index';
import { ProfileListDetails, saveDetail } from '../actions/EmployeeAction';
import { EMPLOYEE_DETAIL_RESET } from '../constants/EmployeeConstants';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';
import { Divider } from '../../node_modules/@material-ui/core/index';

function EmployeeFormScreen() {
  const {
    register: register1,
    handleSubmit: handleSubmit1,
    formState: { errors: errors1 },
  } = useForm();
  const theme = createTheme();
  const dispatch = useDispatch();

  const EmployeeProfile = useSelector((state) => state.EmployeeProfile);
  const { profiledetail } = EmployeeProfile;

  const EmployeeSave = useSelector((state) => state.EmployeeSave);
  const { success: EmployeesavSucces } = EmployeeSave;

  const [EmployeActive, setEmployeActive] = useState('');
  const [EmployeProfile, setEmployeProfile] = useState('');
  const [Btn, setBtn] = useState(false);
  const createEmployeeDetaile = (e) => {
    if (Btn === true) {
      dispatch(
        saveDetail({
          firstname: e.fname,
          lastname: e.lname,
          email: e.email,
          mobile: e.mnumber,
          EmpProfile: EmployeProfile,
          active: EmployeActive,
        })
      );
      window.confirm('Profile Saved Successfully!!');
      e.target.reset();
      setEmployeProfile('');
      setEmployeActive('');
    } else {
      dispatch(
        saveDetail({
          firstname: e.fname,
          lastname: e.lname,
          email: e.email,
          mobile: e.mnumber,
          EmpProfile: EmployeProfile,
          active: EmployeActive,
        })
      );
      window.confirm('Profile Saved Successfully!!');
      e.target.reset();
      setEmployeProfile('');
      setEmployeActive('');
    }
  };

  useEffect(() => {
    if (EmployeesavSucces) {
      dispatch({ type: EMPLOYEE_DETAIL_RESET });
    }

    dispatch(ProfileListDetails());
  }, [dispatch, EmployeesavSucces]);
  return (
    <Box>
      <>
        <Typography variant="h5">Add Employee Details</Typography>
        <Box sx={{ display: 'flex', mt: 2 }}>
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <Link
              to="/"
              style={{
                color: 'rgba(0, 0, 0, 0.6)',
                fontSize: '15px',
              }}
            >
              <Typography>Home</Typography>
            </Link>

            <Link
              to="/team"
              style={{
                color: 'rgba(0, 0, 0, 0.6)',
                fontSize: '15px',
              }}
            >
              <Typography> Employee Details</Typography>
            </Link>

            <Typography sx={{ fontSize: '15px' }}>
              Add Employee Details
            </Typography>
          </Breadcrumbs>
        </Box>
      </>
      <Divider sx={{ mt: 3 }} />
      <Box>
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
              onSubmit={handleSubmit1(createEmployeeDetaile)}
              component="form"
              sx={{
                display: 'flex',
                width: '100%',
                flexDirection: 'column',
                alignItems: 'center',
                borderRadius: '0px',
                p: 5,
                border: '1px solid #000000',
              }}
            >
              <Typography variant="h5" sx={{ textAlign: 'center' }}>
                {' '}
                Create Employee Details
              </Typography>
              <TextField
                size="small"
                margin="normal"
                fullWidth
                id="First Name"
                label="First Name"
                name="fname"
                autoComplete="off"
                {...register1('fname', { required: true })}
                error={errors1.eprofil}
              />
              {errors1.eprofil && (
                <span className="formError">First Name is required</span>
              )}

              <TextField
                size="small"
                margin="normal"
                fullWidth
                id="Last Name"
                label="Last Name"
                name="lname"
                autoComplete="off"
                {...register1('lname', { required: true })}
                error={errors1.lname}
              />
              {errors1.eprofil && (
                <span className="formError">Last Name is required</span>
              )}

              <TextField
                size="small"
                margin="normal"
                fullWidth
                id="Email"
                label="Email"
                name="email"
                autoComplete="off"
                {...register1('email', { required: true })}
                error={errors1.email}
              />
              {errors1.eprofil && (
                <span className="formError">Email is required</span>
              )}

              <TextField
                size="small"
                margin="normal"
                fullWidth
                id="Number"
                label="Mobile Number"
                name="mnumber"
                autoComplete="off"
                {...register1('mnumber', { required: true })}
                error={errors1.mnumber}
              />
              {errors1.eprofil && (
                <span className="formError">profile is required</span>
              )}
              <FormControl fullWidth sx={{ mt: 1 }}>
                <InputLabel>Profile</InputLabel>
                <Select
                  id="standard-simple-select"
                  value={EmployeProfile}
                  label="Attributes Type"
                  onChange={(e) => setEmployeProfile(e.target.value)}
                >
                  {profiledetail?.map((item) => (
                    <MenuItem key={item._id} value={item._id}>
                      {item.empprofile}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl fullWidth sx={{ mt: 1 }}>
                <InputLabel>Active</InputLabel>
                <Select
                  id="standard-simple-select"
                  value={EmployeActive}
                  label="Attributes Type"
                  onChange={(e) => setEmployeActive(e.target.value)}
                >
                  <MenuItem value={true}>Yes</MenuItem>
                  <MenuItem value={false}>No</MenuItem>
                </Select>
              </FormControl>
              <Box sx={{ display: 'flex' }}>
                <Button
                  variant="contained"
                  sx={{
                    mt: 3,
                    mb: 2,
                    ml: 5,
                    borderRadius: '20px',
                    backgroundColor: '#0099CC',
                  }}
                  type="Click"
                >
                  Save And Another Value
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    mt: 3,
                    mb: 2,
                    ml: 5,
                    borderRadius: '20px',
                    backgroundColor: '#0099CC',
                  }}
                  type="Click"
                  onClick={() => setBtn(true)}
                >
                  Save
                </Button>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      </Box>
    </Box>
  );
}

export default EmployeeFormScreen;
