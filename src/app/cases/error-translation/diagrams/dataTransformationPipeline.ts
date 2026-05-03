export const DATA_TRANSFORMATION_PIPELINE = `flowchart TD
    Raw[Raw Unstructured JSON Error] --> Parse[Flatten JSON Tree]
    
    subgraph Phase 1: Decomposition
        Parse --> Leaf[Generate NodeLeaf Collection<br/><i>Extract: Path, Type, Value</i>]
    end
    
    subgraph Phase 2: Sanitization & Normalization
        Leaf --> Filter{Hard Noise Filter Removal}
        Filter -.->|Drop| Noise[Discard: Timestamps, GUIDs, PII, IPs]
        Filter -->|Keep| Logical[Retain Logical Error Nodes]
        
        Logical --> Regex[Compiled Regex Pass<br/><i>Replace dynamic strings with PLACEHOLDER</i>]
    end
    
    subgraph Phase 3: Deterministic Hashing
        Regex --> Sort[Alphabetical Sort by Node Path<br/><i>Ensures consistent ordering</i>]
        Sort --> Concat[Concatenate into Fingerprint String]
        Concat --> Hash[SHA-256 Hash Algorithm]
    end
    
    Hash --> Key([Generated Lookup Key])
    Key --> Cache[(L1 .NET Memory Cache)]
`