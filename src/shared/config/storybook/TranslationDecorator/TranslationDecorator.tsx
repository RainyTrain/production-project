import { StoryFn } from "@storybook/react";
import { Suspense, useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "../../../config/i18n/i18n";

export const TranslationDecorator = (Story: StoryFn) => (
  <Suspense fallback={<div>Loading...</div>}>
    <I18nextProvider i18n={i18n}>
      <Story />
    </I18nextProvider>
  </Suspense>
);

export const withI18next = (Story: StoryFn, context: any) => {
  const { locale } = context.globals;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);

  return (
    <Suspense fallback={<div>loading translations...</div>}>
      <I18nextProvider i18n={i18n}>
        <Story />
      </I18nextProvider>
    </Suspense>
  );
};
