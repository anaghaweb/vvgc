import Image from "next/image";
import Divider from '@modules/common/components/divider';
import React from "react";
import Link from 'next/link';
import { GrDocumentPdf } from "react-icons/gr";
import { HiExternalLink } from "react-icons/hi";
import { Card } from '@modules/common/components/ui/card';

const MargazhiParayanam = () => {
    return (
        <Card className="text-base flex flex-col p-2 gap-4 md:pl-4  font-roboto leading-5">
            <h1 className=" text-2xl md:text-3xl font-roboto text-indigo-950 text-center md:text-left ">Margazhi/Dhanur Masa Parayanam

            <Divider />
            </h1>
            
            <Image src="/images/events/sloka.jpg" alt="abc" width={200} height={200} sizes="100vw" className="mx-auto md:hidden"
                
            />
            <p><strong>Where:</strong> VVGC Temple, San Martin, CA</p>
            <p><strong>When:</strong> Daily in this month 7AM - 8AM (Dec 15th to Jan 14th 2024)</p>
            <p className='max-w-prose'>
                <strong>Details:</strong> VVGC temple has made the sankalpam this year also to perform the daily parayanam and Pooja in the Dhanur Masa to Perumal. Sri. Sridhar and Smt. Malini Sridhar will lead the parayanam from the Zoom.
            </p>
            <p className="text-indigo-950 font-semibold">The following will be chanted: </p>

            <SlokaLinks />

            <p className='max-w-prose'>All these events are done with the sankalpam for Global Peace and Prosperity. Sarve Jano Sukhino Bhavanthu.</p>

            <p className="text-indigo-950 font-semibold text-xl">Join Online:</p>
            <ul>
                <li>
                    <a href="https://bit.ly/vvgczoom" target="_blank" rel="noopener noreferrer"
                        className="flex items-center font-bold"
                    > <span>Zoom:</span> <HiExternalLink fontSize={24} className="text-blue-700 " /></a>

                    Meeting Number: 623 363 4720 <br />
                    Meeting Password: 040415
                </li>
                <li>

                    <a href="https://bit.ly/vvgclive" target="_blank" rel="noopener noreferrer"
                        className="flex items-center font-bold"
                    >
                        <span>YouTube Live:</span>
                        <HiExternalLink fontSize={24} className="text-blue-700 " /></a>
                </li>
                <li>

                    <a href="https://www.facebook.com/vvgctemple" target="_blank" rel="noopener noreferrer" className="flex items-center font-bold"
                    >
                        <span>Facebook Live:</span>
                        <HiExternalLink fontSize={24} className="text-blue-700 " /></a>
                </li>
            </ul>
        </Card>
    );
};

function SlokaLinks() {
    return <div className="font-roboto max-w-prose">
        <p className='text-indigo-950 font-semibold text-center '>Order of Pasurams(Slokams) chanted during Margazhi (Dhanur Masa) at VVGC Temple, San Martin, CA</p>

        {
            paranayamSequence.map((ele, index) =>
                <ul key={index} className='flex-col' >
                    <p className='text-xl font-bold inline-block'>{ele.title}</p>
                    <div className='flex flex-wrap p-4 gap-4 items-center justify-evenly bg-blue-200' >
                        {
                            ele.slokasLinks.map((ele, index) =>

                                <Link key={index} href={ele.url} target="_blank" rel="noopener noreferrer"
                                    className='font-base text-base pl-2 inline-flex items-center gap-1 text-blue-900 underline break-words'
                                >
                                    <span>{ele.lang}</span>
                                    <GrDocumentPdf className='text-red-600' />
                                </Link>

                            )
                        }
                    </div>
                </ul>
            )
        }
    </div>
}

const paranayamSequence: SlokaSequenceLinks = [
    {
        title: 'Pothu Thaniyan',
        slokasLinks: [
            {
                lang: 'Tamil',
                url: 'https://www.prapatti.com/slokas/tamil/podutaniyan.pdf'
            },
            {
                lang: 'Telugu',
                url: 'https://www.prapatti.com/slokas/telugu/podutaniyan.pdf'
            },
            {
                lang: 'Sanskrit',
                url: 'https://www.prapatti.com/slokas/sanskrit/podutaniyan.pdf'
            },
            {
                lang: 'English',
                url: 'https://www.prapatti.com/slokas/english/podutaniyan.pdf'
            },
        ]
    },
    {
        title: 'Thiruppalli Ezhuchi',
        slokasLinks: [
            {
                lang: 'Tamil',
                url: 'https://www.prapatti.com/slokas/tamil/naalaayiram/tondaradippodiyaazvaar/tiruppalliyezuchchi.pdf'
            },
            {
                lang: 'Telugu',
                url: 'https://www.prapatti.com/slokas/telugu/naalaayiram/tondaradippodiyaazvaar/tiruppalliyezuchchi.pdf'
            },
            {
                lang: 'Sanskrit',
                url: 'https://www.prapatti.com/slokas/sanskrit/naalaayiram/tondaradippodiyaazvaar/tiruppalliyezuchchi.pdf'
            },
            {
                lang: 'English',
                url: 'https://www.prapatti.com/slokas/english/naalaayiram/tondaradippodiyaazvaar/tiruppalliyezuchchi.pdf'
            },
        ]
    },
    {
        title: 'Thiruppavai',
        slokasLinks: [
            {
                lang: 'Tamil',
                url: 'https://www.prapatti.com/slokas/tamil/naalaayiram/aandaal/tiruppaavai.pdf'
            },
            {
                lang: 'Telugu',
                url: 'https://www.prapatti.com/slokas/telugu/naalaayiram/aandaal/tiruppaavai.pdf'
            },
            {
                lang: 'Sanskrit',
                url: 'https://www.prapatti.com/slokas/sanskrit/naalaayiram/aandaal/tiruppaavai.pdf'
            },
            {
                lang: 'English',
                url: 'https://www.prapatti.com/slokas/english/naalaayiram/aandaal/tiruppaavai.pdf'
            },
        ]
    },
    {
        title: 'Adaikalapattu',
        slokasLinks: [
            {
                lang: 'Tamil',
                url: 'https://www.prapatti.com/slokas/tamil/desika-prabandham/adaikkalappattu.pdf'
            },
            {
                lang: 'Telugu',
                url: 'https://www.prapatti.com/slokas/telugu/desika-prabandham/adaikkalappattu.pdf'
            },
            {
                lang: 'Sanskrit',
                url: 'https://www.prapatti.com/slokas/sanskrit/desika-prabandham/adaikkalappattu.pdf'
            },
            {
                lang: 'English',
                url: 'https://www.prapatti.com/slokas/english/desika-prabandham/adaikkalappattu.pdf'
            },
        ]
    },
    {
        title: 'Sattrumurai',
        slokasLinks: [
            {
                lang: 'Tamil',
                url: 'https://www.prapatti.com/slokas/tamil/saattrumurai_vad.pdf'
            },
            {
                lang: 'Telugu',
                url: 'https://www.prapatti.com/slokas/telugu/saattrumurai_vad.pdf'
            },
            {
                lang: 'Sanskrit',
                url: 'https://www.prapatti.com/slokas/sanskrit/saattrumurai_vad.pdf'
            },
            {
                lang: 'English',
                url: 'https://www.prapatti.com/slokas/english/saattrumurai_vad.pdf'
            },
        ]
    }
]

export default MargazhiParayanam;
