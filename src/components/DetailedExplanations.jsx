
import { FaClipboardList } from "react-icons/fa";

export default function DetailedExplanations() {
    return (
        <div className="py-12">
            <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Learn, Improve, Excel with the Detailed Explanations
                    </h2>
                    <p className="text-gray-600 mb-6">
                        Dive into detailed, expertly explained answers for every question you attempt. Get personalized insights to
                        sharpen your skills. Discover the 'why' behind every answer and transform every mistake into a stepping
                        stone to success!
                    </p>
                    <button className="bg-green-300 rounded-xl hover:bg-green-600 text-green-950 font-medium py-2 px-6 flex items-center">
                        <FaClipboardList className="size-4 mr-3" />
                        Take Your First Free Test
                    </button>
                </div>
                <div className="md:w-1/2">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-lg font-medium text-gray-900 mb-4">Question summary</h3>
                        <div className="grid grid-cols-10 gap-1 mb-2">
                            {[...Array(10)].map((_, i) => (
                                <div
                                    key={i}
                                    className={`h-6 rounded ${i < 4 ? "bg-green-500" : i === 4 ? "bg-red-500" : "bg-green-500"}`}
                                ></div>
                            ))}
                        </div>
                        <div className="grid grid-cols-10 gap-1 mb-2">
                            {[...Array(10)].map((_, i) => (
                                <div
                                    key={i}
                                    className={`h-6 rounded ${i < 0 ? "bg-green-500" : i === 0 ? "bg-red-500" : "bg-green-500"}`}
                                ></div>
                            ))}
                        </div>
                        <div className="grid grid-cols-10 gap-1">
                            {[...Array(10)].map((_, i) => (

                                <div
                                    key={i}
                                    className={`h-6 rounded ${i < 3 ? "bg-green-500" : i === 3 || i === 6 ? "bg-red-500" : "bg-green-500"}`}
                                ></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
