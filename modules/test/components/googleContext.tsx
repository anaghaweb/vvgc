'use client'

import React, { type ReactNode } from 'react'
import { createContext } from "react";
import { CalendarEvent } from "types/global";

export const googlecontext = createContext<CalendarEvent[]>([]);

export function GoogleContext ({data, children}:{children:ReactNode, data:CalendarEvent[]}){

    return <>
    <googlecontext.Provider value={data}>
        {children}
    </googlecontext.Provider>
    </>

}