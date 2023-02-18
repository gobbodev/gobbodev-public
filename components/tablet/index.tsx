//importar na header //boolean use state
import * as S from "./styles";
import React, { ReactNode, useEffect, useState, useContext } from "react";
import NextImage from "next/image";
import Draggable from "react-draggable";
import MyContext from "components/contexts/todo";

type Props = {
  children?: ReactNode;
  notipDisplay?: boolean;
};
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export default function Tablet({ children, notipDisplay}: Props) {
  const [isOpen, setIsOpen,,, contextAudio] = useContext(MyContext);
  const [shiftPressed, setShiftPressed] = useState(false);
  const [justOne, setJustOne] = useState(false);

  const audioRef = contextAudio;

  const [dragPosition, setDragPosition] = useState({
    x: getRandomInt(600),
    y: getRandomInt(450),
  });
  /*pegar esse dragPosition e usar na div do sensor */
 

  const downHandler = ({key}) => {
    if (key === 'Shift') {
      setShiftPressed(!shiftPressed);
    }
  }
  const handlePlay = () =>{
      audioRef.current.play();
      audioRef.current.volume = 0.05;
      setJustOne(true);
  }
  const upVolume = () =>{
      let newVolume = audioRef.current.volume + 0.1;
      if (newVolume > 1) {
        newVolume = 1;
      }
      audioRef.current.volume = newVolume;
  }
  const downVolume = () =>{
    let newVolume = audioRef.current.volume - 0.1;
      if (newVolume < 0) {
        newVolume = 0;
      }
      audioRef.current.volume = newVolume;
  }

  useEffect(() => {
    window.addEventListener('keydown', downHandler);
    
    return () => {
      window.removeEventListener('keydown', downHandler);
    };
  }, [shiftPressed]);/*repete sempre q alterar o valor do shiftPressed? */


 
  

  return (
    <S.Tablet style={isOpen == false ? {visibility:"hidden" , opacity: 0, transition: "visibility 0.5s linear, opacity 0.5s linear"} : null}>
      <Draggable
        position={notipDisplay == true ? null : dragPosition}
        positionOffset={notipDisplay == true ? { x: "61.5%", y: "17%"} : null}
        disabled={notipDisplay == true ? true : shiftPressed}
        onDrag={(e, data) => setDragPosition({ x: data.x, y: data.y })}
        grid={[50, 50]}
      >
        <div className="img-container">
          <NextImage
          className="tabletao"
            alt="pixel arte de um tablet que muda de cor entre rosa e verde neon"
            fill
            src="/images/tabletao.gif"
          ></NextImage>
          <div className="btn-container">
            <div className="button-up" onClick={() => {!justOne ? handlePlay() : upVolume()}}></div>
            <div className="button-down" onClick={() => downVolume()}></div>
            <div className="button-dl" onClick={() => setIsOpen(!isOpen)}></div>
          </div>
          {children}
          <div className="tip-container" style={notipDisplay == true ? {display: "none"} : null}>
            <h4>Modo Arrastável: 	&#123;{shiftPressed ? <span style={{animation: "none", textShadow: "none"}}>OFF</span> : <span>ON</span>}&#125;</h4>
            <h4>Ativar / Desativar: SHIFT</h4>
          </div>
        </div>
      </Draggable>
    </S.Tablet>
  );
}
