// import TextareaAutosize from "@mui/base/TextareaAutosize";
import InfoIcon from "@mui/icons-material/Info";
import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import * as React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import { SeoListDetails, seoDetails, updateSeodetail } from "../actions/SeoAction";
import { useDispatch, useSelector } from "react-redux";
import { SEO_DETAILS_UPDATE_RESET, SEO_SAVE_RESET } from "../constants/SeoConstants";
import { useEffect } from "react";
import { useParams } from "../../node_modules/react-router-dom/dist/index";
export default function SeoScreen() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const [redirection, setredirection] = useState(50);
  // const handleChange = (event) => {
  //   setredirection(event.target.value);
  // };

  const params = useParams();
  const EditId = params.id;

  const seoSave = useSelector((state) => state.seoSave);
  const { success: seosave } = seoSave;

  const SeoUpdate = useSelector((state) => state.SeoUpdate);
  const { success: seoupdate } = SeoUpdate;

  const catalogProdView = useSelector((state) => state.catalogProdView);
  const { catProducts } = catalogProdView;

  const SeoList = useSelector((state) => state.SeoList);
  const { seolistdetails } = SeoList;

  const seoObj = seolistdetails?.find((item) => item.mprodId === EditId)

  let productdata;
  {
    catProducts?.map((state) => {
      productdata = state?._id
    })
  }

  const [Edittitile, setEdittitile] = useState(seoObj?.metaTitle);
  const [Editdesc, setEditdesc] = useState(seoObj?.description);
  const [EditFrndUrl, setEditFrndUrl] = useState(seoObj?.friendlyURL);
  const [Editredirection, setEditredirection] = useState(seoObj?.redirection);

  const seoSaveDetail = (e) => {
    dispatch(
      seoDetails({
        mprodId: productdata,
        metaTitle: e.title,
        description: e.description,
        friendlyURL: e.friendlyurl,
        redirection: redirection,
      })
    );
    window.confirm("SEO Details  Saved Successfully!!");
    event.target.reset();
    setredirection("");
  };

  const seoUpdateDetail = () => {
    dispatch(
      updateSeodetail({
        prodId: EditId,
        _id: seoObj._id,
        metaTitle: Edittitile,
        description: Editdesc,
        friendlyURL: EditFrndUrl,
        redirection: Editredirection,
      })
    );
    window.confirm("SEO Details Update Successfully!!");
    event.target.reset();
    setEditredirection("");
    setEdittitile("");
    setEditdesc("");
    setEditFrndUrl("");

  };
  useEffect(() => {
    if (seosave) {
      dispatch({ type: SEO_SAVE_RESET });
    }
    if (seoupdate) {
      dispatch({ type: SEO_DETAILS_UPDATE_RESET });
    }
    dispatch(SeoListDetails())
  }, [dispatch, seosave, seoupdate]);
  return (
    <>{seoObj ? (<>
      <Box component='form' onSubmit={handleSubmit(seoUpdateDetail)}>
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <Box>
              <Box>
                <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
                  Search Engine Optimization
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box>
              <Box>
                <Typography sx={{ fontSize: "14px", mt: "5px" }}>
                  Improve your ranking and how your product page will appear in
                  search engines results
                </Typography>
              </Box>
            </Box>
            <Box>
              <Box>
                <Typography
                  sx={{ fontSize: "14px", mt: "5px", fontWeight: "bold" }}
                >
                  Here is a preview of your search engine result, play with it!
                </Typography>
              </Box>
            </Box>
            <Typography>
              <Card
                sx={{
                  width: "70%",
                  height: "6rem",
                  alignContent: "center",
                  justifyContent: "center",
                  mt: "10px",
                }}
              >
                https://choice-lip.demo.prestashop.com/en/home/20-.html
              </Card>
            </Typography>
          </Grid>{" "}
          <Grid item xs={12}>
            <Box>
              <Typography
                name='title'
                sx={{
                  mt: "5px",
                  fontSize: "16px",
                  fontWeight: "bold",
                  mb: "10px",
                }}
              >
                Meta title
                <InfoIcon sx={{ fontSize: 12 }} />
              </Typography>

              <TextField
                type='text'
                id='outlined-basic'
                variant='outlined'
                placeholder='To have different title from the product name, Enter it here.'
                inputProps={{
                  style: {
                    height: "1rem",
                    width: "40rem",
                  },
                }}
                value={Edittitile}
                onChange={(e) => setEdittitile(e.target.value)}
              >
                {errors.title && (
                  <span className='formError'>title is required</span>
                )}
              </TextField>
            </Box>
            <Box>
              <Typography
                sx={{
                  mt: "10px",
                  fontSize: "16px",
                  fontWeight: "bold",
                  mb: "10px",
                }}
              >
                Meta description
                <InfoIcon sx={{ fontSize: 12 }} />
              </Typography>
             
            </Box>
            <Box>
              <Typography
                sx={{
                  mt: "10px",
                  fontSize: "16px",
                  fontWeight: "bold",
                  mb: "10px",
                }}
              >
                Friendly URL
                <InfoIcon sx={{ fontSize: 12 }} />
              </Typography>
              <TextField
                size='small'
                type='text'
                id='outlined-basic'
                variant='outlined'
                inputProps={{
                  style: {
                    height: "1rem",
                    width: "30rem",
                  },
                }}
                value={EditFrndUrl}
                onChange={(e) => setEditFrndUrl(e.target.value)}
              >
                {" "}
              </TextField>
              <Button variant='outlined' size='small' sx={{ ml: "30px" }}>
                Reset URL
              </Button>
            </Box>
            <Box>
              <Card
                sx={{
                  width: 670,
                  height: 50,
                  alignContent: "center",
                  justifyContent: "center",
                  mt: "20px",
                  fontSize: "14px",
                }}
              >
                <InfoIcon sx={{ fontSize: 12 }} />
                Friendly URLs are currently enabled. To disable it, go to SEO and
                URLs
              </Card>
            </Box>
            <Box>
              <Typography
                sx={{
                  mt: "10px",
                  fontSize: "16px",
                  fontWeight: "bold",
                  mb: "10px",
                }}
              >
                Redirection page
                <InfoIcon sx={{ fontSize: 12 }} />
              </Typography>
              <Typography sx={{ fontSize: "14px" }}>
                Redirection when offline
              </Typography>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth sx={{ width: "40%" }}>
                  <InputLabel id='demo-simple-select-label'></InputLabel>
                  <Select
                    size='small'
                    labelId='demo-simple-select-label'
                    id='demo-simple-select'
                    value={Editredirection}
                    defaultValue={50}
                    onChange={(e) => setEditredirection(e.target.value)}
                  >
                    <MenuItem value={10}>
                      Permanent direction to a Product
                    </MenuItem>
                    <MenuItem value={20}>
                      Permanent direction to a Category
                    </MenuItem>
                    <MenuItem value={30}>
                      Temprory direction to a Product
                    </MenuItem>
                    <MenuItem value={40}>
                      Temprory direction to a Category
                    </MenuItem>
                    <MenuItem value={50}>No direction</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>
            <Box>
              <Card
                sx={{
                  width: 670,
                  height: 100,
                  alignContent: "center",
                  justifyContent: "center",
                  mt: "20px",
                  fontSize: "14px",
                }}
              >
                <InfoIcon sx={{ fontSize: 12 }} />
                No redirection (404) = Do not redirect anywhere and display a 404
                {'"Not Found"'} page. Permanent redirection (301) = Permanently
                display another product or category instead. Temporary redirection
                (302) = Temporarily display another product or category instead.
              </Card>
            </Box>
            <Typography>
              <Box sx={{ display: "flex" }}>
                <Button
                  variant='contained'
                  sx={{ mt: 5, mb: 2, ml: 1 }}
                  type='submit'
                >
                  Save
                </Button>
              </Box>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>) : (<>
      <Box component='form' onSubmit={handleSubmit(seoSaveDetail)}>
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <Box>
              <Box>
                <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
                  Search Engine Optimization
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box>
              <Box>
                <Typography sx={{ fontSize: "14px", mt: "5px" }}>
                  Improve your ranking and how your product page will appear in
                  search engines results
                </Typography>
              </Box>
            </Box>
            <Box>
              <Box>
                <Typography
                  sx={{ fontSize: "14px", mt: "5px", fontWeight: "bold" }}
                >
                  Here is a preview of your search engine result, play with it!
                </Typography>
              </Box>
            </Box>
            <Typography>
              <Card
                sx={{
                  width: "70%",
                  height: "6rem",
                  alignContent: "center",
                  justifyContent: "center",
                  mt: "10px",
                }}
              >
                https://choice-lip.demo.prestashop.com/en/home/20-.html
              </Card>
            </Typography>
          </Grid>{" "}
          <Grid item xs={12}>
            <Box>
              <Typography
                name='title'
                sx={{
                  mt: "5px",
                  fontSize: "16px",
                  fontWeight: "bold",
                  mb: "10px",
                }}
              >
                Meta title
                <InfoIcon sx={{ fontSize: 12 }} />
              </Typography>

              <TextField
                type='text'
                id='outlined-basic'
                variant='outlined'
                placeholder='To have different title from the product name, Enter it here.'
                inputProps={{
                  style: {
                    height: "1rem",
                    width: "40rem",
                  },
                }}
                {...register("title", {
                  required: true,
                })}
              >
                {errors.title && (
                  <span className='formError'>title is required</span>
                )}
              </TextField>
            </Box>
            <Box>
              <Typography
                sx={{
                  mt: "10px",
                  fontSize: "16px",
                  fontWeight: "bold",
                  mb: "10px",
                }}
              >
                Meta description
                <InfoIcon sx={{ fontSize: 12 }} />
              </Typography>
              
            </Box>
            <Box>
              <Typography
                sx={{
                  mt: "10px",
                  fontSize: "16px",
                  fontWeight: "bold",
                  mb: "10px",
                }}
              >
                Friendly URL
                <InfoIcon sx={{ fontSize: 12 }} />
              </Typography>
              <TextField
                size='small'
                type='text'
                id='outlined-basic'
                variant='outlined'
                inputProps={{
                  style: {
                    height: "1rem",
                    width: "30rem",
                  },
                }}
                {...register("friendlyurl", {
                  required: true,
                })}
              >
                {" "}
              </TextField>
              <Button variant='outlined' size='small' sx={{ ml: "30px" }}>
                Reset URL
              </Button>
            </Box>
            <Box>
              <Card
                sx={{
                  width: 670,
                  height: 50,
                  alignContent: "center",
                  justifyContent: "center",
                  mt: "20px",
                  fontSize: "14px",
                }}
              >
                <InfoIcon sx={{ fontSize: 12 }} />
                Friendly URLs are currently enabled. To disable it, go to SEO and
                URLs
              </Card>
            </Box>
            <Box>
              <Typography
                sx={{
                  mt: "10px",
                  fontSize: "16px",
                  fontWeight: "bold",
                  mb: "10px",
                }}
              >
                Redirection page
                <InfoIcon sx={{ fontSize: 12 }} />
              </Typography>
              <Typography sx={{ fontSize: "14px" }}>
                Redirection when offline
              </Typography>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth sx={{ width: "40%" }}>
                  <InputLabel id='demo-simple-select-label'></InputLabel>
                  <Select
                    size='small'
                    labelId='demo-simple-select-label'
                    id='demo-simple-select'
                    value={redirection}
                    defaultValue={50}
                    onChange={(e) => setredirection(e.target.value)}
                  >
                    <MenuItem value={10}>
                      Permanent direction to a Product
                    </MenuItem>
                    <MenuItem value={20}>
                      Permanent direction to a Category
                    </MenuItem>
                    <MenuItem value={30}>
                      Temprory direction to a Product
                    </MenuItem>
                    <MenuItem value={40}>
                      Temprory direction to a Category
                    </MenuItem>
                    <MenuItem value={50}>No direction</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>
            <Box>
              <Card
                sx={{
                  width: 670,
                  height: 100,
                  alignContent: "center",
                  justifyContent: "center",
                  mt: "20px",
                  fontSize: "14px",
                }}
              >
                <InfoIcon sx={{ fontSize: 12 }} />
                No redirection (404) = Do not redirect anywhere and display a 404
                {'"Not Found"'} page. Permanent redirection (301) = Permanently
                display another product or category instead. Temporary redirection
                (302) = Temporarily display another product or category instead.
              </Card>
            </Box>
            <Typography>
              <Box sx={{ display: "flex" }}>
                <Button
                  variant='contained'
                  sx={{ mt: 5, mb: 2, ml: 1 }}
                  type='submit'
                >
                  Save
                </Button>
              </Box>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>)}</>

  );
}
