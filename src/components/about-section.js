import * as React from 'react'

const AboutSection = () => {
  return (
    <section id="about-section">
      <div class="max-w-screen-xl px-4 py-32 mx-auto sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-2">
        <div
          class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full lg:order-last"
        >
          <img
          class="absolute inset-0 object-cover w-full h-full"
          src="https://i.imgur.com/VjdaL6A.jpg"
          alt="Devesh Singh, founder of Project Renew, giving a speech"
          />
        </div>

        <div class="lg:py-24">
          <h2 class="text-3xl font-bold sm:text-4xl text-center lg:text-left">About ProjectRenew</h2>

          <p class="mt-4 text-gray-600">
          ProjectRenew has its vision to become a strategic and operational partner in your sustainability strategy. We want to play a catalyst in achieving the sustainable goal of your organization. We turn sustainability risks into opportunities by creating road maps to achieve the organizational goal.
          </p>
          <p class="mt-4 text-gray-600">
          ProjectRenew works with different road maps and framework such as UNGC, IPCC, UN SDG, German Supply Chain Law (Lieferkettengesetz), EU taxonomy, GRI, TCFD, CDP, SBTI, SASB, IIRC, and OECD due diligence guidelines.
          </p>

          <div class="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3">
            <div
              class="block p-4 border border-gray-100 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-200 hover:ring-1 hover:ring-gray-200"
              >
              <h6 class="mt-2 font-bold">Founded by Devesh Singh</h6>

              {/* <p class="hidden sm:mt-1 sm:text-sm sm:text-gray-600 sm:block">
                Lorem ipsum dolor sit amet consectetur.
              </p> */}
            </div>
            <div
              class="block p-4 border border-gray-100 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-200 hover:ring-1 hover:ring-gray-200"
            >

              <h6 class="mt-2 font-bold">3+ Years of Experience</h6>

              {/* <p class="hidden sm:mt-1 sm:text-sm sm:text-gray-600 sm:block">
                Lorem ipsum dolor sit amet consectetur.
              </p> */}
            </div>
            <div
              class="block p-4 border border-gray-100 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-200 hover:ring-1 hover:ring-gray-200"
              >

              <h6 class="mt-2 font-bold">Worked with global firms</h6>

              {/* <p class="hidden sm:mt-1 sm:text-sm sm:text-gray-600 sm:block">
                Lorem ipsum dolor sit amet consectetur.
              </p> */}
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>   
  )
}

export default AboutSection