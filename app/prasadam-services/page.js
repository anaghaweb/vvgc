import React from "react";
export const metadata = {
    title: 'Prasadam Services',
    description: 'VVGC- Temple',
}

export default function Prasadam() {
    return (
        <React.Fragment>
            <section className={`h-[70vh] w-full bg-hero-prasadam bg-center bg-no-repeat bg-cover flex justify-center items-center text-6xl text-white font-sans font-[300] bg-opacity-70`}>
                <div className="w-[280px] h-auto text-center"><h1>Prasadam Services</h1></div>
            </section>
        </React.Fragment>
    );
}
