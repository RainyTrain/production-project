import { Profile } from "entities/Profile";
import { ValidateProfileError } from "../../types/editableprofileCardSchema/editableProfileTypeSchema";

export const validateProfileData = (profile?: Profile) => {
  if (!profile) {
    return [ValidateProfileError.NO_DATA];
  }

  const { first, second, age, city } = profile;

  const errors: ValidateProfileError[] = [];

  if (!first || !second || first.length > 10 || second.length > 10) {
    errors.push(ValidateProfileError.INCORRECT_USER_DATA);
  }

  if (!age || !Number.isInteger(age)) {
    errors.push(ValidateProfileError.INCORRECT_AGE);
  }

  if (!city) {
    errors.push(ValidateProfileError.INCORRECT_CITY);
  }

  return errors;
};
