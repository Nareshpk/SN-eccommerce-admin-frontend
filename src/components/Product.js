import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { IconButton } from "@material-ui/core";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDispatch, useSelector } from "react-redux";
import { updateCatWhislist } from "../actions/catProductAction";
import { WISHLIST_UPDATE_RESET } from "../constants/catBrandConstant";
import Button from "@mui/material/Button";
import GradeIcon from "@mui/icons-material/Grade";
import Box from '@mui/material/Box';

export default function Product(PropTypes) {
  const { product } = PropTypes;

  const dispatch = useDispatch();
  const wishListUpdate = useSelector((state) => state.wishListUpdate);
  const { success } = wishListUpdate;

  const handleChange = () => {
    if (product.status === "true") {
      dispatch(
        updateCatWhislist({
          _id: product._id,
          status: false,
        })
      );
      window.confirm("Are You Not Like This!!");
    } else {
      dispatch(
        updateCatWhislist({
          _id: product._id,
          status: true,
        })
      );
    }
  };

  useEffect(() => {
    if (success) {
      dispatch({ type: WISHLIST_UPDATE_RESET });
    }
    window.scrollTo(0, 0);
  }, [dispatch, success]);

  var create = product.createdAt.substring(0, 10);
  const dt = new Date(create);

  let date = (dt.getDate() + 6) + '-' + parseInt(dt.getMonth() + 1) + '-' + dt.getFullYear()

  return (
    <>
      <Card
        key={product._id}
        sx={{
          width: "100%",
          height: 450,
          margin: 2,
        }}
      >
        <Box sx={{display:"flex"}}>
        <IconButton onClick={handleChange}>
          {product.status === "true" ? (
            <FavoriteIcon
              sx={{
                color: product.status === "true" ? "red" : "",
              }}
            />
          ) : (
            <FavoriteBorderIcon />
          )}
        </IconButton>
       
        {date >= create ? (
          <>
            <Button
              sx={{
                width: "10%",
                backgroundColor: "green",
                height: 25,
                color: "white",
                ml: 12,
                mt:1
                
              }}
            >
              <GradeIcon sx={{ color: "gold" }} />
              New
            </Button>
          </>
        ) : (
          <></>
        )}
       </Box>
        
        <Link to={`/product/${product._id}`}>
          <CardMedia
            className="media"
            sx={{
              transition: "transform .5s ease",
              "&:hover": {
                transform: "scale(1.1)",
                width: "100%",
              },
            }}
            component="img"
            height="200"
            image={`/api/uploads/show/${product._id}`}
            alt={product.prodname}
          />
        </Link>
        <Link
          style={{
            textDecoration: "none",
            color: "#263238",
            textTransform: "capitalize",
          }}
          to={`/product/${product._id}`}
        >
          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{ m: 1, fontSize: "12px" }}
            >
              {product.prodname}
            </Typography>

            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{ m: 2, fontSize: "14px" }}
            >
              {product.taxexcluded}
            </Typography>
          </CardContent>
        </Link>
      </Card>
    </>
  );
}
