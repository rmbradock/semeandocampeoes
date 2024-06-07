import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import './MyPhoneButton.css'

interface Props {
  value?: string
  onChange?: (value: string, data: any, event: React.ChangeEvent<HTMLInputElement>, formattedValue: string) => void
}

const MyPhoneButton = ({ value, onChange }: Props) => {
  return (
    <PhoneInput
      inputStyle={{
        width: "100%",
        height: "8.5vh",
        padding: "0vh 0vh 0vh 8vh",
        fontSize: "2.6vh",
        border: "solid .3vh black",
        borderBottom: "solid .3vh black",
        borderRadius: ".6vh",
      }}
      placeholder=''
      country={"br"}
      inputProps={{ required: true }}
      onChange={onChange}
      value={value}
    />
  )
}

export default MyPhoneButton