import './App.css';
import { Form} from "./components/Form"
import { ChakraProvider, useToast } from "@chakra-ui/react"


function App() {
  const toast = useToast()

  const showToast = (errorFlag) => {
    if(errorFlag){
      toast({
        title: "送信失敗(;_;)",
        description: "未記入の項目が存在します。",
        duration: 2000,
        id: 1,
        isClosable: false,
        status: "error"
      })
    }else{
      toast({
        title: "送信完了('u'd)",
        description: "送信に成功しました。",
        duration: 2000,
        id: 2,
        isClosable: false,
        status: "success"
      })
    }
  }

  return (
    <div className="App">
      <div className='toast'></div>
      <ChakraProvider>
        <Form showToast={showToast} />
      </ChakraProvider>
    </div>
  );
}

export default App;
