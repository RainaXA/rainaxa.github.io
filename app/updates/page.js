import getPostMetadata from "@/components/updates/getPostMetadata";
import PostPreview from "@/components/updates/PostPreview";
import Header from "@/components/Header";

export const metadata = {
    title: 'Updates',
    description: 'Follow the latest updates from the Federal Democracy of Solstice',
}

export default function Updates() {
    const postMetadata = getPostMetadata();
    const postPreviews = postMetadata.map((post) => (
        <PostPreview key={post.slug} {...post} />
    ));
    return (
        <main className="flex flex-col">
            <Header title={metadata.title} description={metadata.description} />
            <div className="lg:px-60 px-2 py-3">
                <div className="px-10 grid grid-cols-1 md:grid-cols-2 gap-4">{postPreviews}</div>
            </div>
        </main>
    )
}
