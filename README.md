🌟 FairShare — Equitable Living Simplified

Human-centered fintech for shared living
Reducing roommate money conflicts through fairness intelligence and socially-aware expense management.

📌 Overview

FairShare is a smart expense sharing system designed for hostels and shared accommodations.
Unlike traditional expense trackers that focus only on numbers, FairShare focuses on people — addressing the emotional and social friction that arises from shared financial responsibilities.

We combine financial logic + behavioral design to transform awkward money conversations into smooth, conflict-free interactions.

🚩 Problem Statement

Shared living environments often experience:

Awkward reminders about unpaid dues

Uneven financial contributions

Silent resentment between roommates

Emotional stress around money conversations

Existing solutions:
❌ Track expenses
❌ Split bills
❌ Ignore human psychology

Money problems turn into relationship problems.

💡 Our Solution

FairShare integrates expense management with fairness intelligence and social comfort design.

Core Capabilities
System	Purpose
💰 Expense System	Track and split shared expenses
🤝 Fairness Engine	Ensures balanced financial contribution
💬 Social Comfort System	Generates polite, non-awkward reminders
⚖ Conflict Monitor	Detects imbalance before disputes arise
📊 Insight Engine	Analyzes spending behavior & mood patterns
🧠 Key Innovation

We focus on financial UX, not just financial math.

FairShare treats expense management as a social experience, not just a transaction log.

We introduce:

Contribution-based payer rotation

Emotional spending insights

Personality-aware reminder system

🚀 Quick Start

Clone the repository:

git clone https://github.com/namrataarya07/FairShare.git


Open the project:

Navigate to the /frontend folder

Open index.html in your browser

No installation required — this is a lightweight frontend prototype.

🧩 System Architecture
User → Expense System → Balance Engine → Fairness Engine → Conflict Monitor → Insight Engine

Flow of Interaction

User logs shared expense

System splits cost

Balances updated

Fairness engine evaluates contribution ratios

Conflict monitor checks imbalance

Insights engine updates behavioral data

🗄 Database Structure
Entity	Purpose
Users	Profile, payment behavior, personality tag
Rooms	Grouping of roommates
Expenses	Shared transactions
Balances	Who owes whom
Fairness Stats	Contribution ratios & imbalance tracking
⚙️ Fairness Logic (Core Algorithm)

FairShare ensures balanced contributions using proportional expense tracking.

The contribution score for any user i is calculated as:

contribution_score
𝑖
=
Total Paid by User
𝑖
∑
Total Room Expenses
contribution_score
i
	​

=
∑Total Room Expenses
Total Paid by User
i
	​

	​


The system prioritizes the user with the lowest contribution score as the suggested next payer.

Conflict Detection
imbalance
𝑖
=
Total Paid
𝑖
−
Total Room Expenses
𝑁
imbalance
i
	​

=Total Paid
i
	​

−
N
Total Room Expenses
	​


If the imbalance exceeds a defined threshold, the Conflict Monitor triggers a fairness alert.

🏷 Personality Tagging System

FairShare categorizes payment behavior patterns to improve social communication.

Tag	Criteria
🦸 Reliable Payer	Pays on time, contribution close to expected share
🐢 Slow but Pays	Average settlement delay > group average but eventually clears dues
🎭 Often Delays	Frequently crosses reminder thresholds
💸 Over-Contributor	Pays significantly more than expected share

Example: "Slow but Pays" Logic

A user receives this tag when:

Their average payment delay exceeds the room average

But their total dues are eventually cleared

No outstanding balance beyond the defined limit

This helps tailor reminder tone and prevent unnecessary social friction.

📊 Features in Detail
💰 Expense Management

Add shared expense

Category tracking

Budget monitoring

🤝 Fairness Intelligence

Suggests next payer

Fairness meter

Contribution tracking

💬 Social Comfort

Polite reminder messages

Silent Mode (budget tight)

Mood tagging during spending

⚖ Conflict Prevention

Early imbalance detection

Payment personality insights

📈 Smart Insights

Spending patterns

Mood-based analysis

Behavioral budgeting tips

🎨 UI/UX Design Philosophy

Calm, student-friendly design

Minimalist navy-cream theme

Emotionally safe financial interface

We design for comfort, not pressure.

🌍 Impact

FairShare:

✔ Reduces roommate money conflicts
✔ Encourages fair contribution
✔ Removes social awkwardness
✔ Builds financial awareness
✔ Protects friendships

🔮 Future Scope

UPI & payment integration

WhatsApp smart reminder bot

AI spending prediction

Multi-room analytics

Gamified saving challenges

🛠 Tech Stack
Layer	Technology
UI/UX	Figma
Frontend	HTML, CSS, JavaScript
Charts	Chart.js
Storage	LocalStorage / Firebase
🎥 Demo

Demo video link will be added here.

❤️ Our Vision

FairShare is not just about splitting bills.
It’s about creating financial harmony in shared living.

Fintech that protects friendships.
