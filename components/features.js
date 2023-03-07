import Image from "next/image";
function Features({ source, alt, paragraf, heading }) {
    return (
        <div className="rounded-[40px]  shadow-2xl shadow-slate-500 bg-white w-4/5 px-5 pt-6 pb-12 flex-col flex gap-8 text-center mx-auto">
            <div className="bg-blue-50 w-32 h-32 mx-auto flex content-center rounded-3xl">
                <Image
                    src={source}
                    alt={alt}
                    width={70}
                    height={10}
                    className="mx-auto"
                />
            </div>
            <h1 className="text-3xl font-medium">{heading}</h1>
            <p>{paragraf}</p>
        </div>
    );
}

export default Features;
