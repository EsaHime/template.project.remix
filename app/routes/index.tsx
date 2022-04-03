import { useLoaderData } from '@remix-run/react'
import { json } from '@remix-run/node'
import { User } from '@prisma/client'
import { UserService } from '../services/user'

// See how many functions we can use.
// https://remix.run/docs/en/v1/api/conventions#loader

const loader = async () => {
  const users = await UserService.getUserList()
  return json(users)
}

const IndexPage = () => {
  const users = useLoaderData<User[]>()
  console.log(users)

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
      <h1>Welcome to Remix</h1>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  )
}

export {
  loader
}

export default IndexPage
