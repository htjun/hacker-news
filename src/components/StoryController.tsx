import { useState } from "react"
import {
  ControllerContainer,
  InputText,
  DarkModeButton,
} from "src/styles/StoryController.style"
import IconSun from "src/assets/icons/IconSun.svg"
import IconMoon from "src/assets/icons/IconMoon.svg"

const StoryController = (props: any) => {
  const { darkMode, setDarkMode } = props

  const handleCheckbox = () => {
    setDarkMode(!darkMode)
  }

  return (
    <ControllerContainer>
      <InputText type="text" placeholder="Search..." />
      <DarkModeButton onClick={handleCheckbox}>
        {darkMode ? <IconSun /> : <IconMoon />}
      </DarkModeButton>
    </ControllerContainer>
  )
}

export default StoryController
