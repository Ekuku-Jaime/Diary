import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
/* *{
    
    box-sizing:border-box;
   ;
}

body {
	background: #f6f5f7;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	font-family: 'Montserrat', sans-serif;
	height: 100vh;
	margin: -20px 0 50px;

	
} */
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
   
}
html,body{
    max-height:100vh;
    max-width: 100vw;
    height: 100%;
    width: 100%;
	background-color: #eee;

}
input{
	border:0;
	
	
}
`;
