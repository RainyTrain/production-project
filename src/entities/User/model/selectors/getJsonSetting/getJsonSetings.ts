import { buildSelector } from "shared/lib/store/buildSelector";
import { JsonSettings } from "../../types/jsonSettings";

export const [useJsonSetting, jsonSettings] = buildSelector(
  (state) => state.user.authData?.jsonSettings
);

export const [useJsonSettingByKey] = buildSelector(
  (state, key: keyof JsonSettings) => state.user.authData?.jsonSettings?.[key]
);
