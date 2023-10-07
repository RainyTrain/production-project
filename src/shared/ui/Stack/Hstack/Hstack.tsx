import { Flex, FlexProps } from "../Flex/Flex";

type HstackProps = Omit<FlexProps, "direction">;

export const Hstack = (props: HstackProps) => (
  <Flex {...props} direction="row" />
);
