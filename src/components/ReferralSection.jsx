export default function ReferralSection() {
    return (
        <div className="bg-green-950 pt-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <h2 className="text-3xl font-bold text-white mb-4">Invite your friends and watch the rewards roll in!</h2>
                        <p className="text-gray-300 mb-6">
                            For every friend who signs up, you earn bonus points. The more friends you bring, the bigger your rewards
                        </p>
                        <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-6 rounded-xl">
                            Invite Friends
                        </button>
                    </div>
                    <div className="md:w-1/2 flex justify-center">
                        <div className="mb-0">
                            <img src="./giftbox_img.png" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
