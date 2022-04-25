import React from 'react';
import { Container  } from '../../components/FormComponents/index';
import TopBar from '../../components/topBar/index.js';

function Tests() {

	return (
		<Container>
			<TopBar hideLogout={false} />
		</Container>
	);
}

export default Tests;