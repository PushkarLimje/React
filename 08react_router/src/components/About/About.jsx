import React from 'react'

function About() {
    return (
       <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://th.bing.com/th/id/OIP.eQZZxDepV9zpeC1EbWXuOAHaE7?w=262&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                              React development is carried out by passionate developers
                        </h2>
                        <p className="mt-6 text-gray-600">
                           React development is driven by passionate developers who are committed to creating seamless, interactive user experiences. They utilize React's powerful features—like components, hooks, and the virtual DOM—to build applications that are fast, scalable, and easy to maintain. The reusable nature of components allows developers to work efficiently and collaborate smoothly across teams.
                        </p>
                        <p className="mt-4 text-gray-600">
                          These developers continuously adapt to the evolving React ecosystem, integrating tools like Redux, React Router, and modern APIs to enhance functionality. Their focus is not just on writing code, but on delivering intuitive interfaces, improving performance, and ensuring that every project provides real value to users.

                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
