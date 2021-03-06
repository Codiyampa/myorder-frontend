import React from 'react';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';
import PageTemplate from '../templates/PageTemplate';

const Contact = () => {
	return (
		<PageTemplate header={<Header />} footer={<Footer />}>
			<div class="main-wrapper">
				<div class="ant-row">
					<div class="ant-col ant-col-xs-24 ant-col-sm-24 ant-col-md-18 ant-col-lg-18 ant-col-xl-19 ant-col-xxl-20">
						<section class="main-container">
							<h2>Kontakt</h2>

							<h2>Impressum</h2>

							<h2>Datenschutz</h2>
						</section>
					</div>
				</div>
			</div>
		</PageTemplate>
	)
}

export default Contact;