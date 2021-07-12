import { Container } from './styles';

import logo from '../../../assets/calculator.png';

export const Header = () => {
	return (
		<Container>
			<img
				src={logo}
				alt='Calculadora de Horas de Relógio de Ponto'
			/>
			<h1>Calculadora de Horas Trabalhadas (Relógio de Ponto)</h1>
		</Container>
	);
};
