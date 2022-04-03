import type { MetaFunction } from '@remix-run/node'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from '@remix-run/react'

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'New Remix App',
  viewport: 'width=device-width,initial-scale=1'
})

export default function App () {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}

export function ErrorBoundary (context: { error: Error }) {
  console.error(context.error)
  return (
    <html>
    <head>
      <title>Oh no!</title>
      <Meta />
      <Links />
    </head>

    <body>
      <h1>Oh no</h1>
      <p>Something went wrong. Please try again.</p>
      <Scripts />
    </body>
    </html>
  )
}
