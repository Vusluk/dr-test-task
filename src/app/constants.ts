import {ELayerType, TLayer} from "@/components/LayersSelect";
import {TOption} from "@/components/Switch";

export const LAYERS: TLayer[] = [
  {
    type: ELayerType.CADASTRAL_DISTRICTS,
    color: '#6D6D6D',
    title: 'Кадастровые округа',
  },
  {
    type: ELayerType.CADASTRAL_AREAS,
    color: '#8DB2EB',
    title: 'Кадастровые районы',
  },
  {
    type: ELayerType.CADASTRAL_BLOCKS,
    color: '#82BF00',
    title: 'Кадастровые кварталы',
  },
  {
    type: ELayerType.BORDER,
    color: '#DE4A2A',
    title: 'Граница РФ',
  },
  {
    type: ELayerType.SUBJECTS,
    color: '#A08BCC',
    title: 'Субъекты РФ',
  },
  {
    type: ELayerType.MUNICIPAL_DISTRICTS,
    color: '#FAD248',
    title: 'Муниципальные районы и городские округа',
  },
  {
    type: ELayerType.RURAL_SETTLEMENTS,
    color: '#699B12',
    title: 'Сельские и городские поселения',
  },
  {
    type: ELayerType.SETTLEMENTS,
    color: '#EEA20F',
    title: 'Населенные пункты',
  }
]

export enum EMapMode {
  SCHEMA = 'SCHEMA',
  SATELLITE = 'SATELLITE',
  HYBRID = 'HYBRID'
}

export const SWITCH_OPTIONS: TOption[] = [
  {
    value: EMapMode.SCHEMA,
    label: 'Схема',
  },
  {
    value: EMapMode.SATELLITE,
    label: 'Спутник',
  },
  {
    value: EMapMode.HYBRID,
    label: 'Гибрид',
  },
]
