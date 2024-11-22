export const SectionHeader = ({ eyebrow, title, description }) => {
    return (
      <div className="header">
        {eyebrow && <p className="text-sm text-gray-500">{eyebrow}</p>}
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-gray-600">{description}</p>
      </div>
    );
  };
  