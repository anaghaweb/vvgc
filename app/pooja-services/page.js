import React from "react";

export const metadata = {
    title: 'Pooja Services',
    description: 'VVGC- Temple',
}

export default function Pooja() {
    return (
        <React.Fragment>
            <section className={`h-[70vh] w-full bg-hero-pooja bg-center bg-no-repeat bg-cover flex justify-center items-center text-6xl text-white font-sans font-[300] bg-opacity-70`}>
                <div className="w-[280px] h-auto text-center"><h1>Pooja Services</h1></div>
            </section>
        </React.Fragment>
    );
}
