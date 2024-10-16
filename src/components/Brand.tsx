import logo from "../assets/images/images.webp";

const Brand = () => {
    return(
        <h1 className="col-span-2 flex justify-center items-center font-bold text-sky-50">
            <a className="hover:text-pink-400 transition duration-500" href="#">
                <div className="flex justify-center items-center">
                    <img src={logo} alt="SNK Sound Team Logo" />
                    SNK SOUND TEAM
                </div>
            </a>
        </h1>
    )
}

export default Brand;

