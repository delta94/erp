import styled, { keyframes } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(to right, #dbdffc, #f7d4ee);
`
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-50px)
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }`

export const Content = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  padding: 20px 20px 0 20px;
  animation: ${fadeIn} 1s;
  display: flex;
  justify-content: space-between;
`
export const SideLeft = styled.aside`
  width: 150px;
  display: flex;
  flex-direction: column;

  a {
    color: #414f8c;
    font-family: 'Roboto', sans-serif;
    font-size: 0.8em;
    font-weight: 400;
    margin-top: 10px;
  }

  h2 {
    color: #414f8c;
    margin: 40px 0;
    font-weight: normal;
    text-transform: uppercase;
  }
`
export const SideLeftMenuList = styled.ul`
  display: flex;
  flex-direction: column;

  li {
    margin-bottom: 20px;
    display: flex;
    align-items: center;

    svg {
      color: #414f8c;
      margin-right: 10px;
    }
  }
`
export const Main = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;

  div {
    display: flex;
    justify-content: space-between;

    div {
      display: flex;
      align-items: center;
      svg {
        margin-right: 10px;
        color: #414f8c;
      }
      input {
        border-radius: 4px;
        /* border: 1px solid #414f8c; */
        border: none;
        background: transparent;
        padding-left: 10px;
        font-size: 0.87em;
        height: 20px;

        &::placeholder {
          font-size: 0.87em;
          color: #414f8c;
          font-size: 1em;
        }
        &:focus {
          outline: none;
        }
      }
    }
    button {
      background: linear-gradient(to right, #d949e0, #3c50c2);
      color: #fff;
      border: 0;
      border-radius: 10px;
      padding: 8px 12px;
      font-size: 0.75em;
    }
  }
`
export const EmployeeMenu = styled.div`
  margin-top: 30px;

  > div {
    span {
      color: #414f8c;
      /* margin: 40px 0; */
      margin-right: 20px;
      font-weight: normal;
      text-transform: uppercase;
    }

    select {
      border: none;
      background: transparent;
      color: #414f8c;
      font-family: 'Roboto', sans-serif;
      line-height: 20px;
      padding: 10px;

      &:focus {
        border: 1px solid #884bc8;
        border-radius: 4px;
        padding: 5px;
      }
      option {
        border: none;
        font-family: 'Roboto', sans-serif;
        /* background: transparent; */
        margin-top: 10px;

        &:focus {
          background: transparent;
        }
      }
    }
  }
`
export const EmployeeContainer = styled.div`
  display: flex;
  background: #f4effd;
  border-radius: 10px;
  justify-content: stretch;
  margin-bottom: 10px;
  .employee__img {
    width: 120px;
    height: 130px;
    margin-right: 20px;
    display: flex;
    justify-content: center;

    img {
      width: 80px;
      height: 80px;
      max-width: 100%;
      border-radius: 50%;
    }
  }
  .employee__info {
    flex: 1;
    display: flex;
    justify-content: space-between;
    padding: 30px;
    padding-left: 0;

    .base__info {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;

      span {
        color: #414f8c;
        font-size: 0.8em;
        margin-bottom: 10px;
        font-weight: normal;
        font-family: 'Roboto', sans-serif;

        &:first-child {
          font-weight: 500;
        }
      }
    }

    .more__info {
    }
  }
`
export const SideRight = styled.aside`
  width: 250px;
  /* width: 100%;
  height: 100vh; */
`
