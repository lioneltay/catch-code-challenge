import axios from "axios"
import { shuffle } from "shuffle-seed"

export type Product = {
  id: string
  name: string
  salePrice?: null | number
  retailPrice: number
  imageUrl: string
  quantityAvailable: number
}

type ProductSearchInput = {
  page: number
  query: string
}

type ProductSearchOutput = {
  metadata: {
    query: string
    total: number
    page: number
    pages: number
  }
  results: Product[]
}

/**
 * Gets products, supports pagination
 * Currently using mock api endpoint
 */
export async function getProducts({ page, query }: ProductSearchInput) {
  // const res = await axios.get(
  //   "http://catch-code-challenge.s3-website-ap-southeast-2.amazonaws.com/challenge-3/response.json",
  // )

  // const data: ProductSearchOutput = res.data

  const data: ProductSearchOutput = mockdata

  return {
    ...data,
    // Shuffle to pretend we have different pages at the moment
    // Shuffle is given a seed for 'deterministic' randomisation so that pages don't look different each time
    results: shuffle(data.results, `${page}:${query}`),
  }
}

const mockdata = {
  metadata: {
    query: "best sellers",
    total: 102,
    page: 1,
    pages: 12,
  },
  results: [
    {
      id: "ffc4211a-fb81-45e3-b1d8-2d399a92aa89",
      name: "Buy Olaplex No. 3 Hair Perfector",
      salePrice: 3145,
      retailPrice: 5000,
      imageUrl:
        "https://s.catch.com.au/images/product/0002/2114/593f690189ac9183721654_w200.jpg",
      quantityAvailable: 65,
    },
    {
      id: "f56cb6f2-a926-4ff4-80be-4518b0d1997d",
      name: "Havaianas Top Thongs -  Black",
      salePrice: 1499,
      retailPrice: 2500,
      imageUrl:
        "https://s.catch.com.au/images/product/0001/1431/57aa8e0fcba93464428129_w200.jpg",
      quantityAvailable: 71,
    },
    {
      id: "46397d56-2726-45de-8514-d8ed6984a600",
      name:
        "4 x 60pk Finish Quantum Max Powerball Super Charged Dishwashing Caps Lemon Sparkle",
      salePrice: 5900,
      retailPrice: 18417,
      imageUrl:
        "https://s.catch.com.au/images/product/0001/1909/5d47c0d64988e613254534_w200.jpg",
      quantityAvailable: 56,
    },
    {
      id: "1b7d187a-d015-42ee-97e4-669b27b8d92f",
      name: "Havaianas Slim Thongs - Black",
      salePrice: 1999,
      retailPrice: 3000,
      imageUrl:
        "https://s.catch.com.au/images/product/0001/1891/57ac11b61d049250349167_w200.jpg",
      quantityAvailable: 33,
    },
    {
      id: "6f059b72-40e3-4ec1-9f1f-dbc520e304f3",
      name: "Dyson V6 Animal Extra Cordless Handstick Vacuum Cleaner",
      salePrice: 39800,
      retailPrice: 54900,
      imageUrl:
        "https://s.catch.com.au/images/product/0013/13454/5c6b391a34c8f777276564_w200.jpg",
      quantityAvailable: 14,
    },
    {
      id: "0b8568ab-a74b-4af3-8af0-084307a3997d",
      name:
        "2 x Perfetto Coffee Capsules online - barista quality coffee at home",
      salePrice: 2900,
      retailPrice: 0,
      imageUrl:
        "https://s.catch.com.au/images/product/0001/1641/573bca084547f235173065_w200.jpg",
      quantityAvailable: 19,
    },
    {
      id: "0ad839c0-0cc9-4150-82e2-b6fed8d74c42",
      name:
        "Olaplex No. 4 & No. 5 Bond Maintenance Shampoo & Conditioner 250mL",
      salePrice: 6999,
      retailPrice: 10000,
      imageUrl:
        "https://s.catch.com.au/images/product/0009/9360/5b768d46c49a9527117155_w200.jpg",
      quantityAvailable: 94,
    },
    {
      id: "a8de67fa-cd37-40d9-be4e-60c262b36c9a",
      name: "Apple Genuine 2m Lightning to Usb Cable",
      salePrice: 2499,
      retailPrice: 4500,
      imageUrl:
        "https://s.catch.com.au/images/product/0007/7185/5b344b9f763d8936725023_w200.jpg",
      quantityAvailable: 91,
    },
    {
      id: "213a325e-2284-40cb-970d-3f69e295b395",
      name: "Apple Genuine Earpods with 3.5mm Plug",
      salePrice: 1800,
      retailPrice: 4500,
      imageUrl:
        "https://s.catch.com.au/images/product/0003/3901/5a8a6ff4bfd15691741540_w200.jpg",
      quantityAvailable: 32,
    },
    {
      id: "01f55b3f-25e0-4d1d-9a0a-e366506b8668",
      name: "Nioxin System 2 Cleanser + Scalp Therapy Conditioner 1L",
      salePrice: 6299,
      retailPrice: 16800,
      imageUrl:
        "https://s.catch.com.au/images/product/0001/1999/5ba05d2f6a3d0404654281_w200.jpg",
      quantityAvailable: 3,
    },
    {
      id: "a5cb2e32-fa21-4c6d-9d50-f2104d63b9d8",
      name: "Fanola No Yellow Shampoo 1L",
      salePrice: 2699,
      retailPrice: 4450,
      imageUrl:
        "https://s.catch.com.au/images/product/0003/3998/5ba05d2f45adb495245267_w200.jpg",
      quantityAvailable: 2,
    },
    {
      id: "a730c210-2790-448f-b880-6358a9f658e4",
      name: "Apple Genuine EarPods w/ Lightning Connector - White",
      salePrice: 2999,
      retailPrice: 4500,
      imageUrl:
        "https://s.catch.com.au/images/product/0004/4474/5acaf30d7b302105343281_w200.jpg",
      quantityAvailable: 16,
    },
    {
      id: "a50eb75d-5c5c-4d1d-afb0-063afa757868",
      name: "Natio Ao Bao Makeup & Skincare Gift Set",
      salePrice: 3595,
      retailPrice: 18940,
      imageUrl:
        "https://s.catch.com.au/images/product/0022/22408/5d198f4124682087935643_w200.jpg",
      quantityAvailable: 42,
    },
    {
      id: "be3bcc44-ebea-4dcd-8115-c4d4d2115c0d",
      name: "Teeth Whitening Kit online - 9 shades lighter teeth in 2 weeks!",
      salePrice: 2249,
      retailPrice: 9900,
      imageUrl:
        "https://s.catch.com.au/images/product/0001/1787/567a30c9d7fad639866883_w200.jpg",
      quantityAvailable: 17,
    },
    {
      id: "c9576b66-b6c9-405c-b028-bfb887583373",
      name: "Converse Chuck Taylor Unisex All Star Lo Top Shoe - Optical White",
      salePrice: 6899,
      retailPrice: 10000,
      imageUrl:
        "https://s.catch.com.au/images/product/0025/25014/5d71cd2e22dd1959910835_w200.jpg",
      quantityAvailable: 72,
    },
    {
      id: "b116b069-f710-449d-97fb-f2041d5df53d",
      name: "Bonds Men's Guyfront Trunk 3-Pack - Black",
      salePrice: 2995,
      retailPrice: 5995,
      imageUrl:
        "https://s.catch.com.au/images/product/0001/1989/586f222ed869e482430460_w200.jpg",
      quantityAvailable: 10,
    },
    {
      id: "67bd1339-2bb1-40e8-9bd1-487f0c48cafd",
      name: "20 x Oral-B Compatible Replacement Toothbrush Heads - Medium",
      salePrice: 1799,
      retailPrice: 0,
      imageUrl:
        "https://s.catch.com.au/images/product/0006/6865/5b273dd64ba98274529753_w200.jpg",
      quantityAvailable: 2,
    },
    {
      id: "2a4c2ff2-ecb3-4894-9e6b-39f51a7379e9",
      name: "Tommy Hilfiger Men's Flag Crew Tee - White",
      salePrice: 2800,
      retailPrice: 4995,
      imageUrl:
        "https://s.catch.com.au/images/product/0002/2066/5c3c058fb2f3b637898337_w200.jpg",
      quantityAvailable: 79,
    },
    {
      id: "0d95a657-572a-40cc-85d0-b6de50ddb9d2",
      name: "Nioxin System 4 Cleanser & Conditioner Pack 1L",
      salePrice: 6299,
      retailPrice: 16800,
      imageUrl:
        "https://s.catch.com.au/images/product/0023/23521/5d3914aac90f6091995467_w200.jpg",
      quantityAvailable: 7,
    },
    {
      id: "2ed83b04-4f3b-48fb-8280-6afa175cb28f",
      name: "Skechers Women's Go Walk 3 Slip-On Shoe - Black/Black",
      salePrice: 5999,
      retailPrice: 0,
      imageUrl:
        "https://s.catch.com.au/images/product/0007/7891/5b501dda76b77601278503_w200.jpg",
      quantityAvailable: 87,
    },
    {
      id: "13980d4b-769d-4c3d-9b01-49ea68ac88f4",
      name: "Tommy Hilfiger Men's Flag Crew Tee - Black",
      salePrice: 2800,
      retailPrice: 4995,
      imageUrl:
        "https://s.catch.com.au/images/product/0002/2055/5c3ea1539bc0e090601144_w200.jpg",
      quantityAvailable: 81,
    },
    {
      id: "8404c488-534a-49e1-982a-585fa2459075",
      name: "TIGI Bed Head Recovery Shampoo & Conditioner Pack 750mL",
      salePrice: 3145,
      retailPrice: 6090,
      imageUrl:
        "https://s.catch.com.au/images/product/0001/1973/583e5f5876326278862159_w200.jpg",
      quantityAvailable: 9,
    },
    {
      id: "b3fe0aa1-6634-4e92-8c20-e2a960ddcb2d",
      name: "Tommy Hilfiger Men's Flag Crew Tee - Grey Heather",
      salePrice: 2800,
      retailPrice: 4995,
      imageUrl:
        "https://s.catch.com.au/images/product/0002/2066/5c3e9fcf0f1c9816310222_w200.jpg",
      quantityAvailable: 90,
    },
    {
      id: "80a77ec7-68f4-4107-b4d0-ec329a0ab71f",
      name: "Apple Genuine 1m Lightning to USB Cable - White",
      salePrice: 1999,
      retailPrice: 2900,
      imageUrl:
        "https://s.catch.com.au/images/product/0003/3785/5a6fca9ea9b96151830135_w200.jpg",
      quantityAvailable: 2,
    },
    {
      id: "69e5322b-c1e8-4d99-8429-87785a20aa11",
      name: "2 x Perfetto Milano Nespresso Compatible Coffee Capsules 60pk",
      salePrice: 2900,
      retailPrice: 0,
      imageUrl:
        "https://s.catch.com.au/images/product/0001/1641/573bca1b79145748561821_w200.jpg",
      quantityAvailable: 97,
    },
    {
      id: "0f432a1b-9d53-434d-9f2a-a5c08dd809eb",
      name: "Loraine DermaClean Facial Pore Cleaner",
      salePrice: 2249,
      retailPrice: 0,
      imageUrl:
        "https://s.catch.com.au/images/product/0018/18041/5c7cf7b84565f003593489_w200.jpg",
      quantityAvailable: 13,
    },
    {
      id: "3330780e-a6e5-4cf0-8fb3-2252fc7a4209",
      name: "4 x 60pk Finish Quantum Max Powerball Dishwashing Tabs",
      salePrice: 5900,
      retailPrice: 10560,
      imageUrl:
        "https://s.catch.com.au/images/product/0001/1992/5d6491443deef686830929_w200.jpg",
      quantityAvailable: 56,
    },
    {
      id: "4ad1119f-2856-4204-9bec-d7c24b0c8794",
      name:
        "L'Oréal Revitalift Laser Renew Anti-Ageing Day Cream & Night Mask 50mL",
      salePrice: 4048,
      retailPrice: 8998,
      imageUrl:
        "https://s.catch.com.au/images/product/0002/2018/58b517cfb43e7431567023_w200.jpg",
      quantityAvailable: 65,
    },
    {
      id: "7635b525-3220-4d00-a9cd-a0c3359d568b",
      name: "4 x 100pk Finish Powerball Classic Dishwashing Tabs Lemon Sparkle",
      salePrice: 5900,
      retailPrice: 0,
      imageUrl:
        "https://s.catch.com.au/images/product/0010/10376/5c7dbab20ea65789665577_w200.jpg",
      quantityAvailable: 33,
    },
    {
      id: "309ddc73-8c2a-45d8-b65c-fdf0391b76f2",
      name: "Quay Australia Women's My Girl Sunglasses - Black/Blue",
      salePrice: 1399,
      retailPrice: 4900,
      imageUrl:
        "https://s.catch.com.au/images/product/0006/6016/5b04f0a9824c9073984251_w200.jpg",
      quantityAvailable: 14,
    },
    {
      id: "0161ec95-67e2-4860-ae65-ec980db2f457",
      name: "2 x Aztec Secret Indian Healing Clay 454g",
      salePrice: 2691,
      retailPrice: 4990,
      imageUrl:
        "https://s.catch.com.au/images/product/0010/10560/5d1bd253af1aa941697520_w200.jpg",
      quantityAvailable: 84,
    },
    {
      id: "62ddd118-50a2-49fd-b071-0512d383285b",
      name: "Illuminate Me 3-Way Makeup Mirror w/ LED Lights - Silver",
      salePrice: 2659,
      retailPrice: 0,
      imageUrl:
        "https://s.catch.com.au/images/product/0002/2888/5a028878912ef587486128_w200.jpg",
      quantityAvailable: 0,
    },
    {
      id: "36edaf0e-439d-4b7c-a0b0-c9049f9f3dfd",
      name: "4 x 100pk Finish Powerball Classic Dishwashing Tabs",
      salePrice: 5900,
      retailPrice: 14526,
      imageUrl:
        "https://s.catch.com.au/images/product/0003/3914/5a8e7d000e888968445530_w200.jpg",
      quantityAvailable: 24,
    },
    {
      id: "431a6bc6-f72c-4f42-ba1a-c98eca83ce5e",
      name: "3 x St. Ives Blemish Control Apricot Scrub 150mL",
      salePrice: 1347,
      retailPrice: 2997,
      imageUrl:
        "https://s.catch.com.au/images/product/0002/2029/5d5cb1cad3ae8445925855_w200.jpg",
      quantityAvailable: 30,
    },
    {
      id: "be2b72c0-2b27-44b3-bf93-afdfd61c9dee",
      name: "Tommy Hilfiger Men's Flag Crew Tee - Dark Navy",
      salePrice: 2800,
      retailPrice: 4995,
      imageUrl:
        "https://s.catch.com.au/images/product/0002/2066/5c3c053bebf31594757685_w200.jpg",
      quantityAvailable: 48,
    },
    {
      id: "54369620-59a8-4089-a9f1-bd2d0ff2de03",
      name: "In Your Dreams Bamboo Queen Bed Waterproof Mattress Protector",
      salePrice: 2999,
      retailPrice: 0,
      imageUrl:
        "https://s.catch.com.au/images/product/0001/1157/5ccbc5298f670908066945_w200.jpg",
      quantityAvailable: 62,
    },
  ],
}
