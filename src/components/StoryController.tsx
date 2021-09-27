import { useState } from "react"
import {
  ControllerContainer,
  InputText,
} from "src/styles/StoryController.style"

const StoryController = (props: any) => {
  const { darkMode, setDarkMode } = props

  const handleCheckbox = () => {
    setDarkMode(!darkMode)
  }

  return (
    <ControllerContainer>
      <InputText type="text" placeholder="Search..." />
      <input type="checkbox" checked={darkMode} onClick={handleCheckbox} />
    </ControllerContainer>
  )
}

export default StoryController
