export const SectionHeader = (
  {
    title,eyebrow,description,
  }:
  {
    title : string;
    eyebrow:string;
    description : string;
  }
) =>
{
  return (
    <>
    <div className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white rounded-xl">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Title */}
      <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">
       {eyebrow}
      </p>
      </div>
      <h2 className="text-4xl font-serif text-center mt-4">
        {title}
      </h2>
      <p className="text-gray-400 text-center mt-2 mb-8">
        {description}
      </p>
      </div>
      </>
  );
}