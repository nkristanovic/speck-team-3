import styled, { css } from 'styled-components';
import { colors, boxShadowFocus, breakpoints, transitionCubic } from './theme';
import TickIcon from '../../assets/images/tick-icon.png';
import DropdownIcon from '../../assets/images/dropdown-icon.png';

//Main
export const Main = styled.div`
  height: 100%;
  width: 100%;
  min-height: 100vh;
`;

//Input components
export const InputGeneral = css`
  height: 56px;
  border-radius: 4px;
  border: solid 1px ${colors.lightGrey};
  background-color: ${colors.white};
  font-size: 16px;
  padding: 0 16px;
  line-height: 1.5;

  &:focus {
    border-color: ${colors.blue};
    outline: none;
    box-shadow: ${boxShadowFocus};
  }

  width: ${(props) => (props.width ? props.width : '100%')};
`;

export const Input = styled.input`
  ${InputGeneral};
  padding: ${(props) => (props.forSearch ? '0 44px' : '16px')};
`;

export const Select = styled.select`
  ${InputGeneral};
  appearance: none;
  background: url(${DropdownIcon}) calc(100% - 19px) / 14px no-repeat
    ${colors.white};
`;

export const Option = styled.option`
  background-color: ${colors.white};
  color: ${colors.darkGrey};
`;

export const TextArea = styled.textarea`
  ${InputGeneral};
  font-family: 'HelveticaNeue', sans-serif;
  height: 112px;
`;

export const InputCheckbox = styled.input`
  display: none;
`;

//Labels
export const Label = styled.label`
  font-size: 16px;
  margin-bottom: 16px;
  display: inline-block;
  background-color: ${colors.white};
  font-weight: bold;
  color: ${colors.blue};
  background-color: transparent;
`;

export const ErrorLabel = styled.p`
  font-size: 14px;
  display: inline-block;
  color: ${colors.red};
  background-color: ${colors.white};
  padding-top: 8px;
`;

export const CheckboxOptionLabel = styled.label`
  font-size: 16px;
  line-height: 1.7;
  margin-bottom: 16px;
  padding-left: 35px;
  position: relative;
  display: inline-block;
  cursor: pointer;

  &::before {
    content: '';
    height: 24px;
    width: 24px;
    position: absolute;
    top: 0;
    left: 0;
    border: 2px solid ${colors.darkGrey};
    border-radius: 4px;
    background-color: ${colors.white};
  }

  [type='checkbox']:checked + &::after,
  [type='radio']:checked + &::after {
    content: '';
    height: 20px;
    width: 20px;
    position: absolute;
    top: 6px;
    left: 4px;
    background-image: url(${TickIcon});
    background-size: contain;
    background-repeat: no-repeat;
  }
`;

//Button components - moj dio
export const ButtonDefault = css`
  display: block;
  width: 288px;
  height: 56px;
  border-radius: 4px;
  text-decoration: none;
  background-color: ${colors.blue};
  font-size: 18px;
  font-weight: bold;
  line-height: 1.4;
  color: ${colors.white};
  border: none;
  transition: ${transitionCubic};

  &:hover {
    cursor: pointer;
    background-color: ${colors.darkBlue};
  }

  @media screen and (${breakpoints.tablet}) {
    width: 232px;
    height: 56px;
  }
`;

export const PrimaryButton = ({ text, type, onClick }) => {
  return (
    <PrimaryButtonStyle type={type} onClick={onClick}>
      {text}
    </PrimaryButtonStyle>
  );
};

export const PrimaryButtonStyle = styled.button`
  ${ButtonDefault};
  ${(props) => props.type === 'modal/card' && `width: 256px; height: 56px;`}
  ${(props) =>
    props.type === 'fullWidth' && `width:100% !important; height: 56px;`}

  @media screen and (${breakpoints.tablet}) {
    ${(props) => props.type === 'small' && `width: 104px; height: 48px;`}
    ${(props) => props.type === 'large' && `width: 336px; height: 56px;`}
  }
`;

export const SecondaryButton = ({ text, type, onClick }) => {
  return (
    <SecondaryButtonStyle type={type} onClick={onClick}>
      {text}
    </SecondaryButtonStyle>
  );
};

export const SecondaryButtonStyle = styled.button`
  ${ButtonDefault};
  border: 3px solid ${colors.blue};
  background-color: ${colors.white};
  color: ${colors.blue};
  width: 288px;
  height: 50px;

  &:hover {
    background-color: ${colors.white};
  }

  ${(props) => props.type === 'modal/card' && `width: 224px; height: 56px;`}
  ${(props) =>
    props.type === 'fullWidth' &&
    `width:100% !important; height: 56px; !important`}
  @media screen and (${breakpoints.tablet}) {
    width: 226px;
    height: 50px;
    ${(props) => props.type === 'large' && `width: 336px; height: 56px;`}
  }
`;

export const SectionButton = ({ text, type, Func }) => {
  return (
    <SectionButtonStyle onClick={() => Func()} type={type}>
      {text}
    </SectionButtonStyle>
  );
};

export const SectionButtonStyle = styled.button`
  ${ButtonDefault};
  position:relative;
  &:last-child{left: -3px; border-radius: 0 4px 4px 0; }
  border-radius: 4px 0 0 4px;
  border-width: 3px;
  border-style: solid;

  background-color: ${colors.white};
  color: ${colors.blue};
  width: 50%;
  height: 56px;
  border-color: {
    props.type==='inactive'?${colors.silver}: ${colors.blue};
  };

  &:hover {
    background-color: ${colors.white};
  }

  ${(props) => props.type === 'inactive' && `color: ${colors.silver};`}
  ${(props) => props.type === 'active' && `z-index:1;`}

  @media screen and (${breakpoints.tablet}) {
    width: 100%;
  }
  
  @media screen and (${breakpoints.desktopLarge}) {
    width: 180px;
  }
`;

// section content
export const SectionContent = styled.div`
  margin: 24px 16px 16px 16px;

  @media screen and (${breakpoints.tablet}) {
    margin: 34px 40px 16px 40px;
  }

  @media screen and (${breakpoints.desktopLarge}) {
    ${(props) =>
      props.columns === 2 &&
      `margin: 80px 108px 48px;
       display: grid;
       grid-template-columns: auto auto;
       justify-content: space-between;`}
    max-width: 1224px;
    margin: 80px auto 48px;
  }
`;

export const EventsWrapper = styled.div`
  margin: 0 auto;

  @media screen and (${breakpoints.desktop}) {
    max-width: 832px;
  }
`;

export const FilterWrapper = styled.div`
  max-width: 288px;
  display: none;

  @media screen and (${breakpoints.desktopLarge}) {
    display: block;
  }
`;

// message
export const SuccessMessage = styled.p`
  margin: 0 auto;
  padding: 15px;
  margin-bottom: 32px;
  border-radius: 6px;
  background: ${colors.successBackground};
  color: ${colors.success};
  ${(props) =>
    props.isError &&
    `
        background: ${colors.errorBackground};
        color: ${colors.error};
    `};
  @media screen and (${breakpoints.mobileLarge}) {
    max-width: 400px;
  }
`;
