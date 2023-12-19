import type { Metadata } from 'next'
import getAllUsers from '@/lib/getAllUsers'
import Link from 'next/link'

export const metadata: Metadata = {
    title: 'Users',
}

import React from 'react'

// the page is an async function because of the Promise within
export default async function UsersPage() {
    
    // this rendering method's main purpose is to garner user data
    const usersData: Promise<User[]> = getAllUsers()

    const users = await usersData;

    console.log('Server component!');

    const content = (
        <section>
            <h2>
                <Link href="/">Back to Home</Link>
            </h2>
            <br/>
            {
                users.map(user => {
                    return ( 
                        <>
                            <p key={user.id}>
                                <Link href={`/users/${user.id}`}>{user.name}</Link>
                            </p>
                        </>
                    )
                })
            }
        </section>
    )
        return content;
}
