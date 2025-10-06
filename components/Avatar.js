import Image from 'next/image';

const Avatar = () => {
  return <div className='hidden xl:flex xl:max-w-none'>
    <Image src={"/drgham_image.png"}
          width={600}
          height={400}
          alt=''
          className='absolute top-[1%] right-[1%] translate-z-0'
    />
  </div>;
};

export default Avatar;
