import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

export default function Home() {
  return (
    <main className="min-h-dvh bg-background text-foreground">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            What can I help you build with Upcube?
          </h1>

          <p className="mt-4 text-muted-foreground md:text-lg">
            A clean frontend for discovering tools, products, and AI-powered workflows.
          </p>

          <Card className="mt-8">
            <CardContent className="p-4">
              <form className="flex flex-col gap-2 sm:flex-row">
                <Input
                  placeholder="Search Upcube products…"
                  className="h-11"
                />
                <Button className="h-11 sm:w-32">
                  Explore
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-3">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-medium">Product Hub</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Discover AI tools, workflows, and platforms in one place.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="font-medium">Fast & Static</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Built for speed using Next.js and Cloudflare’s global edge.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="font-medium">APIs Decoupled</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Your AI services live separately — frontend stays simple and stable.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
