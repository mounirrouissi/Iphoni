// bg-blue-950 border-blue-950
// bg-zinc-900 border-zinc-900
// bg-rose-950 border-rose-950

import { PRODUCT_PRICES } from '@/config/products'
import { promise } from 'zod'

export const COLORS = [
  { label: 'Black', value: 'black', tw: 'zinc-900' },
  {
    label: 'Blue',
    value: 'blue',
    tw: 'blue-950',
  },
  { label: 'Rose', value: 'rose', tw: 'rose-950' },
] as const

export const MODELS = {
  name: 'models',
  options: [{
    "id": 4554,
    "title": "iPhone 15",
    "label": "iPhone 15",
    "value": "iphone15"
  },
  {
    "id": 4555,
    "title": "iPhone 15 Pro",
    "label": "iPhone 15 Pro",
    "value": "iphone15pro"
  },
  {
    "id": 4556,
    "title": "iPhone 15 Plus",
    "label": "iPhone 15 Plus",
    "value": "iphone15plus"
  },
  {
    "id": 4557,
    "title": "iPhone 15 Pro Max",
    "label": "iPhone 15 Pro Max",
    "value": "iphone15promax"
  },
  {
    "id": 4150,
    "title": "iPhone 14",
    "label": "iPhone 14",
    "value": "iphone14"
  },
  {
    "id": 4151,
    "title": "iPhone 14 Pro",
    "label": "iPhone 14 Pro",
    "value": "iphone14pro"
  },
  {
    "id": 4153,
    "title": "iPhone 14 Plus",
    "label": "iPhone 14 Plus",
    "value": "iphone14plus"
  },
  {
    "id": 4152,
    "title": "iPhone 14 Pro Max",
    "label": "iPhone 14 Pro Max",
    "value": "iphone14promax"
  },
  {
    "id": 2862,
    "title": "iPhone 13",
    "label": "iPhone 13",
    "value": "iphone13"
  },
  {
    "id": 2861,
    "title": "iPhone 13 Mini",
    "label": "iPhone 13 Mini",
    "value": "iphone13mini"
  },
  {
    "id": 2863,
    "title": "iPhone 13 Pro",
    "label": "iPhone 13 Pro",
    "value": "iphone13pro"
  },
  {
    "id": 2864,
    "title": "iPhone 13 Pro Max",
    "label": "iPhone 13 Pro Max",
    "value": "iphone13promax"
  },
  {
    "id": 2449,
    "title": "iPhone 12",
    "label": "iPhone 12",
    "value": "iphone12"
  },
  {
    "id": 2448,
    "title": "iPhone 12 Mini",
    "label": "iPhone 12 Mini",
    "value": "iphone12mini"
  },
  {
    "id": 2450,
    "title": "iPhone 12 Pro",
    "label": "iPhone 12 Pro",
    "value": "iphone12pro"
  },
  {
    "id": 2451,
    "title": "iPhone 12 Pro Max",
    "label": "iPhone 12 Pro Max",
    "value": "iphone12promax"
  },
  {
    "id": 2243,
    "title": "iPhone 11",
    "label": "iPhone 11",
    "value": "iphone11"
  },
  {
    "id": 2244,
    "title": "iPhone 11 Pro",
    "label": "iPhone 11 Pro",
    "value": "iphone11pro"
  },
  {
    "id": 2245,
    "title": "iPhone 11 Pro Max",
    "label": "iPhone 11 Pro Max",
    "value": "iphone11promax"
  },
  {
    "id": 2087,
    "title": "iPhone X",
    "label": "iPhone X",
    "value": "iphonex"
  },
  {
    "id": 2103,
    "title": "iPhone XR",
    "label": "iPhone XR",
    "value": "iphonexr"
  },
  {
    "id": 2101,
    "title": "iPhone XS",
    "label": "iPhone XS",
    "value": "iphonexs"
  },
  {
    "id": 2102,
    "title": "iPhone XS MAX",
    "label": "iPhone XS MAX",
    "value": "iphonexsmax"
  },
  {
    "id": 2088,
    "title": "iPhone 8",
    "label": "iPhone 8",
    "value": "iphone8"
  },
  {
    "id": 2089,
    "title": "iPhone 8 Plus",
    "label": "iPhone 8 Plus",
    "value": "iphone8plus"
  },
  {
    "id": 4732,
    "title": "Google Pixel 8 Pro",
    "label": "Google Pixel 8 Pro",
    "value": "googlepixel8pro"
  },
  {
    "id": 4731,
    "title": "Google Pixel 8",
    "label": "Google Pixel 8",
    "value": "googlepixel8"
  },
  {
    "id": 4312,
    "title": "Google Pixel 7",
    "label": "Google Pixel 7",
    "value": "googlepixel7"
  },
  {
    "id": 4311,
    "title": "Google Pixel 6 Pro",
    "label": "Google Pixel 6 Pro",
    "value": "googlepixel6pro"
  },
  {
    "id": 3384,
    "title": "Google Pixel 6",
    "label": "Google Pixel 6",
    "value": "googlepixel6"
  },
  {
    "id": 3383,
    "title": "Google Pixel 5 5G",
    "label": "Google Pixel 5 5G",
    "value": "googlepixel55g"
  },
  {
    "id": 4709,
    "title": "Samsung Galaxy S24",
    "label": "Samsung Galaxy S24",
    "value": "samsunggalaxys24"
  },
  {
    "id": 4710,
    "title": "Samsung Galaxy S24 Plus",
    "label": "Samsung Galaxy S24 Plus",
    "value": "samsunggalaxys24plus"
  },
  {
    "id": 4711,
    "title": "Samsung Galaxy S24 Ultra",
    "label": "Samsung Galaxy S24 Ultra",
    "value": "samsunggalaxys24ultra"
  },
  {
    "id": 4273,
    "title": "Samsung Galaxy S23",
    "label": "Samsung Galaxy S23",
    "value": "samsunggalaxys23"
  },
  {
    "id": 4274,
    "title": "Samsung Galaxy S23 Plus",
    "label": "Samsung Galaxy S23 Plus",
    "value": "samsunggalaxys23plus"
  },
  {
    "id": 4275,
    "title": "Samsung Galaxy S23 Ultra",
    "label": "Samsung Galaxy S23 Ultra",
    "value": "samsunggalaxys23ultra"
  },
  {
    "id": 3410,
    "title": "Samsung Galaxy S22",
    "label": "Samsung Galaxy S22",
    "value": "samsunggalaxys22"
  },
  {
    "id": 3409,
    "title": "Samsung Galaxy S22 Plus",
    "label": "Samsung Galaxy S22 Plus",
    "value": "samsunggalaxys22plus"
  },
  {
    "id": 3408,
    "title": "Samsung Galaxy S22 Ultra",
    "label": "Samsung Galaxy S22 Ultra",
    "value": "samsunggalaxys22ultra"
  },
  {
    "id": 2647,
    "title": "Samsung Galaxy S21",
    "label": "Samsung Galaxy S21",
    "value": "samsunggalaxys21"
  },
  {
    "id": 2648,
    "title": "Samsung Galaxy S21 Plus",
    "label": "Samsung Galaxy S21 Plus",
    "value": "samsunggalaxys21plus"
  },
  {
    "id": 2649,
    "title": "Samsung Galaxy S21 Ultra",
    "label": "Samsung Galaxy S21 Ultra",
    "value": "samsunggalaxys21ultra"
  },
  {
    "id": 3385,
    "title": "Samsung Galaxy S21 FE",
    "label": "Samsung Galaxy S21 FE",
    "value": "samsunggalaxys21fe"
  },
  {
    "id": 2354,
    "title": "Samsung Galaxy S20",
    "label": "Samsung Galaxy S20",
    "value": "samsunggalaxys20"
  },
  {
    "id": 2355,
    "title": "Samsung Galaxy S20+",
    "label": "Samsung Galaxy S20+",
    "value": "samsunggalaxys20plus"
  },
  {
    "id": 2356,
    "title": "Samsung Galaxy S20 Ultra",
    "label": "Samsung Galaxy S20 Ultra",
    "value": "samsunggalaxys20ultra"
  },
  {
    "id": 3386,
    "title": "Samsung Galaxy S20 FE",
    "label": "Samsung Galaxy S20 FE",
    "value": "samsunggalaxys20fe"
  },
  {
    "id": 2177,
    "title": "Samsung Galaxy S10",
    "label": "Samsung Galaxy S10",
    "value": "samsunggalaxys10"
  },
  {
    "id": 2179,
    "title": "Samsung Galaxy S10E",
    "label": "Samsung Galaxy S10E",
    "value": "samsunggalaxys10e"
  },
  {
    "id": 2178,
    "title": "Samsung Galaxy S10 Plus",
    "label": "Samsung Galaxy S10 Plus",
    "value": "samsunggalaxys10plus"
  },],
} as const

export const MATERIALS = {
  name: 'material',
  options: [
    {
      label: 'Silicone',
      value: 'silicone',
      description: undefined,
      price: PRODUCT_PRICES.material.silicone,
    },
    {
      label: 'Soft Polycarbonate',
      value: 'polycarbonate',
      description: 'Scratch-resistant coating',
      price: PRODUCT_PRICES.material.polycarbonate,
    },
  ],
} as const

export const FINISHES = {
  name: 'finish',
  options: [
    {
      label: 'Smooth Finish',
      value: 'smooth',
      description: undefined,
      price: PRODUCT_PRICES.finish.smooth,
    },
    {
      label: 'Textured Finish',
      value: 'textured',
      description: 'Soft grippy texture',
      price: PRODUCT_PRICES.finish.textured,
    },
  ],
} as const

export type ModelType ={
  label: string;
  value: string;
}

