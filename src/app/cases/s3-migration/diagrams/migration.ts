export const MIGRATION = `graph TD
    subgraph Data Sources
        DB[(MySQL Database)]
        S3[(AWS S3 Bucket)]
    end

    subgraph Migration Utility
        SCRIPT[.NET Migration Script]
    end

    DB -- "1. Fetch Batch (B64, Id, Metadata)" --> SCRIPT
    SCRIPT -- "2. Decode B64 to Binary in-memory" --> SCRIPT
    SCRIPT -- "3. Stream Binary directly to S3" --> S3
    S3 -- "4. Return S3 Object Key" --> SCRIPT
    SCRIPT -- "5. UPDATE Record (B64=null, Key=Key, Status=Migrated)" --> DB`.trim();