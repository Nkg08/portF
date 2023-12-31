import dynamic from "next/dynamic";
import PropTypes from "prop-types";
const Navigation = dynamic(() => import("../components/Navigation"));
const Greetings = dynamic(() => import("../containers/Greetings"));
const Proficiency = dynamic(() => import("../containers/Proficiency"));
const Skills = dynamic(() => import("../containers/Skills"));
const Education = dynamic(() => import("../containers/Education"));
const Experience = dynamic(() => import("../containers/Experience"));
/*const Projects = dynamic(() => import("../containers/Projects"));
const Feedbacks = dynamic(() => import("../containers/Feedbacks"));*/
const GithubProfileCard = dynamic(() =>
	import("../components/GithubProfileCard")
);
import { openSource } from "../portfolio";
import SEO from "../components/SEO";

export default function Home({ githubProfileData }) {
	return (
		<div>
			<SEO
				data={{
					title: "Naman Goyal",
					description:
						"A passionate Frontend Web Developer and React Developer.",
					image: "https://avatars.githubusercontent.com/u/77873313?s=400&u=5fa3de042c9d300dcd8d128ee5890cf283b6094b&v=4",
					//url: "https://angel-portfolio-117.netlify.app/",
					keywords: [
						"Naman",
						"Naman Goyal",
						"@namankgoyal",
						"namankgoyal",
						"Portfolio",
						"Naman Portfolio ",
						"Naman Goyal Portfolio",
						"web developer",
						"full stack",
						"full stack web developer",
						"frontend developer",
						"frontend web developer",
						"react developer",
						"api rest",
						"graphql",
						"nodejs ",
						"expressjs",
						"reactjs ",
						"redux"
					],
				}}
			/>
			<Navigation />
			<Greetings />
			<Skills />
			<Proficiency />
			<Education />
			<Experience />	
			<GithubProfileCard prof={githubProfileData} />
		</div>
	);
}

Home.prototype = {
	githubProfileData: PropTypes.object.isRequired,
};

export async function getStaticProps(_) {
	const githubProfileData = await fetch(
		`https://api.github.com/users/${openSource.githubUserName}`
	).then((res) => res.json());

	return {
		props: { githubProfileData },
	};
}
