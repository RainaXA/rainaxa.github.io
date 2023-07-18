import Link from "next/link";

export default function NotFound() {
    return (
        <main className="flex flex-col justify-center context-center text-center p-2">
            <h1 className="text-2xl font-bold">404</h1>
            <h1 className="text-2xl font-bold">The page you are looking for does not exist.</h1>
            <Link href='/'><p className="text-cyan-600 hover:text-cyan-500">Head back to the homepage</p></Link>
        </main>
    )
}
