import React from 'react'
import getUser from '@/lib/getUser'
import getUserPosts from '@/lib/getUserPosts'
import { Suspense } from 'react'
import UserPosts from './components/UserPosts'
import Link from 'next/link'
import { Metadata } from 'next'
import getAllUsers from '@/lib/getAllUsers'

type Params = {
    params: {
        userId: string
    }
}

export async function generateMetadata({ params: { userId }}: Params): Promise<Metadata> {
    const userData: Promise<User> = getUser(userId)
    const user: User = await userData;

    return {
        title: user.name,
        description: `This is the page of ${user.name}`
    }
}

export default async function UserPage({ params: { userId }}: Params) {
    const userData: Promise<User> = getUser(userId)
    const userPostsData: Promise<Post[]> = getUserPosts(userId)
    
    // alternative to using suspense
    // const [user, userPosts] = await Promise.all([userData, userPostsData])

    const user = await userData
    
    return (
        <>
            <h1>User Page</h1>
            <h2>{user.name}</h2>
            <br/>
            <p>
                <Link href="/">Home</Link>
            </p>
            <Suspense fallback={<h2>Loading...</h2>}>
                <UserPosts promise={userPostsData}/>
            </Suspense>
        </>
    )
}

export async function generateStaticParams() {
    const usersData: Promise<User[]> = getAllUsers()
    // await lexically pauses execution
    const users = await usersData

    return users.map( user => ({
        // syntax auto returns
        userId: user.id.toString()
        // have to set page parameters as strings
    }));
}
