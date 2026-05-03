export const LEGACY_UPLOAD_DIAGRAM = `graph TD
    subgraph Clients
        W[Web Portal User]
        M[Mobile App / Driver]
    end

    subgraph Legacy Application Layer
        API[.NET Monolith]
        MEM[Server Memory / CPU]
    end

    subgraph Data Layer
        DB[(MySQL Database)]
    end

    W -- "1. POST Binary File" --> API
    M -- "1. POST Evidence (Binary)" --> API
    API -- "2. Load File into Memory" --> MEM
    MEM -- "3. Encode to Base64 (High CPU)" --> API
    API -- "4. INSERT Base64 String (Bloat)" --> DB`.trim();
    