import { Button, type ButtonProps } from "@heroui/react";

type CustomButtonProps = {
  color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
  children: React.ReactNode;
} & ButtonProps;

const CustomButton = ({ color, children, ...props }: CustomButtonProps) => {
  return <Button color={color} {...props}>{children}</Button>;
};

export { CustomButton };
