import React, { PropTypes } from 'react';
import Section from 'grommet/components/Section';
import Box from 'grommet/components/Box';
import Headline from 'grommet/components/Headline';
import Heading from 'grommet/components/Heading';
import Anchor from 'grommet/components/Anchor';
import Paragraph from 'grommet/components/Paragraph';
import Columns from 'grommet/components/Columns';
import Accordion from 'grommet/components/Accordion';
import AccordionPanel from 'grommet/components/AccordionPanel';

import GroupIcon from 'grommet/components/icons/base/Group';
import CartIcon from 'grommet/components/icons/base/Cart';
import SendIcon from 'grommet/components/icons/base/Send';

import InquiryForm from './InquiryForm';

const Contact = ({ hidden, onClickInquiry, onSubmitInquiry }) => (
	<Section pad={{ between: 'large', vertical: 'large' }}>
		<Headline size="small" align="center" strong>WE'RE HERE WITH YOU</Headline>
		<InquiryForm onClose="" onSubmit={onSubmitInquiry} hidden={hidden} />
		<Columns justify="center" size="small">
			<Box align="center" pad={{ horizontal: 'large' }}>
				<CartIcon size="large" />
				<Paragraph align="center">
					<strong>HELP WITH YOUR ORDER</strong>
				</Paragraph>
			</Box>
			<Box align="center" pad={{ horizontal: 'large' }}>
				<Anchor onClick={onClickInquiry}>
					<SendIcon size="large" />
				</Anchor>
				<Anchor onClick={onClickInquiry}>
					<Paragraph align="center">
						<strong>EMAIL US AN INQUIRY</strong>
					</Paragraph>
				</Anchor>
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
				{/*<AccordionPanel heading={<Heading tag="h3" align="center">What is your policy for returning/exchaging items?</Heading>}>*/}
					{/*Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor*/}
					{/*incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud*/}
					{/*exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.*/}
				{/*</AccordionPanel>*/}
				<AccordionPanel heading={<Heading tag="h3" align="center">Do you have a physical store?</Heading>}>
					None, as of now.
				</AccordionPanel>
			</Accordion>
		</Section>
	</Section>
);

Contact.propTypes = {
	onClickInquiry: PropTypes.func.isRequired,
	onSubmitInquiry: PropTypes.func.isRequired,
	hidden: PropTypes.bool.isRequired
};

export default Contact;
