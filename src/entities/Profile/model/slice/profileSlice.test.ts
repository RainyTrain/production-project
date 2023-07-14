import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { fetchProfileData } from "../services/fetchProfileData/fetchProfileData";
import { ProfileSchema } from "../types/profile";
import { profileActions, profileReducer } from "./profileSlice";

describe("testing profile slice", () => {
  test("cancelUpdate", () => {
    const state: DeepPartial<ProfileSchema> = {
      data: {
        first: "admin",
        second: "admin",
      },
      readonly: false,
      form: {},
      validateError: [],
    };

    expect(
      profileReducer(state as ProfileSchema, profileActions.cancelUpdate())
    ).toEqual({
      readonly: true,
      form: {
        first: "admin",
        second: "admin",
      },
      data: {
        first: "admin",
        second: "admin",
      },
      validateError: undefined,
    });
  });

  test("setReadOnly", () => {
    const state: DeepPartial<ProfileSchema> = {
      readonly: false,
    };

    expect(
      profileReducer(state as ProfileSchema, profileActions.setReadOnly(true))
    ).toEqual({ readonly: true });
  });

  test("updateProfile", () => {
    const state: DeepPartial<ProfileSchema> = {
      form: {
        first: "admin",
        second: "admin",
      },
    };

    expect(
      profileReducer(
        state as ProfileSchema,
        profileActions.updateProfile({ currency: Currency.PLN })
      )
    ).toEqual({
      form: {
        first: "admin",
        second: "admin",
        currency: Currency.PLN,
      },
    });
  });

  test("fetchProfileData.pending", () => {
    const state: DeepPartial<ProfileSchema> = {};

    expect(
      profileReducer(state as ProfileSchema, fetchProfileData.pending)
    ).toEqual({ isLoading: true, eror: undefined });
  });

  test("fetchProfileData.fulfilled", () => {
    const state: DeepPartial<ProfileSchema> = {};

    expect(
      profileReducer(
        state as ProfileSchema,
        fetchProfileData.fulfilled(
          {
            first: "admin",
            second: "admin",
          },
          ""
        )
      )
    ).toEqual({
      isLoading: false,
      data: { first: "admin", second: "admin" },
      form: { first: "admin", second: "admin" },
    });
  });

  test("fetchProfileData.rejected", () => {
    const state: DeepPartial<ProfileSchema> = {};

    expect(
      profileReducer(
        state as ProfileSchema,
        fetchProfileData.rejected(null, "")
      )
    ).toEqual({ error: undefined, isLoading: false });
  });
});
