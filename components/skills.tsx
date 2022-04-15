import React from 'react'

const skills: React.FC = () => {
    return (
        <div className="bg-black text-white">
            <div className="min-h-screen max-w-5xl mx-auto px-10 lg:px-20 py-24 md:py-28 lg:py-36 flex flex-col justify-center items-center text-4xl md:text-6xl lg:text-7xl tracking-tight font-semibold">
                <div className="leading-[1.15]">
                    <div>We know our tools inside out.</div>
                    <span>Our team has contributed 123 commits to React core, powering thousands of apps worldwide.</span>    
                    <span>
                        We&apos;re maintaining some of the most popular open-source projects, with over <strong>1,234</strong> downloads.
                    </span>
                </div>
            </div>
        </div>
    )
}

export default skills