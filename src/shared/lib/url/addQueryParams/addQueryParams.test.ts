import { getQueryParams } from "./addQueryParams";

describe("addQueryParams", () => {
  test("test with one param", () => {
    const params = getQueryParams({ test: "value" });

    expect(params).toBe("?test=value");
  });

  test("test with two params", () => {
    const params = getQueryParams({ test: "value", id: "1" });

    expect(params).toBe("?test=value&id=1");
  });

  test("test with undefined", () => {
    const params = getQueryParams({});

    expect(params).toBe("?");
  });
});
