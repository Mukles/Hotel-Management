import styled from 'styled-components';
import defaultBcg from '../images/defaultBcg.jpeg'

export const RoomData = styled.section`
background: url(${props => `${props.bg_Img || defaultBcg}`}) no-repeat center;
-webkit-background-size: cover;
-moz-background-size: cover;
-o-background-size: cover;
background-size: cover;
height: 60vh;
display: flex;
flex-direction: column

`
