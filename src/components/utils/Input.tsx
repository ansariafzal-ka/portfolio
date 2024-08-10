interface InputProps {
  type: string;
  placeholder: string;
  name: string;
}

const Input = ({ type, placeholder, name }: InputProps) => {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      required
      className="w-full px-4 py-3 bg-indigo-950 text-white outline-none rounded-lg"
    />
  );
};

export default Input;
