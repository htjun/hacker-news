const urlRegex = /\/\/[www.]*(.*?)\//

const shortenUrl = (url: any) => {
  let shortenedUrl = []

  if (url) {
    shortenedUrl = url.match(urlRegex)
  }

  return shortenedUrl && shortenedUrl[1]
}

export default shortenUrl
