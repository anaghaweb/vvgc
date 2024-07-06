// "use client";
// import React, { useRef, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import clsx from "clsx";
// import LocalizedCampaignLink from "@modules/common/components/localized-campaign-link";
// import { Button } from "@modules/common/components/ui/button";
// import { TriangleRightIcon, TriangleLeftIcon } from "@radix-ui/react-icons";
// import { Separator } from "@modules/common/components/ui/separator";


// export default function CampaignCarousel({ camid, campaign }) {
//   const sliderRef = useRef(null);  
//   const history = useRouter();

//   useEffect(() => {
//     const initialSlideIndex = campaign.findIndex((ele) => ele.id === camid);
//     if (initialSlideIndex !== -1 && sliderRef.current) {
//       sliderRef.current.slickGoTo(initialSlideIndex);
//     }
//   }, [camid, campaign]);

//   const responsive = [
//     {
//       breakpoint: 1025,
//       settings: {
//         slidesToShow: 2,
//         centerMode: false,
//       },
//     },
//     {
//       breakpoint: 768,
//       settings: {
//         slidesToShow: 1,
//         centerMode: false,
//       },
//     },
//     {
//       breakpoint: 500,
//       settings: {
//         slidesToShow: 1,
//         centerMode: true,
//       },
//     },
//   ];

//   const settings = {
//     dots: false,
//     infinite: true,
//     centerMode: true,
//     centerPadding: "20px",
//     responsive: responsive,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     variableWidth: true,
//     focusOnSelect: true,
//   };

//   const next = () => {
//     sliderRef.current.slickNext();
//   };

//   const previous = () => {
//     sliderRef.current.slickPrev();
//   };

//   const handleSlideClick = (index, eleId) => {
//     sliderRef.current.slickGoTo(index);
//     history.push(`${eleId}`);
//   };

//   return (
//     <div className="relative w-full max-w-4xl mx-auto mb-2">
      
//       <Slider
//         {...settings}
//         swipeToSlide={true}
//         ref={sliderRef}
//       >
//         {campaign.map((ele, index) => (
//           <div
//             key={ele.id}
//             onClick={() => handleSlideClick(index, ele.id)}
//             className={clsx(
//               "carousel-container h-6 p-6 text-center text-nowrap overflow-hidden",
//               {
//                 "border-black md:border-b-2 font-bold": ele.id === camid,
//               }
//             )}
//             style={{ whiteSpace: 'normal', overflowWrap: 'break-word', wordWrap: 'break-word' }}
//           >
//             <LocalizedCampaignLink key={ele.id} href={`${ele.id}`}>
//               <p
//                 className={clsx("text-sm", {
//                   "text-blue-900 font-bold": ele.id === camid,
//                 })}
//               >
//                 {ele.title}
//               </p>
//             </LocalizedCampaignLink>

//              <Separator orientation="vertical"/>
//           </div>
//         ))}
//       </Slider>
      
//       <Button className="absolute top-0 left-0 bg-indigo-200 w-6 py-6" variant="outline" size="icon" type="button"  onClick={previous}>
//           <TriangleLeftIcon className="w-6 h-6"/>
//         </Button>
//         <Button className="absolute top-0 right-0 bg-indigo-200 w-6 py-6" variant="outline" size="icon" type="button" onClick={next}>
//           <TriangleRightIcon className="w-6 h-6"/>
//         </Button>
      
//     </div>
//   );
// }
