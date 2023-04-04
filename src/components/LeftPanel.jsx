import { Box, Flex } from '@chakra-ui/react';
import { ChatList } from './ChatList';
import { Header } from './Header';
import { SearchPanel } from './SearchPanel';

export function LeftPanel(props) {
  return (
    <Flex direction='column' w='30%' {...props}>
      <Box>
        <Header />
        <SearchPanel />
      </Box>
      <ChatList flex='1' overflow='auto' />
    </Flex>
  );
}
