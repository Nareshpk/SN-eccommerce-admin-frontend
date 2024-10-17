import React from 'react'
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import InstagramIcon from '@mui/icons-material/Instagram';
import List from '@mui/material/List';
import { Divider } from '../../node_modules/@material-ui/core/index';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function Footer() {
    return (
        <div>
            {/* mobile view */}
            <Box>
                <Grid item xs sx={{ display: { xs: "block", sm: "none" } }}>
                    <Grid item xs={2} sx={{ width: "100%", textAlign: "center", flexDirection: "row", justifyContent: "space-between", backgroundColor: "#37474f", height: "100vuh", }}>
                        <Box><Typography sx={{ '&:hover': { color: "#6633FF" }, color: "#fff", fontSize: "16px", marginTop: 4, }} >Get to Know Us </Typography>
                            <List
                                style={{
                                    fontSize: "14px",
                                    color: "#fff",
                                    textDecoration: "none",
                                }}
                                to="/About us"
                            >
                                About us
                            </List>
                            <List
                                style={{
                                    fontSize: "14px",
                                    color: "#fff",
                                    textDecoration: "none",
                                }}
                                to="/Careers"
                            >
                                Careers
                            </List>
                            <List
                                style={{
                                    fontSize: "14px",
                                    color: "#fff",
                                    textDecoration: "none",
                                }}
                                to="/Press Releases"
                            >
                                Press Releases
                            </List>
                            <List
                                style={{
                                    fontSize: "14px",
                                    color: "#fff",
                                    textDecoration: "none",
                                }}
                                to="/Gift a Smile"
                            >
                                Gift a Smile
                            </List>
                            <List
                                style={{
                                    fontSize: "14px",
                                    color: "#fff",
                                    textDecoration: "none",
                                }}
                                to="/DJP Cares"
                            >
                                DJP Cares
                            </List>
                            <List
                                style={{
                                    fontSize: "14px",
                                    color: "#fff",
                                    textDecoration: "none",
                                }}
                                to="/DJP Stories"
                            >
                                DJP Stories
                            </List>
                        </Box>
                        <Divider sx={{ backgroundColor: "#FFFFFF", }} showlabels="true" />
                        <Box> <Typography sx={{ '&:hover': { color: "#6633FF" }, fontSize: "16px", color: "#fff", marginTop: 4, }}>Help </Typography>
                            <List
                                sx={{
                                    fontSize: "14px",
                                    color: "#fff",
                                    textDecoration: "none",
                                }}
                                to="/Payments"
                            >
                                Payments
                            </List>
                            <List
                                sx={{
                                    fontSize: "14px",
                                    color: "#fff",
                                    textDecoration: "none",
                                }}
                                to="/Shipping"
                            >
                                Shipping
                            </List>
                            <List
                                sx={{
                                    fontSize: "14px",
                                    color: "#fff",
                                    textDecoration: "none",
                                }}
                                to="/Cancellation & Returns"
                            >
                                Cancellation & Returns
                            </List>
                            <List
                                sx={{
                                    fontSize: "14px",
                                    color: "#fff",
                                    textDecoration: "none",
                                }}
                                to="/FAQ"
                            >
                                FAQ
                            </List>
                            <List
                                sx={{
                                    fontSize: "14px",
                                    color: "#fff",
                                    textDecoration: "none",
                                }}
                                to="/Track Orders"
                            >
                                Track Orders
                            </List>
                        </Box>
                        <Divider sx={{ backgroundColor: "#FFFFFF", }} showlabels="true" />
                        <Box><Typography sx={{ '&:hover': { color: "#6633FF" }, fontSize: "16px", color: "#fff", marginTop: 2, }}>Let Us Help You </Typography>
                            <List
                                sx={{
                                    fontSize: "14px",
                                    color: "#fff",
                                    textDecoration: "none",
                                }}
                                to="/COVID-19 & DJP"
                            >
                                COVID-19 & DJP
                            </List>
                            <List
                                sx={{
                                    fontSize: "14px",
                                    color: "#fff",
                                    textDecoration: "none",
                                }}
                                to="/Your Account"
                            >
                                Your Account
                            </List>
                            <List
                                sx={{
                                    fontSize: "14px",
                                    color: "#fff",
                                    textDecoration: "none",
                                }}
                                to="/DJP Assitance"
                            >
                                DJP Assitance
                            </List>
                        </Box>
                        <Box><Typography sx={{ '&:hover': { color: "#6633FF" }, fontSize: "16px", color: "#fff", marginTop: 4, }} >Connect With Us </Typography>
                            <List
                                sx={{
                                    fontSize: "14px",
                                    color: "#fff",
                                    textDecoration: "none",
                                }}
                                to="/Twitter"
                            >
                                <TwitterIcon sx={{ height: 15 }} />   Twitter
                            </List>
                            <List
                                sx={{
                                    fontSize: "14px",
                                    color: "#fff",
                                    textDecoration: "none",
                                }}
                                to="/Facebook"
                            >
                                <FacebookIcon sx={{ height: 15 }} />   Facebook
                            </List>
                            <List
                                sx={{
                                    fontSize: "14px",
                                    color: "#fff",
                                    textDecoration: "none",
                                }}
                                to="/Instagram"
                            >
                                <InstagramIcon sx={{ height: 15 }} />   Instagram
                            </List>
                        </Box>
                        <Box>
                            <Typography sx={{ marginTop: 5, color: "#fff", fontSize: "10px", }}>
                                Experience DJP Digital APP on Mobile
                            </Typography>
                            <list >
                                <Typography sx={{ mt: 2 }}>
                                    <img
                                        src="/image/google.jpg"
                                        width="100px"
                                        height="40px"
                                    />
                                </Typography>
                            </list>
                            <list>
                                <img
                                    src="/image/app.jpg"
                                    width="100px"
                                    height="40px"
                                />
                            </list>
                        </Box>
                    </Grid>
                    <Divider sx={{ backgroundColor: "#FFFFFF", marginTop: 4, }} showlabels="true" />
                    <Grid sx={{ justifyContent: "center", flexGrow: 1, display: "flex" }}>
                        <Grid item xs={2} sx={{ width: "100%", textAlign: "center", color: "#fff", flexDirection: "row", justifyContent: "space-between", backgroundColor: "#37474f", height: "100vuh", }}>
                            <Typography

                                sx={{ fontSize: "10px", marginTop: 4, }}
                            >
                                <img
                                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNSIgdmlld0JveD0iMCAwIDE2IDE1Ij4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeDE9IjAlIiB4Mj0iODYuODc2JSIgeTE9IjAlIiB5Mj0iODAuMjAyJSI+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNGRkQ4MDAiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRkZBRjAwIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTS0yLTJoMjB2MjBILTJ6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0idXJsKCNhKSIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMTUuOTMgNS42MTRoLTIuOTQ4VjQuMTRjMC0uODE4LS42NTUtMS40NzMtMS40NzMtMS40NzNIOC41NmMtLjgxNyAwLTEuNDczLjY1NS0xLjQ3MyAxLjQ3M3YxLjQ3NEg0LjE0Yy0uODE4IDAtMS40NjYuNjU2LTEuNDY2IDEuNDc0bC0uMDA3IDguMTA1YzAgLjgxOC42NTUgMS40NzQgMS40NzMgMS40NzRoMTEuNzljLjgxOCAwIDEuNDc0LS42NTYgMS40NzQtMS40NzRWNy4wODhjMC0uODE4LS42NTYtMS40NzQtMS40NzQtMS40NzR6bS00LjQyMSAwSDguNTZWNC4xNGgyLjk0OHYxLjQ3NHoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yIC0yKSIvPgogICAgPC9nPgo8L3N2Zz4K"
                                    alt="img"
                                    height="10px"
                                />
                                <span>&nbsp;Sell On Digital</span>
                            </Typography>
                            <Typography
                                sx={{ fontSize: "12px", marginTop: 4, }}
                            >
                                <img
                                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNSIgaGVpZ2h0PSIxNSIgdmlld0JveD0iMCAwIDE1IDE1Ij4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeDE9IjAlIiB4Mj0iODYuODc2JSIgeTE9IjAlIiB5Mj0iODAuMjAyJSI+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNGRkQ4MDAiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRkZBRjAwIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTS0zLTNoMjB2MjBILTN6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0idXJsKCNhKSIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMTAuNDkyIDNDNi4zNTMgMyAzIDYuMzYgMyAxMC41YzAgNC4xNCAzLjM1MyA3LjUgNy40OTIgNy41QzE0LjY0IDE4IDE4IDE0LjY0IDE4IDEwLjUgMTggNi4zNiAxNC42NCAzIDEwLjQ5MiAzem0zLjE4IDEyTDEwLjUgMTMuMDg4IDcuMzI3IDE1bC44NC0zLjYwN0w1LjM3IDguOTdsMy42OS0uMzE1TDEwLjUgNS4yNWwxLjQ0IDMuMzk4IDMuNjkuMzE1LTIuNzk4IDIuNDIyLjg0IDMuNjE1eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTMgLTMpIi8+CiAgICA8L2c+Cjwvc3ZnPgo="
                                    alt="img"
                                    height="10px"
                                />
                                <span>&nbsp;Advertise</span>
                            </Typography>
                            <Typography
                                sx={{ fontSize: "12px", marginTop: 4, }}
                            >
                                < img
                                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxNyIgdmlld0JveD0iMCAwIDE4IDE3Ij4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeDE9IjAlIiB4Mj0iODYuODc2JSIgeTE9IjAlIiB5Mj0iODAuMjAyJSI+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNGRkQ4MDAiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRkZBRjAwIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTS0xLTFoMjB2MjBILTF6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0idXJsKCNhKSIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMTYuNjY3IDVIMTQuODVjLjA5Mi0uMjU4LjE1LS41NDIuMTUtLjgzM2EyLjQ5NyAyLjQ5NyAwIDAgMC00LjU4My0xLjM3NUwxMCAzLjM1bC0uNDE3LS41NjdBMi41MSAyLjUxIDAgMCAwIDcuNSAxLjY2N2EyLjQ5NyAyLjQ5NyAwIDAgMC0yLjUgMi41YzAgLjI5MS4wNTguNTc1LjE1LjgzM0gzLjMzM2MtLjkyNSAwLTEuNjU4Ljc0Mi0xLjY1OCAxLjY2N2wtLjAwOCA5LjE2NkExLjY2IDEuNjYgMCAwIDAgMy4zMzMgMTcuNWgxMy4zMzRhMS42NiAxLjY2IDAgMCAwIDEuNjY2LTEuNjY3VjYuNjY3QTEuNjYgMS42NiAwIDAgMCAxNi42NjcgNXptMCA2LjY2N0gzLjMzM3YtNWg0LjIzNEw1LjgzMyA5LjAyNWwxLjM1Ljk3NSAxLjk4NC0yLjdMMTAgNi4xNjdsLjgzMyAxLjEzMyAxLjk4NCAyLjcgMS4zNS0uOTc1LTEuNzM0LTIuMzU4aDQuMjM0djV6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMSAtMSkiLz4KICAgIDwvZz4KPC9zdmc+Cg=="
                                    alt="img"
                                    height="10px"
                                />
                                <span>&nbsp;Gift Cards</span>
                            </Typography>

                            <Typography
                                sx={{ fontSize: "12px", marginTop: 4, }}
                            >
                                <img
                                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNSIgaGVpZ2h0PSIxNSIgdmlld0JveD0iMCAwIDE1IDE1Ij4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeDE9IjAlIiB4Mj0iODYuODc2JSIgeTE9IjAlIiB5Mj0iODAuMjAyJSI+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNGRkQ4MDAiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRkZBRjAwIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTS0yLTNoMjB2MjBILTJ6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0idXJsKCNhKSIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNOS41IDNDNS4zNiAzIDIgNi4zNiAyIDEwLjUgMiAxNC42NCA1LjM2IDE4IDkuNSAxOGM0LjE0IDAgNy41LTMuMzYgNy41LTcuNUMxNyA2LjM2IDEzLjY0IDMgOS41IDN6bS43NSAxMi43NWgtMS41di0xLjVoMS41djEuNXptMS41NTMtNS44MTNsLS42NzYuNjljLS41NC41NDgtLjg3Ny45OTgtLjg3NyAyLjEyM2gtMS41di0uMzc1YzAtLjgyNS4zMzgtMS41NzUuODc3LTIuMTIzbC45My0uOTQ1Yy4yNzgtLjI3LjQ0My0uNjQ1LjQ0My0xLjA1NyAwLS44MjUtLjY3NS0xLjUtMS41LTEuNVM4IDcuNDI1IDggOC4yNUg2LjVhMyAzIDAgMSAxIDYgMGMwIC42Ni0uMjcgMS4yNi0uNjk3IDEuNjg4eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIgLTMpIi8+CiAgICA8L2c+Cjwvc3ZnPgo="
                                    alt="img"
                                    height="10px"
                                />
                                <span> &nbsp;Help Center</span>
                            </Typography>
                            <Typography
                                sx={{ fontSize: "10px", marginTop: 4, }}
                            >
                                <span>©</span>2021-2050 Digital

                            </Typography>
                            <Typography
                                sx={{ marginTop: 4, }}

                            >
                                <img
                                    src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/payment-method_69e7ec.svg"
                                    alt="img"
                                    width="210"
                                />
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
            {/* mobile view end */}
            <Box>
                <Grid item sx={{ display: { xs: "none", sm: "block" },zIndex:-999, }}>
                    <Box sx={{ justifyContent: "center", flex: 1, display: "flex",margin:0 ,bottom:0,height: "calc(15% - 50px)"}}>
                        <Grid item xs={2} sx={{ width: "100%", textAlign: "center", flexDirection: "row", justifyContent: "space-between", backgroundColor: "#37474f",}}>
                            <Box><Typography sx={{ '&:hover': { color: "#6633FF" }, color: "#fff", fontSize: "16px", marginTop: 4, }} >Get to Know Us </Typography>
                                <List
                                    style={{
                                        fontSize: "14px",
                                        color: "#fff",
                                        textDecoration: "none",
                                    }}
                                    to="/About us"
                                >
                                    About us
                                </List>
                                <List
                                    style={{
                                        fontSize: "14px",
                                        color: "#fff",
                                        textDecoration: "none",
                                    }}
                                    to="/Careers"
                                >
                                    Careers
                                </List>
                                <List
                                    style={{
                                        fontSize: "14px",
                                        color: "#fff",
                                        textDecoration: "none",
                                    }}
                                    to="/Press Releases"
                                >
                                    Press Releases
                                </List>
                                <List
                                    style={{
                                        fontSize: "14px",
                                        color: "#fff",
                                        textDecoration: "none",
                                    }}
                                    to="/Gift a Smile"
                                >
                                    Gift a Smile
                                </List>
                                <List
                                    style={{
                                        fontSize: "14px",
                                        color: "#fff",
                                        textDecoration: "none",
                                    }}
                                    to="/DJP Cares"
                                >
                                    DJP Cares
                                </List>
                                <List
                                    style={{
                                        fontSize: "14px",
                                        color: "#fff",
                                        textDecoration: "none",
                                    }}
                                    to="/DJP Stories"
                                >
                                    DJP Stories
                                </List>
                            </Box>
                        </Grid>
                        <Grid item xs={2} sx={{ width: "100%", textAlign: "center", display: "flex", flexDirection: "row", justifyContent: "space-between", backgroundColor: "#37474f", height: "100vuh", }}>
                            <Box> <Typography sx={{ '&:hover': { color: "#6633FF" }, fontSize: "16px", color: "#fff", marginTop: 4, }}>Help </Typography>
                                <List
                                    style={{
                                        fontSize: "14px",
                                        color: "#fff",
                                        textDecoration: "none",
                                    }}
                                    to="/Payments"
                                >
                                    Payments
                                </List>
                                <List
                                    style={{
                                        fontSize: "14px",
                                        color: "#fff",
                                        textDecoration: "none",
                                    }}
                                    to="/Shipping"
                                >
                                    Shipping
                                </List>
                                <List
                                    style={{
                                        fontSize: "14px",
                                        color: "#fff",
                                        textDecoration: "none",
                                    }}
                                    to="/Cancellation & Returns"
                                >
                                    Cancellation & Returns
                                </List>
                                <List
                                    style={{
                                        fontSize: "14px",
                                        color: "#fff",
                                        textDecoration: "none",
                                    }}
                                    to="/FAQ"
                                >
                                    FAQ
                                </List>
                                <List
                                    style={{
                                        fontSize: "14px",
                                        color: "#fff",
                                        textDecoration: "none",
                                    }}
                                    to="/Track Orders"
                                >
                                    Track Orders
                                </List>
                            </Box>
                        </Grid>
                        <Grid item xs={2} sx={{ width: "100%", textAlign: "center", display: "flex", flexDirection: "row", justifyContent: "space-between", backgroundColor: "#37474f", height: "100vuh", }}>
                            <Box><Typography sx={{ '&:hover': { color: "#6633FF" }, fontSize: "16px", color: "#fff", marginTop: 4, }}>Let Us Help You </Typography>
                                <List
                                    style={{
                                        fontSize: "14px",
                                        color: "#fff",
                                        textDecoration: "none",
                                    }}
                                    to="/COVID-19 & DJP"
                                >
                                    COVID-19 & DJP
                                </List>
                                <List
                                    style={{
                                        fontSize: "14px",
                                        color: "#fff",
                                        textDecoration: "none",
                                    }}
                                    to="/Your Account"
                                >
                                    Your Account
                                </List>
                                <List
                                    style={{
                                        fontSize: "14px",
                                        color: "#fff",
                                        textDecoration: "none",
                                    }}
                                    to="/DJP Assitance"
                                >
                                    DJP Assitance
                                </List>
                            </Box>
                        </Grid>
                        <Grid item xs={2} sx={{ width: "100%", textAlign: "center", display: "flex", flexDirection: "row", justifyContent: "space-between", backgroundColor: "#37474f", height: "100vuh", }}>
                            <Box><Typography sx={{ '&:hover': { color: "#6633FF" }, fontSize: "16px", color: "#fff", marginTop: 4, }} >Connect With Us </Typography>
                                <List
                                    style={{
                                        fontSize: "14px",
                                        color: "#fff",
                                        textDecoration: "none",
                                    }}
                                    to="/Twitter"
                                >
                                    <TwitterIcon sx={{ height: 15 }} />   Twitter
                                </List>
                                <List
                                    style={{
                                        fontSize: "14px",
                                        color: "#fff",
                                        textDecoration: "none",
                                    }}
                                    to="/Facebook"
                                >
                                    <FacebookIcon sx={{ height: 15 }} />   Facebook
                                </List>
                                <List
                                    sx={{
                                        fontSize: "16px",
                                        color: "#fff",

                                    }}
                                    to="/Instagram"
                                >
                                    <InstagramIcon sx={{ height: 15 }} />  Instagram
                                </List>
                            </Box>
                        </Grid>
                        <Grid item xs={2} sx={{ width: "100%", textAlign: "center", display: "flex", flexDirection: "row", justifyContent: "space-between", backgroundColor: "#37474f", height: "100vuh", }}>
                            <Box>
                                <Typography sx={{ marginTop: 4, color: "#fff", fontSize: "10px", fontWeight:"bold" }}>
                                    Experience DJP Digital APP Mobile
                                </Typography>
                                <list>
                                    <Typography sx={{ marginTop: 2 }}>
                                        <img
                                            src="/image/google.jpg"
                                            width="100px"
                                            height="40px"
                                        />
                                    </Typography>
                                </list>
                                <br />
                                <list>
                                    <img
                                        src="/image/app.jpg"
                                        width="100px"
                                        height="40px"
                                    />
                                </list>
                            </Box>
                        </Grid>
                    </Box>
                </Grid>
                <Divider sx={{ backgroundColor: "#FFFFFF", marginTop: 4, }} showlabels="true" />
                <Box>
                    <Grid item sx={{ display: { xs: "none", sm: "block" } }}>

                        <Grid sx={{ justifyContent: "center", display: "flex", textAlign: "center", backgroundColor: "#37474f", color: "#fff", }}>
                            <Grid item xs={2} sx={{ width: "100%", textAlign: "center", color: "#fff", flexDirection: "row", justifyContent: "space-between", backgroundColor: "#37474f", height: "100vuh", }}>
                                <Typography
                                    sx={{ fontSize: "10px", marginTop: 4, fontWeight:"bold" }}
                                >
                                    <img
                                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNSIgdmlld0JveD0iMCAwIDE2IDE1Ij4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeDE9IjAlIiB4Mj0iODYuODc2JSIgeTE9IjAlIiB5Mj0iODAuMjAyJSI+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNGRkQ4MDAiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRkZBRjAwIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTS0yLTJoMjB2MjBILTJ6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0idXJsKCNhKSIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMTUuOTMgNS42MTRoLTIuOTQ4VjQuMTRjMC0uODE4LS42NTUtMS40NzMtMS40NzMtMS40NzNIOC41NmMtLjgxNyAwLTEuNDczLjY1NS0xLjQ3MyAxLjQ3M3YxLjQ3NEg0LjE0Yy0uODE4IDAtMS40NjYuNjU2LTEuNDY2IDEuNDc0bC0uMDA3IDguMTA1YzAgLjgxOC42NTUgMS40NzQgMS40NzMgMS40NzRoMTEuNzljLjgxOCAwIDEuNDc0LS42NTYgMS40NzQtMS40NzRWNy4wODhjMC0uODE4LS42NTYtMS40NzQtMS40NzQtMS40NzR6bS00LjQyMSAwSDguNTZWNC4xNGgyLjk0OHYxLjQ3NHoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yIC0yKSIvPgogICAgPC9nPgo8L3N2Zz4K"
                                        alt="img"
                                        height="10px"
                                    />
                                    &nbsp;Sell On Digital
                                </Typography>
                            </Grid>
                            <Grid item xs={2} sx={{ width: "100%", textAlign: "center", color: "#fff", flexDirection: "row", justifyContent: "space-between", backgroundColor: "#37474f", height: "100vuh", }}>
                                <Box>
                                    <Typography
                                        sx={{ fontSize: "12px", marginTop: 4, fontWeight:"bold" }}
                                    >
                                        <img
                                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNSIgaGVpZ2h0PSIxNSIgdmlld0JveD0iMCAwIDE1IDE1Ij4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeDE9IjAlIiB4Mj0iODYuODc2JSIgeTE9IjAlIiB5Mj0iODAuMjAyJSI+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNGRkQ4MDAiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRkZBRjAwIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTS0zLTNoMjB2MjBILTN6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0idXJsKCNhKSIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMTAuNDkyIDNDNi4zNTMgMyAzIDYuMzYgMyAxMC41YzAgNC4xNCAzLjM1MyA3LjUgNy40OTIgNy41QzE0LjY0IDE4IDE4IDE0LjY0IDE4IDEwLjUgMTggNi4zNiAxNC42NCAzIDEwLjQ5MiAzem0zLjE4IDEyTDEwLjUgMTMuMDg4IDcuMzI3IDE1bC44NC0zLjYwN0w1LjM3IDguOTdsMy42OS0uMzE1TDEwLjUgNS4yNWwxLjQ0IDMuMzk4IDMuNjkuMzE1LTIuNzk4IDIuNDIyLjg0IDMuNjE1eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTMgLTMpIi8+CiAgICA8L2c+Cjwvc3ZnPgo="
                                            alt="img"
                                            height="10px"
                                        />
                                       &nbsp;Advertise
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={2} sx={{ width: "100%", textAlign: "center", color: "#fff", flexDirection: "row", justifyContent: "space-between", backgroundColor: "#37474f", height: "100vuh", }}>
                                <Typography
                                    sx={{ fontSize: "12px", marginTop: 4,  fontWeight:"bold"}}
                                >
                                    < img
                                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxNyIgdmlld0JveD0iMCAwIDE4IDE3Ij4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeDE9IjAlIiB4Mj0iODYuODc2JSIgeTE9IjAlIiB5Mj0iODAuMjAyJSI+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNGRkQ4MDAiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRkZBRjAwIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTS0xLTFoMjB2MjBILTF6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0idXJsKCNhKSIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMTYuNjY3IDVIMTQuODVjLjA5Mi0uMjU4LjE1LS41NDIuMTUtLjgzM2EyLjQ5NyAyLjQ5NyAwIDAgMC00LjU4My0xLjM3NUwxMCAzLjM1bC0uNDE3LS41NjdBMi41MSAyLjUxIDAgMCAwIDcuNSAxLjY2N2EyLjQ5NyAyLjQ5NyAwIDAgMC0yLjUgMi41YzAgLjI5MS4wNTguNTc1LjE1LjgzM0gzLjMzM2MtLjkyNSAwLTEuNjU4Ljc0Mi0xLjY1OCAxLjY2N2wtLjAwOCA5LjE2NkExLjY2IDEuNjYgMCAwIDAgMy4zMzMgMTcuNWgxMy4zMzRhMS42NiAxLjY2IDAgMCAwIDEuNjY2LTEuNjY3VjYuNjY3QTEuNjYgMS42NiAwIDAgMCAxNi42NjcgNXptMCA2LjY2N0gzLjMzM3YtNWg0LjIzNEw1LjgzMyA5LjAyNWwxLjM1Ljk3NSAxLjk4NC0yLjdMMTAgNi4xNjdsLjgzMyAxLjEzMyAxLjk4NCAyLjcgMS4zNS0uOTc1LTEuNzM0LTIuMzU4aDQuMjM0djV6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMSAtMSkiLz4KICAgIDwvZz4KPC9zdmc+Cg=="
                                        alt="img"
                                        height="10px"
                                    />
                                   &nbsp;Gift Cards
                                </Typography>
                            </Grid>
                            <Grid item xs={2} sx={{ width: "100%", textAlign: "center", color: "#fff", flexDirection: "row", justifyContent: "space-between", backgroundColor: "#37474f", height: "100vuh", }}>
                                <Typography
                                    sx={{ fontSize: "12px", marginTop: 4, fontWeight:"bold" }}
                                >
                                    <img
                                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNSIgaGVpZ2h0PSIxNSIgdmlld0JveD0iMCAwIDE1IDE1Ij4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeDE9IjAlIiB4Mj0iODYuODc2JSIgeTE9IjAlIiB5Mj0iODAuMjAyJSI+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNGRkQ4MDAiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRkZBRjAwIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTS0yLTNoMjB2MjBILTJ6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0idXJsKCNhKSIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNOS41IDNDNS4zNiAzIDIgNi4zNiAyIDEwLjUgMiAxNC42NCA1LjM2IDE4IDkuNSAxOGM0LjE0IDAgNy41LTMuMzYgNy41LTcuNUMxNyA2LjM2IDEzLjY0IDMgOS41IDN6bS43NSAxMi43NWgtMS41di0xLjVoMS41djEuNXptMS41NTMtNS44MTNsLS42NzYuNjljLS41NC41NDgtLjg3Ny45OTgtLjg3NyAyLjEyM2gtMS41di0uMzc1YzAtLjgyNS4zMzgtMS41NzUuODc3LTIuMTIzbC45My0uOTQ1Yy4yNzgtLjI3LjQ0My0uNjQ1LjQ0My0xLjA1NyAwLS44MjUtLjY3NS0xLjUtMS41LTEuNVM4IDcuNDI1IDggOC4yNUg2LjVhMyAzIDAgMSAxIDYgMGMwIC42Ni0uMjcgMS4yNi0uNjk3IDEuNjg4eiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIgLTMpIi8+CiAgICA8L2c+Cjwvc3ZnPgo="
                                        alt="img"
                                        height="10px"
                                    />
                                    &nbsp;Help Center
                                </Typography>
                            </Grid>
                            <Grid item xs={2} sx={{ width: "100%", textAlign: "center", color: "#fff", flexDirection: "row", justifyContent: "space-between", backgroundColor: "#37474f", height: "100vuh", }}>
                                <Typography
                                    sx={{ fontSize: "10px", marginTop: 4, fontWeight:"bold" }}
                                >
                                    <span>©</span>2021-2050 Digital
                                </Typography>
                            </Grid>
                            <Grid item xs={2} sx={{ width: "100%", textAlign: "center", color: "#fff", flexDirection: "row", justifyContent: "space-between", backgroundColor: "#37474f", height: "100vuh", }}>
                                <Typography
                                    sx={{ marginTop: 4, }}
                                >
                                    <img
                                        src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/payment-method_69e7ec.svg"
                                        alt="img"
                                        width="210"
                                    />
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </div >
    )
}


