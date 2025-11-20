# Component Structure Guide

## Overview
There are **two separate Footer components** in this project, each serving different pages. This is **intentional**, not a mistake.

## Component Locations & Usage

### 1. **`home/components/Footer.tsx`** ✅ PRIMARY FOOTER
**Used by:**
- `home/page.tsx` (Homepage)
- `home/App.tsx` (Home app wrapper)

**Design:** 
- Ivory background with olive text
- Horizontal layout with brand, nav links, and action buttons
- Large "GENERIC ALT" watermark

**When to edit:** When you want to change the footer on the **main homepage**

---

### 2. **`components/Footer.tsx`** ✅ SECONDARY FOOTER
**Used by:**
- `invest/page.tsx` (Invest page)
- `home/AgentsPage.tsx` (Agents page)

**Design:**
- Dark background (#282a1e)
- Simple centered layout
- Minimal footer for secondary pages

**When to edit:** When you want to change the footer on **Invest and Agents pages**

---

## Header Components

### **`components/Header.tsx`** ✅ GLOBAL HEADER
**Used by:** All pages (imported in main App.tsx)

**Design:**
- Floating navigation islands
- Logo, nav links, and action buttons
- Responsive mobile menu

**When to edit:** When you want to change the header **across all pages**

---

## ⚠️ Important Notes

1. **Both Footers are needed** - They serve different pages with different designs
2. **Don't delete either Footer** - Each has its own purpose
3. **When making changes:**
   - For homepage footer → Edit `home/components/Footer.tsx`
   - For other pages' footer → Edit `components/Footer.tsx`
   - For header (all pages) → Edit `components/Header.tsx`

## Current Button Status ✅

Both Footer components now have functional **Log In** and **Start Sourcing** buttons that use `Link` components:
- **Log In** → `/login`
- **Start Sourcing** → `/signup`
