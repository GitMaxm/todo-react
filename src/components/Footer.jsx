// Footer.jsx
import { Component } from "react";

class Footer extends Component {
	state = {
		taskTitle: ''
	}

	onInputChange = (e) => {
		this.setState({
			taskTitle: e.target.value
		})
	}

	onSubmit = (e) => {
		e.preventDefault();
		if (this.state.taskTitle.trim()) {
			this.props.addItem(this.state.taskTitle);
		}
		this.setState({
			taskTitle: ''
		})
	}

	render() {
		return (
			<form onSubmit={this.onSubmit} className="footer">
				<input
					value={this.state.taskTitle}
					onChange={this.onInputChange}
					type="text"
					placeholder="Что необходимо сделать"
					className="task-input"
					aria-label="Новая задача"
				/>
				<button type="submit" className="btn-add" disabled={!this.state.taskTitle.trim()}>
					<i className="bi bi-plus-lg"></i> Добавить
				</button>
			</form>
		);
	}
}

export default Footer;