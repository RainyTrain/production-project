import { DropDownDirection } from "shared/types/ui";
import cls from "./popup.module.scss";

export const mapDirectionClass: Record<DropDownDirection, string> = {
  "bottom left": cls.bottomLeft,
  "bottom right": cls.bottomRight,
  "top left": cls.topLeft,
  "top right": cls.topRight,
  "top": cls.top,
  "bottom": cls.bottom,
};
