import {axiosNotToken} from './axios';
import { formatIdUrl } from './formatIdUrl';

export const getCharacterById = async (urlCharacter)=>{
  
  if(!urlCharacter){
    return {name:null};
  }

  const idCharacter = formatIdUrl(urlCharacter);
  const { data } = await axiosNotToken(
    `characters/${idCharacter}`
  ); 

  return {name: data.name};
}