import React from 'react'

const PhoneIcon = (props) => (
	<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
		<path d="M22 16.92v2a2 2 0 0 1-2.18 2c-3.2-.28-6.23-1.86-8.57-4.2s-3.92-5.37-4.2-8.57A2 2 0 0 1 9.99 6h2a1 1 0 0 1 1 .76l.45 1.8a1 1 0 0 1-.27.98l-1.2 1.2a12.05 12.05 0 0 0 4.58 4.58l1.2-1.2a1 1 0 0 1 .98-.27l1.8.45a1 1 0 0 1 .76 1v1.62z" fill="currentColor"/>
	</svg>
)

const WhatsAppIcon = (props) => (
	<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
		<path d="M20.52 3.48A11.94 11.94 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.54 4.1 1.49 5.83L0 24l6.33-1.47A11.93 11.93 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.26-6.19-3.48-8.52zM12 21.5c-1.9 0-3.67-.51-5.2-1.47l-.37-.23-3.69.86.79-3.6-.24-.37A9.47 9.47 0 0 1 2.5 12c0-5.23 4.27-9.5 9.5-9.5 2.54 0 4.93.99 6.72 2.78A9.46 9.46 0 0 1 21.5 12c0 5.23-4.27 9.5-9.5 9.5zm5.27-7.05c-.29-.15-1.7-.84-1.96-.95-.26-.1-.45-.15-.64.15-.19.3-.74.95-.91 1.15-.17.19-.34.22-.63.07-.29-.15-1.23-.45-2.34-1.45-.86-.77-1.44-1.72-1.61-2.01-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.52.15-.17.19-.3.3-.5.1-.19.05-.37-.03-.52-.08-.15-.64-1.55-.88-2.12-.23-.56-.47-.49-.64-.5-.17-.01-.37-.01-.56-.01-.19 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.19 2.1 3.2 5.08 4.49.71.31 1.27.49 1.71.62.72.23 1.37.2 1.89.12.58-.09 1.7-.69 1.94-1.37.24-.67.24-1.25.17-1.37-.07-.12-.26-.19-.55-.34z" fill="currentColor"/>
	</svg>
)

const ClickToCall = ({ phone }) => (
	<a className="btn btn-primary" href={`tel:${phone}`} aria-label="Call HIV Clinic">
		<PhoneIcon />
		<span className="btn-text">Call Now</span>
		<span className="phone-text" style={{ fontWeight: 800 }}> {phone}</span>
	</a>
)

const WhatsApp = ({ phone, text = 'Hello, I need PEP (Post-Exposure Prophylaxis) urgently.' }) => (
	<a className="btn btn-outline" href={`https://wa.me/${phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(text)}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp HIV Clinic">
		<WhatsAppIcon />
		<span className="btn-text">Chat on WhatsApp</span>
	</a>
)

const Stat = ({ value, label }) => (
	<div className="card" style={{ padding: 14 }}>
		<div style={{ fontSize: 22, fontWeight: 800 }}>{value}</div>
		<div style={{ color: 'var(--muted)', fontSize: 13 }}>{label}</div>
	</div>
)

export default function Landing() {
	const phone = '+91 98716 05858'

	return (
		<div>
			<header className="sticky">
				<div className="container" style={{ paddingTop: 10, paddingBottom: 10 }}>
					<div className="top-alert" role="note" aria-live="polite" style={{ marginBottom: 10 }}>
						<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M10.29 3.86l-7.6 13.18A2 2 0 0 0 4.29 20h15.42a2 2 0 0 0 1.6-3l-7.6-13.18a2 2 0 0 0-3.42 0z" fill="currentColor"/></svg>
						<strong>Urgent PEP within 72 hours.</strong> Start as soon as possible.
					</div>
					<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
						<div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
							<img src="/images/logo-doctor-in-delhi.svg" alt="Doctor in Delhi logo" width="160" height="36" style={{ display: 'block' }} />
							<strong className="brand-text">Doctor in Delhi</strong>
						</div>
						<div style={{ display: 'flex', gap: 10 }}>
							<ClickToCall phone={phone} />
							<WhatsApp phone={phone} />
						</div>
					</div>
				</div>
			</header>

			<section className="container hero fade">
				<div>
					<div className="badge">Confidential • Same‑Day Appointments</div>
					<h1>HIV & PEP Specialist — Same‑Day PEP (Post‑Exposure Prophylaxis)</h1>
					<p className="sub">Urgent exposure? Start PEP within 72 hours to reduce HIV risk. Private, judgement‑free care with expert HIV doctors. Fast testing, treatment, PrEP & PEP.</p>
					<div className="cta">
						<ClickToCall phone={phone} />
						<WhatsApp phone={phone} />
					</div>
					<div className="grid" style={{ marginTop: 16 }}>
						<Stat value="24/7" label="PEP Access Hotline" />
						<Stat value="<72h" label="Start PEP After Exposure" />
						<Stat value="100%" label="Confidential & Discreet" />
					</div>
				</div>
				<div className="card" style={{ display: 'grid', gap: 16 }}>
					<div style={{ position: 'relative', width: '100%', paddingTop: '56.25%', borderRadius: 12, overflow: 'hidden', border: '1px solid rgba(148,163,184,0.18)' }}>
						<iframe
							src="https://www.youtube.com/embed/x5aT4BzC2O4?rel=0&modestbranding=1"
							title="HIV & PEP information"
							style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowFullScreen
							loading="lazy"
						/>
					</div>
					<h3 style={{ marginTop: 0 }}>What is PEP?</h3>
					<p className="sub">PEP is a 28‑day emergency medication to help prevent HIV after a possible exposure. It must be started within 72 hours—the sooner, the more effective.</p>
					<div className="list">
						<div><span className="tick">✓</span> Start as early as possible after exposure</div>
						<div><span className="tick">✓</span> Doctor‑led plan with follow‑up testing</div>
						<div><span className="tick">✓</span> Side‑effects typically mild and manageable</div>
					</div>
				</div>
			</section>

			<section className="container fade-1" style={{ paddingTop: 0 }}>
				<div className="grid">
					<div className="card">
						<h3 style={{ marginTop: 0 }}>Services</h3>
						<div className="list">
							<div>PEP (Post‑Exposure Prophylaxis)</div>
							<div>PrEP (Pre‑Exposure Prophylaxis)</div>
							<div>Rapid HIV Testing & Viral Load</div>
							<div>STI Screening & Treatment</div>
							<div>HIV Treatment & Ongoing Care</div>
						</div>
					</div>
					<div className="card">
						<h3 style={{ marginTop: 0 }}>Why Choose Us</h3>
						<div className="list">
							<div><span className="tick">✓</span> Same‑day appointments</div>
							<div><span className="tick">✓</span> Discreet, confidential care</div>
							<div><span className="tick">✓</span> Experienced HIV specialists</div>
							<div><span className="tick">✓</span> Central Delhi location</div>
							<div><span className="tick">✓</span> Cash & digital payments</div>
						</div>
					</div>
					<div className="card">
						<h3 style={{ marginTop: 0 }}>Book Now</h3>
						<p className="sub">Call or message us for a confidential consultation. If you think you were exposed to HIV, do not delay—PEP is time‑sensitive.</p>
						<div className="cta">
							<ClickToCall phone={phone} />
							<WhatsApp phone={phone} />
						</div>
					</div>
				</div>
			</section>

			{/* Education: HIV, PEP, PrEP */}
			<section className="container fade-2" style={{ paddingTop: 0 }}>
				<div className="grid">
					<div className="card">
						<h3 style={{ marginTop: 0 }}>About HIV</h3>
						<p className="sub">HIV is a virus that can weaken the immune system. Early diagnosis and modern treatment allow people to live long, healthy lives. Regular testing and prevention (PrEP/PEP) reduce risk.</p>
						<div className="list">
							<div><span className="tick">✓</span> Rapid, discreet testing available</div>
							<div><span className="tick">✓</span> Same‑day linkage to care if needed</div>
							<div><span className="tick">✓</span> Supportive counselling and follow‑up</div>
						</div>
					</div>
					<div className="card">
						<h3 style={{ marginTop: 0 }}>PEP: After a Possible Exposure</h3>
						<p className="sub">PEP is an emergency 28‑day medication course to help prevent HIV after a potential exposure. It must be started within 72 hours—earlier is better.</p>
						<div className="list">
							<div><span className="tick">✓</span> Start ASAP, ideally within hours</div>
							<div><span className="tick">✓</span> Doctor review, baseline tests, follow‑ups</div>
							<div><span className="tick">✓</span> Guidance on side‑effects & adherence</div>
						</div>
					</div>
					<div className="card">
						<h3 style={{ marginTop: 0 }}>PrEP: Ongoing Protection</h3>
						<p className="sub">PrEP is a daily or on‑demand medication that helps prevent HIV before exposure. It’s highly effective when taken as prescribed.</p>
						<div className="list">
							<div><span className="tick">✓</span> Daily or event‑based (2‑1‑1) options</div>
							<div><span className="tick">✓</span> Regular monitoring and refills</div>
							<div><span className="tick">✓</span> Personalized prevention plan</div>
						</div>
					</div>
				</div>
			</section>

			{/* Doctor Profile */}
			<section className="container" style={{ paddingTop: 0 }}>
				<div className="card" style={{ display: 'grid', gap: 16, gridTemplateColumns: '140px 1fr', alignItems: 'center' }}>
					<img src="/images/doctor.jpg" alt="Doctor profile photo" width="140" height="140" style={{ width: 140, height: 140, objectFit: 'cover', borderRadius: 16, border: '1px solid rgba(168,179,207,0.15)' }} />
					<div>
						<h3 style={{ margin: 0 }}>Dr. Vinod Raina</h3>
						<div style={{ color: 'var(--muted)', marginBottom: 8 }}>SAFE HANDS MD • HIV & Sexology Specialist • 20+ years experience</div>
						<p className="sub" style={{ marginBottom: 10 }}>Dr. Vinod Raina is a leading HIV specialist in Delhi‑NCR with 20+ years of practice, trusted by thousands of patients for confidential HIV testing, PEP/PrEP prevention, and comprehensive STI care.</p>
						<div className="list" style={{ marginBottom: 10 }}>
							<div><span className="tick">✓</span> Same‑day PEP initiation within 72 hours</div>
							<div><span className="tick">✓</span> Discreet HIV testing and ongoing treatment</div>
							<div><span className="tick">✓</span> Patient‑centred counselling and follow‑ups</div>
						</div>
						<div className="list" style={{ gap: 6 }}>
							<div><strong>Clinic:</strong> E‑34, Ekta Apartment, Saket (Near Malviya Nagar Metro), New Delhi 110017</div>
							<div><strong>Hours:</strong> Mon–Sat 10:00 AM–7:00 PM • Sun 12:00 PM–3:00 PM</div>
							<div><strong>Phone:</strong> +91‑7687878787, +91‑9871605858</div>
						</div>
						<div className="cta" style={{ marginTop: 10 }}>
							<ClickToCall phone={phone} />
							<WhatsApp phone={phone} />
							<a className="btn btn-outline" href="https://www.drvinodraina.com/" target="_blank" rel="noopener noreferrer">Visit Website</a>
						</div>
					</div>
				</div>
			</section>

			{/* FAQs */}
			<section className="container" style={{ paddingTop: 0 }}>
				<div className="card">
					<h3 style={{ marginTop: 0 }}>Frequently Asked Questions</h3>
					<div className="list" style={{ gap: 6 }}>
						<details>
							<summary>How quickly should I start PEP?</summary>
							<p className="sub">Within 72 hours of exposure—ideally within a few hours. Call us for immediate guidance.</p>
						</details>
						<details>
							<summary>Is PEP safe? What are side‑effects?</summary>
							<p className="sub">Most people tolerate PEP well. Some experience mild nausea or fatigue, which we help manage.</p>
						</details>
						<details>
							<summary>What is the difference between PEP and PrEP?</summary>
							<p className="sub">PEP is after a possible exposure (28 days). PrEP is before exposure (ongoing prevention).</p>
						</details>
						<details>
							<summary>Do you offer discreet appointments?</summary>
							<p className="sub">Yes. We prioritise privacy and confidentiality. You can call or WhatsApp us discreetly.</p>
						</details>
					</div>
					<div className="cta" style={{ marginTop: 12 }}>
						<ClickToCall phone={phone} />
						<WhatsApp phone={phone} />
					</div>
				</div>
			</section>

			<footer className="container foot">
				<div>© {new Date().getFullYear()} Delhi HIV Clinic. All rights reserved.</div>
				<div style={{ marginTop: 6, fontSize: 12 }}>This page is for informational purposes and does not replace professional medical advice.</div>
			</footer>

			{/* Sticky mobile CTA (only visible on mobile via CSS) */}
			<div className="mobile-cta" aria-hidden="false">
				<div className="container" style={{ paddingTop: 0, paddingBottom: 0 }}>
					<div className="row">
						<ClickToCall phone={phone} />
						<WhatsApp phone={phone} />
					</div>
				</div>
			</div>
		</div>
	)
}


