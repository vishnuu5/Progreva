import FeaturesSection from "./FeaturesSection"
import { FaClipboardList } from "react-icons/fa"

export default function HeroSection() {
    return (
        <div className="relative bg-green-900 text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center ">
                    {/* Left Text Section */}
                    <div className="w-full md:w-1/2 mb-10 md:mb-0 md:pr-10 mt-3">
                        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                            Ignite Your Mind, Win Big
                        </h1>
                        <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-300">
                            Are you ready to put your brain to the ultimate test? ProgAce Quiz is your chance to challenge your
                            cognitive abilities, sharpen your problem-solving skills, and win exciting rewards.
                        </p>
                        <div className="mt-6">
                            <button className="bg-green-300 text-green-950 hover:bg-green-600 font-semibold rounded-xl py-3 px-6 flex items-center text-sm sm:text-base transition">
                                <FaClipboardList className="w-5 h-5 mr-3" />
                                Take A Sample Test
                            </button>
                        </div>

                        <div className="mt-12">
                            <h2 className="text-xl font-semibold text-white mb-4">What You Get?</h2>
                            <FeaturesSection />
                        </div>
                    </div>

                    {/* Right Image Section */}
                    <div className="w-full md:w-1/2">
                        <img
                            src="./header_img.svg?height=700&width=700"
                            alt="Quiz dashboard preview"
                            className="w-full h-full ml-[70px] rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
