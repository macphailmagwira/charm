import { Outlet } from "react-router-dom"
import Sidebar from "../../containers/Sidebar"
import Shortcut from "../Shortcut/Shortcut"
import ThemeSelection from "../../containers/Theme/ThemeSelection"
import AppMiddleware from "../../providers/AppMiddleware"
import CommandPalletes from "../../containers/CommandPalletes"
import { PadShareModal } from "../../containers/PadActions/PadShareModal"

export default function Layout() {
  return (
    <AppMiddleware>
      <>
        <CommandPalletes />
        <Sidebar />
        <main className="main-content">
          <Outlet />
        </main>
        <Shortcut />
        <ThemeSelection />
        <PadShareModal />
      </>
    </AppMiddleware>
  )
}
