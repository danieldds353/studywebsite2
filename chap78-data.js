window.CH78_DATA = {
  "chapters": [
    {
      "id": 7,
      "title": "Project Cost Management",
      "week": "Chapters 7-8 lecture",
      "pages": "285-323",
      "pdfPages": "310-348",
      "notes": [
        "Plan Cost Management establishes the rules; Estimate Costs produces estimates and their basis; Determine Budget produces a time-phased baseline; Control Costs monitors performance and authorized changes.",
        "Cost classifications are independent: tangible/intangible describes monetary measurability; direct/indirect describes attribution; sunk costs are already spent and do not justify future investment.",
        "Profit = revenue - expenditures. Profit margin = profit / revenue. Life cycle costing includes development plus operations and support, not deployment alone.",
        "This edition gives ROM -50%/+100%, budgetary -10%/+25%, definitive -5%/+10%. A definitive estimate supports precise purchases; the slide table has an imprecise repeated purpose in that row.",
        "Analogous uses similar past projects; bottom-up aggregates detailed work; parametric uses measurable cost drivers; three-point uses optimistic, most likely, and pessimistic scenarios. State the weighting used.",
        "Cost baseline includes contingency reserve; total project budget adds management reserve. Funding timing must support planned spending. FTE is effort relative to a full-time period, not headcount.",
        "PV is budgeted scheduled work; EV is budgeted achieved work; AC is actual spending. EV can exceed time-to-date PV when work is ahead of plan, but not the component’s total authorized budget.",
        "CV = EV - AC; SV = EV - PV; CPI = EV / AC; SPI = EV / PV. Negative variances and indexes below 1 are unfavorable. SV is in budget-value units, not calendar days.",
        "If current cost efficiency continues, EAC = BAC / CPI and ETC = EAC - AC. TCPI(BAC) = (BAC - EV)/(BAC - AC); TCPI(EAC) uses EAC - AC in the denominator. These forecasts are conditional.",
        "Portfolio management compares investments, risk, funding, and duplication. Software cannot repair weak estimates or stale data. Agile can use high-level forecasts, near-term detail, release funding, and adapted EVM."
      ]
    },
    {
      "id": 8,
      "title": "Project Quality Management",
      "week": "Chapters 7-8 lecture",
      "pages": "327-370",
      "pdfPages": "352-395",
      "notes": [
        "Quality means meeting stated and implied needs. Conformance to requirements and fitness for use are complementary. The project manager leads quality management; quality is everyone’s work.",
        "Plan Quality Management defines standards, metrics, and methods; Manage Quality implements assurance plus design/process improvement; Control Quality measures and verifies results.",
        "Figure 8-1 lists verified deliverables for Control Quality. Formal customer acceptance belongs to Validate Scope; page 336 uses loose validated/acceptance wording, so keep the processes distinct.",
        "Write measurable criteria: response time under a specified load, failure rate under defined conditions, and repair/maintenance expectations. Clarify functionality, features, outputs, performance, reliability, and maintainability.",
        "Fishbone: possible root causes. Checksheet: tallies. Histogram: frequencies/distribution. Pareto: descending contributors. Scatter: association. Flowchart: steps/decisions. Run chart: time pattern. Control chart: process stability.",
        "Control limits describe process behavior; specification limits describe customer requirements. A stable process may still fail specifications. The assigned seven-run rule flags seven on one side of the mean or trending.",
        "Sampling formula n = 0.25(z/e)^2. State confidence and margin of error separately, use decimal e, and round up for a minimum whole-number sample: 384.16 requires 385, although the book displays about 384.",
        "DMAIC: Define, Measure, Analyze, Improve, Control. Conventional Six Sigma is about 3.4 defects per million opportunities; DPMO = defects/(units x opportunities per unit) x 1,000,000. Six nines is a different measure.",
        "Unit tests examine components; integration tests examine interactions; system tests examine the full system; UAT examines business fit. Prevent and test throughout development; late testing alone is insufficient.",
        "Deming: systemic improvement/14 points. Juran: fitness for use, management commitment, trilogy. Crosby: zero defects. Ishikawa: fishbone/quality circles. Taguchi: robust design. Feigenbaum: total quality control.",
        "Cost of quality = conformance + nonconformance. Prevention and appraisal differ from internal failure before delivery and external failure after delivery. The text separately lists capital test-equipment costs.",
        "SQFD translates user needs into prioritized measurable specifications. The assigned CMMI list is 0 Incomplete, 1 Performed, 2 Managed, 3 Defined, 4 Quantitatively managed, 5 Optimizing. OPM3 spans project/program/portfolio improvement.",
        "Quality improves through leadership, clear expectations, suitable work conditions, process maturity, and helpful software. Adaptive work uses small batches, frequent testing, quality criteria in done, and retrospectives."
      ]
    }
  ],
  "questions": [
    {
      "id": "TB9-C78-001",
      "chapter": 7,
      "type": "mcq",
      "topic": "Process outputs",
      "section": "Process outputs",
      "stem": "A team has estimated the cost of every work package. It now allocates those costs to the months in which work is planned. Which process is it performing?",
      "options": [
        "Control Costs",
        "Estimate Costs",
        "Determine Budget",
        "Plan Cost Management"
      ],
      "correct": 2,
      "explanation": "Determine Budget aggregates and time-phases estimates to establish the cost baseline. Estimating produces the amounts and their basis; controlling compares performance and manages changes.",
      "pages": "288-289, 305-306",
      "slides": "7-8, 26-28"
    },
    {
      "id": "TB9-C78-002",
      "chapter": 7,
      "type": "mcq",
      "topic": "Cost management plan",
      "section": "Cost management plan",
      "stem": "Before work begins, a project defines when a cost variance requires escalation, how progress will earn value, and the reporting format. Where do these rules belong?",
      "options": [
        "The final cost baseline alone",
        "The cost management plan",
        "The basis of a single supplier quotation",
        "The record of actual costs incurred"
      ],
      "correct": 1,
      "explanation": "The plan sets control thresholds, performance measurement rules, units, organizational links, and reporting procedures. The baseline supplies approved time-phased budget values rather than the rules for managing them.",
      "pages": "294",
      "slides": "15"
    },
    {
      "id": "TB9-C78-003",
      "chapter": 7,
      "type": "mcq",
      "topic": "Profit margin",
      "section": "Profit margin",
      "stem": "A company earns $3 million revenue and incurs $2.7 million expenditures. What is its profit margin?",
      "options": [
        "$300,000",
        "10%",
        "90%",
        "11.11%"
      ],
      "correct": 1,
      "explanation": "Profit is $300,000. Profit margin = profit / revenue = 300,000 / 3,000,000 = 10%. Dividing by expenditures gives a different ratio; dollars alone are not a margin.",
      "pages": "290",
      "slides": "9"
    },
    {
      "id": "TB9-C78-004",
      "chapter": 7,
      "type": "mcq",
      "topic": "Life cycle costing",
      "section": "Life cycle costing",
      "stem": "System A costs $80,000 to deploy and $40,000 per year to support for four years. System B costs $120,000 to deploy and $20,000 per year to support for four years. Ignoring discounting and other differences, which has the lower life cycle cost?",
      "options": [
        "System B, by $40,000",
        "Both cost $200,000",
        "System B, by $80,000",
        "System A, by $40,000"
      ],
      "correct": 0,
      "explanation": "A costs 80,000 + 4(40,000) = $240,000. B costs 120,000 + 4(20,000) = $200,000. Life cycle costing includes support, so choosing only the lowest deployment price would be misleading.",
      "pages": "290-291",
      "slides": "9"
    },
    {
      "id": "TB9-C78-005",
      "chapter": 7,
      "type": "mcq",
      "topic": "Cost classifications",
      "section": "Cost classifications",
      "stem": "A server is purchased exclusively for one project, while building electricity is shared by many projects. Which classification best fits?",
      "options": [
        "Server: direct cost; shared electricity: indirect cost",
        "Server: indirect cost; shared electricity: direct cost",
        "Both are sunk costs before either is paid",
        "Both are intangible costs because they support IT"
      ],
      "correct": 0,
      "explanation": "Direct costs are attributable to the specific project. Shared overhead is normally allocated as indirect cost. These classifications are different from whether a cost is tangible or already sunk.",
      "pages": "292",
      "slides": "12"
    },
    {
      "id": "TB9-C78-006",
      "chapter": 7,
      "type": "mcq",
      "topic": "Sunk cost decisions",
      "section": "Sunk cost decisions",
      "stem": "A failed prototype has already cost $240,000. Continuing would require $100,000 more and is expected to produce only $60,000 in future benefits. With no other consequences or options, what is the sound financial decision?",
      "options": [
        "Do not continue merely to recover the $240,000; future costs exceed future benefits.",
        "Continue because $300,000 total benefits will exceed the new cost.",
        "Continue because the largest cost has already been paid.",
        "Ignore the future $100,000 because all project costs are sunk."
      ],
      "correct": 0,
      "explanation": "The $240,000 cannot be recovered by choosing to continue. Compare incremental future benefits of $60,000 with incremental future costs of $100,000; continuation loses another $40,000 under the stated assumptions.",
      "pages": "292-293",
      "slides": "12"
    },
    {
      "id": "TB9-C78-007",
      "chapter": 7,
      "type": "mcq",
      "topic": "Reserves and baseline",
      "section": "Reserves and baseline",
      "stem": "Work is estimated at $180,000. A $20,000 contingency reserve and $15,000 management reserve are approved. What are the cost baseline and total project budget?",
      "options": [
        "Baseline $180,000; total budget $215,000",
        "Baseline $200,000; total budget $215,000",
        "Baseline $215,000; total budget $215,000",
        "Baseline $195,000; total budget $200,000"
      ],
      "correct": 1,
      "explanation": "The cost baseline includes contingency reserve: 180,000 + 20,000 = $200,000. Add management reserve outside that baseline to obtain the $215,000 total project budget.",
      "pages": "293, 305-306",
      "slides": "13, 26-27"
    },
    {
      "id": "TB9-C78-008",
      "chapter": 7,
      "type": "mcq",
      "topic": "Estimate accuracy",
      "section": "Estimate accuracy",
      "stem": "Using the assigned ninth-edition ROM range, what actual-cost range corresponds to an early $200,000 estimate?",
      "options": [
        "$100,000 to $400,000",
        "$190,000 to $220,000",
        "$150,000 to $250,000",
        "$180,000 to $250,000"
      ],
      "correct": 0,
      "explanation": "This edition gives ROM accuracy as -50% to +100%: 200,000(0.50) to 200,000(2.00). The tighter -5%/+10% and -10%/+25% ranges describe definitive and budgetary estimates.",
      "pages": "295-296",
      "slides": "17-18"
    },
    {
      "id": "TB9-C78-009",
      "chapter": 7,
      "type": "mcq",
      "topic": "Estimate purpose",
      "section": "Estimate purpose",
      "stem": "A team must evaluate purchase proposals for equipment to be acquired in three months and needs its most precise estimate. Which assigned estimate type is most appropriate?",
      "options": [
        "Definitive",
        "Rough order of magnitude",
        "Budgetary",
        "Portfolio screening"
      ],
      "correct": 0,
      "explanation": "The textbook associates definitive estimates with accurate purchasing decisions and later planning. The slide table repeats a budget-planning purpose in that row; the textbook table and prose provide the more precise distinction.",
      "pages": "295-296",
      "slides": "17"
    },
    {
      "id": "TB9-C78-010",
      "chapter": 7,
      "type": "mcq",
      "topic": "Analogous versus parametric",
      "section": "Analogous versus parametric",
      "stem": "An estimator starts from the actual total cost of one similar past migration and adjusts for differences. Which method is the primary basis?",
      "options": [
        "Bottom-up estimating",
        "Earned value forecasting",
        "Parametric estimating",
        "Analogous estimating"
      ],
      "correct": 3,
      "explanation": "Using a similar past project as the reference is analogous/top-down estimating. A rate multiplied by a measurable driver is parametric; summing detailed work-item estimates is bottom-up.",
      "pages": "297-298",
      "slides": "20"
    },
    {
      "id": "TB9-C78-011",
      "chapter": 7,
      "type": "mcq",
      "topic": "Parametric calculation",
      "section": "Parametric calculation",
      "stem": "A calibrated estimate uses $120 per migrated account. There are 750 accounts, plus a separate fixed $15,000 setup cost. What is the estimate?",
      "options": [
        "$120,750",
        "$15,750",
        "$105,000",
        "$90,000"
      ],
      "correct": 2,
      "explanation": "The variable portion is 750 x $120 = $90,000. Add the separate setup cost once: $105,000. A parametric result depends on the driver and the rate being applicable to the actual work.",
      "pages": "298",
      "slides": "20"
    },
    {
      "id": "TB9-C78-012",
      "chapter": 7,
      "type": "mcq",
      "topic": "Bottom-up estimates",
      "section": "Bottom-up estimates",
      "stem": "A detailed WBS exists, and work-package owners estimate their own resource needs before costs are aggregated. Which trade-off best describes this approach?",
      "options": [
        "It is the same as estimating the whole project from one cost-per-unit rate.",
        "It always takes less effort than a broad historical analogy.",
        "It removes the need to include integration and testing.",
        "It can improve detail and accuracy but takes more estimating effort."
      ],
      "correct": 3,
      "explanation": "Bottom-up estimating uses detailed work items and knowledgeable estimators. The extra detail can improve accuracy but is time-consuming; an incomplete WBS still produces an incomplete estimate.",
      "pages": "297-299",
      "slides": "20-21"
    },
    {
      "id": "TB9-C78-013",
      "chapter": 7,
      "type": "mcq",
      "topic": "Three-point cost estimating",
      "section": "Three-point cost estimating",
      "stem": "Using a PERT-weighted three-point estimate, costs are optimistic $40,000, most likely $55,000, and pessimistic $100,000. What is the weighted estimate?",
      "options": [
        "$65,000",
        "$55,000",
        "$60,000",
        "$32,500"
      ],
      "correct": 2,
      "explanation": "Using the stated weighting, (O + 4M + P) / 6 = (40,000 + 220,000 + 100,000) / 6 = $60,000. A simple triangular average would be $65,000, but that is not the weighting requested.",
      "pages": "297",
      "slides": "20"
    },
    {
      "id": "TB9-C78-014",
      "chapter": 7,
      "type": "mcq",
      "topic": "Basis of estimates",
      "section": "Basis of estimates",
      "stem": "Two teams submit the same $500,000 estimate. One includes its scope basis, assumptions, constraints, risks, and confidence; the other supplies only the total. Why is the first more useful?",
      "options": [
        "Its detail guarantees the actual cost cannot exceed $500,000.",
        "Its basis can be reviewed and revised when project conditions change.",
        "Its supporting text replaces the need for a cost baseline.",
        "Its assumptions automatically become approved changes."
      ],
      "correct": 1,
      "explanation": "A basis of estimates explains how an estimate was built and what it depends on. It improves review and updating but does not remove uncertainty or authorize changes. Surveyor Pro illustrates this documentation.",
      "pages": "299-304",
      "slides": "22-24"
    },
    {
      "id": "TB9-C78-015",
      "chapter": 7,
      "type": "mcq",
      "topic": "FTE and labor costing",
      "section": "FTE and labor costing",
      "stem": "Two specialists each spend 20 hours on the project in a 40-hour workweek. At $80 per person-hour, what project staffing and labor cost do they represent for that week?",
      "options": [
        "1 FTE and $1,600",
        "0.5 FTE and $6,400",
        "2 FTE and $3,200",
        "1 FTE and $3,200"
      ],
      "correct": 3,
      "explanation": "Total project effort is 40 person-hours, equal to one full-time equivalent for a 40-hour week. Labor cost is 40 x $80 = $3,200. FTE measures effort relative to a full-time period, not headcount.",
      "pages": "296-297, 305",
      "slides": "19, 26"
    },
    {
      "id": "TB9-C78-016",
      "chapter": 7,
      "type": "mcq",
      "topic": "Planned value and earned value",
      "section": "Planned value and earned value",
      "stem": "A work package has a $40,000 total budget. By the status date, 50% was scheduled and 40% is actually complete under the stated measurement rule. Actual cost is $18,000. What are PV and EV?",
      "options": [
        "PV $18,000; EV $16,000",
        "PV $40,000; EV $20,000",
        "PV $20,000; EV $18,000",
        "PV $20,000; EV $16,000"
      ],
      "correct": 3,
      "explanation": "PV = 50% x 40,000 = $20,000. EV = 40% x 40,000 = $16,000. Actual spending is AC, not earned value; EV uses budgeted rates for the work achieved.",
      "pages": "307-308",
      "slides": "29-31"
    },
    {
      "id": "TB9-C78-017",
      "chapter": 7,
      "type": "mcq",
      "topic": "EVM variance calculations",
      "section": "EVM variance calculations",
      "stem": "At one status date, PV = $60,000, EV = $48,000, and AC = $54,000. What are CV and SV?",
      "options": [
        "CV = $6,000; SV = -$12,000",
        "CV = -$6,000; SV = -$12,000",
        "CV = $6,000; SV = $12,000",
        "CV = -$12,000; SV = -$6,000"
      ],
      "correct": 1,
      "explanation": "CV = EV - AC = 48,000 - 54,000 = -$6,000. SV = EV - PV = 48,000 - 60,000 = -$12,000. Both signs are unfavorable; SV is in budget-value units, not days.",
      "pages": "308-309",
      "slides": "30-32"
    },
    {
      "id": "TB9-C78-018",
      "chapter": 7,
      "type": "mcq",
      "topic": "EVM performance interpretation",
      "section": "EVM performance interpretation",
      "stem": "A project has CPI = 1.10 and SPI = 0.85. Which interpretation is correct at the status date?",
      "options": [
        "Over budget for work performed and ahead of schedule",
        "Cost-efficient for work performed and ahead of schedule",
        "Cost-efficient for work performed, but behind the planned work schedule",
        "Over budget for work performed and behind schedule"
      ],
      "correct": 2,
      "explanation": "CPI above 1 means earned budget value exceeds actual cost for the work performed. SPI below 1 means earned work is below the value scheduled by this date. The two indexes measure different dimensions.",
      "pages": "309",
      "slides": "31-32"
    },
    {
      "id": "TB9-C78-019",
      "chapter": 7,
      "type": "mcq",
      "topic": "EAC and ETC",
      "section": "EAC and ETC",
      "stem": "BAC is $240,000. EV is $96,000 and AC is $120,000. Assuming the current cost efficiency continues, what are EAC and ETC?",
      "options": [
        "EAC $240,000; ETC $120,000",
        "EAC $192,000; ETC $72,000",
        "EAC $300,000; ETC $180,000",
        "EAC $300,000; ETC $204,000"
      ],
      "correct": 2,
      "explanation": "CPI = 96,000 / 120,000 = 0.80. EAC = BAC / CPI = 240,000 / 0.80 = $300,000. ETC = EAC - AC = 300,000 - 120,000 = $180,000, the forecast cost remaining.",
      "pages": "308-310",
      "slides": "31-34"
    },
    {
      "id": "TB9-C78-020",
      "chapter": 7,
      "type": "mcq",
      "topic": "TCPI target",
      "section": "TCPI target",
      "stem": "BAC is $200,000; EV is $80,000 and AC is $100,000. What TCPI is required to finish within the original BAC?",
      "options": [
        "1.00",
        "1.25",
        "0.80",
        "1.20"
      ],
      "correct": 3,
      "explanation": "TCPI(BAC) = (BAC - EV) / (BAC - AC) = 120,000 / 100,000 = 1.20. The remaining work must earn $1.20 of budget value per $1 spent; current CPI is only 0.80.",
      "pages": "309",
      "slides": "31-34"
    },
    {
      "id": "TB9-C78-021",
      "chapter": 7,
      "type": "mcq",
      "topic": "Schedule forecasting limits",
      "section": "Schedule forecasting limits",
      "stem": "A project originally planned for 10 months has SPI = 0.80. Using the textbook’s simplified projection with unchanged schedule efficiency, what is the estimated total duration?",
      "options": [
        "10.8 months",
        "8 months",
        "2.5 months",
        "12.5 months"
      ],
      "correct": 3,
      "explanation": "The textbook shortcut divides original total duration by SPI: 10 / 0.80 = 12.5 months. This is a conditional estimate of total duration, not remaining time or a replacement for critical-path analysis.",
      "pages": "308-310",
      "slides": "33-34"
    },
    {
      "id": "TB9-C78-022",
      "chapter": 7,
      "type": "mcq",
      "topic": "Cost control and changes",
      "section": "Cost control and changes",
      "stem": "Actual cost is below planned spending, but earned value is lower still. What should the manager do before claiming the project is under budget?",
      "options": [
        "Compare EV with AC and investigate unfinished work, rather than judge only AC versus PV.",
        "Record the missing work as earned because money remains.",
        "Lower the approved baseline to match the amount spent.",
        "Declare success because AC below PV proves strong cost performance."
      ],
      "correct": 0,
      "explanation": "Spending less can simply mean accomplishing less. Cost performance compares earned value with actual cost. Baseline changes require authorization; editing it to hide a variance destroys the comparison.",
      "pages": "306-311",
      "slides": "28-34"
    },
    {
      "id": "TB9-C78-023",
      "chapter": 7,
      "type": "mcq",
      "topic": "Project portfolio management",
      "section": "Project portfolio management",
      "stem": "Executives discover several projects funding nearly identical capabilities. Which action best reflects portfolio management?",
      "options": [
        "Treat green dashboard indicators as a substitute for reviewing the underlying data.",
        "Compare investments together and reprioritize or consolidate overlapping work.",
        "Keep all projects because each has already incurred costs.",
        "Make each project manager calculate only their own CPI."
      ],
      "correct": 1,
      "explanation": "Portfolio management evaluates the suite of investments together, considering duplication, strategic value, risk, and scarce funding. EVM helps assess delivery performance but does not by itself decide which investments should exist.",
      "pages": "312-315",
      "slides": "35-38"
    },
    {
      "id": "TB9-C78-024",
      "chapter": 7,
      "type": "mcq",
      "topic": "Adaptive cost management",
      "section": "Adaptive cost management",
      "stem": "An adaptive project has uncertain detailed scope and a strict funding cap. Which approach best fits the assigned chapter?",
      "options": [
        "Increase the funding cap automatically whenever the backlog grows.",
        "Specify every distant task precisely before any learning occurs.",
        "Use high-level forecasts, detail near-term work, and reprioritize scope within funding constraints.",
        "Treat agile delivery as an exemption from cost tracking."
      ],
      "correct": 2,
      "explanation": "Adaptive estimating uses lightweight forecasts and just-in-time detail. With strict budgets, teams may adjust scope and schedule, prioritize value, and obtain funding by release; agile does not mean unlimited or untracked spending.",
      "pages": "315-316",
      "slides": "39"
    },
    {
      "id": "TB9-C78-025",
      "chapter": 7,
      "type": "tf",
      "topic": "Cost and benefit classifications",
      "section": "Cost and benefit classifications",
      "stem": "An improvement in customer goodwill is always easy to express in dollars and is therefore a tangible benefit.",
      "options": [
        "True",
        "False"
      ],
      "correct": 1,
      "explanation": "Goodwill is a typical intangible benefit because reliable monetary valuation is difficult. Intangible does not mean worthless; it describes difficulty in measurement.",
      "pages": "292",
      "slides": "12"
    },
    {
      "id": "TB9-C78-026",
      "chapter": 7,
      "type": "tf",
      "topic": "Learning curve theory",
      "section": "Learning curve theory",
      "stem": "For repetitive work, learning-curve theory suggests unit cost can decrease as cumulative production increases.",
      "options": [
        "True",
        "False"
      ],
      "correct": 0,
      "explanation": "Repetition can improve efficiency in a regular pattern. This is not a promise that every unrelated or novel task will become cheaper.",
      "pages": "293",
      "slides": "13"
    },
    {
      "id": "TB9-C78-027",
      "chapter": 7,
      "type": "tf",
      "topic": "Reserves",
      "section": "Reserves",
      "stem": "Management reserve is included in the approved cost baseline in the same way as contingency reserve.",
      "options": [
        "True",
        "False"
      ],
      "correct": 1,
      "explanation": "Contingency reserve belongs in the cost baseline. Management reserve is outside the baseline and is added to form the total project budget.",
      "pages": "293, 305-306",
      "slides": "13, 26-27"
    },
    {
      "id": "TB9-C78-028",
      "chapter": 7,
      "type": "tf",
      "topic": "Earned value bounds",
      "section": "Earned value bounds",
      "stem": "Earned value at a status date can exceed planned value at that same date if more work has been completed than was scheduled.",
      "options": [
        "True",
        "False"
      ],
      "correct": 0,
      "explanation": "EV may exceed time-to-date PV when work is ahead of plan. For a defined work package, EV does not exceed its total authorized budget merely because actual spending is high.",
      "pages": "307-310",
      "slides": "29-34"
    },
    {
      "id": "TB9-C78-029",
      "chapter": 7,
      "type": "tf",
      "topic": "EVM completion limitation",
      "section": "EVM completion limitation",
      "stem": "At normal completion of all originally planned work, conventional SPI can equal 1 even if the project finished late.",
      "options": [
        "True",
        "False"
      ],
      "correct": 0,
      "explanation": "When all planned scope is earned, EV equals total PV/BAC, so conventional SPI becomes 1. Its late-project behavior is a limitation; inspect actual dates and the schedule. This follows directly from the assigned EV/PV formula.",
      "pages": "308-310",
      "slides": "31-34"
    },
    {
      "id": "TB9-C78-030",
      "chapter": 7,
      "type": "tf",
      "topic": "Software and information quality",
      "section": "Software and information quality",
      "stem": "A project management system can produce reliable EVM results without a credible baseline or trustworthy progress measurements.",
      "options": [
        "True",
        "False"
      ],
      "correct": 1,
      "explanation": "Software calculates from the inputs supplied. Weak estimates, inconsistent completion rules, and stale actuals can make precise-looking dashboards misleading.",
      "pages": "310-311, 314-315",
      "slides": "36-38"
    },
    {
      "id": "TB9-C78-031",
      "chapter": 8,
      "type": "mcq",
      "topic": "Conformance and fitness for use",
      "section": "Conformance and fitness for use",
      "stem": "A reporting system meets every written screen specification, but users cannot complete their intended business decisions with it. Which quality concern is most directly demonstrated?",
      "options": [
        "A gap in fitness for use despite conformance to the written requirements",
        "Proof that all user needs were correctly specified",
        "A guarantee of quality because all written requirements were met",
        "Only a procurement problem unrelated to quality"
      ],
      "correct": 0,
      "explanation": "Conformance addresses written specifications; fitness for use addresses whether the product serves its intended purpose. Stakeholder needs can be inadequately captured even when the build follows the specification.",
      "pages": "330-331",
      "slides": "6-7"
    },
    {
      "id": "TB9-C78-032",
      "chapter": 8,
      "type": "mcq",
      "topic": "Quality process mapping",
      "section": "Quality process mapping",
      "stem": "A team defines allowable failure rates and how those rates will be measured before development starts. Which process is the best match?",
      "options": [
        "Control Quality",
        "Plan Quality Management",
        "Validate Scope",
        "Manage Quality"
      ],
      "correct": 1,
      "explanation": "Planning identifies quality requirements, standards, metrics, and how they will be met. Manage Quality puts quality activities into operation; Control Quality measures actual results.",
      "pages": "330-332",
      "slides": "7-10"
    },
    {
      "id": "TB9-C78-033",
      "chapter": 8,
      "type": "mcq",
      "topic": "Quality audits",
      "section": "Quality audits",
      "stem": "An independent reviewer examines whether the team’s development process follows its quality policies and identifies improvements for future work. What is this?",
      "options": [
        "A cost baseline revision",
        "User acceptance testing of a finished release",
        "A Pareto chart of defect categories",
        "A quality audit supporting Manage Quality"
      ],
      "correct": 3,
      "explanation": "An audit reviews quality management activities and process effectiveness, often producing lessons and improvement opportunities. It differs from testing a specific deliverable for defects or acceptance.",
      "pages": "334-335",
      "slides": "11"
    },
    {
      "id": "TB9-C78-034",
      "chapter": 8,
      "type": "mcq",
      "topic": "Quality and scope handoff",
      "section": "Quality and scope handoff",
      "stem": "A deliverable passes technical inspection against its quality criteria. What is the appropriate formal distinction in the assigned process overview?",
      "options": [
        "Control Quality automatically authorizes every scope change.",
        "Control Quality produces a verified deliverable; Validate Scope addresses formal customer acceptance.",
        "Validate Scope is the process for setting control limits.",
        "Passing inspection eliminates the need for customer acceptance."
      ],
      "correct": 1,
      "explanation": "Figure 8-1 lists verified deliverables under Control Quality. Formal acceptance belongs to Validate Scope, covered in Chapter 5. Page 336 uses looser acceptance/validated wording; do not collapse the two process responsibilities.",
      "pages": "331-332, 336",
      "slides": "7-8, 13"
    },
    {
      "id": "TB9-C78-035",
      "chapter": 8,
      "type": "mcq",
      "topic": "Operational quality metrics",
      "section": "Operational quality metrics",
      "stem": "Which requirement gives the clearest basis for a reproducible performance test?",
      "options": [
        "Users should rarely be disappointed with the system.",
        "The system feels modern to everyone.",
        "The application should be fast when convenient.",
        "At least 95% of searches finish within 2 seconds with 500 concurrent users under the agreed test dataset."
      ],
      "correct": 3,
      "explanation": "A usable metric states what is measured, the threshold, and operating conditions. “Fast” alone leaves the test load, response threshold, and success proportion unspecified.",
      "pages": "331-334",
      "slides": "9-10"
    },
    {
      "id": "TB9-C78-036",
      "chapter": 8,
      "type": "mcq",
      "topic": "Reliability versus maintainability",
      "section": "Reliability versus maintainability",
      "stem": "Which pair best distinguishes reliability from maintainability?",
      "options": [
        "Reliability: cost of training; maintainability: number of suppliers",
        "Reliability: operating as expected under normal conditions; maintainability: ease of upkeep and repair",
        "Reliability: meeting a profit target; maintainability: size of the project budget",
        "Reliability: number of optional features; maintainability: speed of a single query"
      ],
      "correct": 1,
      "explanation": "Reliability concerns expected operation; maintainability concerns how readily the product can be maintained. Both influence quality but describe different properties.",
      "pages": "333-334",
      "slides": "10"
    },
    {
      "id": "TB9-C78-037",
      "chapter": 8,
      "type": "mcq",
      "topic": "Cause-and-effect analysis",
      "section": "Cause-and-effect analysis",
      "stem": "Users cannot sign in. The team groups possible causes under training, software, and hardware before investigating them. Which tool fits best?",
      "options": [
        "An earned value chart",
        "A Pareto chart",
        "A fishbone/cause-and-effect diagram",
        "A histogram of total weekly tickets"
      ],
      "correct": 2,
      "explanation": "A fishbone organizes possible causes of an observed problem. It supports investigation and the five-whys technique; listing a possible cause does not prove it.",
      "pages": "336-337",
      "slides": "14-15"
    },
    {
      "id": "TB9-C78-038",
      "chapter": 8,
      "type": "mcq",
      "topic": "Pareto interpretation",
      "section": "Pareto interpretation",
      "stem": "A help desk records 50 login complaints, 25 timeout complaints, 15 display complaints, and 10 printing complaints. What percentage comes from the first two categories together?",
      "options": [
        "80%",
        "25%",
        "75%",
        "50%"
      ],
      "correct": 2,
      "explanation": "There are 100 complaints total. Login plus timeout = 50 + 25 = 75, or 75%. Pareto analysis identifies the largest contributors; the 80/20 guideline is not an arithmetic rule forcing every dataset to equal 80%.",
      "pages": "340-341",
      "slides": "14, 20"
    },
    {
      "id": "TB9-C78-039",
      "chapter": 8,
      "type": "mcq",
      "topic": "Control versus specification limits",
      "section": "Control versus specification limits",
      "stem": "Every observation is within the customer’s specification limits, but seven successive observations rise. Using the textbook’s seven-run rule, what should the team conclude?",
      "options": [
        "The customer’s requirements automatically become wider.",
        "No investigation is appropriate because specification limits were not crossed.",
        "Seven increasing observations prove the product has seven defects.",
        "Investigate a possible nonrandom pattern even though the observations meet specifications."
      ],
      "correct": 3,
      "explanation": "The assigned rule flags seven successive points on one side of the mean or increasing/decreasing. Statistical stability and customer conformance are separate; a signal calls for investigation, not an automatic defect count.",
      "pages": "337-338",
      "slides": "14, 16"
    },
    {
      "id": "TB9-C78-040",
      "chapter": 8,
      "type": "mcq",
      "topic": "Checksheet selection",
      "section": "Checksheet selection",
      "stem": "A support analyst needs to record each complaint by day and communication channel as it arrives. Which tool is the most direct starting point?",
      "options": [
        "A checksheet/tally sheet",
        "A software maturity appraisal",
        "A normal distribution curve",
        "An EAC calculation"
      ],
      "correct": 0,
      "explanation": "A checksheet structures collection of occurrences. Its data may later support a histogram or Pareto chart, but the immediate job is reliable tallying.",
      "pages": "339",
      "slides": "14, 17"
    },
    {
      "id": "TB9-C78-041",
      "chapter": 8,
      "type": "mcq",
      "topic": "Scatter diagrams",
      "section": "Scatter diagrams",
      "stem": "A team plots concurrent users against response time and sees an upward pattern. What is the strongest justified conclusion from this plot alone?",
      "options": [
        "Every observation is outside its control limit.",
        "The variables appear associated; further analysis is needed to establish causation.",
        "The system has reached Six Sigma quality.",
        "More users have been proven to be the only cause of delay."
      ],
      "correct": 1,
      "explanation": "Scatter plots reveal possible relationships between two variables. A pattern alone does not rule out confounding variables or prove a causal mechanism.",
      "pages": "339",
      "slides": "14, 18"
    },
    {
      "id": "TB9-C78-042",
      "chapter": 8,
      "type": "mcq",
      "topic": "Run charts and flowcharts",
      "section": "Run charts and flowcharts",
      "stem": "A manager wants to trace the sequence and decision points in a release-approval process. Which tool is most suitable?",
      "options": [
        "A scatter diagram of user age and satisfaction",
        "A run chart of weekly defect totals",
        "A flowchart",
        "A cost performance index"
      ],
      "correct": 2,
      "explanation": "Flowcharts show process steps, decisions, and paths. Run charts show measurements in time order; they answer a different question about variation and trends.",
      "pages": "341-342",
      "slides": "14, 21-22"
    },
    {
      "id": "TB9-C78-043",
      "chapter": 8,
      "type": "mcq",
      "topic": "Statistical sample calculation",
      "section": "Statistical sample calculation",
      "stem": "Using n = 0.25(z/e)^2 with z = 1.96 and margin of error e = 0.05, what minimum whole-number sample meets the calculated size after rounding up?",
      "options": [
        "385",
        "96",
        "384",
        "1,537"
      ],
      "correct": 0,
      "explanation": "n = 0.25(1.96 / 0.05)^2 = 384.16; the minimum whole-number sample is 385. The textbook displays 384 as an approximate example. The question explicitly requests rounding up.",
      "pages": "342-343",
      "slides": "23-24"
    },
    {
      "id": "TB9-C78-044",
      "chapter": 8,
      "type": "mcq",
      "topic": "Confidence and precision",
      "section": "Confidence and precision",
      "stem": "Holding confidence and other assumptions fixed, the acceptable margin of error is cut in half in n = 0.25(z/e)^2. What happens to the required sample size before rounding?",
      "options": [
        "It becomes four times as large.",
        "It is unchanged.",
        "It doubles.",
        "It is cut in half."
      ],
      "correct": 0,
      "explanation": "Error appears in the denominator and is squared. Replacing e with e/2 multiplies (z/e)^2 by four. Confidence level and margin of error are separate design choices.",
      "pages": "343",
      "slides": "23-24"
    },
    {
      "id": "TB9-C78-045",
      "chapter": 8,
      "type": "mcq",
      "topic": "DMAIC phases",
      "section": "DMAIC phases",
      "stem": "A Six Sigma team has defined the problem and collected baseline defect data. It now investigates which factors explain the defects. Which DMAIC phase is this?",
      "options": [
        "Control",
        "Improve",
        "Analyze",
        "Define"
      ],
      "correct": 2,
      "explanation": "Analyze investigates and verifies root causes using evidence. Improve develops and pilots solutions; Control sustains and checks the resulting improvements.",
      "pages": "344-346",
      "slides": "25-28"
    },
    {
      "id": "TB9-C78-046",
      "chapter": 8,
      "type": "mcq",
      "topic": "Six Sigma target and opportunities",
      "section": "Six Sigma target and opportunities",
      "stem": "Which statement correctly describes the conventional Six Sigma program target used in the assigned chapter?",
      "options": [
        "About 3.4 defects per million opportunities, not necessarily per million products",
        "Exactly one defect per million opportunities",
        "Exactly 3.4 defective products per million regardless of opportunities",
        "The same tail probability as a perfectly centered normal distribution within ±6 standard deviations"
      ],
      "correct": 0,
      "explanation": "A unit may contain several defect opportunities. The Six Sigma conversion convention differs from the centered-normal table; six nines is a separate one-per-million concept.",
      "pages": "347-348",
      "slides": "29-33"
    },
    {
      "id": "TB9-C78-047",
      "chapter": 8,
      "type": "mcq",
      "topic": "DPMO calculation",
      "section": "DPMO calculation",
      "stem": "A team inspects 2,000 forms with 5 defined defect opportunities per form and finds 20 defects. What is DPMO?",
      "options": [
        "4,000",
        "10,000",
        "2,000",
        "200"
      ],
      "correct": 2,
      "explanation": "Total opportunities = 2,000 x 5 = 10,000. DPMO = 20 / 10,000 x 1,000,000 = 2,000. Count defects against all defined opportunities, not only against the number of forms.",
      "pages": "348",
      "slides": "29-33"
    },
    {
      "id": "TB9-C78-048",
      "chapter": 8,
      "type": "mcq",
      "topic": "Testing levels",
      "section": "Testing levels",
      "stem": "Individual modules pass their tests, but a data-format mismatch appears when the modules exchange records. Which test level most directly targets this interface problem?",
      "options": [
        "Unit testing of one module in isolation",
        "A financial audit",
        "Integration testing",
        "User acceptance testing focused only on business approval"
      ],
      "correct": 2,
      "explanation": "Integration testing checks grouped components and their interactions. Unit testing examines components individually; system testing examines the full system, and UAT assesses fit with users’ business needs.",
      "pages": "349-350",
      "slides": "34-37"
    },
    {
      "id": "TB9-C78-049",
      "chapter": 8,
      "type": "mcq",
      "topic": "Quality experts",
      "section": "Quality experts",
      "stem": "Which pairing is accurate according to the assigned chapter?",
      "options": [
        "Ishikawa: the cost performance index",
        "Crosby: zero defects and Quality Is Free",
        "Deming: responsibility for quality rests only with inspectors",
        "Taguchi: inspection as the only route to quality"
      ],
      "correct": 1,
      "explanation": "Crosby emphasizes zero defects and the avoidable cost of doing work incorrectly. Ishikawa is associated with fishbone diagrams and quality circles; Taguchi with robust design; Deming with systemic management improvement.",
      "pages": "351-354",
      "slides": "38-39"
    },
    {
      "id": "TB9-C78-050",
      "chapter": 8,
      "type": "mcq",
      "topic": "Cost of quality classification",
      "section": "Cost of quality classification",
      "stem": "Before release, a team spends $4,000 teaching defect-prevention practices and $2,000 retesting code after correcting discovered defects. How should the training and retesting be classified?",
      "options": [
        "Training: prevention; retesting: appraisal",
        "Both costs must be external failure because defects were discussed.",
        "Training: appraisal; retesting: external failure",
        "Training: internal failure; retesting: prevention"
      ],
      "correct": 0,
      "explanation": "Training aims to prevent defects. Retesting evaluates the corrected output and is appraisal. The separate work to fix a pre-delivery defect is internal failure; the question asks specifically about training and retesting.",
      "pages": "356-357",
      "slides": "45-46"
    },
    {
      "id": "TB9-C78-051",
      "chapter": 8,
      "type": "mcq",
      "topic": "Internal versus external failure",
      "section": "Internal versus external failure",
      "stem": "Which item is an external failure cost?",
      "options": [
        "Correcting a defect before the customer receives the release",
        "Handling customer complaints and warranty repairs after delivery",
        "Training developers before coding begins",
        "Inspecting a prototype against agreed criteria"
      ],
      "correct": 1,
      "explanation": "External failure means the defect escaped to the customer. Correcting it before delivery is internal failure; prevention and inspection are conformance-related activities.",
      "pages": "357",
      "slides": "45-46"
    },
    {
      "id": "TB9-C78-052",
      "chapter": 8,
      "type": "mcq",
      "topic": "Process maturity",
      "section": "Process maturity",
      "stem": "Using the assigned textbook’s level descriptions, a process is controlled using statistical techniques and explicit quantitative performance objectives. Which level is described?",
      "options": [
        "Level 5: Optimizing",
        "Level 2: Managed",
        "Level 3: Defined",
        "Level 4: Quantitatively managed"
      ],
      "correct": 3,
      "explanation": "The assigned Level 4 emphasizes measurement and statistical control. Level 3 uses defined organizational processes; Level 5 emphasizes continuing improvement based on understanding process variation.",
      "pages": "360-361",
      "slides": "51-52"
    },
    {
      "id": "TB9-C78-053",
      "chapter": 8,
      "type": "mcq",
      "topic": "Quality leadership and environment",
      "section": "Quality leadership and environment",
      "stem": "A manager responds to repeated defects only by buying a new testing tool, while keeping ambiguous requirements and constant interruptions. What improvement best reflects the chapter’s broader argument?",
      "options": [
        "Assume the programming language explains all quality differences.",
        "Increase inspection spending without examining any upstream process.",
        "Give quality responsibility only to the last person who tests the system.",
        "Improve leadership, requirements, work conditions, and process discipline as well as selecting useful tools."
      ],
      "correct": 3,
      "explanation": "Quality is influenced by management and the work environment. The chapter’s workplace study and prevention theme support addressing the system of work, not relying on tools or late inspection alone.",
      "pages": "355-359, 362-363",
      "slides": "43-50, 55"
    },
    {
      "id": "TB9-C78-054",
      "chapter": 8,
      "type": "mcq",
      "topic": "Quality in adaptive delivery",
      "section": "Quality in adaptive delivery",
      "stem": "Which practice best supports quality in an adaptive project?",
      "options": [
        "Save all acceptance checks for the last day of the entire project.",
        "Assume a sprint review automatically proves the absence of every defect.",
        "Treat shorter iterations as permission to skip quality requirements.",
        "Include quality criteria in the definition of done, test small increments, and use retrospectives to improve the process."
      ],
      "correct": 3,
      "explanation": "Frequent quality checks, small batches, and process feedback uncover problems sooner. A definition of done needs quality criteria; stakeholder review and retrospective improvement serve complementary purposes.",
      "pages": "363",
      "slides": "56"
    },
    {
      "id": "TB9-C78-055",
      "chapter": 8,
      "type": "tf",
      "topic": "Quality assurance terminology",
      "section": "Quality assurance terminology",
      "stem": "In the ninth edition, Manage Quality is broader than quality assurance alone because it also includes product design and process improvements.",
      "options": [
        "True",
        "False"
      ],
      "correct": 0,
      "explanation": "The assigned chapter explicitly describes Manage Quality as covering assurance activities plus design and process improvement. Its chapter summary and the last slide retain some older assurance wording.",
      "pages": "331, 334, 365",
      "slides": "7, 11, 57"
    },
    {
      "id": "TB9-C78-056",
      "chapter": 8,
      "type": "tf",
      "topic": "Stable versus capable processes",
      "section": "Stable versus capable processes",
      "stem": "A statistically stable process must always produce results that satisfy customer specification limits.",
      "options": [
        "True",
        "False"
      ],
      "correct": 1,
      "explanation": "Stability concerns predictable variation; conformance concerns requirements. A stable process can consistently produce unacceptable outputs and need redesign or improvement.",
      "pages": "337-338",
      "slides": "16"
    },
    {
      "id": "TB9-C78-057",
      "chapter": 8,
      "type": "tf",
      "topic": "Six Sigma and six nines",
      "section": "Six Sigma and six nines",
      "stem": "Six Sigma’s conventional 3.4 DPMO target and six nines of availability are numerically identical.",
      "options": [
        "True",
        "False"
      ],
      "correct": 1,
      "explanation": "Six Sigma convention is approximately 3.4 defects per million opportunities. Six nines is 99.9999%, a one-in-a-million unavailable fraction when used for availability; the measures also refer to different contexts.",
      "pages": "347-348",
      "slides": "29-33"
    },
    {
      "id": "TB9-C78-058",
      "chapter": 8,
      "type": "tf",
      "topic": "Testing and prevention",
      "section": "Testing and prevention",
      "stem": "A successful final system test removes the need to plan quality or prevent defects earlier in development.",
      "options": [
        "True",
        "False"
      ],
      "correct": 1,
      "explanation": "The chapter argues for testing and prevention across the life cycle. A finite test set cannot demonstrate that every possible interaction and future use is defect-free.",
      "pages": "348-350",
      "slides": "34-37"
    },
    {
      "id": "TB9-C78-059",
      "chapter": 8,
      "type": "tf",
      "topic": "Cost of conformance",
      "section": "Cost of conformance",
      "stem": "Prevention and appraisal spending can be justified by avoiding larger internal and external failure costs.",
      "options": [
        "True",
        "False"
      ],
      "correct": 0,
      "explanation": "Total cost of quality includes both conformance and nonconformance. A prevention activity can increase near-term spending while lowering rework, warranty costs, and other downstream losses.",
      "pages": "356-357",
      "slides": "45-46"
    },
    {
      "id": "TB9-C78-060",
      "chapter": 8,
      "type": "tf",
      "topic": "Improvement approaches",
      "section": "Improvement approaches",
      "stem": "Benchmarking compares practices or product characteristics with other projects or organizations; kaizen emphasizes continuing improvement.",
      "options": [
        "True",
        "False"
      ],
      "correct": 0,
      "explanation": "Benchmarking helps identify improvement opportunities from comparisons; kaizen is continuing improvement. Lean emphasizes customer value and reduced waste, while Kanban can improve flow and limit work in progress.",
      "pages": "334-335",
      "slides": "11-12"
    }
  ]
};
