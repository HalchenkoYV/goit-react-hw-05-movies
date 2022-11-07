import { Wrapper, Input, Icon, Btn } from "./SearchBox.styled";

export const SearchBox = ({  handleSubmit }) => {
  return (
    <Wrapper onSubmit={(e) => handleSubmit(e)}>
      <Input
        type="text"
        name="query"
      />
        <Btn type='submit'><Icon/></Btn>
    </Wrapper>
  );
};