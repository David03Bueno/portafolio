import styled from 'styled-components'


export const Container = styled.div`
    width: 100%;
    height: 70px;
    background:rgb(3, 12, 12);
`;

export const Wrapper = styled.div`
    width: 100%;
    max-width: 1300px;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: auto;
`;

export const LogoContainer = styled.div`
    margin-left: 0.5rem;
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    font-family: sans-serif;
    
    p {
        &: nth-child(2){
            color: rgb(241, 255, 251);
            font-size: 1.5rem;
            font-weight: 500;
        }
        
        &: nth-child(3){
            font-size: 1.5rem;
            font-weight: 500;
            color:rgb(8, 5, 3);
        }
    }

    svg  {
    fill:rgb(7, 170, 225);
    margin-right: 2rem;
    }
`;
export const Menu = styled.ul`
    height: 100%;
    display: flex;
    justify-content: space-between;
    list-style: none;


    @media screen and (max-width: 960px){
    background-color: rgb(3, 12, 12);
    position: absolute;
    top: 70px;
    left: ${({open})=> open ? "0" :"-100%" };
    width: 100%;
    height: 90vh;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    transition: 0.5s all ease;
    }
`;
export const MenuItem = styled.li`
    height: 100%;

    @media screen and (max-width: 960px){
        width: 100%;
        height: 70px;
        justify-content: ce;
        align-items: center
    }
`;

export const MenuItemLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0.5rem 2.5rem;
    color:rgb(228, 228, 228);
    font-family: sans-serif;
    font-size: 1rem;
    font-weight: 300;
    cursor: pointer;
    transition: 0.5s all ease;

    &:hover {
        color: #fff;
        background-color:rgb(7, 170, 225);
        transition: 0.5s all ease;

        div{
            svg{
                fill: rgb(8, 5, 3);
            }
        }
    }

    div {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        svg {
        display: none;
        fill:rgb(7, 170, 225);
        margin-right: 0.5rem;
        }
    }

    @media screen and (max-width: 960px){

       div {
        width: 30%;
        justify-content: center;

            svg {
                display: flex;
            }
        }
    }

    @media screen and (max-width: 800px){
       div {
        width: 40%;
        justify-content: center;

            svg {
                display: flex;
            }
        }
    }

    @media screen and (max-width: 500px){
       div {
        width: 60%;
        justify-content: center;

            svg {
                display: flex;
            }
        }
    }

    @media screen and (max-width: 260px){
       div {
        width: 100%;
        justify-content: center;

            svg {
                display: flex;
            }
        }
    }

`;

export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 960px){
display: flex;
align-items: center;
cursor: pointer;

    svg {
    fill:rgb(7, 170, 225);
    margin-right: 2rem;
    }
}
`;

