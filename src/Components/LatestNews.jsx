import { TbArrowNarrowRight } from "react-icons/tb"
import PostCard from "./PostCard"

const post =
{
    id: 1,
    title: "Digimax – SEO & Digital Marketing Agency HTML Template",
    // 200 words
    description: "Digimax – SEO & Digital Marketing Agency HTML Template Digimax was specially created for SEO & Digital Marketing Agency companies. It is based on the latest bootstrap with premium features. It is beautifully designed in a very smart way to bring the best user experience that you will love. It’s suitable for many kinds of online businesses such as Online Marketing, SEO Agency, Digital Marketing, Social Media website. Digimax comes with many features and more 40+ pages…",
    image: "/news1.jpg",
    date: "2021-06-12",
    author: {
        name: "John Doe",
        image: "/news.png",
    },
    catagory: {
        name: "Business",
        url: "/business"
    }
}

export default function LatestNews() {
    return (
        <div className="container-fluid">
            <h3 className="flex items-center py-4 text-2xl">
                <strong>Latest News</strong>
                <a href="/bulentin-story" className="flex items-center justify-between pr-2 ml-auto text-base font-medium text-primary-600">See All <TbArrowNarrowRight className="ml-2" /> </a>
            </h3>

            <div className="grid gap-6 py-1 lg:grid-cols-4 ">

                {
                    [...Array(4)].map((_, i) => (
                        <PostCard key={i} post={post} />
                    ))
                }
            </div>
        </div>
    )
}