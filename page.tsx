"use client"

import Link from 'next/link'
import { ArrowLeft, Heart } from 'lucide-react'
import { BottomNav } from '@/components/bottom-nav'
import { ProductCard } from '@/components/product-card'
import { useStore } from '@/lib/store'
import { Button } from '@/components/ui/button'

function WishlistContent() {
  const { wishlist } = useStore()

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-lg border-b border-border">
        <div className="max-w-md mx-auto px-4 py-3 flex items-center gap-4">
          <Link href="/" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div className="flex-1">
            <h1 className="text-lg font-semibold text-foreground">Wishlist</h1>
            <p className="text-sm text-muted-foreground">{wishlist.length} items</p>
          </div>
        </div>
      </header>

      <main className="max-w-md mx-auto px-4 py-4">
        {wishlist.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16">
            <div className="w-24 h-24 rounded-full bg-secondary flex items-center justify-center mb-6">
              <Heart className="w-10 h-10 text-muted-foreground" />
            </div>
            <h2 className="text-xl font-semibold text-foreground mb-2">Your wishlist is empty</h2>
            <p className="text-muted-foreground text-center mb-6">
              Save items you love by tapping the heart icon
            </p>
            <Link href="/products">
              <Button className="rounded-2xl px-8">Explore Products</Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4">
            {wishlist.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </main>

      <BottomNav />
    </div>
  )
}

export default function WishlistPage() {
  return <WishlistContent />
}
