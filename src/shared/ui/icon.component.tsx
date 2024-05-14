import dynamic from 'next/dynamic'
import React from 'react'

const unistory = dynamic(() => import('@public/assets/icons/unistory.svg'))
const inputBg = dynamic(() => import('@public/assets/icons/input-bg.svg'))
const buttonBgPrimary = dynamic(
  () => import('@public/assets/icons/button-bg-primary.svg')
)
const buttonBgSecondary = dynamic(
  () => import('@public/assets/icons/button-bg-secondary.svg')
)
const attachment = dynamic(() => import('@public/assets/icons/attachment.svg'))
const egg = dynamic(() => import('@public/assets/icons/egg.svg'))
const giftsEgg = dynamic(() => import('@public/assets/icons/gifts-egg.svg'))
const arrow = dynamic(() => import('@public/assets/icons/arrow.svg'))
const ferrero = dynamic(() => import('@public/assets/icons/ferrero.svg'))
const burger = dynamic(() => import('@public/assets/icons/burger.svg'))
const iconTypes = {
  unistory,
  inputBg,
  buttonBgPrimary,
  buttonBgSecondary,
  attachment,
  egg,
  arrow,
  giftsEgg,
  ferrero,
  burger,
}

export type IconsTypes = keyof typeof iconTypes

export interface IIconComponentProperties extends React.SVGAttributes<SVGElement> {
  name: IconsTypes
}

export const IconComponent = ({ name, ...props }: IIconComponentProperties) => {
  const Icon = iconTypes[name]
  return <Icon {...props} />
}
