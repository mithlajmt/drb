export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <h1 className="text-7xl md:text-9xl font-bold mb-6">
            <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-600 bg-clip-text text-transparent">
              DrB & Co
            </span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-400 mb-8 italic font-light">
            Where Excellence Meets Global Vision
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <a
              href="#about"
              className="px-10 py-4 bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-bold rounded-lg hover:from-amber-400 hover:to-yellow-500 transition-all duration-300 shadow-xl shadow-amber-500/30 hover:shadow-2xl hover:shadow-amber-500/50 hover:scale-105"
            >
              Discover Our Story
            </a>
            <a
              href="#divisions"
              className="px-10 py-4 border-2 border-amber-500 text-amber-400 font-bold rounded-lg hover:bg-amber-500/10 transition-all duration-300 hover:scale-105"
            >
              Explore Divisions
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-amber-400 rounded-full flex justify-center p-2">
            <div className="w-1 h-3 bg-amber-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-6xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-amber-300 to-yellow-500 bg-clip-text text-transparent">
              About DrB & Co
            </span>
          </h2>
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>
              Founded in 2020, DrB & Co began as a vision — to build a company that blends ambition, 
              excellence, and global reach. What started as a single travel venture has evolved into 
              a multinational business group, now proudly registered in the UAE, Georgia, and India, 
              and expanding its footprint into the United Kingdom.
            </p>
            <p>
              Our journey began with DrB Travels, redefining the art of travel through bespoke 
              experiences and impeccable service. By 2022, our growth accelerated as we obtained 
              our Import–Export Trading Licence, expanding into global logistics and international trade.
            </p>
            <p>
              Today, DrB & Co stands as a symbol of reliability, innovation, and class — connecting 
              markets, people, and opportunities across continents.
            </p>
          </div>
        </div>
      </section>

      {/* Divisions */}
      <section id="divisions" className="py-24 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-6xl font-bold text-center mb-20">
            <span className="bg-gradient-to-r from-amber-300 to-yellow-500 bg-clip-text text-transparent">
              Our Divisions
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Travels Card */}
            <div className="group relative p-10 bg-gradient-to-br from-zinc-900 to-black border-2 border-amber-500/30 rounded-2xl hover:border-amber-500 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/20 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              
              <h3 className="text-4xl font-bold text-amber-400 mb-4 relative">DrB Travels</h3>
              <p className="text-gray-400 mb-8 text-lg leading-relaxed relative">
                Curating exceptional travel experiences with precision, comfort, and a personal touch 
                that defines luxury travel.
              </p>
              <a
                href="/travels"
                className="inline-flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-bold rounded-lg hover:from-amber-400 hover:to-yellow-500 transition-all duration-300 shadow-lg shadow-amber-500/30 group-hover:shadow-xl group-hover:shadow-amber-500/50 relative"
              >
                <span>Explore Travels</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>

            {/* Logistics Card */}
            <div className="group relative p-10 bg-gradient-to-br from-zinc-900 to-black border-2 border-amber-500/30 rounded-2xl hover:border-amber-500 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/20 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              
              <h3 className="text-4xl font-bold text-amber-400 mb-4 relative">DrB Exports & Logistics</h3>
              <p className="text-gray-400 mb-8 text-lg leading-relaxed relative">
                Delivering world-class export, import, and logistics solutions — where quality, trust, 
                and efficiency move together.
              </p>
              <a
                href="/logistics"
                className="inline-flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-bold rounded-lg hover:from-amber-400 hover:to-yellow-500 transition-all duration-300 shadow-lg shadow-amber-500/30 group-hover:shadow-xl group-hover:shadow-amber-500/50 relative"
              >
                <span>Explore Logistics</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6 bg-zinc-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-amber-300 to-yellow-500 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-gray-400 text-xl mb-10">
            Ready to experience excellence? Let's connect.
          </p>
          <a
            href="mailto:info@drbco.com"
            className="inline-block px-10 py-4 bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-bold rounded-lg hover:from-amber-400 hover:to-yellow-500 transition-all duration-300 shadow-xl shadow-amber-500/30 hover:shadow-2xl hover:shadow-amber-500/50 hover:scale-105"
          >
            Contact Us
          </a>
        </div>
      </section>

    </div>
  );
}