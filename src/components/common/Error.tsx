type ErrorProps = {
  error: string;
};

const Error: React.FC<ErrorProps> = ({ error }) => {
  return (
    <div className="flex justify-center items-center mb-6">
      <p className="text-center text-xl md:text-2xl font-bold">{error}</p>
    </div>
  );
};

export default Error;
