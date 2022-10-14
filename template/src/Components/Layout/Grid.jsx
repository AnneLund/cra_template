import styled from "styled-components";
import img1 from '../../Assets/Images/img1.avif'
import img2 from '../../Assets/Images/img2.avif'
import img3 from '../../Assets/Images/img3.avif'
import img4 from '../../Assets/Images/img4.avif'
import { useModalStore } from "../../Components/Modal/useModalStore"

const Grid = () => {
const { setModalPayload } = useModalStore();

const Container = styled.section`
position: relative;
width: 40vw;
margin: 1em auto;
display: grid;
grid-template-columns: auto auto;
grid-template-rows: auto auto;
grid-gap: 10px;
grid-template-areas: 
    "a a c c" 
    "d b c c";

img{
    width: 100%;
    height: 100%;
}
`
const items = [
    {
        id: 1,
        img: img1,
        area: 'a'
    },
    {
        id: 2,
        img: img2,
        area: 'b'
    },
    {
        id: 3,
        img: img3,
        area: 'c'
    },
    {
        id: 4,
        img: img4,
        area: 'd'
    }
    ]

    return(

   <Container>
    {items.map((item, idx) => {
        return(
        <div key={item.id} style={{gridArea: `${item.area}`}}>
           <img id={idx} src={item.img} onClick={
            () => setModalPayload(<img src={item.img}/>)
           }/>
        </div>
        )
    })}
    </Container> 

    )
}

export default Grid;

