import * as React from 'react'

const HeaderSection = () => {
  return (
    <header class="hidden absolute top-0 left-0 sm:block sm:top-0 sm:left-0 sm:absolute">
      <div
        class="flex items-center h-24 max-w-screen-xl gap-8 px-4 mx-auto sm:px-6 lg:px-8"
      >
        <a class="block" href="/">
          <span class="sr-only">Home</span>
          <p class="text-green-700 font-bold text-xl">ProjectRenew</p>
        </a>

        <div class="flex items-center justify-end flex-1 md:justify-between">
          <nav class="hidden md:block" aria-labelledby="header-navigation">
            <h2 class="sr-only" id="header-navigation">Header navigation</h2>

            <ul class="flex items-center gap-6 text-sm">
              <li>
                <a class="  text-gray-500 transition hover:text-gray-500/75" href="/#about-section">
                  About
                </a>
              </li>

              <li>
                <a class="  text-gray-500 transition hover:text-gray-500/75" href="/#project-section">
                  Projects
                </a>
              </li>

              <li>
                <a class="  text-gray-500 transition hover:text-gray-500/75" href="/">
                  Blogs
                </a>
              </li>

              <li>
                <a class="  text-gray-500 transition hover:text-gray-500/75" href="/#messsage-section">
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>

  )
}

export default HeaderSection