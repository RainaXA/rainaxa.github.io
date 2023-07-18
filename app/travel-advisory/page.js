import ListCountries from "@/components/travel-advisory/ListCountries";
import Header from "@/components/Header";

export const metadata = {
    title: 'Travel Advisory',
    description: 'Information whether its safe to travel to other countries',
}

export default async function TravelAdvisory(){
    return (
        <main className="flex flex-col">
            <Header title={metadata.title} description={metadata.description} />
            <div>
                <h1 className="p-5 sm:px-40 px-10 text-3xl" id="legend">Legend</h1>
                <ul>
                    <li className="p-6 sm:px-40 px-10 bg-green-950">
                        <p className="font-medium text-lg">Take normal security precautions</p>
                        <p>Take similar precautions to those you would take in The Federal Democracy of Solstice.</p>
                    </li>
                    <li className="p-6 sm:px-40 px-10 bg-yellow-700">
                        <p className="font-medium text-lg">Exercise a high degree of caution</p>
                        <p>There are certain safety and security concerns or the situation could change quickly. Be very cautious at all times, monitor local media and follow the instructions of local authorities.</p>
                        <p><b className="font-semibold"> IMPORTANT:</b> The two levels below are official Government of The Federal Democracy of Solstice Travel Advisories and are issued when the safety and security of Alurians travelling or living in the country or region may be at risk.</p>
                    </li>
                    <li className="p-6 sm:px-40 px-10 bg-orange-700">
                        <p className="font-medium text-lg">Avoid non-essential travel</p>
                        <p>Your safety and security could be at risk. You should think about your need to travel to this country, territory or region based on family or business requirements, knowledge of or familiarity with the region, and other factors. If you are already there, think about whether you really need to be there. If you do not need to be there, you should think about leaving.</p>
                    </li>
                    <li className="p-6 sm:px-40 px-10 bg-red-950">
                        <p className="font-medium text-lg">Avoid all travel</p>
                        <p>You should not travel to this country, territory or region. Your personal safety and security are at great risk. If you are already there, you should think about leaving if it is safe to do so.</p>
                    </li>
                </ul>
            </div>
            <div className="sm:px-40 px-10 py-3 bg-blue-800"><h2 className="font-medium text-lg"><b className="font-bold">WARNING!</b> This page may be inaccurate at times, refer to the <a href="https://discord.com/channels/277922530973581312/1019705091336446052" className="transition ease-in-out transition-200 text-blue-300 hover:text-blue-200 active:text-blue-500">Minecraft General Announcements</a> channel for the latest updates</h2></div>
            <ListCountries />
        </main>
    )
}
