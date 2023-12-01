import { createSelector } from "@reduxjs/toolkit";
import { getArticleData } from "entities/Article";
import { getUserAuthData } from "entities/User";

export const articleDetailsHeaderSelector = createSelector(
  getUserAuthData,
  getArticleData,
  (auth, article) => {
    if (!auth || !article) {
      return false;
    }
    return auth.id === article.user.id;
  }
);
