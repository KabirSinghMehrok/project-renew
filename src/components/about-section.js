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
          src="https://images.unsplash.com/photo-1560439514-e960a3ef5019"
          alt="Devesh Singh, founder of Project Renew, giving a speech"
          />
        </div>

        <div class="lg:py-24">
          <h2 class="text-3xl font-bold sm:text-4xl">About Project Renew</h2>

          <p class="mt-4 text-gray-600">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic
          atque tenetur quis eius quos ea neque sunt, accusantium soluta minus
          veniam tempora deserunt? Molestiae eius quidem quam repellat.
          </p>

          <div class="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3">
            <div
              class="block p-4 border border-gray-100 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-200 hover:ring-1 hover:ring-gray-200"
              href="/accountant"
              >
              <span class="inline-block p-3 rounded-lg bg-gray-50">
                <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                <path
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                ></path>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                ></path>
                </svg>
              </span>

              <h6 class="mt-2 font-bold">Accountant</h6>

              <p class="hidden sm:mt-1 sm:text-sm sm:text-gray-600 sm:block">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
            <div
              class="block p-4 border border-gray-100 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-200 hover:ring-1 hover:ring-gray-200"
              href="/accountant"
              >
              <span class="inline-block p-3 rounded-lg bg-gray-50">
                <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                <path
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                ></path>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                ></path>
                </svg>
              </span>

              <h6 class="mt-2 font-bold">Accountant</h6>

              <p class="hidden sm:mt-1 sm:text-sm sm:text-gray-600 sm:block">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
            <div
              class="block p-4 border border-gray-100 shadow-sm rounded-xl focus:outline-none focus:ring hover:border-gray-200 hover:ring-1 hover:ring-gray-200"
              href="/accountant"
              >
              <span class="inline-block p-3 rounded-lg bg-gray-50">
                <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                <path
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                ></path>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                ></path>
                </svg>
              </span>

              <h6 class="mt-2 font-bold">Accountant</h6>

              <p class="hidden sm:mt-1 sm:text-sm sm:text-gray-600 sm:block">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>   
  )
}

export default AboutSection