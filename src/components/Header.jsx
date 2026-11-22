function Header({ statusCounterActive, statusCounterDone }) {
	return (
		<header className="header">
			<h1 className="header-title">Список дел</h1>
			<span className="header-desc">
				<span className="counter active">{statusCounterActive}</span> осталось,
				<span className="counter done"> {statusCounterDone}</span> сделано
			</span>
		</header>
	);
}

export default Header;