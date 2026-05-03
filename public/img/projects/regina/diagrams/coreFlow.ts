export const REGINA_CORE_FLOW = `
flowchart TD
    %% Entities
    Customer([Customer])
    Domain{Custom Domain}
    NextJS[Next.js App <br/> Frontend & API]
    Mongo[(MongoDB)]
    PayPal[[PayPal API]]
    S3[(AWS S3)]

    %% Flow
    Customer -->|Browses & Buys| Domain
    Domain -->|Routes| NextJS
    
    NextJS <-->|Products, Orders, Users| Mongo
    NextJS <-->|Processes Payment| PayPal
    NextJS <-->|Generates Secure Links| S3
    
    S3 -.->|Downloads Cutfiles| Customer    
;`