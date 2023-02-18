import * as S from './styles';
import React, { ReactNode } from 'react';
import NextImage from 'next/image';

type Props = {
    children : ReactNode;
}

export default function BannerContainer({children} : Props){
    return(
        <S.BannerContainer>
            <NextImage className='desktop-background' fill src="/images/cyber_animation.gif" alt="Animação background de uma cidade cyberpunk, ao fundo há vários prédios rosas e azuis, 5 prédios possuem outdoors tecnológicos com propagandas de jogos, bebida e uma de bots ao centro da animação, carros voadores azuis escuros com neon rosa neles passam voando a frente desses prédios, e na parte mais externa da animação que está bem próxima ao leitor, existe um grupo de pessoas em outros 2 terraços de prédios, o terraço da esquerda possue um hacker digitando em seu notebook, e no terraço da direita o resto do grupo, com 2 homens armados, um com uma espada, outro com um bastão e mais a direita um skatista, aparentemente estão esperando a missão do hacker ser concluída para invadir algum local que não está aparente na animação.">
            </NextImage> 
             <NextImage className='mobile-background' fill src="/images/cyber_animation_mobile.gif" alt="Animação background de uma cidade cyberpunk, ao fundo há vários prédios rosas e azuis, 1 prédio possuí outdoor tecnológico com propagandas de jogos, carros voadores azuis escuros com neon rosa neles passam voando do lado direito, e na parte mais externa da animação que está bem próxima ao leitor, existe um terraço da onde possue um hacker digitando em seu notebook">
            </NextImage>
            {children}
            
        </S.BannerContainer>
    );
}