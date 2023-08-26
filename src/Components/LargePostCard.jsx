import Image from 'next/image'

export default function LargePostCard({ post }) {
    return (
        <div className="relative overflow-hidden rounded-lg ">
            <div className="flex-shrink-0">
                <Image className="object-cover w-full h-64 rounded-lg lg:h-72" src={post.image} alt="joker" width={1080} height={280} />
            </div>
            <a href="#" className="absolute bottom-0 block p-8 mt-2 text-white bg-gradient-to-b from-transparent to-black/50">
                <p className="font-semibold lg:text-3xl ">{post.title}</p>
                <p className="hidden mt-3 text-base lg:block ">{post.description}</p>
            </a>
        </div>
    )
}