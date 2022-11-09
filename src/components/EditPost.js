import React from "react";

const EditPost = (props) => {
	return (
		<div>
			<form>
				<h2>Edit Post</h2>
				<label className="section-label">
					<b>Title</b>
					<input
						className=""
						defaultValue={props.title}
						autoFocus={true}
						onChange={props.savePostTitleToState}
						placeholder="title"
					/>
				</label>
				<br />
				<label className="section-label">
					<b>Content</b>
					<textarea
						className=""
						defaultValue={props.content}
						onChange={props.savePostContentToState}
						placeholder="contents"
					/>
				</label>
				<button
					title="update changes"
					className="save-post-button"
					onClick={props.updatePost}
				>
					<i className="fa-regular"></i> Save Post
				</button>
			</form>
		</div>
	);
};

export default EditPost;