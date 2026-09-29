---
publishDate: 2026-09-21T00:00:00Z
title: "DNS Migration Checklist: How to Move Name Servers Without Breaking Your Website or Email"
excerpt: Moving your domain's Name Servers to a new provider? Here's a step-by-step checklist to move every DNS record safely, so your website stays up and your emails keep arriving.
image: ~/assets/images/dns-migration-checklist.jpg
tags:
  - DNS
  - Domain Registrars
  - Web Hosting
  - Email
metadata:
  canonical: https://www.solutionplanets.com/dns-migration-checklist
---

In our last post, we explained [why DNS records sometimes don't work](https://www.solutionplanets.com/dns-records-name-servers-vs-domain-registrars): your records only count if they are added wherever your **active Name Servers** point.

But what happens when you want to **move** your Name Servers? Maybe you're switching web hosts, moving DNS to Cloudflare, or bringing everything back to your registrar.

Here's the part many people don't expect: **when Name Servers move, your DNS records do not move with them.** The new provider starts with an empty (or auto-filled) zone, and anything you forget to copy simply stops working.

Usually the website breaks first, so someone notices and fixes the A record quickly. Email is different. When MX, SPF, or DKIM records are missed, email often fails **quietly**: messages bounce, land in spam, or never arrive, and nobody notices for days.

This checklist helps you avoid that.

## The Moving House Analogy

Remember our post office analogy? Your Name Servers are the **Local Delivery Station** that holds the map for your address.

Changing Name Servers is like moving to a new delivery station. The Central Post Office (your registrar) will start sending all enquiries to the new station, but the new station doesn't automatically get a copy of your old map. **You have to hand it over yourself, completely, before the switch.**

## The Checklist at a Glance

| Stage | Step | Why It Matters |
| :-- | :-- | :-- |
| **Before** | 1. Confirm where your Name Servers point today | Makes sure you copy from the right place |
| **Before** | 2. Export or list every DNS record | Nothing gets left behind |
| **Before** | 3. Lower your TTL 24–48 hours in advance | Changes take effect faster |
| **Before** | 4. Rebuild all records at the new provider | The new zone is ready before traffic arrives |
| **Before** | 5. Test the new zone before switching | Catch mistakes while nothing is live |
| **Before** | 6. Check DNSSEC | Avoid your domain going completely offline |
| **Switch** | 7. Update Name Servers at your registrar | The actual move |
| **After** | 8. Test website, email, and subdomains | Confirm everything works |
| **After** | 9. Keep the old zone for 1–2 weeks | Safety net during the changeover |

Let's go through each step.

## Before the Switch

### Step 1: Confirm Where Your Name Servers Point Today

Don't rely on the dashboard you happen to be logged into. Check what the internet actually sees:

- **Registry check (most reliable):** Look up your domain on a WHOIS or RDAP lookup tool (for example, [lookup.icann.org](https://lookup.icann.org)). The "Name Servers" listed there are what the domain's registry has on record.
- **Quick terminal check:**

  `nslookup -type=ns yourdomain.com`

**Watch out for duplicate zones.** It's common for a domain to have a DNS zone at **two** providers, for example at both the registrar and the old web host. Both panels look active and both let you edit, but only the one matching your Name Servers is actually used. Copy your records from **that** one.

### Step 2: Export or List Every DNS Record

Many providers let you export the full zone as a file (often called a "zone file" or "BIND export"). If yours doesn't, take screenshots or copy every record into a spreadsheet.

Make sure you capture all of these:

| Record Type | What It Does | Easy to Miss? |
| :-- | :-- | :-- |
| **A / AAAA** | Points your domain to your website's server | Rarely missed |
| **CNAME** | Points subdomains (www, app, shop) elsewhere | Sometimes |
| **MX** | Tells the world where to deliver your email | **Often missed** |
| **TXT (SPF)** | Lists which servers may send email for you | **Often missed** |
| **TXT / CNAME (DKIM)** | Digital signature that proves your email is genuine | **Very often missed** |
| **TXT (DMARC)** | Tells receivers what to do with suspicious email | **Often missed** |
| **TXT (verification)** | Google, Microsoft, Meta, and other ownership checks | Often missed |
| **SRV** | Used by some calling and Microsoft 365 services | Often missed |
| **CAA** | Controls who can issue SSL certificates | Sometimes |

**Tip:** DKIM records live on names like `selector._domainkey.yourdomain.com`, and DMARC lives on `_dmarc.yourdomain.com`. They don't always show up clearly in a panel. Cross-check with your email provider's admin console (Google Workspace, Microsoft 365, Zoho, etc.) to confirm which DKIM records you should have.

**Also check for auto-created records.** Many web hosts quietly add records like `mail`, `webmail`, `autodiscover`, or `ftp`. If you use any of them, copy them too.

### Step 3: Lower Your TTL 24–48 Hours in Advance

**TTL (Time To Live)** tells internet servers how long to remember a record before checking again. It's often set to a few hours or even a day.

A day or two before your move, reduce the TTL on your records at the **current** provider to something short, like **300 seconds (5 minutes)**. Then wait for the old TTL to run out. Now, any fixes you make during the move will take effect in minutes instead of hours.

**One honest note:** the Name Server change itself is controlled by your domain's registry (for example, the `.com` registry), and you can't shorten that. So some visitors may reach the **old** provider for up to 24–48 hours after the switch. That's exactly why both the old and the new zone need to be correct during that period.

### Step 4: Rebuild All Records at the New Provider

Add every record from Step 2 into the new provider's DNS panel. Some providers (like Cloudflare) try to import records automatically. That helps, but **never trust an automatic import blindly**. It commonly misses DKIM and other records on less common names.

Go through your list **record by record** and tick each one off.

**Also remove anything wrong.** If the new provider added default records (like an A record pointing to a parking page, or MX records for their own mail service), delete or correct them.

### Step 5: Test the New Zone Before Switching

You can ask the new provider's Name Servers directly, even before they're live. Add the new Name Server at the end of the command:

- Website: `nslookup yourdomain.com ns1.newprovider.com`
- Email: `nslookup -type=mx yourdomain.com ns1.newprovider.com`
- SPF: `nslookup -type=txt yourdomain.com ns1.newprovider.com`

Replace `ns1.newprovider.com` with your new provider's actual Name Server. If the answers match your old records, you're ready.

### Step 6: Check DNSSEC

**DNSSEC** is a security feature that digitally signs your DNS. If it's turned on at your current provider, switching Name Servers without planning can make your domain **fail to load entirely**.

If DNSSEC is enabled, turn it off at your registrar (remove the DS record) and wait a day **before** switching. Once the new provider is live, you can turn DNSSEC back on there. If you're unsure, ask your registrar or contact us before making the change.

## Making the Switch

### Step 7: Update Name Servers at Your Registrar

Log in to your **domain registrar** (where you bought the domain) and replace the old Name Servers with the new ones. Copy them exactly as your new provider gives them.

## After the Switch

### Step 8: Test Website, Email, and Subdomains

Over the next few hours, check:

- **Name Servers:** `nslookup -type=ns yourdomain.com` shows the new provider (or check [DNSChecker.org](https://dnschecker.org) to see different locations around the world).
- **Website:** Your site and the `www` version both load, with a working SSL padlock.
- **Subdomains:** Any app, shop, or portal subdomains load correctly.
- **Receiving email:** Send an email **to** your domain from an outside account like Gmail.
- **Sending email:** Send an email **from** your domain to a Gmail account. Open it, click the three-dot menu, choose **"Show original,"** and confirm **SPF, DKIM, and DMARC all say PASS.**

### Step 9: Keep the Old Zone for 1–2 Weeks

Don't delete the DNS zone at your old provider straight away. Some visitors and mail servers will keep using it until the change reaches them. Once everything has been stable for a week or two, you can clean it up and set your TTLs back to normal values (for example, 1 hour).

## Common Mistakes We See

- **Fixing only the A record.** The website comes back, so everyone relaxes, while email quietly fails in the background.
- **Editing the wrong zone.** Two providers both have a zone, and changes are made in the one that isn't live, which looks exactly like "DNS is not working."
- **Trusting an automatic import.** It saves time, but it misses records more often than you'd think.
- **Forgetting DNSSEC.** The one mistake that can take the whole domain offline.
- **Deleting the old zone on day one.** Leaves visitors who are still on the old path with nothing.

## Frequently Asked Questions

### 1. "How long does a Name Server change take?"

Usually a few hours, but it can take up to 24–48 hours to reach everyone. With the old and new zones both correct, your visitors won't notice any difference during that time.

### 2. "Will my website go down during the move?"

Not if you follow this checklist. Because both zones hold the same records, visitors reach the same website whichever path they take.

### 3. "Will I lose emails?"

Not if your MX records are identical at both providers. Email servers also retry delivery for several days, so a short problem usually delays emails rather than losing them. Still, test sending and receiving right after the switch.

### 4. "Do I need to change Name Servers at all?"

Not always. If you only want to point your website to a new host, you can often just update the **A record** in your current DNS panel and leave the Name Servers alone. It's simpler and far less risky.

## Summary

- **Records don't move with Name Servers.** You have to copy every one yourself.
- **Prepare before the switch:** confirm the live zone, export everything, lower TTL, rebuild, test, and check DNSSEC.
- **Email records (MX, SPF, DKIM, DMARC) are the most commonly missed**, and email fails quietly, so test it deliberately.
- **Keep the old zone** for a week or two as a safety net.

Planning a DNS move and want a second pair of eyes? Contact our support team. We'll review your records before the switch so your website and email keep running smoothly.
