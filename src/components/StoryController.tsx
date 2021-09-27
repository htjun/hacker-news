import { useState } from "react"
import {
  ControllerContainer,
  InputText,
} from "src/styles/StoryController.style"

const StoryController = (props: any) => {
  const { setDarkMode } = props
  const [checked, setChecked] = useState(false)

  const handleCheckbox = () => {
    setChecked(!checked)
    setDarkMode(!checked)
  }

  return (
    <ControllerContainer>
      <InputText type="text" placeholder="Search..." />
      <input type="checkbox" checked={checked} onClick={handleCheckbox} />
    </ControllerContainer>
  )
}

export default StoryController
