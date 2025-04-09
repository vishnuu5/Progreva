import { AiTwotoneThunderbolt } from "react-icons/ai";

export default function PricingSection() {
    return (
        <div className="py-12">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Choose A Plan That Suites You</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* One Time Test */}
                <div className="rounded-xl border-2 overflow-hidden shadow-lg bg-white">
                    <div className="flex flex-col mb-3 bg-green-400 py-3">
                        <h3 className="text-lg font-semibold mb-2 ml-6  mt-3">One Time Test</h3>
                        <p><span className="text-2xl font-bold ml-7">₹ 49</span>
                            <span className="text-xl font-bold opacity-75">/test</span></p>
                    </div>
                    <div className="px-6 py-8 ">
                        <ul className="space-y-3 mb-8">
                            {[
                                "Gift Cards",
                                "In-app redeemable vouchers",
                                "Downloads",
                                "Ranking mention on leadership board",
                                "Scholarship for school/college fees",
                                "Certificates",
                                "Recognition on our social media platform",
                            ].map((feature, i) => (

                                <li key={i} className="flex items-center">
                                    <svg className={`h-5 w-5 mr-2 text-green-500 ${["Scholarship for school/college fees", "Certificates", "Recognition on our social media platform"].includes(feature) ? "text-opacity-50 text-black" : ""}`} fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className={`text-sm ${["Scholarship for school/college fees", "Certificates", "Recognition on our social media platform"].includes(feature) ? "text-opacity-50 text-black" : ""}`}>
                                        {feature}
                                    </span>
                                </li>
                            ))}
                        </ul>
                        <button className="w-full py-3 rounded-xl text-black font-medium bg-green-500 hover:bg-green-600 ">
                            Pay ₹ 49
                        </button>
                    </div>
                </div>

                {/* Monthly */}
                <div className="rounded-xl border-2 overflow-hidden shadow-lg bg-white">

                    <div className="bg-red-500 text-white text-xs font-bold px-3 absolute">Save ₹ 49/-</div>
                    <div>
                        <h3 className="text-lg font-semibold bg-green-400 pt-7 pl-9 ">Monthly</h3>
                        <div className="flex items-baseline mb-6 bg-green-400 pl-9 py-3">
                            <span className="text-3xl font-bold">₹ 149</span>
                            <span className="text-sm ml-1 font-bold opacity-75">/mo</span>
                        </div></div>
                    <div className="px-6 py-8">

                        <ul className="space-y-3 mb-8">
                            {[
                                "Gift Cards",
                                "In-app redeemable vouchers",
                                "Downloads",
                                "Ranking mention on leadership board",
                                "Scholarship for school/college fees",
                                "Certificates",
                                "Recognition on our social media platform",
                            ].map((feature, i) => (
                                <li key={i} className="flex items-center">
                                    <svg className={`h-5 w-5 mr-2 text-green-500 ${["Scholarship for school/college fees", "Certificates", "Recognition on our social media platform"].includes(feature) ? "text-opacity-50 text-black" : ""}`} fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className={`text-sm ${["Scholarship for school/college fees", "Certificates", "Recognition on our social media platform"].includes(feature) ? "text-opacity-50 text-black" : ""}`}>
                                        {feature}
                                    </span>
                                </li>
                            ))}
                        </ul>
                        <button className="w-full py-3 rounded-xl text-black font-medium bg-green-500 hover:bg-green-600 ">
                            Pay ₹ 149
                        </button>
                    </div>
                </div>

                {/* Annual (Popular) */}
                <div className="rounded-xl border-2 overflow-hidden shadow-lg bg-green-900 text-white rounded-r-lg">
                    <div className="bg-red-500 text-white text-xs font-bold px-3 py-1 absolute">Save ₹ 549/-</div>
                    <div className="px-6 py-8">
                        <span className="flex flex-row pl-3 ml-[14rem] text-xl bg-green-300 rounded-xl py-1 pr-2 text-black  w-1/3"><AiTwotoneThunderbolt className=" mt-2 w-4 h-4 text-black" />Popular</span>
                        <h3 className="text-lg font-semibold mb-2">Annual</h3>
                        <div className="flex items-baseline mb-6">
                            <span className="text-3xl font-bold">₹ 1999</span>
                            <span className="text-sm ml-1 opacity-75">/yr</span>
                        </div>
                        <ul className="space-y-3 mb-8">
                            {[
                                "Gift Cards",
                                "In-app redeemable vouchers",
                                "Downloads",
                                "Ranking mention on leadership board",
                                "Scholarship for school/college fees",
                                "Certificates",
                                "Recognition on our social media platform",
                            ].map((feature, i) => (
                                <li key={i} className="flex items-center">
                                    <svg className="h-5 w-5 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <span className="text-sm">{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <button className="w-full py-3 rounded-xl text-black font-medium bg-green-500 hover:bg-green-600">
                            Pay ₹ 1999
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}
