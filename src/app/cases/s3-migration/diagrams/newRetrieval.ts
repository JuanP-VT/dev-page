export const NEW_RETRIEVAL =`graph TD
    subgraph Clients
        C[Client Request]
    end

    subgraph Modern Application Layer
        API[.NET API / Security Layer]
        CACHE[(Mem Cache)]
    end

    subgraph Storage & Data Layer
        DB[(MySQL Database)]
        IAM[AWS IAM Roles]
        S3[(AWS S3 Private Bucket)]
    end

    C -- "1. GET Private File (ID)" --> API
    API -- "2. Check Object Key" --> CACHE
    CACHE -. "Cache Miss" .-> DB
    DB -- "3. Return S3 Object Key" --> API
    API -- "4. Request Pre-signed URL" --> IAM
    IAM -- "5. Return Secure Expiring URL" --> API
    API -- "6. Return Pre-signed URL" --> C
    C -- "7. Direct HTTPS GET (Secure)" --> S3`.trim();