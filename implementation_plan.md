# Functional "Cinema Mode" Upgrade

This plan upgrades the streaming experience from sample placeholders to a functional **Smart Player** that can handle actual movie embeds (like YouTube) and direct video files. It also includes guidance on legal monetization to help you with your goal.

## User Review Required

> [!IMPORTANT]
> **Copyright Awareness**: To grow a successful and profitable website, I strongly recommend using official YouTube embeds or linking to official streaming platforms. Hosting pirated content (like Movierulz) can lead to legal issues and will prevent you from using standard ad networks (like AdSense).

## Proposed Changes

### Core Upgrade: The Smart Player

#### [MODIFY] [Watch.jsx](file:///c:/Users/Lenovo/OneDrive/Desktop/The%20Legend%20Prabhas/src/pages/Watch.jsx)
- **Hybrid Player**: Update the player to automatically detect the source. If it's a YouTube link, it will use a seamless Iframe; if it's a direct file, it will use the custom HTML5 controls.
- **Improved UX**: Ensure the transition between selecting a movie and playing it is instant and cinematic.

#### [MODIFY] [watch.css](file:///c:/Users/Lenovo/OneDrive/Desktop/The%20Legend%20Prabhas/src/styles/pages/watch.css)
- Add styles for the Iframe wrapper to ensure it fits perfectly within the premium "Cinema Frame".

### Data Layer: Functional Links

#### [MODIFY] [prabhasData.js](file:///c:/Users/Lenovo/OneDrive/Desktop/The%20Legend%20Prabhas/src/data/prabhasData.js)
- Add a `videoSource` property to distinguish between `direct` and `youtube`.
- Update `watchUrls` with real YouTube Full Movie links where legally available (many Prabhas movies are officially on YouTube).

### Monetization Support

#### [NEW] [MonetizationGuide.md](file:///c:/Users/Lenovo/.gemini/antigravity/brain/7b36d7b0-a0a2-4dc0-b4cf-383e38000bda/monetization_guide.md)
- Provide a summary of how to integrate Ads (Google AdSense replacements for fan sites) and Affiliate marketing (Amazon/Netflix) to help you earn your sports fees.

## Open Questions
- Do you already have specific video files (.mp4) you want to host, or are you primarily looking to embed movies from other platforms?

## Verification Plan

### Manual Verification
1.  Navigate to the **Streaming Hub**.
2.  Select a movie (e.g., Eeswar).
3.  Verify that it plays the official YouTube full movie directly inside the website's premium frame.
4.  Test quality switching for direct video files.
