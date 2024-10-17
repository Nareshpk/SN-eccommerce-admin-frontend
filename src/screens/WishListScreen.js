import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";
import Carousel from "react-elastic-carousel";
import { useDispatch, useSelector } from "react-redux";
import { catProductList } from "../actions/catProductAction";
import Product from "../components/Product";

export default function WishListScreen() {
  const dispatch = useDispatch();
  const catalogProd = useSelector((state) => state.catalogProd);
  const { catProducts } = catalogProd;

  // const WishlistProd = useSelector((state) => state.WishlistProd);
  // const { catWishlist } = WishlistProd;

  useEffect(() => {
    dispatch(catProductList());
  }, [dispatch]);

  const breakPoints = [
    { width: 400, itemsToShow: 1, itemsToScroll: 1 },
    { width: 500, itemsToShow: 2, itemsToScroll: 2 },
    { width: 600, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3, itemsToScroll: 3 },
    { width: 900, itemsToShow: 5, itemsToScroll: 5 },
    { width: 1200, itemsToShow: 5, itemsToScroll: 5 },
    { width: 1500, itemsToShow: 7, itemsToScroll: 7 },
    { width: 2000, itemsToShow: 9, itemsToScroll: 9 },
  ];

  return (
    <Box>
      <Box>
        <Typography variant="h4">Wish List</Typography>
      </Box>
      <Carousel
        className="new1"
        mouseTracking
        enableSwipe={true}
        pagination={false}
        breakPoints={breakPoints}
      >
        {/* {catWishlist?.map((wishlist)=>{
            
        })} */}
        {/* {catProducts?.filter((product)=>{
        return product._id ===
      }).map((product) => (
        
            <Box key={product._id}>
              <Product product={product}></Product>
            </Box>
          ))}  */}

        {catProducts
          ?.filter((product) => {
            return product.status === "true";
          })
          .map((product) => (
            <Box key={product._id}>
              <Product product={product}></Product>
            </Box>
          ))}
      </Carousel>
    </Box>
  );
}
