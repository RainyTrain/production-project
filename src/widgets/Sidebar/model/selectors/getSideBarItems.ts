import { createSelector } from "@reduxjs/toolkit";
import { getUserAuthData } from "entities/User";
import { RoutePath } from "shared/config/RouteConfig/RouteConfig";
import MainIcon from "shared/assets/icons/MainIcon.svg";
import AboutIcon from "shared/assets/icons/AboutIcon.svg";
import ProfileIcon from "shared/assets/icons/Profile.svg";
import ArticlesIcon from "shared/assets/icons/Articles.svg";
import { SidebarItemType } from "../types/SidebarItemType";

export const getSideBarItems = createSelector(getUserAuthData, (data) => {
  const SidebarItemsList: SidebarItemType[] = [
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
  ];

  if (data) {
    SidebarItemsList.push(
      {
        path: `${RoutePath.profile}${data.id}`,
        icon: ProfileIcon,
        text: "Profile page",
        authOnly: true,
      },
      {
        path: RoutePath.articles,
        icon: ArticlesIcon,
        text: "Articles",
        authOnly: true,
      }
    );
  }

  return SidebarItemsList;
});
