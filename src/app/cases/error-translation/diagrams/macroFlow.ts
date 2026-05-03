export const ERROR_TRANSLATION_MACRO_FLOW = `
graph TD
    Client[Legacy Apps / Plugins] -->|Unstructured Error| API[.NET API Proxy]
    
    subgraph Heuristic Cache Layer
        API -->|1. Generate Hash Key| L1{L1: .NET Memory Cache}
        L1 -- Cache Hit --> Return[Return Standardized Error]
        
        L1 -- Cache Miss --> L2{L2: Database}
        L2 -- Cache Hit --> UpdateL1[Hydrate L1]
        UpdateL1 --> Return
    end
    
    subgraph Translation & Observability
        L2 -- Cache Miss --> LLM[OpenAI API Translation]
        LLM --> SaveDB[(Save Hash & Result to DB)]
        SaveDB --> UpdateL1
        LLM --> Log[Logs for Observability and Metrics]
    end
`