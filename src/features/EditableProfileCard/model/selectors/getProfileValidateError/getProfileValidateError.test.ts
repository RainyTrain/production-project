import { StateSchema } from "app/providers/StoreProvider";
import { ValidateProfileError } from "../../types/editableprofileCardSchema/editableProfileTypeSchema";
import { getProfileValidateErrors } from "./getProfileValidateError";

describe("selector testing", () => {
  test("getProfileData", () => {
    const data = [
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.SERVER_ERROR,
    ];

    const state: DeepPartial<StateSchema> = {
      profile: {
        validateError: [
          ValidateProfileError.INCORRECT_AGE,
          ValidateProfileError.SERVER_ERROR,
        ],
      },
    };

    expect(getProfileValidateErrors(state as StateSchema)).toEqual(data);
  });
  test("getUndefined", () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
  });
});
