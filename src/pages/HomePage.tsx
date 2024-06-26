import landingImage from "../assets/landing.png"
import appDownloadImage from "../assets/appDownload.png"
import SearchBar, { SearchForm } from "@/components/SearchBar"
import { useNavigate } from "react-router-dom"

export default function HomePage() {

    const navigate = useNavigate()

    const handleSearchSubmit = (searchFormValues: SearchForm) => {
        navigate({
            pathname: `/search/${searchFormValues.searchQuery}`
        })
    }   
    return (
        <div className="flex flex-col gap-12">
            <div className="md:px-32 bg-white font-hero rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
                <h1 className="text-5xl font-bold tracking-tight text-black">
                    Tuck into takeaway today!!
                </h1>
                <span className="text-xl font-black">Food is just a click away:)</span>
                <SearchBar placeholder="Search by city or town" onSubmit={handleSearchSubmit} />
            </div>

            <div className="grid md:grid-cols-2 gap-5">
                <img src={landingImage}/>
                <div className="flex flex-col items-center justify-center gap-4 text-center">
                    <span className="font-bold font-hero text-3xl tracking-tighter">
                        Order takeaway even faster!
                    </span>
                    <span>Download the app for faster ordering and more QoL features</span>
                    <img src={appDownloadImage} alt="image" className="cursor-pointer"/>
                </div>
            </div>
        </div>
    )
}