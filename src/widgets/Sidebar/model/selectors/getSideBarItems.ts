import { createSelector } from "@reduxjs/toolkit";
import { getUserAuthData } from "entities/User";
import MainIcon from "shared/assets/icons/MainIcon.svg";
import AboutIcon from "shared/assets/icons/AboutIcon.svg";
import ProfileIcon from "shared/assets/icons/Profile.svg";
import ArticlesIcon from "shared/assets/icons/Articles.svg";
import { SidebarItemType } from "../types/SidebarItemType";
import {
  getAboutPage,
  getArticlesPage,
  getMainPage,
  getProfilePage,
} from "shared/const/router";

export const getSideBarItems = createSelector(getUserAuthData, (data) => {
  const SidebarItemsList: SidebarItemType[] = [
    {
      path: getMainPage(),
      icon: MainIcon,
      text: "Main page",
    },
    {
      path: getAboutPage(),
      icon: AboutIcon,
      text: "About page",
    },
  ];

  if (data) {
    SidebarItemsList.push(
      {
        path: getProfilePage(data.id),
        icon: ProfileIcon,
        text: "Profile page",
        authOnly: true,
      },
      {
        path: getArticlesPage(),
        icon: ArticlesIcon,
        text: "Articles",
        authOnly: true,
      }
    );
  }

  return SidebarItemsList;
});
