import * as React from 'react'
import HeaderSection from '../components/header-section.js'

const HeroSection = () => {
  return (
    <section class="relative bg-white">
      
      <img
        class="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full opacity-25 sm:opacity-100"
        src="https://images.unsplash.com/photo-1532601224476-15c79f2f7a51"
        alt="Image showcasing sustainability"
      />
      <div class="hidden sm:block sm:inset-0 sm:absolute sm:bg-gradient-to-r sm:from-white sm:to-transparent"></div>
      <div class="relative max-w-screen-xl px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex">
      <HeaderSection />   
        <div class="max-w-xl text-center sm:text-left">
          <h1 class="text-3xl font-extrabold sm:text-5xl">
            Let's create a <span>&#8203;</span>
            <strong class="font-extrabold text-green-600 sm:block">
              Sustainable World
            </strong>
          </h1>
          
          <p class="max-w-lg mt-4 sm:leading-relaxed sm:text-xl">
            We are a sustainability advisory firm with the vision to build a sustainable economy and sustainable future.
          </p>

          <div class="flex flex-wrap gap-4 mt-8 text-center">
            <a class="block w-full px-12 py-3 text-sm font-medium text-white rounded shadow bg-green-600 sm:w-auto active:bg-green-500 hover:bg-green-700 focus:outline-none focus:ring" href="/#form-section">
              Get In Touch
            </a>

            <a class="block w-full px-12 py-3 text-sm font-medium bg-white rounded shadow text-green-600 sm:w-auto hover:text-green-700 active:text-green-500 focus:outline-none focus:ring" href="/#about-section">
              Learn More
            </a>
          </div>            
        </div>
      </div>
    </section>
  )
}

export default HeroSection;