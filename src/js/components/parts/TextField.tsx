import * as React from "react";

type Props = {
  id: string;
  label: string;
  type: 'text' | 'date';
  value: string
  onChange: (value: string) => void;
};

export const TextField = ({id, label, type, value, onChange}: Props) => {
  return (
    <div className="flex gap-1">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border rounded pl-1"
      />
    </div>
  );
};