'use client'
import {useMemo, useState} from "react";
import Image from 'next/image'

import {EMapMode, LAYERS, SWITCH_OPTIONS} from "@/app/constants";

import {ButtonsGroup, TButton} from '@/components/ButtonsGroup'
import {ELayerType, LayersSelect, TLayer} from '@/components/LayersSelect'
import {Switch} from "@/components/Switch";
import CompassIcon from '@/components/Icons/Compass.svg'
import RulerIcon from '@/components/Icons/Ruler.svg'
import StackIcon from '@/components/Icons/Stack.svg'

import s from './page.module.css'

export default function Home() {
  const [layersSelected, layersSelectedSet] = useState<ELayerType[]>([])
  const [mapMode, mapModeSet] = useState<string>(EMapMode.SCHEMA)

  const buttons = useMemo<TButton[]>(() => [
    {
      icon: CompassIcon,
      title: 'Текущее местоположение',
      onClick: () => {}
    },
    {
      icon: RulerIcon,
      title: 'Линейка',
      onClick: () => {}
    },
    {
      icon: StackIcon,
      title: 'Слои',
      onClick: () => {},
      popup: (
        <div className={s.popup}>
          <Switch
            value={mapMode}
            onChange={mapModeSet}
            options={SWITCH_OPTIONS}
          />
          <LayersSelect
            layers={LAYERS}
            selected={layersSelected}
            onSelect={layersSelectedSet}
          />
        </div>
      )
    },
  ], [layersSelected, layersSelectedSet, mapMode, mapModeSet])

  return (
    <main className={s.main}>
      <div className={s.center}>
        <Image
          className={s.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
      <ButtonsGroup
        buttons={buttons}
        verticalPosition='top'
        horizontalPosition='left'
      />
    </main>
  )
}
