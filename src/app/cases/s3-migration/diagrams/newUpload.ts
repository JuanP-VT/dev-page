export const NEW_UPLOAD_DIAGRAM = `graph TD
    subgraph Client Layer
        C[Frontend / Mobile App]
    end

    subgraph Backend API
        API[API: Generate Presigned URL]
    end

    subgraph AWS Cloud
        S3[(S3 Bucket)]
        SQS[[SQS Queue]]
        DLQ[[SQS Dead Letter Queue]]
    end

    subgraph Backend Infrastructure
        WORKER[Background Worker]
        DB[(MySQL Database)]
        OBS[CloudWatch Logs & Metrics]
    end

    C -- "1. Request upload (user, metadata)" --> API
    API -- "2. Create record status='pending', correlation ID" --> DB
    API -- "3. Return presigned URL + fileId" --> C
    C -- "4. POST file with metadata (correlation ID, fileId)" --> S3
    S3 -- "5. s3:ObjectCreated event" --> SQS
    SQS -- "6. Poll (maxReceiveCount=3)" --> WORKER
    WORKER -- "7. Validate file, extract ETag + correlation ID" --> WORKER
    WORKER -- "8. Idempotent UPDATE: pending -> active/failed" --> DB
    WORKER -- "9. On success: Delete SQS message" --> SQS
    WORKER -- "10. On final failure (after retries)" --> DLQ
    WORKER -.-> OBS
    DB -.-> OBS`.trim();