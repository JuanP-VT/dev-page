export const NEW_UPLOAD_DIAGRAM = `graph TD
    subgraph Clients
        W[React Web App]
        M[Mobile Driver App]
    end

    subgraph Modern Application Layer
        API[.NET API]
    end

    subgraph AWS Cloud & Data Layer
        IAM[AWS IAM]
        S3[(AWS S3 Bucket)]
        DB[(MySQL Database)]
    end

    W -- "1. Request Upload URL (Metadata)" --> API
    M -- "1. Request Upload URL (Metadata)" --> API
    API -- "2. Generate Pre-signed POST Policy" --> IAM
    API -- "3. INSERT (Status: Pending)" --> DB
    API -- "4. Return Secure URL" --> W
    
    W -- "5. POST Multipart File Directly" --> S3
    W -- "6. Confirm Upload Success" --> API
    API -- "7. UPDATE (Status: Complete)" --> DB`.trim();

    export const NEW_UPLOAD_DIAGRAM_EV = `graph TD
    subgraph Client Layer
        C[Frontend / Mobile App]
    end

    subgraph AWS Cloud
        S3[(AWS S3 Bucket)]
        SQS[[AWS SQS Queue]]
    end

    subgraph Backend Infrastructure
        WORKER[.NET Background Service]
        DB[(MySQL Database)]
    end

    C -- "1. POST Multipart File" --> S3
    S3 -- "2. s3:ObjectCreated Event" --> SQS
    SQS -- "3. Poll for Messages" --> WORKER
    WORKER -- "4. Validate File & Extract ETag" --> WORKER
    WORKER -- "5. UPDATE Record to 'Active'" --> DB
    WORKER -- "6. Acknowledge & Delete Message" --> SQS`.trim();