import React from "react";

const CreateNew = (props) => {
	return (
		<div>
			<form onSubmit={props.savePost}>
				<h2>Create Entry</h2>
				<label className="section-label">
					<b>Title</b>
					<input
						className="form-control"
						autoFocus={true}
						type="text"
						placeholder="post title"
						onChange={props.savePostTitleToState}
						required
						ref={props.getTitle}
					/>
				</label>
				<br />
				<label className="section-label">
					<b>Content</b>
					<textarea
						className="form-control"
						placeholder="description"
						onChange={props.savePostContentToState}
						required
						ref={props.getContent}
					/>
				</label>
				<br />
				<button 
					title="save post" className="save-post-button">
					Save
				</button>
			</form>
		</div>
	);
};

export default CreateNew;