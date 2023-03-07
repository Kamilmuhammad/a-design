import Head from "next/head";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Image from "next/image";
import { useEffect, useState } from "react";
import Features from "@/components/features";
import Client from "@/components/client";
import { Footer } from "@/components/footer";

export default function Home() {
    const [dots, setDots] = useState([]);
    useEffect(() => {
        const dot = [];
        for (let i = 1; i < 97; i++) {
            dot.push(
                <div
                    key={i}
                    className="bg-blue-100 w-2 h-2 rounded-full opacity-80"
                ></div>
            );
        }
        setDots(dot);
    }, []);

    return (
        <>
            <Head>
                <title>A+ Design</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <main className="pl-2 lg:pl-[68px] h-[89.8vh] overflow-y-auto no-scrollbar relative">
                <section className=" lg:pl-[52px] grid grid-rows-2 lg:grid-rows-none lg:grid-cols-10 h-screen lg:h-3/4 overflow-hidden">
                    <div className="flex flex-col justify-center pr-14 col-span-4 order-2 lg:order-1 gap-8 lg:gap-10">
                        <h1 className="text-2xl lg:text-5xl font-semibold">
                            A Digital Product Agency
                        </h1>
                        <p>
                            Leading digital agency with solid design and
                            development expertise. We build readymade websites,
                            mobile applications, and elaborate online business
                            services.
                        </p>
                        <div>
                            <Link
                                href="/"
                                className="bg-blue-700 font-semibold rounded-full text-white py-[20px] px-[40px] relative z-"
                            >
                                Contact Now
                            </Link>
                            <div className="w-64 gap-2 flex flex-wrap absolute lg:top-[300px] lg:left-24 -z-10">
                                {dots}
                            </div>
                        </div>
                    </div>
                    <div className="col-span-6 relative lg:-right-20 bg-[url('/teamWork.jpg')] bg-cover rounded-bl-[40%] order-1 lg:order-2">
                        <div className="bg-blue-200 w-28 h-28 rounded-full opacity-50 absolute -left-14 -z-10"></div>
                    </div>
                    <div className="bg-red-200 w-40 h-20 rounded-br-full  opacity-50 absolute lg:right-40 right-14 bottom-60 lg:bottom-20 -z-10"></div>
                </section>
                <section className="lg:pl-[52px] lg:pr-[120px] mt-12 py-16 lg:my-32">
                    <hr className="mb-4" />
                    <div className="lg:grid grid-cols-3 ">
                        <div className="flex-col pr-8">
                            <h1 className="text-2xl lg:text-5xl font-bold">
                                Our Client
                            </h1>
                            <p>
                                Several selected clients, who already believe in
                                our service.
                            </p>
                        </div>
                        <div className="pt-2 flex justify-around gap-3 content-center items-center col-span-2 flex-wrap">
                            <Image
                                src="/client/google.png"
                                alt="Client"
                                width={120}
                                height={120}
                            />
                            <Image
                                src="/client/air bnb.png"
                                alt="Client"
                                width={150}
                                height={150}
                            />
                            <Image
                                src="/client/uberEats.png"
                                alt="Client"
                                width={150}
                                height={150}
                            />
                            <Image
                                src="/client/amazon.png"
                                alt="Client"
                                width={110}
                                height={110}
                                className="mt-4"
                            />
                        </div>
                    </div>
                    <hr className="mt-4" />
                </section>
                <section className="lg:pl-[52px] relative ">
                    <div className="md:grid md:grid-cols-8 lg:min-h-[900px]">
                        <div className="col-span-3 flex flex-col justify-center lg:pr-20 gap-2 lg:gap-10 lg:text-left text-center">
                            <h1 className="text-2xl lg:text-5xl font-bold">
                                How can we help your Business?
                            </h1>
                            <p>
                                We build readymade websites, mobile
                                applications, and elaborate online business
                                services.
                            </p>
                        </div>
                        <div className="col-span-5 md:grid md:grid-cols-2">
                            <div className="flex flex-col gap-8 lg:justify-end py-2 ">
                                {/* Features */}
                                <Features
                                    source="/features/business.svg"
                                    alt="business"
                                    heading="Business Idea Planning"
                                    paragraf="We present you a proposal and discuss
                                    niffty-gritty like"
                                />
                                <Features
                                    source="/features/dev.svg"
                                    alt="business"
                                    heading="Development Website and App"
                                    paragraf="Communication protocols apart from engagement models"
                                />
                            </div>
                            <div className="flex flex-col gap-8 justify-start py-2">
                                {/* Features */}
                                <Features
                                    source="/features/finance.svg"
                                    alt="finance"
                                    heading="Financial Planning System"
                                    paragraf="Protocols apart from aengage models, pricing billing"
                                />
                                <Features
                                    source="/features/market.svg"
                                    alt="market"
                                    heading="Market Analysis Project"
                                    paragraf="Protocols apart from aengage models, pricing billing"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="bg-green-100 h-[200vh] lg:h-[92vh]  w-3/4 absolute top-36 right-0 rounded-l-full -z-10"></div>
                    <div className="bg-red-100 h-36 w-36 absolute top-20 lg:top-80 rounded-tl-[80%] -z-10"></div>
                    <div className="lg:w-96 gap-2 flex flex-wrap absolute bottom-40 lg:left-40 -z-20">
                        {dots}
                        {dots}
                        {dots}
                    </div>
                    <div className=" border-pink-600 border-[12px] rounded-full w-28 h-28 absolute bottom-4 lg:bottom-36 right-0 lg:right-12 -z-10"></div>
                </section>
                <section className="lg:pl-[52px] lg:pr-[120px] py-20 overflow-x-hidden ">
                    <div className="lg:grid lg:grid-cols-2 lg:justify-between">
                        <div className="relative">
                            <Image
                                src="/teamWork.jpg"
                                width={360}
                                height={360}
                                alt="hero"
                                className="rounded-3xl shadow-2xl lg:w-full"
                            />
                            <div className="bg-red-100 w-36 h-36 absolute rounded-full -right-16 -bottom-14 -z-10"></div>
                        </div>
                        <div className="relative flex flex-col lg:pl-20 justify-center gap-10 ">
                            <h1 className="text-2xl lg:text-5xl font-bold px-2">
                                Great Digital Product Agency since 2016
                            </h1>
                            <p className="px-2">
                                Our Business Plan is a written document
                                describing a company`s core business activites,
                                Objectives, and how it plans to achieve its
                                goals. Our goal is to provide our client high
                                quality Product with modern idea accordingly
                                their budgets and according thir reuirements.
                            </p>
                            <div className="bg-green-100 w-40 h-40 absolute top-10 left-18 rounded-br-[80%] -z-10"></div>
                        </div>
                    </div>
                </section>
                <section className="lg:pl-[52px] lg:pb-24 pb-0 py-16 relative">
                    <div className="text-center">
                        <h1 className="text-2xl lg:text-5xl font-bold pb-2">
                            What our happy client say
                        </h1>
                        <p>
                            Several selected clients, who already believe in our
                            service.
                        </p>
                    </div>
                    <Client />
                    <div className="lg:w-60 gap-2 flex flex-wrap absolute top-32 lg:left-44 -z-20">
                        {dots}
                        {dots}
                        {dots}
                    </div>
                </section>
                <section className="lg:pl-[52px] lg:pr-[150px] lg:mt-12 py-16 pr-2 overflow-x-hidden">
                    <div className="relative lg:px-20 flex lg:flex-row flex-col gap-10 lg:gap-3 text-center lg:text-left items-center justify-center lg:py-32 py-20 rounded-lg lg:rounded-[80px] bg-blue-100 lg:bg-blue-50 bg-opacity-80">
                        <div className="bg-orange-100 w-36 h-36 absolute rounded-bl-[50%] left-12 lg:-left-6 -bottom-10 lg:-bottom-6 -z-10"></div>
                        <div className="lg:w-40 w-screen gap-2 flex flex-wrap absolute -top-10 -right-20 -z-20">
                            {dots}
                        </div>
                        <div className=" hidden lg:block bg-blue-700 h-full w-5/12 absolute right-0 rounded-r-[120px] rounded-bl-[30%] rounded-tl-[40%] transform skew-x-12">
                            <div className="h-full"></div>
                            <div className="absolute top-0 -right-12 h-full w-1/2 bg-blue-700 transform -skew-x-12 rounded-r-[120px] "></div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h1 className="text-2xl lg:text-4xl font-bold">
                                Subscribe Newsletter
                            </h1>
                            <p>
                                I will update good news and promotion service
                                not spam
                            </p>
                        </div>
                        <form className=" relative z-10 bg-white shadow-2xl py-2 px-3 rounded-full text-sm">
                            <input
                                type="text"
                                placeholder="Enter your email address.."
                                className="bg-transparent outline-none"
                            />
                            <button
                                type="submit"
                                className="rounded-full bg-blue-600 text-white text-sm px-4 py-2 ml-2"
                            >
                                Contact Now
                            </button>
                        </form>
                    </div>
                </section>
                <section className="lg:pl-[52px] lg:pr-[120px] pt-20 pb-4 overflow-x-hidden ">
                    <hr />
                    <Footer />
                </section>
            </main>
        </>
    );
}
