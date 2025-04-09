export default function FeaturesSection() {
    const features = [
        {
            icon: "🏆",
            title: "Win Rewards",
        },
        {
            icon: "📊",
            title: "Test Analysis",
        },
        {
            icon: "🔑",
            title: "Solution Key",
        },
        {
            icon: "📜",
            title: "Certificate",
        },
    ]

    return (
        <div className="mt-6 grid grid-cols-2 gap-[7rem] md:grid-cols-4">
            {features.map((feature, index) => (
                <div key={index} className="flex items-center bg-lime-800 rounded-xl w-[9rem] py-2 ">
                    <span className="text-2xl ">{feature.icon}</span>
                    <span className="text-xs text-white ">{feature.title}</span>
                </div>
            ))}
        </div>
    )
}
