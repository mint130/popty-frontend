import CommunityItem from "../item/CommunityItem";
import styled from "styled-components";
const HomeBoardList = () => {
    const boardArr=[
        {title: "똥손이어도 괜찮..을걸? 나홀로 이벤트 연 후기💜", writerName: "깜토러버"},
        {title: "생카만 다섯번한 여자가 알려주는  🎉생일 카페 디피🎉 꿀팁 A to Z 😎", writerName: "우땨땨땨"},
    ];

    return (
        <>
            {boardArr.map((board)=>{
                return <CommunityItem title={board.title} writerName={board.writerName}/>
            })}
        </>
    );

}

export default HomeBoardList;