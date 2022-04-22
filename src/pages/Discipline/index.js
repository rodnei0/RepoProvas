import React from 'react';
import { Container  } from '../../components/FormComponents/index';
import TopBar from '../../components/topBar/index.js';

function Discipline() {

	return (
		<Container>
			<TopBar hideLogout={false} />
		</Container>
	);
}

export default Discipline;