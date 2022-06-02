import { ReactElement } from "react";

export type Bar = {
  from: Date,
  to: Date,
  group: string,
  label?: string|ReactElement,
  color?: string,
  tooltip?: false|string|ReactElement,
  id?: string,
}
