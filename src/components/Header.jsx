import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import styled from '@emotion/styled';


const Container = styled(AppBar)`
background: #060606;
height: 9vh;
`
const Header = () => {
    const logo = "https://mohamedelghandour.github.io/windows-10/img/codepen1600.png";
    return (
        <Container position='static'>
            <Toolbar>
                <img src={logo} alt="logo" style={{ width: 40 }} />
            </Toolbar>
        </Container>
    );
}
export default Header;
