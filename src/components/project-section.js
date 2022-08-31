import * as React from 'react'
import { Link } from 'gatsby'

const ProjectSection = () => {
  return (
    <section class="project-section">
      <div class="max-w-screen-xl px-4 py-24 mx-auto sm:px-6 lg:px-8">
      <div class="max-w-lg mx-auto">
        <h2 class="text-3xl font-bold sm:text-4xl text-center">Completed projects</h2>

        <p class="mt-4 text-gray-500">
          Lorem ipsum, dolor sit ametconsectetur adipisicing elit. Consequuntur
          aliquam doloribus nesciunt eos fugiat. Vitae aperiam fugit consequuntur
          saepe laborum.
        </p>
      </div>
        <div class="grid grid-cols-1 gap-8 mt-8 md:gap-12 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
          <Link class="w-20" to="">
            <img
              class="object-cover w-full h-56 shadow-xl rounded-xl"
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d"
              alt=""
            />

            <div class="p-4">
              <h5 class="text-xl font-bold text-gray-900">
                Sustainable Procurement
              </h5>
              <p class="mt-2 text-gray-500">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero
                labore natus atque, ducimus sed.
              </p>
            </div>
          </Link>
          <Link class="w-20" to="">
            <img
              class="object-cover w-full h-56 shadow-xl rounded-xl"
              src="https://images.unsplash.com/photo-1455778977533-4a3ef39091c6"
            />

            <div class="p-4">
              <h5 class="text-xl font-bold text-gray-900">
                Sustainable Procurement
              </h5>
              <p class="mt-2 text-gray-500">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero
                labore natus atque, ducimus sed.
              </p>
            </div>
          </Link>
          <Link class="w-20" to="">
            <img
              class="object-cover w-full h-56 shadow-xl rounded-xl"
              src="https://images.unsplash.com/photo-1548337138-e87d889cc369"
              alt=""
            />

            <div class="p-4">
              <h5 class="text-xl font-bold text-gray-900">
                Sustainable Procurement
              </h5>
              <p class="mt-2 text-gray-500">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero
                labore natus atque, ducimus sed.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ProjectSection