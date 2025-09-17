export default function NavratriEvent() {
  return (
    
      <div className="w-full max-w-6xl bg-white shadow-xs rounded-t-2xl border border-orange-300">
        {/* Header */}
        <div className="bg-gradient-to-r from-red-900 via-orange-900 to-yellow-800 rounded-t-2xl text-center">
          <h1 className="p-2 text-lg sm:text-2xl md:text-5xl font-extrabold text-yellow-100 tracking-wide drop-shadow-lg flex flex-wrap justify-center gap-1">
            <span className="text-xs sm:text-xl md:text-3xl">🎇 🎇 </span>
            <span className="mx-1 font-playfair"> NAVRATRI CELEBRATIONS </span>
            <span className="text-xs sm:text-xl md:text-3xl"> 🎇 🎇</span>
          </h1>
          <p className="p-2 mt-2 text-xs sm:text-sm md:text-xl text-orange-100 font-semibold italic">
            Join Our Community and Celebrate the Divine Nine Nights at San Martin Hindu Temple!
          </p>
        </div>

        <div className="p-4 sm:p-6 md:p-10 space-y-6">
          {/* Location */}
          <div className="bg-orange-200 rounded-xl p-3 md:p-6 shadow-md">
            <p className="text-sm sm:text-lg font-bold text-orange-900">📍 Location:</p>
            <p className="text-xs sm:text-base text-gray-800">San Martin Hindu Temple</p>
            <p className="text-xs sm:text-base text-gray-800">11355 Monterey Hwy, San Martin CA 95046</p>
          </div>

          {/* Dates & Time */}
          <div className="bg-orange-200 rounded-xl p-3 md:p-6 shadow-md">
            <p className="text-sm sm:text-lg font-bold text-orange-900">📅 Dates:</p>
            <p className="text-xs sm:text-base text-gray-800">September 22nd to October 1st, 2025</p>
            <p className="text-sm sm:text-lg font-bold text-orange-900 mt-2">🕰️ Time:</p>
            <p className="text-xs sm:text-base text-gray-800">7:30 PM to 9:30 PM daily</p>
          </div>

          {/* Special Event */}
          <div className="bg-yellow-200 rounded-xl p-3 md:p-6 shadow-md">
            <h2 className="text-lg sm:text-2xl md:text-3xl font-extrabold font-playfair text-yellow-800">🎶 SPECIAL LIVE MUSIC EVENT! 🎶</h2>
            <p className="text-xs sm:text-base text-gray-800 mt-2">Friday, September 26th featuring:</p>
            <p className="font-bold text-gray-900 text-sm sm:text-lg">Sargam Sangeet Group with Palak & Ashish Vyas</p>
            <p className="text-xs sm:text-base text-gray-800 mt-3">🎤 Additional Live Performances:</p>
            <p className="text-xs sm:text-base text-gray-800">September 26th and 27th | 8:00 PM to 11:00 PM</p>
          </div>

          {/* Maha Prasad */}
          <div className="bg-green-200 rounded-xl p-3 md:p-6 shadow-md">
            <h2 className="text-lg sm:text-2xl md:text-3xl font-extrabold font-playfair text-green-900">🍛 MAHA PRASAD 🍛</h2>
            <p className="text-xs sm:text-base text-gray-800 mt-2">October 1st from 7:30 PM to 9:30 PM</p>
          </div>

          {/* Highlights */}
          <div className="bg-orange-100 border-l-4 border-orange-600 rounded-xl p-3 md:p-6 shadow-md">
            <h3 className="text-base sm:text-xl md:text-2xl font-extrabold text-orange-800 mb-2">Join us for:</h3>
            <ul className="list-disc list-inside text-xs sm:text-base text-gray-800 space-y-1">
              <li><span className="text-sm sm:text-base">🪔</span> Traditional Garba & Dandiya dancing</li>
              <li><span className="text-sm sm:text-base">🪔</span> Divine prayers and aarti</li>
              <li><span className="text-sm sm:text-base">🪔</span> Live musical performances</li>
              <li><span className="text-sm sm:text-base">🪔</span> Community celebration and fellowship</li>
              <li><span className="text-sm sm:text-base">🪔</span> Delicious prasad</li>
            </ul>
          </div>

          {/* Footer */}
          <div className="text-center mt-6 space-y-2">
            <p className="text-sm sm:text-lg md:text-xl font-extrabold text-orange-900">
              Bring your family and friends for this auspicious celebration!
            </p>
            <p className="text-xs sm:text-base md:text-lg text-gray-800 font-medium">
              All are welcome to participate in this joyous festival honoring Goddess Durga.
            </p>
          </div>
        </div>
      </div>
    
  );
}
