import { FeatureFlag } from "shared/types/featureFlags";
import { UserRole } from "../consts/consts";

export interface User {
  id: string;
  username: string;
  avatar?: string;
  roles?: UserRole[];
  feature?: FeatureFlag;
}

export interface UserSchema {
  authData?: User;
  _inited: boolean;
}
