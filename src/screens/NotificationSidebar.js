/* eslint-disable react/prop-types */
import {
  Divider,
  Drawer,
  List,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  clearnotification,
  deletenotification,
  notificationtest,
} from "../actions/prodEnquiryAction";
import {
  NOTIFICATION_CLEAR_RESET,
  NOTIFICATION_DELETE_RESET,
} from "../constants/prodEnquiryConstant";
import Box from "@mui/material/Box";
import NotificationsPausedIcon from "@mui/icons-material/NotificationsPaused";

const useStyles = makeStyles((theme) => ({
  drawer: {
    flexShrink: 0,
  },
  drawerPaper: {
    width: 300,
    height: "calc(100% - 64px)",
    top: 64,
  },
  largeIcon: {
    width: 60,
    height: 60,
  },
  toolbar: theme.mixins.toolbar,
}));

const NotificationSidebar = ({ open }) => {
  const notificationall = useSelector((state) => state.notificationall);
  const { notificationlist } = notificationall;

  const notificationdel = useSelector((state) => state.notificationdel);
  const { success } = notificationdel;

  const notificationclearall = useSelector(
    (state) => state.notificationclearall,
  );
  const { success: successall } = notificationclearall;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleIconClicks = (event, notifications) => {
    if (notifications) {
      dispatch(deletenotification(notifications._id));
    }
    navigate(`/prodEnquiry`);
  };

  const [ setIds] = useState();
  const handledeleteClick = () => {
    const extractedIds = notificationlist.map((item) => item._id);
    if (extractedIds) {
      dispatch(clearnotification(extractedIds));
    }
    setIds(extractedIds);
  };

  useEffect(() => {
    dispatch(notificationtest());
    if (success) {
      dispatch({ type: NOTIFICATION_DELETE_RESET });
    }
    if (successall) {
      dispatch({ type: NOTIFICATION_CLEAR_RESET });
    }
  }, [dispatch, success, successall]);
  const classes = useStyles();
  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="right"
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Card>
        <CardHeader title="Notifications" />
        <Divider />
        <List>
          {notificationlist?.map((notification, index) => (
            <ListItem key={index}>
              <ListItemText>
                <Typography variant="body1" style={{ fontSize: "15px" }}>
                  {notification.fname}
                </Typography>
                <Typography variant="body2" style={{ fontSize: "13px" }}>
                  {notification.createdAt.substring(0, 10)}
                </Typography>
                <Typography variant="body2" style={{ fontSize: "13px" }}>
                  {notification.createdAt.substring(11, 16)}
                </Typography>
              </ListItemText>
              <ListItemButton
                onClick={(event, index) =>
                  handleIconClicks(event, notification, index)
                }
                sx={{
                  fontWeight: "bold",
                  color: "blue",
                  fontSize: "medium",
                }}
              >
                Details
              </ListItemButton>
            </ListItem>
          ))}
          <div>
            {notificationlist?.length === 0 && (
              <Box style={{ fontSize: "15px" }}>
                No New Notifications
                <IconButton iconStyle={classes.largeIcon}>
                  <NotificationsPausedIcon />
                </IconButton>
              </Box>
            )}
          </div>
          <List>
            <div className="col-3">
              {notificationlist?.length >= 1 && (
                <IconButton
                  sx={{
                    color: "blue",
                    fontSize: 14,
                  }}
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  color="black"
                  onClick={(event, notification) =>
                    handledeleteClick(event, notification)
                  }
                >
                  Markall read
                  <DoneAllIcon />
                </IconButton>
              )}
            </div>
          </List>
        </List>
      </Card>
    </Drawer>
  );
};

export default NotificationSidebar;
