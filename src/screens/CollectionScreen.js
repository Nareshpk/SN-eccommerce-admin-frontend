import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productAction";
import Product from "../components/Product";
export default function CollectionScreen(PropTypes) {
  const { categorytype } = PropTypes;
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading,products } = productList;
  useEffect(() => {
    dispatch(listProducts({}));
  }, [dispatch]);
  return (
    <Box  style={{marginTop:20}}>
        <Box><Typography variant="h4">{categorytype +" Collection"}</Typography></Box>
      <Box
        sx={{
          padding: 0,
          margin: 0,
          width: "auto",
          listStyle: "none",
          display: "flex",
          flexFlow: "wrap row",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        {loading ? (
          <CircularProgress></CircularProgress>
        ) : (
          <>
         
            {categorytype === "Men" && (
              
              <>
             {/* <Box> */}
                {products
                  ?.filter((product) => {
                    return product.category === "men";
                  })
                  .map((product) => (
                    <Product key={product._id} product={product}></Product>
                  ))}
                  {/* </Box> */}
              </>
            )}  
             {categorytype === "Women" &&(
                <>
                {products
                  ?.filter((product) => {
                    return product.category === "women";
                  })
                  .map((product) => (
                    <Product key={product._id} product={product}></Product>
                  ))}
              </>
            )}
            <>
            {categorytype === "Kids" &&(
                <>
                {products
                  ?.filter((product) => {
                    return product.category === "kids";
                  })
                  .map((product) => (
                    <Product key={product._id} product={product}></Product>
                  ))}
              </>
            )}
            </>
          </>
          
        )}
      </Box>
    </Box>
  );
}
