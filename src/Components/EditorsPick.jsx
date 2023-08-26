
import { TbArrowNarrowRight } from "react-icons/tb"
import LargePostCard from "./LargePostCard"
import PostCard from "./PostCard"

export default function EditorsPick() {
    const post = {
        title: 'All the rumors about the new iPhone 15 and 15 Pro, expexted to launch in September',
        description: ' Apple in September 2021 unveiled the iPhone 13 Pro and iPhone 13 Pro Max, which it says are its most pro iPhone models ever. The new iPhones feature a ProMotion display with a variable refresh rate up to 120Hz, a new five-core GPU, a...',
        image: '/mobile.jpg',
        date: 'July 11, 2021',
    }

    return (
        <div className="container-fluid">
            <h3 className="flex items-center py-4 text-2xl">
                <strong>Creator Picks</strong>
                <a href="/bulentin-story" className="flex items-center justify-between pr-2 ml-auto text-base font-medium text-primary-600">See All <TbArrowNarrowRight className="ml-2" /> </a>
            </h3>
            <LargePostCard post={post} />
            <div className="grid gap-4 mt-10 lg:grid-cols-3 ">
                <PostCard post={post} />
                <PostCard post={post} />
                <PostCard post={post} />
            </div>


        </div>
    )
}