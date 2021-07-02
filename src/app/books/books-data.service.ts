import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { IBookDto } from './models/book-dto';

export class BooksDataService implements InMemoryDbService {

    createDb(): {} | Observable<{}> | Promise<{}> {
        const books: IBookDto[] = BOOKS;
        return { books };
    }
}

export const BOOKS: IBookDto[] = [
    {
        id: '1',
        image: 'assets/images/1.jpg',
        title: 'Atomic Habits',
        author: 'James Clear',
        rating: 5,
        status: 'read',
        started: '2020-09-10T22:00:00.000Z',
        read: '2020-12-16T22:00:00.000Z',
        description: `No matter your goals, Atomic Habits offers a proven framework for improving--every day. James Clear, one of the world's leading experts on habit formation, reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results.
        If you're having trouble changing your habits, the problem isn't you. The problem is your system. Bad habits repeat themselves again and again not because you don't want to change, but because you have the wrong system for change. You do not rise to the level of your goals. You fall to the level of your systems. Here, you'll get a proven system that can take you to new heights.
        Clear is known for his ability to distill complex topics into simple behaviors that can be easily applied to daily life and work. Here, he draws on the most proven ideas from biology, psychology, and neuroscience to create an easy-to-understand guide for making good habits inevitable and bad habits impossible. Along the way, readers will be inspired and entertained with true stories from Olympic gold medalists, award-winning artists, business leaders, life-saving physicians, and star comedians who have used the science of small habits to master their craft and vault to the top of their field.
        Learn how to:
        *  make time for new habits (even when life gets crazy);
        *  overcome a lack of motivation and willpower;
        *  design your environment to make success easier;
        *  get back on track when you fall off course;
        ...and much more.
        Atomic Habits will reshape the way you think about progress and success, and give you the tools and strategies you need to transform your habits--whether you are a team looking to win a championship, an organization hoping to redefine an industry, or simply an individual who wishes to quit smoking, lose weight, reduce stress, or achieve any other goal.`,
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
        description: `One of the world's most esteemed and influential psychologists, Roy F. Baumeister, teams with New York Times science writer John Tierney to reveal the secrets of self-control and how to master it. In Willpower, the pioneering researcher Roy F. Baumeister collaborates with renowned New York Times science writer John Tierney to revolutionize our understanding of the most coveted human virtue: self-control.
        In what became one of the most cited papers in social science literature, Baumeister discovered that willpower actually operates like a muscle: it can be strengthened with practice and fatigued by overuse. Willpower is fueled by glucose, and it can be bolstered simply by replenishing the brain's store of fuel. That's why eating and sleeping- and especially failing to do either of those-have such dramatic effects on self-control (and why dieters have such a hard time resisting temptation).
        Baumeister's latest research shows that we typically spend four hours every day resisting temptation. No wonder people around the world rank a lack of self-control as their biggest weakness. Willpower looks to the lives of entrepreneurs, parents, entertainers, and artists-including David Blaine, Eric Clapton, and others-who have flourished by improving their self-control.
        The lessons from their stories and psychologists' experiments can help anyone. You learn not only how to build willpower but also how to conserve it for crucial moments by setting the right goals and using the best new techniques for monitoring your progress. Once you master these techniques and establish the right habits, willpower gets easier: you'll need less conscious mental energy to avoid temptation. That's neither magic nor empty self-help sloganeering, but rather a solid path to a better life.
        Combining the best of modern social science with practical wisdom, Baumeister and Tierney here share the definitive compendium of modern lessons in willpower. As our society has moved away from the virtues of thrift and self-denial, it often feels helpless because we face more temptations than ever. But we also have more knowledge and better tools for taking control of our lives. However we define happiness-a close- knit family, a satisfying career, financial security-we won't reach it without mastering self-control.`,
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
        How did our species succeed in the battle for dominance? Why did our foraging ancestors come together to create cities and kingdoms? How did we come to believe in gods, nations and human rights; to trust money, books and laws; and to be enslaved by bureaucracy, timetables and consumerism? And what will our world be like in the millennia to come?
        In Sapiens, Dr Yuval Noah Harari spans the whole of human history, from the very first humans to walk the earth to the radical – and sometimes devastating – breakthroughs of the Cognitive, Agricultural and Scientific Revolutions. Drawing on insights from biology, anthropology, paleontology and economics, he explores how the currents of history have shaped our human societies, the animals and plants around us, and even our personalities. Have we become happier as history has unfolded? Can we ever free our behaviour from the heritage of our ancestors? And what, if anything, can we do to influence the course of the centuries to come?
        Bold, wide-ranging and provocative, Sapiens challenges everything we thought we knew about being human: our thoughts, our actions, our power ... and our future.`,
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
        description: `To find the keys to greatness, Collins's 21-person research team read and coded 6,000 articles, generated more than 2,000 pages of interview transcripts and created 384 megabytes of computer data in a five-year project. The findings will surprise many readers and, quite frankly, upset others.
        The Challenge
        Built to Last, the defining management study of the nineties, showed how great companies triumph over time and how long-term sustained performance can be engineered into the DNA of an enterprise from the very beginning.
        But what about the company that is not born with great DNA? How can good companies, mediocre companies, even bad companies achieve enduring greatness?
        The Study
        For years, this question preyed on the mind of Jim Collins. Are there companies that defy gravity and convert long-term mediocrity or worse into long-term superiority? And if so, what are the universal distinguishing characteristics that cause a company to go from good to great?
        The Standards
        Using tough benchmarks, Collins and his research team identified a set of elite companies that made the leap to great results and sustained those results for at least fifteen years. How great? After the leap, the good-to-great companies generated cumulative stock returns that beat the general stock market by an average of seven times in fifteen years, better than twice the results delivered by a composite index of the world's greatest companies, including Coca-Cola, Intel, General Electric, and Merck.
        The Comparisons
        The research team contrasted the good-to-great companies with a carefully selected set of comparison companies that failed to make the leap from good to great. What was different? Why did one set of companies become truly great performers while the other set remained only good?
        The Findings
        The findings of the Good to Great study will surprise many readers and shed light on virtually every area of management strategy and practice. The findings include:
        Level 5 Leaders: The research team was shocked to discover the type of leadership required to achieve greatness.
        The Hedgehog Concept (Simplicity within the Three Circles): To go from good to great requires transcending the curse of competence.
        A Culture of Discipline: When you combine a culture of discipline with an ethic of entrepreneurship, you get the magical alchemy of great results. Technology Accelerators: Good-to-great companies think differently about the role of technology.
        The Flywheel and the Doom Loop: Those who launch radical change programs and wrenching restructurings will almost certainly fail to make the leap.`,
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
        description: `One of the most valuable skills in our economy is becoming increasingly rare. If you master this skill, you'll achieve extraordinary results.
        Deep work is the ability to focus without distraction on a cognitively demanding task. It's a skill that allows you to quickly master complicated information and produce better results in less time. Deep work will make you better at what you do and provide the sense of true fulfillment that comes from craftsmanship. In short, deep work is like a super power in our increasingly competitive twenty-first century economy. And yet, most people have lost the ability to go deep-spending their days instead in a frantic blur of e-mail and social media, not even realizing there's a better way.
        In Deep Work, author and professor Cal Newport flips the narrative on impact in a connected age. Instead of arguing distraction is bad, he instead celebrates the power of its opposite. Dividing this book into two parts, he first makes the case that in almost any profession, cultivating a deep work ethic will produce massive benefits. He then presents a rigorous training regimen, presented as a series of four "rules," for transforming your mind and habits to support this skill.
        A mix of cultural criticism and actionable advice, Deep Work takes the reader on a journey through memorable stories-from Carl Jung building a stone tower in the woods to focus his mind, to a social media pioneer buying a round-trip business class ticket to Tokyo to write a book free from distraction in the air-and no-nonsense advice, such as the claim that most serious professionals should quit social media and that you should practice being bored. Deep Work is an indispensable guide to anyone seeking focused success in a distracted world.`,
        published: '2016-01-05T22:00:00.000Z',
        numberOfPages: 296,
        genres: ['productivity', 'management', 'business', 'self-help',  'personal-development'],
    },
    {
        id: '6',
        image: 'assets/images/7.jpg',
        title: 'How to Win Friends and Influence People',
        author: 'Dale Carnegie',
        rating: null,
        status: 'Read',
        started: '2021-04-28T22:00:00.000Z',
        read: '2021-05-28T22:00:00.000Z',
        description: `You can go after the job you want...and get it! You can take the job you have...and improve it! You can take any situation you're in...and make it work for you!
        Since its release in 1936, How to Win Friends and Influence People has sold more than 15 million copies. Dale Carnegie's first book is a timeless bestseller, packed with rock-solid advice that has carried thousands of now famous people up the ladder of success in their business and personal lives.
        As relevant as ever before, Dale Carnegie's principles endure, and will help you achieve your maximum potential in the complex and competitive modern age.
        Learn the six ways to make people like you, the twelve ways to win people to your way of thinking, and the nine ways to change people without arousing resentment..`,
        published: '1998-10-01T22:00:00.000Z',
        numberOfPages: 288,
        genres: ['self-help', 'psychology', 'personal-development', 'Nonfiction'],
    },
    {
        id: '7',
        image: 'assets/images/6.jpg',
        title: 'Educated',
        author: 'Tara Westover',
        rating: null,
        status: 'CurrentlyReading',
        started: '2021-04-28T22:00:00.000Z',
        read: '',
        description: `Tara Westover was 17 the first time she set foot in a classroom. Born to survivalists in the mountains of Idaho, she prepared for the end of the world by stockpiling home-canned peaches and sleeping with her "head-for-the-hills bag". In the summer she stewed herbs for her mother, a midwife and healer, and in the winter she salvaged in her father's junkyard.
        Her father forbade hospitals, so Tara never saw a doctor or nurse. Gashes and concussions, even burns from explosions, were all treated at home with herbalism. The family was so isolated from mainstream society that there was no one to ensure the children received an education and no one to intervene when one of Tara's older brothers became violent.
        Then, lacking any formal education, Tara began to educate herself. She taught herself enough mathematics and grammar to be admitted to Brigham Young University, where she studied history, learning for the first time about important world events like the Holocaust and the civil rights movement. Her quest for knowledge transformed her, taking her over oceans and across continents, to Harvard and to Cambridge. Only then would she wonder if she'd traveled too far, if there was still a way home.
        Educated is an account of the struggle for self-invention. It is a tale of fierce family loyalty and of the grief that comes with severing the closest of ties. With the acute insight that distinguishes all great writers, Westover has crafted a universal coming-of-age story that gets to the heart of what an education is and what it offers: the perspective to see one's life through new eyes and the will to change it.`,
        published: '2018-02-20T22:00:00.000Z',
        numberOfPages: 334,
        genres: ['autobiography', 'memoir', 'education', 'nonfiction'],
    },
    {
        id: '8',
        image: 'assets/images/8.jpg',
        title: 'Energy and Civilization: A History',
        author: 'Vaclav Smil',
        rating: null,
        status: 'ToRead',
        started: '',
        read: '',
        description: `A comprehensive account of how energy has shaped society throughout history, from pre-agricultural foraging societies through today's fossil fuel-driven civilization.
        Energy is the only universal currency; it is necessary for getting anything done. The conversion of energy on Earth ranges from terra-forming forces of plate tectonics to cumulative erosive effects of raindrops. Life on Earth depends on the photosynthetic conversion of solar energy into plant biomass. Humans have come to rely on many more energy flows—ranging from fossil fuels to photovoltaic generation of electricity—for their civilized existence. In this monumental history, Vaclav Smil provides a comprehensive account of how energy has shaped society, from pre-agricultural foraging societies through today's fossil fuel–driven civilization.
        Humans are the only species that can systematically harness energies outside their bodies, using the power of their intellect and an enormous variety of artifacts—from the simplest tools to internal combustion engines and nuclear reactors. The epochal transition to fossil fuels affected everything: agriculture, industry, transportation, weapons, communication, economics, urbanization, quality of life, politics, and the environment. Smil describes humanity's energy eras in panoramic and interdisciplinary fashion, offering readers a magisterial overview. This book is an extensively updated and expanded version of Smil's Energy in World History (1994). Smil has incorporated an enormous amount of new material, reflecting the dramatic developments in energy studies over the last two decades and his own research over that time.`,
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
        status: 'ToRead',
        started: '',
        read: '',
        description: `Think Again is a book about the benefit of doubt, and about how we can get better at embracing the unknown and the joy of being wrong. Evidence has shown that creative geniuses are not attached to one identity, but constantly willing to rethink their stances and that leaders who admit they don't know something and seek critical feedback lead more productive and innovative teams.
        New evidence shows us that as a mindset and a skilllset, rethinking can be taught and Grant explains how to develop the necessary qualities to do it. Section 1 explores why we struggle to think again and how we can learn to do it as individuals, arguing that 'grit' alone can actually be counterproductive. Section 2 discusses how we can help others think again through learning about 'argument literacy'. And the final section 3 looks at how schools, businesses and governments fall short in building cultures that encourage rethinking.
        In the end, learning to rethink may be the secret skill to give you the edge in a world changing faster than ever.`,
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
        status: 'ToRead',
        started: '',
        read: '',
        description: `From the physician behind the wildly popular website NutritionFacts.org, How Not to Die reveals the groundbreaking scientific evidence behind the only diet that can prevent and reverse many of the causes of disease-related death.
        The vast majority of premature deaths can be prevented through simple changes in diet and lifestyle. In How Not to Die, Dr. Michael Greger, the internationally-renowned nutrition expert, physician, and founder of NutritionFacts.org, examines the fifteen top causes of premature death in America -- heart disease, various cancers, diabetes, Parkinson's, high blood pressure, and more -- and explains how nutritional and lifestyle interventions can sometimes trump prescription pills and other pharmaceutical and surgical approaches, freeing us to live healthier lives.
        The simple truth is that most doctors are good at treating acute illnesses but bad at preventing chronic disease. The fifteen leading causes of death claim the lives of 1.6 million Americans annually. This doesn't have to be the case. By following Dr. Greger's advice, all of it backed up by strong scientific evidence, you will learn which foods to eat and which lifestyle changes to make to live longer.
        History of prostate cancer in your family? Put down that glass of milk and add flaxseed to your diet whenever you can. Have high blood pressure? Hibiscus tea can work better than a leading hypertensive drug-and without the side effects. Fighting off liver disease? Drinking coffee can reduce liver inflammation. Battling breast cancer? Consuming soy is associated with prolonged survival. Worried about heart disease (the number 1 killer in the United States)? Switch to a whole-food, plant-based diet, which has been repeatedly shown not just to prevent the disease but often stop it in its tracks.
        In addition to showing what to eat to help treat the top fifteen causes of death, How Not to Die includes Dr. Greger's Daily Dozen -- a checklist of the twelve foods we should consume every day. Full of practical, actionable advice and surprising, cutting edge nutritional science, these doctor's orders are just what we need to live longer, healthier lives.`,
        published: '2015-12-08T22:00:00.000Z',
        numberOfPages: 576,
        genres: ['health', 'nutrition', 'science'],
    }
];

