const Card = ({ title, content }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 w-72 h-32 flex flex-col justify-between">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-gray-700">{content}</p>
    </div>
  );
};

export default Card;
