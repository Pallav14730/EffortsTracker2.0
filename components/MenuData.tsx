import { X } from "lucide-react";

interface crossMenu {
  onClickcrossMenu: () => void;
}
export default function MenuData({ onClickcrossMenu }: crossMenu) {
  return (
    <div className="w-80 bg-white h-full">
      <div className="text-right">
        <X className="cursor-pointer text-center" onClick={onClickcrossMenu} />
      </div>
      <div className="w-full max-w-xs mx-auto bg-white shadow-lg h-screen  p-6 space-y-4 text-center">
  <button className="w-full cursor-pointer py-2 px-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold hover:from-purple-700 hover:to-blue-600 transition text-sm whitespace-normal break-words">
    Effort Entry
  </button>

  <button className="w-full cursor-pointer py-2 px-3 rounded-lg border border-gray-300 text-gray-800 hover:bg-gray-100 transition text-sm whitespace-normal break-words">
    Application Based Report
  </button>

  <button className="w-full cursor-pointer py-2 px-3 rounded-lg border border-gray-300 text-gray-800 hover:bg-gray-100 transition text-sm whitespace-normal break-words">
    Resource Based Report
  </button>

  <button className="w-full cursor-pointer py-2 px-3 rounded-lg border border-gray-300 text-gray-800 hover:bg-gray-100 transition text-sm whitespace-normal break-words">
    View Defaulter List
  </button>

  <button className="w-full cursor-pointer py-2 px-3 rounded-lg border border-gray-300 text-gray-800 hover:bg-gray-100 transition text-sm whitespace-normal break-words">
    Effort Utilization Report
  </button>
</div>


    </div>
  );
}
