import { Users, Globe2, Building2, Play } from "lucide-react"

export default function AboutUs() {
  return (
    <div className="flex flex-col pt-15 pb-15 px-4 py-8 space-y-8 max-w-6xl mx-auto md:pl-15 md:pr-15">

      {/* AboutUs Section */}
      <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center gap-5 md:items-start md:text-left md:w-1/2">
          <h2 className="text-xl font-bold text-gray-800">ABOUT US</h2>
          <p className="text-lg font-medium leading-relaxed md:max-w-lg">
            We know how large objects will act, but things on a small scale just do not act that way.
          </p>
          <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            Get Quote Now
          </button>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src="/images/about/hero.png"
            alt="Shopping Experience"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Description Text */}
      <div className="flex flex-col gap-5">
        <div className="flex flex-col md:flex-row md:justify-start">
          <span className="text-[#E74040] font-Montserrat font-normal text-sm">Problems trying</span>
        </div>
        <div className="flex flex-col md:flex-row md:gap-8 md:justify-start w-full">
          <h3 className="text-lg mb-4 md:mb-0 md:w-1/2">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          </h3>
          <p className="md:w-1/2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem deserunt quidem laudantium repellat ipsum alias nulla?
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="flex flex-col gap-10 pt-20 pb-20 md:flex-row md:justify-between">
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
          src="https://picsum.photos/500/300/?blur=2"
          alt="Mountain Landscape"
          className="w-full h-90 object-cover"
        />
        <button className="absolute inset-0 m-auto w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors">
          <Play className="h-6 w-6 text-blue-600" />
        </button>
      </div>
    </div>
  )
}
