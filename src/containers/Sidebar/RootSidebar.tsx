import ScrollBar from "../../components/ScrollBar";
import Category from "../Category";
import Notebooks from "../Folders";
import ShortcutModal from "../Settings/ShortcutModal";
import Tags from "../Tags";
import UserSection from "./UserSection";
import PadSearchIcon from "../PadSearch/PadSearchIcon";
import PadNew from "../Pads/PadNew";
import Home from "../Home";
import Notes from "../Notes";
import Trash from "../Trash";

function RootSidebar() {
  return (
    <div className="root-sidebar">
      {/*
      TODO: removing this header for now, will later decide if required
      <div className="flex justify-between items-center px-4 h-[44px]">
        <h2 className="brand-name">Kompad</h2>
      </div>*/}
      <UserSection />

      {/* 
      FIXME: Find a better way of incapulsating search */}

      <div className="px-3 mt-4 mb-4"> 
      <PadSearchIcon />
      <PadNew />
      </div>
      <ScrollBar height="calc(100vh - 61px - 44px)">
        
      
        <Home/>
        {/*<Notes/>*/}
        <Category />

        <Notebooks/>
        <Tags />
        <Trash/>
      </ScrollBar>
      <ShortcutModal />
    </div>
  );
}

export default RootSidebar;
