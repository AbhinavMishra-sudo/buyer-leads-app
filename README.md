🏡 Buyer Leads App

A Next.js + Prisma powered application to manage buyer leads effectively.
This project is designed with a modular structure, type-safe validation, and database integration, making it a great foundation for real-world buyer management systems.

📌 Features

🔹 Buyer Management: Add, update, view, and organize buyer leads

🔹 Prisma ORM: Type-safe database layer

🔹 Zod Validation: Strong runtime + compile-time validations

🔹 Modular Components: Reusable UI for forms, tables, and history

🔹 API Routes: Built with Next.js app/api for clean backend logic

🔹 Scalable Repo Structure: Industry-standard folder organization

🔹 TypeScript First: Safer and more predictable development

🛠️ Tech Stack

Frontend: Next.js
 (App Router) + React

Database: PostgreSQL

ORM: Prisma

Validation: Zod

Styling: Tailwind CSS (extend as needed)

Language: TypeScript

📂 Folder Structure
buyer-leads-app/
 ├─ app/                   # Next.js App Router
 │   ├─ buyers/            # Buyer pages
 │   │   ├─ new/page.tsx   # Create buyer form page
 │   │   ├─ [id]/page.tsx  # Buyer detail page
 │   │   └─ page.tsx       # List buyers
 │   ├─ api/               # API routes
 │   │   └─ buyers/route.ts
 │   └─ layout.tsx         # Root layout
 │
 ├─ components/            # Reusable React components
 │   ├─ BuyerForm.tsx
 │   ├─ BuyerTable.tsx
 │   └─ BuyerHistory.tsx
 │
 ├─ lib/                   # Prisma client
 │   └─ prisma.ts
 │
 ├─ src/lib/utils/         # Utility helpers
 │   └─ validations.ts     # Zod schemas
 │
 ├─ prisma/                # Prisma schema + migrations
 │   └─ schema.prisma
 │
 ├─ public/                # Static assets
 │   ├─ file.svg
 │   ├─ globe.svg
 │   └─ ...
 │
 ├─ tests/                 # Unit/Integration tests
 │   └─ validation.test.ts
 │
 ├─ .env.example           # Example env vars (safe for repo)
 ├─ .gitignore
 ├─ README.md
 ├─ package.json
 ├─ tsconfig.json
 └─ next.config.ts

⚙️ Getting Started
1. Clone the repo
git clone https://github.com/your-username/buyer-leads-app.git
cd buyer-leads-app

2. Install dependencies
npm install

3. Setup environment variables

Create a .env file (see .env.example):

DATABASE_URL="postgresql://user:password@localhost:5432/buyerleads"

4. Setup Prisma
npx prisma generate
npx prisma migrate dev --name init

5. Run the app
npm run dev

🧪 Tests

Run unit tests with:

npm test

🚀 Deployment

Deploy easily on Vercel:

vercel


Or Dockerize (extend later).

📖 Roadmap

 Authentication (Magic Link / OAuth)

 Role-based access control

 Advanced filtering & search

 Export leads as CSV

 Unit + E2E test coverage

🤝 Contributing

Fork the repo

Create a new branch (feat/your-feature)

Commit changes with Conventional Commits

Push branch & create a PR
