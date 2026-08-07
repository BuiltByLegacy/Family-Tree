/* Legacy Family Archive — interactive tree
   Data below is a hand-curated summary of the person profiles in /people.
   It intentionally omits individuals who do not yet have their own research
   file, and omits sensitive details about living minors per PRIVACY.md. */

const PEOPLE = {
  "Honora Lemery": {branch:"lemery",status:"deceased",vitals:"Dates unknown",
    bio:"Father of Donald H. Lemery Sr., established through Donald's 2011 obituary. Earlier ancestry (birthplace, parents, immigration) remains unresearched.",
    evidence:"High for the parent link · low beyond it"},
  "Delia Vanasse Lemery": {branch:"lemery",status:"deceased",vitals:"Dates unknown",
    bio:"Mother of Donald H. Lemery Sr., named alongside Honora in his obituary. Vanasse suggests French-Canadian ancestry worth tracing through Quebec parish records.",
    evidence:"High for the parent link · low beyond it"},
  "Donald H. Lemery Sr.": {branch:"lemery",status:"deceased",vitals:"Sept 12, 1924 – Apr 18, 2011 · Putnam, CT",
    bio:"Son of Honora and Delia (Vanasse) Lemery. Former husband of Gloria Taschereau. His obituary is the anchor source for this entire branch: parents, former wife, children, and surviving/predeceased siblings.",
    evidence:"Strongly supported (obituary)"},
  "Gloria Taschereau Lemery": {branch:"lemery",status:"deceased",vitals:"Mar 15, 1937 – Nov 15, 2003 · Springfield, MA",
    bio:"Former wife of Donald H. Lemery Sr. Her own detailed obituary supplies exact birth/death facts, siblings (Donald Taschereau, Beverly Verizzi), and her four children.",
    evidence:"High (own obituary)"},
  "Lorraine Lemery Lemieux": {branch:"lemery",status:"deceased",vitals:"Dates unknown",
    bio:"Sibling of Donald H. Lemery Sr.; survived him per his 2011 obituary. Married surname Lemieux still needs a supporting record.",
    evidence:"Probable"},
  "Robert L. Lemery": {branch:"lemery",status:"deceased",vitals:"Apr 30, 1928 – Oct 1, 2006 · Danielson, CT",
    bio:"\u201cGeronimo\u201d Lemery — sibling of Donald H. Lemery Sr., US Army WWII veteran.",
    evidence:"Strongly supported (obituary)"},
  "Jeanette Lemery": {branch:"lemery",status:"deceased",vitals:"Dates unknown",
    bio:"Sibling of Donald H. Lemery Sr., identified through Robert's obituary research. Married surname not yet known.",
    evidence:"Probable"},
  "Harold Worthington": {branch:"worthington",status:"deceased",vitals:"b. c.1907 (provisional)",
    bio:"Father of Gordon R. Worthington. Gordon's 2018 obituary states he had 17 children with Doris (Adams) Worthington — only a handful are individually documented so far.",
    evidence:"Strong candidate, needs original census image"},
  "Doris Adams Worthington": {branch:"worthington",status:"deceased",vitals:"b. c.1913 (provisional)",
    bio:"Mother of Gordon R. Worthington and, per his obituary, 16 other children. Maiden name Adams is family-reported.",
    evidence:"Strong candidate, needs original census image"},
  "Otto Schneider": {branch:"schneider",status:"deceased",vitals:"b. Aug 28, 1916 – d. Mar 9, 2005 · Somers → Enfield, CT (probable)",
    bio:"Father of Linda, Frank, Norma, Kenneth, Timothy, and one more child with Florence Cummings. Remarried after Florence's 1958 death — likely to \u201cCharlotte,\u201d producing half-children surnamed Engelman.",
    evidence:"Probable — single index match for own vitals; confirmed as parent of Linda/Frank"},
  "Florence Cummings Schneider": {branch:"schneider",status:"deceased",vitals:"b. c.1919 Unity, NH – d. Jan 21, 1958 · Somers, CT",
    bio:"Mother of Linda, Frank, Norma, and three more children with Otto Schneider. Her own 1958 obituary (Springfield Union) names her parents Fred and Lestina (Smith) Cummings and confirms her burial at West Cemetery, Somers.",
    evidence:"Strongly supported (own newspaper obituary)"},
  "Charlotte A. Worthington Schneider": {branch:"worthington",status:"deceased",vitals:"Sept 6, 1935 – Oct 11, 2017 · Stafford Springs → Somers, CT",
    bio:"Daughter of Harold and Doris Worthington; sister of Gordon R. Worthington. Her own 2017 obituary confirms she was Otto Schneider's second wife — meaning she was simultaneously Gordon's sister and Linda Schneider Worthington's stepmother, a double link between the Worthington and Schneider branches. Not named among Gordon's surviving siblings in his 2018 obituary, so her place in the 17-child sibling count still needs reconciling.",
    evidence:"Confirmed for marriage to Otto (own obituary); strongly supported for parentage"},
  "Joyce Anna Worthington": {branch:"worthington",status:"deceased",vitals:"Jul 14, 1938 – Mar 21, 2016 · Stafford Springs, CT",
    bio:"Listed as a daughter of Harold and Doris Worthington. Like Charlotte, not named among Gordon's 2018 surviving siblings and needs reconciling.",
    evidence:"Strongly supported, but needs reconciling against newer findings"},
  "Gordon R. Worthington": {branch:"worthington",status:"deceased",vitals:"Nov 10, 1936 – Feb 10, 2018 · Enfield, CT",
    bio:"\u201cMuscles\u201d/\u201cGordie\u201d Worthington. One of 17 children of Harold and Doris Worthington. Married Linda Schneider, later Jeanine Arrowsmith. His 2018 obituary is now the primary source for this profile.",
    evidence:"Strongly supported (own obituary)"},
  "Linda Schneider Worthington": {branch:"schneider",status:"deceased",vitals:"Jul 15, 1942 – Nov 23, 2009 · Stafford → Enfield, CT",
    bio:"Daughter of Otto and Florence (Cummings) Schneider. Married Gordon R. Worthington. Her detailed 2009 obituary is the richest single source in the whole Schneider/Worthington branch — parents, six siblings, three half-siblings, and all four children.",
    evidence:"High (detailed obituary)"},
  "Frank O. Schneider": {branch:"schneider",status:"deceased",vitals:"Jul 31, 1947 – Jan 30, 2022 · Stafford Springs, CT",
    bio:"Son of Otto and Florence (Cummings) Schneider; sibling of Linda. His own obituary independently corroborates their shared parents.",
    evidence:"Confirmed (own obituary)"},
  "Norma Schneider Mudgett": {branch:"schneider",status:"deceased",vitals:"1944 – 2021",
    bio:"Daughter of Otto and Florence (Cummings) Schneider; sibling of Linda. Married George Mudgett of Somers, CT.",
    evidence:"Strongly supported (Linda's obituary + own Find a Grave record)"},
  "Mark Anthony Lemery": {branch:"lemery",status:"deceased",vitals:"Nov 6, 1960 – Oct 25, 2008 · Hartford → Enfield, CT",
    bio:"Son of Donald H. Lemery Sr. and Gloria Taschereau. Father of Jesse Mark Lemery (with Penny Worthington) and of Brandon and Brock J. Lemery (with Cindylee Lemery Begin).",
    evidence:"Confirmed"},
  "Cheryl Lemery Bocwinski": {branch:"lemery",status:"deceased-or-unconfirmed",vitals:"Living status unconfirmed",
    bio:"Daughter of Donald H. Lemery Sr. and Gloria Taschereau; sibling of Mark Anthony Lemery. Initially miscatalogued as a spouse of Mark's — corrected once obituary evidence clarified she was his sister.",
    evidence:"Strongly supported"},
  "Michele Lemery Young": {branch:"lemery",status:"deceased-or-unconfirmed",vitals:"Living status unconfirmed",
    bio:"Daughter of Donald H. Lemery Sr. and Gloria Taschereau; sibling of Mark Anthony Lemery. Name variants Michele/Michelle and married surnames Young/Cleveland both appear in research.",
    evidence:"Strongly supported"},
  "Donald H. Lemery Jr.": {branch:"lemery",status:"deceased",vitals:"c.1961 – c.1971 (reported)",
    bio:"Son of Donald H. Lemery Sr. and Gloria Taschereau; predeceased both parents according to their obituaries.",
    evidence:"Strongly supported"},
  "Cindylee Lemery Begin": {branch:"lemery",status:"living",vitals:"Living",
    bio:"Mother of Brock J. Lemery (confirmed via his obituary) and reportedly of Brandon Lemery as well. Former partner of Mark Anthony Lemery.",
    evidence:"Strongly supported for Brock; possible for Brandon"},
  "Penny Worthington": {branch:"worthington",status:"living",vitals:"b. c.1964 · Hartford, CT",
    bio:"Daughter of Gordon R. Worthington and Linda Schneider Worthington. Mother of Jesse Mark Lemery. A social worker; former spouse reported as Timothy Lehan.",
    evidence:"Confirmed by family testimony; strongly supported by obituaries"},
  "Roger Worthington": {branch:"worthington",status:"deceased",vitals:"1966 – 1987",
    bio:"Son of Gordon R. Worthington and Linda Schneider Worthington; sibling of Penny. Predeceased both parents — his own obituary and cause of death are not yet on file.",
    evidence:"Strongly supported"},
  "Jessica Porcello": {branch:"camp",status:"living",vitals:"b. August 27 (year unconfirmed)",
    bio:"Born Jessica Camp. Biological mother of Haley Ann Lemery. Later surname Porcello, reportedly through marriage/partnership with Jameson Porcello — not yet documented by a marriage record.",
    evidence:"Moderate — relationship confirmed by family, records still needed"},
  "Unknown Roy Biological Father": {branch:"roy",status:"unconfirmed",vitals:"Identity unknown",
    bio:"Family-reported possible biological father of Haley Ann Lemery, surname Roy. A specific candidate name (\u201cMatthew Roy\u201d) is recorded elsewhere in the archive as an unconfirmed lead only — not attached as a parent pending independent corroboration.",
    evidence:"Possible / unconfirmed — surname-level report only"},
  "Jameson Porcello": {branch:"camp",status:"unconfirmed",vitals:"Living status unverified",
    bio:"Haley Ann Lemery's adoptive father, kept in the archive as her adoptive/legal family line, distinct from her biological Roy paternal ancestry.",
    evidence:"Moderate for the adoptive role"},
  "Jesse Mark Lemery": {branch:"core",status:"living",vitals:"b. Sept 7, 1994 · Rockville, CT",
    bio:"Son of Mark Anthony Lemery and Penny Worthington. Husband of Haley Ann Lemery; father of Olivia Judith Lemery and Liam Lemery.",
    evidence:"Confirmed"},
  "Haley Ann Lemery": {branch:"core",status:"living",vitals:"Living",
    bio:"Born Haley Ann Roy; adopted as Haley Ann Porcello; married name Lemery. Biological mother Jessica (Camp) Porcello; biological father unresolved (Roy surname only); adoptive father Jameson Porcello.",
    evidence:"Confirmed for immediate family; adoption/paternal identity still open research"},
  "Brandon Lemery": {branch:"lemery",status:"living",vitals:"Living",
    bio:"Son of Mark Anthony Lemery, reportedly with Cindylee Lemery Begin. Brother of Jesse Mark Lemery and the late Brock J. Lemery.",
    evidence:"Strongly supported; maternity needs direct verification"},
  "Brock J. Lemery": {branch:"lemery",status:"deceased",vitals:"Sept 5, 1990 – Sept 25, 2013",
    bio:"Son of Mark Anthony Lemery and Cindylee Lemery Begin. Brother of Jesse Mark Lemery and Brandon Lemery.",
    evidence:"Strongly supported"},
  "Olivia Judith Lemery": {branch:"core",status:"minor",vitals:"Minor — details restricted",
    bio:"Daughter of Jesse Mark Lemery and Haley Ann Lemery; sibling of Liam Lemery.",
    evidence:"Confirmed by family testimony"},
  "Liam Lemery": {branch:"core",status:"minor",vitals:"Minor — details restricted",
    bio:"Son of Jesse Mark Lemery and Haley Ann Lemery; sibling of Olivia Judith Lemery.",
    evidence:"Confirmed by family testimony"},
};

// People named in obituaries/records but without their own research file yet.
// Rendered as dim, non-clickable placeholders so the tree shows the full
// sibling groups without implying a card exists to click through to.
const STUBS = {
  "Kenny Worthington":{branch:"worthington",note:"Named as a surviving sibling in Gordon R. Worthington's 2018 obituary. No individual file yet."},
  "Judy Worthington":{branch:"worthington",note:"Named as a surviving sibling in Gordon R. Worthington's 2018 obituary. No individual file yet."},
  "Betty Worthington":{branch:"worthington",note:"Named as a surviving sibling in Gordon R. Worthington's 2018 obituary. No individual file yet."},
  "Doris Ellen Worthington":{branch:"worthington",note:"Named as a surviving sibling in Gordon R. Worthington's 2018 obituary. No individual file yet."},
  "David Worthington":{branch:"worthington",note:"Named as a surviving sibling in Gordon R. Worthington's 2018 obituary. No individual file yet."},
  "Kenneth Schneider":{branch:"schneider",note:"Named as a sibling of Linda in her 2009 obituary and their mother Florence's 1958 obituary. No individual file yet."},
  "Timothy Schneider":{branch:"schneider",note:"Named as a sibling of Linda in her 2009 obituary and their mother Florence's 1958 obituary. No individual file yet."},
  "May Schneider Richards":{branch:"schneider",note:"Named as a sibling of Linda in her 2009 obituary. Not yet reconciled against Florence's 1958 obituary's six-child list. No individual file yet."},
  "Mrs. Clifford Richardson":{branch:"schneider",note:"Named as a daughter in Florence Cummings Schneider's own 1958 obituary; maiden first name not yet identified. No individual file yet."},
  "Bruce Worthington":{branch:"worthington",note:"Named as a son of Gordon and Linda Worthington in both of their obituaries. No individual file yet."},
  "Brian Worthington":{branch:"worthington",note:"Named as a son of Gordon and Linda Worthington in both of their obituaries. No individual file yet."},
  "Jim Engelman":{branch:"schneider",note:"Named as a brother in Linda's 2009 obituary. Possibly a son of Charlotte (Worthington) Schneider from a marriage before Otto \u2014 unconfirmed. No individual file yet."},
  "Mark Engelman":{branch:"schneider",note:"Named as a brother (predeceased) in Linda's 2009 obituary. Possibly a son of Charlotte (Worthington) Schneider from a marriage before Otto \u2014 unconfirmed. No individual file yet."},
};

// Relationship labels shown in the panel (derived, not stored per-person to avoid drift)
const PARENTS = {}, CHILDREN = {}, SPOUSES = {};
function addParent(parent, child){
  (CHILDREN[parent] ||= []).push(child);
  (PARENTS[child] ||= []).push(parent);
}
function addSpouse(a,b){
  (SPOUSES[a] ||= []).push(b);
  (SPOUSES[b] ||= []).push(a);
}

const PARENT_EDGES = [
  ["Honora Lemery","Donald H. Lemery Sr."],["Delia Vanasse Lemery","Donald H. Lemery Sr."],
  ["Honora Lemery","Lorraine Lemery Lemieux"],["Delia Vanasse Lemery","Lorraine Lemery Lemieux"],
  ["Honora Lemery","Robert L. Lemery"],["Delia Vanasse Lemery","Robert L. Lemery"],
  ["Honora Lemery","Jeanette Lemery"],["Delia Vanasse Lemery","Jeanette Lemery"],

  ["Harold Worthington","Gordon R. Worthington"],["Doris Adams Worthington","Gordon R. Worthington"],
  ["Harold Worthington","Charlotte A. Worthington Schneider"],["Doris Adams Worthington","Charlotte A. Worthington Schneider"],
  ["Harold Worthington","Joyce Anna Worthington"],["Doris Adams Worthington","Joyce Anna Worthington"],

  ["Otto Schneider","Linda Schneider Worthington"],["Florence Cummings Schneider","Linda Schneider Worthington"],
  ["Otto Schneider","Frank O. Schneider"],["Florence Cummings Schneider","Frank O. Schneider"],
  ["Otto Schneider","Norma Schneider Mudgett"],["Florence Cummings Schneider","Norma Schneider Mudgett"],

  ["Donald H. Lemery Sr.","Mark Anthony Lemery"],["Gloria Taschereau Lemery","Mark Anthony Lemery"],
  ["Donald H. Lemery Sr.","Cheryl Lemery Bocwinski"],["Gloria Taschereau Lemery","Cheryl Lemery Bocwinski"],
  ["Donald H. Lemery Sr.","Michele Lemery Young"],["Gloria Taschereau Lemery","Michele Lemery Young"],
  ["Donald H. Lemery Sr.","Donald H. Lemery Jr."],["Gloria Taschereau Lemery","Donald H. Lemery Jr."],

  ["Gordon R. Worthington","Penny Worthington"],["Linda Schneider Worthington","Penny Worthington"],
  ["Gordon R. Worthington","Roger Worthington"],["Linda Schneider Worthington","Roger Worthington"],

  ["Mark Anthony Lemery","Jesse Mark Lemery"],["Penny Worthington","Jesse Mark Lemery"],
  ["Mark Anthony Lemery","Brandon Lemery"],["Cindylee Lemery Begin","Brandon Lemery"],
  ["Mark Anthony Lemery","Brock J. Lemery"],["Cindylee Lemery Begin","Brock J. Lemery"],

  ["Jessica Porcello","Haley Ann Lemery"],
  ["Unknown Roy Biological Father","Haley Ann Lemery"],
  ["Jameson Porcello","Haley Ann Lemery"],

  ["Jesse Mark Lemery","Olivia Judith Lemery"],["Haley Ann Lemery","Olivia Judith Lemery"],
  ["Jesse Mark Lemery","Liam Lemery"],["Haley Ann Lemery","Liam Lemery"],

  // stub relatives (no individual research file yet)
  ["Harold Worthington","Kenny Worthington"],["Doris Adams Worthington","Kenny Worthington"],
  ["Harold Worthington","Judy Worthington"],["Doris Adams Worthington","Judy Worthington"],
  ["Harold Worthington","Betty Worthington"],["Doris Adams Worthington","Betty Worthington"],
  ["Harold Worthington","Doris Ellen Worthington"],["Doris Adams Worthington","Doris Ellen Worthington"],
  ["Harold Worthington","David Worthington"],["Doris Adams Worthington","David Worthington"],
  ["Otto Schneider","Kenneth Schneider"],["Florence Cummings Schneider","Kenneth Schneider"],
  ["Otto Schneider","Timothy Schneider"],["Florence Cummings Schneider","Timothy Schneider"],
  ["Otto Schneider","May Schneider Richards"],["Florence Cummings Schneider","May Schneider Richards"],
  ["Otto Schneider","Mrs. Clifford Richardson"],["Florence Cummings Schneider","Mrs. Clifford Richardson"],
  ["Gordon R. Worthington","Bruce Worthington"],["Linda Schneider Worthington","Bruce Worthington"],
  ["Gordon R. Worthington","Brian Worthington"],["Linda Schneider Worthington","Brian Worthington"],
  ["Charlotte A. Worthington Schneider","Jim Engelman"],
  ["Charlotte A. Worthington Schneider","Mark Engelman"],
];
PARENT_EDGES.forEach(([p,c])=>addParent(p,c));

const UNIONS = [
  ["Honora Lemery","Delia Vanasse Lemery","solid"],
  ["Harold Worthington","Doris Adams Worthington","solid"],
  ["Otto Schneider","Florence Cummings Schneider","solid"],
  ["Donald H. Lemery Sr.","Gloria Taschereau Lemery","solid"],
  ["Gordon R. Worthington","Linda Schneider Worthington","solid"],
  ["Cindylee Lemery Begin","Mark Anthony Lemery","dashed"],
  ["Mark Anthony Lemery","Penny Worthington","solid"],
  ["Unknown Roy Biological Father","Jessica Porcello","dotted"],
  ["Jessica Porcello","Jameson Porcello","dashed"],
  ["Jesse Mark Lemery","Haley Ann Lemery","solid"],
  ["Otto Schneider","Charlotte A. Worthington Schneider","solid"],
];
UNIONS.forEach(([a,b])=>addSpouse(a,b));

const ROWS = [
  {label:"Great-grandparents", items:["Honora Lemery","Delia Vanasse Lemery","Harold Worthington","Doris Adams Worthington","Otto Schneider","Florence Cummings Schneider"]},
  {label:"Grandparents & siblings", items:["Lorraine Lemery Lemieux","Robert L. Lemery","Jeanette Lemery","Donald H. Lemery Sr.","Gloria Taschereau Lemery","Charlotte A. Worthington Schneider","Joyce Anna Worthington","Kenny Worthington","Judy Worthington","Betty Worthington","Doris Ellen Worthington","David Worthington","Gordon R. Worthington","Linda Schneider Worthington","Frank O. Schneider","Norma Schneider Mudgett","Kenneth Schneider","Timothy Schneider","May Schneider Richards","Mrs. Clifford Richardson","Jim Engelman","Mark Engelman"]},
  {label:"Parents & siblings", items:["Cheryl Lemery Bocwinski","Michele Lemery Young","Donald H. Lemery Jr.","Cindylee Lemery Begin","Mark Anthony Lemery","Penny Worthington","Roger Worthington","Bruce Worthington","Brian Worthington","Unknown Roy Biological Father","Jessica Porcello","Jameson Porcello"]},
  {label:"Jesse & Haley's generation", items:["Brandon Lemery","Brock J. Lemery","Jesse Mark Lemery","Haley Ann Lemery"]},
  {label:"Children", items:["Olivia Judith Lemery","Liam Lemery"]},
];

const GH_BASE = "https://github.com/BuiltByLegacy/Family-Tree/tree/main/people/";
function ghUrl(id){ return GH_BASE + id.split("/").map(encodeURIComponent).join("/"); }

/* ---------- unit grouping (pairs spouses who sit in the same row so they
   render tightly together and share a single "bus" connector down to
   their children — the standard genealogy-chart look) ---------- */
const ROW_OF = {};
ROWS.forEach((row,ri)=> row.items.forEach(id=> ROW_OF[id]=ri));

// when a person has more than one same-row partner (blended families),
// this decides which partner they render adjacent to and share a bus
// with; the other union still gets its own short connecting line and
// shows correctly in the click panel — it just doesn't drive the bus.
const ADJACENCY_PRIORITY = [
  "Mark Anthony Lemery|Penny Worthington",
  "Jessica Porcello|Jameson Porcello",
];
const sameRowUnions = UNIONS.filter(([a,b])=> ROW_OF[a]===ROW_OF[b]);

// resolve exactly one primary partner per person, priority pairs first,
// so a name appearing earlier in a row's item list can't "steal" a
// partner that a later-listed priority pair was meant to claim.
const PRIMARY_PARTNER_OF = {};
ADJACENCY_PRIORITY.forEach(pairStr=>{
  const [a,b] = pairStr.split("|");
  PRIMARY_PARTNER_OF[a]=b; PRIMARY_PARTNER_OF[b]=a;
});
sameRowUnions.forEach(([a,b])=>{
  if(!PRIMARY_PARTNER_OF[a] && !PRIMARY_PARTNER_OF[b]){
    PRIMARY_PARTNER_OF[a]=b; PRIMARY_PARTNER_OF[b]=a;
  }
});

function buildRowUnits(items){
  const seen = new Set();
  const units = [];
  items.forEach(id=>{
    if(seen.has(id)) return;
    const partner = PRIMARY_PARTNER_OF[id];
    if(partner && items.includes(partner) && !seen.has(partner)){
      units.push([id, partner]);
      seen.add(id); seen.add(partner);
    } else {
      units.push([id]);
      seen.add(id);
    }
  });
  return units;
}
const ROW_UNITS = ROWS.map(row => buildRowUnits(row.items));
// personId -> the unit (array of ids) they belong to
const UNIT_OF = {};
ROW_UNITS.forEach(units => units.forEach(u => u.forEach(id => UNIT_OF[id]=u)));

/* ---------- render cards, grouped into unit wrappers ---------- */
const rowsEl = document.getElementById("rows");
ROWS.forEach((row,ri)=>{
  const rowEl = document.createElement("div");
  rowEl.className = "row";
  rowEl.style.position = "relative";
  const label = document.createElement("div");
  label.className = "row-label";
  label.textContent = row.label;
  rowEl.appendChild(label);

  ROW_UNITS[ri].forEach(unit=>{
    const unitEl = document.createElement("div");
    unitEl.className = "unit" + (unit.length>1 ? " paired" : "");
    unit.forEach(id=>{
      const p = PEOPLE[id];
      if(p){
        const card = document.createElement("button");
        card.type = "button";
        card.className = "card " + p.branch;
        if(p.status === "deceased") card.classList.add("deceased");
        if(p.status === "minor") card.classList.add("minor");
        if(p.status === "unconfirmed") card.classList.add("faint");
        card.dataset.id = id;
        card.innerHTML = `<span class="name">${id}</span><span class="meta">${p.vitals}</span>`;
        card.addEventListener("click", ()=>openPanel(id));
        unitEl.appendChild(card);
      } else {
        const s = STUBS[id];
        const stub = document.createElement("div");
        stub.className = "stub";
        stub.dataset.id = id;
        stub.title = s ? s.note : "No individual research file yet.";
        stub.innerHTML = `<span class="name">${id}</span>`;
        unitEl.appendChild(stub);
      }
    });
    rowEl.appendChild(unitEl);
  });
  rowsEl.appendChild(rowEl);
});

/* ---------- draw connector lines ---------- */
const svg = document.getElementById("links");
const canvas = document.getElementById("canvas");

function cardCenter(id, edge){
  const el = document.querySelector(`[data-id="${CSS.escape(id)}"]`);
  if(!el) return null;
  const r = el.getBoundingClientRect();
  const c = canvas.getBoundingClientRect();
  const scale = state.scale;
  const x = (r.left - c.left)/scale + r.width/scale/2;
  const yTop = (r.top - c.top)/scale;
  const yBot = yTop + r.height/scale;
  return edge === "top" ? {x,y:yTop} : edge === "bottom" ? {x,y:yBot} : {x,y:yTop + (r.height/scale)/2};
}

function drawLinks(){
  const c = canvas.getBoundingClientRect();
  svg.setAttribute("width", canvas.scrollWidth);
  svg.setAttribute("height", canvas.scrollHeight);
  svg.innerHTML = "";
  const ns = "http://www.w3.org/2000/svg";
  const colors = {lemery:"#8f6b3f",worthington:"#5b7a6b",schneider:"#5c7690",camp:"#a5674f",roy:"#8a5a72",core:"#c9973f"};

  function line(x1,y1,x2,y2,{color="#c9973f",width=1.6,style,opacity=0.55}={}){
    const el = document.createElementNS(ns,"line");
    el.setAttribute("x1",x1); el.setAttribute("y1",y1);
    el.setAttribute("x2",x2); el.setAttribute("y2",y2);
    el.setAttribute("stroke",color);
    el.setAttribute("stroke-width",width);
    if(style==="dashed") el.setAttribute("stroke-dasharray","6,5");
    if(style==="dotted") el.setAttribute("stroke-dasharray","1.5,4");
    el.setAttribute("opacity",opacity);
    svg.appendChild(el);
  }

  // spouse/union bars — only drawn when both partners sit in the same row.
  // A union spanning two rows (e.g. a remarriage into an adjacent
  // generation) is real and shown in the click panel, but drawing a literal
  // line for it would cut diagonally across an entire row of other people,
  // so those are intentionally left undrawn here.
  UNIONS.forEach(([a,b,style])=>{
    if(ROW_OF[a]!==ROW_OF[b]) return;
    const pa = cardCenter(a,"mid"), pb = cardCenter(b,"mid");
    if(!pa||!pb) return;
    line(pa.x,pa.y,pb.x,pb.y,{color:"#c9973f",width:2,style,opacity:0.55});
  });

  // parent -> child connectors, drawn as a standard genealogy "bus":
  // a drop line from the parent unit, a horizontal bar spanning the
  // children, and a drop line into each child. Grouped by unit (not by
  // individual edge) so two parents raising the same children share one
  // clean connector instead of two overlapping curves. If only ONE member
  // of a couple-unit is actually a child's parent (a blended family, e.g.
  // a parent's children with an earlier partner), that child is drawn
  // with its own individual line from just that parent's card — sharing
  // the couple's bus would falsely suggest the other partner co-parented
  // them. A same-row parent/child pair (e.g. a later remarriage's own
  // children placed in the same generation band as their step-siblings)
  // is skipped entirely for the same reason as cross-row unions above —
  // it's fully described in the click panel.
  const busGroups = new Map(); // unit -> Set of child ids (full match)
  const soloEdges = [];        // [parentId, childId] (partial match)
  PARENT_EDGES.forEach(([parent,child])=>{
    if(ROW_OF[child] !== ROW_OF[parent]+1) return;
    const unit = UNIT_OF[parent];
    if(!unit) return;
    const childParents = new Set(PARENTS[child] || []);
    const fullMatch = unit.length===1 || unit.every(m=>childParents.has(m));
    if(fullMatch){
      if(!busGroups.has(unit)) busGroups.set(unit, new Set());
      busGroups.get(unit).add(child);
    } else {
      soloEdges.push([parent, child]);
    }
  });

  // stagger bus depth by each unit's left-to-right position in its row,
  // so neighboring family branches' horizontal bars sit at visibly
  // different heights instead of running together on one line
  const unitStagger = new Map();
  ROW_UNITS.forEach(units=> units.forEach((u,i)=> unitStagger.set(u, i%3)));

  busGroups.forEach((childSet, unit)=>{
    const memberPts = unit.map(id=>cardCenter(id,"bottom")).filter(Boolean);
    if(!memberPts.length) return;
    const unionX = memberPts.reduce((s,p)=>s+p.x,0)/memberPts.length;
    const unionY = Math.max(...memberPts.map(p=>p.y));
    const childPts = [...childSet].map(id=>({id, pt:cardCenter(id,"top")})).filter(x=>x.pt);
    if(!childPts.length) return;

    // representative child (for line color/weight/opacity)
    const anyChild = childPts[0].id;
    const info = PEOPLE[anyChild] || STUBS[anyChild];
    const weak = !PEOPLE[anyChild]; // stub = thinner, fainter
    const color = colors[info ? info.branch : null] || "#8a7c60";
    const opts = {color, width: weak?1.1:1.6, opacity: weak?0.32:0.5};

    const stagger = unitStagger.get(unit) || 0;
    const busY = unionY + 22 + stagger*16;
    const xs = childPts.map(x=>x.pt.x);
    const busMinX = Math.min(unionX, ...xs);
    const busMaxX = Math.max(unionX, ...xs);

    line(unionX,unionY, unionX,busY, opts);          // drop from parents
    if(busMaxX > busMinX) line(busMinX,busY, busMaxX,busY, opts); // horizontal bus
    childPts.forEach(({pt})=>{
      line(pt.x,busY, pt.x,pt.y, opts);               // drop into each child
    });
  });

  // individual lines for partial-match (blended-family) parent/child edges
  soloEdges.forEach(([parent,child])=>{
    const pp = cardCenter(parent,"bottom");
    const cc = cardCenter(child,"top");
    if(!pp||!cc) return;
    const info = PEOPLE[child] || STUBS[child];
    const weak = !PEOPLE[child];
    const color = colors[info ? info.branch : null] || "#8a7c60";
    const opts = {color, width: weak?1.1:1.6, opacity: weak?0.4:0.6, style:"dashed"};
    const busY = pp.y + 26;
    line(pp.x,pp.y, pp.x,busY, opts);
    line(pp.x,busY, cc.x,busY, opts);
    line(cc.x,busY, cc.x,cc.y, opts);
  });
}

/* ---------- pan & zoom ---------- */
const viewport = document.getElementById("viewport");
const state = {x:60, y:20, scale:0.72, dragging:false, lastX:0, lastY:0};

function applyTransform(){
  canvas.style.transform = `translate(${state.x}px, ${state.y}px) scale(${state.scale})`;
}
function clampScale(s){ return Math.min(1.6, Math.max(0.28, s)); }

viewport.addEventListener("pointerdown", e=>{
  state.dragging = true;
  state.lastX = e.clientX; state.lastY = e.clientY;
  viewport.classList.add("grabbing");
  viewport.setPointerCapture(e.pointerId);
});
viewport.addEventListener("pointermove", e=>{
  if(!state.dragging) return;
  state.x += (e.clientX - state.lastX);
  state.y += (e.clientY - state.lastY);
  state.lastX = e.clientX; state.lastY = e.clientY;
  applyTransform();
});
["pointerup","pointercancel","pointerleave"].forEach(ev=>{
  viewport.addEventListener(ev, ()=>{ state.dragging=false; viewport.classList.remove("grabbing"); });
});
viewport.addEventListener("wheel", e=>{
  e.preventDefault();
  const rect = viewport.getBoundingClientRect();
  const mx = e.clientX - rect.left, my = e.clientY - rect.top;
  const prevScale = state.scale;
  const newScale = clampScale(state.scale * (e.deltaY < 0 ? 1.08 : 0.92));
  const factor = newScale/prevScale;
  state.x = mx - (mx - state.x)*factor;
  state.y = my - (my - state.y)*factor;
  state.scale = newScale;
  applyTransform();
  requestAnimationFrame(drawLinks);
}, {passive:false});

document.getElementById("zoomIn").addEventListener("click", ()=>{
  state.scale = clampScale(state.scale*1.15); applyTransform(); requestAnimationFrame(drawLinks);
});
document.getElementById("zoomOut").addEventListener("click", ()=>{
  state.scale = clampScale(state.scale*0.87); applyTransform(); requestAnimationFrame(drawLinks);
});
document.getElementById("zoomReset").addEventListener("click", ()=>{
  state.x=60; state.y=20; state.scale=0.72; applyTransform(); requestAnimationFrame(drawLinks);
});

/* ---------- detail panel ---------- */
const panel = document.getElementById("panel");
const panelBody = document.getElementById("panelBody");
const scrim = document.getElementById("scrim");

function relList(ids){
  return ids && ids.length
    ? ids.map(id=>`<button class="relbtn" data-goto="${id}">${id}</button>`).join("")
    : `<span style="color:#a99b7c;font-size:.85rem">None on file</span>`;
}

function openPanel(id){
  const p = PEOPLE[id];
  if(!p) return;
  const branchNames = {lemery:"Lemery · Taschereau · Vanasse",worthington:"Worthington · Adams",schneider:"Schneider · Cummings",camp:"Camp · Porcello",roy:"Roy",core:"Current family"};
  panelBody.innerHTML = `
    <p class="branchline">${branchNames[p.branch]||""}</p>
    <h2>${id}</h2>
    <p class="vitals">${p.vitals}</p>
    <span class="badge">${p.evidence}</span>
    <p>${p.bio}</p>
    <h3>Parents</h3>
    <div>${relList(PARENTS[id])}</div>
    <h3>Spouse / partner</h3>
    <div>${relList(SPOUSES[id])}</div>
    <h3>Children</h3>
    <div>${relList(CHILDREN[id])}</div>
    <a class="githublink" href="${ghUrl(id)}" target="_blank" rel="noopener">Open full research file on GitHub →</a>
  `;
  panelBody.querySelectorAll("[data-goto]").forEach(btn=>{
    btn.addEventListener("click", ()=> openPanel(btn.dataset.goto));
  });
  panel.classList.add("open");
  panel.setAttribute("aria-hidden","false");
  scrim.classList.add("show");
}
function closePanel(){
  panel.classList.remove("open");
  panel.setAttribute("aria-hidden","true");
  scrim.classList.remove("show");
}
document.getElementById("panelClose").addEventListener("click", closePanel);
scrim.addEventListener("click", closePanel);
document.addEventListener("keydown", e=>{ if(e.key==="Escape") closePanel(); });

/* ---------- search ---------- */
const searchInput = document.getElementById("search");
const searchResults = document.getElementById("searchResults");
function centerOnCard(id){
  const el = document.querySelector(`.card[data-id="${CSS.escape(id)}"]`);
  if(!el) return;
  const c = canvas.getBoundingClientRect();
  const r = el.getBoundingClientRect();
  const vr = viewport.getBoundingClientRect();
  const cardCenterX = (r.left - c.left)/state.scale + r.width/state.scale/2;
  const cardCenterY = (r.top - c.top)/state.scale + r.height/state.scale/2;
  state.x = vr.width/2 - cardCenterX*state.scale;
  state.y = vr.height/2 - cardCenterY*state.scale;
  applyTransform();
  el.animate([{outline:"3px solid #c9973f"},{outline:"3px solid transparent"}],{duration:1200});
}
searchInput.addEventListener("input", ()=>{
  const q = searchInput.value.trim().toLowerCase();
  searchResults.innerHTML = "";
  if(!q){ searchResults.hidden = true; return; }
  const matches = Object.keys(PEOPLE).filter(id=>id.toLowerCase().includes(q)).slice(0,8);
  if(!matches.length){ searchResults.hidden = true; return; }
  matches.forEach(id=>{
    const b = document.createElement("button");
    b.textContent = id;
    b.addEventListener("click", ()=>{
      centerOnCard(id); openPanel(id); searchResults.hidden = true; searchInput.value = id;
    });
    searchResults.appendChild(b);
  });
  searchResults.hidden = false;
});
document.addEventListener("click", e=>{
  if(!e.target.closest(".searchwrap")) searchResults.hidden = true;
});

/* ---------- init ---------- */
window.addEventListener("load", ()=>{
  applyTransform();
  requestAnimationFrame(drawLinks);
});
window.addEventListener("resize", ()=> requestAnimationFrame(drawLinks));
