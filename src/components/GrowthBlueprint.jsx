import { FaClipboardList } from "react-icons/fa";
import { AiOutlineExport } from "react-icons/ai";

export default function GrowthBlueprint() {
    return (
        <div className="py-12">
            <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Unlock Your Personalized Growth Blueprint</h2>
                    <p className="text-gray-600 mb-6">
                        Get feedback of your performance, including correct answers and areas for improvement.
                    </p>
                    <button className="bg-green-300 rounded-xl w-[21rem]  hover:bg-green-600 text-green-950 font-medium py-3 px-[7rem] flex items-center">
                        <FaClipboardList className="size-4 mr-3" />
                        Get Started
                    </button>
                </div>
                <div className="md:w-1/2">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="flex flex-col-2 gap-3 ">
                            <img className="w-8 h-8" src="./like-dislike.png" />
                            <h3 className="text-lg font-medium text-gray-900 mb-4">Strengths & Weaknesses</h3>
                        </div>
                        <div className="flex flex-col-2 space-y-4 mb-6 bg-slate-100 rounded-xl p-4 divide-x-2 divide-gray-600 ">
                            <div>
                                <div className="flex flex-col mb-1 space-y-5 w-[11rem]">
                                    <span className="text-base text-gray-600">Arithmetic</span>
                                    <span className="text-base text-gray-600">Time, Speed, Distance</span>
                                    <span className="text-base text-gray-600">Probability and P&C</span>
                                    <span className="text-base text-gray-600">Data Interpretation</span>
                                </div>

                            </div>

                            <div className="flex flex-col w-full space-y-5 mb-1">
                                <div className="w-full bg-gray-200 rounded-full h-[20px]">
                                    <div className="bg-green-500 h-[20px] rounded-r-full" style={{ width: "80%" }}></div>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-[20px]">
                                    <div className="bg-green-500 h-[20px] rounded-r-full" style={{ width: "95%" }}></div>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-[20px]">
                                    <div className="bg-green-500 h-[20px] rounded-r-full" style={{ width: "50%" }}></div>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-[20px]">
                                    <div className="bg-green-500 h-[20px] rounded-r-full" style={{ width: "60%" }}></div>
                                </div>
                            </div>
                        </div>
                        <div className="mb-4">
                            <p className="text-base text-gray-700">
                                You're strong in <span className="font-medium">electromagnetism</span> and{" "}
                                <span className="font-medium">circular motion</span>! Now, master{" "}
                                <span className="font-medium">optics</span> and <span className="font-medium">kinetic motion</span> with
                                our expert resources to reach the next level!
                            </p>
                        </div>
                        <div>
                            <h4 className="text-lg font-medium text-gray-700 mb-2">Recommended reads</h4>
                            <div className="flex flex-wrap gap-2">
                                <div className=" text-gray-800 text-sm font-medium px-2.5 py-4 bg-lime-300 rounded-full flex items-center w-[10rem]">
                                    <span className="ml-4 text-sm">Optics A...</span>
                                    < AiOutlineExport className="ml-8 w-5 h-5" />
                                </div>
                                <div className=" text-gray-800 text-sm font-medium px-2.5 py-4 bg-lime-300 rounded-full flex items-center w-[10rem]">
                                    <span className="ml-4 text-sm">Concave...</span>
                                    < AiOutlineExport className="ml-8 w-5 h-5" />
                                </div>
                                <div className=" text-gray-800 text-sm font-medium px-2.5 py-4 bg-lime-300 rounded-full flex items-center w-[10rem]">
                                    <span className="ml-4 text-sm">Optics A...</span>
                                    < AiOutlineExport className="ml-8 w-5 h-5" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
