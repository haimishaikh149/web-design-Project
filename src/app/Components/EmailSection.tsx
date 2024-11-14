
"use client";

import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import Link from "next/link"
import Resume from './Resume';

const EmailSection = () => {
  // Social Links Array Define Karen
  const socialLinks = [
    {
      url: "https://www.facebook.com/profile.php?id=100081218384596", // Replace with your actual links
      icon: <FaFacebookF size={40} className='text-white hover:text-blue-500' />
    },
    {
      url: "https://www.instagram.com/hira_shaikh44/",
      icon: <IoLogoInstagram size={40} className='text-white hover:text-blue-500' />
    },
    {
      url: "https://www.linkedin.com/in/hira-shaikh-2295502b6/",
      icon: <FaLinkedinIn size={40} className='text-white hover:text-blue-500'/>
    },
    {
      url: "https://www.github.com",
      icon: <FaGithub size={40} className='text-white hover:text-blue-500'/>
    }
  ]
  

  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4">
      <div>
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>


<p className="text-[#ADB7BE] md-4 max-w-md">
    I&apos;m currently looking for new opportunities 
  my inbox is always open. Whether you have a question or just want to say hi
  I&apos;ll try my best to get back to you.
</p>


        <div className="flex gap-4 items-center justify-center md:justify-start mt-4 md:mt-0">
          <ul className="flex gap-3">
            {socialLinks.map((link) => (
              <li
                key={link.url}
                className="rounded-full cursor-pointer border-[1px] border-main p-2 hover:bg-main hover:text-white"
              >
                <Link href={link.url} target="_blank">
                  {link.icon}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <form className="flex flex-col gap-6">
          <div className="mb-6">
            <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">
              Your email
            </label>
            <input
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="haimishaikh@gmail.com"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="subject" className="text-white block mb-2 text-sm font-medium">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="*just saying hi!"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="text-white block mb-2 text-sm font-medium">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about..."
            />
          </div>
          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
        </form>
      <Resume/>
      </div>
    </section>
  );
};

export default EmailSection;
