import React, { Component } from 'react';
import autobind from 'react-autobind';

import Contact from './Contact';

const showInquiryForm = () => {
	return {
		hidden: false
	};
};

const closeInquiryForm = () => {
	return {
		hidden: true
	};
};

class ContactContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hidden: true
		};
		autobind(this);
	}

	handleClickInquiry() {
		this.setState(showInquiryForm);
	}

	handleSubmitInquiry(event) {
		event.preventDefault();
		console.log(event.target.name.value);
		console.log(event.target.email.value);
		console.log(event.target.inquiry.value);
		this.setState(closeInquiryForm);
	}

	render() {
		return (
			<Contact
				onClickInquiry={this.handleClickInquiry}
				onSubmitInquiry={this.handleSubmitInquiry}
				hidden={this.state.hidden}
			/>
		);
	}
}

export default ContactContainer;
