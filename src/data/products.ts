export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'textiles' | 'pottery' | 'jewelry' | 'woodwork';
  materials: string[];
  story: string;
  images: string[];
  artisanId: string;
  stock: string;
  featured: boolean;
}

export let products: Product[] = [];

fetch("https://opensheet.elk.sh/1gWIldQpypeXlzCq4E3tnvuFuD2F2sv_CjVMJFJZH90s/Sheet1")
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
    products = data.map((item: any) => ({
      id: item.id,
      name: item.name,
      price: Number(item.price.replace(/,/g, '')),
      category: item.category as Product["category"],
      materials: item.materials.split(',').map((m: string) => m.trim()),
      story: item.story,
      images: item.images.split(',').map((img: string) => img.trim()),
      artisanId: item.artisanId,
      stock: item.stock,
      featured: String(item.featured || '').toLowerCase() === 'true',
    }));
    console.log(products)
  })
  .catch((error) => {
    console.error("Failed to fetch products:", error);
  });
