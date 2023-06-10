import { DeepPartial } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { CounterSchema } from "../types/CounterSchema";
import { counterAction, counterReducer } from "./CounterSlice";

describe("CounterSlice", () => {
  test("increment", () => {
    const state: CounterSchema = {
      value: 0,
    };
    expect(counterReducer(state, counterAction.increment())).toEqual({
      value: 1,
    });
  });
  test("decrement", () => {
    const state: CounterSchema = {
      value: 0,
    };
    expect(counterReducer(state, counterAction.decrement())).toEqual({
      value: -1,
    });
  });
  test("empty state", () => {
    expect(counterReducer(undefined, counterAction.decrement())).toEqual({
      value: -1,
    });
  });
});
