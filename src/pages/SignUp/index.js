import React, { useState } from 'react';
import authApi from '../../services/api.auth';

import { Container, Form, Input, Button, StyledLink } from '../../components/FormComponents/index';
import TopBar from '../../components/topBar/index.js';
import { useNavigate } from 'react-router';

function SignUp() {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
		confirmPassword: ''
	});
	const navigation = useNavigate();

	function handleChange({ target }) {
		setFormData({ ...formData, [target.name]: target.value });
	}

	async function handleSubmit(e) {
		e.preventDefault();

		if (formData.password !== formData.confirmPassword) {
			alert("As senhas devem ser iguais");
			return;
		}

		const user = { ...formData };
		delete user.confirmPassword;

		try {
			await authApi.createUser(user);
			navigation('/');
		} catch (error) {
			alert(error.response.data);
		}
	}

	return (
		<Container>
			<TopBar hideLogout={true} />
			<Form onSubmit={handleSubmit}>
				<Input
					placeholder="E-mail"
					type="email"
					onChange={(e) => handleChange(e)}
					name="email"
					value={formData.email}
					required
				/>
				<Input
					placeholder="Senha"
					type="password"
					onChange={(e) => handleChange(e)}
					name="password"
					value={formData.password}
					required
				/>
				<Input
					placeholder="Confirme sua senha"
					type="password"
					onChange={(e) => handleChange(e)}
					name="confirmPassword"
					value={formData.confirmPassword}
					required
				/>
				<div>
					<StyledLink to="/">Já possuo cadastro</StyledLink>
					<Button type="submit">CADASTRAR</Button>
				</div>
			</Form>
		</Container>
	);
}

export default SignUp;