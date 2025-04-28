"use client";

import { Input, type InputProps } from "@heroui/react";

const CustomInput = ({ ...props }: InputProps) => {
  return <Input {...props} />;
};

export { CustomInput };
