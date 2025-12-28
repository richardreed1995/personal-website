export type Book = {
  id: string
  title: string
  author: string
  cover: string
  tags: string[]
  favorite?: boolean
  lifeChanging?: boolean
  summary: string
  learnings: string[]
}

export const books: Book[] = [
  {
    id: 'millionaire-fastlane',
    title: 'Millionaire Fastlane',
    author: 'MJ DeMarco',
    cover: 'https://covers.openlibrary.org/b/isbn/9780984358106-L.jpg',
    tags: ['Business', 'Mindset'],
    lifeChanging: true,
    summary: `I read this when I was just starting out with my own business. It's a nice mix of storytelling and frameworks that break many of the limiting beliefs we have about money and freedom. DeMarco challenges the traditional "get rich slow" advice and presents a compelling case for building businesses that can generate wealth faster.`,
    learnings: [
      'The "Slowlane" (traditional job + savings) rarely leads to wealth',
      'Time is your most valuable asset - trade it wisely',
      'Build systems that can scale without your direct time',
      'Focus on providing massive value to many people',
      'Control your income source - don\'t rely on a single employer',
    ],
  },
  {
    id: 'how-to-get-rich',
    title: 'How to Get Rich',
    author: 'Felix Dennis',
    cover: 'https://covers.openlibrary.org/b/isbn/9781591842057-L.jpg',
    tags: ['Business', 'Wealth'],
    favorite: true,
    lifeChanging: true,
    summary: `This book goes into the reality of trying to get rich. Where a lot of business books paint getting rich as this magical journey that's easy, Felix shows the reality of the situation in a way that demands uncommon sacrifice, focus, and willingness to make difficult decisions that most people avoid. The book's candour about the loneliness and challenges of entrepreneurship gave me comfort that hard times were expected.`,
    learnings: [
      'Ownership is everything - equity in a growing enterprise is the true path to wealth',
      'Delegate tasks but never abdicate control of crucial decisions',
      'Getting rich requires sacrifices most people aren\'t willing to make',
      'Fear of failure holds most people back more than lack of ability',
      'Start now - there\'s never a perfect time',
    ],
  },
  {
    id: 'the-dip',
    title: 'The Dip',
    author: 'Seth Godin',
    cover: 'https://covers.openlibrary.org/b/isbn/9781591841661-L.jpg',
    tags: ['Business', 'Strategy'],
    favorite: true,
    summary: `One of my biggest problems at the start of my journey was starting something, seeing some success, then switching to the next best thing. This book helped me understand that there is always a dip in any business - a period where things get hard before they get better. The challenge is finding the balance between being stubborn vs facing challenges worth overcoming.`,
    learnings: [
      'Every worthwhile endeavour has a "dip" - a hard period before success',
      'Strategic quitting is a skill - quit the wrong things early',
      'Being the best in the world at something narrow is valuable',
      'The dip is what separates the best from the rest',
      'Focus your limited resources on things where you can push through',
    ],
  },
  {
    id: 'built-to-sell',
    title: 'Built to Sell',
    author: 'John Warrillow',
    cover: 'https://covers.openlibrary.org/b/isbn/9781591845829-L.jpg',
    tags: ['Business', 'Entrepreneurship'],
    lifeChanging: true,
    summary: `I binged this book and have given copies to friends starting their own businesses. It taught me about being purposeful and focused on building a business the right way - one that could eventually run without me and be valuable to a buyer.`,
    learnings: [
      'Create a system that can deliver results without you',
      'Specialise in one process for one niche',
      'Avoid the trap of trying to do everything for everyone',
      'Recurring revenue is more valuable than one-time sales',
      'Document your processes so others can execute them',
    ],
  },
  {
    id: 'getting-everything-you-can',
    title: "Getting Everything You Can Out of All You've Got",
    author: 'Jay Abraham',
    cover: 'https://covers.openlibrary.org/b/isbn/9780312284541-L.jpg',
    tags: ['Marketing', 'Business'],
    favorite: true,
    summary: `I read this book as my agency was starting to scale. It shined a light on all the untapped potential in my business and how much more could be squeezed from it. It narrowed my focus on serving clients rather than selling customers, which created a network effect of advocates.`,
    learnings: [
      'There are only 3 ways to grow a business: more customers, higher transaction value, more frequent purchases',
      'Focus on serving clients, not just selling to customers',
      'Your existing customers are your biggest untapped asset',
      'Referrals come from exceptional service, not from asking',
      'Test everything - small improvements compound',
    ],
  },
  {
    id: '10x-is-easier-than-2x',
    title: '10x Is Easier Than 2x',
    author: 'Dan Sullivan & Benjamin Hardy',
    cover: 'https://covers.openlibrary.org/b/isbn/9781401969950-L.jpg',
    tags: ['Mindset', 'Growth'],
    favorite: true,
    summary: `By setting more ambitious goals, it focuses your strategy as there are fewer ways to get there. 10x goals eliminate competition by moving you to a different playing field entirely. Bigger thinking naturally attracts better collaboration, talent, and opportunities.`,
    learnings: [
      '10x goals force you to think differently, not just work harder',
      'Transformational growth requires reinvention, not optimisation',
      'You often achieve 80% of your goal - so aim higher',
      'What got you here won\'t get you there',
      'Eliminate everything that\'s not essential to the 10x goal',
    ],
  },
  {
    id: '100m-offers',
    title: '$100M Offers',
    author: 'Alex Hormozi',
    cover: 'https://covers.openlibrary.org/b/isbn/9781737475705-L.jpg',
    tags: ['Marketing', 'Sales'],
    lifeChanging: true,
    summary: `This book changed how I think about pricing and packaging services. Hormozi breaks down how to create offers so good that people feel stupid saying no. It's practical, tactical, and immediately applicable.`,
    learnings: [
      'Make your offer a "category of one" - don\'t compete on price',
      'Stack bonuses to increase perceived value',
      'Guarantee the outcome, not just the process',
      'Solve the dream outcome, not just the immediate problem',
      'Price on value, not on cost or time',
    ],
  },
  {
    id: '4-hour-work-week',
    title: 'The 4-Hour Work Week',
    author: 'Tim Ferriss',
    cover: 'https://covers.openlibrary.org/b/isbn/9780307465351-L.jpg',
    tags: ['Lifestyle', 'Business'],
    favorite: true,
    summary: `While some of the tactics are dated, the mindset shift this book provides is still valuable. It challenged my assumptions about work, retirement, and what's actually possible with intentional design of your life and business.`,
    learnings: [
      'Define your ideal lifestyle first, then work backwards',
      'Elimination is more powerful than optimisation',
      'Most "urgent" things aren\'t actually important',
      'Outsource and automate wherever possible',
      'Mini-retirements throughout life beat one big retirement at the end',
    ],
  },
]

