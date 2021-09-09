const urlRegex = /(?<=\/\/).+?(?=\/)/g

const shortenUrl = (url: string) => {
  return url && url.match(urlRegex)
}

export default shortenUrl
