import {
  Americano,
  Arabe,
  CafeGelado,
  CafeLeite,
  Capuccino,
  ChocolateQuente,
  Cubano,
  Expresso,
  ExpressoCremoso,
  Havaiano,
  Irlandes,
  Latte,
  Macchiato,
  Mochaccino,
} from '../assets/coffees'

export interface ICoffee {
  id: number
  img: string
  name: string
  description: string
  value: number
  tags: Array<string>
}

export const coffees: ICoffee[] = [
  {
    id: 1,
    img: Expresso,
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    value: 9.9,
    tags: ['Tradicional'],
  },
  {
    id: 2,
    img: Americano,
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    value: 9.9,
    tags: ['Tradicional'],
  },
  {
    id: 3,
    img: ExpressoCremoso,
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    value: 9.9,
    tags: ['Tradicional'],
  },
  {
    id: 4,
    img: CafeGelado,
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    value: 9.9,
    tags: ['Tradicional', 'Gelado'],
  },
  {
    id: 5,
    img: CafeLeite,
    name: 'Café com leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    value: 5.9,
    tags: ['Tradicional', 'Com leite'],
  },
  {
    id: 6,
    img: Latte,
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    value: 7.9,
    tags: ['Tradicional', 'Com leite'],
  },
  {
    id: 7,
    img: Capuccino,
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma ',
    value: 7.9,
    tags: ['Tradicional', 'Com leite'],
  },
  {
    id: 8,
    img: Macchiato,
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    value: 12.9,
    tags: ['Tradicional', 'Com leite'],
  },
  {
    id: 9,
    img: Mochaccino,
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    value: 12.9,
    tags: ['Tradicional', 'Com leite'],
  },
  {
    id: 10,
    img: ChocolateQuente,
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    value: 9.9,
    tags: ['Especial', 'Com leite'],
  },
  {
    id: 11,
    img: Cubano,
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    value: 15.9,
    tags: ['Especial', 'Alcoólico', 'Gelado'],
  },
  {
    id: 12,
    img: Havaiano,
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    value: 11.9,
    tags: ['Especial'],
  },
  {
    id: 13,
    img: Arabe,
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    value: 11.9,
    tags: ['Especial'],
  },
  {
    id: 14,
    img: Irlandes,
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    value: 15.9,
    tags: ['Especial', 'Alcoólico'],
  },
]

export type CoffeProps = (typeof coffees)[number]
