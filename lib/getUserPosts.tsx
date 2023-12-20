import React from 'react'

export default async function getUserPosts(userId: string) {
    // Use URL parameter instead of new route because of syntax and clarity
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
        { next: { revalidate: 60 } }
    );
    if (!res.ok) throw new Error('failed to fetch user');
    return res.json();
}
