import { Editor } from "@tiptap/react"
import { addFileInfo, getFileUrl, uploadFileToPad } from "../../services/files"
import { useEffect } from "react"
import { message } from "../message"
import { Timestamp } from "firebase/firestore"
import { useAuth } from "../../hooks/useAuth"
import { hasReachedSizeLimit } from "../../services/plans"

function loadXHR(url: string) {
  return new Promise<Blob>(function (resolve, reject) {
    try {
      var xhr = new XMLHttpRequest()
      xhr.open("GET", url)
      xhr.responseType = "blob"
      xhr.onerror = function () {
        reject("Network error.")
      }
      xhr.onload = function () {
        if (xhr.status === 200) {
          resolve(xhr.response)
        } else {
          reject("Loading error:" + xhr.statusText)
        }
      }
      xhr.send()
    } catch (err) {
      console.log(err)
    }
  })
}

interface Props {
  id: string
  editor: Editor
}

export default function PadDropZone({ id, editor }: Props) {
  const { user } = useAuth()

  const toggleDragOverEffect = (bool: boolean) => {
    const box = document.querySelector(".tiptap-box")
    if (!box) return
    const classList = box.classList
    const className = "is-dragging-over"

    bool ? classList.add(className) : classList.remove(className)
  }

 

  useEffect(() => {
    const upload = (blob: Blob, name: string) => {
      const size = blob.size / 1024 / 1024 // MB
      if (!user) return

      if (size >= 3) {
        message.error(
          "The image size exceeds 3mb. Please attach a smaller image"
        )
        return
      }

      const randomID = new Date().getTime()
      const randName = `${randomID}-${name}`

      editor.chain().focus().addUploading(randName).run()

      uploadFileToPad(randName, blob)
        .then((res) => {
          toggleDragOverEffect(false)
          getFileUrl(res).then((src) => {
            const path = `pads/${user.uid}/${randName}`
            addFileInfo({
              name: name,
              size: size,
              type: blob.type,
              url: src,
              path: path,
              padId: id,
              createdAt: Timestamp.now(),
              createdBy: user.uid,
              source: "CONTENT-IMAGE",
            })

            editor.chain().removeUploading(randName, src).run()
          })
        })
        .catch(() => {
          toggleDragOverEffect(false)
        })
    }
   

    const onPaste = (ev: ClipboardEvent) => {
      if (!ev.clipboardData || !ev.clipboardData.items) return
      const items = ev.clipboardData.items

      for (let i = 0; i < items.length; i++) {
        const item = items[i]
        if (!item.type.includes("image")) break

        const blob = item.getAsFile()

        blob && upload(blob, new Date().getTime().toString())
      }
    }

    document.addEventListener("paste", onPaste)

    return () => {
        document.removeEventListener("paste", onPaste)
    }
  }, [id, editor, user])

  return <></>
}
