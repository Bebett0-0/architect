import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

const Content = styled.div`
  padding: 120px 0;
`;

const H2 = styled.h2`
  text-align: center;
`;

const Header = () => <div>Header</div>;

const Footer = () => <div>Footer</div>;

function Blog() {
  return (
    <>
      <Header />
      <Content>
        <H2>Content page</H2>
        <Routes>
          <Route path="/" element={<div>MainPage</div>} />
          <Route path="/login" element={<div>Autorization</div>} />
          <Route path="/register" element={<div>Register</div>} />
          <Route path="/users" element={<div>Users</div>} />
          <Route path="/post/:postId" element={<div>Post</div>} />
          <Route path="/post" element={<div>NewPost</div>} />
          <Route path="/*" element={<div>Error</div>} />
        </Routes>
      </Content>
      <Footer />
    </>
  );
}

export default Blog;
