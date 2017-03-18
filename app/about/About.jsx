import React from 'react';
import Hero from 'grommet/components/Hero';
import Box from 'grommet/components/Box';
import Paragraph from 'grommet/components/Paragraph';
import Heading from 'grommet/components/Heading';
import Image from 'grommet/components/Image';
import Section from 'grommet/components/Section';

const paragraphStyle = {
	maxWidth: 'none'
};

const About = () => (
	<Section pad={{ between: 'small' }}>
		<Hero background={<Image src="https://placehold.it/1152x576" fit="cover" />} />
		<Box direction="row" pad={{ between: 'large' }}>
			<Box size="large">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Si quae forte-possumus.
				Omnia contraria, quos etiam insanos esse vultis. Ut aliquid scire se gaudeant?
			</Box>
			<Box full="horizontal">
				<Heading>Your Partners</Heading>
				<Paragraph style={paragraphStyle}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac tamen, ne cui
					loco non videatur esse responsum, pauca etiam nunc dicam ad reliquam
					orationem tuam. Dicet pro me ipsa virtus nec dubitabit isti vestro beato M.
					Quid, si non modo utilitatem tibi nullam afferet, sed iacturae rei familiaris
					erunt faciendae, labores suscipiendi, adeundum vitae periculum? Duo Reges:
					constructio interrete. Videmus igitur ut conquiescere ne infantes quidem
					possint. Non minor, inquit, voluptas percipitur ex vilissimis rebus quam ex
					pretiosissimis. Quamquam haec quidem praeposita recte et reiecta dicere
					licebit. Primum divisit ineleganter; Ita fit beatae vitae domina fortuna,
					quam Epicurus ait exiguam intervenire sapienti. Aderamus nos quidem adolescentes,
					sed multi amplissimi viri, quorum nemo censuit plus Fadiae dandum, quam posset
					ad eam lege Voconia pervenire. Satisne igitur videor vim verborum tenere, an
					sum etiam nunc vel Graece loqui vel Latine docendus?
				</Paragraph>
			</Box>
		</Box>
		<Box direction="row" pad={{ between: 'medium', vertical: 'large' }}>
			<Box colorIndex="newtral-4-a">
				<Image src="https://placehold.it/450x700" fit="cover" />
			</Box>
			<Box>
				<Heading>Your Crafters</Heading>
				<Paragraph>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac tamen, ne cui loco
					non videatur esse responsum, pauca etiam nunc dicam ad reliquam orationem tuam.
					Dicet pro me ipsa virtus nec dubitabit isti vestro beato M. Quid, si non modo
					utilitatem tibi nullam afferet, sed iacturae rei familiaris erunt faciendae,
					labores suscipiendi, adeundum vitae periculum? Duo Reges: constructio interrete.
					Videmus igitur ut conquiescere ne infantes quidem possint. Non minor, inquit,
					voluptas percipitur ex vilissimis rebus quam ex pretiosissimis. Quamquam haec
					quidem praeposita recte et reiecta dicere licebit. Primum divisit ineleganter;
					Ita fit beatae vitae domina fortuna, quam Epicurus ait exiguam intervenire sapienti.
					Aderamus nos quidem adolescentes, sed multi amplissimi viri, quorum nemo censuit
					plus Fadiae dandum, quam posset ad eam lege Voconia pervenire. Satisne igitur
					videor vim verborum tenere, an sum etiam nunc vel Graece loqui vel Latine docendus?
				</Paragraph>
				<Paragraph>
					<strong>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cur deinde Metrodori
						liberos commendas? Quo igitur, inquit, modo? Duo Reges: constructio interrete.
						Si longus, levis. Scrupulum, inquam, abeunti; Non igitur bene.
					</strong>
				</Paragraph>
			</Box>
		</Box>
	</Section>
);

export default About;
