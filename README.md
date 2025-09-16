# MadenaBrand Starter (Next.js + Tailwind + Google Sheets)

## What this project includes
- Next.js (app router) + TypeScript
- Tailwind CSS
- Server-side Google Sheets integration to read products
- WhatsApp prefilled order links
- Simple SVG logo in `public/logo.svg`

## Setup
1. Make sure Node.js (>=18) and npm are installed.
2. Install dependencies:
   ```bash
   cd madenabrand
   npm install
   ```
3. Create Google Cloud API key and enable Google Sheets API:
   * Go to Google Cloud Console → APIs & Services → Enable APIs and Services → enable "Google Sheets API".
   * Create an API key and restrict it as you wish.
4. Create a Google Sheet with header row in `Sheet1`, e.g.:
   ```
   id | name | price | imageUrl | whatsappMessage
   MB-001 | Qara Çanta | 59 | https://example.com/bag.jpg | Salam, bu çantanı sifariş etmək istəyirəm: Qara Çanta
   ```
5. Copy `.env.example` to `.env.local` and fill:
   ```
   GOOGLE_SHEET_ID=your_google_sheet_id_here
   GOOGLE_API_KEY=your_api_key_here
   NEXT_PUBLIC_WHATSAPP_NUMBER=9945555514243
   ```
6. Run development server:
   ```bash
   npm run dev
   ```
## Notes
* The Google Sheets client uses the API key server-side. For production consider using a service account or server-side credentials with appropriate restrictions.
* If `GOOGLE_SHEET_ID` or `GOOGLE_API_KEY` is missing, the site will show a sample product so the site still works.
# madenabrand
