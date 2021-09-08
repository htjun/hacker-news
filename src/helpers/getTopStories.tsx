const baseUrl = "https://hacker-news.firebaseio.com/v0/"
const topStoriesUrl = `${baseUrl}topstories.json`
const storyUrl = `${baseUrl}item/`

const getTopStories = async () => {
  const topStoriesResponse = await fetch(topStoriesUrl)
  const topStoriesResponseJson = await topStoriesResponse.json()
  const topStories = await Promise.all(
    topStoriesResponseJson.map(async (storyNumber: number) => {
      const storyResponse = await fetch(`${storyUrl}${storyNumber}.json`)
      return storyResponse.json()
    })
  )
  return topStories
}

export default getTopStories
