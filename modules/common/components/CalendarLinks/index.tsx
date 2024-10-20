import Link from 'next/link'
import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { PiAppleLogoDuotone } from 'react-icons/pi'
import { TfiMicrosoftAlt } from 'react-icons/tfi'
import GoogleCalendarLinkGenerator from '@lib/utils/calendarLinkGenerator/GoogleCalendarLink';
import AppleCalendarLinkGenerator from '@lib/utils/calendarLinkGenerator/AppleCalendarLink';
import OutlookCalendarLinkGenerator from '@lib/utils/calendarLinkGenerator/OutlookCalendarLink'
import { CalendarEvent } from 'types/global'

/**
 * apple: 20241125T0000000Z
 * outlook: 2024-11-25T00:00:00.000
 * google: 20241125T0000000
 */

const GenerateCalendarLinks = ({event}:{event:CalendarEvent}) => {
    const googleCalendarLink = GoogleCalendarLinkGenerator(event);
    const appleCalendarLink = AppleCalendarLinkGenerator(event);
    const outlookCalendarLink  = OutlookCalendarLinkGenerator(event);
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-4 ">
      <div className="justify-center font-roboto md:text-left text-blue-950 pr-2">
        Add to Calendar:{" "}
      </div>
      <div className="grid grid-cols-3 items-center gap-x-3">
        <Link href={appleCalendarLink} target="_blank" className="px-1">
          <PiAppleLogoDuotone size={25} className="text-sky-800" />
        </Link>
        <Link href={googleCalendarLink} target="_blank" className="px-1">
          <FcGoogle size={25} />
        </Link>
        <Link href={outlookCalendarLink} target="_blank" className="px-1">
          <TfiMicrosoftAlt size={25} className="text-sky-500" />
        </Link>
      </div>
    </div>
  )
}

export default GenerateCalendarLinks