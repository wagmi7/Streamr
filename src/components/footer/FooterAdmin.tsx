/*eslint-disable*/

import { Flex, Link, List, ListItem, Text, useColorModeValue } from '@chakra-ui/react';

export default function Footer() {
	return (
		<Flex
			zIndex='3'
			flexDirection={{
				base: 'column',
				xl: 'row'
			}}
			alignItems={{
				base: 'center',
				xl: 'start'
			}}
			justifyContent='space-between'
			px={{ base: '30px', md: '50px' }}
			pb='30px'>
			<h3>Made with 💓 for LW3 Bounty</h3>
		</Flex>
	);
}
