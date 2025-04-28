
export interface Artisan {
  id: string;
  name: string;
  hometown: string;
  specialty: string;
  bio: string;
  quote: string;
  image: string;
  yearsOfExperience: number;
  location: {
    lat: number;
    lng: number;
  };
}

export const artisans: Artisan[] = [
  {
    id: "1",
    name: "Noor Bibi",
    hometown: "Thatta, Sindh",
    specialty: "Textiles",
    bio: "Noor Bibi learned the art of traditional Sindhi embroidery from her mother at the age of ten. With over 40 years of experience, she has mastered numerous stitching techniques and patterns unique to her region.",
    quote: "Each thread I weave carries the stories of my ancestors and the dreams of my children.",
    image: "https://plus.unsplash.com/premium_photo-1661854788025-b962245b7840",
    yearsOfExperience: 40,
    location: {
      lat: 24.7456,
      lng: 67.9253
    }
  },
  {
    id: "2",
    name: "Mohammad Khalil",
    hometown: "Multan, Punjab",
    specialty: "Pottery",
    bio: "Mohammad Khalil is a fifth-generation potter who continues his family's legacy of creating Multan's famous blue pottery. Working from his small workshop, he mixes all glazes by hand using natural minerals according to traditional recipes. His unique firing techniques give his pieces their signature vibrant blue color.",
    quote: "Clay connects us to the earth; through it, I speak to both past and future generations.",
    image: "https://plus.unsplash.com/premium_photo-1722682238873-648b1264ca06",
    yearsOfExperience: 20,
    location: {
      lat: 30.1575,
      lng: 71.5249
    }
  },
  {
    id: "3",
    name: "Samina Ahmed",
    hometown: "Gilgit, Gilgit-Baltistan",
    specialty: "Jewelry",
    bio: "Samina Ahmed specializes in traditional silver filigree work, a delicate form of jewelry making. She learned the craft from her father and has been creating intricate pieces for over 15 years. Her work combines ancient patterns with contemporary designs, making each piece both traditional and relevant for modern wear.",
    quote: "My hands shape metal, but my heart shapes beauty that lasts generations.",
    image: "https://images.unsplash.com/photo-1729200688422-e4ffe8ac73a1",
    yearsOfExperience: 15,
    location: {
      lat: 35.9221,
      lng: 74.3087
    }
  },
  {
    id: "4",
    name: "Abdul Rahman",
    hometown: "Hunza Valley, Gilgit-Baltistan",
    specialty: "Woodwork",
    bio: "Abdul Rahman comes from a long line of woodcarvers from the mountains of northern Pakistan. Using traditional hand tools and techniques passed down through four generations, he creates intricate wooden items that showcase the rich cultural heritage of the Hunza Valley. He is particularly known for his walnut wood carvings.",
    quote: "Wood remembers the hands that shape it; I am merely continuing a conversation started by my ancestors.",
    image: "https://images.unsplash.com/photo-1632999877906-7944fd2c694d",
    yearsOfExperience: 35,
    location: {
      lat: 36.3167,
      lng: 74.6500
    }
  }
];
