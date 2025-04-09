import { FaClipboardList } from "react-icons/fa";

export default function RewardsSection() {
    return (
        <div className="py-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2 flex justify-center space-x-4">
                    <div className="bg-green-900 p-4 rounded-xl flex items-center justify-center w-24 h-24">
                        <img className="bg-green-400 w-12 h-18 rounded" src="./navbar_icon.png" alt="navabr icon" />
                    </div>
                    <div className="bg-white p-4 rounded-lg flex items-center justify-center w-24 h-24 border border-gray-200">
                        <img src="./amazon_img.png" alt="Amazon" className="h-19 w-[14rem]" />
                    </div>
                    <div className="bg-white p-4 rounded-lg flex items-center justify-center w-24 h-24 border border-gray-200">
                        <img src="./dadacha_img.png" alt="Dada Chi Shala" className="h-12 w-12" />
                    </div>
                </div>

                <div className="md:w-1/2">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Rewards, Your Choice</h2>
                    <p className="text-gray-600 mb-6">
                        Generate an Amazon gift card, renew your subscription, or donate to Dada Chi Shala NGO.
                    </p>
                    <button className="bg-green-300 rounded-xl w-[21rem]  hover:bg-green-600 text-green-950 font-medium py-3 px-[3rem] gap-3 flex items-center">
                        <FaClipboardList className="size-4  " />
                        Start Wining
                    </button>
                </div>
            </div>
        </div>
    )
}
