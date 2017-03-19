import React, { PropTypes } from 'react';
import Layer from 'grommet/components/Layer';
import Form from 'grommet/components/Form';
import FormField from 'grommet/components/FormField';
import TextInput from 'grommet/components/TextInput';
import Button from 'grommet/components/Button';
import Footer from 'grommet/components/Footer';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';

const InquiryForm = ({ hidden, onClose, onSubmit }) => (
	<Layer closer onClose={onClose} hidden={hidden}>
		<Form onSubmit={onSubmit}>
			<Header>
				<Heading>KY Inquiries</Heading>
			</Header>
			<FormField label="Name">
				<TextInput name="name" />
			</FormField>
			<FormField label="Email">
				<TextInput name="email" />
			</FormField>
			<FormField label="Inquiry">
				<textarea rows="5" name="inquiry" />
			</FormField>
			<Footer pad={{ vertical: 'medium' }} justify="end">
				<Button type="submit" label="Submit" onClick={() => console.log()} />
			</Footer>
		</Form>
	</Layer>
);

InquiryForm.propTypes = {
	onClose: PropTypes.func.isRequired,
	onSubmit: PropTypes.func.isRequired,
	hidden: PropTypes.bool.isRequired
};

export default InquiryForm;
