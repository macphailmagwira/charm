export const sendNotification = (message: string) => {
  const url = import.meta.env.VITE_DISCORD_WEBHOOK || ''

  if (!url) return

  console.log("start sending webhook discord")
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      content: message,
      avatar_url: "https://www.kompad.app/favicon.png",
      username: "Kompad",
    }),
  })
}
