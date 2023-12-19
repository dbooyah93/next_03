export default async function getAllUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    // no try catch because error boundary pages will manage errors
    if (!res.ok) throw new Error('failed to fetch data')

    return res.json();
}