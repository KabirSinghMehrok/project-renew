import * as React from 'react'
import { Link } from 'gatsby'

const ProjectSection = () => {
  return (
    <section class="project-section">
      <div class="max-w-screen-xl px-4 py-24 mx-auto sm:px-6 lg:px-8">
        <div class="max-w-lg mx-auto">
          <h2 class="text-3xl font-bold sm:text-4xl text-center">Completed projects</h2>

          <p class="mt-4 text-gray-500 text-left lg:text-center">
            Lorem ipsum, dolor sit ametconsectetur adipisicing elit. Consequuntur
            aliquam doloribus nesciunt eos fugiat. Vitae aperiam fugit consequuntur
            saepe laborum.
          </p>
        </div>

        <div class="lg:space-x-12 my-12 flex flex-col lg:flex-row justify-center">
          <img
            class="lg:w-1/3 object-cover h-56 shadow-xl rounded-xl"
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d"
            alt=""
          />

          <div class="p-4 lg:w-2/3">
            <h5 class="text-xl font-bold text-gray-900">
              Sustainable Procurement
            </h5>
            <p class="mt-2 text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic atque tenetur quis eius quos ea neque sunt, accusantium soluta minus veniam tempora deserunt? Molestiae eius quidem quam repellat.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum explicabo quidem voluptatum voluptas illo accusantium ipsam quis, vel mollitia? Vel provident culpa dignissimos possimus, perferendis consectetur odit accusantium dolorem amet voluptates aliquid, ducimus
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectSection