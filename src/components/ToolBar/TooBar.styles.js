import { css } from "@emotion/react";
import mq from "../../styles/media";
import sortImg from '../../assets/icons/ic_sort.png';

export const toolbarStyle = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;

  ${mq({
    marginTop: ['2.4rem', '4rem', '4rem', '4rem', '4rem'],
  })}
`;

export const titleStyle = css`
  flex: 1;

  ${mq({
    paddingLeft: ['0', '0', '1rem', '1rem', '1rem'],
  })}
`;

export const buttonStyle = css`
  order: 2;
`;

export const inputContainerStyle = css`
  position: relative;

  ${mq({
    order: ['3', '1', '1', '1', '1'],
  })}
`;

export const inputStyle = css`
  width: 32.5rem;
  height: 4.2rem;
  border-radius: 1.2rem;
  background-color: #F3F4F6;
  padding-left: 4.4rem;
  padding-block: 0.9rem;

  ${mq({
    width: ['28.8rem', '24.2rem', '24.2rem', '32.5rem'],
  })}
`;

export const selectStyle = css`
  width: 13rem;
  height: 4.2rem;
  text-align: center;
  border: 1px solid #E4E7EB;
  border-radius: 1.2rem;
  order: 4;
  background: url(${sortImg}) center center no-repeat;
  background-size: 2.4rem;
  text-indent: -9999px;

  ${mq({
    width: ['4.2rem', '13rem', '13rem', '13rem'],
    appearance: ['none', 'auto', 'auto', 'auto'], 
    background: [undefined, 'none', 'none', 'none', 'none'],
    textIndent: ['-9999px', '0', '0', '0', '0'],
  })}
`;

export const iconStyle = css`
  position: absolute;
  top: 50%;
  left: 5%;
  transform: translateY(-50%);
  width: 1.5rem;
  height: 1.5rem;
`;
