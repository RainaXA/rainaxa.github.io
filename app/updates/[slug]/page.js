import {readFileSync} from "fs";
import Markdown from "markdown-to-jsx"
import matter from "gray-matter";
import getPostMetadata from "@/components/updates/getPostMetadata";
import DateFormatter from "@/components/updates/DateFormatter";

const getPostContent = (slug) => {
    const folder = "posts/";
    const file = `${folder}${slug}.md`;
    const content = readFileSync(file, "utf-8");
    return matter(content);
}

export function generateMetadata(props) {
    const slug = props.params.slug;
    const post = getPostContent(slug);

    return {
        title: post.data.title,
        description: post.data.description
    }
}

export const generateStaticParams = async () => {
    const posts = getPostMetadata();
    return posts.map((post) => ({
        slug: post.slug,
    }))
}

export default function PostPage(props) {
    const slug = props.params.slug;
    const post = getPostContent(slug);
    return (
        <main>
            <div className="bg-center bg-no-repeat bg-[url('/jumbotron.webp')] bg-gray-700 bg-blend-multiply">
                <div className="sm:px-40 px-10 max-w-screen-xl text-left py-24 lg:py-10 space-y-3">
                    <h1 className="font-medium text-4xl">{post.data.title}</h1>
                    <span className="text-sm">{post.data.author} | {DateFormatter(post.data.date)}</span>
                    <h2 className="font-light text-lg">{post.data.description}</h2>
                </div>
            </div>
            <div className="md:px-80 px-20 mx-auto p-6 bg-zinc-800">
                <article className="prose lg-prose-xl prose-invert prose-headings:font-medium">
                    <Markdown>{post.content}</Markdown>
                </article>
            </div>
        </main>
    )
}
