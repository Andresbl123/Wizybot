import { MdOutlineShoppingCart, MdKeyboardArrowDown } from "react-icons/md";

import { Avatar } from "../Avatar";

export interface UserProps {
  userName: string;
  userStatus: string;
}

export function User(props: UserProps) {
  const { userName, userStatus } = props;
  return (
    <div className="bg-blue-700 shadow p-4">
      <div className="flex items-center gap-3">
        <Avatar />
        <div>
          <h4 className="text-white font-bold text-ls">{userName}</h4>
        </div>
        <MdOutlineShoppingCart className="text-white ml-auto" size={24} />
        <MdKeyboardArrowDown className="text-white ml-2" size={24} />
      </div>
      <div>
        <p className="text-gray-300">{userStatus}</p>
      </div>
    </div>
  );
}
