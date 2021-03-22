import NextImage from 'next/image';

export default function Image() {
  return <NextImage 
    src="/img_spaces.png"
    alt="Space"
    width="160"
    height="90"
    layout="fixed"
    priority
  />;
}
