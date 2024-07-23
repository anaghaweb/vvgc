import React from "react";
import LakshmiGanapathiPageTemplate from "@modules/lakshmi-ganapathi-temple/page";


export const metadata = {
    title: 'Lakshmi Ganapathi Temple',
    description: 'San Jose',
}

export default async function SanJose() {
 
    return (
        <React.Fragment>          
            <LakshmiGanapathiPageTemplate />
        </React.Fragment>
    );
}


