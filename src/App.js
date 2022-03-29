import { Button,Box } from '@chakra-ui/react';
import './App.css';
import { Header } from './components/Header';

function App() {
  return (
    <Box w='100%' h= '1000px' bgGradient='linear(to-b, #82c1f5, blue.500, #0c0d45 )'>
        <Box ml="5%" mr='10%'>
            <Header/> 
        </Box>
        
    </Box>
  );
}

export default App;
