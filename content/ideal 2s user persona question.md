**1. Start with the User Needs**  
“Let me step back for a second. At the core, the researcher needs:

- A consistent way to connect vendor data to Two Sigma’s internal IDs.
    
- A workflow that minimizes manual lookups.
    
- Reliability — so they can trust the mapping in downstream analysis.
    

So my solution should optimize for **consistency, reliability, and researcher time savings**.”

---

**2. Outline the System Mechanics**  
“I’d break the problem into three stages:

- **Data ingestion:** How the metadata gets into the system. Since you mentioned the researcher wouldn’t just upload a file, I’ll assume we’re pulling this metadata directly from vendors via APIs or feeds.
    
- **ID mapping:** For each incoming row, we try to resolve it to a unifying ID. Naively, that might be ticker + exchange, but metadata can vary. So we’d apply matching rules: primary keys (e.g., ISIN, CUSIP), and fallback heuristics (like company name + exchange).
    
- **Reconciliation:** For cases where matches are uncertain, the system should flag them instead of forcing a bad match. That’s where we can add a lightweight interface for the researcher to approve or override mappings.”
    

---

**3. Risks & Safeguards**  
“Now, the key risks are:

- **Missing metadata:** e.g. a vendor leaves out ISIN.
    
- **Conflicting mappings:** different vendors map the same instrument differently.
    
- **Stale IDs:** ticker changes, corporate actions, or vendor schema changes.
    

To handle these, I’d:

- Build in **confidence scoring** so low-confidence matches are flagged.
    
- Allow a **human-in-the-loop step** for overrides.
    
- Track **metadata lineage** (which vendor, when ingested, match method) so analysts know how the ID was derived.”
    

---

**Optional Pivot Back to UI (since he asked you about this)**  
“On the UI side, I’d imagine something lightweight: a researcher can see proposed mappings in a table, with clear indicators for ‘high-confidence’ vs ‘needs review.’ Ideally, the default workflow is mostly automated, with only a small % needing manual input.”

---

- **You:** “How does metadata enter the system today — API feed, flat file, or manual entry?”
    
- **Him:** “Not file upload, assume API/vendor feeds.”
    
- **You:** “Got it — so the system needs to normalize vendor schemas before mapping. That makes extraction key. What identifiers do vendors reliably provide — ISIN, CUSIP, ticker?”
    
- **Him:** “Sometimes missing or inconsistent.”
    
- **You:** “Okay, then I’d think about a tiered approach: exact match on ISIN → fuzzy match on ticker+exchange → fall back to name similarity, with a confidence score. For the edge cases, do researchers prefer to review a queue of ‘uncertain mappings,’ or should the system just flag downstream?”