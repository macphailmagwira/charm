import { HiOutlinePlus, HiArrowDown } from "react-icons/hi";
import Button from "../../components/Button";
import { usePadStore } from "../../store";
import PadNewModal from "./PadNewModal";

function PadNew() {
  const openPadModal = usePadStore((state) => state.setNewPadModalStatus);

  const createNewPad = async () => {
    openPadModal(true);
  };

  return (
    <div className="mt-2">
      <Button onClick={createNewPad} size="px-1.5 py-1.7" className="w-full">
        <div className="flex items-center w-full">
          <HiOutlinePlus className="h-3 mx-3" aria-hidden="true" />
          <span>Create a new Note</span>
          <></>
        
        </div>
      </Button>
      <PadNewModal />
    </div>
  );
}

export default PadNew;
