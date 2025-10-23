---
inclusion: always
---

# Design System & Color Rules

This steering file defines the color system and design standards for consistent implementation across all generated code.

## 🎨 Color System

### Brand Colors (Primary UI Elements)

- **Primary Blue**: `#3B82F6` - Navigation, buttons, links, main actions
- **Primary Green**: `#22C55E` - Success states, positive actions, confirmations
- **Primary Purple**: `#A855F7` - Educational content, highlights, premium features
- **Primary Pink**: `#EC4899` - Notifications, non-critical alerts, messaging

### Status Colors

- **Green**: `#4CAF50` - Success states, completed tasks, healthy status
- **Yellow**: `#FFC107` - Warnings, attention needed
- **Red**: `#F44336` - Errors, critical alerts, emergency actions

### Background & Text Colors

- **Light Blue**: `#DBEAFE` - Info sections, educational backgrounds
- **Light Green**: `#DCFCE7` - Success message backgrounds
- **Light Pink**: `#FCE7F3` - Alert/notification backgrounds
- **Light Gray**: `#F9FAFB` - Neutral backgrounds, cards
- **White**: `#FFFFFF` - Main backgrounds, content areas
- **Dark Gray**: `#1F2937` - Primary text, headings
- **Medium Gray**: `#6B7280` - Secondary text, descriptions
- **Light Gray Text**: `#9CA3AF` - Placeholder text, disabled states

## 🔧 Color Implementation

### CSS Variables

```css
:root {
  /* Brand Colors */
  --primary-blue: #3b82f6;
  --primary-green: #22c55e;
  --primary-purple: #a855f7;
  --primary-pink: #ec4899;

  /* Status Colors */
  --status-green: #4caf50;
  --status-yellow: #ffc107;
  --status-red: #f44336;

  /* Background Colors */
  --light-blue: #dbeafe;
  --light-green: #dcfce7;
  --light-pink: #fce7f3;
  --light-gray: #f9fafb;
  --white: #ffffff;

  /* Text Colors */
  --dark-gray: #1f2937;
  --medium-gray: #6b7280;
  --light-gray-text: #9ca3af;
}
```

### JavaScript/TypeScript Colors

```typescript
export const colors = {
  // Brand Colors
  primaryBlue: "#3B82F6",
  primaryGreen: "#22C55E",
  primaryPurple: "#A855F7",
  primaryPink: "#EC4899",

  // Status Colors
  statusGreen: "#4CAF50",
  statusYellow: "#FFC107",
  statusRed: "#F44336",

  // Background Colors
  lightBlue: "#DBEAFE",
  lightGreen: "#DCFCE7",
  lightPink: "#FCE7F3",
  lightGray: "#F9FAFB",
  white: "#FFFFFF",

  // Text Colors
  darkGray: "#1F2937",
  mediumGray: "#6B7280",
  lightGrayText: "#9CA3AF",
} as const;
```

## 🎨 Design Guidelines

### Component Usage

- **Primary actions**: Use Primary Blue (`#3B82F6`)
- **Success/positive actions**: Use Primary Green (`#22C55E`)
- **Warnings**: Use Status Yellow (`#FFC107`)
- **Errors/critical actions**: Use Status Red (`#F44336`)
- **Neutral backgrounds**: Use Light Gray (`#F9FAFB`)
- **Text hierarchy**: Dark Gray for headings, Medium Gray for body text
