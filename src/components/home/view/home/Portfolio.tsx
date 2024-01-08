export default function Portfolio({ props }: { props: string }) {
  return (
    <div className="w-full animate-fade-in-5s text-white duration-1000 ">
      <div className="text-4xl">{props}, Welcome to My Portfolio</div>
      <div />
    </div>
  );
}
