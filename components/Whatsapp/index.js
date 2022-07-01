import { TbBrandWhatsapp } from 'react-icons/tb'
import Link from 'next/link';

export default function Whatsapp() {
  return (
    <div className="tw-fixed tw-bottom-[20px] tw-right-[20px]">
      <Link href="https://api.whatsapp.com/send?phone=554298274941">
        <a target="_blank" className='tw-bg-[#91c6c8] tw-w-[75px] tw-h-[75px] tw-flex tw-items-center tw-justify-center tw-rounded-[50px]'>
        <TbBrandWhatsapp size="50" color="#f8f8f8" />
        </a>
      </Link>
    </div>
  )
}