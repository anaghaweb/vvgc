// "use client";
// import clsx from "clsx";
// import React from "react";
// import type { Campaign } from "types/global";
// import LocalizedCampaignLink from "@modules/common/components/localized-campaign-link";
// import Divider from "@modules/common/components/divider";
// import { TriangleRightIcon } from "@radix-ui/react-icons";

// const CampaignSideNav = ({
//   camid,
//   campaign,
// }: {
//   camid: string;
//   campaign: Campaign[];
// }) => {
//   return (
//     <div
//       className={clsx(
//         "hidden md:block border-r-2 w-[280px] min-w-[280px] h-[calc(100vh-12rem)] overflow-y-auto rounded-none top-0 left-0 p-0 transition-all duration-300 ease-in-out"
//       )}
//     >
//       <p className="mb-1 font-roboto_mono text-xl">Campaign List</p>
//       <Divider />
//       {campaign.map((ele, index) => {
//         return (
         
//             <div key={index} className="flex gap-1 items-center">
//               <LocalizedCampaignLink key={ele.id} href={`/${ele.id}`}>
//                 <div
//                   className={clsx(`text-sm font-inter my-2`, {
//                     "text-blue-900 font-bold": ele.id === camid,
//                   })}
//                 >
//                   {ele.title}
//                 </div>
//               </LocalizedCampaignLink>
//               <div
//                 className={`${
//                   ele.id === camid ? "block text-blue-900" : "hidden"
//                 }`}
//               >
//                 <TriangleRightIcon className="w-6 h-6" />
//               </div>
//             </div>           
         
//         );
//       })}
//     </div>
//   );
// };

// export default CampaignSideNav;
