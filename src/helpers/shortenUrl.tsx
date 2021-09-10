const urlRegex = /\/\/[www.]*(.*?)\//

const shortenUrl = (url: any) => {
  const match = url.match(urlRegex)

  return match && match[1]
}

export default shortenUrl
