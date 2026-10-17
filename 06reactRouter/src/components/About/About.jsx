import React from 'react'

export default function About() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src="https://imgs.search.brave.com/RaqCPqaI6U-qeJ4dZSl_g3Hs-3Ayq4mKI7S7gQiYMvo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/bWFnbmlmaWMuY29t/L3ByZW1pdW0tcGhv/dG8veW91bmctYmVh/dXRpZnVsLXdvbWFu/LXBlcnNvbi1hcmUt/aGFwcHktZW5qb3kt/d2l0aC1jb2ZmZWUt/ZHJpbmstbW9ybmlu/Zy1ob21lLXJlbGF4/LWxpZmVzdHlsZS1i/eS1ob2xkaW5nLWNv/ZmZlZS10ZWEtY3Vw/LW5hdHVyZS1vdXRk/b29yLXBhcmstc21p/bGUtcHJldHR5LWdp/cmwtd2l0aC1mcmVl/ZG9tLXRpbWVfMzM3/NTUtMTE1MTEuanBn/P3NlbXQ9YWlzX2h5/YnJpZCZ3PTc0MCZx/PTgw"
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                          React development is carried out by passionate developers
                      </h2>
                      <p className="mt-6 text-gray-600">
                          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem
                          accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde
                          aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!
                      </p>
                      <p className="mt-4 text-gray-600">
                          Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
                          Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}