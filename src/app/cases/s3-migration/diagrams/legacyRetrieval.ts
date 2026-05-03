export const LEGACY_RETRIEVAL_DIAGRAM = `graph TD
    subgraph Clients
        C[Client Request]
    end

    subgraph Legacy Application Layer
        API[.NET Monolith]
        MEM[Server Memory / CPU]
    end

    subgraph Data Layer
        DB[(MySQL Database)]
    end

    C -- "1. GET File (ID)" --> API
    API -- "2. SELECT Base64 String" --> DB
    DB -- "3. Return Bloated String" --> API
    API -- "4. Load into Memory" --> MEM
    MEM -- "5. Decode to Binary (High CPU)" --> API
    API -- "6. Stream Binary Payload" --> C`.trim();