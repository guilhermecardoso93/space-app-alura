/* eslint-disable react/prop-types */
import styled from "styled-components";

export function ItemLista(props) {
  return (
    <ItemListaLi>
      <img src={props.ativo ? props.iconeAtivo : props.iconeInativo} alt="" />
      {props.children}
    </ItemListaLi>
  );
}

const ItemListaLi = styled.li`
  font-size: 24px;
  line-height: 29px;
  margin-bottom: 30px;
  cursor: pointer;
  color: ${(props) => (props.$ativo ? "#7B78E5" : "#D9D9D9")};
  font-family: ${(props) =>
    props.$ativo ? "GandhiSansBold" : "GandhiSansRegular"};
  display: flex;
  align-items: center;
  gap: 22px;
`;
