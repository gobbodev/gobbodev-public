import { createContext} from "react";

const LoadContext = createContext<[ boolean?, React.Dispatch<React.SetStateAction<boolean>>?]>([ false, () => {}]);

export default LoadContext;