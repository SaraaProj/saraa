"use client";
import { Select, SelectItem, type SelectProps } from "@heroui/react";

type CustomSelectProps = SelectProps & {
  options: { key: string; label: string }[];
};

export const CustomSelect = ({ options, ...props }: CustomSelectProps) => {
  return (
    <Select {...props}>
      {options.map((option) => (
        <SelectItem key={option.key}>{option.label}</SelectItem>
      ))}
    </Select>
  );
};
