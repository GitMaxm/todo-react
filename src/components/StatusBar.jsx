function StatusBar({ changeStatus, status }) {
    const buttons = [
        { status: 'all', title: 'Все' },
        { status: 'active', title: 'Активные' },
        { status: 'important', title: 'Важные' },
        { status: 'done', title: 'Выполненные' },
    ];

    return (
        <div className="btn-group mt-1" role="group" >
            {buttons.map((item) => (
                <button
                    key={item.status}
                    onClick={() => changeStatus(item.status)}
                    type="button"
                    className={`btn ${status === item.status ? 'btn-primary active' : 'btn-outline-secondary'}`}
                >
                    {item.title}
                </button>
            ))}
        </div>
    );
}

export default StatusBar;