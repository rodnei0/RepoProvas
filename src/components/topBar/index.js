
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logoImage from '../../assets/images/logo.png';
import logoutImage from '../../assets/images/logout.png';
import useAuth from '../../hooks/useAuth';

export function TopBar({hideLogout}) {
    const { logout } = useAuth();
	const navigate = useNavigate();

    function makeLogout() {
        logout();
        navigate('/');
    }

    return (
        <Top hideLogout={hideLogout}>
            <img src={logoImage} alt='logo' />
            <div onClick={makeLogout}>
                <img src={logoutImage} alt='logout'/>
            </div>
        </Top>
    ) 
}

export default TopBar;

const Top = styled.div`
    display: flex;
    justify-content: ${p => p.hideLogout? 'center' : 'space-between'};
    align-items: center;

    position: fixed;
    top: 65px;

    width: 100vw;

    div {
        display: ${p => p.hideLogout? 'none' : 'flex'};

        img {
            height: 36px;
        }
    }
`;