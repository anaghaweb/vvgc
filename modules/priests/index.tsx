import Priests_Banner from "./banner"
import Priests_Contacts from "./contact-priests"
import Priests_Funding from "./funding-priests"

const PriestsPageViewTemplate = () => {
  return (
      <main className="font-sans">
            <Priests_Banner />
            <Priests_Funding />
            <Priests_Contacts />
      </main>
  )
}

export default PriestsPageViewTemplate