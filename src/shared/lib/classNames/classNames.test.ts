import { classNames } from "shared/lib/classNames/classNames";

describe("classNames", () => {
  test("with only first param", () => {
    expect(classNames("someClass")).toBe("someClass");
  });
  test("with two params", () => {
    expect(classNames("someClass", { secondClass: true })).toBe(
      "someClass secondClass"
    );
  });
  test("with three params", () => {
    expect(classNames("someClass", { secondClass: true }, ["thirdClass"])).toBe(
      "someClass secondClass thirdClass"
    );
  });
});
