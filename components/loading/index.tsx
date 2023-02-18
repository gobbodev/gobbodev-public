import NextImage from 'next/image';
import * as S from "./styles"
import { useEffect, useContext } from 'react';
import LoadContext from "components/contexts/loader";

export default function Loading(){

    const [isLoading, setLoading] = useContext(LoadContext);
    useEffect(() => {
        setTimeout(() => {
          setLoading(false);
        }, 6500);
      }, []);

    return(
        <S.Loading style={isLoading ? {} : {opacity: 0, position:'absolute'}}>
            <p>Loading<span id='sp1'>.</span><span id='sp2'>.</span><span id='sp3'>.</span></p>
        </S.Loading>
    );
}