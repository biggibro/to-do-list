import type { ChangeEvent, FC } from "react";
import cn from "clsx";

import type { OptionDTO } from "../../../lib/types/select.types.ts";

import s from "./select.module.scss";

interface Props {
  selectedOption?: OptionDTO;
  options: OptionDTO[];

  onSelect: (option: OptionDTO) => void;

  label?: string;
  hasEmptySelect?: boolean;

  size: "SM" | "MD";
  disabled?: boolean;
}

export const Select: FC<Props> = (props) => {
  const {
    selectedOption,
    options,
    onSelect,
    label,
    hasEmptySelect,
    size,
    disabled,
  } = props;

  const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.currentTarget.value;

    const option = options.find(
      (option) => option.value.toString() === value?.toString()
    ) as OptionDTO;

    onSelect(option);
  };

  return (
    <div className={cn([s.container, s[size]])}>
      {label && <div className={s.label}>{label}</div>}
      <select
        value={selectedOption?.value || ""}
        className={s.select}
        onChange={onChange}
        disabled={disabled}
      >
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
        {hasEmptySelect && <option value="">Пусто</option>}
      </select>
    </div>
  );
};
