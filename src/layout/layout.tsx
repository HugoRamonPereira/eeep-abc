import { Grid, GridItem } from '@chakra-ui/react';
import Header from '../components/header';
import Hero from '../components/hero';
import Footer from '../components/footer';

const Layout = () => {
	return (
		<Grid>
			<GridItem>
				<Header />
			</GridItem>
			<GridItem>
				<Hero />
			</GridItem>
			<GridItem>
				<Footer />
			</GridItem>
		</Grid>
	);
};

export default Layout;
