import { useEffect, useState } from 'react'
import { supabase } from '../src/lib/supabase-client.ts';
import React from 'react'
import { Session } from '@supabase/supabase-js/src/index.ts';

export default function Home() {
  const [session, setSession] = useState<Session|null>()

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session)
      }
    )

    return () => {
      authListener.subscription.unsubscribe()
    }
  }, [])

  function signInWithGithub() {
    supabase.auth.signInWithOAuth({ provider: 'github' })
  }

  function signOut() {
    supabase.auth.signOut()
  }

  return (
    <>
      {session ? (
        <button onClick={() => signOut()}>サインアウト</button>
      ) : (
        <button onClick={() => signInWithGithub()}>GitHubでログイン</button>
      )}
    </>
  )
}