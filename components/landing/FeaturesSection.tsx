'use client'

import { Card, CardContent } from '@/components/ui/card'
import { BookOpen, Heart, ShoppingBag } from 'lucide-react'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

export default function FeaturesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (inView) {
      setIsVisible(true)
    }
  }, [inView])

  return (
    <section className='w-full py-12 md:py-24 lg:py-32 bg-background'>
      <div className='container mx-auto px-4 md:px-6 max-w-6xl'>
        <div className='flex flex-col items-center justify-center space-y-4 text-center'>
          <div className='space-y-2'>
            <div className='inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary'>
              Features
            </div>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80'>
              Everything You Need for Your Reading Journey
            </h2>
            <p className='max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
              BookHeaven provides a seamless experience for book lovers to
              discover, purchase, and organize their collection.
            </p>
          </div>
        </div>
        <div
          ref={ref}
          className='mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3'
        >
          <FeatureCard
            icon={<BookOpen className='h-6 w-6 text-primary' />}
            title='Extensive Library'
            description='Access thousands of books across all genres, from bestsellers to hidden gems.'
            delay={0}
            isVisible={isVisible}
          />
          <FeatureCard
            icon={<Heart className='h-6 w-6 text-primary' />}
            title='Track Favorites'
            description='Create collections and track your reading progress across devices.'
            delay={0.2}
            isVisible={isVisible}
          />
          <FeatureCard
            icon={<ShoppingBag className='h-6 w-6 text-primary' />}
            title='Easy Purchasing'
            description='Buy books with just a few clicks and start reading instantly.'
            delay={0.4}
            isVisible={isVisible}
          />
        </div>
      </div>
    </section>
  )
}

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  delay: number
  isVisible: boolean
}

function FeatureCard({
  icon,
  title,
  description,
  delay,
  isVisible
}: FeatureCardProps) {
  return (
    <Card
      className={cn(
        'relative overflow-hidden border-none shadow-lg transition-all hover:shadow-xl hover:scale-[1.02] duration-300 group opacity-0 translate-y-4',
        isVisible && 'opacity-100 translate-y-0'
      )}
      style={{
        transitionDelay: `${delay}s`,
        transitionProperty: 'all',
        transitionDuration: '0.5s'
      }}
    >
      <div className='absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 z-0 group-hover:from-primary/30 transition-all duration-300' />
      <CardContent className='p-6 z-10 relative'>
        <div className='rounded-lg bg-primary/10 w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all duration-300'>
          {icon}
        </div>
        <h3 className='text-xl font-bold mb-2'>{title}</h3>
        <p className='text-muted-foreground'>{description}</p>
      </CardContent>
    </Card>
  )
}
