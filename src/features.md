---
featureGroups:
  - category: Build
    groups:
      - name: Edge Application
        description: "Build serverless applications and run them anywhere: Azion's—operated network edge, remote-devices, on-premises, and multi-cloud, on an easy and simple way."
        pricingUrl: "https://www.azion.com/en/documentation/products/pricing/#edge-application"
        showGroupLine: true
        features:
          - name: Total Data Transfer
            description: "Data transfer between your edge applications and your users."
            pricingUrl: "https://www.azion.com/en/documentation/products/pricing/#data-transfer"
            free: 1TB / month
            pro: 1TB / month
            business: 5TB / month
            enterprise: Custom
          - name: Requests
            description: "Process HTTP/HTTPS requests at the edge with automatic scaling."
            pricingUrl: "https://www.azion.com/en/documentation/products/pricing/#requests"
            free: 10M / month
            pro: 10M / month
            business: 50M / month
            enterprise: Custom
          - name: Application Accelerator
            description: "Faster applications and APIs with protocol optimizations and advanced request and response rules"
            pricingUrl: "https://www.azion.com/en/documentation/products/pricing/#application-accelerator"
            free: 100GB / month
            pro: 100GB / month
            business: 500GB / month
            enterprise: Custom
          - name: Tiered Cache
            description: "Multi-layer caching strategy for improved performance and reduced origin load."
            pricingUrl: "https://www.azion.com/en/documentation/products/pricing/#tiered-cache"
            free: false
            pro: false
            business: true
            enterprise: true
          - name: Edge Cache
            description: "Cache your content at the edge for faster delivery and reduced origin costs."
            pricingUrl: "https://www.azion.com/en/documentation/products/pricing/#edge-cache"
            free: 1k purge operations / month
            pro: 1k purge operations / month
            business: 1k purge operations / month
            enterprise: Custom
          - name: Image Processor
            description: "Optimize and transform images on-the-fly at the edge."
            pricingUrl: "https://www.azion.com/en/documentation/products/pricing/#image-processor"
            free: 5k optimizations / month
            pro: 10k optimizations / month
            business: 10k optimizations / month
            enterprise: Custom
          - name: Live Ingest
            preview: true
            description: "Ingest live video streams and process them at the edge for real-time delivery."
            pricingUrl: "https://www.azion.com/en/documentation/products/pricing/#live-ingest"
            free: false
            pro: false
            business: false
            enterprise: Add-on
      - name: Edge Functions
        description: "Run event-driven serverless applications at the edge of the network, closer to your users."
        pricingUrl: "https://www.azion.com/en/documentation/products/pricing/#edge-functions"
        showGroupLine: true
        features:
          - name: Compute time
            description: "Execute your code at the edge with predictable pricing based on compute time."
            pricingUrl: "https://www.azion.com/en/documentation/products/pricing/#compute-time"
            free: 100k seconds / month
            pro: 100k seconds / month
            business: 500k seconds / month
            enterprise: Custom
          - name: Invocations
            description: "Pay only for the function executions you need, with automatic scaling."
            pricingUrl: "https://www.azion.com/en/documentation/products/pricing/#invocations"
            free: 3M invocations / month
            pro: 3M invocations / month
            business: 15M invocations / month
            enterprise: Custom

  - category: Store
    groups:
      - name: Edge Storage
        preview: true
        showGroupLine: true
        description: "Combining the reliability of object storage with enhanced performance at the edge."
        pricingUrl: "https://www.azion.com/en/documentation/products/pricing/#edge-storage"
        features:
          - name: Total Storage
            description: "Store your data at the edge with high durability and availability."
            pricingUrl: "https://www.azion.com/en/documentation/products/pricing/#total-storage"
            free: 10GB / month
            pro: 10GB / month
            business: 50GB / month
            enterprise: Custom
          - name: Class A Operations
            description: "Perform high-cost storage operations like PUT, COPY, POST."
            pricingUrl: "https://www.azion.com/en/documentation/products/pricing/#class-a-operations"
            free: 10k / month
            pro: 100k / month
            business: 1M / month
            enterprise: Custom
          - name: Class B Operations
            description: "Perform standard operations like GET, SELECT, HEAD."
            pricingUrl: "https://www.azion.com/en/documentation/products/pricing/#class-b-operations"
            free: 100k / month
            pro: 1M / month
            business: 10M / month
            enterprise: Custom
          - name: Class C Operations
            description: "Access metadata and list objects with minimal cost."
            pricingUrl: "https://www.azion.com/en/documentation/products/pricing/#class-c-operations"
            free: true
            pro: true
            business: true
            enterprise: true
      - name: Edge SQL
        preview: true
        showGroupLine: true
        description: "Azion Edge SQL is an edge-native SQL solution designed for serverless applications."
        pricingUrl: "https://www.azion.com/en/documentation/products/store/edge-sql/"
        features:
          - name: Total Storage
            description: "Store your relational data at the edge with high performance."
            pricingUrl: "https://www.azion.com/en/documentation/products/pricing/#edge-sql-storage"
            free: 5GB / month
            pro: 20GB / month
            business: 100GB / month
            enterprise: Custom
          - name: Rows Read
            description: "Query your data with low latency from the nearest edge location."
            pricingUrl: "https://www.azion.com/en/documentation/products/pricing/#rows-read"
            free: 100k reads / month
            pro: 1M reads / month
            business: 5M reads / month
            enterprise: Custom
          - name: Rows Written
            description: "Write data to your edge database with immediate consistency."
            pricingUrl: "https://www.azion.com/en/documentation/products/pricing/#rows-written"
            free: 1k writes / month
            pro: 10k writes / month
            business: 50k writes / month
            enterprise: Custom
                      
  - category: Secure
    groups:
      - name: Edge Firewall
        description: "Azion Edge Firewall is a security product that protects your servers and applications from the network layer to the application layer."
        pricingUrl: "https://www.azion.com/en/documentation/products/pricing/#secure"
        showGroupLine: true
        features:
          - name: Network Layer Protection
            description: "Protect your infrastructure from network-level threats and DDoS attacks."
            pricingUrl: "https://www.azion.com/en/documentation/products/pricing/#network-layer-protection"
            free: false
            pro: 1M requests / month
            business: 10M requests / month
            enterprise: Custom
          - name: Web Application Firewall
            description: "Secure your web applications from numerous dangers, ranging from OWASP Top 10 threats to sophisticated zero-day attacks."
            pricingUrl: "https://www.azion.com/en/documentation/products/pricing/#web-application-firewall"
            free: false
            pro: 100k requests / month
            business: 1M requests / month
            enterprise: Custom
          - name: DDoS Protection
            description: "Automatic protection against distributed denial-of-service attacks."
            pricingUrl: "https://www.azion.com/en/documentation/products/pricing/#ddos-protection"
            free: true
            pro: true
            business: true
            enterprise: true
          - name: Bot Manager
            preview: true
            description: "Identify and manage bot traffic with advanced detection and response capabilities."
            pricingUrl: "https://www.azion.com/en/documentation/products/pricing/#bot-manager"
            free: false
            pro: Lite
            business: Lite
            enterprise: Advanced           
      - name: Edge DNS
        description: "Improve the security and availability of your applications using Azion's resilient Authoritative DNS service."
        pricingUrl: "https://www.azion.com/en/documentation/products/pricing/#edge-dns"
        showGroupLine: true
        features:
          - name: Hosted Zones
            description: "Manage your DNS zones with high availability and low latency."
            pricingUrl: "https://www.azion.com/en/documentation/products/pricing/#hosted-zones"
            free: 2 zones included
            pro: 10 zones included
            business: 50 zones included
            enterprise: Custom
          - name: Standard Queries
            description: "Process DNS queries with automatic global load balancing."
            pricingUrl: "https://www.azion.com/en/documentation/products/pricing/#standard-queries"
            free: 100k / month
            pro: 100k requests / month
            business: 500k requests / month
            enterprise: Custom
      - name: Edge Connector
        showGroupLine: true
        features:
          - name: Load Balancer
            description: "Distribute traffic across multiple origins for improved reliability."
            pricingUrl: "https://www.azion.com/en/documentation/products/pricing/#load-balancer"
            free: false
            pro: Add-on
            business: Add-on
            enterprise: Custom
          - name: Origin Shield
            description: "Additional layer of protection for your origin servers."
            pricingUrl: "https://www.azion.com/en/documentation/products/pricing/#origin-shield"
            free: false
            pro: false
            business: false
            enterprise: Add-on
      - name: Digital Certificates
        showGroupLine: true
        features:
          - name: Custom Certificate
            description: "Use your own SSL/TLS certificates for enhanced security."
            pricingUrl: "https://www.azion.com/en/documentation/products/pricing/#custom-certificate"
            free: false
            pro: false
            business: true
            enterprise: true
          - name: Let's Encrypt Certificate
            description: "Free automated SSL/TLS certificate management."
            pricingUrl: "https://www.azion.com/en/documentation/products/pricing/#lets-encrypt"
            free: true
            pro: true
            business: true
            enterprise: true
          - name: Secure Key Store (Proposal)
            description: "Securely store and manage cryptographic keys at the edge."
            pricingUrl: "https://www.azion.com/en/documentation/products/pricing/#secure-key-store"
            free: false
            pro: false
            business: false
            enterprise: Add-on            
            
  - category: Deploy
    groups:
      - name: Edge Orchestrator
        showGroupLine: true
        features:
          - name: Edge Nodes
            description: "Deploy and manage your edge infrastructure at scale."
            pricingUrl: "https://www.azion.com/en/documentation/products/pricing/#edge-nodes"
            free: Up to 10 nodes
            pro: Up to 50 nodes
            business: Up to 100 nodes
            enterprise: Custom

  - category: Observe
    groups:
      - name: Analytics
        showGroupLine: true
        features:
          - name: Data Stream
            description: "Stream real-time logs and metrics to your preferred analytics platform."
            pricingUrl: "https://www.azion.com/en/documentation/products/pricing/#data-stream"
            free: false
            pro: false
            business: Add-on
            enterprise: true
          - name: Real-Time Events
            preview: true
            description: "Access detailed event logs with minimal latency."
            pricingUrl: "https://www.azion.com/en/documentation/products/pricing/#real-time-events"
            free: Last hour
            pro: Last 3 days
            business: Last 7 days
            enterprise: Custom
          - name: Real-Time Metrics
            description: "Monitor your edge applications with comprehensive metrics."
            pricingUrl: "https://www.azion.com/en/documentation/products/pricing/#real-time-metrics"
            free: Last 30 days
            pro: Last 30 days
            business: Last 90 days
            enterprise: Custom
          - name: Edge Pulse
            description: "Monitor real user metrics and performance data."
            pricingUrl: "https://www.azion.com/en/documentation/products/pricing/#edge-pulse"
            free: true
            pro: true
            business: true
            enterprise: true

  - category: AI
    groups:
      - name: Edge AI
        showGroupLine: false
        features:
          - name: Edge AI
            description: "Run machine learning models at the edge for real-time inference."
            pricingUrl: "https://www.azion.com/en/documentation/products/pricing/#edge-ai"
            free: false
            pro: false
            business: false
            enterprise: Custom
  
  - category: Dev Tools
    groups:
      - name: Dev Tools
        showGroupLine: false
        features:
          - name: CLI
            description: "Command-line interface for managing Azion resources."
            pricingUrl: "https://www.azion.com/en/documentation/products/pricing/#cli"
            free: true
            pro: true
            business: true
            enterprise: true
          - name: API
            description: "RESTful API for programmatic control of Azion services."
            pricingUrl: "https://www.azion.com/en/documentation/products/pricing/#api"
            free: true
            pro: true
            business: true
            enterprise: true
          - name: GraphQL API
            description: "Modern API for flexible queries and mutations."
            pricingUrl: "https://www.azion.com/en/documentation/products/pricing/#graphql-api"
            free: true
            pro: true
            business: true
            enterprise: true
          - name: Terraform
            description: "Infrastructure as Code for Azion resources."
            pricingUrl: "https://www.azion.com/en/documentation/products/pricing/#terraform"
            free: true
            pro: true
            business: true
            enterprise: true
            
  - category: Platform
    groups:
      - name: Azion Web Platform
        showGroupLine: true
        features:
          - name: Team seats (Proposal)
            description: "Manage team access and permissions."
            pricingUrl: "https://www.azion.com/en/documentation/products/pricing/#team-seats"
            free: 5 seats
            pro: 10 seats
            business: 50 seats
            enterprise: +50 seats
          - name: Single-Sign-On (SAML)
            description: "Enterprise authentication integration."
            pricingUrl: "https://www.azion.com/en/documentation/products/pricing/#sso"
            free: false
            pro: false
            business: false
            enterprise: true
          - name: SCIM (Proposal)
            description: "Automated user provisioning and management."
            pricingUrl: "https://www.azion.com/en/documentation/products/pricing/#scim"
            free: false
            pro: false
            business: false
            enterprise: true
          - name: Workspaces
            description: "Isolated environments for different teams or projects."
            pricingUrl: "https://www.azion.com/en/documentation/products/pricing/#workspaces"
            free: 1 workspace
            pro: 1 workspace
            business: 1 workspace
            enterprise: Custom
          - name: Workloads
            description: "Deploy and manage multiple applications."
            pricingUrl: "https://www.azion.com/en/documentation/products/pricing/#workloads"
            free: 10 workloads
            pro: 10 workloads
            business: 50 workloads
            enterprise: Custom
          - name: Custom Network Map
            description: "Define custom edge network topology."
            pricingUrl: "https://www.azion.com/en/documentation/products/pricing/#custom-network-map"
            free: false
            pro: false
            business: false
            enterprise: Add-on
             
  - category: Support
    groups:
      - name: Support
        showGroupLine: false
        features:
          - name: Ticket Support
            description: "Get help from our technical support team."
            pricingUrl: "https://www.azion.com/en/documentation/products/pricing/#ticket-support"
            free: false
            pro: true
            business: true
            enterprise: true
          - name: Chat Support
            description: "Real-time assistance via chat."
            pricingUrl: "https://www.azion.com/en/documentation/products/pricing/#chat-support"
            free: false
            pro: false
            business: false
            enterprise: Add-on
          - name: Phone Support
            description: "Direct phone access to support team."
            pricingUrl: "https://www.azion.com/en/documentation/products/pricing/#phone-support"
            free: false
            pro: false
            business: false
            enterprise: true
          - name: Communnity Access
            description: "Access to Azion's community resources."
            pricingUrl: "https://www.azion.com/en/documentation/products/pricing/#community"
            free: true
            pro: true
            business: true
            enterprise: true
          - name: Azion Copilot
            description: "AI-powered assistance for development."
            pricingUrl: "https://www.azion.com/en/documentation/products/pricing/#copilot"
            free: true
            pro: true
            business: true
            enterprise: true
            
  - category: Professional Services
    groups:
      - name: Professional Services
        showGroupLine: false
        features:
          - name: Integration Services
            description: "Expert assistance with platform integration."
            pricingUrl: "https://www.azion.com/en/documentation/products/pricing/#integration-services"
            free: false
            pro: false
            business: 5 hours / year included
            enterprise: 10 hours / year included
          - name: Best Practices Review
            description: "Expert review of your implementation."
            pricingUrl: "https://www.azion.com/en/documentation/products/pricing/#best-practices"
            free: false
            pro: false
            business: false
            enterprise: 10 hours / year included
          - name: Business Events Support
            description: "Support for high-traffic events."
            pricingUrl: "https://www.azion.com/en/documentation/products/pricing/#events-support"
            free: false
            pro: false
            business: false
            enterprise: 1 event/year included
          - name: Technical Account Manager
            description: "Dedicated technical resource."
            pricingUrl: "https://www.azion.com/en/documentation/products/pricing/#tam"
            free: false
            pro: false
            business: false
            enterprise: Add-on
          - name: Instructor-Led Training
            description: "Personalized training sessions."
            pricingUrl: "https://www.azion.com/en/documentation/products/pricing/#training"
            free: false
            pro: false
            business: false
            enterprise: Add-on
          - name: Managed Configurations Service
            description: "Expert management of your configurations."
            pricingUrl: "https://www.azion.com/en/documentation/products/pricing/#managed-config"
            free: false
            pro: false
            business: false
            enterprise: Add-on
          - name: Security Response Team
            description: "Dedicated security incident response."
            pricingUrl: "https://www.azion.com/en/documentation/products/pricing/#security-team"
            free: false
            pro: false
            business: false
            enterprise: Add-on
          - name: Application Development
            description: "Custom application development services."
            pricingUrl: "https://www.azion.com/en/documentation/products/pricing/#app-dev"
            free: false
            pro: false
            business: false
            enterprise: Add-on            
          - name: Platform Feature Development
            description: "Custom platform feature development."
            pricingUrl: "https://www.azion.com/en/documentation/products/pricing/#feature-dev"
            free: false
            pro: false
            business: false
            enterprise: Add-on
          - name: Universal Data Migration
            description: "Assisted data migration to Edge Storage."
            pricingUrl: "https://www.azion.com/en/documentation/products/pricing/#data-migration"
            free: false
            pro: false
            business: false
            enterprise: Included with Edge Storage

  - category: Compliance
    groups:
      - name: Compliance
        showGroupLine: false
        features:
          - name: PCI DSS 4.0
            description: "Payment Card Industry Data Security Standard compliance."
            pricingUrl: "https://www.azion.com/en/documentation/products/pricing/#pci-dss"
            free: false
            pro: false
            business: true
            enterprise: true
          - name: SOC 2 Type 2 / SOC 3
            description: "Service Organization Control compliance."
            pricingUrl: "https://www.azion.com/en/documentation/products/pricing/#soc"
            free: false
            pro: false
            business: true
            enterprise: true
          - name: FIPS 140-2 Level 3
            description: "Federal Information Processing Standards compliance."
            pricingUrl: "https://www.azion.com/en/documentation/products/pricing/#fips"
            free: false
            pro: false
            business: false
            enterprise: Included with Secure Key Store