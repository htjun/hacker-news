import { useState, useEffect } from "react"
import { Overay, ModalContainer } from "src/styles/Modal.style"

const Modal = (props: any) => {
  const { hideStory, activeStory } = props
  const [currentStory, setCurrentStory] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const fetchUrl = `https://hacker-news.firebaseio.com/v0/item/${activeStory}.json`
      const response = await fetch(fetchUrl)
      const responseJson = await response.json()

      setCurrentStory(responseJson)
    }

    fetchData()
  }, [activeStory])

  return (
    <>
      <Overay onClick={hideStory}>
        <ModalContainer>
          {currentStory && (
            <>
              <h1>{currentStory.title}</h1>
              <article
                dangerouslySetInnerHTML={{ __html: currentStory.text }}
              />
            </>
          )}
        </ModalContainer>
      </Overay>
    </>
  )
}

export default Modal
