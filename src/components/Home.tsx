interface HomeProps {
  section: string;
}

const Home = ({ section }: HomeProps) => {
  return (
    <div
      id={`${section.toLowerCase()}`}
      className="h-screen w-full bg-white flex flex-col items-start justify-center "
    >
      <div className="flex flex-col px-20">
        <h1 className="text-6xl text-gray-500">Anna Takacs</h1>
        <div className="animated-line-from-left my-3 h-[1.5px] bg-gray-400 -mx-4"></div>
        <h2 className="text-2xl text-gray-500">DevOps & SRE engineer</h2>
      </div>
    </div>
  );
};

export default Home;
