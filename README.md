 🏡 Buyer Leads App

A Next.js + Prisma  powered application to manage buyer leads effectively.  
Designed with a modular structure, type-safe validation, and database integration — making it a great foundation for real-world buyer management systems.

---

## 📌 Features

- 🔹 **Buyer Management** – Add, update, view, and organize buyer leads  
- 🔹 **Prisma ORM** – Type-safe database layer  
- 🔹 **Zod Validation** – Strong runtime + compile-time validations  
- 🔹 **Modular Components** – Reusable UI for forms, tables, and history  
- 🔹 **API Routes** – Built with Next.js App Router for clean backend logic  
- 🔹 **Scalable Repo Structure** – Industry-standard folder organization  
- 🔹 **TypeScript First** – Safer and more predictable development  

---

## 🛠️ Tech Stack

- **Frontend**: Next.js (App Router) + React  
- **Database**: PostgreSQL  
- **ORM**: Prisma  
- **Validation**: Zod  
- **Styling**: Tailwind CSS  
- **Language**: TypeScript  

---

## 📂 Folder Structure

buyer-leads-app/
├─ app/ # Next.js App Router
│ ├─ buyers/ # Buyer pages
│ │ ├─ new/page.tsx # Create buyer form page
│ │ ├─ [id]/page.tsx # Buyer detail page
│ │ └─ page.tsx # List buyers
│ ├─ api/ # API routes
│ │ └─ buyers/route.ts
│ └─ layout.tsx # Root layout
│
├─ components/ # Reusable React components
│ ├─ BuyerForm.tsx
│ ├─ BuyerTable.tsx
│ └─ BuyerHistory.tsx
│
├─ lib/ # Prisma client
│ └─ prisma.ts
│
├─ src/lib/utils/ # Utility helpers
│ └─ validations.ts # Zod schemas
│
├─ prisma/ # Prisma schema + migrations
│ └─ schema.prisma
│
├─ public/ # Static assets
│ ├─ file.svg
│ ├─ globe.svg
│ └─ ...
│
├─ tests/ # Unit / Integration tests
│ └─ validation.test.ts
│
├─ .env.example # Example env vars (safe for repo)
├─ .gitignore
├─ README.md
├─ package.json
├─ tsconfig.json
└─ next.config.ts

yaml
Copy code

---

## ⚙️ Getting Started

### 1️⃣ Clone the repo
```bash
git clone https://github.com/your-username/buyer-leads-app.git
cd buyer-leads-app
2️⃣ Install dependencies
bash
Copy code
npm install
3️⃣ Setup environment variables
Create a .env file (see .env.example):

env
Copy code
DATABASE_URL="postgresql://user:password@localhost:5432/buyerleads"
4️⃣ Setup Prisma
bash
Copy code
npx prisma generate
npx prisma migrate dev --name init
5️⃣ Run the app
bash
Copy code
npm run dev
🧪 Tests
Run unit tests with:

bash
Copy code
npm test
🚀 Deployment
Easily deploy on Vercel:

bash
Copy code
vercel
Or containerize using Docker (coming soon 🚧).

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

📜 License
This project is licensed under the MIT License.
See the LICENSE file for details.

yaml
Copy code

---

✨ This version adds:
- Better **spacing & formatting** for readability  
- Proper **code blocks** for commands/env  
- ✅ Checkboxes in roadmap  
- Clearer folder tree formatting  

Do you want me to also add **badges** (Next.js, Prisma, License, etc.) at the to
