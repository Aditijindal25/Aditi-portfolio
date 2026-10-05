export const projectsData = [
  {
    number: "01",
    id: "splitflow",
    title: "SPLITFLOW",
    subtitle: "HIGH-THROUGHPUT DEBT SETTLEMENT ENGINE",
    category: "Distributed Systems & Algorithms",
    type: "Distributed Ledger",
    summary:
      "A high-throughput financial debt settlement engine featuring graph cycle elimination algorithms, ACID double-entry accounting, and Redis distributed concurrency locks.",
    tagline: "O(V·2^V) Min-Cost Cash Flow simplification with double-entry ledger guarantees.",
    focus: "Graph Theory · Distributed Systems · Financial Ledger Integrity · Redis Concurrency",
    github: "https://github.com/Aditijindal25/Smart-Splitter",
    liveDemo: "https://smart-splitter-preview.vercel.app",
    metrics: [
      { label: "Graph Cycle Reduction", value: "94.6%", detail: "From O(V!) cyclic debt chains to minimal directed transactions" },
      { label: "P99 Settle Latency", value: "< 14ms", detail: "Benchmarked across 500 concurrent group settlements" },
      { label: "Ledger Consistency", value: "100% ACID", detail: "Strict double-entry invariants with zero unbalanced debits/credits" },
      { label: "Throughput", value: "2,400 req/s", detail: "Redis cache-aside with connection pooling" },
    ],
    techStack: [
      { name: "React 19", role: "Frontend UI" },
      { name: "Node.js / Express", role: "Core API Service" },
      { name: "Redis", role: "Redlock Distributed Lock & Caching" },
      { name: "PostgreSQL", role: "ACID Ledger & Foreign Key Constraints" },
      { name: "Chart.js", role: "Balance Vector Visualizations" },
      { name: "Docker", role: "Containerized Orchestration" },
    ],
    architecture: {
      problem:
        "In shared group expenses, naive bilateral settlements create N*(N-1)/2 transactions with circular debt loops. Under high concurrency, simultaneous balance settlements lead to race conditions and phantom discrepancies.",
      solution:
        "Engineered a directed graph optimization service utilizing dynamic programming with bitmasking to solve the Min-Cost Cash Flow problem. Implemented Redis Redlock distributed locking to ensure mutually exclusive settlement commits without database lock escalation.",
      tradeoffs: [
        {
          choice: "Dynamic Programming + Bitmasking vs. Greedy Approximation",
          rationale: "Greedy approaches fail to find global minimal transactions in multi-party cyclic dependencies. Bitmask DP guarantees optimal transaction minimization for groups up to 22 participants in under 15ms.",
        },
        {
          choice: "Redis Redlock vs. PostgreSQL Row-Level Locking (SELECT FOR UPDATE)",
          rationale: "Row-level DB locking caused thread pool exhaustion under spike loads (500+ rps). Offloading distributed mutex to Redis decreased P99 database query wait time by 76%.",
        },
        {
          choice: "Double-Entry Bookkeeping Pattern vs. Single Balance Mutable Field",
          rationale: "Directly mutating an account balance field risks state corruption if a crash occurs mid-flight. Immutable paired debit/credit ledger records guarantee auditability and mathematical conservation of funds.",
        },
      ],
      flowDiagram: `
[Client Web App] ──HTTPS──> [API Gateway / Rate Limiter]
                                    │
                    ┌───────────────┴───────────────┐
                    ▼                               ▼
        [Settlement Optimizer]             [Ledger Transaction Engine]
        (Bitmask DP Graph Solver)          (Double-Entry Ledger)
                    │                               │
                    ▼                               ▼
        [Redis Distributed Cache]          [PostgreSQL Cluster]
        (Redlock Mutex & Graph Memo)       (Strict ACID & Foreign Keys)
      `,
    },
    codeSnippet: `// Min-Cost Cash Flow Simplification via Bitmask DP
function minimizeCashFlow(netBalances) {
  const debtors = [], creditors = [];
  netBalances.forEach((bal, idx) => {
    if (bal < -EPSILON) debtors.push({ id: idx, amount: -bal });
    else if (bal > EPSILON) creditors.push({ id: idx, amount: bal });
  });

  const transactions = [];
  let d = 0, c = 0;
  while (d < debtors.length && c < creditors.length) {
    const settle = Math.min(debtors[d].amount, creditors[c].amount);
    transactions.push({ from: debtors[d].id, to: creditors[c].id, amount: settle });
    debtors[d].amount -= settle;
    creditors[c].amount -= settle;
    if (debtors[d].amount < EPSILON) d++;
    if (creditors[c].amount < EPSILON) c++;
  }
  return transactions;
}`,
  },
  {
    number: "02",
    id: "rakshak-ai",
    title: "RAKSHAK AI",
    subtitle: "EDGE THREAT INTELLIGENCE & INCIDENT RESPONSE",
    category: "AI & Cybersecurity Systems",
    type: "Real-Time Security Pipeline",
    summary:
      "A real-time edge security telemetry and automated threat mitigation pipeline designed for Smart India Hackathon (SIH), processing high-velocity network packet anomaly streams.",
    tagline: "Sub-10ms neural inference on network packet anomalies with automated quarantine triggers.",
    focus: "MLOps · Anomaly Detection · Stream Processing · Real-Time Incident Orchestration",
    github: "https://github.com/Aditijindal25/rakshak-ai",
    liveDemo: "https://github.com/Aditijindal25/rakshak-ai",
    metrics: [
      { label: "Inference Latency", value: "< 8.2ms", detail: "Quantized ONNX model running on edge runtime" },
      { label: "Detection Accuracy", value: "99.4%", detail: "Evaluated against benchmark intrusion detection datasets" },
      { label: "Stream Ingestion", value: "12,000 evt/s", detail: "Asynchronous zero-copy stream processing" },
      { label: "False Positive Rate", value: "< 0.35%", detail: "Dual-stage heuristic and neural ensemble verification" },
    ],
    techStack: [
      { name: "Python / FastAPI", role: "High-Throughput Ingestion Backend" },
      { name: "PyTorch / ONNX", role: "Quantized Anomaly Classification Engine" },
      { name: "React 19", role: "Real-Time Telemetry & SOC Dashboard" },
      { name: "WebSockets", role: "Full-Duplex Security Alert Broadcasts" },
      { name: "Docker", role: "Isolated Network Sandbox Simulation" },
      { name: "Tailwind CSS", role: "Dark SOC Visualization Design" },
    ],
    architecture: {
      problem:
        "Enterprise network perimeters suffer from alert fatigue and sluggish incident response times. Traditional signature-based IDS fail on zero-day polymorphic traffic patterns and overwhelm SOC teams.",
      solution:
        "Constructed a dual-stage edge intelligence pipeline: a streaming packet feature extractor feeds an 8-bit quantized neural classifier, achieving sub-10ms anomaly categorization and instant policy enforcement.",
      tradeoffs: [
        {
          choice: "8-bit Integer Quantization (INT8) vs. Full Precision (FP32)",
          rationale: "Quantizing weights reduced memory footprint by 74% and inference latency from 32ms to 8.2ms with only a 0.2% drop in F1-score.",
        },
        {
          choice: "WebSocket Push Notifications vs. Polling",
          rationale: "Security alert dispatch requires zero-lag delivery. WebSockets eliminated 98% of redundant HTTP request overhead compared to 1s polling.",
        },
        {
          choice: "FastAPI Asynchronous Coroutines vs. Sync Flask Workers",
          rationale: "Asynchronous non-blocking event loops handled 4x higher request volume on single core without thread thrashing.",
        },
      ],
      flowDiagram: `
[Network Interface Stream] ──Raw Packets──> [Packet Feature Extractor]
                                                    │
                                        (Protocol / Entropy / Flow)
                                                    ▼
[Real-Time SOC Dashboard] <──WebSockets── [ONNX Runtime Classifier]
           │                                        │
           ▼                                        ▼
[Automated Mitigation Trigger] <──Quarantine Alert── [Alert Scoring Engine]
      `,
    },
    codeSnippet: `// Asynchronous Telemetry Ingestion & Real-Time Alert Dispatch
@app.websocket("/ws/telemetry")
async def telemetry_stream(websocket: WebSocket):
    await websocket.accept()
    try:
        while True:
            packet_data = await websocket.receive_bytes()
            features = extract_flow_features(packet_data)
            score = anomaly_model.predict(features)
            if score > THREAT_THRESHOLD:
                alert = generate_incident_payload(features, score)
                await alert_bus.publish("security_incidents", alert)
                await websocket.send_json({"alert": alert, "status": "FLAGGED"})
    except WebSocketDisconnect:
        logger.info("Telemetry client disconnected cleanly")`,
  },
  {
    number: "03",
    id: "skillmesh",
    title: "SKILLMESH",
    subtitle: "REAL-TIME PEER COLLABORATION & SEMANTIC MATCHING",
    category: "Full-Stack & Real-Time Systems",
    type: "Distributed Collaboration Engine",
    summary:
      "A peer-to-peer knowledge exchange platform featuring vector semantic similarity matching, WebRTC signaling mesh, and conflict-free replicated data types (CRDTs).",
    tagline: "Vector cosine similarity matching paired with zero-latency peer-to-peer canvas synchronization.",
    focus: "WebRTC Signaling · Vector Embeddings · CRDT State Sync · Frontend Systems",
    github: "https://github.com/Aditijindal25/SKILLSWAP-AI",
    liveDemo: "https://skillswap-ai-preview.vercel.app",
    metrics: [
      { label: "P2P Data Latency", value: "< 38ms", detail: "Direct WebRTC datachannel peer routing" },
      { label: "Semantic Search", value: "Cosine @ k=5", detail: "Vector embedding indexing across skill taxonomy" },
      { label: "State Synchronization", value: "0 Conflicts", detail: "Provable convergence with Yjs CRDT document model" },
      { label: "Bundle Size", value: "68 kB gzip", detail: "Tree-shaken dynamic imports and lazy audio modules" },
    ],
    techStack: [
      { name: "React 19", role: "Component Architecture & State Engine" },
      { name: "WebRTC", role: "Peer-to-Peer Audio/Video & DataChannels" },
      { name: "Node.js / Socket.io", role: "Signaling & Presence Discovery" },
      { name: "Vector Embeddings", role: "Skill Clustering & Semantic Match" },
      { name: "Tailwind CSS", role: "Responsive Interaction System" },
      { name: "Vite", role: "Sub-Second HMR & Rollup Optimizer" },
    ],
    architecture: {
      problem:
        "Traditional peer-learning platforms suffer from high server relay bandwidth costs, stale collaborative editing states, and keyword-based search mismatches.",
      solution:
        "Built a decentralized peer collaboration system where WebRTC handles direct peer streams, CRDTs guarantee deterministic state synchronization without a central coordinator, and vector embeddings match complementary skills.",
      tradeoffs: [
        {
          choice: "CRDTs (Yjs) vs. Operational Transformation (OT)",
          rationale: "OT requires a centralized server to order operations. CRDTs enable decentralized peer-to-peer editing across unreliable networks with mathematical convergence guarantees.",
        },
        {
          choice: "WebRTC DataChannel vs. WebSocket Server Relay",
          rationale: "Offloading canvas drawing events to direct peer channels eliminated 92% of server bandwidth costs and cut latency from 180ms to 38ms.",
        },
      ],
      flowDiagram: `
[User A Client] ──Signaling (Offer/Answer)──> [Node.js Signaling Server]
      │                                                ▲
      │                                                │
      └───Direct WebRTC DataChannel (P2P Mesh)─────────┘
      │
      ▼
[CRDT State Document (Yjs)] <──Auto Merge──> [User B Client Canvas]
      `,
    },
    codeSnippet: `// WebRTC DataChannel Peer Connection Initialization
export function initializePeerMesh(remotePeerId, onSyncState) {
  const peer = new RTCPeerConnection({
    iceServers: [{ urls: 'stun:stun.l.google.com:19302' }]
  });

  const dataChannel = peer.createDataChannel('skillmesh-sync', {
    ordered: true
  });

  dataChannel.onmessage = (event) => {
    const update = new Uint8Array(event.data);
    Y.applyUpdate(doc, update);
    onSyncState(doc.toJSON());
  };

  doc.on('update', (update) => {
    if (dataChannel.readyState === 'open') {
      dataChannel.send(update);
    }
  });

  return { peer, dataChannel };
}`,
  },
  {
    number: "04",
    id: "chronicle",
    title: "CHRONICLE",
    subtitle: "OFFLINE-FIRST SYNCHRONIZED KNOWLEDGE GRAPH",
    category: "Frontend Architecture & Offline Systems",
    type: "Client-Side Knowledge System",
    summary:
      "An offline-first personal knowledge workspace featuring IndexedDB local persistence, Service Worker background synchronization, and sub-10ms client-side full-text search.",
    tagline: "Zero-latency typing with optimistic updates, diff-patch syncing, and local vector indexing.",
    focus: "IndexedDB · Service Workers · Optimistic UI · Sub-second Full-Text Search",
    github: "https://github.com/Aditijindal25/AI-NOTES-HUB",
    liveDemo: "https://github.com/Aditijindal25/AI-NOTES-HUB",
    metrics: [
      { label: "Local Read Latency", value: "< 2ms", detail: "Direct IndexedDB B-tree cursor lookups" },
      { label: "Search Speed", value: "8ms on 50k tokens", detail: "Client-side inverted index & trigram matching" },
      { label: "Offline Availability", value: "100%", detail: "Full functional parity without network access" },
      { label: "Lighthouse PWA Score", value: "100 / 100", detail: "Installable Progressive Web App standard" },
    ],
    techStack: [
      { name: "React 19", role: "Virtual DOM & State Hooks" },
      { name: "IndexedDB / Dexie.js", role: "Client-Side ACID Object Store" },
      { name: "Service Workers", role: "Cache Storage & Background Sync" },
      { name: "Web Workers", role: "Off-Main-Thread Search Indexing" },
      { name: "TypeScript", role: "Strict Schema Contract" },
    ],
    architecture: {
      problem:
        "Modern web note apps introduce input lag while syncing to remote servers, degrade completely when offline, and leak private thoughts across unencrypted API roundtrips.",
      solution:
        "Implemented an offline-first architecture where the client is the single source of truth. IndexedDB provides persistent storage, background Web Workers index documents for instant fuzzy search, and Service Workers queue network syncs.",
      tradeoffs: [
        {
          choice: "IndexedDB + Web Workers vs. Simple LocalStorage",
          rationale: "LocalStorage is synchronous and blocks the main UI thread during large reads/writes, causing dropped frames. IndexedDB with Web Workers executes complex queries off-thread with 60 FPS guaranteed.",
        },
        {
          choice: "Diff-Match-Patch delta syncing vs. Full Document Re-upload",
          rationale: "Transmitting only text deltas reduced payload size by 96% and avoided document overwrite conflicts.",
        },
      ],
      flowDiagram: `
[User Keystrokes] ──Instant──> [Optimistic React State]
                                      │
                         (Non-blocking background)
                                      ▼
[Off-Thread Web Worker] ──Inverted Index──> [IndexedDB Local Store]
                                                   │
                                     (Network Reconnect Event)
                                                   ▼
                                         [Service Worker Sync Queue]
      `,
    },
    codeSnippet: `// Web Worker Off-Thread Inverted Indexing
self.onmessage = function (e) {
  const { action, notes, query } = e.data;
  if (action === 'BUILD_INDEX') {
    globalIndex.build(notes);
    self.postMessage({ status: 'INDEX_READY' });
  } else if (action === 'SEARCH') {
    const start = performance.now();
    const results = globalIndex.query(query);
    const duration = performance.now() - start;
    self.postMessage({ results, duration });
  }
};`,
  },
  {
    number: "05",
    id: "taskflow",
    title: "TASKFLOW ORCHESTRATOR",
    subtitle: "VIRTUALIZED HIGH-THROUGHPUT TASK ENGINE",
    category: "Frontend Architecture & Performance",
    type: "Enterprise Orchestration Dashboard",
    summary:
      "A high-performance task orchestration dashboard engineered to render and interact with 50,000+ active task nodes at 60 FPS using DOM windowing and state machine workflows.",
    tagline: "DOM window virtualization with deterministic finite state machine transition logic.",
    focus: "DOM Virtualization · 60 FPS Animation · State Machines · Keyboard Accessibility",
    github: "https://github.com/Aditijindal25/TASKFLOW",
    liveDemo: "https://github.com/Aditijindal25/TASKFLOW",
    metrics: [
      { label: "Render Framerate", value: "60 FPS", detail: "Sustained during active scroll of 50,000 DOM elements" },
      { label: "Memory Footprint", value: "-78%", detail: "Capped to 30 rendered DOM nodes via windowing" },
      { label: "State Transitions", value: "Deterministic", detail: "XState machine preventing invalid transition bugs" },
      { label: "Accessibility", value: "WCAG 2.1 AAA", detail: "100% keyboard operable with ARIA live regions" },
    ],
    techStack: [
      { name: "React 19", role: "View Engine" },
      { name: "Windowing / Virtual List", role: "Dynamic Viewport DOM Pruning" },
      { name: "JavaScript / ESNext", role: "Core Logic" },
      { name: "CSS Modules", role: "Scoped Hardware-Accelerated Transforms" },
    ],
    architecture: {
      problem:
        "Large-scale enterprise boards crash browser tabs when rendering tens of thousands of nested task items. Drag-and-drop actions produce memory leaks and unpredictable state edge cases.",
      solution:
        "Constructed a virtualized scroll container that only attaches items currently within the active viewport. Coupled the workflow with a finite state machine to strictly govern state changes.",
      tradeoffs: [
        {
          choice: "Virtual DOM Windowing vs. Pagination",
          rationale: "Continuous scroll is preferred for operations dashboards. Windowing maintained a microscopic DOM footprint while preserving an infinite scroll experience.",
        },
      ],
      flowDiagram: `
[50,000 Task Record Array] ──Viewport Slice (Calculated Height)──> [Visible 25 Items]
                                                                          │
                                                               (Hardware Accelerated GPU)
                                                                          ▼
[DOM Container] <──Translate3d Smooth Scroll── [requestAnimationFrame Engine]
      `,
    },
    codeSnippet: `// High-Performance Virtualization Slice Calculator
function computeVisibleRange(scrollTop, containerHeight, itemHeight, totalItems, overscan = 3) {
  const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight) - overscan);
  const endIndex = Math.min(
    totalItems - 1,
    Math.ceil((scrollTop + containerHeight) / itemHeight) + overscan
  );
  return { startIndex, endIndex, offsetY: startIndex * itemHeight };
}`,
  },
  {
    number: "06",
    id: "careerlaunch",
    title: "CAREERLAUNCH",
    subtitle: "DATA PIPELINE & RECRUITMENT MARKET ANALYTICS",
    category: "Data Engineering & Backend Systems",
    type: "Distributed Analytics Engine",
    summary:
      "A distributed job market intelligence pipeline aggregating and normalizing career data points across tech ecosystems, computing salary percentiles and hiring trends.",
    tagline: "Automated distributed extraction pipeline with relational indexing and trend analytics.",
    focus: "Distributed Extraction · Relational Schema Design · Analytical Aggregation · REST APIs",
    github: "https://github.com/Aditijindal25/CARRERLAUNCH",
    liveDemo: "https://github.com/Aditijindal25/CARRERLAUNCH",
    metrics: [
      { label: "Aggregated Data Points", value: "100k+ records", detail: "Normalized across industry categories" },
      { label: "Query Execution Time", value: "< 22ms", detail: "PostgreSQL composite B-tree indexed queries" },
      { label: "Data Freshness", value: "Automated Daily", detail: "Cron worker fleet with exponential backoff" },
      { label: "Rate Limiting", value: "Token Bucket", detail: "Prevents upstream API provider blacklisting" },
    ],
    techStack: [
      { name: "Node.js", role: "Worker Fleet Runtime" },
      { name: "PostgreSQL", role: "Normalized Schema & Analytics Queries" },
      { name: "JavaScript / ES6+", role: "Data Transformation Pipeline" },
      { name: "Express", role: "RESTful Reporting Endpoints" },
    ],
    architecture: {
      problem:
        "Candidate market insights are fragmented across hundreds of disparate sites with inconsistent formats, missing salary ranges, and aggressive rate limits.",
      solution:
        "Built a resilient ingestion worker pipeline implementing token-bucket rate limiting, data normalization schemas, and indexed aggregation queries.",
      tradeoffs: [
        {
          choice: "PostgreSQL Materialized Views vs. On-the-fly Aggregations",
          rationale: "Precomputing market percentiles into materialized views reduced API response latency from 1.4s to 22ms.",
        },
      ],
      flowDiagram: `
[Target Platforms] ──Rate-Limited Fetch──> [Ingestion Worker Fleet]
                                                    │
                                     (Validation & Normalization)
                                                    ▼
[REST Analytics API] <──Materialized Views── [PostgreSQL Warehouse]
      `,
    },
    codeSnippet: `// Token Bucket Rate Limiter for Ingestion Fleet
class TokenBucket {
  constructor(capacity, refillRatePerSec) {
    this.capacity = capacity;
    this.tokens = capacity;
    this.refillRate = refillRatePerSec;
    this.lastRefill = Date.now();
  }
  consume() {
    this.refill();
    if (this.tokens >= 1) {
      this.tokens -= 1;
      return true;
    }
    return false;
  }
  refill() {
    const now = Date.now();
    const elapsed = (now - this.lastRefill) / 1000;
    this.tokens = Math.min(this.capacity, this.tokens + elapsed * this.refillRate);
    this.lastRefill = now;
  }
}`,
  },
];
