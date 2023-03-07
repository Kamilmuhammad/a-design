import Link from "next/link";

function Navbar() {
    const navigation = [
        { text: "Home", path: "/" },
        { text: "What We Do", path: "/" },
        { text: "Service", path: "/" },
        { text: "Project", path: "/" },
        { text: "Blog", path: "/" },
        { text: "Contact", path: "/" },
    ];

    return (
        <div className="flex bg-white justify-between px-8 lg:px-[120px] py-4 items-center shadow-sm">
            <h1 className="text-2xl">
                <span className="font-bold">A+</span> Design
            </h1>
            <div className="hidden lg:block">
                <div className="flex gap-7 font-semibold text-base">
                    {navigation.map((item, index) => (
                        <Link href={item.path} key={index}>
                            {item.text}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Navbar;
