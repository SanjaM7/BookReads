import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { IBookDto } from './models/book';

export class BooksDataService implements InMemoryDbService {

    createDb(): {} | Observable<{}> | Promise<{}> {
        const books: IBookDto[] = BOOKS;
        return { books };
    }
}

const BOOKS: IBookDto[] = [
    {
        id: '1',
        image: 'assets/images/1.jpg',
        title: 'Atomic Habits',
        author: 'James Clear',
        rating: 5,
        status: 'read',
        started: '2020-09-10T22:00:00.000Z',
        read: '2020-12-16T22:00:00.000Z',
        description: `No matter your goals, Atomic Habits offers a proven framework for improving every day. James Clear, one of the 
        world's leading experts on habit formation, reveals practical strategies that will teach you exactly how to form good habits,
        break bad ones, and master the tiny behaviors that lead to remarkable results.`,
        published: '2018-10-15T22:00:00.000Z',
        numberOfPages: 319,
        genres: ['self-help', 'psychology', 'personal-development', 'productivity'],
    },
    {
        id: '2',
        image: 'assets/images/2.jpg',
        title: 'Willpower: Rediscovering the Greatest Human Strength',
        author: 'Roy F. Baumeister',
        rating: 4,
        status: 'Read',
        started: '2021-03-07T22:00:00.000Z',
        read: '2021-03-20T22:00:00.000Z',
        description: `One of the world's most esteemed and influential psychologists, Roy F. Baumeister, teams with New York Times science 
        writer John Tierney to reveal the secrets of self-control and how to master it. In Willpower, the pioneering researcher 
        Roy F. Baumeister collaborates with renowned New York Times science writer John Tierney to revolutionize our understanding 
        of the most coveted human virtue: self-control.`,
        published: '2011-09-01T22:00:00.000Z',
        numberOfPages: 291,
        genres: ['psychology', 'self-help', 'personal-development', 'science'],
    },
    {
        id: '3',
        image: 'assets/images/3.jpg',
        title: 'Sapiens: A Brief History of Humankind',
        author: 'Yuval Noah Harari',
        rating: 5,
        status: 'Read',
        started: '2021-04-04T22:00:00.000Z',
        read: '2021-04-14T22:00:00.000Z',
        description: `100,000 years ago, at least six human species inhabited the earth. Today there is just one. Us. Homo sapiens.
        How did our species succeed in the battle for dominance? Why did our foraging ancestors come together to create cities and kingdoms? 
        How did we come to believe in gods, nations and human rights; to trust money, books and laws; and to be enslaved by bureaucracy, 
        timetables and consumerism? And what will our world be like in the millennia to come?`,
        published: '2011-01-01T22:00:00.000Z',
        numberOfPages: 512,
        genres: ['history', 'science', 'philosophy', 'anthropology'],
    },
    {
        id: '4',
        image: 'assets/images/4.jpg',
        title: 'Good to Great: Why Some Companies Make the Leap... and Others Don\'t',
        author: 'James C. Collins',
        rating: 5,
        status: 'Read',
        started: '2021-03-28T22:00:00.000Z',
        read: '2021-04-04T22:00:00.000Z',
        description: `To find the keys to greatness, Collins's 21-person research team read and coded 6,000 articles, generated more than 
        2,000 pages of interview transcripts and created 384 megabytes of computer data in a five-year project. The findings will surprise 
        many readers and, quite frankly, upset others.`,
        published: '2001-10-16T22:00:00.000Z',
        numberOfPages: 300,
        genres: ['business', 'leadership', 'management', 'entrepreneurship', 'personal-development'],
    },
    {
        id: '5',
        image: 'assets/images/5.jpg',
        title: 'Deep Work: Rules for Focused Success in a Distracted World',
        author: 'Cal Newport',
        rating: 3,
        status: 'Read',
        started: '2021-04-17T22:00:00.000Z',
        read: '2021-04-25T22:00:00.000Z',
        description: `One of the most valuable skills in our economy is becoming increasingly rare. If you master this skill, 
        you'll achieve extraordinary results. Deep work is the ability to focus without distraction on a cognitively demanding task. 
        It's a skill that allows you to quickly master complicated information and produce better results in less time. Deep work will make 
        you better at what you do and provide the sense of true fulfillment that comes from craftsmanship. In short, deep work is like 
        a super power in our increasingly competitive twenty-first century economy. And yet, most people have lost the ability to go 
        deep-spending their days instead in a frantic blur of e-mail and social media, not even realizing there's a better way.`,
        published: '2016-01-05T22:00:00.000Z',
        numberOfPages: 296,
        genres: ['productivity', 'management', 'business', 'self-help',  'personal-development'],
    },
    {
        id: '6',
        image: 'assets/images/6.jpg',
        title: 'Educated',
        author: 'Tara Westover',
        rating: null,
        status: 'Currently-Reading',
        started: '2021-04-28T22:00:00.000Z',
        read: '',
        description: `Tara Westover was 17 the first time she set foot in a classroom. Born to survivalists in the mountains of Idaho, 
        she prepared for the end of the world by stockpiling home-canned peaches and sleeping with her "head-for-the-hills bag". 
        In the summer she stewed herbs for her mother, a midwife and healer, and in the winter she salvaged in her father's junkyard.`,
        published: '2018-02-20T22:00:00.000Z',
        numberOfPages: 334,
        genres: ['autobiography', 'memoir', 'education', 'nonfiction'],
    },
    {
        id: '7',
        image: 'assets/images/7.jpg',
        title: 'How to Win Friends and Influence People',
        author: 'Dale Carnegie',
        rating: null,
        status: 'To-Read',
        started: '',
        read: '',
        description: `You can go after the job you want...and get it! You can take the job you have...and improve it! 
        You can take any situation you're in...and make it work for you! Since its release in 1936, How to Win Friends and Influence People 
        has sold more than 15 million copies. Dale Carnegie's first book is a timeless bestseller, packed with rock-solid advice that has 
        carried thousands of now famous people up the ladder of success in their business and personal lives.`,
        published: '1998-10-01T22:00:00.000Z',
        numberOfPages: 288,
        genres: ['self-help', 'psychology', 'personal-development', 'Nonfiction'],
    },
    {
        id: '8',
        image: 'assets/images/8.jpg',
        title: 'Energy and Civilization: A History',
        author: 'Vaclav Smil',
        rating: null,
        status: 'To-Read',
        started: '',
        read: '',
        description: `A comprehensive account of how energy has shaped society throughout history, from pre-agricultural foraging societies 
        through today's fossil fuel-driven civilization. Energy is the only universal currency; it is necessary for getting anything done. 
        The conversion of energy on Earth ranges from terra-forming forces of plate tectonics to cumulative erosive effects of raindrops. 
        Life on Earth depends on the photosynthetic conversion of solar energy into plant biomass. Humans have come to rely on many more 
        energy flows—ranging from fossil fuels to photovoltaic generation of electricity—for their civilized existence. In this monumental 
        history, Vaclav Smil provides a comprehensive account of how energy has shaped society, from pre-agricultural foraging societies 
        through today's fossil fuel–driven civilization.`,
        published: '2017-05-12T22:00:00.000Z',
        numberOfPages: 568,
        genres: ['technology', 'science', 'economics', 'environment'],
    },
    {
        id: '9',
        image: 'assets/images/9.jpg',
        title: 'Think Again: The Power of Knowing What You Don\'t Know',
        author: 'Adam M. Grant',
        rating: null,
        status: 'To-Read',
        started: '',
        read: '',
        description: `Think Again is a book about the benefit of doubt, and about how we can get better at embracing the unknown and the 
        joy of being wrong. Evidence has shown that creative geniuses are not attached to one identity, but constantly willing to rethink 
        their stances and that leaders who admit they don't know something and seek critical feedback lead more productive and innovative 
        teams.`,
        published: '2021-02-02T22:00:00.000Z',
        numberOfPages: 307,
        genres: ['self-help', 'psychology', 'personal-development'],
    },
    {
        id: '10',
        image: 'assets/images/10.jpg',
        title: 'How Not to Die: Discover the Foods Scientifically Proven to Prevent and Reverse Disease',
        author: 'Michael Greger',
        rating: null,
        status: 'To-Read',
        started: '',
        read: '',
        description: `From the physician behind the wildly popular website NutritionFacts.org, How Not to Die reveals the groundbreaking 
        scientific evidence behind the only diet that can prevent and reverse many of the causes of disease-related death. The vast 
        majority of premature deaths can be prevented through simple changes in diet and lifestyle. In How Not to Die, Dr. Michael Greger, 
        the internationally-renowned nutrition expert, physician, and founder of NutritionFacts.org, examines the fifteen top causes of 
        premature death in America -- heart disease, various cancers, diabetes, Parkinson's, high blood pressure, and more -- and explains 
        how nutritional and lifestyle interventions can sometimes trump prescription pills and other pharmaceutical and surgical approaches, 
        freeing us to live healthier lives.`,
        published: '2015-12-08T22:00:00.000Z',
        numberOfPages: 576,
        genres: ['health', 'nutrition', 'science'],
    }
];

