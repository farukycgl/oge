import { Users, Globe2, Building2, Play } from "lucide-react"

export default function AboutUs() {
  return (
    <div className="flex flex-col items-center pt-15 pb-15 px-4 py-8 space-y-8 max-w-md mx-auto">
      {/* Header Section */}
      <div className="flex flex-col items-center text-center gap-5">
        <h2 className="text-xl font-bold text-gray-800">ABOUT US</h2>
        <p className="text-center text-lg font-medium max-w-xs mx-auto leading-relaxed">
          We know how large objects will act, but things on a small scale just do not act that way.
        </p>
        <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
          Get Quote Now
        </button>
      </div>

      {/* Image Section */}
      <div className="w-full">
        <img
          src="https://picsum.photos/seed/picsum/200/300"
          alt="Shopping Experience"
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>

      {/* Description Text */}
      <div className="flex flex-col items-center gap-5">
        <span className="text-center text-s text-[#E74040]">Problems trying</span>
        <h3 className="text-center text-lg max-w-xs mx-auto leading-relaxed">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
        </h3>
        <p className="text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem deserunt quidem laudantium repellat ipsum alias nulla?
        </p>
      </div>

      {/* Stats Grid */}
      <div className="flex flex-col gap-10 pt-20 pb-20">
        <div className="text-center space-y-1">
          <div className="flex justify-center">
            <Users className="h-6 w-6 text-blue-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800">15K</h3>
          <p className="text-sm text-gray-600">Happy Customer</p>
        </div>

        <div className="text-center space-y-1">
          <div className="flex justify-center">
            <Users className="h-6 w-6 text-blue-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800">150K</h3>
          <p className="text-sm text-gray-600">Monthly Visitor</p>
        </div>

        <div className="text-center space-y-1">
          <div className="flex justify-center">
            <Globe2 className="h-6 w-6 text-blue-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800">15</h3>
          <p className="text-sm text-gray-600">Countries Worldwide</p>
        </div>

        <div className="text-center space-y-1">
          <div className="flex justify-center">
            <Building2 className="h-6 w-6 text-blue-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800">100+</h3>
          <p className="text-sm text-gray-600">Top Partners</p>
        </div>
      </div>

      {/* Video Section */}
      <div className="relative w-full rounded-lg overflow-hidden">
        <img
          src="https://picsum.photos/200/300/?blur=2"
          alt="Mountain Landscape"
          className="w-full h-48 object-cover"
        />
        <button className="absolute inset-0 m-auto w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors">
          <Play className="h-6 w-6 text-blue-600" />
        </button>
      </div>
    </div>
  )
}
