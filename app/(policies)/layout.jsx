import { IoChevronBackOutline } from "react-icons/io5";
import Link from "next/link";

import "../../styles/policy-styles.css"
export default function PolicyLayout ({children}) {
    return(
        <section className="py-10 px-6 bg-primary-white">
            <Link href="/" className="flex items-center text-2xl">
                <IoChevronBackOutline />
                Back
            </Link>
            <div className="px-10 py-6">
            {children}
            </div>
        </section>
    )
};