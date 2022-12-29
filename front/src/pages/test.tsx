
import styled from "@emotion/styled";

function Test() {

    return (
        <>
            <MainPage>
                <MyProfile>
                    <MyProfileIconeBox>
                        <MyProfileIconeBoxInner>
                            <MyProfileIcone src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLozXfx1TBeg7ZstppAr9dWOAgp-t13_STtw&usqp=CAU" alt="easyme"/>
                        </MyProfileIconeBoxInner>
                    </MyProfileIconeBox>
                    <MyProfileName>
                        <h2>👨‍💻 이현복</h2>
                        @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
                        @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
                        @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
                        @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
                        @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
                        @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
                        @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
                        @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
                        @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
                        @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@



                        </MyProfileName>
                </MyProfile>
                <button >
                    <a href="./mdadd">링크텍스트</a>
                </button>
            </MainPage>
        </>
    )
    
}

export default Test

const MainPage = styled.div`
    
    @media screen and (min-width: 700px) {
        margin: auto;
        max-width: 700px;
    }
`


const MyProfile = styled.div`
word-break:break-all;
    width: 100%;
    background-color: #fff;
    color: black;
    border-radius: 4px;
    box-shadow: none;
    @media screen and (min-width: 700px) {
        display: flex;
    }
` 

const MyProfileName = styled.div`
    
    
    @media screen and (min-width: 700px) {
        margin: 0 5%;
        width: 70%;
        display: inline-block;
        text-align: left;
    }
`
const MyProfileIconeBox = styled.div`
    height: initial;    
`
const MyProfileIconeBoxInner = styled.div`
    @media screen and (min-width: 700px) {
        height: 50%;
        // margin: 75% 0;  
    }
`
const MyProfileIcone = styled.img`
    margin: 5% 0;
    width: 25%;
    border-radius: 50%;
    box-shadow: rgb(33 40 56 / 10%) 4px 6px 10px;

    @media screen and (min-width: 700px) {
        width: 50%;
        margin: 50% 0;
        display: inline-block;
    }
`;