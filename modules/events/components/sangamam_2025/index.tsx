import React from "react";

import Link from "next/link";
import React_Video_Player from "@modules/common/components/react-video-player";

const SangamamHikeEvent = () => {
    const iurl = `https://res.cloudinary.com/dixkqgqsi/image/upload/v1752861135/vvgc/images/2025/July/17/sangamam_2025.jpg`;
    const vurl = 'https://youtube.com/shorts/R4S0e6DoZRc?si=-Gd46Eb-Bki6HtcN';
    return (
        <>
            <h1 className="text-2xl md:text-3xl font-bold text-green-700 text-center my-6">
                VVGC Sangamam' 2025 - A Hike/Walk Event
            </h1>
             <React_Video_Player vsrc={vurl}/>
        <div className="mx-auto p-4 bg-white shadow-sm text-gray-800">
           

            <div className="flex flex-col md:flex-row gap-6 justify-evenly">
                <div className="md:w-1/2">
                    <Link
                        className=""
                        href={iurl}
                        target="_blank"                    >
                        <img
                            src={iurl}
                            alt="event"
                            className="w-full object-cover"
                        />
                    </Link>
                </div>

                <div className="lg:w-1/3">
                    <p className="mb-4">
                        By the blessings of Vallabha Ganapathy, <span className="font-bold text-blue-600">VVGC Temple</span> is thrilled to announce its
                        first-ever community hike/walk at Harvey Bear Ranch, San Martin, CA. Join us for a refreshing outdoor experience and help strengthen our
                        community, with the <span className="font-bold text-blue-600">Honorable Mayor of Morgan Hill, Mark Turner</span>, as our special guest!
                    </p>

                    <p className="mb-4">
                        The main hike covers approximately <span className="font-bold text-blue-600">5 miles</span> of moderate terrain, while a
                        <span className="font-bold text-blue-600"> 2-mile flat circular trail</span> is available for those preferring a shorter walk or walking with young children.
                        Participants are welcome to repeat the 2-mile loop as many times as they wish.
                    </p>

                    <p className="mb-4">
                        <span className="font-bold text-blue-600">Registration is a must</span> to take part in this walk, as it will help us plan effectively and ensure we have enough space for everyone.
                        This <span className="font-bold text-blue-600">FREE</span> event aims to bring people together for a healthy and enjoyable walk or hike, fostering connections and promoting community well-being.
                        Donations are graciously accepted. More details will be shared closer to the event with all registered participants.
                    </p>

                    <div className="mb-4">
                        <h2 className="font-bold text-blue-600 mb-2">Event Flow</h2>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>🅿️ Car Park @ VVGC, San Martin</li>
                            <li>📝 Registration</li>
                            <li>🥗 Vegetarian Breakfast</li>
                            <li>🚌 Bus to Harvey Bear Ranch</li>
                            <li>🥾 Hike/Walk</li>
                            <li>🚌 Bus Back to VVGC</li>
                            <li>🍛 Vegetarian Lunch @ VVGC</li>
                        </ul>
                    </div>

                    <div className="mb-4">
                        <p><span className="font-bold text-blue-600">What:</span> Sangamam 2025 - A community hike/walk event</p>
                        <p><span className="font-bold text-blue-600">Where:</span> Starting at VVGC, 11355 Monterey Hwy San Martin CA 95046 (<a href="https://www.vvgc.org" className="text-blue-500 underline">www.vvgc.org</a>)</p>
                        <p><span className="font-bold text-blue-600">When:</span> Saturday, August 16th, 2025, 7.30AM - Noon.</p>
                    </div>

                    <div className="mb-4">
                        <h2 className="font-bold text-blue-600 mb-2">Important Links</h2>
                        <p><span className="font-bold text-blue-600">Register via Google Form:</span> <a href="https://docs.google.com/forms/d/e/1FAIpQLScW4ZTJ4zLWuLTBPSBUiBGoLPQ2-rbs6ZsIfqMYh8bqaHAdYg/viewform" className="text-blue-500 underline">Sangamam 2025 Registration Form</a></p>
                        <p><span className="font-bold text-blue-600">To Register (Short Link):</span> <a href="https://bit.ly/vvgc-walk-hike-sangamam" className="text-blue-500 underline">https://bit.ly/vvgc-walk-hike-sangamam</a></p>
                        <p><span className="font-bold text-blue-600">To Donate:</span> <a href="https://paybee.io/@vvgc@74" className="text-blue-500 underline">https://paybee.io/@vvgc@74</a></p>
                    </div>

                    <div>
                        <p className="font-bold text-blue-600">For More Details Contact:</p>
                        <ul className="list-disc pl-6">
                            <li>Kamesh Velu: (408) 829-3865</li>
                            <li>Saroja Muralidharan: (408) 687-8585</li>
                            <li>Anu C K: (408) 368-7230</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default SangamamHikeEvent;
