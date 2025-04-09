export default function Navbar() {
    return (
        <nav className="nav-color bg-green-950 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex items-center">
                        <img className="bg-green-400 w-12 h-10 mr-3" src="./navbar_icon.png" alt="navabr icon" />
                        <span className="font-bold text-2xl text-green-400">ProgAce</span>
                    </div>
                    <div className="flex space-x-2">
                        <button className="border-2 border-green-500 text-green-400 hover:text-stone-100 rounded-[8px] px-4 py-1 text-sm">Sign in</button>
                        <button className="border-2 border-green-500 bg-green-500 hover:text-stone-100 text-green-950 rounded-[8px] px-4 py-1 text-sm">Sign up</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}
