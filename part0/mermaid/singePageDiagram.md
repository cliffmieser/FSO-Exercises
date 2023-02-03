#

```mermaid
sequenceDiagram
    actor User
    participant Browser
    participant Server

    User->>Browser:Enters data in input feild
    Browser->>Server:POST User input
    activate Server
    Server->>Browser: Responds with 201 code
    deactivate Server

```