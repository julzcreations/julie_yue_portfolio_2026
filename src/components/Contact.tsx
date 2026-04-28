export default function Contact() {
  return (
    <section
      id="contact"
      className="relative mx-auto max-w-[1080px] px-6 py-32 sm:px-12"
      aria-label="Contact"
    >
      <h2
        className="mb-8 font-display text-[clamp(1.75rem,3vw,2.5rem)] font-medium leading-tight"
        style={{ fontVariationSettings: "'opsz' 60, 'SOFT' 80" }}
      >
        Reach out
      </h2>
      <ul className="space-y-3 text-[1.05rem]">
        <li>
          <a
            href="mailto:julie.yue.2011@gmail.com"
            className="text-ink underline-offset-4 transition-colors hover:text-sky hover:underline"
          >
            julie.yue.2011@gmail.com
          </a>
        </li>
        <li>
          <a
            href="https://github.com/julzcreations"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink underline-offset-4 transition-colors hover:text-sky hover:underline"
          >
            github.com/julzcreations
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/julzcreations/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink underline-offset-4 transition-colors hover:text-sky hover:underline"
          >
            linkedin.com/in/julzcreations
          </a>
        </li>
      </ul>
      <p className="mt-12 text-[0.92rem] sm:text-[1rem] text-ink/75">
        © Julzcreations · julzcreations.com
      </p>
    </section>
  )
}
