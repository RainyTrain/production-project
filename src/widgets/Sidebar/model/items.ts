import React from "react";
import { RoutePath } from "shared/config/RouteConfig/RouteConfig";
import MainIcon from "shared/assets/icons/MainIcon.svg";
import AboutIcon from "shared/assets/icons/AboutIcon.svg";
import ProfileIcon from "shared/assets/icons/Profile.svg";

export interface SidebarItemType {
  path: string;
  text: string;
  icon: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const SidebarItemsList: SidebarItemType[] = [
  {
    path: RoutePath.main,
    icon: MainIcon,
    text: "Main page",
  },
  {
    path: RoutePath.about,
    icon: AboutIcon,
    text: "About page",
  },
  {
    path: RoutePath.profile,
    icon: ProfileIcon,
    text: "Profile page",
  },
];
