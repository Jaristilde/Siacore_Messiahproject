export interface Product {
    id: string;
    name: string;
    price: number;
    category: 'clothing' | 'shoes' | 'accessories';
    description: string;
    images: string[];
    sizes: string[];
    colors?: string[];
    isNew?: boolean;
}

export const products: Product[] = [
    // Shoes (High Heels Only, sizes 5-10)
    {
        id: 's1',
        name: 'Stiletto Dreams',
        price: 120,
        category: 'shoes',
        description: 'Breathtaking hot pink stilettos for your boldest nights.',
        images: ['https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1000&auto=format&fit=crop'],
        sizes: ['5', '6', '7', '8', '9', '10'],
        isNew: true,
    },
    {
        id: 's2',
        name: 'Glossy Glam Heels',
        price: 95,
        category: 'shoes',
        description: 'Nude patent leather heels that go with everything.',
        images: ['https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1000&auto=format&fit=crop'],
        sizes: ['5', '6', '7', '8', '9', '10'],
    },
    // Clothing (XS-XL)
    {
        id: 'c1',
        name: 'Baddie Bodycon',
        price: 65,
        category: 'clothing',
        description: 'Snatched fit bodycon dress in vibrant magenta.',
        images: ['https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop'],
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        isNew: true,
    },
    {
        id: 'c2',
        name: 'Pink Paradise Set',
        price: 80,
        category: 'clothing',
        description: 'Two-piece matching set for the ultimate brunch look.',
        images: ['https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1000&auto=format&fit=crop'],
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
    },
    // Accessories
    {
        id: 'a1',
        name: 'Bling Belly Ring',
        price: 25,
        category: 'accessories',
        description: 'Sparkling butterfly belly button ring.',
        images: ['https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1000&auto=format&fit=crop'],
        sizes: ['One Size'],
    },
    {
        id: 'a2',
        name: 'Glossy iPhone Case',
        price: 35,
        category: 'accessories',
        description: 'Protective hot pink case with a glossy finish.',
        images: ['https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=1000&auto=format&fit=crop'],
        sizes: ['iPhone 13', 'iPhone 14', 'iPhone 15'],
    },
];
