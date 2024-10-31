import { VscTag } from "react-icons/vsc";
import TagAdd from "./TagAdd";
import TagList from "./TagList";
import { IoIosArrowDown } from "react-icons/io";


function Tags() {
  return (
    <section className="sec-container">
      <h2 className="sec-title group relative flex items-center justify-between">
      <div className="flex items-center gap-2">

        <VscTag className="text-xl"  />
        <span>Tags</span>
        </div>
        <IoIosArrowDown/>

      </h2>
      <div className="sec-content">
        <TagList />
        <TagAdd />
      </div>
    </section>
  );
}

export default Tags;
