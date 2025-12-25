# Vagaro Booking Integration - Setup Guide

Follow these steps to get the information needed to integrate Vagaro booking into your website.

## Step 1: Log into Vagaro Dashboard

1. Go to [https://www.vagaro.com](https://www.vagaro.com)
2. Click **"Sign In"** in the top right
3. Enter your business account credentials
4. You should now be in your **Vagaro Business Dashboard**

---

## Step 2: Navigate to Widget Settings

There are two common paths to find the widget code. Try both:

### Path A: Settings Menu

1. Look for **"Settings"** or **"Setup"** in the left sidebar menu
2. Click on it
3. Look for **"Online Booking"** or **"Website Widgets"** or **"Embed Code"**
4. Click on it

### Path B: Direct Widget Page

1. Look for **"Widgets"** or **"Website Integration"** in the main menu
2. Or search for **"Online Booking Widget"** in the search bar
3. Click on it

---

## Step 3: Find the Widget Code

Once you're in the widget settings, you'll see one of these options:

### Option 1: JavaScript Widget (Most Common)

You'll see something like:

```html
<script src="https://www.vagaro.com/resources/WidgetEmbeddedLoader/XXXXX"></script>
```

**What to copy:**

- Copy the **entire script URL** (the part after `src="` and before `"`)
- Example: `https://www.vagaro.com/resources/WidgetEmbeddedLoader/OZqnZ3Z5YG...`

**Also check for:**

- A function name like `showVagaro()` or `showVag498()` or similar
- Any instructions that say "Call this function to open the widget"

### Option 2: Iframe Embed Code

You'll see something like:

```html
<iframe
  src="https://www.vagaro.com/YourBusinessName/widget?widgetId=XXXXX"
></iframe>
```

**What to copy:**

- Copy the **entire iframe URL** (the part after `src="` and before `"`)
- Example: `https://www.vagaro.com/YourBusinessName/widget?widgetId=12345`

### Option 3: HTML Embed Code

You'll see a block of HTML code that starts with `<div>` or similar.

**What to copy:**

- Copy the **entire HTML block**
- This might include `<div>`, `<script>`, and other HTML tags

---

## Step 4: Get Your Business Booking Page URL (Optional but Helpful)

1. Look for **"Public Booking Page"** or **"Online Booking Link"** in your dashboard
2. Or go to **Settings** > **Online Booking** > **Booking Page**
3. Copy the full URL
4. Example: `https://www.vagaro.com/YourBusinessName` or `https://www.vagaro.com/us/YourBusinessName`

---

## Step 5: Test the Widget (If Possible)

1. Look for a **"Preview"** or **"Test"** button in the widget settings
2. Click it to see how the widget looks
3. Note any specific instructions or requirements shown

---

## Step 6: What to Send Me

Please provide me with the following information:

### Required Information:

1. **Widget Type**: Which option did you find?

   - [ ] JavaScript Widget (script tag)
   - [ ] Iframe Embed Code
   - [ ] HTML Embed Code
   - [ ] Something else (describe it)

2. **Widget Code**: Paste the code/URL you found

3. **Function Name** (if JavaScript widget): What function name is mentioned?
   - Example: `showVagaro()`, `showVag498()`, `openVagaro()`, etc.

### Optional but Helpful:

4. **Business Booking Page URL**: Your public Vagaro booking page URL

5. **Screenshots**: If possible, take a screenshot of the widget settings page (blur out any sensitive info)

---

## Example of What I Need:

```
Widget Type: JavaScript Widget

Widget Code:
https://www.vagaro.com/resources/WidgetEmbeddedLoader/OZqnZ3Z5YG123456789

Function Name: showVagaro()

Business Booking Page URL:
https://www.vagaro.com/HolisticRising
```

---

## Troubleshooting

### Can't Find Widget Settings?

- Look for **"Integrations"**, **"Website Tools"**, **"Marketing"**, or **"Online Presence"** in the menu
- Check the **"Help"** section and search for "widget" or "embed code"
- Contact Vagaro support and ask: "Where do I find my website widget embed code?"

### Don't See Any Code?

- Some accounts need to enable online booking first
- Go to **Settings** > **Online Booking** > **Enable Online Booking**
- Then return to widget settings

### Multiple Widget Options?

- Choose the one that says **"Popup Widget"** or **"Modal Widget"** (not inline)
- Or choose the one that matches "JavaScript" or "Embed" option

---

## Once You Have the Information

1. Copy all the information from Step 6 above
2. Send it to me in a message
3. I'll integrate it into your website immediately!

---

## Quick Checklist

- [ ] Logged into Vagaro dashboard
- [ ] Found widget settings page
- [ ] Identified widget type (JavaScript/Iframe/HTML)
- [ ] Copied widget code/URL
- [ ] Found function name (if JavaScript widget)
- [ ] Got business booking page URL (optional)
- [ ] Ready to send information to me!

---

**Need Help?** If you're stuck at any step, let me know what you see and I'll guide you through it!
