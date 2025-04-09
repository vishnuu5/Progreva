import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-green-900 text-white pt-12 pb-2">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="mb-8 md:mb-0">
                        <div className="flex items-center mb-4">
                            <img className="bg-green-500 w-8 h-6 rounded mr-2" src="./navbar_icon.png" />
                            <span className="font-semibold">Progace</span>
                        </div>
                        <p className="text-sm text-gray-300 max-w-xs font-medium">
                            Our secure and user-friendly platform is designed for all levels of investors. With transparency and
                            cutting-edge technology, we're your partner in financial success. Join us today.
                        </p>
                        <div className="flex items-center mt-4 flex-wrap">
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-300 hover:text-white">
                                    <FaFacebook />
                                </a>
                                <a href="#" className="text-gray-300 hover:text-white">
                                    <FaTwitter />
                                </a>
                                <a href="#" className="text-gray-300 hover:text-white">
                                    <FaGithub />
                                </a>
                            </div>

                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 font-medium">
                        <div>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#" className="text-gray-300 hover:text-white text-sm">
                                        Learn
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-300 hover:text-white text-sm">
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-300 hover:text-white text-sm">
                                        Disclaimer
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#" className="text-gray-300 hover:text-white text-sm">
                                        Blogs
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-300 hover:text-white text-sm">
                                        FAQ's
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-300 hover:text-white text-sm">
                                        Privacy Policy
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <p className="text-sm flex justify-end text-gray-300 mt-2 sm:mt-0 ml-auto">© 2022 Platform Name</p>
                    </div>
                </div>
            </div>
        </footer >
    )
}
