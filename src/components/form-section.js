import React, { useState }  from "react"
import axios from "axios";

const FormSection = () => {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null
  });
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg }
    });
    if (ok) {
      form.reset();
    }
    console.log(serverState.status);
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
    axios({
      method: "post",
      url: "https://getform.io/f/f508eeb8-f605-47d1-b4d0-5d2931a40e9f",
      data: new FormData(form)
    })
      .then(r => {
        handleServerResponse(true, "Thanks!", form);
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form); 
      });
  };


  return (
    <section class="bg-gray-100" id="form-section">
      <div class="px-4 py-16 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div class="lg:py-12 lg:col-span-2">
            <h2 class="text-3xl font-bold sm:text-4xl text-center lg:text-left">Let us help you be more sustainable</h2>
            <p class="mt-4 text-gray-600">
            Feel free to contact us through this form with any questions or comments you may have. We will get back to you as soon as possible.
            </p>
          </div>

          <div class="p-8 bg-white rounded-lg shadow-lg lg:p-12 lg:col-span-3">
            <form onSubmit={handleOnSubmit} class="space-y-4">
              <div>
                <label class="sr-only" for="name">Name</label>
                <input class="w-full p-3 text-sm border border-gray-200 rounded-lg" placeholder="Name" type="text" id="name" />
              </div>

              <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label class="sr-only" for="email">Email</label>
                  <input
                    class="w-full p-3 text-sm border border-gray-200 rounded-lg"
                    placeholder="Email address"
                    type="email"
                    name="email"
                    id="email"
                  />
                </div>

                <div>
                  <label class="sr-only" for="phone">Phone</label>
                  <input
                    class="w-full p-3 text-sm border border-gray-200 rounded-lg"
                    placeholder="Phone Number"
                    type="tel"
                    name="phone"
                    id="phone"
                  />
                </div>
              </div>

              <div>
                <label class="sr-only" for="message">Message</label>
                <textarea
                  class="w-full p-3 text-sm border border-gray-200 rounded-lg"
                  placeholder="Message"
                  rows="8"
                  type="text"
                  name="message"
                  id="message"
                ></textarea>
              </div>

              <div class="mt-4">
                <button
                  type="submit"
                  class="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-white rounded shadow bg-green-600 sm:w-auto active:bg-green-500 hover:bg-green-700 focus:outline-none focus:ring"
                >
                  <span class="font-medium"> Send Enquiry </span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 ml-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FormSection