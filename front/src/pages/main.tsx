import styled from "@emotion/styled";

function Main() {
    return (
        <>
            <Head>
                <Title>
                    <TitleIcone src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLozXfx1TBeg7ZstppAr9dWOAgp-t13_STtw&usqp=CAU" alt="easyme"/>
                    <TitleName>LEEHYUNBOK</TitleName>
                </Title>
            </Head>
        </>
    )
    
}
export default Main

const Head = styled.div`
    font-family: Rubik;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    margin-top: 30px;
    margin-bottom: 30px;
`;

const Title = styled.div`
    cursor: pointer;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    user-select: none;
`;

const TitleIcone = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    box-shadow: rgb(33 40 56 / 10%) 4px 6px 10px;
    -webkit-user-drag: none;
`;

const TitleName = styled.div`
    position: relative;
    padding-left: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
    text-align: center;
    color: white;
    font-size: 4rem;
    text-shadow: rgb(33 40 56 / 20%) 4px 6px 10px;
`;