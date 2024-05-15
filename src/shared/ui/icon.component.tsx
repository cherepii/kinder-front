import dynamic from 'next/dynamic'
import React from 'react'

const inputBg = dynamic(() => import('@public/assets/icons/input-bg.svg'))
const buttonBgPrimary = dynamic(
  () => import('@public/assets/icons/button-bg-primary.svg')
)
const buttonMobBgPrimary = dynamic(
  () => import('@public/assets/icons/button-bg-primary-mob.svg')
)
const buttonBgSecondary = dynamic(
  () => import('@public/assets/icons/button-bg-secondary.svg')
)
const buttonMobBgSecondary = dynamic(
  () => import('@public/assets/icons/button-bg-secondary-mob.svg')
)
const attachment = dynamic(() => import('@public/assets/icons/attachment.svg'))
const egg = dynamic(() => import('@public/assets/icons/egg.svg'))
const giftsEggMob = dynamic(() => import('@public/assets/icons/egg-mob.svg'))
const giftsEgg = dynamic(() => import('@public/assets/icons/gifts-egg.svg'))
const arrow = dynamic(() => import('@public/assets/icons/arrow.svg'))
const ferrero = dynamic(() => import('@public/assets/icons/ferrero.svg'))
const burger = dynamic(() => import('@public/assets/icons/burger.svg'))
const inputBgMob = dynamic(() => import('@public/assets/icons/input-bg-mob.svg'))
const close = dynamic(() => import('@public/assets/icons/close.svg'))
const iconTypes = {
  inputBg,
  inputBgMob,
  buttonBgPrimary,
  buttonMobBgPrimary,
  buttonBgSecondary,
  buttonMobBgSecondary,
  attachment,
  close,
  egg,
  arrow,
  giftsEgg,
  ferrero,
  burger,
  giftsEggMob,
}

export type IconsTypes = keyof typeof iconTypes

export interface IIconComponentProperties extends React.SVGAttributes<SVGElement> {
  name: IconsTypes
}

export const IconComponent = ({ name, ...props }: IIconComponentProperties) => {
  const Icon = iconTypes[name]
  return <Icon {...props} />
}
