import { ChevronRight, MessageSquare } from "lucide-react"

const products = [
    {
        isNew: true,
        image: "/images/fixed-height.png",
        tags: ["Google", "Trending", "New"],
        title: "Loudest à la Madison #1 (L'integral)",
        description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
        date: "22 April 2021",
        comments: 10,
    },
    {
        image: "/images/fixed-height2.png",
        tags: ["Design", "Popular", "Latest"],
        title: "Creative Design Solutions",
        description: "Explore innovative design approaches that transform user experiences and elevate brands.",
        date: "23 April 2021",
        comments: 15,
    },
    {
        isNew: true,
        image: "/images/fixed-height3.png",
        tags: ["Tech", "Featured", "Hot"],
        title: "Future of Technology",
        description: "Discover cutting-edge technologies shaping the future of digital transformation.",
        date: "24 April 2021",
        comments: 20,
    },
]

export default function FeaturedProductsCard() {
    return (
        <div className="pt-15 md:pl-10">
            <div className="flex flex-col items-center justify-center text-center">
                <h4 className="text-blue-400 font-bold">Pratice Advice</h4>
                <h1 className="text-3xl font-bold leading-tight md:hidden">
                    Featured <br /> Products
                </h1>

                {/* Hidden on mobile */}
                <h1 className="hidden md:flex md:flex-row md:font-bold">Featured Posts</h1>
                <p className="text-gray-600 max-w-md">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, nam.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
                {products.map((product, index) => (
                    <div key={index} className="relative bg-card rounded-lg overflow-hidden shadow-lg">
                        {product.isNew && (
                            <span className="absolute top-4 left-4 bg-red-500 text-white text-xs px-2 py-1 rounded">
                                NEW
                            </span>
                        )}


                        <div className="relative h-48">
                            <img src={product.image || "/placeholder.svg"} alt={product.title} className="w-full h-full object-cover" />
                        </div>

                        <div className="p-6">
                            <div className="flex gap-4 mb-4">
                                {product.tags.map((tag, idx) => (
                                    <span
                                        key={idx}
                                        className={`text-sm ${idx === 0 ? "text-blue-500" : idx === 1 ? "text-gray-600" : "text-gray-400"}`}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <h3 className="text-xl font-semibold mb-3">{product.title}</h3>
                            <p className="text-gray-600 mb-4">{product.description}</p>

                            <div className="flex items-center justify-between text-sm text-gray-500">
                                <span>{product.date}</span>
                                <div className="flex items-center gap-1">
                                    <MessageSquare className="w-4 h-4" />
                                    <span>{product.comments} comments</span>
                                </div>
                            </div>

                            <button className="mt-4 flex items-center text-primary hover:underline">
                                Learn More
                                <ChevronRight className="w-4 h-4 ml-1" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

