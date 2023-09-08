import React from "react";
export const metadata = {
    title: 'San Jose Temple',
    description: 'Second Branch',
}

export default function SanJose() {
    return (
        <React.Fragment>
            <section className={`h-[50dvh] md:h-[70vh] w-full bg-hero-pattern bg-center bg-no-repeat bg-cover flex justify-center items-center text-4xl md:text-6xl text-white font-sans font-[300] bg-opacity-70`}>
                <div className="w-[280px] h-auto text-center"><h1>Welcome to San Jose Temple</h1></div>
            </section>
        </React.Fragment>
    );
}
