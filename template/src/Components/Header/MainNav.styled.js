import styled from "styled-components";

export const MainNav = styled.ul`
position: sticky;
top: 20px;
display: flex;
gap: 10px;
height: 8vh;
z-index: 800;
flex-wrap: wrap;
justify-content: space-between;
padding: ${(props) => (props.shrinkHeader ? "0.2rem" : "1rem")} 4rem;
transition: padding 500ms ease;

li{
    list-style: none;
    &:last-of-type{
        margin-left: auto;
    }
}

@media (max-width: 768px){
    padding: 1rem;
    height: auto;
    display: flex;
    justify-content: flex-end;

    li{
        width: 100%;
    }
}
`