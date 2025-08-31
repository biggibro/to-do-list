import type { FC } from "react";
import cn from "clsx";

import type { BadgeColorsType } from "../../../lib/types/badge.types.ts";

import s from "./badge.module.scss";

interface Props {
  title: string;
  color: BadgeColorsType;
}

export const Badge: FC<Props> = (props) => {
  const { title, color } = props;

  return <div className={cn([s.container, s[color]])}>{title}</div>;
};
