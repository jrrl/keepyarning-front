import React from 'react';
import Section from 'grommet/components/Section';
import Box from 'grommet/components/Box';
import Headline from 'grommet/components/Headline';
import Heading from 'grommet/components/Heading';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';
import Paragraph from 'grommet/components/Paragraph';
import Columns from 'grommet/components/Columns';
import Accordion from 'grommet/components/Accordion';
import AccordionPanel from 'grommet/components/AccordionPanel';

import GroupIcon from 'grommet/components/icons/base/Group';
import CartIcon from 'grommet/components/icons/base/Cart';
import SendIcon from 'grommet/components/icons/base/Send';

const Contact = () => (
	<Section pad={{ between: 'large', vertical: 'large' }}>
		<Headline size="small" align="center" strong>WE'RE HERE WITH YOU</Headline>
		<Columns justify="center" size="small">
			<Box align="center" pad={{ horizontal: 'large' }}>
				<CartIcon size="large" />
				<Paragraph align="center">
					<strong>HELP WITH YOUR ORDER</strong>
				</Paragraph>
			</Box>
			<Box align="center" pad={{ horizontal: 'large' }}>
				<SendIcon size="large" />
				<Paragraph align="center">
					<strong>EMAIL US AN INQUIRY</strong>
				</Paragraph>
			</Box>
			<Box align="center" pad={{ horizontal: 'large' }}>
				<GroupIcon size="large" />
				<Paragraph align="center">
					<strong>WORK WITH US</strong>
				</Paragraph>
			</Box>
		</Columns>
		<Section pad={{ between: 'large', vertical: 'large' }}>
			<Heading tag="h3" strong align="center">FAQS</Heading>
			<Accordion openMulti>
				<AccordionPanel heading={<Heading tag="h3" align="center">How do I place an order?</Heading>}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
					incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
					exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
				</AccordionPanel>
				<AccordionPanel heading={<Heading tag="h3" align="center">What are my payment options?</Heading>}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
					incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
					exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
				</AccordionPanel>
				<AccordionPanel heading={<Heading tag="h3" align="center">How will my orders be shipped?</Heading>}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
					incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
					exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
				</AccordionPanel>
				<AccordionPanel heading={<Heading tag="h3" align="center">What is your policy for returning/exchaging items?</Heading>}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
					incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
					exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
				</AccordionPanel>
				<AccordionPanel heading={<Heading tag="h3" align="center">Do you have a physical store?</Heading>}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
					incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
					exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
				</AccordionPanel>
			</Accordion>
		</Section>
	</Section>
);

export default Contact;
