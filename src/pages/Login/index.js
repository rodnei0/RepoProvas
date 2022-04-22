import React, { useState, useEffect } from 'react';
import authApi from '../../services/api.auth';

import { Container, Form, Input, Button, StyledLink } from '../../components/FormComponents/index';
import TopBar from '../../components/topBar/index.js';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router';

function Login() {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});
	const { auth: { token }, login } = useAuth();
	const navigate = useNavigate();

	useEffect(() => {
		if (token) navigate('/discipline')
	}, [token, navigate])

	function handleChange({ target }) {
		setFormData({ ...formData, [target.name]: target.value });
	}

	async function handleSubmit(e) {
		e.preventDefault();

		const user = { ...formData };

		try {
			const { data } = await authApi.login(user);
			login(data);
			navigate('/discipline');
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
				<div>
					<StyledLink to="/sign-up">Não possuo cadastro</StyledLink>
					<Button type="submit">ENTRAR</Button>
				</div>
			</Form>
		</Container>
	);
}

export default Login;