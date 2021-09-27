import { useState } from "react"
import {
  ControllerContainer,
  InputText,
  DarkModeButton,
} from "src/styles/StoryController.style"
import IconSun from "src/assets/icons/IconSun.svg"

const StoryController = (props: any) => {
  const { darkMode, setDarkMode } = props

  const handleCheckbox = () => {
    setDarkMode(!darkMode)
  }

  return (
    <ControllerContainer>
      <InputText type="text" placeholder="Search..." />
      <DarkModeButton onClick={handleCheckbox}>
        <IconSun />
      </DarkModeButton>
    </ControllerContainer>
  )
}

export default StoryController
