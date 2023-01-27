import React from "react";
import styled from "styled-components";

function Login(props) {
    return (
        <Container>
            <Nav>
                <NavLink href="/">
                    <LogContainer>
                        <Logo
                            src={
                                require("../assets/images/login-logo.svg")
                                    .default
                            }
                            alt="logoImage"
                        />
                    </LogContainer>
                </NavLink>
            </Nav>
        </Container>
    );
}

export default Login;

const Container = styled.div`
    padding: 0;
`;
const Nav = styled.nav`
    max-width: 1128px;
    margin: auto;
    padding: 12px 0 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    flex-wrap: nowrap;
`;
const NavLink = styled.a`
    width: 135px;
    height: 34px;
    @media (max-width: 768px) {
        padding: 0 5px;
    }
`;
const LogContainer = styled.div``;
const Logo = styled.img`
    display: block;
    width: 100%;
`;
