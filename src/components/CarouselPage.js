import { useCallback, useEffect, useState } from 'react';
import { Box, Button, Typography } from '../../node_modules/@material-ui/core/index';
import { useSelector } from '../../node_modules/react-redux/es/exports';
import Product from './Product';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import IconButton from "@mui/material/IconButton";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export function CarouselPage() {
    // const dispatch = useDispatch();
  const productMenList = useSelector((state) => state.productMenList);
  let { menProducts } = productMenList;
  const [pre, setpre] = useState(0);
  const [next, setnext] = useState(7);
  const [page, setpage] = useState(1);
  let menProductArray =menProducts?.slice(pre,next);
const productLength =menProducts?.length;
// console.log("menProductArray", menProductArray)
  const [menproductslist, setMenproductslist] = useState();
  const movePrevious = useCallback(() => {
    setTimeout(() => {
    // console.log("pre111============>>", pre,next)
    // setMenproductslist([])
    setMenproductslist(menProductArray?.slice(pre>0 ?setpre(pre-6):pre,pre>0 ?setnext(next-6):next));
    // console.log("pre2222============>>", pre,next)
  }, 100);
  })
  const moveNext = () => {
    // console.log("next1111============>>", productLength,pre,next)
    setTimeout(() => {
    // let nextarray=menProductArray?.slice(next< productLength?setpre(pre+2):pre,next< productLength?setnext(next+2):next )
    //   setMenproductslist([])
    // setMenproductslist([...nextarray]);
if(next< productLength){
  setpage(page+1)
  setMenproductslist([])
  let nextarray=menProductArray.slice(setpre(pre+6),setnext(next+6))
    //   setMenproductslist([])
    setMenproductslist([...nextarray]);
    // console.log("nextarray", nextarray)
}
    // console.log("next2222============>>", pre,next)
  }, 100);
  }
  const moveStart = useCallback(() => {
    setpage(0);
    console.log("first++++>>")
    setpre(0)
    setnext(5)
    // console.log("pre111============>>", pre,next)
    setMenproductslist([])
    let nextarray=menProductArray.slice( pre,next)
    setMenproductslist(...nextarray);
    // console.log("pre2222============>>", pre,next)
  })

  useEffect(() => {
    setMenproductslist(menProductArray)
  }, [menProductArray]);



  return (
    <Box >
        <Typography
          variant="h4"
          sx={{ '&:hover': { color: "#6633FF", textDecoration: "underline" } }}
        >
          Products For Men
        </Typography>
        {/* <Carousel
            className="new1"
            mouseTracking
            enableSwipe={true}
            pagination={false}
          > */}
           
          <div><p>Page {page}</p></div>
          <Button onClick={moveStart}>Start Over</Button>
        
           
        {/* <List component={Stack} direction="row">
        <Button variant="text" style={{backgroundColor:"red",hight:48}} onClick={movePrevious}>Previous</Button>
        <div style={{alignItems:'center'}}><a className="new1">&laquo;</a></div>
          {menproductslist?.map((menProduct, index) => (
            <ListItem key={index}>
              <Box >
                <Product product={menProduct}></Product>
              </Box>
            </ListItem>
          ))}
          <div>
          
          </div>
          <div style={{alignItem:"center"}}>
        <Button variant="contained" style={{backgroundColor:"red",alignItems:"center",hight:10,mt:100}} onClick={moveNext}>Next</Button>
        </div>
        </List> */}
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
        <IconButton  variant="contained" style={{backgroundColor: "rgb(11, 113, 246)",color:"#fff",alignItems:"center",borderRadius:"50%",width:30,height:30}} onClick={movePrevious}><ArrowBackIosIcon style={{ width:15,textAlign:"center" }}/></IconButton>
          {menproductslist?.map((menProduct, index) => (
            // console.log("menproductslist222",menproductslist),
            // <ListItem key={index}>
              <Box key={index}>
                <Product product={menProduct}></Product>
              </Box>
            // </ListItem>
          ))}

          <IconButton variant="contained" style={{backgroundColor: "rgb(11, 113, 246)",color:"#fff",alignItems:"center",borderRadius:"50%",width:30,height:30}} onClick={moveNext}><ArrowForwardIosIcon style={{ width:15,textAlign:"center" }}/></IconButton>
        </Box>
        
        {/* </Carousel> */}
        {/* <span onClick={() => moveRight}>Right</span> */}
       
     
    </Box>
  )
}
