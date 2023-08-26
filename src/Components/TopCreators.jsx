import Image from "next/image"
import { TbArrowNarrowRight } from "react-icons/tb"


export default function TopCreators() {
    const stories = [
        {
            id: 1,
            image: "/profile.jpg",
            title: "Bulentin Story",
            degination: "BBC News",
        },
        {
            id: 2,
            image: "/profile.jpg",
            title: "Bulentin Story",
            degination: "BBC News",
        },
        {
            id: 3,
            image: "/profile.jpg",
            title: "Bulentin Story",
            degination: "BBC News",
        },
        {
            id: 4,
            image: "/profile.jpg",
            title: "Bulentin Story",
            degination: "BBC News",
        },
    ]



    return (
        <div className="container-fluid ">
            <h3 className="flex items-center text-2xl ">
                <strong>Top Creator</strong>
                <a href="/bulentin-story" className="flex items-center justify-between pr-2 ml-auto text-base font-medium text-primary-600">See All <TbArrowNarrowRight className="ml-2" /> </a>
            </h3>
            <div className="flex items-center justify-between py-6 overflow-hidden gap-x-8">
                {stories.map(story => (
                    <div key={story.id} className="flex flex-col items-center justify-center lg:flex-row">
                        <div className="">
                            <Image src={story.image} alt="LOGO" width={80} height={
                                80} className="rounded-full" />
                        </div>
                        <div className="px-4 text-center lg:text-left">
                            <h2 className="mt-3 text-2xl font-bold">{story.title}</h2>
                            <p className="pt-2 text-xs font-medium text-primary-600">{story.degination}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}