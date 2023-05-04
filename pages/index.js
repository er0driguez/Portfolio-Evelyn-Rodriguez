import Head from 'next/head';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube} from "react-icons/ai";
import Image from "next/legacy/image";
//import profilePic from "../public/placeholder.png/";
import design from '../public/design.png'
import code from '../public/code.png'
import web1 from '../public/web1.png'
import web2 from '../public/web2.png'
import web3 from '../public/web3.png'
import web4 from '../public/web4.png'
import web5 from '../public/web5.png'
import {useState} from 'react';


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  
  return (
    <>
      <Head>
        <title>Evelyn Rodriguez Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons"> Evelyn Rodriguez </h1>
            <ul className="flex items-center">
              <li><BsFillMoonStarsFill className="cursor-pointer text-2xl"/></li>
              <li><a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href="#">Resume</a></li>
            </ul>
          </nav>
          <div className=" text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 front-medium md:text-6xl"> Evelyn Rodriguez </h2>
            <h3 className=" text-2xl py-2 md:text-3xl"> Developer </h3>
            <p className=" text-md py-5 leading-8 text-gray-800 md:text-xl mx-auto"> Web tinkerer by day and curious bibliophile by night. See my qualifications below! Need some more lorem ipsum. The cake is a lie. </p>
            <div className=" text-5xl flex justify-center gap-16 py-3 text-gray-600">
              <AiFillTwitterCircle />
              <AiFillLinkedin />
              <AiFillYoutube />
            </div>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image src="/dev-ed-wave.png" alt="Evelyn" layout="fill" objectFit="cover"/>
          </div>
        </section>

        <section>
          <div>
            <h3 className='text-3xl py-1'>Services I Offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800"> I’m a passionate, results-driven and organized <span className="text-teal-500">software developer</span> with the added bonus of extensive hospitality and client services experience. I started my software journey with self-teaching and eventually moved up to a competitive bootcamp program where I mastered the PERN stack. I’ve steadily enhanced my base of technological knowledge through independent projects, self-study and finding new technologies to enhance old solutions.  </p>
            <p className="text-md py-2 leading-8 text-gray-800"> New paragraph with words </p>
          </div>
          <div className='lg:flex gap-10 '>
            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
              <Image src={design} width={100} height={100} />
              <h3 className='text-lg font-medium pt-8 pb-2'> Card 1 </h3>
              <p className='py-2'>
                Creating beautiful web pages for your small business blah blah blah blah blah 
              </p>
              <h4 className="py-4 text-teal-600"> Design Tools I Use </h4>
              <p className='text-gray-800 py-1'></p>
              <p className='text-gray-800 py-1'>Whatever</p>
              <p className='text-gray-800 py-1'>Another THing</p>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
              <Image src={code} width={100} height={100} />
              <h3 className='text-lg font-medium pt-8 pb-2'> Card 2 </h3>
              <p className='py-2'>
                Creating beautiful web pages for your small business blah blah blah blah blah 
              </p>
              <h4 className="py-4 text-teal-600"> Design Tools I Use </h4>
              <p className='text-gray-800 py-1'></p>
              <p className='text-gray-800 py-1'>Whatever</p>
              <p className='text-gray-800 py-1'>Another THing</p>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
              <Image src={code} width={100} height={100} />
              <h3 className='text-lg font-medium pt-8 pb-2'> Card 3 </h3>
              <p className='py-2'>
                Creating beautiful web pages for your small business blah blah blah blah blah 
              </p>
              <h4 className="py-4 text-teal-600"> Design Tools I Use </h4>
              <p className='text-gray-800 py-1'></p>
              <p className='text-gray-800 py-1'>Whatever</p>
              <p className='text-gray-800 py-1'>Another THing</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className='text-3xl py-1'> Portfolio </h3>
            <p className="text-md py-2 leading-8 text-gray-800"> I’m a passionate, results-driven and organized <span className="text-teal-500">software developer</span> with the added bonus of extensive hospitality and client services experience. I started my software journey with self-teaching and eventually moved up to a competitive bootcamp program where I mastered the PERN stack. I’ve steadily enhanced my base of technological knowledge through independent projects, self-study and finding new technologies to enhance old solutions.  </p>
            <p className="text-md py-2 leading-8 text-gray-800"> New paragraph with words </p>
          </div>
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <div className='basis-1/3 flex-1 '>
              <Image src={web1} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive'/>
            </div>
            <div className='basis-1/3 flex-1 '>
              <Image src={web2} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive'/>
            </div>
            <div className='basis-1/3 flex-1 '>
              <Image src={web3} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive'/>
            </div>
            <div className='basis-1/3 flex-1 '>
              <Image src={web4} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive'/>
            </div>
            <div className='basis-1/3 flex-1 '>
              <Image src={web5} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive'/>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
