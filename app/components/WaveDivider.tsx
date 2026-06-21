import Image from "next/image";

export default function WaveDivider() {
  return (
    <div className="relative w-full h-[700px] -mt-94">
      <Image
        src="/images/Wave_Divider.png"
        alt="Wave divider"
        fill
        className="object-cover object-center"
      />
    </div>
  );
}