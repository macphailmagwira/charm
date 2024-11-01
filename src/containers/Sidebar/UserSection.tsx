import { useEffect, useState } from "react";
import { useCurrentUser } from "../../hooks/useCurrentUser";
import { showUpdateModal } from "../../store/modal";
import Settings from "../Settings";

function UserSection() {
  const [updateAvailable, setUpdateAvailable] = useState(false);
  const [version, setVersion] = useState("");
  const { info } = useCurrentUser();
  //console.log

  /*
  TODO: When were ready to support desktop, this might be useful, so keeping this here
  useEffect(() => {
    if (isApp) {
      getVersion().then((version) => {
        setVersion(version);
      });

      listen("tauri://update-available", function(res) {
        console.log("tauri://update-available", res);
        setUpdateAvailable(true);
      });

      emit("tauri://update");
    }
  }, [isApp]);*/


  return (
    <div className="user-settings h-[66px]">
      <div className="flex-shrink-0 group block">
        <div className="flex items-center">
          <div>
            <img
              className="inline-block h-9 w-9 rounded-full"
              src={info?.photoURL}
              alt=""
            />
          </div>
          <div className="ml-3">
            <p className="usetting-fullname">
              {info?.fullname}
            </p>
            <div>
              <p className="usetting-email">
              {info?.email}
            </p>

          
            </div>
          </div>
        </div>
      </div>

      <Settings />
    </div>
  );
}

export default UserSection;
