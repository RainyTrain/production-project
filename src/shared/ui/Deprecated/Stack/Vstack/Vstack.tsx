import { Flex, FlexProps } from "../Flex/Flex";

type VstackProps = Omit<FlexProps, "direction">;

export const Vstack = (props: VstackProps) => {
  const { align = "start" } = props;
  return <Flex {...props} direction="column" align={align} />;
};
