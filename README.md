# TheraLink – AI-Powered Therapy Booking Platform 🧠

TheraLink AI is a modern therapy booking platform that blends traditional appointment scheduling with an AI wellness assistant. Users can book therapy sessions, interact with an AI voice agent, manage subscriptions, and receive automated emails — all inside a clean, responsive interface.

![Preview](./public/preview-project.png)

🔗 **Live Demo:** https://theralinkai.vercel.app/

## 🚀 Tech Stack

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Shadcn](https://img.shields.io/badge/Shadcn-000000?style=for-the-badge&logo=shadcn&logoColor=white)
![Clerk](https://img.shields.io/badge/Clerk-6C47FF?style=for-the-badge&logo=clerk&logoColor=white)
![Resend](https://img.shields.io/badge/Resend-000000?style=for-the-badge&logo=resend&logoColor=white)
![Vapi AI](https://img.shields.io/badge/Vapi%20AI-FF6D00?style=for-the-badge&logo=ai&logoColor=white)
![Lucide](https://img.shields.io/badge/Lucide-FFD700?style=for-the-badge&logo=lucide&logoColor=black)
![TanStack Query](https://img.shields.io/badge/TanStack%20Query-FF4154?style=for-the-badge&logo=react-query&logoColor=white)

## 🌟 Key Features (Short & Clear)

- 🔐 **Auth System** – Google, GitHub, Email/Password, 6-digit verification
- 📅 **3-Step Booking** – Therapist → Service/Time → Confirmation
- 📩 **Email Alerts** – Booking confirmations + reminders
- 🗣️ **AI Voice Agent** – Vapi-powered AI wellness assistant
- 📊 **Admin Dashboard** – Manage appointments and users
- 💳 **Subscriptions** – Free + 2 Paid Plans, smart upgrades
- 🧾 **Invoices** – Auto-generated via email
- 🎨 **Modern UI** – Tailwind + Shadcn + Lucide
- ⚡ **Optimized DX** – TanStack Query, TypeScript, Git workflow

## 🔧 Environment Variables

```
ADMIN_EMAIL=
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

# NeonDB
DATABASE_URL=

# Vapi
NEXT_PUBLIC_VAPI_ASSISTANT_ID=
NEXT_PUBLIC_VAPI_API_KEY=

# Resend For Email
RESEND_API_KEY=
```

---

## 🛠️ Installation

Follow these steps to set up the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/LokendraNath/TheraLink.git
```

### 2. Navigate Into the Folder

```
cd TheraLink
```

### 3. Install Dependencies

```
npm install
```

### 4. Setup Environment Variables

- Create a .env file and add all required keys from the README.

### 5. Setup Prisma

```
npx prisma generate
npx prisma db push
```

### 6. Run the Development Server

```
npm run dev
```
