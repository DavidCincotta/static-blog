import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '../src/Link';
import ProTip from '../src/ProTip';
import Header from '../src/Header';
import Footer from '../src/Footer';

export default function About() {
		const linkClass=" text-sm transition duration-300 text-purpleDark hover:text-[#2EA1D8] dark:text-darkError dark:hover:text-darkInfo "
  return (
    <>
	<Header />
    <Container maxWidth="lg">
		<Link href="/" className={linkClass}> Go to the index page </Link>
    </Container>
	<Footer />
	</>
  );
}
