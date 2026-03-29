import { Button } from "./components/Button";
import { ContextProvider } from "./context/Context";

const App = () => {
	return (
		<ContextProvider>
			<Button />
		</ContextProvider>
	);
};

export default App;