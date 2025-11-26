# TheraLink AI – AI-Powered Therapy Booking Platform 🧠

TheraLink AI is a modern therapy booking platform that blends traditional appointment scheduling with an AI wellness assistant. Users can book therapy sessions, interact with an AI voice agent, manage subscriptions, and receive automated emails — all inside a clean, responsive interface.

![App Preview](./public/preview-project.png)

🔗 **Live Demo:** https://theralinkai.vercel.app/

## 🚀 Tech Stack

Next.js · TypeScript · PostgreSQL · Prisma · TailwindCSS · Shadcn · Clerk · Resend · Vapi AI · Lucide · TanStack Query

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
