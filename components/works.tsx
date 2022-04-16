import React from 'react'
import { Tile, TileBackground, TileContent, TileWrapper } from './tile'
import { WorkBackground, WorkContainer, WorkLeft, WorkRight, WorkLink } from './work'
import Image from 'next/image'

const Works = () => (
<TileWrapper numOfPages={3}>
    <TileBackground>
        <WorkBackground /> 
    </TileBackground>

    <TileContent>

    <Tile page={0} renderContent={({ progress }) =>  (
        <WorkContainer>

            <WorkLeft progress={progress}>
                <div>We built</div>
                <div className='text-4xl md:text-5xl font-semibold tracking-tight'>
                    <WorkLink href="https://songllc.org;">Pink Panda</WorkLink>&apos;s app
                </div>
            </WorkLeft>

            <WorkRight progress={progress}>
                <Image 
                src="/assets/works/sample1.png"
                layout="responsive"
                width={840}
                height={1620}
                alt="Pink Panda"
                />
            </WorkRight>

        </WorkContainer>
        )} 
    />

    <Tile page={1} renderContent={({ progress }) =>  (
        <WorkContainer>
            <WorkLeft progress={progress}>
                <div>We made</div>
                <div className='text-4xl md:text-5xl font-semibold tracking-tight'>Steakwallet&nbsp;faster.
                </div>
                
            </WorkLeft>
            <WorkRight progress={progress}>
                <Image 
                src="/assets/works/sample2.png"
                layout="responsive"
                width={840}
                height={1620}
                alt="Steakwallet"
                />
            </WorkRight>
        </WorkContainer>
        )} 
    />
    <Tile page={2} renderContent={({ progress }) =>  (
        <WorkContainer>
            <WorkLeft progress={progress}>
                <div>We helped</div>
                <div className='text-4xl md:text-5xl font-semibold tracking-tight'> 
                Showtime ship faster.
                </div>
            </WorkLeft>
            <WorkRight progress={progress}>
                <Image 
                src="/assets/works/sample3.png"
                layout="responsive"
                width={840}
                height={1620}
                alt="Showtime"
                />
            </WorkRight>
        </WorkContainer>
        )} 
    />

    </TileContent>

</TileWrapper>
)
export default Works