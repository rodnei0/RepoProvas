
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	align-self: ${(props) => props.alignSelf || 'initial'};
	padding: 0px 25px;
`;

const Form = styled.form`
	width: 380px;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 12px;

	margin-bottom: 32px;

	div {
		display: flex;
		justify-content: space-between;
		align-items: center;

		width: 100%;
	}

	@media (max-width: 700px) {
		width: 100%;
	}
`;

const Input = styled.input`
	font-family: 'Poppins', sans-serif;

	width: 100%;

	border: 1px solid #C4C4C4;
	background: #FAFAFA;
	padding: 15px 16px;
	border-radius: 4px;

	::placeholder {
		color: #C4C4C4;
		font-family: 'Poppins', sans-serif;
		font-weight: 500;
		font-size: 16px;
		line-height: 24px;
	}
`;

const Button = styled.button`
	font-family: 'Roboto', sans-serif;

	cursor: pointer;

	color: #FFFFFF;
	font-weight: 500;
	font-size: 14px;
	line-height: 24px;
	text-align: center;

	padding: 6px 16px;
	
	background: #1976D2;
	border-radius: 4px;

	box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12);
`;

const StyledLink = styled(Link)`
	cursor: pointer;

	font-family: 'Poppins', sans-serif;
	color: #4673CA;
	font-weight: 500;
	font-size: 12px;
	line-height: 24px;
`;

export {
	Container,
	Form,
	Input,
	Button,
	StyledLink
}