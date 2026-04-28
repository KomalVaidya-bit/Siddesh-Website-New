import Image from 'next/image';

import AutoImageSlider from "@/components/social-initiative/AutoImageSlider";

export default function SocialInitiatives() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[420px] flex items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#2563eb] -mt-40 pt-24">
        <div className="absolute inset-0">
          <Image
            src="/ai-innovation-images/social-hero.jpg"
            alt=""
            layout="fill"
            objectFit="cover"
            className="opacity-80"
            priority
          />
        </div>
        <div className="relative z-10 text-white text-center px-4">
          <div className="uppercase text-xs tracking-widest mb-2">Our Vision</div>
          <h1 className="text-5xl font-bold leading-tight mb-2">Social<br />Initiatives</h1>
          <p className="max-w-xl mx-auto text-base font-light">
            Bridging the gap between technological advancement and human necessity. We curate impact through precision and empathy.
          </p>
        </div>
      </div>

      {/* Generation Alpha & The Digital Future */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-2">Generation Alpha & The Digital Future</h2>
        <p className="text-gray-600 mb-6 text-sm">
          Exploring how the newest generation interacts with community-focused technology to solve tomorrow’s challenges.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Tech Literacy Program Card */}
          <div className="md:col-span-2 relative rounded-xl overflow-hidden shadow-lg">
            <video
  width={700}
  height={350}
  className="object-cover w-full h-61"
  autoPlay
  loop
  muted
  playsInline
>
  <source src="/videos/siddesh-home-video.mp4" />
  Your browser does not support the video tag.
</video>
            <div className="absolute bottom-0 left-0 bg-blue-700 text-white text-xs px-3 py-1 rounded-tr-lg">FEATURED</div>
            <div className="absolute bottom-0 right-0 bg-black bg-opacity-60 text-white text-sm px-4 py-2 rounded-tl-lg">Tech Literacy Program</div>
          </div>
          {/* Community Engagement Card */}
          <div className="flex flex-col gap-4">
            <div className="bg-white rounded-xl shadow p-4 flex-1 flex flex-col justify-between">
              <div>
                <div className="font-semibold text-gray-800 mb-1">Community Engagement</div>
                <p className="text-xs text-gray-500 mb-2">Workshops and events to co-impact digital transformation worldwide.</p>
              </div>
              <a href="#" className="text-blue-700 text-xs font-semibold mt-auto">Learn More &rarr;</a>
            </div>
            <div className="bg-white rounded-xl shadow p-0 overflow-hidden flex-1">
              <Image
                src="/empowering-images/image5.png"
                alt="Hands-on Workshops"
                width={350}
                height={120}
                className="object-cover w-full h-30"
              />
              <div className="p-1 text-xs text-gray-700">Hands-on Workshops</div>
            </div>
          </div>
        </div>
      </div>

      {/* Empowering Communities Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="md:flex md:items-start md:gap-12 ">
            <div className="md:w-1/2 mb-8 md:mb-0 ">
              <h2 className="text-3xl font-bold mb-4">Empowering Communities Through Code</h2>
              <p className="text-gray-600 mb-6 text-sm">
              At Siddesh Technologies, we are committed to making a positive impact on society by leveraging the power of technology for the greater good. Through our Social Initiatives program, we collaborate with organizations such as Rotary, InnerWheel, Lions Club, and other community welfare groups to address pressing social challenges and promote inclusive development.
              </p>
              <div className="flex gap-8 mb-4">
                <div>
                  <div className="text-2xl font-bold text-blue-900">94%</div>
                  <div className="text-xs text-gray-500">Success Rate</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-900">12k+</div>
                  <div className="text-xs text-gray-500">Youths Impacted</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-900">45</div>
                  <div className="text-xs text-gray-500">Global Partners</div>
                </div>
              </div>

                 <AutoImageSlider />

            </div>

            <div className="md:w-1/2 flex flex-col items-center">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden w-full max-w-md">
                <Image
                  src="/innerwheel-siddesh-initiative.png"
                  alt="Community Leader"
                  width={400}
                  height={220}
                  className="object-cover w-full h-49"
                />
                <div className="p-4 text-xs text-gray-700">
                  “The impact of these digital tools on our local chapter economy has been nothing short of revolutionary.”<br />
                  <span className="font-semibold text-blue-900">– Community Leader</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Strategic Solutions Section */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h3 className="text-lg font-bold mb-8 text-center">Strategic Solutions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-100 rounded-xl shadow p-6 flex flex-col items-center">
            <Image src="/our-approach.png" alt="Partnership" width={200} height={90} className="mb-4 rounded-full" />
            <div className="font-semibold mb-2 text-center">Our Partnership Approach</div>
            <p className="text-xs text-gray-500 text-center mb-2">Building long-term alliances with NGOs and government bodies to ensure sustainable growth and scalable social impact.</p>
            {/* <a href="#" className="text-blue-700 text-xs font-semibold mt-auto">Strategy Details &rarr;</a> */}
          </div>
          <div className="bg-blue-100 rounded-xl shadow p-6 flex flex-col items-center">
            <Image src="/empowering-tech.png" alt="Empowering Tech" width={200} height={90} className="mb-4 rounded-full" />
            <div className="font-semibold mb-2 text-center">Empowering with Technology</div>
            <p className="text-xs text-gray-500 text-center mb-2">Deploying high-speed infrastructure and AI-driven learning management systems to local communities globally.</p>
            {/* <a href="#" className="text-blue-700 text-xs font-semibold mt-auto">Our Stack &rarr;</a> */}
          </div>
          <div className="bg-blue-100 rounded-xl shadow p-6 flex flex-col items-center">
            <Image src="/custom-solution.png" alt="Custom Solutions" width={200} height={90} className="mb-4 rounded-full" />
            <div className="font-semibold mb-2 text-center">Custom Solutions</div>
            <p className="text-xs text-gray-500 text-center mb-2">Tailored software development for community organizations, focusing on efficiency and measurable results.</p>
            {/* <a href="#" className="text-blue-700 text-xs font-semibold mt-auto">Case Studies &rarr;</a> */}
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-blue-900 py-16 text-white text-center">
        <h2 className="text-3xl font-bold mb-2">Join us in Making a Difference</h2>
        <p className="mb-6 max-w-xl mx-auto text-base font-light">
          Ready to contribute to a more equitable digital world? Whether you are a partner, donor, or volunteer, your involvement matters.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <a href="#" className="bg-white text-blue-900 font-semibold px-6 py-2 rounded shadow hover:bg-gray-100">Contact Us</a>
          <a href="#" className="bg-blue-700 text-white font-semibold px-6 py-2 rounded shadow hover:bg-blue-800">Explore Opportunities</a>
        </div>
      </div>

      
    </div>
  );
}
