const shipFactory = (param) => {
	const printParam = () => console.log(param.toUpperCase());
	return { param, printParam };
};

export { shipFactory };
