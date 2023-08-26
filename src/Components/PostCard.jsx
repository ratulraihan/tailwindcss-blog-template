import Image from "next/image";
import getReadTime from "./getReadTime";


export default function PostCard({ post }) {
    return (
        <div className="items-center overflow-hidden bg-white ">
            <figure className="h-52">
                <Image src={post.image} alt={post.title} width={600} height={208} className="object-cover h-full rounded-lg" />
            </figure>
            <div className="text-sm font-semibold">
                {post.date}
            </div>
            <div className="py-2 lg:py-6">

                <h2 className="text-xl font-bold">{post.title}</h2>
                <p className="pt-2 text-sm lg:py-4">{post.description.substring(0, 150)}</p>

            </div>
            <div className="">
                {getReadTime(post.description)} min read
            </div>
        </div>

    )
}