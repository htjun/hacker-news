import { useState, useEffect } from "react"
import styled from "styled-components"

const BgDimmer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  left: 0;
  top: 0;
`

const ModalContainer = styled.div`
  margin: 48px auto;
  max-width: 80vw;
  background-color: #fff;
`

const Modal = (props: any) => {
  const { modalOn, hideStory, activeStory } = props
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
      {modalOn && (
        <BgDimmer onClick={hideStory}>
          <ModalContainer>
            {currentStory && (
              <article
                dangerouslySetInnerHTML={{ __html: currentStory.text }}
              />
            )}
          </ModalContainer>
        </BgDimmer>
      )}
    </>
  )
}

export default Modal
