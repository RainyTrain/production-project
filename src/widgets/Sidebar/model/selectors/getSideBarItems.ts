import { createSelector } from "@reduxjs/toolkit";
import { getUserAuthData } from "entities/User";
import MainIcon from "shared/assets/icons/MainIcon.svg";
import AboutIcon from "shared/assets/icons/AboutIcon.svg";
import ProfileIcon from "shared/assets/icons/Profile.svg";
import ArticlesIcon from "shared/assets/icons/Articles.svg";
import MainIconRedesigned from "shared/assets/icons/home.svg";
import AboutIconRedesigned from "shared/assets/icons/Info.svg";
import ProfileIconRedesigned from "shared/assets/icons/avatar.svg";
import ArticlesIconRedesigned from "shared/assets/icons/article.svg";
import {
  getAboutPage,
  getArticlesPage,
  getMainPage,
  getProfilePage,
} from "shared/const/router";
import { toggleFeature } from "shared/features/lib/toggleFeature";
import i18n from "shared/config/i18n/i18n";
import { SidebarItemType } from "../types/SidebarItemType";

export const getSideBarItems = createSelector(getUserAuthData, (data) => {
  const SidebarItemsList: SidebarItemType[] = [
    {
      path: getMainPage(),
      icon: toggleFeature({
        name: "isAppReDesigned",
        off: () => MainIcon,
        on: () => MainIconRedesigned,
      }),
      text: i18n.t("Main page"),
    },
    {
      path: getAboutPage(),
      icon: toggleFeature({
        name: "isAppReDesigned",
        off: () => AboutIcon,
        on: () => AboutIconRedesigned,
      }),
      text: i18n.t("About page"),
    },
  ];

  if (data) {
    SidebarItemsList.push(
      {
        path: getProfilePage(data.id),
        icon: toggleFeature({
          name: "isAppReDesigned",
          off: () => ProfileIcon,
          on: () => ProfileIconRedesigned,
        }),
        text: i18n.t("Profile page"),
        authOnly: true,
      },
      {
        path: getArticlesPage(),
        icon: toggleFeature({
          name: "isAppReDesigned",
          off: () => ArticlesIcon,
          on: () => ArticlesIconRedesigned,
        }),
        text: i18n.t("Articles"),
        authOnly: true,
      }
    );
  }

  return SidebarItemsList;
});
