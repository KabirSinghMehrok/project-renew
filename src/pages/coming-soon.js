import * as React from "react"
import { Link } from "gatsby"

const ComingSoon = () => {
  return (
    <section class="bg-gray-50">
      <div class="px-4 py-32 mx-auto max-w-screen-xl lg:h-screen lg:items-center lg:flex">
        <div class="max-w-xl mx-auto text-center">
          <h1 class="text-3xl font-extrabold sm:text-5xl text-green-600">
            Coming Soon
          </h1>

          <p class="mt-4 sm:leading-relaxed sm:text-xl">
            Something amazing is coming here, stay tuned!
          </p>

          <div class="flex flex-wrap justify-center mt-8 gap-4">
            <Link class="block w-full px-12 py-3 text-sm font-medium text-white bg-green-600 rounded shadow sm:w-auto active:bg-green-500 hover:bg-green-700 focus:outline-none focus:ring" to="/">
              Go to Homepage
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ComingSoon

export const Head = () => <title>Coming Soon</title>
