import { useSession, signIn, signOut } from "next-auth/react"
import { useEffect, useState } from "react";
import Link from 'next/link'

export default function Component() {
  const { data: session } = useSession()
  const [tasks, setTasks] = useState([]);

  useEffect(async () => {
    let ts = await getCat();
    console.log(ts)
    setTasks(ts)
  }, [])


  const renderTask = () => {

    return tasks.map((item, index) => (
      <li key={index} className="relative m-4 border-double border-8 p-4 flex flex-col">
        <div className="absolute bottom-0 right-0 text-xl mr-2 text-[#060606] font-bold font-display">
          {index + 1}
        </div>{+item.id ? (
          <div className="text-2xl text-[#060606] font-bold drop-shadow-lg max-w-xs font-display">{item.name}</div>) : (
          <input className="text-xl rounded-lg text-[#060606] bg-[#EEEEEE] font-bold pl-4 mt-2 mb-2 outline-[#00ADB5] font-display" type="task" value={name} onChange={(e) => setName(e.target.value)} />
        )
        }
        {+item.id ? (
          <div className="text-2xl text-[#060606] font-bold drop-shadow-lg max-w-xs font-display">{item.weight}</div>) : (
          <input className="text-xl rounded-lg text-[#060606] bg-[#EEEEEE] font-bold pl-4 mt-2 mb-2 outline-[#00ADB5] font-display" type="task" value={weight} onChange={(e) => setWeight(e.target.value)} />
        )
        }
        {+item.id ? (
          <div className="mb-4 max-w-xs max-h-xs items-center"><img src={item.picture} /></div>) : (
          <input className="text-xl rounded-lg text-[#060606] bg-[#EEEEEE] font-bold pl-4 mt-2 mb-2 outline-[#00ADB5] font-display" type="task" value={picture} onChange={(e) => setPicture(e.target.value)} />
        )
        }

      </li>
    ));
  };
  
  return (
    <>
      <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
        <div class="container flex flex-wrap justify-between items-center mx-auto">
          <a href="" class="flex justify-start items-center">
            <img src="https://i.pinimg.com/564x/f5/b9/91/f5b9918f76b778e799b6aa54c270061e.jpg" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">My Miniproject</span>
          </a>
          <button data-collapse-toggle="mobile-menu" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </button>
          <div class="hidden w-full md:block md:w-auto" id="mobile-menu">
            <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li>
                <a href="#" class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</a>
              </li>

              <li>
                <a href="/todo" class="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Edit</a>
              </li>
              {session
                ? <li>
                  <a href="#" onClick={() => signOut()} class="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Log out</a>
                </li>
                : <li>
                  <a href="#" onClick={() => signIn()} class="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Log in</a>
                </li>
              }

            </ul>
          </div>
        </div>
      </nav>
      <br></br>
      <body class="">
        <main class="py-14 px-4 mx-auto max-w-7xl">
          <div>
            <div class="flex items-center">
              <h1 class="text-4xl font-medium">Cat</h1>
              <button
                class="ml-4 leading-6 py-1.5 px-5 text-sm text-white bg-indigo-600 rounded-full"
              >
                <Link href="/todo">
                  <a>Edit</a>
                </Link>
              </button>

            </div>
            <p class="pt-3 text-lg text-gray-700">
              Photos of cuties Kitty cat.
            </p>
            <div class="inline-flex gap-x-2 items-center pt-2 text-sm text-gray-500">
              <span>All photo push by</span>
              <img
                class="object-cover w-7 h-7 rounded-full"
                src="https://scontent.fbkk10-1.fna.fbcdn.net/v/t39.30808-6/239874832_4244665998902034_6493491422770106669_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeGOI0F1Mr1hZYcwqaCm5FwcYOLeTo00E8Jg4t5OjTQTwt-V3vxy3pWWar2nVov90c-8Z4MUv7wWDGrXBOOVgY63&_nc_ohc=BVT8J20O4EQAX-AFliA&_nc_ht=scontent.fbkk10-1.fna&oh=00_AT8XmfggEKtmHN4tJ97hgj6k6z_xQj8V3v0x1w8o6RCb_Q&oe=62659EA5"
                alt=""
              />
              <a href="https://www.facebook.com/thirapat.pathan/" class="hover:text-indigo-600">Daniel Thirapat</a>
            </div>
          </div>

          <div class="flex gap-x-8 items-center pt-12">
            <a href="#" class="text-lg font-medium">Popular</a>
            <a href="#" class="text-lg text-indigo-500">Recent</a>
          </div>
          <div class="gap-6 pt-2 columns-3xs">

          </div>
          <div class="flex justify-center items-center py-12">
            <ul className="flex flex-wrap mb-8">{renderTask()}</ul>
          </div>
        </main>
      </body>
      {/* Signed in as {session.user.email} <br />
        {session.user.avatar}<br />
        <button onClick={() => signOut()}>Sign out</button>
        <h1 className="title">
          {/* Read{' '} 
          <Link href="/todo">
            <a>TODO page!</a>
          </Link>
        </h1> */}

    </>

  )

}
const getCat = async () => {
  const res = await fetch('http://localhost:8000/')
  const json = await res.json()
  console.log(json)
  return json;
}