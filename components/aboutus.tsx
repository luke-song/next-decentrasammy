import React from 'react'
import Member from '../components/member'

const Aboutus: React.FC = () => {
    return (
       <section className={`flex flex-col bg-white py-20 text-3xl md:text-4xl`}>
        <div className="container mx-auto px-11">
            <p className="leading-tight max-w-5xl mx-auto text-4xl tracking-tight">
            <strong>DecentraSammy will help you ship better apps, faster.</strong> Our team of Spartans write clean and efficient codes that are also visually astounding to the users.
            </p>
        </div>
        <div className="container mx-auto px-11 text-center mt-28">
            <h2>Our <em>spartans</em> </h2>
            <div className="mt-2"> the &ldquo;spec-ops&rdquo;</div>
            <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 lg:gap-20">
                <Member 
                    id="luke" 
                    name="Luke" 
                    socialId="@luke-song" 
                    link="https://github.com/luke-song"
                />
                <Member 
                    id="woojin" 
                    name="Woojin" 
                    socialId="@woojin" 
                    link="https://github.com/woojin"
                />
                <Member    
                    id="ray" 
                    name="Ray" 
                    socialId="@ray" 
                    link="https://github.com/ray"
                />
                <Member 
                    id="mark" 
                    name="Mark" 
                    socialId="@Mark" 
                    link="https://github.com/mark"
                />
                <Member 
                    id="jim" 
                    name="Jim" 
                    socialId="@jimin" 
                    link="https://github.com/jimin"
                />
                <Member 
                    id="akshat" 
                    name="Akshat" 
                    socialId="@akshat" 
                    link="https://github.com/akshat"
                />
            </div>
        </div>
       </section>

    );
}

export default Aboutus;