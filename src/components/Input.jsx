export default function Input({ id, type = "text", placeholder, ...props }) {
  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      className="w-full p-4 bg-[#F3F4F6] placeholder:text-[#9CA3AF] rounded-md"
      {...props}
    />
  );
}
