import * as React from "react";

type Props = {
  label: string;
  type: 'text' | 'date';
  value: string
  onChange: (value: string) => void;
};

export const TextField = ({label, type, value, onChange}: Props) => {
  return (
    <>
      <label htmlFor="">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border"
      />
    </>
  );
};