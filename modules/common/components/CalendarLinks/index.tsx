import Link from 'next/link'
import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { PiAppleLogoDuotone } from 'react-icons/pi'
import { TfiMicrosoftAlt } from 'react-icons/tfi'
import GoogleCalendarLinkGenerator from '@lib/utils/calendarLinkGenerator/GoogleCalendarLink';
import AppleCalendarLinkGenerator from '@lib/utils/calendarLinkGenerator/AppleCalendarLink';
import OutlookCalendarLinkGenerator from '@lib/utils/calendarLinkGenerator/OutlookCalendarLink'
import { CalendarEvent } from 'types/global'
import { DropdownMenuIcons } from './calendar-drpdown-menu'
/**
 * apple: 20241125T0000000Z
 * outlook: 2024-11-25T00:00:00.000
 * google: 20241125T0000000
 */

const GenerateCalendarLinks = ({ event }: { event: CalendarEvent }) => {
  const googleCalendarLink = GoogleCalendarLinkGenerator(event);
  const appleCalendarLink = AppleCalendarLinkGenerator(event);
  const outlookCalendarLink = OutlookCalendarLinkGenerator(event);
  return (
    <div className="flex items-center justify-start p-4 ">
      
     <span className="font-extralight">Add to Calendar:</span>
     <DropdownMenuIcons  outlook={outlookCalendarLink} google={googleCalendarLink} apple={appleCalendarLink} />


    </div>
  )
}

export default GenerateCalendarLinks

