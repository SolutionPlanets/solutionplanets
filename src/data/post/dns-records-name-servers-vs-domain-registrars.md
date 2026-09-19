---
publishDate: 2026-09-19T00:00:00Z
title: "Why Your DNS Records Aren't Working: Understanding Name Servers vs. Domain Registrars"
excerpt: Updated your A record or MX record and nothing changed? Here's the difference between your domain registrar and your Name Servers, and exactly where DNS records actually need to be added.
image: ~/assets/images/dns-name-servers-vs-registrars.jpg
tags:
  - DNS
  - Domain Registrars
  - Web Hosting
metadata:
  canonical: https://www.solutionplanets.com//dns-records-name-servers-vs-domain-registrars
---

If you've ever tried to launch a new website, switch email providers to Google Workspace or Microsoft 365, or verify a domain, you've likely run into the phrase **"DNS Records."**

You log in to your domain registrar, update your **A Record** or **MX Record**, wait a few hours, and... nothing happens. Your website still points to the old server, or your emails stop arriving altogether.

When you reach out to support, you get a surprising answer: *"Because your Name Servers are pointing to your web host, you need to update your DNS records on their side, not ours."*

Why does this happen, and how does DNS actually work? Let's break it down in simple terms.

## The Post Office Analogy: How the Internet Finds Your Site

Think of the internet as a massive postal delivery system:

- **Your Domain Name (yourcompany.com):** This is your street address. It's what people type in to find you.
- **Your Domain Registrar (Where you bought the domain):** This is the **Central Post Office**. Its primary job is to record who owns the address and which local office manages delivery for it.
- **Name Servers (NS):** This is the **Local Delivery Station**. It holds the exact map showing which specific door leads to your website, and which mail truck carries your email.

When you register a domain with us, our system holds the master record. However, as soon as you point your domain's **Name Servers (NS)** to a web hosting provider (like cPanel, Hostinger, GoDaddy, Bluehost, Cloudflare, etc.), you are telling the global internet:

*"For all detailed directions — like where my website files live or where my emails should go — please ask my web hosting provider's local office directly."*

Once those custom Name Servers are set, the global internet skips your domain registrar's local notebook completely and goes straight to your web host for answers.

## What is an Authoritative DNS Zone?

In technical terms, whoever controls your **active Name Servers** holds the **Authoritative DNS Zone**.

| Record Type | What It Controls | Where It Must Be Added |
| :-- | :-- | :-- |
| **NS (Name Servers)** | Points your domain to the authoritative DNS manager. | **Domain Registrar Panel** |
| **A Record** | Connects your domain to your website's IP address. | **Authoritative DNS Panel** (Web Host) |
| **CNAME Record** | Points subdomains (www, app) to another host. | **Authoritative DNS Panel** (Web Host) |
| **MX Record** | Directs incoming emails (e.g., Google Workspace, Outlook). | **Authoritative DNS Panel** (Web Host) |
| **TXT / SPF / DKIM** | Used for domain ownership verification & email security. | **Authoritative DNS Panel** (Web Host) |

### The Golden Rule of DNS Management

**If your NS records point to Host B, adding an A record or MX record at Registrar A will have zero effect on the internet.**

## Step-by-Step: Where Should You Add Your Records?

Before making any changes to your website or email setup, follow this simple decision flow:

1. **Check where your Name Servers (NS) are pointing:**
   - **If pointing to Registrar Name Servers** (e.g., ns1.yourregistrar.com): Add and edit your A, MX, CNAME, and TXT records in your **Registrar Control Panel**.
   - **If pointing to Web Host Name Servers** (e.g., ns1.hostingprovider.com): Add and edit your A, MX, CNAME, and TXT records in your **Hosting Provider Control Panel**.

## Frequently Asked Questions

### 1. "I bought the domain from you, so why can't you update my MX records for me?"

When your Name Servers are directed to an external hosting provider, our system's DNS panel is turned off/ignored by global internet routers. Any records we add on our side will simply be bypassed. To make changes, you must log into the control panel provided by your web host (cPanel, Plesk, DirectAdmin, Cloudflare, GoDaddy, Hostinger, etc.).

### 2. "How can I check which Name Servers my domain is using?"

You can run a quick check using free public lookup tools like [DNSChecker.org](https://dnschecker.org) or via your computer's command terminal:

- **Windows / Mac / Linux:** Open your terminal or prompt and type:

  `nslookup -type=ns yourdomain.com`

Look at the results: if the output displays your web host's nameservers, that is where your DNS management zone lives!

### 3. "What if I want to manage all my DNS records with my domain registrar instead?"

You can easily bring management back! Simply update your domain's Name Servers back to our default registrar Name Servers. Once updated, you can point your website's **A Record** to your host's IP address directly from our domain control panel.

## Summary

- **Registrars** hold ownership records and direct traffic via **Name Servers**.
- **Web Hosts** manage active traffic flow once custom Name Servers are set.
- Always check where your **NS records** point before adding A, CNAME, or MX records to avoid downtime!

Have questions about setting up your domain or managing your records? Contact our support team anytime — we're here to keep your web presence running smoothly!

[[Top]](#top)
