'use client'


import React,{useTransition,useState} from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

const TAB_DATA =[
    {
       title:"Skills",
        id:"skill",
        content:(
            <ul>
                <li>Node.js</li>
                <li>Express</li>
                <li>PostgreSQL</li>
                <li>javascript</li>
                <li>React</li>
            </ul>
        )      
    },{
        title:"Education",
        id:"education",
        content:(
            <ul>
                <li>FullStack Academy of Code</li>
                <li>karachi univercity</li>
            </ul>
        )
    },{
        title:"Experience",
        id:"experience",
        content:(
        <ul>
                <li>next.js</li>
                <li>type script</li>
            </ul>
        )

    }
]

const AboutSection =()=> {

const [tab,setTab]=useState("skill")
const [isPending,startTransition]=useTransition()

const example: string = "example"; // Replace `any` with the appropriate type

const handleTabChange = (id:string) =>{
    startTransition (()=>{
        setTab(id)
    })
}

  return (
   <section className='text-white'>
     <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 
     px-4 xl:gap-16 sm:py-16 '>
        <Image src="/Images/animation-pic.jpng.jpg" alt="pic"
        width={300} height={300}/>
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
            <h1 className='text-4xl font-bold text-white mb-4'>
                Aboute me
            </h1>

            <p className='text-base lg:text-lg'>
                my name is hira i am a passionate
                 and skilled front-end developer with expertise in crafting responsive, user-friendly web applications. My experience spans across HTML, CSS, JavaScript, React, and Next.js, with a deep understanding of UI/UX principles and design aesthetics. I am proficient in building reusable components, integrating Tailwind CSS for responsive design, and optimizing performance for seamless user experiences. With a focus on delivering high-quality code and staying updated with the latest trends in web development, 
          
 </p>
            <div className='flex flex-row justify-start mt-8 '>
                 <TabButton 
selectTab={()=> handleTabChange("skill")}
active={tab === "skill"}
>
    {" "}
    Skills{" "}
    </TabButton>
    <TabButton selectTab={()=> handleTabChange("education")}
active={tab === "education"}>
    {" "}
    Educations{" "}</TabButton>

   <TabButton selectTab={()=> handleTabChange("experience")}
active={tab === "experience"}>
    {" "}
    Experience {" "}</TabButton>
     
          </div>

<div className='mt-8 '>{TAB_DATA.find((t) => t.id === tab)?.content}

</div>

        </div>
        </div>
        </section>
  );
};

export default AboutSection
