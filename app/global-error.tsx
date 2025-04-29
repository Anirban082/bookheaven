'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function GlobalError({
  error,
  reset
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      <h2 className="text-2xl font-bold">Something went wrong!</h2>
      <p className="text-muted-foreground">An unexpected error has occurred</p>
      {error.digest && (
        <p className="text-sm text-muted-foreground">Error digest: {error.digest}</p>
      )}
      <div className="flex gap-4">
        <Button 
          variant="default" 
          onClick={() => reset()}
        >
          Try again
        </Button>
        <Button 
          variant="outline" 
          asChild
        >
          <Link href="/">Go back home</Link>
        </Button>
      </div>
    </div>
  )
}
