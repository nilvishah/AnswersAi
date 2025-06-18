import React from "react";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useAuth } from "../context";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const WelcomeText = styled.p`
  color: white;
  font-size: 1rem;
`;

const Button = styled.button<{ variant?: "login" | "logout" }>`
  padding: 0.5rem 1.5rem;
  border-radius: 8px;
  font-weight: 500;
  color: white;
  border: 1px solid ${({ variant }) => (variant === "logout" ? "#b91c1c" : "#166534")};
  background: ${({ variant }) => (variant === "logout" ? "#dc2626" : "#22c55e")};

  &:hover {
    background: ${({ variant }) => (variant === "logout" ? "#b91c1c" : "#166534")};
  }
`;

const LoginButtons: React.FC = () => {
  const { user } = useAuth();

  const handleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).catch((error) => {
      console.error("Login failed", error);
    });
  };

  const handleLogout = () => {
    signOut(auth).catch((error) => {
      console.error("Logout failed", error);
    });
  };

  return (
    <Container>
      {user ? (
        <>
          <WelcomeText>Welcome, {user.displayName}</WelcomeText>
          <Button variant="logout" onClick={handleLogout}>
            Log out
          </Button>
        </>
      ) : (
        <Button variant="login" onClick={handleLogin}>
          Log in with Google
        </Button>
      )}
    </Container>
  );
};

export default LoginButtons;
