import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { Switch } from "@material-ui/core";
import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { saveBrand } from "../actions/brandAction";
import { useForm } from "react-hook-form";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import { Divider } from "../../node_modules/@material-ui/core/index";

import { useNavigate } from "react-router-dom";

import { useEffect } from "react";

function BrandFromScreen() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const theme = createTheme();
  const navigate = useNavigate();
  const [checked, setchecked] = useState(true);
  // const [brandId, setBrandId] = useState("");
  const [editor, setEditor] = useState("");
  const [ckeditor, setckeditor] = useState("");
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
    }
    setSelectednew(e.target.files);
    // I've kept this example simple by using the first image instead of multiple
    setSelectedFile(e.target.files[0]);
  };

  // const switchHandler = (event) => {
  //   console.log("event", event);
  //   if (checked === true) {
  //     setchecked(event.target.checked);
  //   } else {
  //     setchecked(event.target.checked);
  //   }
  // };

  const submitHandler = (e) => {
    dispatch(
      saveBrand({
        name: e.name,
        imageFile: selectedFilenew,
        editor: editor,
        ckeditor: ckeditor,
        checked: checked,
      }),
    );
    window.confirm("Brand Details Added SuccessFully!!");
    navigate("/brand");
    event.target.reset();
    setEditor("");
    setckeditor("");
    // setBranditem(0);
  };

  return (
    <>
      <Box>
        <Typography variant="h6" sx={{ mt: -2 }}>
          Add Brands
        </Typography>
        <Box sx={{ display: "flex", mt: 0 }}>
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
              <Typography sx={{ fontSize: 13 }}>Home</Typography>
            </Link>

            <Link
              to="/brand"
              style={{
                color: "rgba(0, 0, 0, 0.6)",
                fontSize: "13px",
              }}
            >
              <Typography sx={{ fontSize: 13 }}>Brands</Typography>
            </Link>

            <Typography sx={{ fontSize: 13 }}>Add Brands</Typography>
          </Breadcrumbs>
        </Box>
      </Box>
      <Divider sx={{ mt: 3 }} />
      <Box>
        <ThemeProvider theme={theme}>
          <Container
            component="main"
            maxWidth="sm"
            sx={{
              my: { xs: 5, md: 6, lg: 5 },
              p: { xs: 2, md: 1 },
            }}
          >
            <CssBaseline />
            <Box
              component="form"
              onSubmit={handleSubmit(submitHandler)}
              sx={{
                display: "flex",
                width: "100%",
                flexDirection: "column",
                alignItems: "left",
                borderRadius: "2px",
                p: 5,
                border: "1px solid black",
                mt: -5,
              }}
            >
              <Typography variant="h6" sx={{ textAlign: "center", mt: -4 }}>
                Brands
              </Typography>

              <Typography sx={{ fontSize: 13 }}>Name*:</Typography>
              <TextField
                sx={{ mt: "10px" }}
                required
                id="name"
                name="name"
                autoComplete="off"
                {...register("name", { required: true })}
                error={errors.name}
                size="small"
              />
              {errors.name && (
                <span className="formError">Name is required</span>
              )}

              <Box sx={{ mt: "5px" }}>
                <Typography sx={{ mb: "10px", fontSize: 13 }}>
                  Short Description:
                </Typography>
                <CKEditor
                  editor={ClassicEditor}
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    setckeditor({ data });
                  }}
                />
              </Box>

              <Box sx={{ mt: "5px" }}>
                <Typography sx={{ mb: "10px", fontSize: 13 }}>
                  Description:
                </Typography>
                <CKEditor
                  editor={ClassicEditor}
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    setEditor({ data });
                  }}
                />
              </Box>

              <Typography sx={{ mt: "5px", fontSize: 13 }}>Logo:</Typography>
              <input type="file" onChange={onSelectFile} />
              {selectedFile && (
                <img
                  height="100px"
                  width="100px"
                  border="1px solid #555"
                  src={preview}
                />
              )}

              <Typography sx={{ fontSize: 13 }}>Enabled</Typography>
              <Switch
                color="primary"
                checked={checked}
                value="checked"
                onChange={(e) => setchecked(e.target.checked)}
                // {...register("checked")}
              />

              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                type="submit"
              >
                Save
              </Button>
            </Box>
          </Container>
        </ThemeProvider>
      </Box>
    </>
  );
}

export default BrandFromScreen;
