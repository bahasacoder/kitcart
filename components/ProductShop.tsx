// /app/app/page.js

'use client';

import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '@/lib/features/cartSlice';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Plus } from 'lucide-react';
import Link from 'next/link';

const products = [
  {
    id: 1,
    name: 'MacBook Pro',
    price: 1299,
    description: 'Powerful laptop for professionals',
    image: 'https://images.unsplash.com/photo-1597673030062-0a0f1a801a31',
    category: 'Electronics'
  },
  {
    id: 2,
    name: 'Wireless Headphones',
    price: 299,
    description: 'Premium sound quality',
    image: 'https://images.unsplash.com/photo-1491927570842-0261e477d937',
    category: 'Audio'
  },
  {
    id: 3,
    name: 'Nike Running Shoes',
    price: 129,
    description: 'Comfortable and stylish',
    image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d',
    category: 'Fashion'
  },
  {
    id: 4,
    name: 'Apple Watch',
    price: 399,
    description: 'Smart and connected',
    image: 'https://images.unsplash.com/photo-1579811216948-6f57c19376a5',
    category: 'Electronics'
  },
  {
    id: 5,
    name: 'Designer Heels',
    price: 189,
    description: 'Elegant and sophisticated',
    image: 'https://images.unsplash.com/photo-1596703263926-eb0762ee17e4',
    category: 'Fashion'
  },
  {
    id: 6,
    name: 'MacBook Air',
    price: 999,
    description: 'Lightweight and powerful',
    image: 'https://images.unsplash.com/photo-1575909812264-6902b55846ad',
    category: 'Electronics'
  },
  {
    id: 7,
    name: 'Studio Headphones',
    price: 349,
    description: 'Professional audio experience',
    image: 'https://images.unsplash.com/photo-1607950689008-58cfcdde6da4',
    category: 'Audio'
  },
  {
    id: 8,
    name: 'Luxury Watches',
    price: 599,
    description: 'Timeless elegance',
    image: 'https://images.unsplash.com/photo-1535449425-adc6f5faa71c',
    category: 'Fashion'
  }
];

export default function ShoppingPage() {
  const dispatch = useDispatch();
  const { totalQuantity } = useSelector((state) => state.cart);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Header */}
      <header className="bg-background border-b sticky top-0 z-50 backdrop-blur-sm bg-background/95">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <ShoppingCart className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold">ShopHub</h1>
          </div>
          <Link href="/cart">
            <Button variant="outline" className="relative">
              <ShoppingCart className="mr-2 h-4 w-4" />
              Cart
              {totalQuantity > 0 && (
                <Badge className="ml-2 bg-primary text-primary-foreground">
                  {totalQuantity}
                </Badge>
              )}
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-primary/5 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Welcome to ShopHub</h2>
          <p className="text-xl text-muted-foreground">
            Discover amazing products at great prices
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <main className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-2">Featured Products</h3>
          <p className="text-muted-foreground">Browse our curated selection</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <CardHeader className="p-0">
                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <Badge className="absolute top-2 right-2 bg-background/90 text-foreground">
                    {product.category}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-lg mb-2">{product.name}</CardTitle>
                <p className="text-sm text-muted-foreground mb-3">
                  {product.description}
                </p>
                <div className="text-2xl font-bold text-primary">
                  ${product.price}
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button
                  onClick={() => handleAddToCart(product)}
                  className="w-full"
                  size="lg"
                >
                  <Plus className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-muted mt-16 py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2024 ShopHub. Built with Redux Toolkit & Next.js</p>
        </div>
      </footer>
    </div>
  );
}