/* 
* This file is an implementation inspired by the way
* Angular organizes the modularization of components in
* its projects
*/

/* import ArthurLogo from '@/assets/icons/logo-marca.svg'; */

import dockBottom from "@/assets/icons/Adwaita/dock-bottom-symbolic.svg";
import dockTop from "@/assets/icons/Adwaita/dock-top-symbolic.svg";

// Light mode:
import homeLight from "@/assets/icons/Adwaita/light-mode/user-home-symbolic.svg";
import projectLight from "@/assets/icons/Adwaita/light-mode/shapes-large-symbolic.svg";

// Dark Mode:
import homeDark from "@/assets/icons/Adwaita/dark-mode/user-home-symbolic.svg";
import projectDark from "@/assets/icons/Adwaita/dark-mode/shapes-large-symbolic.svg";

const Adwaita = {
    dockBottom,
    dockTop,
    homeLight,
    homeDark,
    projectLight,
    projectDark
    /*  ImgProfile,
     VideoProfile,
     VideoProfileMobile,
     DashIconOn,
     DashIconOff,
 
     HomeIconLight,
     ProjectsIconLight,
     MyLinksLight,
     CvIconLight,
 
     HomeIconDark,
     ProjectsIconDark,
     MyLinksDark,
     CvIconDark,
 
     videoShortly */
};

export default Adwaita;