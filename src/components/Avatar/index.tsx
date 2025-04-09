import { MdPersonOutline } from "react-icons/md";

export function Avatar() {
  return (
    <figure className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
      <MdPersonOutline className="text-gray-500" size={24} />
    </figure>
  );
}
