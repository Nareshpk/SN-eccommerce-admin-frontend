import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { summaryOrder } from "../actions/orderActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import Box from "@mui/material/Box";
import { Typography } from "../../node_modules/@material-ui/core/index";
import Chart from "react-google-charts";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import SellIcon from "@mui/icons-material/Sell";
export default function DashboardScreen() {
  // const [data, setData] = useState([]);

  const orderSummary = useSelector((state) => state.orderSummary);
  const { loading, summary, error } = orderSummary;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(summaryOrder());
  }, [dispatch]);
  return (
    <div>
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox variant='danger'>{error}</MessageBox>
      ) : (
        <>
          <Typography style={{ marginTop: 50 }} variant='h4'>
            Dashboard
          </Typography>
          <Box>
            {/* <Box item sx={{ display: { xs: "none", sm: "block" } }}> */}
            {/* <Grid> */}
            <Box
              sx={{
                p: 2,
                m: 2,
                height: 100,
                display: "flex",
                justifyContent: "space-between",
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              }}
            >
              <Box xs={4} sx={{ margin: 0 }}>
                <Box>
                  <Typography variant='h5'>
                    Users
                    <div className='summary-body'>
                      {" "}
                      <PersonIcon sx={{ height: 35 }} />
                      {summary.users[0].numUsers}
                    </div>
                  </Typography>
                </Box>
              </Box>
              <Box xs={4} sx={{ margin: 0 }}>
                <Box>
                  <Typography variant='h5'>
                    Orders
                    <div className='summary-body'>
                      {" "}
                      <ShoppingCartIcon sx={{ height: 35 }} />
                      {summary.orders[0] ? summary.orders[0].numOrders : 0}
                    </div>
                  </Typography>
                </Box>
              </Box>
              <Box xs={4} sx={{ margin: 0 }}>
                <Box>
                  <Typography variant='h5'>
                    Sales
                    <div className='summary-body'>
                      {" "}
                      <SellIcon sx={{ height: 35 }} /> $
                      {summary.orders[0]
                        ? summary.orders[0].totalSales.toFixed(2)
                        : 0}
                    </div>
                  </Typography>
                </Box>
              </Box>
            </Box>
            {/* </Box> */}
          </Box>
          <Box>
            <Box
              sx={{
                p: 2,
                m: 2,
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              }}
            >
              <h2>Daily Order</h2>
              {summary.dailyOrders?.length === 0 ? (
                <MessageBox>No Sale</MessageBox>
              ) : (
                <Chart
                  width='100%'
                  height='100%'
                  chartType='PieChart'
                  loader={<div>Loading Chart</div>}
                  data={[
                    ["Date", "Orders"],
                    ...summary.dailyOrders.map((x) => [x._id, x.orders]),
                  ]}
                ></Chart>
              )}
            </Box>
          </Box>
          <Box>
            <Box
              sx={{
                p: 2,
                m: 2,
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              }}
            >
              <h2>Sales</h2>
              {summary.dailyOrders?.length === 0 ? (
                <MessageBox>No Sale</MessageBox>
              ) : (
                <Chart
                  width='100%'
                  height='100%'
                  chartType='AreaChart'
                  loader={<div>Loading Chart</div>}
                  data={[
                    ["Date", "Sales"],
                    ...summary.dailyOrders.map((x) => [x._id, x.sales]),
                  ]}
                ></Chart>
              )}
            </Box>
          </Box>
          <Box
            sx={{
              p: 2,
              m: 2,
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            }}
          >
            <h2>Categories</h2>
            {summary.productCategories?.length === 0 ? (
              <MessageBox>No Category </MessageBox>
            ) : (
              <Chart
                width='100%'
                height='100%'
                chartType='PieChart'
                loader={<div>Loading Chart</div>}
                data={[
                  ["Category", "Products"],
                  ...summary.productCategories.map((x) => [x._id, x.count]),
                ]}
              />
            )}
          </Box>
          <Box
            sx={{
              p: 2,
              m: 2,
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            }}
          >
            <h2>Categories</h2>
            {summary.womenCategories?.length === 0 ? (
              <MessageBox>No Category </MessageBox>
            ) : (
              <Chart
                width='100%'
                height='100%'
                chartType='PieChart'
                loader={<div>Loading Chart</div>}
                data={[
                  ["Category", "Products"],
                  ...summary.womenCategories.map((x) => [x._id, x.count]),
                ]}
              />
            )}
          </Box>
          <Box
            sx={{
              p: 2,
              m: 2,
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            }}
          >
            <h2>Categories</h2>
            {summary.kidCategories?.length === 0 ? (
              <MessageBox>No Category </MessageBox>
            ) : (
              <Chart
                width='100%'
                height='100%'
                chartType='PieChart'
                loader={<div>Loading Chart</div>}
                data={[
                  ["Category", "Kids"],
                  ...summary.kidCategories.map((x) => [x._id, x.count]),
                ]}
              />
            )}
          </Box>
        </>
      )}
    </div>
  );
}
