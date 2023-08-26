export default function SubscribeSection() {
    return (
        <div className="container-fluid">
            <div className="flex flex-col items-center justify-between p-8 bg-gray-100 rounded-lg lg:p-20 lg:flex-row ">
                <div className="items-center py-4">
                    <p className="py-4 text-sm lg:tracking-[6px] tracking-[3px] font-semibold">GET FIRST UPDATE</p>
                    <h2 className="text-2xl font-bold lg:text-4xl">Get the news in front line by <br /> <span className="text-primary-600">subscribe</span> our latest updtes</h2>
                </div>
                <div className="flex flex-wrap items-center flex-1 gap-3 py-4 lg:justify-end">
                    <input className="px-4 py-2 text-sm border border-gray-300 rounded-md lg:w-1/2 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent" type="text" placeholder="Enter your email" />
                    <button className="px-4 py-2 text-sm font-bold text-white rounded-md bg-primary-600">Subscribe</button>
                </div>
            </div>
        </div>


    )
}