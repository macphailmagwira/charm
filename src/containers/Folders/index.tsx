import { TbNotebook } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";

import FolderAdd from "./FolderAdd";
import FolderList from "./FolderList";

function Notebooks() {
  return (
    <section className="sec-container">
       <h2 className="sec-title group relative flex items-center justify-between">
        <div className="flex items-center gap-2">
          <TbNotebook className="text-xl" />
          <span>Notebooks</span>
        </div>
        <IoIosArrowDown/>
      </h2>
      <div className="sec-content">
        <FolderList />
        <FolderAdd />
      </div>
    </section>
  );
}

export default Notebooks;
