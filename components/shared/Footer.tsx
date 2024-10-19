import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className='border-t'>
            <div className='flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row'>
                <Link href='/'>
                    <Image
                        alt='Events by BTC logo'
                        src='/assets/images/logo.svg'
                        width={128}
                        height={38}
                    />
                </Link>
                <p>@2024 Events by BTC. All rights reserved</p>

            </div>

        </footer>
    )
}

export default Footer