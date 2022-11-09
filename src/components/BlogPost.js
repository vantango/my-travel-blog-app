import React, {useState} from "react";

const BlogPost = ({ id, title, content, editPost, deletePost }) => {

	const [isHovering, setIsHovering] = useState(false);

	// Hover effect handler
	const handleMouseOver = () => {
		setIsHovering(true);
	};

	const handleMouseOut = () => {
		setIsHovering(false);
	};

	return (
		<div>
			<div className="card card-width bg-dark">
				<section className="post-section" key={id}>
					<h3 className="post-title">{title}</h3>
					<hr></hr>
					<p className="post-content">{content}</p>
					<div className="edit-delete-buttons">
						<span className="edit-button" title="edit" onClick={() => editPost(id)}>
							<button>
								<i className="fa-solid fa-pen-to-square"></i> Edit
							</button>
						</span>
						<span 
							className={isHovering ?"delete-button" : ""}
							title="delete"
							onClick={() => deletePost(id)}
							onMouseOver={handleMouseOver}
							onMouseOut={handleMouseOut}>
							<button>
								<i className="fa-solid fa-trash"></i> Delete
							</button>
						</span>
					</div>
				</section>
			</div>
		</div>
	);
};

export default BlogPost;