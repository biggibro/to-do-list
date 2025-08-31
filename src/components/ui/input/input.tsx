import type { ChangeEvent, FC } from "react";

import s from "./input.module.scss";

interface Props {
  value: string | number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;

  type: "text" | "password";

  placeholder?: string;
  label?: string;

  disabled?: boolean;
}

export const Input: FC<Props> = (props) => {
  const { value, onChange, type, placeholder, label, disabled } = props;

  return (
    <div className={s.container}>
      {label && <div className={s.label}>{label}</div>}
      <input
        value={value || ""}
        onChange={onChange}
        type={type}
        className={s.input}
        placeholder={placeholder}
        disabled={disabled}
      />
    </div>
  );
};
