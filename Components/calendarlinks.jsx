import Link from "next/link";
import React from "react";
import { FcGoogle } from 'react-icons/fc'
import { PiAppleLogoDuotone } from 'react-icons/pi';
import {TfiMicrosoftAlt} from "react-icons/tfi";

function convertToGoogleTimeFormat(timeString) {

    const match = timeString.match(/(\d+):(\d+)([APap][Mm])/);

    if (!match) {
        return "Invalid time format";
    }

    let hours = parseInt(match[1]);
    const minutes = parseInt(match[2]);
    const ampm = match[3].toLowerCase();

    if (ampm === 'pm' && hours !== 12) {
        hours += 12;
    } else if (ampm === 'am' && hours === 12) {
        hours = 0;
    }

    // Format the result
    const formattedTime = `${String(hours).padStart(2, '0')}${String(minutes).padStart(2, '0')}000`;
  
    return formattedTime;
}

function convertToAppleTimeFormat(timeString) {

    const match = timeString.match(/(\d+):(\d+)([APap][Mm])/);
    if (!match) {
        return "Invalid time format";
    }

    let hours = parseInt(match[1]);
    const minutes = parseInt(match[2]);
    const ampm = match[3].toLowerCase();

    if (ampm === 'pm' && hours !== 12) {
        hours += 12;
    } else if (ampm === 'am' && hours === 12) {
        hours = 0;
    }

    // Format the result
    const formattedTime = `${String(hours).padStart(2, '0')}${String(minutes).padStart(2, '0')}000Z`;
    //console.log(formattedTime);
    return formattedTime;
}

function convertToOutlookTimeFormat(timeString) {

    const match = timeString.match(/(\d+):(\d+)([APap][Mm])/);

    if (!match) {
        return "Invalid time format";
    }

    let hours = parseInt(match[1]);
    const minutes = parseInt(match[2]);
    const ampm = match[3].toLowerCase();

    if (ampm === 'pm' && hours !== 12) {
        hours += 12;
    } else if (ampm === 'am' && hours === 12) {
        hours = 0;
    }

    // Format the result
    const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:00.000`;
    //console.log(formattedTime);
    return formattedTime;
}

function generateAppleCalendarLink(event) {
    let appleCalendarLink = 'webcal://p19-calendarws.icloud.com/ca/subscribe/1/';
    appleCalendarLink += encodeURIComponent(event.summary + '.ics') + '?';
    appleCalendarLink += 't=' + encodeURIComponent(event.summary) + '&';
    appleCalendarLink += 'n=' + encodeURIComponent(event.description) + '&';
    appleCalendarLink += 's=' + event.start + '&';
    appleCalendarLink += 'e=' + event.end;

    return appleCalendarLink;
}

function generateGoogleCalendarLink(googleDataFormat) {

    let googleCalendarLink = 'https://www.google.com/calendar/render?action=TEMPLATE';
    googleCalendarLink += '&dates=' + googleDataFormat.start + '/' + googleDataFormat.end;
    googleCalendarLink += '&text=' + encodeURIComponent(googleDataFormat.summary);
    googleCalendarLink += '&details=' + encodeURIComponent(googleDataFormat.description);
    return googleCalendarLink;
}

function generateOutlookCalendarLink(outLookDataFormat) {
    let outlookCalendarLink = 'https://outlook.live.com/owa/?rru=addevent';
    outlookCalendarLink += '&startdt=' + encodeURIComponent(outLookDataFormat.start);
    outlookCalendarLink += '&enddt=' + encodeURIComponent(outLookDataFormat.end);
    outlookCalendarLink += '&subject=' + encodeURIComponent(outLookDataFormat.summary);
    outlookCalendarLink += '&location=' + encodeURIComponent(outLookDataFormat.location);
    outlookCalendarLink += '&body=' + encodeURIComponent(outLookDataFormat.description);

    return outlookCalendarLink;
}


export default function CalenderLinks({ eventdata }) {

    const googleDataFormat = {
        start: eventdata.startdate.replace(/[^a-zA-Z0-9]/g, "").slice(0, -10) + convertToGoogleTimeFormat(eventdata.startTime),
        end: eventdata.enddate.replace(/[^a-zA-Z0-9]/g, "").slice(0, -10) +
            convertToGoogleTimeFormat(eventdata.endTime),
        summary: eventdata.summary,
        description: eventdata.description
    };

    const outLookDataFormat = {
        start: eventdata.startdate.slice(0, -13) + convertToOutlookTimeFormat(eventdata.startTime),
        end: eventdata.enddate.slice(0, -13) + convertToOutlookTimeFormat(eventdata.endTime),
        summary: eventdata.summary,
        description: eventdata.description
    };

    const appletDataFormat = {
        start: eventdata.startdate.replace(/[^a-zA-Z0-9]/g, "").slice(0, -10) + convertToAppleTimeFormat(eventdata.startTime),
        end: eventdata.enddate.replace(/[^a-zA-Z0-9]/g, "").slice(0, -10) +
            convertToAppleTimeFormat(eventdata.endTime),
        summary: eventdata.summary,
        description: eventdata.description
    };

    const appleCalendarLink = generateAppleCalendarLink(appletDataFormat);
    const googleCalendarLink = generateGoogleCalendarLink(googleDataFormat);
    const outlookCalendarLink = generateOutlookCalendarLink(outLookDataFormat);

    return (
        <React.Fragment>

            {/* <Link href={appleCalendarLink} target="_blank" className="px-1"><PiAppleLogoDuotone size={25} className="text-sky-800"/></Link> */}
            <Link href={googleCalendarLink} target="_blank" className="px-1"><FcGoogle size={25} /></Link>
            <Link href={outlookCalendarLink} target="_blank" className="px-1">
                <TfiMicrosoftAlt size={25} className="text-sky-500"/></Link>



        </React.Fragment>
    )

}




