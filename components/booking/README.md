# Vagaro Booking Integration

This directory contains components for integrating Vagaro's booking pages into your Next.js application with a beautiful animated popup modal. Each service has its own unique Vagaro booking URL that opens in an iframe.

## Current Status

✅ **Popup Modal**: Fully implemented with smooth animations  
✅ **Button Integration**: All "Book Now" buttons open the modal  
✅ **Iframe Integration**: Ready to display Vagaro booking pages  
⏳ **Booking URLs**: Ready to receive per-service booking URLs

## Setup Instructions

### Step 1: Get Your Vagaro Booking URLs

1. Log into your **Vagaro Business Dashboard** at [vagaro.com](https://vagaro.com)
2. Navigate to **Settings** > **Services** (or find your services list)
3. For each service, click on it and look for **"Booking Link"** or **"Share Link"** option
4. Copy the unique booking URL for each service
5. Example URL format: `https://www.vagaro.com/cl/2X00qk4hI2slpxTXwG8p9im9DUnVV7wKg5VoBFuC5RU=`

### Step 2: Configure Environment Variables (Optional)

1. Create a `.env.local` file in your project root (if it doesn't exist)
2. Add your general Vagaro booking page URL (fallback):

```env
NEXT_PUBLIC_VAGARO_GENERAL_URL=https://www.vagaro.com/YourBusinessName
```

This will be used as a fallback if a specific service doesn't have a booking URL yet.

### Step 3: Add Booking URLs to Services Data

For each sub-service in `lib/services-data.ts`, add the `bookingUrl` field:

```typescript
{
  slug: "trauma-release-treatment",
  title: "Trauma Release Treatment",
  description: "...",
  bookingUrl: "https://www.vagaro.com/cl/2X00qk4hI2slpxTXwG8p9im9DUnVV7wKg5VoBFuC5RU=",
  // ... other fields
}
```

### Step 4: Test

1. Start your development server: `npm run dev`
2. Navigate to any service detail page
3. Click the "Book Now" button
4. The animated popup should appear with the Vagaro booking page embedded in an iframe

## Components

### BookingModal
Animated modal component with backdrop blur, smooth transitions, and keyboard support (ESC to close).

### BookingModalProvider
Context provider that manages modal state globally and passes booking URLs to the widget. Wraps the entire app in `app/layout.tsx`.

### VagaroBookButton
Button component that opens the booking modal with a specific service's booking URL. Accepts `bookingUrl` prop.

### VagaroWidget
Component that renders the Vagaro booking page inside an iframe. Automatically uses the provided booking URL or falls back to the general booking page.

## Features

- ✨ Smooth animations with Framer Motion
- 🎨 Beautiful modal design matching your site theme
- ⌨️ Keyboard support (ESC to close)
- 📱 Responsive and mobile-friendly
- 🔒 Prevents body scroll when modal is open
- 🎯 Click outside to close
- 🚀 Ready for plug-and-play widget integration

## Troubleshooting

- **Modal not opening**: Check that `BookingModalProvider` is wrapping your app in `app/layout.tsx`
- **Iframe not loading**: Verify the booking URL is correct and accessible. Check browser console for CORS or loading errors
- **Fallback URL**: If a service doesn't have a booking URL, it will use `NEXT_PUBLIC_VAGARO_GENERAL_URL` or default to vagaro.com
- **URL format**: Ensure booking URLs are complete (include `https://`) and are the direct booking links from Vagaro

