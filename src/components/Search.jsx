function Search({ changeTerm, term }) {
	return (
		<input
			value={term}
			onChange={(e) => changeTerm(e.target.value)}
			type="text"
			placeholder="введите фразу для поиска"
			className="form-control me-2"
		/>
	);
}

export default Search;
