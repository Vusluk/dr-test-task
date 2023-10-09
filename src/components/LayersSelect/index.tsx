import {FC, Fragment, useCallback} from "react";
import cn from 'classnames'

import Eye from '../Icons/OpenEye.svg'

import s from './index.module.css'

export enum ELayerType {
  CADASTRAL_DISTRICTS = 'CADASTRAL_DISTRICTS',
  CADASTRAL_AREAS = 'CADASTRAL_AREAS',
  CADASTRAL_BLOCKS = 'CADASTRAL_BLOCKS',
  BORDER = 'BORDER',
  SUBJECTS = 'SUBJECTS',
  MUNICIPAL_DISTRICTS = 'MUNICIPAL_DISTRICTS',
  RURAL_SETTLEMENTS = 'RURAL_SETTLEMENTS',
  SETTLEMENTS = 'SETTLEMENTS'
}

export type TLayer = {
  type: ELayerType
  color: string
  title: string
}

export interface IProps {
  layers: TLayer[]
  selected: ELayerType[]
  onSelect: (selected: ELayerType[]) => void
}

export const LayersSelect: FC<IProps> = ({ layers, selected, onSelect }) => {

  const selectHandle = useCallback((layer: ELayerType) => {
    if (selected.includes(layer)) onSelect(selected.filter(l => l !== layer))
    else onSelect([...selected, layer])
  }, [selected, onSelect])

  return (
    <div className={s.root}>
      {layers.map((layer, i) => (
        <Fragment key={`LAYER_${layer.type}_${i}`}>
          <div className={s.legend} style={{ borderColor: layer.color }} />
          <div className={s.title}>{layer.title}</div>
          <div
            className={cn(s.eye, { [s.eye_selected]: selected.includes(layer.type) })}
            onClick={() => selectHandle(layer.type)}
          >
            <Eye />
          </div>
        </Fragment>
      ))}
    </div>
  )
}