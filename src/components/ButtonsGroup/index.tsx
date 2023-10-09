'use client'
import {CSSProperties, FC, JSXElementConstructor, ReactElement, ReactNode, useCallback, useMemo, useState} from "react";

import s from './index.module.css'

export type TButton = {
  icon: JSXElementConstructor<any>
  title: string
  onClick?: () => void // Можно навешать обработчик, даже если есть popup
  popup?: ReactNode
}

export interface IProps {
  buttons: TButton[]
  verticalPosition: 'top' | 'bottom'
  horizontalPosition: 'left' | 'right'
}

export const ButtonsGroup: FC<IProps> = ({ verticalPosition, horizontalPosition, buttons }) => {
  const [currentPopupIndex, currentPopupIndexSet] = useState<number | null>(null)

  const popup = useMemo(
    () => !currentPopupIndex ? null : buttons[currentPopupIndex].popup,
    [buttons, currentPopupIndex]
  )

  const rootStyle: CSSProperties = useMemo(() => ({
    [verticalPosition]: '37px',
    [horizontalPosition]: '40px'
  }), [verticalPosition, horizontalPosition])

  const popupStyle: CSSProperties = useMemo(() => ({
    [verticalPosition]: '37px',
    [horizontalPosition]: '104px'
  }), [verticalPosition, horizontalPosition])

  return (
    <>
      <div className={s.root} style={rootStyle}>
        {buttons.map((button, i) => {
          const Icon = button.icon

          return (
            <div
              key={`BUTTON_${button.title}_${i}`}
              className={s.button}
              title={button.title}
              onClick={() => {
                if (button.popup && currentPopupIndex !== i) currentPopupIndexSet(i)
                else if (button.popup && currentPopupIndex === i) currentPopupIndexSet(null)
                if (button.onClick) button.onClick()
              }}
            >
              <Icon />
            </div>
          )
        })}
      </div>
      {!!popup && (
        <div className={s.popup} style={popupStyle}>
          {popup}
        </div>
      )}
    </>
  )
}