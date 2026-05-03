export const MIGRATION = `graph LR
    subgraph Data Sources
        DB[(MySQL Database)]
        S3[(AWS S3 Bucket)]
    end

    subgraph Migration Utility
        SCRIPT[.NET Migration Script]
    end

    DB -->|"1. Fetch Batch<br>(Status = 'Pending' FOR UPDATE SKIP LOCKED)"| SCRIPT
    SCRIPT -->|"2. Stream Decode B64<br>& Calculate Hash"| SCRIPT
    
    SCRIPT ---->|"3. PUT Stream + Hash Header<br>(S3 Key tied to DB Id)"| S3
    S3 ---->|"4. S3 Validates Hash<br>& Returns Success"| SCRIPT
    
    SCRIPT -->|"5. DB Tx: UPDATE States<br>(Success: B64=null, Migrated | Fail: Status='Error')"| DB`.trim();