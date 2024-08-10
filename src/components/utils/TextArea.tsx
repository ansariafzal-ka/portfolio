const TextArea = ({ name }: { name: string }) => {
  return (
    <textarea
      name={name}
      rows={5}
      placeholder="send me your message"
      className="w-full px-4 py-2 bg-indigo-950 text-white outline-none rounded-lg"
    ></textarea>
  );
};

export default TextArea;
