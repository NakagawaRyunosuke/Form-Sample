import React, {useState} from 'react'
import { Button, FormControl, FormLabel, Heading, HStack, Input, Radio, RadioGroup, VStack } from '@chakra-ui/react'


export const Form = ({showToast}) => {
    const [name, setName] = useState("")
    const [sex, setSex] = useState("")
    const [birthday, setBirthday] = useState("")
    const [tel, setTel] = useState("")

    const nameIsError = name === ""
    const sexIsError = sex === ""
    const birthdayIsError = birthday === ""
    const telIsError = tel === ""

    const sendData = () => {
        if(!nameIsError && !sexIsError && !birthdayIsError && !telIsError){
            const profile = {
                name: name,
                sex: sex,
                birthday: birthday,
                tel: tel
            }

            console.log(profile)

            setName("")
            setBirthday("")
            setTel("")

            const errorFlag = false
            showToast(errorFlag)
        }else{
            const errorFlag = true
            showToast(errorFlag)
        }

    }

    return (
        <VStack p={10} mx="30%" mt="20px" border="2px" borderColor="gray.300">
            <Heading color="blue.500" width="100%" fontSize="5xl" borderBottom="2px" borderColor="gray.200">登録情報入力フォーム</Heading>
            <VStack width="60%">
                <FormControl pt={5} pb={3} isRequired isInvalid={nameIsError}>
                    <FormLabel>氏名</FormLabel>
                    <Input type="text" value={name} onChange={(e) => {setName(e.target.value)}} />
                </FormControl>

                <FormControl py={3} isRequired isInvalid={sexIsError}>
                    <FormLabel>性別</FormLabel>
                    <RadioGroup>
                        <HStack>
                            <Radio 
                            value="男性" 
                            checked={sex} 
                            onChange={(e) => {setSex(e.target.value)}}
                            >男性</Radio>
                            <Radio 
                            value="女性" 
                            checked={sex} 
                            onChange={(e) => {setSex(e.target.value)}}
                            >女性</Radio>
                            <Radio 
                            value="その他" 
                            checked={sex} 
                            onChange={(e) => {setSex(e.target.value)}}>その他</Radio>
                        </HStack>
                    </RadioGroup>
                </FormControl>

                <FormControl py={3} isRequired isInvalid={birthdayIsError}>
                    <FormLabel>生年月日</FormLabel>
                    <Input type="date" value={birthday} onChange={(e) => {setBirthday(e.target.value)}} />
                </FormControl>

                <FormControl py={3} isRequired isInvalid={telIsError}>
                    <FormLabel>電話番号</FormLabel>
                    <Input type="tel" value={tel} placeholder='ハイフン無し' onChange={(e) => setTel(e.target.value)} />
                </FormControl>

                <FormControl pt={3} pb={0}>
                    <Button
                        bgColor="blue.500"
                        color="white"
                        border="none" 
                        borderRadius="9999px"
                        size="lg"
                        onClick={sendData}
                    >送信</Button>
                </FormControl>
            </VStack>
        </VStack>
    )
}
