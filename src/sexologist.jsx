import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

const Section = ({ title, children }) => (
	<section className="container" style={{ paddingTop: 20 }}>
		<div className="card">
			<h3 style={{ marginTop: 0 }}>{title}</h3>
			<div className="list" style={{ gap: 8 }}>{children}</div>
		</div>
	</section>
)

function Page() {
	return (
		<div>
			<header className="sticky">
				<div className="container" style={{ paddingTop: 10, paddingBottom: 10 }}>
					<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
						<strong>Sexologist in Delhi</strong>
						<a className="btn btn-outline" href={`${import.meta.env.BASE_URL || '/'}index.html`}>Home</a>
					</div>
				</div>
			</header>

			<section className="container hero" style={{ paddingTop: 28 }}>
				<div>
					<div className="badge">Confidential • Evidence‑Based Care</div>
					<h1>Sexologist in Delhi — Confidential Sexual Health Care</h1>
					<p className="sub">Expert counselling and treatment for erectile dysfunction (ED), premature ejaculation (PE), low libido, sexual pain, and STIs. Private, judgement‑free care with a specialist.</p>
					<div className="cta">
						<a className="btn btn-primary" href="tel:+919871605858">Call Now</a>
						<a className="btn btn-outline" href="https://wa.me/919871605858" target="_blank" rel="noopener noreferrer">WhatsApp</a>
					</div>
				</div>
			</section>

			<Section title="Services">
				<div>Confidential sexual health counselling</div>
				<div>Erectile dysfunction (ED) evaluation and treatment</div>
				<div>Premature ejaculation (PE) assessment and management</div>
				<div>Low libido and hormonal evaluation</div>
				<div>STI screening, diagnosis and treatment</div>
				<div>Relationship and performance counselling</div>
			</Section>

			<Section title="Why Choose Us">
				<div>Confidential, judgement‑free environment</div>
				<div>Evidence‑based, personalized treatment plans</div>
				<div>Experienced specialist with 20+ years of practice</div>
				<div>Discrete bookings and flexible appointments</div>
			</Section>

			<Section title="Common Concerns We Treat">
				<div>Erectile dysfunction (difficulty achieving or maintaining erections)</div>
				<div>Premature ejaculation (finishing sooner than desired)</div>
				<div>Low sexual desire/libido and hormonal issues</div>
				<div>Painful intercourse or sexual pain disorders</div>
				<div>Performance anxiety and relationship stress</div>
			</Section>

			<footer className="container foot">
				<div>© {new Date().getFullYear()} Delhi Sexual Health Clinic. All rights reserved.</div>
			</footer>
		</div>
	)
}

const root = createRoot(document.getElementById('root'))
root.render(
	<StrictMode>
		<Page />
	</StrictMode>
)


