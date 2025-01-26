import Divider from "@modules/common/components/divider";
import React from "react";
import External_Link from "@modules/common/components/external-link";
const Priests_Funding = () => {
  const goFundMeURL =
    "https://www.gofundme.com/f/vvgc-priests-guru-dakshana?utm_campaign=p_cp+share-sheet&utm_medium=copy_link_all&utm_source=customer";
  return (
    <article
      className={`flex flex-col my-4 font-sans w-full md:max-w-screen-md mx-auto text-base`}
    >
      <h2 className="text-2xl md:text-4xl font-serif text-cyan-950">
        Fund our Priests
      </h2>
      <Divider />
      <p className={`p-4`}>
        Their selfless service forms the foundation of our temple's spiritual
        offerings, and their presence enriches our lives in countless ways. We
        would like to express our deep appreciation for the priests and
        acknowledge the invaluable role they play in maintaining the sanctity
        and vibrancy of our Temple.
      </p>
      <p className={`p-4`}>
        If you would like to give Guru Dakshana to our priests, you can do so
        using GoFundMe.
      </p>
     
        <External_Link url={goFundMeURL} text="GoFund Me" />
     
    </article>
  );
};

export default Priests_Funding;
