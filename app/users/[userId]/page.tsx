import React from 'react'
import getUser from '@/lib/getUser'
import getUserPosts from '@/lib/getUserPosts'

type Params = {
    params: {
        userId: string
    }
}

export default function UserPage({ params: { userId }}: Params) {
    const userData: Promise<User> = getUser(userId)
    const userPosts: Promise<Post[]> = getUserPosts(userId)

    return (
        <div>
            
        </div>
    )
}
