import HomeImg from '../../../../assets/home.png'
import {
  IntroContainer,
  HomeImage,
  FeatureList,
  FeatureItem,
  StyledIcon,
} from './styles'
import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import { ThemeType } from '../../../../@types/styles'
import React from 'react'

interface IFeatures {
  icon: React.ReactNode
  label: string
  color: keyof ThemeType
}

export function Intro() {
  const features: IFeatures[] = [
    {
      icon: <ShoppingCart weight={'fill'} color={'white'} size={16} />,
      label: 'Compra simples e segura',
      color: 'yellow-dark',
    },
    {
      icon: <Timer weight={'fill'} color={'white'} size={16} />,
      label: 'Entrega rápida e rastreada',
      color: 'yellow',
    },
    {
      icon: <Package weight={'fill'} color={'white'} size={16} />,
      label: 'Embalagem mantém o café intacto',
      color: 'base-text',
    },
    {
      icon: <Coffee weight={'fill'} color={'white'} size={16} />,
      label: 'O café chega fresquinho até você',
      color: 'purple',
    },
  ]

  return (
    <IntroContainer>
      <div>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <h3>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </h3>
        <FeatureList>
          {features.map((item) => (
            <FeatureItem key={item.label}>
              <StyledIcon color={item.color}>{item.icon}</StyledIcon>
              <p>{item.label}</p>
            </FeatureItem>
          ))}
        </FeatureList>
      </div>
      <HomeImage src={HomeImg} alt={'Imagem de café do coffee delivery'} />
    </IntroContainer>
  )
}
