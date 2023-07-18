import Header from "@/components/Header";

export const metadata = {
    title: 'Services',
    description: 'Local services that we have here in Solstice',
}

export default function Services() {
    return (
        <main className="flex flex-col">
            <Header title={metadata.title} description={metadata.description} />
            <div>
                <ul>
                    <li>
                        <div className="bg-center bg-no-repeat bg-[url('/regions/alee-isle.webp')] bg-gray-600 bg-blend-multiply">
                            <div className="sm:px-40 px-10 py-14 space-y-2">
                                <h1 className="font-medium sm:text-4xl text-3xl">Alure Post</h1>
                                <h2 className="text-xl">Local and international postal service</h2>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="bg-center bg-no-repeat bg-[url('/regions/alee-isle.webp')] bg-gray-600 bg-blend-multiply">
                            <div className="sm:px-40 px-10 py-14 space-y-2">
                                <h1 className="font-medium sm:text-4xl text-3xl">ExploreAlure</h1>
                                <h2 className="text-xl">Tourism service</h2>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="bg-center bg-no-repeat bg-[url('/regions/alee-isle.webp')] bg-gray-600 bg-blend-multiply">
                            <div className="sm:px-40 px-10 py-14 space-y-2">
                                <h1 className="font-medium sm:text-4xl text-3xl">MinePot</h1>
                                <h2 className="text-xl">International restaurant</h2>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="bg-center bg-no-repeat bg-[url('/regions/alee-isle.webp')] bg-gray-600 bg-blend-multiply">
                            <div className="sm:px-40 px-10 py-14 space-y-2">
                                <h1 className="font-medium sm:text-4xl text-3xl">Intel Computer Shop</h1>
                                <h2 className="text-xl">International computer shop</h2>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </main>
    )
}
