import {FC, ReactNode} from "react";
import cn from 'classnames'

import s from './index.module.css'

export type TOption = {
  label: ReactNode
  value: string
}

export interface IProps {
  value: string
  options: TOption[]
  onChange: (value: string) => void
}

export const Switch: FC<IProps> = ({ value, options, onChange }) => {
  return (
    <div className={s.root}>
      {options.map((option, i) => (
        <div
          key={`OPTION_${option.value}_${i}`}
          className={cn(s.option, { [s.option_selected]: option.value === value })}
          onClick={() => onChange(option.value)}
        >
          {option.label}
        </div>
      ))}
    </div>
  )
}
