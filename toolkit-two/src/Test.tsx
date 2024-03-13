import React from "react";
import { useAppSelector } from "./redux/hooks";

const Test: React.FC = () => {
	const count = useAppSelector((s) => s.counter);
	return <h1>{count}</h1>;
};
export default Test;
