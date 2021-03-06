import { AccordionDetails, Avatar, Drawer, Slider, withStyles } from "@material-ui/core";
import CloseOutlined from "@material-ui/icons/CloseOutlined";
import SearchRounded from "@material-ui/icons/SearchRounded";
import MailOutlineOutlined from "@material-ui/icons/MailOutlineOutlined"
import NotificationImportantOutlined from "@material-ui/icons/NotificationImportantOutlined";
import Settings from "@material-ui/icons/Settings";




export const StyledLocateSlider = withStyles({
    root: {
        width: "100%",
        marginTop: "20px",
        marginBottom: "20px"
    },
    colorPrimary: {
        color: "white"
    },
    thumb: {
        color: "orange"
    }
})(Slider)





export const StyledAccordionDetails = withStyles({
    root: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        minHeight: "100px",
        overflow: "auto",
        color: "white"
    }
})(AccordionDetails)




export const StyledDrawer = withStyles({
    paperAnchorLeft: {
        backgroundColor: "#383331"
    }
})(Drawer);



export const StyledSettings = withStyles({
    root: {
        color: "whitesmoke", "&:hover": {
            color: "lightgray"
        }
    }
})(Settings);



export const StyledNotificationImportantOutlined = withStyles({
    root: {
        color: "#f6b800",
        "&:hover": {
            color: "#c3950c"
        }
    }
})(NotificationImportantOutlined);



export const StyledCloseOutlined = withStyles({
    root: {
        color: "whitesmoke",
        "&:hover": {
            color: "red"
        }
    }
})(CloseOutlined);



export const StyledMailOutlineOutlined = withStyles({
    root: {
        color: "lightgray",
        "&:hover": {
            color: "gray"
        }
    }
})(MailOutlineOutlined);



export const StyledSearchRounded = withStyles({
    root: {
        color: "whitesmoke",
        marginLeft: "25px"
    }
})(SearchRounded);

export const StyledAvatar = withStyles({
    root: {
        width: "65px",
        height: "65px"
    }
})(Avatar);