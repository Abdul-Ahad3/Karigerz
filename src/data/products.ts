
export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'textiles' | 'pottery' | 'jewelry' | 'woodwork';
  materials: string[];
  story: string;
  images: string[];
  artisanId: string;
  featured: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Hand-Embroidered Shawl",
    price: 85,
    category: "textiles",
    materials: ["Cotton", "Silk Thread"],
    story: "This shawl features traditional Sindhi embroidery patterns passed down through generations. Each stitch tells a story of cultural heritage and skilled craftsmanship that has been preserved for centuries. The artisan spent over two weeks creating this unique piece.",
    images: [
      "https://images.unsplash.com/photo-1660845683010-63e7422420b9",
      "https://images.unsplash.com/photo-1598125009836-31af15e4b2c0"
    ],
    artisanId: "1",
    featured: true
  },
  {
    id: "2",
    name: "Blue Pottery Tea Set",
    price: 120,
    category: "pottery",
    materials: ["Clay", "Mineral-based color dyes"],
    story: "This blue pottery tea set is made using techniques that originated in Multan during the 14th century. The distinctive blue glaze comes from a secret mixture of minerals passed down through generations of potters. Each piece is fired in a traditional kiln built from mud bricks.",
    images: [
      "https://images.unsplash.com/photo-1721373489867-b95a7b3fe16c",
      "https://images.unsplash.com/photo-1604859347436-2e6925be8862"
    ],
    artisanId: "2",
    featured: true
  },
  {
    id: "3",
    name: "Silver Filigree Earrings",
    price: 65,
    category: "jewelry",
    materials: ["Sterling Silver", "Turquoise"],
    story: "These intricate filigree earrings showcase a traditional technique where thin silver threads are manipulated to create delicate patterns. The artisan learned this craft from his grandfather and has been perfecting it for over 25 years. Each earring takes approximately three days to complete.",
    images: [
      "https://images.unsplash.com/photo-1713004539634-a6694a83f3d9",
      "https://images.unsplash.com/photo-1611108191451-8c2ea3f8536d"
    ],
    artisanId: "3",
    featured: true
  },
  {
    id: "4",
    name: "Carved Walnut Wood Box",
    price: 95,
    category: "woodwork",
    materials: ["Walnut Wood", "Natural Finishes"],
    story: "This intricately carved wooden box features motifs inspired by ancient Gandhara art. The artisan uses traditional hand tools passed down through four generations in his family. Each box is carved from a single piece of walnut wood harvested from sustainable forests in northern Pakistan.",
    images: [
      "https://images.unsplash.com/photo-1683566440856-5aab75dfdce1",
      "https://images.unsplash.com/photo-1589986005992-e5379505db19"
    ],
    artisanId: "4",
    featured: true
  },
  {
    id: "5",
    name: "Hand-Woven Carpet",
    price: 350,
    category: "textiles",
    materials: ["Wool", "Cotton"],
    story: "This carpet is woven using traditional techniques that have been practiced in Balochistan for centuries. The intricate geometric patterns reflect ancient tribal symbols and stories. It takes a skilled artisan approximately three months to complete a single carpet of this size.",
    images: [
      "https://images.unsplash.com/photo-1600166898405-da9535204843",
      "https://images.unsplash.com/photo-1581539250439-c96689abfc18"
    ],
    artisanId: "1",
    featured: false
  },
  {
    id: "6",
    name: "Ceramic Decorative Plate",
    price: 75,
    category: "pottery",
    materials: ["Clay", "Glazes"],
    story: "This decorative plate features Kashgar-style patterns that blend Persian and Chinese influences. The artisan uses traditional methods to prepare and fire the clay, making each piece unique in its subtle variations of color and pattern.",
    images: [
      "https://images.unsplash.com/photo-1633267434086-77d4f6c5fdd6",
      "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61"
    ],
    artisanId: "2",
    featured: false
  },
  {
    id: "7",
    name: "Hand-Crafted Brass Necklace",
    price: 110,
    category: "jewelry",
    materials: ["Brass", "Semi-Precious Stones"],
    story: "This brass necklace combines traditional techniques with contemporary design. The artisan melts and shapes each element by hand, using tools and methods that have remained unchanged for generations. The patterns are inspired by ancient Indus Valley civilization motifs.",
    images: [
      "https://images.unsplash.com/photo-1599643477877-530eb83abc8e",
      "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584"
    ],
    artisanId: "3",
    featured: false
  },
  {
    id: "8",
    name: "Rosewood Carved Serving Spoon",
    price: 45,
    category: "woodwork",
    materials: ["Rosewood", "Natural Oils"],
    story: "This serving spoon is carved from a single piece of sustainably harvested rosewood. The handle features traditional motifs inspired by the artisan's tribal heritage. Each piece is finished with natural oils to enhance the wood's natural beauty and ensure longevity.",
    images: [
      "https://images.unsplash.com/photo-1723361750012-99943c125d30",
      "https://images.unsplash.com/photo-1589642765095-bc69e4188d4b"
    ],
    artisanId: "4",
    featured: false
  }
];
