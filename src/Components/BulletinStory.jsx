import Image from "next/image"
import { TbArrowNarrowRight } from "react-icons/tb"

export default function BulletinStory() {
    const stories = [
        {
            id: 1,
            image: "/profile.jpg",
            title: "Bulentin Story",
        },
        {
            id: 2,
            image: "/profile.jpg",
            title: "Bulentin Story",
        },
        {
            id: 3,
            image: "/profile.jpg",
            title: "Bulentin Story",
        },
        {
            id: 4,
            image: "/profile.jpg",
            title: "Bulentin Story",
        },
        {
            id: 5,
            image: "/profile.jpg",
            title: "Bulentin Story",
        },
        {
            id: 6,
            image: "/profile.jpg",
            title: "Bulentin Story",
        },
        {
            id: 7,
            image: "/profile.jpg",
            title: "Bulentin Story",
        },
        {
            id: 8,
            image: "/profile.jpg",
            title: "Bulentin Story",
        },
        {
            id: 9,
            image: "/profile.jpg",
            title: "Bulentin Story",
        },
        {
            id: 10,
            image: "/profile.jpg",
            title: "Bulentin Story",
        },
        {
            id: 11,
            image: "/profile.jpg",
            title: "Bulentin Story",
        },


    ]

    return (
        <div className="py-4 container-fluid">
            <h3 className="flex items-center text-2xl ">
                <strong>Bulletin Story</strong>
                <a href="/bulentin-story" className="flex items-center justify-between pr-2 ml-auto text-base font-medium text-primary-600">See All <TbArrowNarrowRight className="ml-2" /> </a>
            </h3>
            <div className="flex items-center pt-6 overflow-hidden gap-x-8">
                {stories.map(story => (
                    <div key={story.id} className="flex flex-col items-center justify-center">
                        <div className="p-1 rounded-full bg-gradient-to-b from-primary-600 to-orange-400">
                            <Image src={story.image} alt="LOGO" width={80} height={
                                80} className="rounded-full" />
                        </div>
                        <h4 className="mt-3 text-xs font-medium">{story.title}</h4>
                    </div>
                ))}
            </div>
        </div>
    )
}