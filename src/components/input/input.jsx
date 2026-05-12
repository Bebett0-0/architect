import styled from 'styled-components';
import { forwardRef } from 'react';

const InputContainer = forwardRef(({ className, ...props }, ref) => {
  return <input className={className} {...props} ref={ref} />;
});

export const Input = styled(InputContainer)`
  height: 40px;
  width: 250px;
  padding: 0 10px;
  margin-bottom: 20px;
  color: #000;
  background-color: #fff;
  border: 2px solid #030303;
`;
