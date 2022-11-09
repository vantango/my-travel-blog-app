import React, { useState, useRef } from "react";
import CreateNew from "./CreateNew";
import EditPost from "./EditPost";
import BlogPost from "./BlogPost";

const AllPosts = () => {
	// managing states below
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const [allPosts, setAllPosts] = useState([
		{
			id: 1,
			title: "Prague",
			content:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
		},
		{
			id: 2,
			title: "Vienna",
			content:
				"Iaculis at erat pellentesque adipiscing. Nulla porttitor massa id neque aliquam vestibulum. Elit sed vulputate mi sit. In hac habitasse platea dictumst quisque sagittis purus. Risus viverra adipiscing at in tellus. Viverra orci sagittis eu volutpat odio facilisis. Lacus laoreet non curabitur gravida arcu. Gravida rutrum quisque non tellus orci ac auctor augue. Erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Turpis egestas sed tempus urna et pharetra pharetra. Nulla pellentesque dignissim enim sit."
		},
		{
			id: 3,
			title: "Berlin",
			content:
				"Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Risus quis varius quam quisque id. Et netus et malesuada fames. Cursus mattis molestie a iaculis at erat pellentesque. Malesuada proin libero nunc consequat interdum varius sit amet. Odio ut sem nulla pharetra diam. Amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Viverra tellus in hac habitasse platea dictumst vestibulum. Viverra aliquet eget sit amet. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim."
		},
		{
			id: 4,
			title: "Split",
			content:
				"Tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce. Cras sed felis eget velit aliquet sagittis. Vulputate odio ut enim blandit volutpat maecenas volutpat. Ut etiam sit amet nisl purus in. In fermentum posuere urna nec. In hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit. Varius vel pharetra vel turpis nunc. Hendrerit dolor magna eget est lorem. Scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt."
		}
	]);
	// const [allPosts, setAllPosts] = useState([]) // can also be used
	const [isCreateNew, setIsCreateNew] = useState(false);
	const [isEditPost, setIsEditPost] = useState(false);
	const [editPostId, setEditPostId] = useState("");

	// Initialize useRef (to empty title and content once saved)
	const getTitle = useRef();
	const getContent = useRef();

	// function 1 (accepting title in state by user input)
	const savePostTitleToState = (event) => {
		setTitle(event.target.value);
	};

	// function 2 (accepting content/description in state by user input)
	const savePostContentToState = (event) => {
		setContent(event.target.value);
	};

	// function 3 (to save title and content in allPosts state)
	const savePost = (event) => {
		event.preventDefault();
		const id = Date.now();
		setAllPosts([...allPosts, { title, content, id }]);
		getTitle.current.value = "";
		getContent.current.value = "";
		toggleCreateNew();
	};

	// function 4 (toggle create new post visibility)
	const toggleCreateNew = () => {
		setIsCreateNew(!isCreateNew);
	};

	// function 5 (toggle post editing)
	const toggleEditPostComponent = () => {
		setIsEditPost(!isEditPost);
	};

	// function 6 (to edit posts)
	const editPost = (id) => {
		setEditPostId(id);
		toggleEditPostComponent();
	};

	// function 7 (to update the posts)
	const updatePost = (event) => {
		event.preventDefault();
		const updatedPost = allPosts.map((eachPost) => {
		if (eachPost.id === editPostId) {
			return {
			...eachPost,
			title: title || eachPost.title,
			content: content || eachPost.content
			};
		}

		return eachPost;
		});
		setAllPosts(updatedPost);
		toggleEditPostComponent();
	};

	// function 8 (to delete posts)
	const deletePost = (id) => {
		const modifiedPost = allPosts.filter((eachPost) => {
		return eachPost.id !== id;
		});
		setAllPosts(modifiedPost);
	};

	if (isCreateNew) {
		return (
			<div>
				<CreateNew
					savePostTitleToState={savePostTitleToState}
					savePostContentToState={savePostContentToState}
					getTitle={getTitle}
					getContent={getContent}
					savePost={savePost}
				/>
				{/* Cancel Button */}
				<button className="cancel-post-button" onClick={toggleCreateNew}>
					Cancel
				</button>
			</div>
		);
	} else if (isEditPost) {
		const post = allPosts.find((post) => {
		return post.id === editPostId;
		});

		return (
			<div>
				<EditPost
					title={post.title}
					content={post.content}
					updatePost={updatePost}
					savePostTitleToState={savePostTitleToState}
					savePostContentToState={savePostContentToState}
					toggleCreateNew={toggleCreateNew}
				/>
				<button className="cancel-post-button" onClick={toggleEditPostComponent}>
					Cancel
				</button>
			</div>
		);
	}

	return (
		<div>
			<h2>All Posts</h2>
			{!allPosts.length ? (
				<div>
					<li>There are no posts yet.</li>
				</div>
			) : (
				allPosts.map((eachPost) => (
					<BlogPost
						id={eachPost.id}
						key={eachPost.id}
						title={eachPost.title}
						content={eachPost.content}
						editPost={editPost}
						deletePost={deletePost}
					/>
				))
			)}
			<button
				className="create-new-button"
				onClick={toggleCreateNew}
			>
				<i className="fa-solid fa-plus"></i> Create New
			</button>
		</div>
	);
};

export default AllPosts;