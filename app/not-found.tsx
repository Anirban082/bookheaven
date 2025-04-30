import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="flex h-[70vh] flex-col items-center justify-center gap-4">
      <h2 className="text-3xl font-bold">404 - Page Not Found</h2>
      <p className="text-muted-foreground">We couldn&apos;t find the page you&apos;re looking for.</p>
      <div className="flex gap-4 mt-4">
        <Button variant="default" asChild>
          <Link href="/">Go back home</Link>
        </Button>
      </div>
    </div>
  )
}