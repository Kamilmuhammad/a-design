import Image from "next/image";

export const Footer = () => {
    return (
        <>
            <div className="grid lg:grid-cols-3 py-8">
                <div
                    className="text-justify lg:text-left lg:pr-16 pr-2
            "
                >
                    <h1 className="text-2xl">
                        <span className="font-bold">A+</span> Design
                    </h1>
                    <p className=" text-sm lg:text-xs">
                        Leading digital agency with solid design and development
                        expertise. We build readymade websites, mobile
                        applications, and elaborate online business services.
                    </p>
                    <div className="flex gap-4 justify-center lg:justify-start py-4">
                        <Image
                            src="/social/facebook.png"
                            alt="facebook"
                            width={30}
                            height={30}
                        />
                        <Image
                            src="/social/twitter.png"
                            alt="twitter"
                            width={30}
                            height={30}
                        />
                        <Image
                            src="/social/linkedin.png"
                            alt="linkedin"
                            width={30}
                            height={30}
                        />
                    </div>
                </div>

                <div className="lg:col-span-2 grid grid-cols-2 lg:flex lg:justify-around gap-4 pl-6 pt-4 font-medium leading-4">
                    <div>
                        <h1 className="font-bold pb-4">What We Do</h1>
                        <ul className="text-xs leading-5 lg:leading-6">
                            <li>Web Design</li>
                            <li>App Design</li>
                            <li>Social Media Manage</li>
                            <li>Market Analysis Project</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="font-bold pb-4">Company</h1>
                        <ul className="text-xs leading-5 lg:leading-6">
                            <li>About Us</li>
                            <li>Career</li>
                            <li>Become Investor</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="font-bold pb-4">Support</h1>
                        <ul className="text-xs leading-5 lg:leading-6">
                            <li>FAQ</li>
                            <li>Policy</li>
                            <li>Business</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="font-bold pb-4">Contact</h1>
                        <ul className="text-xs leading-5 lg:leading-6">
                            <li>Whatsapp</li>
                            <li>Support 24</li>
                        </ul>
                    </div>
                </div>
            </div>
            <p className="text-center text-xs font-light">
                Copyright © 2023 Kamil Muhammad
            </p>
        </>
    );
};
