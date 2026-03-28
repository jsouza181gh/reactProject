import { createContext } from "react";
import { Button } from "./components/button";

export const ThemeContext = createContext<string | null>(null);

const App = () => {

	return (
		<ThemeContext.Provider value={'light'}>
			<Button />
		</ThemeContext.Provider>
		
	);
};

export default App;