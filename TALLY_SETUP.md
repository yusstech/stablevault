# Tally Waitlist Setup Instructions

## Overview
All CTA buttons across the site now link to either:
1. **Join Waitlist** - Opens your Tally form
2. **Contact Us** - Opens email to hi@relyr.app

## Step 1: Create Your Tally Form

1. Go to [tally.so](https://tally.so) and sign up for a free account
2. Create a new form with the following fields:

### Recommended Form Fields:

**Basic Information:**
- Full Name (text field, required)
- Email (email field, required)
- Phone Number (optional)

**User Type (dropdown, required):**
- Freelancer
- Business Owner
- Family/Remittance

**Additional Questions (optional but recommended):**
- Which corridor are you interested in? (e.g., US→Nigeria, UK→Kenya)
- Average monthly transfer volume (dropdown: <$500, $500-$2000, $2000-$5000, $5000+)
- What's your biggest pain point with current payment providers? (textarea)

### Form Settings:
- Enable "Redirect after submission" and set a thank you page
- Add custom thank you message: "Thank you for joining the waitlist! We'll be in touch soon."
- Consider adding an email notification to yourself when someone submits

## Step 2: Update Your Configuration

1. After creating your form, copy the form URL (it will look like: `https://tally.so/r/YOUR_FORM_ID`)

2. Open the configuration file: [app/config/constants.ts](app/config/constants.ts)

3. Replace `YOUR_FORM_ID` with your actual Tally form ID:

```typescript
export const WAITLIST_FORM_URL = 'https://tally.so/r/YOUR_ACTUAL_FORM_ID';
```

## Step 3: Test Everything

Visit each page and test the CTAs:

1. **Homepage** (http://localhost:3000)
   - Navigation: "Join Waitlist" button
   - Hero section: "Join Waitlist" button

2. **Freelancers Page** (http://localhost:3000/freelancers)
   - Hero section CTAs
   - Final CTA section

3. **Business Page** (http://localhost:3000/business)
   - Hero section CTAs
   - Final CTA section

4. **Families Page** (http://localhost:3000/families)
   - Hero section CTAs
   - Final CTA section

All "Join Waitlist" buttons should open your Tally form in a new tab.
All "Contact Us" buttons should open the user's email client to hi@relyr.app.

## Files Updated

The following files have been modified to use the waitlist form:

### Configuration:
- `app/config/constants.ts` - Central configuration for URLs

### Navigation:
- `app/components/Navigation.tsx` - Top navigation CTAs

### Hero Sections:
- `app/components/HeroSection.tsx` - Landing page hero
- `app/freelancers/components/FreelancerHeroSection.tsx`
- `app/business/components/BusinessHeroSection.tsx`
- `app/families/components/FamiliesHeroSection.tsx`

### CTA Sections:
- `app/freelancers/components/FreelancerCTASection.tsx`
- `app/business/components/BusinessCTASection.tsx`
- `app/families/components/FamiliesCTASection.tsx`

## Alternative: Self-Hosted Form

If you prefer not to use Tally, you can:

1. Build a custom form endpoint
2. Update `WAITLIST_FORM_URL` to point to your endpoint
3. The current setup will still work - it just opens the URL in a new tab

## Analytics

Consider adding UTM parameters to track which page users come from:

```typescript
// Example with UTM tracking
export const getWaitlistURL = (source: string) => {
  return `${WAITLIST_FORM_URL}?utm_source=${source}`;
};
```

Then update buttons to use:
```typescript
href={getWaitlistURL('freelancers-hero')}
```

## Next Steps

After collecting waitlist signups:
1. Export data from Tally dashboard
2. Import into your email marketing tool (Mailchimp, SendGrid, etc.)
3. Set up automated welcome email
4. Plan early access rollout strategy
