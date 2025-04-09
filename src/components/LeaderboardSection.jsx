import { FaClipboardList } from "react-icons/fa";
import { FaCrown } from "react-icons/fa";


export default function LeaderboardSection() {
    return (
        <div className="py-12 bg-gray-50 rounded-lg">
            <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="flex items-center mb-4">
                            <FaCrown className="size-7 mr-3 text-green-600" />
                            <h3 className="text-lg font-medium text-gray-900">Test Leaderboard</h3>
                        </div>
                        <div className="relative h-48 mb-6">
                            {/* Podium */}
                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex items-end space-x-2">
                                <div className="flex flex-col items-center">
                                    <div className="w-10 h-10 rounded-full bg-gray-200 mb-2 overflow-hidden">
                                        <img src="./L2-img.png?height=40&width=40" alt="User" className="w-full h-full object-cover" />
                                    </div>
                                    <span>kedar A</span>
                                    <div className="w-16 h-24 bg-green-200 flex items-center justify-center rounded-t-md">
                                        <span className="font-bold text-xl">2</span>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="w-10 h-10 rounded-full bg-gray-200 mb-2 overflow-hidden">
                                        <FaCrown className=" w-[10rem] text-amber-500 absolute h-[1rem] top-[-10px] left-[10px]" />
                                        <img src="./L1_img.png?height=45&width=45" alt="User" className="w-full h-full object-cover" />
                                    </div>
                                    <span>Bhairavi T</span>
                                    <div className="w-16 h-32 bg-green-300 flex items-center justify-center rounded-t-md">
                                        <span className="font-bold text-xl">1</span>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="w-10 h-10 rounded-full bg- mb-2 overflow-hidden">
                                        <img src="./L3_img.png?height=40&width=40" alt="User" className="w-full h-full object-cover" />
                                    </div>
                                    <span>Basant S</span>
                                    <div className="w-16 h-16 bg-green-100 flex items-center justify-center rounded-t-md">
                                        <span className="font-bold text-xl">3</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div className="flex flex-col items-center bg-gray-100 h-[8rem] rounded-xl w-[5rem]">
                                <div className="w-10 h-10 rounded-full mb-1 mt-3 overflow-hidden">
                                    <img src="./L4_img.png?height=40&width=40" alt="User" className="w-full h-full object-cover" />
                                </div>
                                <span>kedar A</span>
                                <span className="font-bold">4</span>
                            </div>
                            <div className="flex flex-col items-center bg-gray-100 h-[8rem] rounded-xl w-[5rem]">
                                <div className="w-10 h-10 rounded-full mb-1 mt-3 overflow-hidden">
                                    <img src="./L5_img.png?height=40&width=40" alt="User" className="w-full h-full object-cover" />
                                </div>
                                <span>kedar A</span>
                                <span className="font-bold">5</span>
                            </div>
                            <div className="flex flex-col items-center bg-gray-100 h-[8rem] rounded-xl w-[5rem]">
                                <div className="w-10 h-10 rounded-full mb-1 mt-3 overflow-hidden">
                                    <img src="./L6_img.png?height=40&width=40" alt="User" className="w-full h-full object-cover" />
                                </div>
                                <span>kedar A</span>
                                <span className="font-bold">6</span>
                            </div>

                            <div className="flex flex-col items-center h-[8rem] rounded-xl w-[5rem]">

                                <span className="text-7xl">...</span>
                            </div>
                            <div className="flex flex-col items-center bg-gray-200 h-[8rem] rounded-xl w-[5rem]">
                                <div className="w-10 h-10 rounded-full mb-1 mt-3 overflow-hidden">
                                    <img src="./you_img.png?height=40&width=40" alt="User" className="w-full h-full object-cover" />
                                </div>
                                <span>You</span>
                                <img src="./lock_img.png" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Score More, Earn More, Rule the Leaderboard!</h2>
                    <p className="text-gray-600 mb-6">
                        Climb the leaderboard, unlock rewards, and showcase your skills! Rise to the top and gain exclusive perks as
                        you dominate the competition!
                    </p>
                    <div className="">
                        <button className="bg-green-300 rounded-xl w-[21rem]  hover:bg-green-600 text-green-950 font-medium py-3 px-[7rem] flex items-center">
                            <FaClipboardList className="size-4 mr-3 " />
                            Get Started
                        </button></div>
                </div>
            </div>
        </div>
    )
}
