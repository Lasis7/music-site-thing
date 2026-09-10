export default function BigText({ text }: { text: string }) {
  return (
    <h1 className="font-outline-4 font-sedgwick text-big-text text-[clamp(32px,5vw,60px)]">
      {text}
    </h1>
  );
}
