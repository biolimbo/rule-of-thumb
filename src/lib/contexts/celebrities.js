import { writable } from 'svelte/store';

const mockCelebrities = [
	{
		name: 'Pope Francis',
		description:
			'He’s talking tough on clergy sexual abuse, or is he just another pervert protector? (thumbs down) or a true pedophile punishing pontiff? (thumbs up).',
		category: 'religion',
		picture: 'pope-francis',
		lastUpdated: '2020-03-10T23:08:57.892Z',
		wiki: 'https://wikipedia.org/wiki/Pope_Francis',
		votes: {
			positive: 23,
			negative: 36
		}
	},
	{
		name: 'Kanye West',
		description:
			'Born in Atlanta and raised in Chicago, West was first known as a producer for Roc-A-Fella Records in the early 2000s, producing singles for several mainstream artists.',
		category: 'entertainment',
		picture: 'kanye',
		lastUpdated: '2020-03-10T23:08:57.892Z',
		votes: {
			positive: 23,
			negative: 36
		}
	},
	{
		name: 'Mark Zuckerberg',
		description:
			'Born in White Plains, New York, Zuckerberg attended Harvard University, where he launched the Facebook social networking service from his dormitory room on February 4, 2004.',
		category: 'business',
		picture: 'mark',
		lastUpdated: '2021-02-14T23:10:19.134Z',
		votes: {
			positive: 418,
			negative: 324
		}
	},
	{
		name: 'Cristina Fernández de Kirchner',
		description:
			'Her first term of office started with a conflict with the agricultural sector, and her proposed taxation system was rejected.',
		category: 'politics',
		picture: 'cristina',
		lastUpdated: '2020-12-10T23:41:07.120Z',
		votes: {
			positive: 45,
			negative: 97
		}
	},
	{
		name: 'Malala Yousafzai',
		description:
			'The daughter of educational activist Ziauddin, Yousafzai was born to a Pashtun family in Mingora, Khyber Pakhtunkhwa, Pakistan. Her family came to run a chain of schools in the region.',
		category: 'politics',
		picture: 'malala',
		lastUpdated: '2020-12-10T23:41:07.120Z',
		votes: {
			positive: 18,
			negative: 3
		}
	},
	{
		name: 'Elon Musk',
		description:
			'In 2002, Musk founded SpaceX, an aerospace manufacturer and space transport services company, of which he is CEO, CTO, and lead designer.',
		category: 'business',
		picture: 'elon',
		lastUpdated: '2020-12-20T23:43:38.041Z',
		votes: {
			positive: 1237,
			negative: 894
		}
	},
	{
		name: 'Greta Thumberg',
		description:
			"Thunberg's activism started after convincing her parents to adopt several lifestyle choices to reduce their own carbon footprint.",
		category: 'environment',
		picture: 'greta',
		lastUpdated: '2021-02-26T23:44:50.326Z',
		votes: {
			positive: 118,
			negative: 45
		}
	}
];

const celebrities = writable(mockCelebrities);

const postVote = (currentCelebrity, vote) => {
	celebrities.update((celebrities) => {
		const celebrityIndex = celebrities.findIndex((c) => c.name === currentCelebrity.name);
		if (celebrityIndex === -1) {
			return celebrities;
		}
		const newCelebrity = { ...celebrities[celebrityIndex] };
		if (vote === 'positive') {
			newCelebrity.votes.positive += 1;
		} else {
			newCelebrity.votes.negative += 1;
		}
		let result = [...celebrities];
		result.splice(celebrityIndex, 1, newCelebrity);
		localStorage.setItem('celebrities', JSON.stringify(result));
		return result;
	});
};

export { celebrities, postVote };
