import getPostMetadata from "@/components/updates/getPostMetadata";
import PostPreview from "@/components/updates/PostPreview";
import Link from "next/link";

export const metadata = {
    title: 'Home - Government of The Federal Democracy of Solstice',
    description: 'The official website of the Government of The Federal Democracy of Solstice',
}
export default function Home() {
    const postMetadata = getPostMetadata();
    const postPreviews = postMetadata.slice(0,3).map((post) => (
        <PostPreview key={post.slug} {...post} />
    ));
  return (
    <main className="flex flex-col">
        <div className="bg-center bg-no-repeat bg-[url('/jumbotron.webp')] bg-gray-500 bg-blend-multiply">
            <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56 space-y-3">
                <h1 className="font-medium md:text-5xl text-4xl">Welcome to the Federal Democracy of Solstice</h1>
                <h2 className="font-light md:text-3xl text-xl">The official website of the Government of the Federal Democracy of Solstice</h2>
            </div>
        </div>
            <ul>
                <li>
                    <div className="bg-center bg-no-repeat bg-[url('/regions/alee-isle.webp')] bg-gray-600 bg-blend-multiply">
                        <div className="sm:px-40 px-10 py-14 space-y-2">
                            <h1 className="font-medium sm:text-5xl text-3xl">Firefly</h1>
                            <span>Premier: Raina</span>
                            <h2 className="text-lg">Capital of the Federal Democracy of Solstice</h2>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="bg-center bg-no-repeat bg-[url('/regions/breadcroust.webp')] bg-gray-600 bg-blend-multiply">
                        <div className="sm:px-40 px-10 py-14 space-y-2">
                            <h1 className="font-medium sm:text-5xl text-3xl">Szki Lanes</h1>
                            <span>Premier: Raina</span>
                            <h2 className="text-lg">Home to MinePot Barton Centre and athletics</h2>
                        </div>
                </div>
                </li>
                <li>
                    <div className="bg-center bg-no-repeat bg-[url('/regions/skycity.webp')] bg-gray-600 bg-blend-multiply">
                        <div className="sm:px-40 px-10 py-14 space-y-2">
                            <h1 className="font-medium sm:text-5xl text-3xl">Prehevil</h1>
                            <span>Premier: Sasha</span>
                         <h2 className="text-lg">A city that floats in the sky</h2>
                        </div>
                    </div>
                </li>
            </ul>
        <div className="sm:px-40 px-10 py-3 space-y-3">
            <h1 className="text-2xl font-medium" id="about">About Solstice</h1>
            <p>Insert stuff here</p>
            <h1 className="text-2xl font-medium">Latest Updates</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">{postPreviews}</div>
            <Link href="/updates"><p className="text-blue-500 hover:text-blue-300 pt-2">View more</p></Link>
        </div>
    </main>
  )
}
