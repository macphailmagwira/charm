
import { useEffect } from "react"
import { useAuth } from "../../hooks/useAuth"
import {
  getUserSetting,
  updateThemeConfigFromUserSetting,
} from "../../services/user-settings"
import { useSettingStore } from "../../store/settings"
import { useThemeStore } from "../../store/themes"

interface Props {
  children: JSX.Element | JSX.Element[]
}

export default function ThemeSetting({ children }: Props) {
  const { user } = useAuth()
  const { setThemeList } = useThemeStore()
  const { themeCustomModal, toggleThemeCustomModal, themeCustomId } =
    useSettingStore()

  const updateUserThemeList = () => {
    console.log("updating theme list")
    getUserSetting().then((setting) => {
      console.log(setting)
      if (!setting || !setting.themes) return
      console.log("update theme")
      setThemeList(setting.themes)
    })
  }

  useEffect(() => {
    if (user?.uid) {
      updateThemeConfigFromUserSetting()
    }
  }, [user])


  return (
    <div id="theme-setting" className="flex transition">
      {children}
    </div>
  )
}
