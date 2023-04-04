import { Flex } from '@chakra-ui/react';
import { LeftPanel } from './components/LeftPanel';
import { RightPanel } from './components/RightPanel';

const App = () => {
  return (
    <Flex h='100vh'>
      <LeftPanel />
      <RightPanel />
    </Flex>
  );
};

export default App;
