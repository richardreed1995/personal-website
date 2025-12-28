import { notFound } from 'next/navigation'
import Link from 'next/link'

const posts: Record<string, { title: string; date: string; content: React.ReactNode }> = {
  'middle': {
    title: 'Avoid the middle',
    date: 'September 15, 2025',
    content: (
      <div className="page-content">
        <p>
          You&apos;ve probably seen the midwit meme — where the simpleton and the genius arrive at the same conclusion, while the overthinking intellectual gets stuck in the weeds. There&apos;s a reason it resonates.
        </p>
        <p>
          The middle is where things go to die. It&apos;s drab, uninspiring, slow, grey. It feels safe because it&apos;s neither hot nor cold, just lukewarm. But the trouble with lukewarm is you don&apos;t really have anything. You&apos;re not pushing in either direction.
        </p>
        <p>
          Let&apos;s take a service business as an example.
        </p>
        <p>
          The middle looks like a medium-sized retainer. Not cheap, not premium. The problem? You can&apos;t afford great talent, so you hire cheap labour. Your clients aren&apos;t paying enough to be truly invested, but they&apos;re paying enough to care about results. You&apos;re stuck in a valley where you don&apos;t have the margin to scale, don&apos;t have the margin to deliver exceptional work, and winning becomes genuinely difficult.
        </p>
        <p>
          You can go up. Charge more. When clients pay more, they&apos;re more invested in making it work — they help you succeed. You can hire better people, deliver better results, and those results justify the premium. The clients who pay more tend to be better clients anyway — they&apos;re running established businesses, they understand value. The downside? It&apos;s harder to sell. You need the track record to warrant it.
        </p>
        <p>
          Or you can go down. Automate aggressively. Productise everything. Deliver the 80/20 — a standardised offering that won&apos;t work for everyone, but because you&apos;re not charging a fortune, people are happy with the ROI. There&apos;s a massive opportunity here for service businesses built on automation and efficiency.
        </p>
        <p>
          Both directions can work. The middle rarely does.
        </p>
        <p>
          This applies beyond business too — pricing, relationships, health. The uncomfortable truth is that commitment to an edge usually beats comfortable compromise.
        </p>
      </div>
    ),
  },
  'bookend-your-day': {
    title: 'Bookend Your Day',
    date: 'November 28, 2025',
    content: (
      <div className="page-content">
        <p>
          One of the best ways I&apos;ve found to set myself up for success is to bookend my day. I block out an hour or two at the start and end of each day. Whatever chaos happens in between those two bookends, as long as I hit these two blocks, it centres me. I tick off what matters, but I still have flexibility in the middle.
        </p>
        <p>
          If I try to rigidly schedule my entire day, things inevitably shift and I feel thrown off. But early morning and late evening? Those are yours. Nobody&apos;s interrupting. Nothing&apos;s changing. You control them completely.
        </p>
        <h2>Morning</h2>
        <p>
          For me, mornings aren&apos;t about journaling or deep reading — they&apos;re about movement. Get up, go to the gym, have a coffee, eat a proper breakfast. That&apos;s it. Once I&apos;ve done that, I feel ready to work. Simple, but it makes a huge difference.
        </p>
        <h2>Evening</h2>
        <p>
          This is actually the more important one. Everyone obsesses over morning routines, but I think a solid evening routine matters more. Here&apos;s what mine looks like:
        </p>
        <ul>
          <li>Clean my space — I don&apos;t want to wake up somewhere messy</li>
          <li>Plan tomorrow&apos;s tasks — doing this at night means your subconscious starts working on problems while you sleep</li>
          <li>Read — wind down properly</li>
          <li>Lay out clothes — gym kit ready, work clothes ready, zero friction in the morning</li>
        </ul>
        <p>
          The evening routine takes under an hour. The morning takes about an hour. Two hours total, and they&apos;re non-negotiable.
        </p>
        <p>
          When I nail both bookends, I&apos;m far more likely to get my work done, I feel significantly better, and I&apos;m not locked into some rigid schedule that falls apart the moment something unexpected happens.
        </p>
      </div>
    ),
  },
  'the-vehicle-is-all-that-matters': {
    title: 'The Vehicle Is All That Matters',
    date: 'December 12, 2025',
    content: (
      <div className="page-content">
        <p>
          I recently went on a trip with around 30 entrepreneurs, mostly in e-commerce. My main takeaway? The vehicle you&apos;re in determines your success more than almost anything else.
        </p>
        <p>
          Looking at the group, a lot of them were actually very similar. The ones running the most successful businesses weren&apos;t working the hardest. They weren&apos;t the most confident or the most alpha. They weren&apos;t more intelligent than the rest.
        </p>
        <p>
          The main difference was simply what they were selling. There was more demand for it. They launched products at the right time, which meant they could scale quickly. That was it.
        </p>
        <h2>What the successful ones had in common</h2>
        <p>
          If anything, the most successful were notably humble. No showing off, very matter-of-fact. They understood the logic behind their business and didn&apos;t overcomplicate things. They were patient. They took action, but once they had initial success, they were already actively looking for the next opportunity.
        </p>
        <p>
          The other thing that stood out was the depth of research they did before launching anything.
        </p>
        <p>
          There&apos;s common advice to just start, get moving, figure it out as you go. I agree with that, especially for beginners. But as you become more experienced, it&apos;s critical to sharpen your senses and understand where opportunity actually lies.
        </p>
        <p>
          This doesn&apos;t come from magical inspiration. It comes from constantly looking, analysing, and weighing up where demand waves are heading. The best entrepreneurs I met had notes upon notes on where they thought opportunities existed. What&apos;s out there, where they could add value, what customers are unhappy with. Some would scour every review in a category to understand what was missing.
        </p>
        <h2>The takeaways</h2>
        <p>
          Be ambitious about the vehicle you choose. The best opportunities are where it&apos;s hard to execute, where you&apos;re solving real problems and adding massive value. Understand that there&apos;s a ceiling on how big you can get if you&apos;re selling something people don&apos;t desperately want.
        </p>
        <p>
          Always be analysing. Where are people spending money? Where are the trends heading? Where are customers frustrated with existing options?
        </p>
        <p>
          But here&apos;s the tension: don&apos;t just jump whenever you see something shiny. Bide your time. Throw away 99% of ideas. Keep detailed notes, analyse what&apos;s good and bad, and wait.
        </p>
        <p>
          Then, when something ticks every box and you&apos;re early to a genuine wave, move fast and pounce.
        </p>
        <p>
          Slow until it&apos;s time to be quick. That&apos;s probably the hardest skill in entrepreneurship.
        </p>
      </div>
    ),
  },
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = posts[slug]

  if (!post) {
    notFound()
  }

  return (
    <article>
      <header style={{ marginBottom: '2rem' }}>
        <Link href="/posts" style={{ fontSize: '0.9rem', marginBottom: '1rem', display: 'inline-block' }}>
          ← Back to posts
        </Link>
        <h1 className="section-title">{post.title}</h1>
        <p className="post-date">{post.date}</p>
      </header>
      {post.content}
    </article>
  )
}

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }))
}

