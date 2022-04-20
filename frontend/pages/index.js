import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'

export default function Component() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        {session.user.avatar}<br />
        <button onClick={() => signOut()}>Sign out</button>
        <h1 className="title">
          {/* Read{' '} */}
          <Link href="/todo">
            <a>TODO page!</a>
          </Link>
        </h1>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}