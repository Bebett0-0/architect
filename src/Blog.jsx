import { Routes, Route } from 'react-router-dom';
import { Header, Footer } from './components';
import styled from 'styled-components';

const AppColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 1000px;
  min-height: 100%;
  background-color: #fff;
  margin: 0 auto;
`;

const Content = styled.div`
  padding: 120px 0;
`;

const H2 = styled.h2`
  text-align: center;
`;

function Blog() {
  return (
    <AppColumn>
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
    </AppColumn>
  );
}

export default Blog;
