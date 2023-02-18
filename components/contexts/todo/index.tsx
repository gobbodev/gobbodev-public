import { createContext} from "react";

const MyContext = createContext<[ boolean?, React.Dispatch<React.SetStateAction<boolean>>?, string?, React.Dispatch<React.SetStateAction<string>>?, React.RefObject<HTMLAudioElement>?, boolean?, React.Dispatch<React.SetStateAction<boolean>>?, boolean?, React.Dispatch<React.SetStateAction<boolean>>?]>([ false, () => {}, "", () => {}, null, false, () => {}, false, () => {}]);

export default MyContext;