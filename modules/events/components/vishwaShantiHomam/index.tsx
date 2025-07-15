import Link from "next/link";
import React from "react";

const VishwaShanthiHomamEvent = () => {

      const cdn_cloudinary_urls = [
    
    
    `https://res.cloudinary.com/dixkqgqsi/image/upload/v1752602098/vvgc/images/2025/July/14/cow_naming.jpg`,
  ];
  return (
    <div className="max-w-2xl mx-auto md:p-6 bg-white shadow-sm text-gray-800">
      <h1 className="text-xl md:text-2xl font-bold text-red-700 mb-4 text-center underline">
        Vishwa Shanthi Homam @ VVGC Goshala
      </h1>

      <p className="mb-4">
        VVGC temple has made the <span className="font-bold text-cyan-900">sankalpam</span> to perform
        <span className="font-bold text-cyan-900"> “Vishwa Shanthi Homa”</span> for the global well being and peace.
        <span className="italic"> ‘Agnina rayiem ashnuvath’</span> -- Our scriptures say
        <span className="font-bold text-cyan-900"> “Where homa is performed, there lies an abundance of wellness”</span>.
      </p>

      <p className="mb-4">
        Doing homam in the midst of cows which have devatas residing from head to tail is even more auspicious.
        The cow, often referred to as <span className="font-bold text-cyan-900">"Kamadhenu"</span>, symbolizes nourishment,
        wealth, and abundance. The homam will be followed by the <span className="font-bold text-cyan-900">naming ceremony for the cows</span>.
        <span className="font-bold text-cyan-900"> Sponsorship opportunities</span> are available to choose your near/dear one’s name for the cows.
      </p>

      <div className="mb-4">
        <p><span className="font-bold text-cyan-900">What:</span> Vishwa Shanthi Homam followed by the Cow Naming Ceremony</p>
        <p><span className="font-bold text-cyan-900">Where:</span> VVGC Goshala, 11355 Monterey Hwy San Martin CA 95046 (<a href="https://www.vvgc.org" className="text-blue-500 underline">www.vvgc.org</a>)</p>
        <p><span className="font-bold text-cyan-900">When:</span> Jul 20th 5pm - 7pm followed by Mahaprasadam</p>
        <p><span className="font-bold text-cyan-900">Information:</span> Sponsorship opportunities are available to choose name for the cows!</p>
      </div>

      <div>
        <p className="font-bold text-cyan-900">For More Details Contact:</p>
        <ul className="list-disc pl-6">
          <li>Pandit Sivasankar Hemmanur: 4087243577</li>
          <li>Pandit Ganesh Sastri: 9252097637</li>
          <li>Smt. Saroja Murali: 4086878585</li>
          <li>Smt. Anu CK: 4083687230</li>
        </ul>
      </div>
      <div className="w-full overflow-hidden shadow h-auto my-4 mx-auto">
                <Link
                  className=""
                  href={cdn_cloudinary_urls[0]}
                  target="_blank"
                >
                  <img
                    src={cdn_cloudinary_urls[0]}
                    alt="event"
                    
                    className="w-full object-cover"
                    
                  />
                </Link>
              </div>
    </div>
  );
};

export default VishwaShanthiHomamEvent;
