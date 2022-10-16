import * as React from 'react'

const ProjectSection = () => {
  return (
    <section class="project-section" id="project-section">
      <div class="max-w-screen-xl px-4 py-24 mx-auto sm:px-6 lg:px-8">
        <div class="max-w-lg mx-auto">
          <h2 class="text-3xl font-bold sm:text-4xl text-center">Completed projects</h2>
        </div>

        <div class="lg:space-x-12 my-12 flex flex-col lg:flex-row justify-center">
          <img
            class="lg:w-1/3 object-cover h-56 shadow-xl rounded-xl"
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=480"
            alt=""
          />

          <div class="p-4 lg:w-2/3">
            <h5 class="text-xl font-bold text-gray-900">
              Sustainable Procurement
            </h5>
            <p class="mt-2 text-gray-500">
            During Master Thesis, Sustainable Procuement Project has been done to implement the different Sustainability criteria which include Transport CO2 Footprint, Secondary Research, Compliance Law, Code of Conduct, and Green Logistics. This included assessing International suppliers on the basis of these criteria and finding the most Sustainable Supplier across the globe. Master Thesis findings have been used by the organization to help them make better decisions during Supplier Assessment.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectSection