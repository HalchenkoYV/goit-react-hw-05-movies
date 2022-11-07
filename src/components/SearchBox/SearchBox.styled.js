import styled from "styled-components";
import { HiSearch } from "react-icons/hi";

export const Wrapper = styled.form`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin-bottom: 16px;
  text-transform: uppercase;
`;

export const Input = styled.input`
  padding: 8px 32px 8px 8px;
  border-radius: 4px;
  font: inherit;
`;

export const Icon = styled(HiSearch)`
  width: 30px;
  height: 30px;
  position: absolute;
  top:0;
  left: 0;
`;

export const Btn = styled.button`
    width: 30px;
    height: 30px;
    background-Color:white;
    border:none;
    position: relative;
    cursor: pointer;
`;
