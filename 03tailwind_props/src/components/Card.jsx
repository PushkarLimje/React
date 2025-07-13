import React from 'react'

function Card({username, email,number}) {
  //veiw app.jsx
  // this how to add props in using {} pass in where we want
    return (
    <>
        <div class="md:flex bg-blue-300 rounded-lg p-6">
        <img class="h- w-20 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6" src="https://preview.redd.it/some-images-generated-using-the-new-bing-image-creator-v0-zfohxnf8t3pa1.jpg?width=1024&format=pjpg&auto=webp&s=33274aadae0e0332e60dd15c87617ea6652365b5"/>
        <div class="text-center md:text-left">
          <h2 class="text-lg text-green-800">{username}</h2>
          <div class="text-purple-500">Product Engineer</div>
          <div class="text-red-600">{email}</div>
          <div class="text-gray-600">(+91) {number}</div>
        </div>
        </div>
    </> 
    )
}

export default Card
