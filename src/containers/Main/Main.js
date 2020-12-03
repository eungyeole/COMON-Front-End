import React, { useEffect } from 'react'
import * as S from './styles'

import logo from '../../assets/logoWhite.png'

const Main = () => {
    return (
        <S.BodyWrapper>
            <S.HeaderWrapper>
                <S.HeaderLogo src={logo} />
                <S.HeaderButtonWrapper>
                    <S.HeaderButton>로그인</S.HeaderButton>
                    <S.HeaderButton>회원가입</S.HeaderButton>
                </S.HeaderButtonWrapper>
            </S.HeaderWrapper>
            <S.ContentWrapper>
                <S.HeadContent>커몬</S.HeadContent>
                <S.ContentBox bgColor="white" color="#7B00FF">누구나 쉽게 시작하는 온라인 창업 서비스</S.ContentBox>
                <S.Content>
                    커몬(Company Online)은 누구나 쉽게 <S.Content color="yellow">온라인</S.Content>으로 창업을 시작할 수 있는 서비스로<br />
                    스타트업에 대한 인식개선과 일자리 부족 문제를 개선하기 위해 창안된 아이디어입니다.
                </S.Content>
                <S.StartButton>자세히 알아보기</S.StartButton>
            </S.ContentWrapper>
        </S.BodyWrapper>
    )
}

export default Main