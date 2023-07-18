import Link from "next/link";
import DateFormatter from '@/components/updates/DateFormatter'

export default function PostPreview(props) {
 return (
     <div key="post" className="bg-zinc-800 py-3 px-5 border border-gray-600 rounded-lg space-y-3">
         <Link href={`/updates/${props.slug}`}>
             <h2 className="font-medium text-2xl hover:underline">{props.title}</h2>
         </Link>
         <span className="text-sm">{props.author}</span>
         <p>{props.description}</p>
         <p className="font-medium text-sm">Posted on {DateFormatter(props.date)}</p>
     </div>
 )
}
